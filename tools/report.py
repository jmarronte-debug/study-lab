# Nightly AP Bio report data for Ana's Study Lab. Usage: RPW='<reader password>' python3 report.py > report.json
# Prints JSON: today's sessions, missed questions, plan status, and every written answer not yet graded (with the rubric).
import json,urllib.request,urllib.error,datetime,subprocess,os
from zoneinfo import ZoneInfo
K="AIzaSyAPlhZsIOS-zwgqsOZf58duvVUUnvo4JsY";P="ana-study-11th";E="jmarronte+reader@gmail.com";W=os.environ["RPW"]
BASE=f"https://firestore.googleapis.com/v1/projects/{P}/databases/(default)/documents/students/ana"
def j(u,d=None,h={}):
    r=urllib.request.Request(u,data=json.dumps(d).encode() if d else None,headers={"Content-Type":"application/json",**h});return json.load(urllib.request.urlopen(r,timeout=30))
t=j(f"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key={K}",{"email":E,"password":W,"returnSecureToken":True})["idToken"]
H={"Authorization":"Bearer "+t}
def v(x):
    if x is None:return None
    k=next(iter(x));y=x[k]
    if k=="arrayValue": return [v(i) for i in y.get("values",[])]
    if k=="mapValue": return {a:v(b) for a,b in y.get("fields",{}).items()}
    if k=="integerValue": return int(y)
    if k=="nullValue": return None
    return y
def coll(name):
    out=[];tok=""
    while True:
        d=j(f"{BASE}/{name}?pageSize=300"+(f"&pageToken={tok}" if tok else ""),h=H)
        out+= [{a:v(b) for a,b in x.get("fields",{}).items()} for x in d.get("documents",[])]
        tok=d.get("nextPageToken")
        if not tok: return out
S=coll("sessions")
try: G=coll("grades"); grades_ok=True
except urllib.error.HTTPError: G=[]; grades_ok=False
graded={(g.get("f"),int(g.get("t"))) for g in G if g.get("t") is not None}
js=urllib.request.urlopen("https://raw.githubusercontent.com/jmarronte-debug/study-lab/main/questions.js",timeout=30).read().decode()
m=json.loads(subprocess.run(["node","-e",js+";console.log(JSON.stringify({T:TOPICS,Q:Object.fromEntries(MCQ.map(q=>[q.id,q])),F:Object.fromEntries(FRQ.map(f=>[f.id,f])),PLAN:typeof PLAN!=='undefined'?PLAN:[]}))"],capture_output=True,text=True).stdout)
tz=ZoneInfo("America/New_York");day=lambda ms:datetime.datetime.fromtimestamp(int(ms)/1000,tz).date();now=datetime.datetime.now(tz);today=now.date()
hm=lambda ms:datetime.datetime.fromtimestamp(int(ms)/1000,tz).strftime("%a %-m/%-d %-I:%M %p")
A=[a for s in S for a in (s.get("a") or [])];Fr=[f for s in S for f in (s.get("f") or [])];Sm=[(x,s.get("dev")) for s in S for x in (s.get("s") or [])]
tA=[a for a in A if day(a["t"])==today];tS=[(x,d) for x,d in Sm if day(x["t"])==today]
isdaily=lambda l:str(l).startswith("Today") and "written" not in str(l) and "partial" not in str(l)
daily={day(x["t"]) for x,_ in Sm if isdaily(x.get("l",""))}
streak=0;d=today if today in daily else today-datetime.timedelta(1)
while d in daily:streak+=1;d-=datetime.timedelta(1)
last7=sum((today-datetime.timedelta(i)) in daily for i in range(7))
st={}
for a in A:
    q=m["Q"].get(a["q"])
    if q:s=st.setdefault(q["t"],[0,0]);s[0]+=1;s[1]+=bool(a["ok"])
weak=sorted([(c/n,k,n) for k,(n,c) in st.items() if n>=4])[:3]
# plan status
labels=[x.get("l","") for x,_ in Sm if isdaily(x.get("l",""))]
plan=[]
for p in m["PLAN"]:
    if p["topic"]=="quiz": plan.append({"date":p["date"],"what":p["title"]}); continue
    plan.append({"date":p["date"],"what":p["idea"]+": "+p["title"],"done":any((p["idea"]+":") in l for l in labels)})
missed_ideas=[p["what"] for p in plan if "done" in p and not p["done"] and p["date"]<str(today)]
todays_plan=next((p for p in plan if p["date"]==str(today)),None)
next_quiz=next((p for p in plan if "done" not in p and p["date"]>=str(today)),None)
# missed MCQs today
missed=[]
for a in tA:
    q=m["Q"].get(a["q"])
    if q and not a["ok"]:
        missed.append({"topic":m["T"][q["t"]]["short"],"question":q["q"],"correct":(str(q.get("answer"))+" "+q.get("unit","")) if q.get("type")=="num" else q["opts"][q["a"]]})
# written answers awaiting grading (any day), with rubric
written=[]
for f in Fr:
    F=m["F"].get(f["f"])
    if not F or not f.get("ans") or not any((x or "").strip() for x in f["ans"]): continue
    if (f["f"],int(f["t"])) in graded: continue
    written.append({"f":f["f"],"t":int(f["t"]),"when":hm(f["t"]),"title":F["title"],"topic":m["T"][F["t"]]["name"],"short":bool(F.get("short")),"stem":F["stem"],
      "parts":[{"verb":p["verb"],"prompt":p["text"],"pts":p["pts"],"rubric":p["rubric"],"her_answer":(f["ans"][i] if i<len(f["ans"]) else "") or ""} for i,p in enumerate(F["parts"])],
      "max":sum(p["pts"] for p in F["parts"])})
recent_grades=[{"title":m["F"].get(g.get("f"),{}).get("title"),"pts":g.get("pts"),"max":g.get("max"),"when":hm(g["t"])} for g in sorted(G,key=lambda g:int(g.get("t",0)))[-10:]]
print(json.dumps({"now":now.strftime("%a %b %-d, %-I:%M %p ET"),"today":str(today),
 "sessions_today":[{"label":x.get("l"),"score":x.get("sc"),"max":x.get("mx"),"time":hm(x["t"]),"minutes":round((x.get("sec") or 0)/60),"device":dv} for x,dv in tS],
 "answers_today":len(tA),"correct_today":sum(bool(a["ok"]) for a in tA),"missed_today":missed,
 "todays_plan":todays_plan,"missed_plan_ideas":missed_ideas,"next_quiz":next_quiz,
 "streak_days":streak,"daily_sessions_last7":last7,"total_answers":len(A),
 "topic_accuracy":[{"topic":m["T"][k]["name"],"pct":round(100*c/n),"n":n} for k,(n,c) in sorted(st.items())],
 "weakest_topics":[{"topic":m["T"][k]["name"],"pct":round(100*p),"n":n} for p,k,n in weak],
 "written_to_grade":written,"grades_readable":grades_ok,"recent_grades":recent_grades},indent=1,ensure_ascii=False))
