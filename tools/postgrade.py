# Saves Claude's grades so they show in the Study Lab under "Written work".
# Usage: RPW='<reader password>' python3 postgrade.py grades.json
# grades.json = [{"f":"U2S2","t":1790000000000,"pts":1.5,"max":2,"parts":[{"pts":1,"fb":"..."},{"pts":0.5,"fb":"..."}],"overall":"..."}]
import json,sys,os,urllib.request,time
K="AIzaSyAPlhZsIOS-zwgqsOZf58duvVUUnvo4JsY";P="ana-study-11th";E="jmarronte+reader@gmail.com";W=os.environ["RPW"]
def j(u,d=None,h={},method=None):
    r=urllib.request.Request(u,data=json.dumps(d).encode() if d is not None else None,headers={"Content-Type":"application/json",**h},method=method);return json.load(urllib.request.urlopen(r,timeout=30))
t=j(f"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key={K}",{"email":E,"password":W,"returnSecureToken":True})["idToken"]
def enc(x):
    if x is None: return {"nullValue":None}
    if isinstance(x,bool): return {"booleanValue":x}
    if isinstance(x,int): return {"integerValue":str(x)}
    if isinstance(x,float): return {"doubleValue":x}
    if isinstance(x,str): return {"stringValue":x}
    if isinstance(x,list): return {"arrayValue":{"values":[enc(i) for i in x]}}
    if isinstance(x,dict): return {"mapValue":{"fields":{k:enc(v) for k,v in x.items()}}}
    raise TypeError(type(x))
ok=0
for g in json.load(open(sys.argv[1])):
    g["t"]=int(g["t"]); g["graded"]=int(time.time()*1000)
    doc=f"{g['f']}-{g['t']}"
    j(f"https://firestore.googleapis.com/v1/projects/{P}/databases/(default)/documents/students/ana/grades/{doc}",{"fields":{k:enc(v) for k,v in g.items()}},h={"Authorization":"Bearer "+t},method="PATCH"); ok+=1
print(f"saved {ok} grade(s)")
