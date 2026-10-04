const TOPICS = {
  chem:     {name:"Chemistry review: atoms & bonds", short:"Chem review"},
  water:    {name:"Water, polarity & bonds",      short:"Water & polarity"},
  groups:   {name:"Carbon & functional groups",   short:"Functional groups"},
  build:    {name:"Monomers, polymers & reactions", short:"Build & break"},
  carbs:    {name:"Carbohydrates",                short:"Carbs"},
  lipids:   {name:"Lipids",                       short:"Lipids"},
  proteins: {name:"Proteins",                     short:"Proteins"},
  nucleic:  {name:"Nucleic acids",                short:"Nucleic acids"},
  frq:      {name:"FRQ skills & data",            short:"FRQ skills"}
};

// MCQ: {id, t(topic), q, opts[4], a(index), why(correct explanation), wrong{idx:text}}
const MCQ = [
// ---------- CHEMISTRY REVIEW ----------
{id:"a1",t:"chem",q:"⁷⁹Br and ⁸¹Br are isotopes of bromine. They differ in their number of",
 opts:["protons","electrons","neutrons","valence shells"],a:2,
 why:"Isotopes are the same element (same 35 protons) with different neutron counts, so different mass. This is the exact example from the chemistry review slide.",
 wrong:{0:"Changing protons would make a different element.",1:"Changing electrons makes an ion, not an isotope.",3:"Both have the same electron arrangement."}},
{id:"a2",t:"chem",q:"A bromide ion (Br⁻) differs from a neutral bromine atom in that it has",
 opts:["one more proton","one more electron","one fewer neutron","one fewer electron"],a:1,
 why:"Ions form by gaining or losing electrons. Gaining an electron gives a negative charge (Br⁻: 35 protons, 36 electrons).",
 wrong:{0:"Proton count identifies the element and never changes in ion formation.",2:"Neutron changes make isotopes, not ions.",3:"Losing an electron would make a POSITIVE ion."}},
{id:"a3",t:"chem",q:"Which subatomic particle determines the identity of an element?",
 opts:["Neutron","Electron","Proton","Valence electron"],a:2,
 why:"The number of protons (atomic number) defines the element. Neutrons add mass; electrons determine charge and bonding.",
 wrong:{0:"Neutrons vary among isotopes of the same element.",1:"Electrons vary among ions of the same element.",3:"Valence electrons govern bonding behavior, not identity."}},
{id:"a4",t:"chem",q:"An atom's chemical bonding behavior depends primarily on its",
 opts:["number of neutrons","valence electrons (outer shell)","atomic mass","number of isotopes"],a:1,
 why:"Valence electrons are the ones available to be shared or transferred; they determine how many bonds an atom forms (C 4, N 3, O 2, H 1).",
 wrong:{0:"Neutrons affect mass only.",2:"Mass doesn't govern bonding.",3:"Isotopes don't change bonding behavior."}},
{id:"a5",t:"chem",q:"About 96% of living matter is made of which four elements?",
 opts:["C, H, O, P","C, H, O, N","C, N, S, P","H, O, Ca, K"],a:1,
 why:"CHON. Phosphorus, sulfur, calcium and potassium make up most of the remaining 4%.",
 wrong:{0:"Phosphorus is in the next tier, not the big four.",2:"Missing hydrogen and oxygen — the two most abundant.",3:"Ca and K are trace-level compared with C, H, O, N."}},
{id:"a6",t:"chem",q:"Electronegativity is best defined as",
 opts:["the number of electrons in an atom's outer shell","an atom's ability to attract shared electrons in a chemical bond","the charge of an ion","the energy released when a bond forms"],a:1,
 why:"Oxygen's high electronegativity pulls shared electrons toward it in the O–H bond, giving water its partial charges and polarity.",
 wrong:{0:"That's the valence electron count.",2:"That's ionic charge.",3:"That's bond energy."}},
{id:"a7",t:"chem",q:"In a NONPOLAR covalent bond, electrons are",
 opts:["transferred from one atom to another","shared unequally, creating partial charges","shared equally between atoms of similar electronegativity","not involved"],a:2,
 why:"Equal sharing (as in C–H or C–C) means no partial charges — the basis of nonpolar hydrocarbons and hydrophobic regions.",
 wrong:{0:"Transfer is ionic bonding.",1:"Unequal sharing is a POLAR covalent bond.",3:"All bonds involve electrons."}},
{id:"a8",t:"chem",q:"Table salt (NaCl) dissolves in water because",
 opts:["its covalent bonds are broken by heat","its ionic bond ionizes — Na⁺ and Cl⁻ separate and are surrounded by polar water molecules","water is nonpolar","NaCl forms hydrogen bonds"],a:1,
 why:"Ionic compounds are salts that dissociate in water; each ion is surrounded by oppositely charged ends of water molecules. Her note: ionic bonds are 'weak — ionize in water'.",
 wrong:{0:"NaCl has an ionic bond, not covalent.",2:"Water is polar — that's why it dissolves ions.",3:"Ions attract water's partial charges, but that isn't hydrogen bonding."}},

// ---------- WATER / POLARITY / BONDS ----------
{id:"w1",t:"water",q:"Water is a polar molecule primarily because",
 opts:["hydrogen bonds form within each water molecule","oxygen is more electronegative than hydrogen, so shared electrons sit closer to the oxygen","water contains both ionic and covalent bonds","the two hydrogens repel each other"],a:1,
 why:"Oxygen pulls the shared electrons toward itself, giving O a partial negative charge (δ−) and each H a partial positive charge (δ+). That uneven charge distribution is polarity.",
 wrong:{0:"Hydrogen bonds form BETWEEN water molecules, not within one. Within a molecule the O–H bonds are polar covalent.",2:"Water has only polar covalent bonds — no ionic bonds.",3:"Hydrogen repulsion has nothing to do with polarity; the cause is electronegativity difference."}},
{id:"w2",t:"water",q:"Which statement about hydrogen bonds is correct?",
 opts:["They are the strongest bonds in a water molecule","They are covalent bonds between H and O","They are weak attractions between a partially positive H on one molecule and a partially negative N, O, or F on another","They only occur in water"],a:2,
 why:"An H-bond is an intermolecular force (IMF): the δ+ hydrogen (bonded to N, O, or F) of one molecule is attracted to the δ− N, O, or F of another. Individually weak, collectively powerful.",
 wrong:{0:"Within a molecule the bonds are covalent and much stronger. H-bonds are between molecules.",1:"H-bonds are not covalent — no electrons are shared.",3:"H-bonds occur in DNA base pairing, protein secondary structure, and anywhere N–H or O–H groups are present."}},
{id:"w3",t:"water",q:"A water strider can walk on the surface of a pond. Which property of water best explains this?",
 opts:["Adhesion","High specific heat","Cohesion producing surface tension","Evaporative cooling"],a:2,
 why:"Cohesion — water molecules H-bonding to one another — makes the surface behave like a stretched film (surface tension) that supports the insect.",
 wrong:{0:"Adhesion is water sticking to OTHER polar substances, like xylem walls.",1:"Specific heat is about temperature change, not surface behavior.",3:"Evaporative cooling explains sweating, not surface support."}},
{id:"w4",t:"water",q:"Water moves up a plant's xylem against gravity. Which pair of properties is responsible?",
 opts:["Cohesion and adhesion","Surface tension and floating ice","High specific heat and evaporative cooling","Versatile solvent and adhesion"],a:0,
 why:"Adhesion sticks water to the xylem walls; cohesion pulls the rest of the water column along behind it. Together: capillary action.",
 wrong:{1:"Floating ice is irrelevant to transport in a tube.",2:"These are thermal properties, not transport properties.",3:"Solvent ability doesn't move water upward."}},
{id:"w5",t:"water",q:"A researcher heats 100 mL of water and 100 mL of ethanol with the same energy input. The ethanol's temperature rises faster. Which best explains the difference?",
 opts:["Ethanol molecules form stronger hydrogen bonds than water molecules","Water has a lower specific heat capacity than ethanol","Water's hydrogen bonds absorb more energy before its temperature increases","Ethanol has more cohesive properties than water"],a:2,
 why:"This is the exact question from the class slides. Water's extensive H-bonding means added energy first goes into breaking H-bonds before it can raise molecular motion (temperature). That's high specific heat.",
 wrong:{0:"Backwards: water H-bonds more extensively than ethanol.",1:"Backwards: water has a HIGHER specific heat, which is why it heats slowly.",3:"Backwards, and cohesion isn't the direct explanation for heating rate."}},
{id:"w6",t:"water",q:"Why does ice float on liquid water?",
 opts:["Ice contains fewer hydrogen bonds than liquid water","Hydrogen bonds in ice hold molecules in an open lattice, making solid water less dense than liquid","Ice is a nonpolar form of water","Dissolved gases in ice make it lighter"],a:1,
 why:"In ice, each water molecule is locked into 4 stable H-bonds forming a spaced-out crystal lattice, so molecules are farther apart than in liquid water. Water is densest at 4 °C.",
 wrong:{0:"Ice actually has MORE stable H-bonds than liquid water; that's what creates the open lattice.",2:"Water is polar in every state.",3:"Density of ice is about molecular spacing, not dissolved gas."}},
{id:"w7",t:"water",q:"Coastal cities like Santa Barbara stay cooler in summer than inland cities like Palm Springs. Which property of water is responsible?",
 opts:["Floating ice","High specific heat","Adhesion","Versatile solvent"],a:1,
 why:"The ocean absorbs huge amounts of heat with only a small temperature change (high specific heat), moderating the climate nearby.",
 wrong:{0:"No ice is involved.",2:"Adhesion concerns sticking to surfaces.",3:"Dissolving solutes doesn't moderate temperature."}},
{id:"w8",t:"water",q:"Which is the correct order of bond/interaction strength, strongest to weakest?",
 opts:["Hydrogen bond > ionic bond > covalent bond","Covalent bond > ionic bond > hydrogen bond","Ionic bond > hydrogen bond > covalent bond","Hydrogen bond > covalent bond > ionic bond"],a:1,
 why:"Covalent (shared electrons) are strongest and hold molecules together; ionic bonds fall apart (ionize) in water; hydrogen bonds are individually weak IMFs between molecules.",
 wrong:{0:"Reversed.",2:"Covalent is the strongest, not the weakest.",3:"Hydrogen bonds are the weakest of the three."}},
{id:"w9",t:"water",q:"In a covalent bond, electrons are ______; in an ionic bond, electrons are ______.",
 opts:["transferred; shared","shared; transferred","shared equally; shared unequally","lost; gained"],a:1,
 why:"Covalent = shared (equally in nonpolar, unequally in polar). Ionic = transferred, producing charged ions that attract (like Na⁺ and Cl⁻).",
 wrong:{0:"Reversed.",2:"That describes nonpolar vs polar COVALENT bonds, not covalent vs ionic.",3:"Only ionic bonding involves losing/gaining."}},
{id:"w10",t:"water",q:"A solution has a high concentration of H⁺ ions. It is",
 opts:["basic, with a high pH","acidic, with a low pH","neutral","acidic, with a high pH"],a:1,
 why:"pH measures H⁺ concentration inversely: more H⁺ = lower pH = acidic. Acids donate H⁺; bases take up H⁺.",
 wrong:{0:"High H⁺ is acidic and LOW pH.",2:"Neutral is pH 7 with balanced H⁺ and OH⁻.",3:"High H⁺ means low pH, not high."}},
{id:"w11",t:"water",q:"Living cells contain buffers. The function of a buffer is to",
 opts:["increase the pH of the cytoplasm","supply H⁺ ions for chemical reactions","resist changes in pH","dissolve nonpolar molecules"],a:2,
 why:"Living things tolerate only a narrow pH range. Buffers absorb or release H⁺ to prevent large pH swings.",
 wrong:{0:"Buffers don't push pH in one direction; they hold it steady.",1:"Buffers can release H⁺ but their job is stabilization, not supply.",3:"That's unrelated to pH."}},
{id:"w12",t:"water",q:"Which molecule would you expect to be hydrophobic?",
 opts:["A molecule with many –OH groups","A long hydrocarbon chain of only C and H","A molecule with an –NH₂ group","A molecule with a –PO₄ group"],a:1,
 why:"Nonpolar = hydrophobic. C and H share electrons nearly equally, so hydrocarbons have no polar regions. Remember: N and O are the clues for polar.",
 wrong:{0:"Hydroxyl groups are polar → hydrophilic.",2:"Amino groups are polar and charged → hydrophilic.",3:"Phosphate groups are polar and charged → hydrophilic."}},

// ---------- CARBON & FUNCTIONAL GROUPS ----------
{id:"g1",t:"groups",q:"Carbon is the backbone of all macromolecules mainly because it",
 opts:["is the most abundant element on Earth","can form four stable covalent bonds in many shapes","forms ionic bonds easily","is highly electronegative"],a:1,
 why:"Four valence positions let carbon build chains, branches, rings, and single/double/triple bonds — endless variety.",
 wrong:{0:"Oxygen is more abundant in living matter; abundance isn't the reason.",2:"Carbon almost always bonds covalently.",3:"Carbon has moderate electronegativity — that's why C–H bonds are nonpolar."}},
{id:"g2",t:"groups",q:"Two molecules have the identical formula C₆H₁₂O₆ but different structures and functions. They are",
 opts:["isotopes","ions","isomers","polymers"],a:2,
 why:"Isomers share a formula but differ in arrangement — and shape determines function. Thalidomide's two mirror-image isomers (one a sedative, one causing birth defects) were the class example.",
 wrong:{0:"Isotopes are atoms of the same element with different neutron counts.",1:"Ions are charged atoms or molecules.",3:"Polymers are long chains of monomers."}},
{id:"g3",t:"groups",q:"Which functional group is nonpolar?",
 opts:["Hydroxyl (–OH)","Methyl (–CH₃)","Carboxyl (–COOH)","Amino (–NH₂)"],a:1,
 why:"Methyl is just carbon and hydrogen, which share electrons nearly equally. Every other group listed contains O or N → polar.",
 wrong:{0:"Hydroxyl contains O → polar.",2:"Carboxyl is polar, negatively charged, and acidic.",3:"Amino is polar, positively charged, and basic."}},
{id:"g4",t:"groups",q:"Which functional group acts as a base by picking up an H⁺ from solution?",
 opts:["Carboxyl","Phosphate","Amino","Hydroxyl"],a:2,
 why:"–NH₂ accepts a proton to become –NH₃⁺ — that's a base, and it becomes positively charged.",
 wrong:{0:"Carboxyl DONATES H⁺ (–COOH → –COO⁻): acidic.",1:"Phosphate donates H⁺: acidic.",3:"Hydroxyl is polar but neither acidic nor basic in this context."}},
{id:"g5",t:"groups",q:"Which two functional groups are both polar, negatively charged, and acidic?",
 opts:["Hydroxyl and carbonyl","Amino and sulfhydryl","Carboxyl and phosphate","Methyl and carboxyl"],a:2,
 why:"Both –COOH and –PO₄ give up H⁺ in water, leaving a negative charge. Carboxyl is on fatty acids and amino acids; phosphate is on nucleotides, phospholipids, and ATP.",
 wrong:{0:"Both polar, but neither is charged or acidic.",1:"Amino is basic and positive; sulfhydryl is neither.",3:"Methyl is nonpolar."}},
{id:"g6",t:"groups",q:"A carbonyl group (C=O) located at the END of a carbon chain is a(n)",
 opts:["ketone","aldehyde","carboxyl","ester"],a:1,
 why:"Aldehyde = at the end. Ketone = kaptured in the middle.",
 wrong:{0:"A ketone's C=O is in the middle of the chain.",2:"A carboxyl is C=O plus –OH on the same carbon (–COOH).",3:"An ester is the bond linking glycerol to a fatty acid."}},
{id:"g7",t:"groups",q:"The sulfhydryl group (–SH) is important in proteins because",
 opts:["it forms the peptide bond","it makes the protein acidic","two of them can form a covalent disulfide bridge that stabilizes tertiary structure","it is the most polar functional group"],a:2,
 why:"Cysteine's –SH groups pair up as S–S disulfide bridges — the only covalent interaction stabilizing 3° and 4° structure, making them especially strong.",
 wrong:{0:"Peptide bonds form between carboxyl and amino groups.",1:"Sulfhydryl isn't acidic in this context.",3:"It's weakly polar at best."}},
{id:"g8",t:"groups",q:"Why must you recognize a carboxyl group as ONE group rather than 'a carbonyl plus a hydroxyl'?",
 opts:["Because the two never appear on the same carbon","Because the combination has new properties (charged, acidic) not present in either part alone — an emergent property","Because carboxyl is nonpolar while its parts are polar","Because the hydroxyl leaves during the reaction"],a:1,
 why:"Neither a carbonyl nor a hydroxyl is acidic or charged on its own, but together as –COOH they release H⁺. New properties at a higher level of organization = emergent property.",
 wrong:{0:"They do appear on the same carbon — that's exactly what a carboxyl is.",2:"Carboxyl is polar.",3:"That describes dehydration synthesis, not why carboxyl is a distinct group."}},
{id:"g9",t:"groups",q:"In a skeletal (zig-zag) line drawing of a hydrocarbon with 7 corners/ends and no other atoms shown, how many carbons and hydrogens are there (assume one double bond)?",
 opts:["7 C, 16 H","7 C, 14 H","6 C, 14 H","7 C, 18 H"],a:1,
 why:"Every corner or end is a carbon → 7 C. Fill each carbon to 4 bonds with H: a 7-carbon chain with one double bond has 14 H (C₇H₁₄). With no double bond it would be C₇H₁₆ — the exact example in the class notes.",
 wrong:{0:"C₇H₁₆ is correct only if there is no double bond.",2:"Count corners AND ends — there are 7 carbons.",3:"Too many hydrogens for 7 carbons."}},
{id:"g10",t:"groups",q:"The phosphate group is involved in which bond?",
 opts:["Peptide bond","Glycosidic linkage","Ester linkage","Phosphodiester bond"],a:3,
 why:"Phosphodiester bonds link nucleotides in DNA and RNA via the phosphate group. Hydrolysis of phosphate bonds also releases a lot of energy (ATP).",
 wrong:{0:"Peptide bonds join amino acids (carboxyl + amino).",1:"Glycosidic linkages join sugars.",2:"Ester linkages join glycerol and fatty acids."}},

// ---------- BUILD & BREAK ----------
{id:"b1",t:"build",q:"Dehydration synthesis",
 opts:["adds a water molecule to break a polymer into monomers","removes a water molecule to join two monomers with a covalent bond","breaks hydrogen bonds using heat","converts a polar molecule into a nonpolar one"],a:1,
 why:"An –H from one monomer and an –OH from the other leave as H₂O; a covalent bond forms where they were. Also called a condensation reaction.",
 wrong:{0:"That is hydrolysis, the reverse.",2:"Dehydration synthesis forms covalent bonds; it isn't about H-bonds.",3:"Polarity isn't the point of the reaction."}},
{id:"b2",t:"build",q:"Digesting a disaccharide into two monosaccharides requires",
 opts:["dehydration synthesis and the removal of one water","hydrolysis and the addition of one water","condensation and an enzyme that adds a phosphate","oxidation"],a:1,
 why:"Hydro-lysis = water splits. Adding H₂O breaks the glycosidic bond, restoring the –OH and –H on each monomer.",
 wrong:{0:"Dehydration synthesis BUILDS; it doesn't digest.",2:"No phosphate is involved in breaking a sugar bond.",3:"Oxidation is not the reaction that splits polymers."}},
{id:"b3",t:"build",q:"Glucose (C₆H₁₂O₆) and fructose (C₆H₁₂O₆) join to form sucrose. Sucrose's formula is",
 opts:["C₁₂H₂₄O₁₂","C₁₂H₂₂O₁₁","C₁₂H₂₀O₁₀","C₆H₁₂O₆"],a:1,
 why:"Add the two monomers and subtract one water: C₁₂H₂₄O₁₂ − H₂O = C₁₂H₂₂O₁₁.",
 wrong:{0:"You forgot to subtract the water lost in dehydration synthesis.",2:"That subtracts two waters — only one bond forms.",3:"That's the formula of a single hexose."}},
{id:"b4",t:"build",q:"How many water molecules are released when a triglyceride forms from glycerol and three fatty acids?",
 opts:["1","2","3","6"],a:2,
 why:"Each fatty acid attaches to glycerol by one ester bond via dehydration synthesis; three bonds → three waters.",
 wrong:{0:"One water per bond, and there are three bonds.",1:"A phospholipid with 2 fatty acids would release 2 (plus one for the phosphate), but a triglyceride has 3.",3:"Only one water per ester bond."}},
{id:"b5",t:"build",q:"Match the bond to the polymer: the bond between two amino acids is a ______ bond; between two nucleotides, a ______ bond.",
 opts:["glycosidic; ester","peptide; phosphodiester","ester; peptide","phosphodiester; glycosidic"],a:1,
 why:"Peptide (proteins), phosphodiester (nucleic acids), glycosidic (carbs), ester (lipids). Your teacher asks for the SPECIFIC name.",
 wrong:{0:"Glycosidic is sugars; ester is lipids.",2:"Reversed roles, and ester is for lipids.",3:"Reversed."}},
{id:"b6",t:"build",q:"Which correctly pairs a polymer with its monomer?",
 opts:["Polysaccharide — amino acid","Polypeptide — nucleotide","Nucleic acid — monosaccharide","Polypeptide — amino acid"],a:3,
 why:"Polysaccharide ← monosaccharide; polypeptide ← amino acid; nucleic acid ← nucleotide. Lipids are the odd one out with no true monomer.",
 wrong:{0:"Polysaccharides are made of monosaccharides.",1:"Polypeptides are made of amino acids.",2:"Nucleic acids are made of nucleotides."}},
{id:"b7",t:"build",q:"Which functional group is most often lost as part of the water molecule in dehydration synthesis?",
 opts:["Methyl","Hydroxyl","Carbonyl","Sulfhydryl"],a:1,
 why:"An –OH from one monomer combines with an –H from the other to form H₂O. Hydroxyl groups on sugars, and the –OH of carboxyl groups, are the usual participants.",
 wrong:{0:"Methyl doesn't participate in dehydration synthesis.",2:"Carbonyl stays put.",3:"Sulfhydryl forms disulfide bridges, not water."}},
{id:"b8",t:"build",q:"Which is true of ALL the bonds that link monomers into polymers (glycosidic, ester, peptide, phosphodiester)?",
 opts:["They are hydrogen bonds","They are ionic bonds","They are covalent bonds formed by dehydration synthesis","They are broken by heat alone"],a:2,
 why:"All four are covalent bonds built by removing water. Breaking them requires hydrolysis, typically with an enzyme — not just heat.",
 wrong:{0:"H-bonds are far too weak to hold polymers together.",1:"Ionic bonds fall apart in water; polymers don't.",3:"Heat disrupts weak interactions, not covalent backbone bonds."}},

// ---------- CARBS ----------
{id:"c1",t:"carbs",q:"The general formula for a carbohydrate is",
 opts:["(CH₂O)ₙ","CₙH₂ₙOₙ₊₁","(CHO)ₙ","C₂ₙHₙOₙ"],a:0,
 why:"Carbo-hydrate: carbon plus water. H:O is always 2:1, e.g. C₆H₁₂O₆.",
 wrong:{1:"Oxygen equals carbon in a simple sugar.",2:"H must be twice O.",3:"Hydrogen, not carbon, is doubled."}},
{id:"c2",t:"carbs",q:"Ribose is a pentose. Its formula is",
 opts:["C₆H₁₂O₆","C₅H₁₀O₅","C₃H₆O₃","C₅H₁₂O₆"],a:1,
 why:"Pent- = 5 carbons; apply (CH₂O)₅.",
 wrong:{0:"That's a hexose (glucose, fructose, galactose).",2:"That's a triose.",3:"Breaks the 2:1 H:O ratio."}},
{id:"c3",t:"carbs",q:"Lactose is a disaccharide made of",
 opts:["glucose + glucose","glucose + fructose","glucose + galactose","fructose + galactose"],a:2,
 why:"Lactose (milk sugar) = glucose + galactose. Sucrose = glucose + fructose. Maltose = glucose + glucose.",
 wrong:{0:"That's maltose.",1:"That's sucrose (table sugar).",3:"Not a common disaccharide."}},
{id:"c4",t:"carbs",q:"Which polysaccharide is used for energy STORAGE in ANIMALS?",
 opts:["Starch","Cellulose","Chitin","Glycogen"],a:3,
 why:"Glycogen is stored in liver and muscle. Starch is plant storage; cellulose is plant structure; chitin is animal/fungal structure.",
 wrong:{0:"Starch is the plant storage polysaccharide.",1:"Cellulose is structural (plant cell walls).",2:"Chitin is structural (insect exoskeletons, fungal cell walls)."}},
{id:"c5",t:"carbs",q:"Starch and cellulose are both polymers of glucose, yet humans can digest only starch. Why?",
 opts:["Cellulose is made of fructose, not glucose","Starch has alpha linkages our enzymes fit; cellulose has beta linkages we lack enzymes for","Cellulose is too large to be digested","Starch is polar and cellulose is nonpolar"],a:1,
 why:"Structure → function. The different linkage geometry (α vs β) means our enzymes can't bind cellulose. Herbivores rely on gut bacteria to do it.",
 wrong:{0:"Both are pure glucose polymers.",2:"Size isn't the barrier — starch is huge too.",3:"Both are polar carbohydrates."}},
{id:"c6",t:"carbs",q:"Glycogen is more highly branched than starch. What functional advantage does this give?",
 opts:["It stores more energy per gram","More free ends let enzymes hydrolyze it faster, releasing glucose quickly","It makes glycogen insoluble","It allows glycogen to form cell walls"],a:1,
 why:"Enzymes remove glucose from the ends of chains. More branches = more ends = faster release. Animals need quick energy on demand.",
 wrong:{0:"Energy per glucose is the same.",2:"Branching doesn't govern solubility that way.",3:"Glycogen is a storage molecule, not structural."}},
{id:"c7",t:"carbs",q:"Carbohydrates are always polar because",
 opts:["they contain nitrogen","they contain many hydroxyl (–OH) groups","they are very large molecules","they contain phosphate"],a:1,
 why:"The many –OH groups on every sugar ring contain oxygen and are polar, so sugars dissolve readily in water.",
 wrong:{0:"Carbohydrates contain only C, H, O.",2:"Size doesn't determine polarity.",3:"Sugars don't contain phosphate (nucleotides do)."}},
{id:"c8",t:"carbs",q:"Deoxyribose differs from ribose in that deoxyribose",
 opts:["has an extra oxygen on the 2′ carbon","is missing an oxygen on the 2′ carbon","is a hexose","contains nitrogen"],a:1,
 why:"De-oxy = missing oxygen. The 2′ carbon has –H instead of –OH. The class slide asked: 'Which carbon is missing an O in deoxyribose?' → 2′.",
 wrong:{0:"Reversed — it has one FEWER oxygen.",2:"Both are pentoses (5 C).",3:"Sugars don't contain nitrogen."}},
{id:"c9",t:"carbs",q:"A cow can digest grass (cellulose) because",
 opts:["cows produce cellulase in their stomach lining","bacteria living in the cow's digestive system break the beta linkages","cellulose is converted to starch when chewed","cows have alpha-linkage enzymes"],a:1,
 why:"Animals don't make the enzyme for beta linkages; symbiotic gut bacteria do.",
 wrong:{0:"The cow itself doesn't produce the enzyme.",2:"Chewing doesn't change the chemical linkage.",3:"Alpha enzymes don't fit beta linkages."}},

// ---------- LIPIDS ----------
{id:"l1",t:"lipids",q:"A triglyceride consists of",
 opts:["three glycerols and one fatty acid","one glycerol and three fatty acids","two fatty acids, glycerol and a phosphate","four fused carbon rings"],a:1,
 why:"Glycerol (3 carbons, each with –OH) + 3 fatty acids, joined by 3 ester bonds.",
 wrong:{0:"Reversed.",2:"That's a phospholipid.",3:"That's a steroid."}},
{id:"l2",t:"lipids",q:"Compared to saturated fatty acids, unsaturated fatty acids",
 opts:["have only single C–C bonds and are solid at room temperature","have one or more double bonds, are kinked, and are liquid at room temperature","contain more hydrogen atoms","are found mainly in animal fats"],a:1,
 why:"Double bonds put kinks in the chain so molecules can't pack tightly → liquid (plant oils). Saturated = all single bonds, straight, solid (butter).",
 wrong:{0:"That describes SATURATED fatty acids.",2:"Unsaturated chains have FEWER hydrogens (not saturated with H).",3:"Animal fats are mostly saturated; unsaturated are typical of plants."}},
{id:"l3",t:"lipids",q:"Phospholipids are described as amphipathic. This means",
 opts:["they are entirely nonpolar","they have both a polar (hydrophilic) region and a nonpolar (hydrophobic) region","they are soluble in water","they contain two phosphate groups"],a:1,
 why:"Polar phosphate head + nonpolar fatty-acid tails. This dual nature drives bilayer formation.",
 wrong:{0:"The head is polar.",2:"Only the head interacts with water; the tails avoid it.",3:"One phosphate, two fatty acids."}},
{id:"l4",t:"lipids",q:"In a cell membrane, phospholipids form a bilayer in which",
 opts:["hydrophobic tails face the watery environment on both sides","hydrophilic heads face outward toward water and hydrophobic tails point inward","heads and tails alternate randomly","all phosphate groups cluster in the center"],a:1,
 why:"Like attracts like: polar heads toward polar water (inside and outside the cell); nonpolar tails hide together in the middle.",
 wrong:{0:"Nonpolar tails avoid water.",2:"The arrangement is highly ordered, not random.",3:"Phosphates are polar and face the water, not the center."}},
{id:"l5",t:"lipids",q:"All steroids share",
 opts:["a glycerol backbone","a long hydrocarbon tail with a carboxyl end","four fused carbon rings","a phosphate group"],a:2,
 why:"Four fused rings + varying functional groups. Changing the functional groups changes the function (cholesterol, cortisol, estrogen, testosterone).",
 wrong:{0:"Glycerol is for fats and phospholipids.",1:"That's a fatty acid.",3:"Steroids have no phosphate."}},
{id:"l6",t:"lipids",q:"The bond linking a fatty acid to glycerol is a(n)",
 opts:["glycosidic linkage","peptide bond","ester linkage","phosphodiester bond"],a:2,
 why:"The carboxyl of the fatty acid reacts with a hydroxyl on glycerol → ester bond (R–C(=O)–O–R′) + water.",
 wrong:{0:"Glycosidic joins sugars.",1:"Peptide joins amino acids.",3:"Phosphodiester joins nucleotides."}},
{id:"l7",t:"lipids",q:"Lipids do not dissolve in water because",
 opts:["they are too large","they are mostly nonpolar hydrocarbon and have very little oxygen","they are charged","they contain nitrogen"],a:1,
 why:"Their H:O ratio is far from 2:1 — mostly C–H bonds, which are nonpolar. Nonpolar doesn't dissolve in polar.",
 wrong:{0:"Size isn't the reason; huge polysaccharides are polar and water-soluble.",2:"Lipids are uncharged (except phospholipid heads).",3:"Lipids contain C, H, O (and P in phospholipids), not N."}},
{id:"l8",t:"lipids",q:"Which function is NOT typically attributed to lipids?",
 opts:["Long-term energy storage","Insulation and cushioning organs","Storing genetic information","Chemical signaling (hormones)"],a:2,
 why:"Genetic information is the job of nucleic acids. Lipids store energy, insulate, cushion, build membranes, and act as steroid hormones.",
 wrong:{0:"Fats store energy long-term (more bonds than carbs).",1:"Fat insulates and cushions.",3:"Steroid hormones like estrogen and testosterone are lipids."}},
{id:"l9",t:"lipids",q:"Which change would make a fat more likely to be liquid at room temperature?",
 opts:["Replacing unsaturated fatty acids with saturated ones","Adding more C=C double bonds to the fatty acid chains","Lengthening the saturated fatty acid chains","Removing the glycerol"],a:1,
 why:"More double bonds → more kinks → looser packing → lower melting point → liquid.",
 wrong:{0:"Saturated fats pack tightly and are solid.",2:"Longer saturated chains are MORE solid.",3:"Removing glycerol would mean it isn't a fat."}},

// ---------- PROTEINS ----------
{id:"p1",t:"proteins",q:"All 20 amino acids share the same",
 opts:["R-group","central carbon bonded to an amino group, a carboxyl group, and a hydrogen","number of sulfur atoms","polarity"],a:1,
 why:"Same backbone; only the R-group differs. The R-group's chemistry (polar, nonpolar, charged) determines how the protein folds.",
 wrong:{0:"The R-group is the ONE thing that differs.",2:"Only cysteine and methionine contain sulfur.",3:"Polarity varies with the R-group."}},
{id:"p2",t:"proteins",q:"A peptide bond forms between the ______ of one amino acid and the ______ of the next.",
 opts:["R-group; R-group","carboxyl group; amino group","hydroxyl group; methyl group","amino group; phosphate group"],a:1,
 why:"Dehydration synthesis: the carboxyl's –OH and the amino's –H leave as water, forming a covalent C–N bond. Hence chains run amino (N) terminus → carboxyl (C) terminus.",
 wrong:{0:"R-groups interact in 3° structure but don't form the backbone bond.",2:"No hydroxyl–methyl bond exists here.",3:"Amino acids have no phosphate."}},
{id:"p3",t:"proteins",q:"Primary (1°) protein structure is",
 opts:["the folding into alpha helices and beta sheets","the sequence of amino acids, held by covalent peptide bonds","the overall 3-D shape from R-group interactions","the assembly of multiple polypeptides"],a:1,
 why:"Order of amino acids, determined by DNA, held by peptide bonds. It ultimately determines how the protein folds.",
 wrong:{0:"That's secondary.",2:"That's tertiary.",3:"That's quaternary."}},
{id:"p4",t:"proteins",q:"Secondary (2°) structure (α-helix, β-pleated sheet) is held together by",
 opts:["hydrogen bonds between R-groups","hydrogen bonds between backbone C=O and N–H groups","disulfide bridges","peptide bonds"],a:1,
 why:"Backbone-to-backbone H-bonds; the R-groups are NOT involved. This is the most-tested distinction in the POGIL.",
 wrong:{0:"R-group interactions are 3° (and 4°).",2:"Disulfide bridges are 3°/4°.",3:"Peptide bonds are 1°."}},
{id:"p5",t:"proteins",q:"Tertiary (3°) structure results from interactions between",
 opts:["backbone atoms only","R-groups of amino acids within one polypeptide","separate polypeptide chains","nucleotides"],a:1,
 why:"H-bonds, ionic bonds, hydrophobic interactions, and disulfide bridges among R-groups fold one chain into its overall 3-D shape.",
 wrong:{0:"Backbone-only is secondary.",2:"Interactions between chains is quaternary.",3:"Proteins aren't made of nucleotides."}},
{id:"p6",t:"proteins",q:"Hemoglobin consists of four polypeptide subunits. This is an example of",
 opts:["primary structure","secondary structure","tertiary structure","quaternary structure"],a:3,
 why:"Two or more polypeptides assembled into one functional protein = 4°. Not all proteins have it.",
 wrong:{0:"1° is sequence.",1:"2° is local folding.",2:"3° is the shape of ONE chain."}},
{id:"p7",t:"proteins",q:"Which interaction stabilizing tertiary structure is covalent and therefore strongest?",
 opts:["Hydrogen bond","Ionic bond","Hydrophobic interaction","Disulfide bridge"],a:3,
 why:"S–S bonds between two cysteine –SH groups are covalent; the others are weaker IMFs.",
 wrong:{0:"H-bonds are weak IMFs.",1:"Ionic bonds are weaker than covalent and fall apart in water.",2:"Hydrophobic interactions are weak clustering, not bonds."}},
{id:"p8",t:"proteins",q:"Which type of R-group would be found clustered in the INTERIOR of a water-soluble protein?",
 opts:["Polar","Charged (acidic)","Nonpolar","Charged (basic)"],a:2,
 why:"Nonpolar R-groups avoid water and pack together inside — hydrophobic interactions. Polar and charged R-groups face the watery outside.",
 wrong:{0:"Polar R-groups face water.",1:"Charged groups interact with water and form ionic bonds on the surface.",3:"Same — charged groups stay near water."}},
{id:"p9",t:"proteins",q:"An egg white turns solid when cooked because heat",
 opts:["breaks the peptide bonds of albumin","disrupts the weak interactions holding 2°, 3° and 4° structure, denaturing albumin","adds water to the protein","converts albumin into a carbohydrate"],a:1,
 why:"Denaturing = unfolding. Heat breaks H-bonds, ionic bonds and hydrophobic interactions; the unfolded proteins tangle together. Structural change → functional change.",
 wrong:{0:"Peptide bonds are covalent and survive cooking; 1° structure is intact.",2:"Cooking doesn't hydrolyze the protein.",3:"Impossible — the elements don't match."}},
{id:"p10",t:"proteins",q:"After a protein is denatured by heat, which level of structure remains intact?",
 opts:["Primary","Secondary","Tertiary","Quaternary"],a:0,
 why:"The covalent peptide bonds need an enzyme (hydrolysis) to break. Heat only disrupts the weak interactions of 2°, 3°, 4°.",
 wrong:{1:"2° H-bonds break under heat.",2:"3° interactions break under heat.",3:"4° interactions break under heat."}},
{id:"p11",t:"proteins",q:"Chemical hair straightening works by breaking and re-forming which interactions?",
 opts:["Peptide bonds","Disulfide bonds between cysteines (3°/4° structure)","Hydrogen bonds in the backbone only","Glycosidic linkages"],a:1,
 why:"One chemical breaks the S–S bridges that give keratin its curl; a second re-forms them in the straight position. It grows out because new hair is made and the chemicals wear off.",
 wrong:{0:"Breaking peptide bonds would destroy the hair.",2:"The permanent effect comes from covalent disulfide bonds.",3:"Hair is protein, not carbohydrate."}},
{id:"p12",t:"proteins",q:"A mutation replaces a polar amino acid with a nonpolar one. Which levels of structure are MOST LIKELY affected?",
 opts:["Only primary","Primary for certain; tertiary and quaternary most likely, since R-group interactions stabilize them","Only quaternary","None — one amino acid can't change a protein"],a:1,
 why:"1° changes by definition. 2° may or may not (backbone-based; depends on location). 3°/4° depend on R-group chemistry, so swapping polar → nonpolar likely alters the fold and function.",
 wrong:{0:"The R-group change ripples into folding.",2:"1° is definitely changed.",3:"Sickle-cell disease results from a single amino acid change."}},
{id:"p13",t:"proteins",q:"An enzyme moved to a solution with a very different pH loses activity because",
 opts:["its peptide bonds hydrolyze","the pH change disrupts H-bonds and ionic bonds between R-groups, changing the enzyme's shape","its amino acids are converted to nucleotides","the enzyme dissolves"],a:1,
 why:"Changing H⁺ concentration alters the charges on acidic and basic R-groups, breaking ionic bonds and H-bonds → denaturing → loss of function.",
 wrong:{0:"pH alone doesn't break covalent peptide bonds.",2:"Impossible.",3:"Dissolving isn't the mechanism."}},

// ---------- NUCLEIC ACIDS ----------
{id:"n1",t:"nucleic",q:"The three components of a nucleotide are",
 opts:["a phosphate, a 6-carbon sugar, and an amino acid","a phosphate, a 5-carbon sugar, and a nitrogenous base","a glycerol, a fatty acid, and a base","a nitrogenous base, an amino group, and a carboxyl group"],a:1,
 why:"Phosphate + pentose (ribose or deoxyribose) + nitrogenous base (A, T/U, C, G).",
 wrong:{0:"The sugar is a pentose and there's no amino acid.",2:"Those are lipid parts.",3:"Those are amino acid parts."}},
{id:"n2",t:"nucleic",q:"Nucleotides in a strand are joined by",
 opts:["hydrogen bonds between bases","phosphodiester bonds between the phosphate and the sugar of the next nucleotide","peptide bonds","glycosidic linkages"],a:1,
 why:"Covalent phosphodiester bonds form the sugar-phosphate backbone. Hydrogen bonds hold the two STRANDS together, not the nucleotides within a strand.",
 wrong:{0:"H-bonds pair bases ACROSS strands.",2:"Peptide bonds are for proteins.",3:"Glycosidic linkages are for sugars."}},
{id:"n3",t:"nucleic",q:"Which are the purines?",
 opts:["Cytosine and thymine","Adenine and guanine","Adenine and thymine","Uracil and cytosine"],a:1,
 why:"Ag = pure silver: Adenine and Guanine are purines (two rings). Don't get CUT on the pyramid: C, U, T are pyrimidines (one ring).",
 wrong:{0:"Both are pyrimidines.",2:"Adenine is a purine, thymine a pyrimidine — they PAIR.",3:"Both are pyrimidines."}},
{id:"n4",t:"nucleic",q:"In DNA, adenine pairs with ______ via ______ hydrogen bonds; cytosine pairs with ______ via ______ hydrogen bonds.",
 opts:["thymine; 3; guanine; 2","guanine; 2; thymine; 3","thymine; 2; guanine; 3","uracil; 2; guanine; 3"],a:2,
 why:"A=T with 2 H-bonds; C≡G with 3. A purine always pairs with a pyrimidine so the helix stays a constant width.",
 wrong:{0:"Numbers reversed.",1:"Partners wrong: A pairs with T, C with G.",3:"Uracil is only in RNA."}},
{id:"n5",t:"nucleic",q:"Which is a structural difference between DNA and RNA?",
 opts:["DNA contains uracil; RNA contains thymine","DNA contains ribose; RNA contains deoxyribose","DNA is usually double-stranded; RNA is usually single-stranded","DNA has phosphodiester bonds; RNA has peptide bonds"],a:2,
 why:"Three differences: sugar (deoxyribose vs ribose), base (thymine vs uracil), strands (double vs single).",
 wrong:{0:"Reversed — DNA has thymine, RNA has uracil.",1:"Reversed — DNA has DEOXYribose.",3:"Both use phosphodiester bonds."}},
{id:"n6",t:"nucleic",q:"The two strands of a DNA double helix are described as antiparallel because",
 opts:["they are held by ionic bonds","they run in opposite 5′→3′ directions","one is DNA and one is RNA","they twist in opposite directions"],a:1,
 why:"Each strand has a 5′ phosphate end and a 3′ hydroxyl end; the partner strand runs the other way.",
 wrong:{0:"Strands are held by H-bonds between bases.",2:"Both are DNA.",3:"They twist together as one helix."}},
{id:"n7",t:"nucleic",q:"Given the DNA strand 5′-ACTGGCTAC-3′, the complementary strand is",
 opts:["TGACCGATG","ACTGGCTAC","UGACCGAUG","CATCGGTCA"],a:0,
 why:"A↔T, C↔G: A-C-T-G-G-C-T-A-C → T-G-A-C-C-G-A-T-G. This is the exact practice strand from the class slide.",
 wrong:{1:"That's the same strand, not its complement.",2:"Uracil is RNA — this is DNA.",3:"That's the complement written backwards from the other end."}},
{id:"n8",t:"nucleic",q:"Why is it important that the two DNA strands are held together by hydrogen bonds rather than covalent bonds?",
 opts:["Hydrogen bonds make DNA more stable than proteins","The strands can be 'unzipped' to access the bases for replication and transcription","Hydrogen bonds store more energy","Covalent bonds cannot form between nitrogen bases"],a:1,
 why:"Weak bonds are a feature: the cell can separate the strands without breaking the covalent backbone, then let them re-pair.",
 wrong:{0:"Weak bonds are less stable, which is the point.",2:"H-bonds store very little energy.",3:"It's not about impossibility — weak pairing is functionally necessary."}},
{id:"n9",t:"nucleic",q:"During DNA or RNA synthesis, new nucleotides are added to the",
 opts:["5′ phosphate end","3′ hydroxyl end","nitrogenous base","middle of the strand"],a:1,
 why:"Growth is 5′→3′: each incoming nucleotide's phosphate bonds to the free 3′ –OH of the growing strand.",
 wrong:{0:"The 5′ end carries the phosphate that started the strand.",2:"Bases pair; they don't extend the backbone.",3:"Strands grow from an end."}},
{id:"n10",t:"nucleic",q:"The flow of genetic information DNA → RNA → protein is called the central dogma. DNA → RNA is ______ and RNA → protein is ______.",
 opts:["translation; transcription","transcription; translation","replication; transcription","expression; replication"],a:1,
 why:"Transcription copies DNA into RNA (same nucleic-acid 'language'); translation converts RNA into amino-acid 'language'. Together: gene expression.",
 wrong:{0:"Reversed.",2:"Replication is DNA → DNA.",3:"Expression is the whole process; replication is DNA → DNA."}},
{id:"n11",t:"nucleic",q:"Nucleic acids are composed of which elements?",
 opts:["C, H, O","C, H, O, N","C, H, O, N, P","C, H, O, N, S"],a:2,
 why:"CHONP — the phosphate adds P. Proteins are CHON (+S in some R-groups); carbs and lipids are CHO.",
 wrong:{0:"That's carbohydrates and lipids.",1:"Missing the phosphorus of the phosphate group.",3:"Sulfur is in some proteins, not nucleic acids."}},

// ---------- FRQ SKILLS & DATA ----------
{id:"f1",t:"frq",q:"An FRQ part begins with the verb 'Identify.' The best response is",
 opts:["a paragraph explaining the mechanism","a short, specific answer naming the thing — no explanation needed","a restatement of the prompt followed by the answer","a labeled diagram"],a:1,
 why:"Identify = tell what it is. Short and quick. Extra explanation earns nothing and costs time. (Diagrams alone never earn credit.)",
 wrong:{0:"Save explanation for 'Explain' and 'Justify'.",2:"Restating the prompt earns zero.",3:"A diagram alone does not receive credit."}},
{id:"f2",t:"frq",q:"An FRQ asks you to 'Describe' a structure. You should",
 opts:["give relevant characteristics without explaining how or why","explain the mechanism in detail","predict what will happen","justify with data"],a:0,
 why:"Describe = characteristics, shorter answer. Explain (how/why) is the longer one.",
 wrong:{1:"That's 'Explain'.",2:"That's 'Predict'.",3:"That's 'Justify'."}},
{id:"f3",t:"frq",q:"You are asked to 'Justify' a claim using data from a table. A complete answer must",
 opts:["restate the claim","cite the specific data AND explain how or why that data supports the claim","list every value in the table","give your opinion"],a:1,
 why:"Two moves: point to the evidence, then connect it to the claim with reasoning. Longer answer.",
 wrong:{0:"Restating earns nothing.",2:"Cite the relevant values, not all of them.",3:"Justification is evidence-based, not opinion."}},
{id:"f4",t:"frq",q:"A data set compares trichome density of three separate plant populations. To 'Construct' a graph you should draw a",
 opts:["line graph, because there are three data points","bar graph, because the populations are discontinuous categories","pie chart","scatter plot with a trend line"],a:1,
 why:"Discontinuous (categorical) data → bar graph. Continuous data (time, temperature) → line graph.",
 wrong:{0:"Line graphs imply the x-axis is continuous.",2:"Pie charts show parts of a whole, not comparisons of means.",3:"No continuous x-variable to trend against."}},
{id:"f5",t:"frq",q:"A population's mean trichome density is 11 trichomes/cm² with SEM = 1. The 95% confidence interval error bars should span",
 opts:["10 to 12","9 to 13","11 to 13","8 to 14"],a:1,
 why:"95% CI ≈ mean ± 2 SEM = 11 ± 2 → 9 to 13. Calculate on scratch paper before drawing so the bars fit the grid.",
 wrong:{0:"That's ± 1 SEM.",2:"Bars extend both directions from the mean.",3:"That's ± 3 SEM."}},
{id:"f6",t:"frq",q:"On a 'Construct a graph' FRQ, which does NOT earn points?",
 opts:["Correct graph type","Axis labels with units","A title","Data plotted accurately with error bars"],a:2,
 why:"The three scored elements are graph type, labels (with units), and data + error bars. No points for a title.",
 wrong:{0:"Graph type is one of the three points.",1:"Labels with units is one of the three points.",3:"Plotting with error bars is one of the three points."}},
{id:"f7",t:"frq",q:"Which axis holds the independent variable, and which the dependent?",
 opts:["x = dependent; y = independent","x = independent; y = dependent","either, as long as labeled","x = time always"],a:1,
 why:"What you changed or grouped (independent) goes on x; what you measured (dependent, with units and error bars) goes on y.",
 wrong:{0:"Reversed.",2:"Convention matters for credit.",3:"Time is often the independent variable but not always."}},
{id:"f8",t:"frq",q:"If you are running out of time on the FRQ section, the teacher's '2-minute drill' says to",
 opts:["finish writing your current Explain answer perfectly","skip to the remaining Identify and Predict parts, which are fast 1-point answers","recopy the prompts so the grader knows what you read","leave the rest blank"],a:1,
 why:"Identify and Predict take seconds and are worth the same 1 point as a long Explain. Blanks are guaranteed zeros.",
 wrong:{0:"Perfecting one part while leaving quick points on the table is a bad trade.",2:"Restating prompts earns nothing.",3:"An attempt might score; a blank never does."}},
{id:"f9",t:"frq",q:"When asked to compare two groups in a data set, a full-credit answer",
 opts:["describes the higher group only","addresses BOTH groups explicitly and states the direction of the difference","reports the mean of one group with units","says 'they are different'"],a:1,
 why:"Make complete comparisons — address both groups, say which is higher/lower, include units and directionality.",
 wrong:{0:"Both groups must be addressed.",2:"One number isn't a comparison.",3:"Vague statements earn nothing."}},
{id:"f10",t:"frq",q:"In an experiment testing whether herbivore presence selects for higher trichome density, the independent variable is",
 opts:["trichome density","presence or absence of herbivores","plant height","number of plants sampled"],a:1,
 why:"The independent variable is what the experimenter manipulates (herbivores present vs absent). Trichome density is the dependent variable measured.",
 wrong:{0:"That's the dependent (measured) variable.",2:"Not part of the hypothesis.",3:"That's sample size."}},
{id:"f11",t:"frq",q:"Which is an appropriate CONTROL for the herbivore–trichome experiment?",
 opts:["Plants exposed to herbivores in a warmer greenhouse","Plants of the same species grown identically but with no herbivores","Plants of a different species with herbivores","No plants at all"],a:1,
 why:"A control differs from the treatment in only the independent variable — same species, same conditions, no herbivores.",
 wrong:{0:"Changes two variables (herbivores AND temperature).",2:"Changes species — confounding.",3:"Provides no comparison."}},
];

// FRQ: {id, t, prompt(html), parts:[{verb, text, pts, rubric:[strings]}]}
const FRQ = [
{id:"F1",t:"lipids",title:"Phospholipids and membranes",
 stem:"Phospholipids are the major component of plasma membranes.",
 parts:[
  {verb:"Describe",text:"the structure of a phospholipid.",pts:2,rubric:["Glycerol + 2 fatty acids + a phosphate group","Has a polar/hydrophilic head (phosphate) AND nonpolar/hydrophobic tails (fatty acids) — amphipathic"]},
  {verb:"Explain",text:"how this structure enables phospholipids to form a bilayer in water.",pts:2,rubric:["Like attracts like: polar heads orient toward water on both sides; nonpolar tails orient inward away from water (must give the WHY — polarity)","Result: a two-layer sheet with tails in the middle that separates the watery inside from outside (structure → function)"]}
 ]},
{id:"F2",t:"carbs",title:"Starch vs cellulose",
 stem:"Starch and cellulose are both polysaccharides made entirely of glucose monomers.",
 parts:[
  {verb:"Identify",text:"the type of bond that links glucose monomers in both polymers.",pts:1,rubric:["Glycosidic linkage (covalent)"]},
  {verb:"Describe",text:"ONE structural difference between starch and cellulose.",pts:1,rubric:["Starch has alpha linkages; cellulose has beta linkages (different orientation of the bond/shape of the chain)"]},
  {verb:"Explain",text:"why humans can digest starch but not cellulose.",pts:2,rubric:["Digestion requires enzymes that fit the specific linkage; humans have enzymes for alpha linkages","Humans lack enzymes for beta linkages, so cellulose passes through undigested as fiber (herbivores rely on gut bacteria)"]}
 ]},
{id:"F3",t:"proteins",title:"Enzyme in the wrong pH",
 stem:"An enzyme that normally functions at pH 7 is placed in a solution at pH 2.",
 parts:[
  {verb:"Predict",text:"the effect on the enzyme's activity.",pts:1,rubric:["Activity decreases / enzyme stops working (denatures)"]},
  {verb:"Justify",text:"your prediction.",pts:2,rubric:["Low pH (high H⁺) changes charges on R-groups, disrupting the hydrogen bonds and ionic bonds that hold 2°/3°/4° structure","Protein unfolds (denatures) → shape changes → active site no longer fits → structural change leads to functional change"]},
  {verb:"Identify",text:"the level of protein structure that is NOT affected, and state why.",pts:1,rubric:["Primary structure — peptide bonds are covalent and need enzymatic hydrolysis to break"]}
 ]},
{id:"F4",t:"proteins",title:"A single mutation",
 stem:"A mutation causes a polar amino acid in the middle of a polypeptide to be replaced by a nonpolar amino acid.",
 parts:[
  {verb:"Describe",text:"the effect on primary structure.",pts:1,rubric:["The amino acid sequence is changed (by definition)"]},
  {verb:"Explain",text:"how tertiary structure might be affected.",pts:2,rubric:["Tertiary structure depends on R-group interactions (H-bonds, ionic, hydrophobic, disulfide)","A nonpolar R-group cannot form the H-bond/ionic bond the polar one did and is pulled toward the hydrophobic interior → fold changes"]},
  {verb:"Predict",text:"the consequence for the protein's function.",pts:1,rubric:["Function is likely altered or lost because shape determines function"]}
 ]},
{id:"F5",t:"water",title:"Heating water vs ethanol",
 stem:"Equal volumes of water and ethanol were heated with equal energy. After 10 minutes water reached 40 °C and ethanol reached 57 °C, starting from 20 °C.",
 parts:[
  {verb:"Describe",text:"the trend in the data for both liquids.",pts:1,rubric:["Both increase in temperature over time; ethanol increases faster/higher than water (address BOTH, with units: °C, min)"]},
  {verb:"Explain",text:"why water's temperature rose more slowly.",pts:2,rubric:["Water molecules are extensively hydrogen-bonded to each other","Added energy must first break H-bonds before increasing molecular motion (temperature) → high specific heat"]},
  {verb:"Identify",text:"ONE biological consequence of this property of water.",pts:1,rubric:["Any one: moderates coastal climates; stabilizes body/cell temperature; lakes and oceans resist temperature swings"]}
 ]},
{id:"F6",t:"build",title:"Building a dipeptide",
 stem:"Two amino acids are joined to form a dipeptide.",
 parts:[
  {verb:"Identify",text:"the type of reaction and the type of bond formed.",pts:1,rubric:["Dehydration synthesis (condensation); peptide bond (covalent)"]},
  {verb:"Describe",text:"what happens to the atoms of the functional groups involved.",pts:2,rubric:["The –OH of one amino acid's carboxyl group and an –H of the other's amino group are removed","They form one water molecule; a C–N bond forms between the carboxyl carbon and the amino nitrogen"]},
  {verb:"Explain",text:"why an indefinite number of different proteins can be built from only 20 amino acids.",pts:1,rubric:["Proteins vary in the length AND the sequence/order of amino acids; each different sequence folds into a different shape"]}
 ]},
{id:"F7",t:"nucleic",title:"DNA structure and function",
 stem:"DNA is a double-stranded antiparallel molecule whose two strands are held together by hydrogen bonds between complementary bases.",
 parts:[
  {verb:"Describe",text:"the three components of a nucleotide.",pts:1,rubric:["Phosphate group, 5-carbon sugar (deoxyribose), nitrogenous base"]},
  {verb:"Identify",text:"the bond that links nucleotides WITHIN a strand.",pts:1,rubric:["Phosphodiester bond (covalent)"]},
  {verb:"Explain",text:"how holding the two strands together with hydrogen bonds (rather than covalent bonds) is important to DNA's function.",pts:2,rubric:["H-bonds are individually weak, so the strands can be separated ('unzipped') without breaking the covalent backbone","This allows the bases to be accessed/read for replication and transcription, then the strands can re-pair"]}
 ]},
{id:"F8",t:"lipids",title:"Saturated vs unsaturated",
 stem:"Butter is solid at room temperature; olive oil is liquid.",
 parts:[
  {verb:"Describe",text:"the structural difference between saturated and unsaturated fatty acids.",pts:1,rubric:["Saturated: all single C–C bonds, straight chains, maximum H. Unsaturated: one or more C=C double bonds creating kinks"]},
  {verb:"Explain",text:"why one is solid and the other liquid at room temperature.",pts:2,rubric:["Straight saturated chains pack tightly with more contact between molecules → solid (butter, animal fat)","Kinked unsaturated chains cannot pack tightly → liquid (plant oils)"]},
  {verb:"Predict",text:"how adding more double bonds to a fat would change its melting point.",pts:1,rubric:["Lower melting point / more likely to be liquid"]}
 ]},
{id:"F9",t:"groups",title:"Functional groups and polarity",
 stem:"An amino acid has an amino group, a carboxyl group, and an R-group on its central carbon.",
 parts:[
  {verb:"Identify",text:"the charge each group carries when ionized in water.",pts:1,rubric:["Amino → –NH₃⁺ (positive, basic); carboxyl → –COO⁻ (negative, acidic)"]},
  {verb:"Explain",text:"how the R-group determines whether an amino acid is hydrophobic or hydrophilic.",pts:2,rubric:["R-groups made of only C and H (e.g., methyl) are nonpolar → hydrophobic","R-groups containing O or N (hydroxyl, amino, carboxyl) are polar or charged → hydrophilic; 'presence of O and N are clues for polar'"]},
  {verb:"Describe",text:"the role of the sulfhydryl group in protein structure.",pts:1,rubric:["Two –SH groups (cysteine) form a covalent disulfide bridge that stabilizes tertiary/quaternary structure"]}
 ]},
{id:"F10",t:"frq",title:"Trichome data (graph + design)",
 stem:"Students measured stem trichome density (trichomes/cm²) in three plant populations. Means ± SEM: Population I = 9 ± 1; II = 11 ± 1; III = 14 ± 1. Trichomes are thought to protect plants from herbivores.",
 parts:[
  {verb:"Construct",text:"an appropriately labeled graph of the means with 95% CI error bars (sketch it on paper, then check).",pts:3,rubric:["Bar graph (discontinuous data); x-axis: Population I, II, III; y-axis: Trichome density (# trichomes/cm²) ± 2 SEM — labels copied exactly, with units","Even scale anchored at 0; bars plotted at 9, 11, 14","Error bars: I 7–11, II 9–13, III 12–16 (mean ± 2 SEM); no title needed"]},
  {verb:"Identify",text:"the two populations most likely to differ significantly.",pts:1,rubric:["I and III (error bars 7–11 and 12–16 do not overlap)"]},
  {verb:"Justify",text:"your selection.",pts:1,rubric:["Their 95% confidence intervals do not overlap, so the difference in means is unlikely to be due to chance (cite the numbers)"]},
  {verb:"Identify",text:"the independent and dependent variables for an experiment testing whether herbivore presence selects for higher trichome density.",pts:1,rubric:["Independent: presence/absence of herbivores. Dependent: trichome density (trichomes/cm²)"]},
  {verb:"Describe",text:"an appropriate control.",pts:1,rubric:["Same plant species grown under identical conditions with NO herbivores present"]},
  {verb:"Predict",text:"results that would support the hypothesis.",pts:1,rubric:["Plants exposed to herbivores show higher trichome density over generations than the control"]}
 ]},
{id:"F11",t:"carbs",title:"Glycogen vs starch",
 stem:"Glycogen (animal storage) is more highly branched than amylose starch (plant storage).",
 parts:[
  {verb:"Identify",text:"the monomer of both polysaccharides.",pts:1,rubric:["Glucose"]},
  {verb:"Explain",text:"how glycogen's branching relates to its function in animals.",pts:2,rubric:["Enzymes hydrolyze glucose from the free ends of chains; more branches = more free ends","So glycogen releases glucose faster, matching animals' need for quick energy on demand (structure → function)"]},
  {verb:"Describe",text:"where glycogen is stored in the human body.",pts:1,rubric:["Liver and muscle"]}
 ]},
{id:"F12",t:"water",title:"Properties of water in living things",
 stem:"Water's polarity and hydrogen bonding give it several emergent properties.",
 parts:[
  {verb:"Explain",text:"why water is polar and how that leads to hydrogen bonding.",pts:2,rubric:["Oxygen is more electronegative, pulling shared electrons → O partially negative, H partially positive","The δ+ H of one water molecule attracts the δ− O of another → hydrogen bonds between molecules (up to 4 per molecule)"]},
  {verb:"Describe",text:"TWO properties of water and a biological example of each.",pts:2,rubric:["Any two with correct example: cohesion/surface tension (water strider); adhesion + cohesion (capillary action in xylem); high specific heat (coastal climate, body temperature); evaporative cooling (sweating); floating ice (insulating lakes, lake turnover); versatile solvent (dissolving ions/polar molecules in cells)"]}
 ]}
];

// ================= UNIT 2 — CELL STRUCTURE & FUNCTION =================
for (const k in TOPICS) if (!TOPICS[k].unit) TOPICS[k].unit = 1;
Object.assign(TOPICS, {
  u2cells: {unit:2, name:"Cells, cell theory & organelles (2.1)", short:"Organelles"},
  u2endo:  {unit:2, name:"Endomembrane system & protein path (2.1–2.2)", short:"Endomembrane"},
  u2cyto:  {unit:2, name:"Cytoskeleton, cilia & junctions (2.1)", short:"Cytoskeleton"},
  u2size:  {unit:2, name:"Cell size & SA:V ratio (2.2)", short:"SA:V"},
  u2mem:   {unit:2, name:"Plasma membrane structure (2.3)", short:"Membrane"},
  u2perm:  {unit:2, name:"Membrane permeability & cell wall (2.4)", short:"Permeability"}
});
const UNITS = {1:{name:"Unit 1 · Chemistry of Life"}, 2:{name:"Unit 2 · Cell Structure & Function"}};
// Which unit is being taught now, and which topics were taught most recently (Today session leans on these)
const CURRENT = {unit:2, newest:["u2trans","u2tonic","u2wp"], taughtThrough:"2.8", asOf:"Fri Sep 25",
  // when each topic is taught in class (from the teacher's syllabus); the app won't quiz a topic before this date
  taughtOn:{u2cells:"2026-09-17",u2endo:"2026-09-17",u2cyto:"2026-09-17",u2size:"2026-09-18",u2mem:"2026-09-23",u2perm:"2026-09-23",
            u2trans:"2026-09-24",u2tonic:"2026-09-24",u2mech:"2026-09-24",u2lab:"2026-09-24",u2wp:"2026-09-28",u2comp:"2026-10-01"}};
// Daily plan: one guide idea per day, and that day's session practices exactly that idea.
// guide = page + section anchor in the study guide. Update this list as new material arrives.
const PLAN = [   // matches the teacher's syllabus: Cell Quiz Thu 10/1 (2.1–2.5), Unit 2 Test Wed 10/7 (all of Unit 2, 50% MCQ / 50% FRQ)
  {date:"2026-09-23", topic:"u2cells", idea:"Idea 1", title:"Cells: two basic designs",          guide:"unit2.html#i1", note:"2.1 · taught in class. Review to lock it in."},
  {date:"2026-09-24", topic:"u2endo",  idea:"Idea 2", title:"Follow one protein",               guide:"unit2.html#i2", note:"2.1–2.2 · taught in class. Review to lock it in."},
  {date:"2026-09-25", topic:"u2cyto",  idea:"Idea 3", title:"The cytoskeleton and junctions",   guide:"unit2.html#i3", note:"2.1 · taught in class. Review to lock it in."},
  {date:"2026-09-26", topic:"u2size",  idea:"Idea 4", title:"Why cells stay small (SA:V)",      guide:"unit2.html#i4", note:"2.2 · taught in class. Review to lock it in.", extra:"<b>Weekend FRQ (Sat or Sun, about 15 min):</b> tap <b>FRQ practice</b> below and type your answer. Claude grades it that night."},
  {date:"2026-09-27", topic:"u2mem",   idea:"Idea 5", title:"The membrane is Unit 1 chemistry", guide:"unit2.html#i5", note:"2.3 · taught in class. Review to lock it in.", extra:"<b>Lab prep (10 min):</b> read the <a href=\"unit2.html#lab-potato\">Potato Core Lab guide</a> before Monday, when class analyzes the lab."},
  {date:"2026-09-28", topics:["u2perm","u2trans"], topic:"u2perm", idea:"Ideas 6–7", title:"What gets through, and how (passive vs. active)", guide:"unit2.html#i6", note:"2.4–2.5 · taught in class. Review to lock it in. Read Idea 6, then Idea 7."},
  {date:"2026-09-29", topic:"mix", pool:["u2cells","u2endo","u2cyto","u2size","u2mem","u2perm","u2trans"], poolName:"the Cell Quiz topics (Ideas 1–7)", idea:"Quiz review 1", title:"Ideas 1–7, mixed", guide:"unit2.html#check", note:"Cell Quiz review, day 1 of 2. The quiz covers 2.1–2.5.", extra:"After the session, tap <b>Redo my misses</b> until it's empty."},
  {date:"2026-09-30", topic:"mix", pool:["u2cells","u2endo","u2cyto","u2size","u2mem","u2perm","u2trans"], poolName:"the Cell Quiz topics (Ideas 1–7)", idea:"Quiz review 2", title:"Final review before the Cell Quiz", guide:"unit2.html#check", note:"Cell Quiz review, day 2 of 2. The Cell Quiz is tomorrow.", extra:"Do the <b>self-check</b> at the bottom of the guide, then <b>Redo my misses</b> until it's empty."},
  {date:"2026-10-01", assess:"Cell Quiz (2.1–2.5)", topic:"u2tonic", idea:"Idea 8", title:"Tonicity: which way water moves", guide:"unit2.html#i8", note:"Cell Quiz today. Before school: 5 minutes on the self-check. Tonight: Idea 8 (2.6–2.7), which you need for the potato lab due tomorrow.", extra:"<b>Potato lab</b> is turned in tomorrow (Fri 10/2). Check your analysis against the <a href=\"unit2.html#lab-potato\">lab guide</a>."},
  {date:"2026-10-02", topic:"u2wp",    idea:"Idea 9", title:"Water potential, step by step",    guide:"unit2.html#i9", note:"2.7–2.8 · the one math-heavy topic. The Water Potential homework is due Tue 10/6.", extra:"Turn in the potato lab today."},
  {date:"2026-10-03", topic:"u2mech",  idea:"Idea 10", title:"Pumps and cotransport",           guide:"unit2.html#i10", note:"2.8 · the intestine model is a classic AP visual.", extra:"<b>Weekend lab FRQ (about 20 min):</b> <a href=\"./#frq=U2F8\">Potato cores and water potential</a>. Claude grades it that night. <b>Mock Test unlocks today</b> — a full 25-MCQ + 4-FRQ timed practice test (80 min total) under Practice. Take it once this weekend, before the real test Wed 10/7, so it reflects where she actually stands."},
  {date:"2026-10-04", topics:["u2comp","u2lab"], topic:"u2comp", idea:"Idea 11", title:"Compartments, endosymbiosis, and the labs", guide:"unit2.html#i11", note:"2.9–2.10 plus lab data questions.", extra:"Haven't taken the <b>Mock Test</b> yet? Today's the last easy day for it before the final review days — it's under Practice, 80 minutes, timed both halves."},
  {date:"2026-10-05", topic:"mix", poolName:"all of Unit 2", idea:"Test review 1", title:"All of Unit 2, mixed", guide:"unit2.html#test", note:"Unit 2 Test is Wed 10/7: 50% multiple choice, 50% FRQ.", extra:"<b>AP Classroom Progress Check #1:</b> do the multiple choice AND the pre-test reflection today. It's due Tue 10/6 at 8:15 am (+1 point on the test). The pre-reflection must be at least 24 hours before the test."},
  {date:"2026-10-06", topic:"mix", poolName:"all of Unit 2", idea:"Test review 2", title:"Final review before the Unit 2 Test", guide:"unit2.html#test", note:"The Unit 2 Test is tomorrow.", extra:"Also do one full FRQ: <a href=\"./#frq=U2F9\">Glucose absorption in the intestine</a>. Then <b>Redo my misses</b> until it's empty."},
  {date:"2026-10-07", assess:"Unit 2 Test (50% MCQ / 50% FRQ)", topic:"quiz", idea:"Test day", title:"Unit 2 Test today", guide:"unit2.html#test", extra:"No full session needed. Before school, 5 minutes on the self-check. After the test, remember the AP Classroom post-test reflection for the point, and also do <a href=\"./#frq=U2REFLECT\">this app's post-test reflection</a> — 3 quick questions, not graded, that tell us what was actually on the test so the next unit's practice matches it."}
];

MCQ.push(
// ---------- 2.1 CELLS & ORGANELLES ----------
{id:"u2c1",t:"u2cells",q:"Which statement is part of the cell theory?",
 opts:["All cells contain a nucleus and a plasma membrane","Cells come only from preexisting cells","All organisms are made of many specialized cells","Cells can arise from nonliving matter over time"],a:1,
 why:"Schleiden and Schwann (1839): cells are the fundamental units of life, all organisms are made of one or more cells, and cells come only from preexisting cells. Implication: life is continuous.",
 wrong:{0:"Prokaryotic cells have a plasma membrane but no nucleus.",2:"Organisms are made of ONE or more cells — bacteria are single-celled.",3:"That's spontaneous generation — the opposite of cell theory."}},
{id:"u2c2",t:"u2cells",q:"A student wants to study the internal membranes of a mitochondrion in fine detail. Which tool is best?",
 opts:["Compound light microscope","Scanning electron microscope (SEM)","Transmission electron microscope (TEM)","Dissecting (stereo) light microscope"],a:2,
 why:"TEM passes electrons through thin sections to show internal structures at ~2 nm resolution. SEM shows surface features.",
 wrong:{0:"Light microscopes resolve only ~0.2 µm — too coarse for membrane detail.",1:"SEM images surfaces, not internal structure.",3:"A dissecting scope gives low magnification of whole specimens — far too little detail."}},
{id:"u2c3",t:"u2cells",q:"Which structure is found in BOTH prokaryotic and eukaryotic cells?",
 opts:["Nucleus","Mitochondria","Ribosomes","Endoplasmic reticulum"],a:2,
 why:"All cells need to make proteins, so all have ribosomes and a plasma membrane. Prokaryotes lack membrane-bound organelles.",
 wrong:{0:"Prokaryotes keep DNA in a nucleoid region, not a nucleus.",1:"Mitochondria are membrane-bound — eukaryotes only.",3:"The ER is membrane-bound — eukaryotes only."}},
{id:"u2c4",t:"u2cells",q:"In a prokaryotic cell, the DNA is located in the",
 opts:["membrane-bound nucleus","nucleolus","nucleoid region","outer capsule"],a:2,
 why:"'Pro-karyote' = before nucleus. The DNA sits in the nucleoid region with no surrounding membrane.",
 wrong:{0:"Prokaryotes have no nucleus — no membrane-bound organelles at all.",1:"The nucleolus is inside a eukaryotic nucleus and makes rRNA/ribosomes.",3:"The capsule is an outer protective layer."}},
{id:"u2c5",t:"u2cells",q:"Which structure helps a bacterium attach to surfaces?",
 opts:["Flagellum","Pili","Nucleoid","Ribosome"],a:1,
 why:"Pili attach prokaryotes to surfaces. Flagella move them; the capsule protects them.",
 wrong:{0:"Flagella are for movement.",2:"The nucleoid holds DNA.",3:"Ribosomes make proteins."}},
{id:"u2c6",t:"u2cells",q:"The nucleolus is the site of",
 opts:["lipid and steroid hormone synthesis","rRNA and ribosome synthesis","ATP production from glucose","protein modification and packaging"],a:1,
 why:"From the slides: nucleolus → rRNA and ribosome synthesis. The nucleus as a whole holds the genetic material.",
 wrong:{0:"Lipids and steroids are made in the smooth ER.",2:"ATP comes from mitochondria.",3:"Modifying and packaging proteins happens in the Golgi."}},
{id:"u2c7",t:"u2cells",q:"Ribosomes are made of",
 opts:["phospholipids and cholesterol","rRNA and protein","DNA and protein","glycogen"],a:1,
 why:"Two subunits built from ribosomal RNA plus protein. Your teacher noted they act like enzymes even though they're mostly RNA — not all enzymatic function is protein-based.",
 wrong:{0:"Ribosomes have no membrane.",2:"DNA is in the nucleus, not in ribosomes.",3:"Glycogen is a storage carbohydrate."}},
{id:"u2c8",t:"u2cells",q:"In eukaryotic cells, ribosomes are found",
 opts:["only on the rough ER, because every protein must enter the ER as it is made","only free in the cytosol; the rough ER gets its proteins from free ribosomes","on the rough ER, free in the cytosol, and in mitochondria and chloroplasts","only inside the nucleus, where they read DNA directly as it is transcribed"],a:2,
 why:"All three locations appear on the slide. The ones inside mitochondria and chloroplasts are evidence for endosymbiosis (2.10).",
 wrong:{0:"Free ribosomes also exist; proteins used in the cytosol never enter the ER.",1:"Many ribosomes are bound to the rough ER and feed their proteins directly into it.",3:"Ribosomes are ASSEMBLED with help from the nucleolus but work in the cytoplasm, reading mRNA, not DNA."}},
{id:"u2c9",t:"u2cells",q:"Which organelle converts the chemical energy in glucose into ATP?",
 opts:["Chloroplast","Mitochondrion","Golgi apparatus","Lysosome"],a:1,
 why:"Mitochondria convert chemical energy from one form to another (glucose → ATP) in aerobic respiration. Your teacher specifically said NOT to call it 'the powerhouse' on an FRQ — describe the actual function.",
 wrong:{0:"Chloroplasts convert light energy into chemical energy (glucose).",2:"The Golgi modifies and packages proteins.",3:"Lysosomes digest."}},
{id:"u2c10",t:"u2cells",q:"Mitochondria and chloroplasts share which structural feature?",
 opts:["A single membrane studded with ribosomes","An outer membrane surrounding a folded inner membrane","A cellulose wall surrounding a single inner membrane","A nucleus-like core with no ribosomes of their own"],a:1,
 why:"Both have a double membrane, with the inner one folded to increase surface area for reactions.",
 wrong:{0:"Both have two membranes; a single ribosome-studded membrane is the rough ER.",2:"Cell walls surround whole cells, not organelles, and these organelles have two membranes.",3:"Both have their own DNA (not in a nucleus) and their own ribosomes."}},
{id:"u2c11",t:"u2cells",q:"Which set of structures would you find in a plant cell but NOT an animal cell?",
 opts:["Mitochondria, ribosomes, nucleus, smooth ER, Golgi","Cell wall, chloroplasts, large central vacuole","Golgi, lysosomes, rough ER","Plasma membrane, cytoskeleton, ribosomes"],a:1,
 why:"Cell wall, chloroplasts and a large central vacuole are the plant-only trio on the slides.",
 wrong:{0:"Both cell types have these.",2:"Both cell types have these (lysosomes are mainly animal, but the Golgi and ER are universal).",3:"Every eukaryotic cell has these."}},
{id:"u2c12",t:"u2cells",q:"The large central vacuole of a plant cell",
 opts:["produces ATP by breaking down stored sugars and starch","stores water and wastes, and helps the cell grow by taking up water","synthesizes proteins and sends them to the Golgi for packaging","anchors the organelles in place and resists tension on the cell"],a:1,
 why:"It's a large membranous storage sac; absorbing water helps the plant cell grow, and it can play a lysosome-like role.",
 wrong:{0:"ATP comes from mitochondria.",2:"Proteins are made by ribosomes (bound ones on the rough ER send them to the Golgi).",3:"Anchoring organelles and resisting tension are done by intermediate filaments."}},
{id:"u2c13",t:"u2cells",q:"The cell is described as the smallest unit that",
 opts:["contains DNA and can make copies of it","can carry out ALL the functions of life","is surrounded by its own membrane","can divide to copy itself"],a:1,
 why:"Direct from the slides: the cell is the smallest unit capable of carrying out all the functions of life.",
 wrong:{0:"Viruses and organelles contain and copy DNA but aren't alive on their own.",2:"Organelles have membranes too.",3:"Mitochondria and chloroplasts divide too; division alone isn't the defining idea."}},

// ---------- ENDOMEMBRANE SYSTEM ----------
{id:"u2e1",t:"u2endo",q:"The rough ER is 'rough' because it is",
 opts:["studded with ribosomes","covered in cholesterol","folded into cristae","lined with cell wall"],a:0,
 why:"Ribosomes on its surface make proteins that enter the RER — compartmentalizing protein production.",
 wrong:{1:"Cholesterol is inside membranes and isn't visible as texture.",2:"Cristae are the folds of the mitochondrial inner membrane.",3:"The cell wall is outside the plasma membrane."}},
{id:"u2e2",t:"u2endo",q:"Liver cells detoxify drugs and alcohol. Which organelle would you expect to be abundant in them?",
 opts:["Rough ER","Smooth ER","Chloroplasts","Central vacuole"],a:1,
 why:"Smooth ER: lipid and steroid synthesis, detoxification in liver cells, glycogen metabolism. No ribosomes.",
 wrong:{0:"The rough ER makes proteins.",2:"Animal cells don't have chloroplasts.",3:"The central vacuole is a plant structure."}},
{id:"u2e3",t:"u2endo",q:"Cells of the adrenal gland make large amounts of steroid hormones. Which organelle should be prominent?",
 opts:["Smooth ER","Rough ER","Lysosomes","Nucleolus"],a:0,
 why:"Steroids are lipids, and lipid/steroid synthesis happens in the smooth ER.",
 wrong:{1:"The rough ER makes proteins, not steroids.",2:"Lysosomes digest.",3:"The nucleolus makes ribosomes."}},
{id:"u2e4",t:"u2endo",q:"What is the correct path of a secreted protein?",
 opts:["Ribosome on rough ER → Golgi → transport vesicle → rough ER → vesicle → plasma membrane","Ribosome on rough ER → rough ER → transport vesicle → Golgi → vesicle → plasma membrane","Free ribosome → nucleus → transport vesicle → Golgi → lysosome → plasma membrane","Ribosome on smooth ER → smooth ER → mitochondrion → Golgi → vesicle → plasma membrane"],a:1,
 why:"This is the slide 23 question ('Describe the movement of a secretory protein'). Made by ribosomes on the RER, enters the RER, buds off in a transport vesicle, modified and packaged in the Golgi, shipped in a vesicle that fuses with the plasma membrane.",
 wrong:{0:"The Golgi comes AFTER the ER.",2:"Secreted proteins are made on bound (not free) ribosomes, never pass through the nucleus, and lysosomes are a destination, not a stop.",3:"Proteins are made on the ROUGH ER, and mitochondria aren't part of the secretory pathway."}},
{id:"u2e5",t:"u2endo",q:"Which function belongs to the Golgi apparatus?",
 opts:["Synthesizing proteins on its surface and sending them to the rough ER","Modifying, packaging and sorting proteins, including adding carbohydrates","Digesting worn-out organelles and engulfed food with hydrolytic enzymes","Making rRNA and assembling it with proteins into ribosome subunits"],a:1,
 why:"The Golgi modifies (adds sugar chains → glycoproteins), packages and sorts proteins. In plants it also makes polysaccharides.",
 wrong:{0:"Ribosomes synthesize proteins, and the path runs ER → Golgi, not the reverse.",2:"That's the lysosome.",3:"That's the nucleolus."}},
{id:"u2e6",t:"u2endo",q:"Lysosomes originate from the ______ and contain ______.",
 opts:["nucleolus; ribosomal RNA","Golgi; hydrolytic enzymes","smooth ER; detoxifying enzymes","mitochondria; ATP synthase"],a:1,
 why:"Lysosomes bud from the Golgi and hold hydrolytic (digestive) enzymes that break down nutrients and recycle damaged organelles — hydrolysis from Unit 1.",
 wrong:{0:"Lysosomes don't come from the nucleolus, which makes ribosomes.",2:"They don't come from the smooth ER; detox enzymes belong to the smooth ER itself.",3:"They don't come from mitochondria."}},
{id:"u2e7",t:"u2endo",q:"A cell has a defect that prevents its lysosomes from working. What would you expect?",
 opts:["It cannot make proteins, so secreted enzymes stop leaving the cell","Damaged organelles and undigested material accumulate inside the cell","It cannot produce ATP, so active transport pumps stop","Its DNA cannot be copied, so the cell stops dividing and dies"],a:1,
 why:"Lysosomes digest nutrients and recycle old or damaged organelles. Without them, waste builds up.",
 wrong:{0:"Ribosomes make proteins; lysosomes don't.",2:"ATP production is mitochondrial.",3:"DNA replication happens in the nucleus."}},
{id:"u2e8",t:"u2endo",q:"Glycoproteins on the cell surface, used for cell recognition, first pass through which organelle?",
 opts:["Rough ER","Lysosome","Mitochondrion","Nucleolus"],a:0,
 why:"All secreted proteins and most membrane proteins, including glycoproteins, pass through the rough ER (then the Golgi).",
 wrong:{1:"Lysosomes are an endpoint for digestion.",2:"Not part of the endomembrane system.",3:"Makes ribosomes, not glycoproteins."}},
{id:"u2e9",t:"u2endo",q:"Which description of the Golgi would earn credit on your teacher's FRQ?",
 opts:["The Golgi is like a post office that receives, labels and ships out the cell's proteins","The Golgi is a stack of pancakes that modifies, packages and sorts the cell's proteins","The Golgi is a set of flattened membrane sacs that modifies, packages and sorts proteins","The Golgi is the powerhouse of the cell, a stack of membrane sacs that makes energy"],a:2,
 why:"Your teacher's rule: don't use analogies to describe structure or function — describe the actual structure and function.",
 wrong:{0:"An analogy (post office) — no credit, even with the extra detail.",1:"Her own example of what NOT to write — an analogy earns zero, even with the functions added.",3:"Wrong organelle's job, and 'powerhouse' is a phrase she said never to use."}},
{id:"u2e10",t:"u2endo",q:"The nuclear envelope is",
 opts:["a single membrane with no openings, separate from the ER","a double membrane with pores, continuous with the ER","a double membrane made of peptidoglycan, like a cell wall","found in prokaryotes, surrounding the nucleoid region"],a:1,
 why:"Structure: spherical, double membrane with pores, continuous with the endoplasmic reticulum.",
 wrong:{0:"It's a double membrane, with pores, and continuous with the ER.",2:"It's made of phospholipids; peptidoglycan is in bacterial cell walls.",3:"Prokaryotes have no nucleus or nuclear envelope; the nucleoid has no membrane."}},
{id:"u2e11",t:"u2endo",q:"Which organelles are part of the endomembrane system?",
 opts:["Nuclear envelope, ER, Golgi, lysosomes, vesicles, plasma membrane","Mitochondria, chloroplasts, nuclear envelope, ER, Golgi, and vesicles","ER, Golgi, ribosomes, cytoskeleton, lysosomes and vesicles","Cell wall, plasma membrane, Golgi, ER, and the nucleoid region"],a:0,
 why:"These membranes are connected directly or by vesicles. Mitochondria and chloroplasts are separate — they're the energy-converting organelles.",
 wrong:{1:"Mitochondria and chloroplasts are energy-converting organelles from endosymbiosis, not endomembrane.",2:"Ribosomes and the cytoskeleton have no membrane.",3:"The cell wall is outside the plasma membrane, and the nucleoid (prokaryotes) has no membrane."}},

// ---------- CYTOSKELETON / CILIA / JUNCTIONS ----------
{id:"u2k1",t:"u2cyto",q:"Which cytoskeletal element is a straight, hollow tube that moves chromosomes and vesicles?",
 opts:["Microfilament","Intermediate filament","Microtubule","Cell wall"],a:2,
 why:"Microtubules (starred on the slide): hollow tubes of globular protein; structure, chromosome movement, vesicle transport.",
 wrong:{0:"Microfilaments are solid actin rods that change cell shape.",1:"Intermediate filaments are ropelike and resist tension, anchoring organelles.",3:"Not part of the cytoskeleton."}},
{id:"u2k2",t:"u2cyto",q:"Microfilaments are made of ______ and function in ______.",
 opts:["tubulin; moving chromosomes during division","actin; changing the cell's shape","keratin; anchoring organelles","cellulose; supporting the cell wall"],a:1,
 why:"Solid helical rods of actin; cell structure and shape change.",
 wrong:{0:"That's microtubules.",2:"Keratin-type proteins form intermediate filaments, which anchor organelles.",3:"Cellulose is a carbohydrate in plant cell walls, not cytoskeleton."}},
{id:"u2k3",t:"u2cyto",q:"Cilia and eukaryotic flagella share which internal structure?",
 opts:["A 9 + 2 arrangement of microtubules","A core of solid actin microfilaments","A double membrane with its own DNA","A rotating protein rod anchored in the cell wall"],a:0,
 why:"Both are microtubules in a 9 + 2 arrangement; cilia are short and numerous, flagella long and whiplike.",
 wrong:{1:"Actin forms microfilaments; cilia and flagella are built from microtubules.",2:"That's mitochondria and chloroplasts.",3:"That's a prokaryotic flagellum; eukaryotic cilia and flagella bend using microtubules."}},
{id:"u2k4",t:"u2cyto",q:"Dynein makes a cilium bend by",
 opts:["changing shape to slide microtubule doublets, while nexin keeps them from sliding apart","digesting the microtubule doublets on one side, so the cilium curls toward the shorter side","pumping water into one side of the cilium so that side swells and pushes it over","walking vesicles along actin filaments that run the length of the cilium's core"],a:0,
 why:"Dynein is a motor protein; its conformational change drives the sliding of doublets. Nexin holds the doublets together, so the sliding becomes a bend. Structure → function.",
 wrong:{1:"Nothing is digested; the doublets slide.",2:"Movement isn't driven by water.",3:"Dynein works on microtubules, not actin, and bends the cilium by sliding doublets, not by carrying vesicles."}},
{id:"u2k5",t:"u2cyto",q:"Kinesin is a motor protein that",
 opts:["binds vesicles and 'walks' them along microtubules","seals neighboring cells into tight junctions","makes ribosomes by joining rRNA with proteins","slides actin filaments to change the cell's shape"],a:0,
 why:"Your teacher's favorite: kinesin carries vesicles along microtubule tracks.",
 wrong:{1:"Tight junctions are membrane protein seals, not motor proteins.",2:"The nucleolus makes ribosomes.",3:"That describes myosin with microfilaments; kinesin walks along microtubules."}},
{id:"u2k6",t:"u2cyto",q:"Which junction allows water and small molecules to pass directly between neighboring cells?",
 opts:["Tight junction (between intestinal cells)","Desmosome (anchoring junction in skin)","Gap junction (plasmodesmata in plants)","Cell wall (made of cellulose in plants)"],a:2,
 why:"Gap (communicating) junctions and plasmodesmata (starred on the slide) are small openings connecting neighboring cells.",
 wrong:{0:"Tight junctions seal cells into a leak-proof sheet — nothing passes between them.",1:"Desmosomes attach cells like Velcro; they don't make openings.",3:"A cell wall surrounds the cell; plasmodesmata are the channels through it."}},
{id:"u2k7",t:"u2cyto",q:"The cells lining the intestine must keep digestive fluid from leaking between them. Which junction does that?",
 opts:["Gap junction","Tight junction","Plasmodesmata","Anchoring desmosome"],a:1,
 why:"Tight junctions seal adjacent cells to form a leak-proof sheet.",
 wrong:{0:"Gap junctions are openings — the opposite of a seal.",2:"Plasmodesmata are plant channels.",3:"Desmosomes anchor cells but don't seal them."}},
{id:"u2k8",t:"u2cyto",q:"Which cytoskeletal element resists tension and anchors organelles in place?",
 opts:["Microtubules","Actin microfilaments","Intermediate filaments","Motor proteins"],a:2,
 why:"Intermediate filaments: ropelike fibrous proteins that anchor organelles, resist tension and maintain rigidity.",
 wrong:{0:"Microtubules move chromosomes and vesicles.",1:"Microfilaments change cell shape.",3:"Motor proteins move things along the cytoskeleton; they don't anchor organelles or resist tension."}},

// ---------- CELL SIZE & SA:V ----------
{id:"u2s1",t:"u2size",q:"As a cell grows larger, its surface-area-to-volume ratio",
 opts:["increases","decreases","stays the same","doubles"],a:1,
 why:"Volume grows faster (cubed) than surface area (squared), so SA:V decreases — highlighted on her slide.",
 wrong:{0:"Reversed.",2:"The two grow at different rates.",3:"It falls, not rises."}},
{id:"u2s2",t:"u2size",q:"Why are most cells small?",
 opts:["Small cells need less DNA, so they can copy it quickly before each division","A high SA:V lets materials enter and wastes leave fast enough for the cell's volume","Large cells cannot hold organelles, so most of their volume would be empty cytoplasm","A low SA:V ratio gives a small cell more volume to store nutrients and wastes"],a:1,
 why:"Everything enters and leaves through the membrane. A larger cell has relatively less membrane per volume, so exchange can't keep up.",
 wrong:{0:"DNA amount isn't the constraint here.",2:"Large cells can have organelles.",3:"Small cells have a HIGH SA:V, and the advantage is exchange across the surface, not storage."}},
{id:"u2s3",t:"u2size",q:"The lining of the small intestine is folded into villi and microvilli. The main advantage is",
 opts:["increased volume for storing absorbed nutrients","increased surface area for absorbing nutrients","increased rigidity to resist the movement of food","fewer cells needed to line the intestine"],a:1,
 why:"Her structure → function example: folding tremendously increases surface area for absorption.",
 wrong:{0:"The point is surface area, not volume — folding adds membrane, not storage space.",2:"Folding isn't about rigidity.",3:"Not the function."}},
{id:"u2s4",t:"u2size",q:"Besides folding its membrane, what else can a growing cell do to restore a high SA:V ratio?",
 opts:["Divide","Grow larger","Lose its nucleus","Stop making proteins"],a:0,
 why:"Dividing produces two smaller cells, each with a higher SA:V ratio.",
 wrong:{1:"Growing lowers SA:V further.",2:"Irrelevant to SA:V.",3:"Irrelevant to SA:V."}},
{id:"u2s5",t:"u2size",q:"Elephant and mouse kidney cells are about the same size. The best explanation is that",
 opts:["elephants have fewer but more active cells, so each kidney cell does not need to grow","cell size is limited by SA:V, so larger organisms have more cells, not larger ones","elephant cells have fewer organelles, so they need less volume than mouse cells","kidney cells exchange few materials, so their size doesn't depend on SA:V at all"],a:1,
 why:"From the cell-size lab introduction: SA:V limits cell size, so a larger organism is built from more cells.",
 wrong:{0:"Elephants have far more cells.",2:"They have the usual organelles.",3:"Kidney cells exchange a lot of material, so SA:V matters a lot."}},
{id:"u2s6",t:"u2size",q:"In the Decocube lab, which cube will have the greatest percentage of its volume reached by vinegar after 15 minutes?",
 opts:["The 2 cm cube","The 0.5 cm cube","Both the same","It depends on the vinegar temperature only"],a:1,
 why:"Vinegar penetrates to about the same depth in both cubes, but that depth is a much larger fraction of the small cube, whose SA:V is 12:1 versus 3:1 in cm (1.2:1 vs 0.3:1 if you calculate in mm, as the lab table does).",
 wrong:{0:"The big cube has the lowest SA:V.",2:"Depth is similar, but % diffused is not.",3:"Temperature is held constant; size is the variable."}},
{id:"u2s7",t:"u2size",q:"In the Decocube lab, what is the independent variable?",
 opts:["Distance the vinegar penetrates (mm)","Cube size (and therefore SA:V ratio)","Time in the vinegar (15 minutes)","Percent of each cube's volume reached"],a:1,
 why:"You change the cube size. Distance penetrated / % diffused is the dependent variable (measured). Time and vinegar type are constants.",
 wrong:{0:"That's the dependent variable (with units: mm).",2:"Held constant at 15 minutes.",3:"That's a dependent variable calculated from the results."}},
{id:"u2s8",t:"u2size",q:"If smaller cells are more efficient, why aren't cells infinitely small?",
 opts:["Tiny cells have too much membrane, which wastes lipids","A cell must be large enough to hold DNA, ribosomes and the machinery for life","Small cells cannot divide because their chromosomes would not fit through","Very small cells have a low SA:V, so diffusion becomes too slow for them"],a:1,
 why:"Slide 45: there's a lower limit — the cell must hold everything needed to carry out all functions of life.",
 wrong:{0:"More membrane per volume is an advantage.",2:"Small cells divide fine.",3:"Small cells have a HIGH SA:V."}},

// ---------- 2.3 PLASMA MEMBRANE ----------
{id:"u2m1",t:"u2mem",q:"The 'fluid mosaic model' describes the membrane as",
 opts:["a rigid layer of protein that holds phospholipids in fixed positions like tiles","a phospholipid bilayer in which proteins and lipids drift sideways, like a mosaic","two fixed layers of protein with a sheet of lipid sandwiched between them, like bread","a carbohydrate wall with embedded proteins that can slide sideways, like a mosaic"],a:1,
 why:"Fluid: phospholipids and proteins drift sideways. Mosaic: many different components — proteins, cholesterol, glycoproteins, glycolipids.",
 wrong:{0:"The membrane is fluid, not rigid.",2:"An old, rejected model (protein–lipid–protein sandwich).",3:"That describes a cell wall, and cell walls aren't fluid."}},
{id:"u2m2",t:"u2mem",q:"Why do phospholipids spontaneously form a bilayer in water?",
 opts:["Their tails are charged and attracted to water, so the tails line both outer surfaces of the bilayer","Hydrophilic heads face water on both sides and hydrophobic tails face each other, away from water","Water is nonpolar, so it dissolves the heads and pushes the tails into a second layer","Membrane proteins pull them into two rows and hold the tails together with covalent bonds"],a:1,
 why:"Both the inside and outside of a cell are aqueous. Heads toward water, tails hidden — like attracts like from Unit 1.",
 wrong:{0:"The tails are nonpolar hydrocarbon — they avoid water.",2:"Water is polar.",3:"It happens without proteins; the tails are held together by hydrophobic interactions, not covalent bonds."}},
{id:"u2m3",t:"u2mem",q:"Phospholipids are placed between a layer of water (top) and oil (bottom). How do they orient?",
 opts:["As a bilayer with the tails in the middle, sandwiched between the water and the oil","As a single layer: heads pointing up into the water, tails down into the oil","As a single layer: tails pointing up into the water, heads down into the oil","They dissolve completely in the water, since the heads are polar"],a:1,
 why:"With oil on one side and water on the other, a single layer is enough: tails to the nonpolar oil, heads to the polar water.",
 wrong:{0:"A bilayer forms only with water on BOTH sides.",2:"Reversed: polar heads avoid oil, and nonpolar tails avoid water.",3:"The tails are hydrophobic."}},
{id:"u2m4",t:"u2mem",q:"At low temperatures, cholesterol in the membrane",
 opts:["decreases fluidity by holding the tails tightly together","increases fluidity by keeping phospholipid tails from packing tightly","has no effect, because cholesterol only works at warm temperatures","dissolves out of the membrane, letting the tails pack more tightly"],a:1,
 why:"Cholesterol's effect is temperature-dependent: a spacer in the cold (↑ fluidity), a restraint in the heat (↓ fluidity).",
 wrong:{0:"That's its effect at WARM temperatures.",2:"It has an effect in both directions.",3:"Cholesterol is a stable lipid in the membrane; it stays put."}},
{id:"u2m5",t:"u2mem",q:"At warm temperatures, cholesterol",
 opts:["decreases fluidity by interacting with multiple phospholipid tails","increases fluidity by spacing phospholipid tails farther apart","opens gaps between lipids so ions can pass","breaks phospholipids apart into fatty acids and glycerol"],a:0,
 why:"By holding onto neighboring tails, cholesterol restrains their movement and keeps the membrane from becoming too fluid.",
 wrong:{1:"That's its effect in the cold.",2:"It doesn't open the membrane to ions.",3:"It doesn't break phospholipids."}},
{id:"u2m6",t:"u2mem",q:"Glycoproteins and glycolipids on the outer surface of the membrane function mainly in",
 opts:["producing ATP for the cell","cell recognition ('ID tags')","building lipids for the membrane","transporting water into the cell"],a:1,
 why:"'Glyco' = carbohydrate chain. Attached to a protein → glycoprotein; to a phospholipid head → glycolipid. Both act as identity markers.",
 wrong:{0:"Mitochondria make ATP.",2:"The smooth ER makes lipids.",3:"Aquaporins transport water."}},
{id:"u2m7",t:"u2mem",q:"An integral protein spans the membrane. The part of it inside the bilayer most likely has",
 opts:["polar, hydrophilic amino acids","nonpolar, hydrophobic amino acids","charged amino acids that attract the tails","no amino acids, only attached sugars"],a:1,
 why:"The middle of the bilayer is the nonpolar tail region, so the protein segment there has nonpolar R-groups. The parts sticking into the water are polar. Unit 1 R-groups meet Unit 2.",
 wrong:{0:"Those face the watery environment.",2:"Charged groups would be repelled by the nonpolar tail region.",3:"Proteins are made of amino acids; sugars are attached on the outer surface."}},
{id:"u2m8",t:"u2mem",q:"A protein on the surface of a liver cell binds insulin, triggering a response inside the cell. This protein is acting as a",
 opts:["channel","receptor","cell-adhesion molecule","enzyme"],a:1,
 why:"Receptors bind chemical messengers such as hormones sent by other cells.",
 wrong:{0:"Channels let solutes through.",2:"Adhesion molecules bind neighboring cells.",3:"Enzymes catalyze reactions."}},
{id:"u2m9",t:"u2mem",q:"Which type of membrane protein sits on the inner or outer surface without passing into the bilayer?",
 opts:["Integral (transmembrane)","Peripheral","Channel","Aquaporin"],a:1,
 why:"Peripheral proteins sit on the surface. Integral proteins are embedded, partly or all the way through.",
 wrong:{0:"Integral proteins are embedded.",2:"Channels pass through the membrane.",3:"Aquaporins are water channels through the membrane."}},
{id:"u2m10",t:"u2mem",q:"Internal membranes in eukaryotic cells are an advantage because they",
 opts:["make the cell smaller, so its SA:V ratio stays high enough for diffusion","separate reactions into compartments and add membrane surface area for reactions","remove the need for a plasma membrane, since each organelle controls its own traffic","keep all enzymes mixed together in one space so reactions can find each other faster"],a:1,
 why:"Compartmentalization: each organelle can maintain its own internal environment, and folded membranes add surface area.",
 wrong:{0:"Eukaryotic cells are usually larger; that's not the purpose.",2:"All cells still need a plasma membrane.",3:"The advantage is keeping reactions SEPARATE, not mixed together."}},

// ---------- 2.4 PERMEABILITY & CELL WALL ----------
{id:"u2p1",t:"u2perm",q:"Which molecule crosses the lipid bilayer most easily without help?",
 opts:["Glucose","Na⁺","O₂","Proteins"],a:2,
 why:"Small and nonpolar: O₂, CO₂ and N₂ pass directly between the lipids.",
 wrong:{0:"Large and polar — needs a channel or carrier.",1:"Ions are charged and repelled by the nonpolar tails.",3:"Far too large."}},
{id:"u2p2",t:"u2perm",q:"Sodium ions (Na⁺) cross the membrane mainly",
 opts:["directly between the lipids, since they are small","through channel or transport proteins","by dissolving in the nonpolar fatty acid tails","they cannot cross the membrane at all"],a:1,
 why:"Ions are charged; the hydrophobic core blocks them, so they need proteins.",
 wrong:{0:"Small size doesn't help — charge blocks direct passage.",2:"Charged ions don't dissolve in nonpolar tails.",3:"They cross — with protein help."}},
{id:"u2p3",t:"u2perm",q:"Water crosses the membrane",
 opts:["only through aquaporins, because water is polar and can't touch the tails","a little between the lipids and in large amounts through aquaporins","only between the lipids, because aquaporins are pumps for ions","only with ATP, through pumps that push it against its gradient"],a:1,
 why:"Water is small but polar: a little slips between lipids; aquaporin channels carry the bulk.",
 wrong:{0:"Some water also slips between the lipids.",2:"Aquaporins are water channels, and they carry most of the water.",3:"Water movement is passive."}},
{id:"u2p4",t:"u2perm",q:"In the POGIL, urea crossed the membrane more easily than glucose. The best explanation is that urea is",
 opts:["nonpolar","smaller","charged","a lipid"],a:1,
 why:"Both are polar, but urea is much smaller, so it slips through more easily. Size matters alongside polarity.",
 wrong:{0:"Urea is polar.",2:"Urea is uncharged.",3:"Urea isn't a lipid."}},
{id:"u2p5",t:"u2perm",q:"Steroid hormones can cross the membrane without a protein because they are",
 opts:["charged ions","nonpolar (lipids)","very small ions","small polar sugars"],a:1,
 why:"Large but nonpolar: steroids pass (slowly) between the lipids. Like dissolves like.",
 wrong:{0:"Steroids are uncharged.",2:"Steroids are large organic molecules.",3:"Steroids are lipids, not sugars."}},
{id:"u2p6",t:"u2perm",q:"'Selectively permeable' means the membrane",
 opts:["lets all small molecules through, even ions","lets nothing through unless the cell spends ATP","lets some substances cross more easily than others","only lets water through, blocking all solutes"],a:2,
 why:"Size and polarity decide what crosses freely; proteins control the rest. That selectivity maintains homeostasis.",
 wrong:{0:"Ions are blocked without proteins, even small ones.",1:"Small nonpolar molecules cross freely, with no ATP.",3:"Gases and nonpolar molecules cross too."}},
{id:"u2p7",t:"u2perm",q:"Diffusion of O₂ into a cell is passive, meaning",
 opts:["O₂ moves from high O₂ concentration to low O₂ concentration using ATP from the cell","O₂ moves from high O₂ concentration to low O₂ concentration without using ATP","O₂ moves from low O₂ concentration to high O₂ concentration without using ATP","O₂ is carried into the cell inside vesicles, without energy from the cell"],a:1,
 why:"From the POGIL: diffusion is driven by random molecular movement from high to low concentration — no energy needed.",
 wrong:{0:"Passive = no ATP.",2:"Reversed: low to high is against the gradient, which would need active transport.",3:"Vesicles are bulk transport, and they cost energy."}},
{id:"u2p8",t:"u2perm",q:"When a transport protein (such as the carrier GLUT) helps glucose move from high glucose concentration to low glucose concentration, the process is",
 opts:["primary active transport","facilitated diffusion","simple diffusion","receptor-mediated endocytosis"],a:1,
 why:"Passive (down the gradient) but needs a protein: facilitated diffusion. Coming up in 2.5–2.8.",
 wrong:{0:"Active transport uses ATP to move AGAINST the gradient.",2:"Simple diffusion needs no protein.",3:"Endocytosis uses vesicles."}},
{id:"u2p9",t:"u2perm",q:"The inside lining of a channel that carries ions is most likely",
 opts:["nonpolar","polar or charged","made of cholesterol","made of carbohydrate"],a:1,
 why:"POGIL Q10: ions are charged, so the channel's inner surface must be polar to let them through.",
 wrong:{0:"A nonpolar lining would repel ions.",2:"Channels are proteins.",3:"Channels are proteins."}},
{id:"u2p10",t:"u2perm",q:"Plant, fungal and prokaryotic cell walls are alike in that they",
 opts:["are made of phospholipids and control what crosses","are made of complex carbohydrates and give the cell structure and support","are identical in chemical makeup, since all are built from cellulose","exist only in plants, where they keep cells from bursting in fresh water"],a:1,
 why:"All cell walls are made of complex carbs (cellulose, chitin, peptidoglycan) and have a similar function: structure and permeability.",
 wrong:{0:"That describes the plasma membrane; walls are carbohydrate.",2:"Their chemistry differs (cellulose vs chitin vs peptidoglycan).",3:"Fungi and prokaryotes have them too."}},
{id:"u2p11",t:"u2perm",q:"Which molecule would need a membrane protein to cross the membrane?",
 opts:["Nitrogen gas (N₂)","Carbon dioxide (CO₂)","Bicarbonate ion (HCO₃⁻)","Oxygen gas (O₂)"],a:2,
 why:"POGIL extension Q14: bicarbonate is charged, so it can't cross the hydrophobic core freely. The gases are small and nonpolar.",
 wrong:{0:"Small nonpolar gas — crosses freely.",1:"Small nonpolar gas — crosses freely.",3:"Small nonpolar gas — crosses freely."}},

// ---------- NUMERIC (type in the answer) ----------
{id:"u2n1",t:"u2size",type:"num",q:"A cube-shaped cell is 2 cm on each side. What is its surface-area-to-volume ratio? Write it the way your teacher wants: SA:1 (for example 5:1). (Formula sheet: SA = 6s², V = s³)",
 answer:3, tol:0.05, unit:"", ratio:true,
 why:"SA = 6 × 2² = 24 cm². V = 2³ = 8 cm³. SA:V = 24 ÷ 8 = 3, written 3:1.",
 hint:"Compute SA and V separately first, then divide SA by V."},
{id:"u2n2",t:"u2size",type:"num",q:"A cube-shaped cell is 0.5 cm on each side. What is its SA:V ratio? (Write it as SA:1.)",
 answer:12, tol:0.05, unit:"", ratio:true,
 why:"SA = 6 × 0.5² = 1.5 cm². V = 0.5³ = 0.125 cm³. SA:V = 1.5 ÷ 0.125 = 12, written 12:1. That's 4× the 2 cm cube, which is why it diffuses so much faster in the Decocube lab.",
 hint:"0.5² = 0.25 and 0.5³ = 0.125."},
{id:"u2n3",t:"u2size",type:"num",q:"A spherical cell has a radius of 3 µm. What is its SA:V ratio? Write it as SA:1. (SA = 4πr², V = 4/3 πr³)",
 answer:1, tol:0.02, unit:"", ratio:true,
 why:"SA = 4π(9) ≈ 113.1 µm². V = 4/3 π(27) ≈ 113.1 µm³. SA:V = 1:1. Shortcut: for a sphere SA:V = 3/r = 3/3 = 1.",
 hint:"Divide the formulas before plugging in: (4πr²)/(4/3 πr³) = 3/r."},
{id:"u2n4",t:"u2size",type:"num",q:"A 2 cm Decocube soaks in vinegar and the vinegar penetrates 0.5 cm in from every face. What percent of the cube's volume has the vinegar reached?",
 answer:87.5, tol:0.5, unit:"%",
 why:"The unreached core is a cube 2 − 0.5 − 0.5 = 1 cm per side, so 1 cm³. Total = 8 cm³. Reached = 7 cm³. 7 ÷ 8 = 87.5%.",
 hint:"Subtract the penetration depth from BOTH sides to find the untouched inner cube."},
{id:"u2n5",t:"u2size",type:"num",q:"A 5 mm cube (SA = 150 mm²) is cut into 64 identical cubes, each 1.25 mm on a side. What is the TOTAL surface area of the 64 cubes, in mm²?",
 answer:600, tol:1, unit:"mm²",
 why:"Each small cube: 6 × 1.25² = 9.375 mm². × 64 = 600 mm². Same volume, four times the surface — the slide 42 example.",
 hint:"Find one small cube's SA, then multiply by 64."},
{id:"u2n6",t:"u2size",type:"num",q:"A cell's side length doubles (a cube going from 1 µm to 2 µm). By what factor does its SA:V ratio change? (Enter as a decimal, e.g. 0.25)",
 answer:0.5, tol:0.01, unit:"×",
 why:"1 µm cube: SA:V = 6/1 = 6. 2 µm cube: SA:V = 24/8 = 3. It halves. For a cube SA:V = 6/s, so doubling s halves the ratio.",
 hint:"For a cube, SA:V simplifies to 6/s."}
);

FRQ.push(
{id:"U2F1",t:"u2endo",title:"The path of a secreted protein",
 stem:"Pancreatic cells secrete large amounts of digestive enzymes, which are proteins.",
 parts:[
  {verb:"Identify",text:"the organelle where these enzymes are synthesized.",pts:1,rubric:["Ribosomes on the rough ER (accept: rough ER)"]},
  {verb:"Describe",text:"the path the enzymes take from synthesis to leaving the cell.",pts:2,rubric:["RER → transport vesicle → Golgi apparatus (modified/packaged/sorted)","Golgi → secretory vesicle → fuses with plasma membrane → released outside the cell (exocytosis)"]},
  {verb:"Predict",text:"how the amount of rough ER in a pancreatic cell compares with a cell that secretes little protein.",pts:1,rubric:["Pancreatic cells have MORE rough ER (compare both cells)"]}
 ]},
{id:"U2F2",t:"u2size",title:"Why cells stay small",
 stem:"Students soaked a 2 cm Decocube and a 0.5 cm Decocube in vinegar for 15 minutes. Vinegar reached 87.5% of the 2 cm cube's volume and 100% of the 0.5 cm cube's volume.",
 parts:[
  {verb:"Identify",text:"the independent and dependent variables.",pts:1,rubric:["Independent: cube size / SA:V ratio. Dependent: % of volume diffused (or penetration distance in mm)"]},
  {verb:"Calculate",text:"the SA:V ratio of each cube.",pts:1,rubric:["2 cm: SA = 24 cm², V = 8 cm³, SA:V = 3:1; 0.5 cm: SA = 1.5 cm², V = 0.125 cm³, SA:V = 12:1. Also accept 0.3:1 and 1.2:1 if calculated in mm (the lab table's units). Units stated; written as SA:1."]},
  {verb:"Explain",text:"how the data support the claim that cells must remain small.",pts:2,rubric:["The smaller cube, with the higher SA:V (12 vs 3), was more completely diffused (100% vs 87.5%) — cite the data for BOTH cubes","Cells exchange nutrients and wastes across the membrane; as size increases SA:V decreases, so exchange can't keep up with the cell's volume"]}
 ]},
{id:"U2F3",t:"u2mem",title:"Cholesterol and temperature",
 stem:"Cholesterol is a steroid found between the phospholipids of animal cell membranes.",
 parts:[
  {verb:"Describe",text:"the effect of cholesterol on membrane fluidity at warm temperatures and at cold temperatures.",pts:2,rubric:["Warm: decreases fluidity (restrains phospholipid movement by interacting with multiple tails)","Cold: increases fluidity (acts as a spacer, preventing tails from packing tightly)"]},
  {verb:"Explain",text:"why maintaining membrane fluidity matters to the cell.",pts:1,rubric:["Membrane proteins and phospholipids must be able to move to function (fluid mosaic); too rigid or too fluid disrupts transport and selective permeability → homeostasis"]},
  {verb:"Predict",text:"what would happen to a membrane with no cholesterol at a very low temperature.",pts:1,rubric:["It would become too rigid/solidify (tails pack tightly), reducing function"]}
 ]},
{id:"U2F4",t:"u2perm",title:"What crosses the membrane",
 stem:"A researcher places O₂, glucose, Na⁺ and a steroid hormone on one side of an artificial phospholipid bilayer with NO proteins.",
 parts:[
  {verb:"Identify",text:"which two substances will cross the bilayer.",pts:1,rubric:["O₂ and the steroid hormone"]},
  {verb:"Explain",text:"why glucose and Na⁺ do not cross.",pts:2,rubric:["The bilayer's interior is made of nonpolar/hydrophobic fatty-acid tails","Na⁺ is charged and glucose is large and polar, so they are repelled by / can't pass the hydrophobic core"]},
  {verb:"Describe",text:"one change to the artificial membrane that would allow glucose to cross, and the direction it would move.",pts:1,rubric:["Add a channel/carrier (transport) protein; glucose then moves by facilitated diffusion from the side with high glucose concentration to the side with low glucose concentration. 'High to low' without naming glucose concentration earns no credit."]}
 ]}
);

// ---------- Daily short written questions (about 3–4 minutes each; graded by Claude, not self-scored) ----------
FRQ.push(
{id:"U2S1",t:"u2cells",short:true,title:"Prokaryote or eukaryote?",
 stem:"A newly discovered single-celled organism has DNA located in a region of the cytoplasm with no membrane around it, has ribosomes, and has a plasma membrane.",
 parts:[
  {verb:"Identify",text:"whether the organism is a prokaryote or a eukaryote.",pts:1,rubric:["Prokaryote"]},
  {verb:"Justify",text:"your answer using the evidence given.",pts:1,rubric:["Its DNA is not enclosed in a membrane-bound nucleus (it is in a nucleoid region); prokaryotes lack membrane-bound organelles. (Having ribosomes or a membrane does NOT distinguish them: all cells have those.)"]}
 ]},
{id:"U2S2",t:"u2cells",short:true,title:"What every cell has",
 stem:"Bacteria, plant cells, and human cells look very different.",
 parts:[
  {verb:"Identify",text:"TWO structures that ALL cells have.",pts:1,rubric:["Any two of: plasma membrane, ribosomes, DNA, cytoplasm (both must be correct)"]},
  {verb:"Explain",text:"why every cell must have ribosomes.",pts:1,rubric:["Every cell must make proteins (enzymes, membrane proteins, etc.), and ribosomes are where proteins are synthesized (amino acids joined by peptide bonds)"]}
 ]},
{id:"U2S3",t:"u2cells",short:true,title:"Plant cell or animal cell?",
 stem:"Under a microscope, a cell shows a large central vacuole, chloroplasts, and a rigid outer layer outside its plasma membrane.",
 parts:[
  {verb:"Identify",text:"the type of cell and the name of the rigid outer layer.",pts:1,rubric:["Plant cell; the cell wall (made of cellulose). Both needed"]},
  {verb:"Describe",text:"ONE function of the large central vacuole.",pts:1,rubric:["Stores water (and ions/nutrients/wastes) and/or maintains turgor pressure that keeps the plant cell firm and the plant upright"]}
 ]},
{id:"U2S4",t:"u2endo",short:true,title:"ER before Golgi",
 stem:"A protein that will be secreted from the cell is made on a ribosome attached to the rough ER.",
 parts:[
  {verb:"Describe",text:"the path the protein takes AFTER the rough ER until it leaves the cell. Name each structure in order.",pts:2,rubric:["Transport vesicle → Golgi apparatus (where it is modified/packaged/sorted)","Secretory vesicle → fuses with the plasma membrane → released by exocytosis"]}
 ]},
{id:"U2S5",t:"u2endo",short:true,title:"Structure fits the job",
 stem:"Cells in the liver break down drugs and toxins, and they also make lipids.",
 parts:[
  {verb:"Predict",text:"which organelle would be especially abundant in liver cells.",pts:1,rubric:["Smooth ER"]},
  {verb:"Justify",text:"your prediction.",pts:1,rubric:["The smooth ER synthesizes lipids and detoxifies drugs/poisons, so a cell that does a lot of both needs more smooth ER (the structure matches the job)"]}
 ]},
{id:"U2S6",t:"u2endo",short:true,title:"Why the mitochondrion is folded",
 stem:"The inner membrane of a mitochondrion is highly folded into cristae.",
 parts:[
  {verb:"Explain",text:"how this structure supports the function of the mitochondrion. Use the pattern: structure → feature → what it allows.",pts:2,rubric:["The folds increase the surface area of the inner membrane","More surface area holds more of the proteins/enzymes for the reactions of cellular respiration, so more ATP can be made"]}
 ]},
{id:"U2S7",t:"u2cyto",short:true,title:"Tracks inside the cell",
 stem:"A drug stops tubulin from assembling into fibers.",
 parts:[
  {verb:"Identify",text:"the cytoskeleton fiber that would be affected.",pts:1,rubric:["Microtubules"]},
  {verb:"Predict",text:"ONE effect on the cell, and explain why.",pts:1,rubric:["Any one with a reason: vesicles can't be moved along tracks (motor proteins like kinesin need microtubules); chromosomes can't be separated during cell division; cilia/flagella can't form or move (they are built from microtubules)"]}
 ]},
{id:"U2S8",t:"u2cyto",short:true,title:"Which junction?",
 stem:"Cells lining the small intestine must keep digestive fluid from leaking between them into the body.",
 parts:[
  {verb:"Identify",text:"the type of cell junction that does this.",pts:1,rubric:["Tight junction"]},
  {verb:"Contrast",text:"that junction with a gap junction.",pts:1,rubric:["Tight junctions seal neighboring cells so nothing passes between them, while gap junctions are open channels that let ions and small molecules pass directly from one cell to the next (both sides needed)"]}
 ]},
{id:"U2S9",t:"u2cyto",short:true,title:"Motor proteins and shape",
 stem:"Dynein is a motor protein that bends cilia by sliding microtubules past each other.",
 parts:[
  {verb:"Explain",text:"how a motor protein produces movement. Connect your answer to protein structure from Unit 1.",pts:2,rubric:["The motor protein changes shape (conformational change), usually powered by ATP","Because a protein's shape determines its function (tertiary structure), a change in shape makes it 'walk' or pull, producing movement"]}
 ]},
{id:"U2S10",t:"u2size",short:true,title:"Calculate SA:V",
 stem:"Cell A is a cube 1 µm on each side. Cell B is a cube 3 µm on each side.",
 parts:[
  {verb:"Calculate",text:"the surface area-to-volume ratio of each cell. Show your setup.",pts:1,rubric:["A: SA = 6 µm², V = 1 µm³, SA:V = 6:1; B: SA = 54 µm², V = 27 µm³, SA:V = 2:1 (setup shown for both; ratios written as SA:1)"]},
  {verb:"Identify",text:"which cell exchanges materials with its surroundings more efficiently, and why.",pts:1,rubric:["Cell A, because its higher SA:V means more membrane surface per unit of volume for nutrients and wastes to cross"]}
 ]},
{id:"U2S11",t:"u2size",short:true,title:"Surface area goes up, ratio goes down",
 stem:"A student writes: \"As a cell grows larger, its surface area decreases, so it can't get enough nutrients.\"",
 parts:[
  {verb:"Identify",text:"the error in the student's statement.",pts:1,rubric:["Surface area INCREASES as the cell grows; it is the surface area-to-volume RATIO that decreases"]},
  {verb:"Explain",text:"why a larger cell has trouble getting enough nutrients.",pts:1,rubric:["Volume grows faster than surface area, so there is less membrane per unit of volume; exchange across the membrane can't keep up with the needs of the larger volume"]}
 ]},
{id:"U2S12",t:"u2size",short:true,title:"Folding to increase surface area",
 stem:"Cells lining the small intestine have many tiny folds of their plasma membrane called microvilli.",
 parts:[
  {verb:"Explain",text:"how microvilli help these cells do their job.",pts:2,rubric:["Microvilli increase the surface area of the plasma membrane (without much increase in volume)","More surface area lets the cell absorb more nutrients from digested food"]}
 ]},
{id:"U2S13",t:"u2mem",short:true,title:"Why the bilayer forms",
 stem:"When phospholipids are added to water, they arrange themselves into a bilayer without any energy input.",
 parts:[
  {verb:"Explain",text:"why phospholipids form a bilayer in water. Use the terms hydrophilic and hydrophobic.",pts:2,rubric:["Phospholipids are amphipathic: a hydrophilic (polar) phosphate head and hydrophobic (nonpolar) fatty-acid tails","The heads face the water on both sides and the tails face inward, away from water, because polar attracts polar and nonpolar avoids water"]}
 ]},
{id:"U2S14",t:"u2mem",short:true,title:"Cholesterol as a buffer",
 stem:"A fish lives in water that changes from 5 °C in winter to 25 °C in summer.",
 parts:[
  {verb:"Explain",text:"how cholesterol in its cell membranes helps at BOTH temperatures.",pts:2,rubric:["At warm temperatures, cholesterol restrains phospholipid movement, reducing fluidity (keeps the membrane from becoming too fluid)","At cold temperatures, cholesterol keeps the tails from packing tightly, preventing the membrane from becoming too rigid"]}
 ]},
{id:"U2S15",t:"u2mem",short:true,title:"Where an integral protein sits",
 stem:"An integral protein spans the whole plasma membrane.",
 parts:[
  {verb:"Predict",text:"whether the amino acids in the part of the protein inside the bilayer have polar or nonpolar R-groups.",pts:1,rubric:["Nonpolar (hydrophobic) R-groups"]},
  {verb:"Justify",text:"your prediction.",pts:1,rubric:["That part of the protein is surrounded by the nonpolar fatty-acid tails; nonpolar R-groups interact with the nonpolar tails (like attracts like), while polar R-groups would face the water on either side"]}
 ]},
{id:"U2S16",t:"u2perm",short:true,title:"Charge beats size",
 stem:"A sodium ion (Na⁺) is much smaller than a steroid hormone, yet the steroid crosses the phospholipid bilayer and Na⁺ does not.",
 parts:[
  {verb:"Explain",text:"why.",pts:2,rubric:["The interior of the bilayer is nonpolar/hydrophobic (fatty-acid tails)","The steroid is nonpolar and can dissolve through it; Na⁺ is charged, so it is repelled by the hydrophobic core and needs a channel/transport protein"]}
 ]},
{id:"U2S17",t:"u2perm",short:true,title:"Water and aquaporins",
 stem:"Water is polar, but some water still crosses the bilayer directly. Most water, however, crosses through aquaporins.",
 parts:[
  {verb:"Explain",text:"why a small amount of water can cross the bilayer directly.",pts:1,rubric:["Water molecules are very small (and uncharged), so a few can slip between the phospholipids despite being polar"]},
  {verb:"Describe",text:"what an aquaporin is.",pts:1,rubric:["An integral membrane (channel) protein that allows water to move rapidly across the membrane"]}
 ]},
{id:"U2S18",t:"u2perm",short:true,title:"Rank the crossers",
 stem:"Consider O₂, glucose, and Cl⁻ on one side of a membrane.",
 parts:[
  {verb:"Identify",text:"which crosses the phospholipid bilayer most easily and which needs a protein.",pts:1,rubric:["O₂ crosses most easily; glucose AND Cl⁻ both need a protein (both parts needed)"]},
  {verb:"Justify",text:"why glucose needs a protein.",pts:1,rubric:["Glucose is large and polar, so it cannot pass through the nonpolar/hydrophobic interior of the bilayer"]}
 ]}
);

// ---------- More AP-style FRQs (data and experiment) ----------
FRQ.push(
{id:"U2F5",t:"u2size",title:"Cell size and diffusion data",
 stem:"Students made agar cubes with a pink indicator that turns clear when acid diffuses in. After 10 minutes in acid: the 1 cm cube was 87.5% clear, the 2 cm cube was 58% clear, and the 3 cm cube was 42% clear.",
 parts:[
  {verb:"Identify",text:"the independent variable and the dependent variable.",pts:1,rubric:["Independent: cube size (side length or SA:V); dependent: percent of the cube that turned clear (percent diffused)"]},
  {verb:"Calculate",text:"the SA:V ratio of the 3 cm cube. Show your setup.",pts:1,rubric:["SA = 6 × 3² = 54 cm²; V = 3³ = 27 cm³; SA:V = 2:1 (written as SA:1), setup shown"]},
  {verb:"Describe",text:"the relationship shown by the data.",pts:1,rubric:["As cube size increases (SA:V decreases), the percent of the cube reached by diffusion decreases; cite at least two data points"]},
  {verb:"Explain",text:"how these results apply to real cells.",pts:1,rubric:["Cells rely on diffusion across the membrane for nutrients/wastes; larger cells (lower SA:V) cannot exchange materials fast enough for their volume, so cells stay small (or increase surface area with folds)"]}
 ]},
{id:"U2F6",t:"u2endo",title:"Tracking a labeled protein",
 stem:"Researchers gave pancreatic cells radioactive amino acids for 3 minutes, then measured where the radioactivity was over time. At 3 min: mostly rough ER. At 20 min: mostly Golgi. At 90 min: mostly secretory vesicles and outside the cell.",
 parts:[
  {verb:"Explain",text:"why the researchers used radioactive AMINO ACIDS to follow a protein.",pts:1,rubric:["Amino acids are the monomers of proteins; newly made proteins incorporate the labeled amino acids, so the label shows where the new protein is"]},
  {verb:"Describe",text:"the path of the protein shown by the data.",pts:1,rubric:["Rough ER → Golgi → secretory vesicles → outside the cell (exocytosis), using the times in the data"]},
  {verb:"Predict",text:"where the radioactivity would stay if a drug blocked transport vesicles from leaving the ER.",pts:1,rubric:["It would remain in (build up in) the rough ER and not reach the Golgi"]},
  {verb:"Justify",text:"your prediction.",pts:1,rubric:["Proteins move from the ER to the Golgi inside transport vesicles; without them the protein can't get to the Golgi to be modified and shipped"]}
 ]},
{id:"U2F7",t:"u2perm",title:"Artificial membrane permeability",
 stem:"Researchers measured how fast molecules crossed an artificial phospholipid bilayer with no proteins. Relative rates: O₂ = 100, urea = 5, glucose = 0.01, K⁺ = 0.0001.",
 parts:[
  {verb:"Identify",text:"which molecule crossed fastest and which crossed slowest.",pts:1,rubric:["Fastest: O₂; slowest: K⁺"]},
  {verb:"Explain",text:"why urea crossed faster than glucose even though both are polar.",pts:1,rubric:["Urea is smaller than glucose; once charge is ruled out, smaller polar molecules cross the bilayer more easily"]},
  {verb:"Explain",text:"why K⁺ barely crossed.",pts:1,rubric:["K⁺ is charged (an ion), so it cannot pass the hydrophobic interior of the bilayer"]},
  {verb:"Predict",text:"how adding potassium channel proteins to the membrane would change the K⁺ rate, and justify.",pts:1,rubric:["The rate would increase greatly, because the channel provides a hydrophilic path through the membrane for the ion"]}
 ]}
);

// ---- Post-test reflection (not graded for correctness — since exam photos aren't allowed, this is
// how future units learn what this teacher's real tests actually ask). Shown once after test day.
FRQ.push(
{id:"U2REFLECT",t:"u2comp",title:"After the Unit 2 Test: what actually showed up",reflection:true,
 stem:"No wrong answers here — just describe the real test as best you remember it. This is the only way (since photos of the test aren't allowed) to make the next unit's practice match what she actually saw.",
 parts:[
  {verb:"Describe",text:"one or two questions that surprised you — a topic you didn't expect, or a question style you hadn't practiced.",pts:0,rubric:["Any honest, specific answer — not graded for correctness."]},
  {verb:"Compare",text:"the FRQs on the test to the practice FRQs and mock test: harder, easier, or about the same, and why.",pts:0,rubric:["Any honest, specific answer — not graded for correctness."]},
  {verb:"Note",text:"anything the teacher asked for in a specific format (units, sentence style, diagrams, \"show your work\") that you want to make sure is drilled next time.",pts:0,rubric:["Any honest, specific answer — not graded for correctness."]}
 ]}
);

// ================= UNIT 2, PART 2 — TRANSPORT, WATER POTENTIAL, COMPARTMENTS, LABS (2.5–2.10) =================
Object.assign(TOPICS, {
  u2trans: {unit:2, name:"Passive vs. active transport; endo- & exocytosis (2.5)", short:"Transport"},
  u2tonic: {unit:2, name:"Facilitated diffusion & tonicity (2.6–2.7)", short:"Tonicity"},
  u2wp:    {unit:2, name:"Water potential (2.7–2.8)", short:"Water potential"},
  u2mech:  {unit:2, name:"Pumps & cotransport (2.8)", short:"Pumps"},
  u2comp:  {unit:2, name:"Compartmentalization & endosymbiosis (2.9–2.10)", short:"Endosymbiosis"},
  u2lab:   {unit:2, name:"Unit 2 labs & data (dialysis, potato cores, graphs)", short:"Labs & data"}
});

// ---- figures (drawn in the app above the question) ----
const FIG_GUT = `<svg viewBox="0 0 400 190" role="img" aria-label="Model of an intestinal cell: blood on the left, intestine on the right" style="width:100%;max-width:560px;font:11px sans-serif">
<rect x="4" y="4" width="100" height="44" rx="4" fill="none" stroke="currentColor"/><text x="54" y="18" text-anchor="middle" font-weight="700">Blood</text><text x="54" y="31" text-anchor="middle">High Na⁺</text><text x="54" y="43" text-anchor="middle">Low glucose</text>
<rect x="150" y="4" width="100" height="44" rx="4" fill="none" stroke="currentColor"/><text x="200" y="18" text-anchor="middle" font-weight="700">Intestinal cell</text><text x="200" y="31" text-anchor="middle">Low Na⁺</text><text x="200" y="43" text-anchor="middle">High glucose</text>
<rect x="296" y="4" width="100" height="44" rx="4" fill="none" stroke="currentColor"/><text x="346" y="18" text-anchor="middle" font-weight="700">Intestine</text><text x="346" y="31" text-anchor="middle">High Na⁺</text><text x="346" y="43" text-anchor="middle">Medium glucose</text>
<rect x="140" y="62" width="120" height="110" rx="6" fill="rgba(120,120,120,.18)" stroke="currentColor"/>
<circle cx="140" cy="92" r="9" fill="none" stroke="currentColor" stroke-width="2"/><text x="126" y="84" text-anchor="end">GLUT2</text><text x="126" y="98" text-anchor="end">← glucose out</text>
<circle cx="140" cy="142" r="9" fill="currentColor"/><text x="126" y="134" text-anchor="end">Na⁺/K⁺ pump (ATP)</text><text x="126" y="148" text-anchor="end">← 3 Na⁺ out</text><text x="126" y="162" text-anchor="end">2 K⁺ in →</text>
<circle cx="260" cy="117" r="9" fill="none" stroke="currentColor" stroke-width="2"/><text x="274" y="104">Na⁺/glucose</text><text x="274" y="117">symporter</text><text x="274" y="132">← Na⁺ + glucose in</text>
</svg>`;
const FIG_BEAKER = `<div style="font-size:15px;border:1px solid var(--line-2);border-radius:10px;padding:10px 12px;max-width:520px"><b>Cell (inside the bag):</b> 0.03 M sucrose, 0.02 M glucose<br><b>Beaker (outside):</b> 0.01 M sucrose, 0.01 M glucose, 0.01 M fructose<br><span class="small">The membrane lets glucose and fructose through but NOT sucrose.</span></div>`;
const FIG_POTATO = `<table style="border-collapse:collapse;font-size:15px;margin:4px 0"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Sucrose in beaker (M)</th><th style="border:1px solid var(--line-2);padding:4px 10px">% change in mass</th></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.0</td><td style="border:1px solid var(--line-2);padding:4px 10px">+18.0</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.2</td><td style="border:1px solid var(--line-2);padding:4px 10px">+5.0</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.4</td><td style="border:1px solid var(--line-2);padding:4px 10px">−8.0</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.6</td><td style="border:1px solid var(--line-2);padding:4px 10px">−16.0</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.8</td><td style="border:1px solid var(--line-2);padding:4px 10px">−23.5</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">1.0</td><td style="border:1px solid var(--line-2);padding:4px 10px">−24.0</td></tr></table>`;

MCQ.push(
// ---------- 2.5 PASSIVE vs ACTIVE, ENDO/EXOCYTOSIS ----------
{id:"u2t1",t:"u2trans",q:"Which statement correctly describes passive transport?",
 opts:["A substance moves from low concentration of that substance to high concentration of that substance, using ATP","A substance moves from high concentration of that substance to low concentration of that substance, with no ATP","A substance moves through a protein pump from high concentration to low concentration, using ATP","Only water moves, from high water concentration to low water concentration, with no ATP"],a:1,
 why:"Passive transport moves a substance DOWN (with) its concentration gradient, from high [X] to low [X], and needs no ATP. It may use a channel or carrier protein (facilitated diffusion), but never a pump.",
 wrong:{0:"That describes active transport.",2:"Pumps are for active transport. Passive transport uses no protein (simple diffusion) or a channel/carrier (facilitated diffusion).",3:"Osmosis is one kind of passive transport; solutes like O₂ also move passively."}},
{id:"u2t2",t:"u2trans",q:"Active transport always requires",
 opts:["a channel protein and a concentration gradient","a protein pump and an energy source","a vesicle formed from the plasma membrane","a hypotonic solution outside the cell"],a:1,
 why:"Moving a substance AGAINST (up) its gradient, from low to high concentration, needs energy (usually ATP) and a pump protein that changes shape (a conformational change) to carry the solute across.",
 wrong:{0:"Channels only allow movement down a gradient, with no energy.",2:"Vesicles are for bulk transport (endo/exocytosis), not for pumping single ions.",3:"Tonicity describes water movement, not active transport."}},
{id:"u2t3",t:"u2trans",q:"Your teacher says not to write just 'moves from high to low.' Which answer earns the point?",
 opts:["It moves from an area of high glucose concentration to an area of low glucose concentration","Glucose moves from an area of high glucose concentration to an area of low glucose concentration","Glucose moves from an area of high glucose energy to an area of low glucose energy","Glucose moves from an area of high concentration to an area of low concentration across the membrane"],a:1,
 why:"Name the substance and say concentration. Her test notes: don't use 'it,' and don't just say 'high to low.'",
 wrong:{0:"Uses 'it' — name the substance (glucose) every time.",2:"Energy isn't what's high or low here; concentration is.",3:"Doesn't say high and low GLUCOSE concentration — high what?"}},
{id:"u2t4",t:"u2trans",q:"A white blood cell engulfs a whole bacterium by wrapping its membrane around it. This is",
 opts:["pinocytosis","phagocytosis","exocytosis","facilitated diffusion"],a:1,
 why:"Phago = eating. The membrane surrounds a large particle and pinches off into a vesicle (which then fuses with a lysosome to digest it).",
 wrong:{0:"Pinocytosis ('cell drinking') takes in droplets of fluid and dissolved solutes.",2:"Exocytosis releases material OUT of the cell.",3:"Facilitated diffusion moves single molecules through proteins."}},
{id:"u2t5",t:"u2trans",q:"Receptor-mediated endocytosis differs from pinocytosis because it",
 opts:["does not use vesicles; molecules pass straight through receptor proteins","takes in only specific molecules that bind to receptor proteins","moves substances down their gradient through channel proteins","releases proteins from the cell after they bind to receptors"],a:1,
 why:"Receptors on the membrane bind a specific molecule (ligand); those regions pinch in to form a vesicle. The name tells you: receptor-mediated = specific. Pinocytosis takes in whatever fluid is there.",
 wrong:{0:"Both form vesicles.",2:"That's facilitated diffusion.",3:"Releasing material is exocytosis."}},
{id:"u2t6",t:"u2trans",q:"Insulin, a protein hormone, leaves a pancreatic cell by",
 opts:["simple diffusion through the hydrophobic core of the bilayer","facilitated diffusion through a channel protein in the membrane","exocytosis: a secretory vesicle fuses with the plasma membrane","phagocytosis: the membrane wraps around it and pinches off"],a:2,
 why:"Big polar molecules like proteins leave in bulk. Connects to Idea 2: rough ER → Golgi → secretory vesicle → fuses with plasma membrane → released (exocytosis).",
 wrong:{0:"Proteins are large and polar; they can't cross the hydrophobic core.",1:"Channels are for ions and small molecules; a protein is far too large.",3:"Phagocytosis brings material IN."}},
{id:"u2t7",t:"u2trans",q:"Endocytosis and exocytosis both require energy because",
 opts:["they always move substances against their concentration gradients","forming, moving, and fusing vesicles requires the cell to do work","they pass water through aquaporins, which need ATP to open","they happen only in plant cells, which must push against the wall"],a:1,
 why:"Bulk transport is a form of active transport: reshaping the membrane and moving vesicles (along microtubules, using motor proteins) uses ATP. Idea 3 link: kinesin walks vesicles on microtubules.",
 wrong:{0:"Bulk transport isn't defined by gradient direction; the energy goes into building and moving vesicles.",2:"Aquaporins are passive channels for water.",3:"All eukaryotic cells do bulk transport."}},
{id:"u2t8",t:"u2trans",q:"Diffusion happens because",
 opts:["cells use ATP to push molecules from where they are crowded to where they are sparse","molecules move randomly, which spreads them out until they are evenly distributed","membranes attract solutes, pulling them from the solution toward the cell surface","water molecules pull solutes along with them as water flows by osmosis"],a:1,
 why:"The 2nd law of thermodynamics: things tend toward disorder (entropy). Random motion means more molecules leave a crowded area than enter it, so the net movement is from high to low concentration.",
 wrong:{0:"Diffusion needs no ATP.",2:"Attraction isn't the cause.",3:"Diffusion of a solute doesn't depend on water pulling it."}},
{id:"u2t9",t:"u2trans",q:"At dynamic equilibrium across a membrane,",
 opts:["all molecules stop moving because the concentrations on both sides are equal","molecules keep moving in both directions, but there is no NET movement","water moves only into the cell, until the cell reaches its limit","molecules move faster in one direction to keep the sides equal"],a:1,
 why:"Molecules never stop moving; at equilibrium, equal numbers cross each way. Her notes: isotonic = dynamic equilibrium.",
 wrong:{0:"Molecules are always in motion.",2:"Net movement is zero at equilibrium.",3:"Movement is equal in both directions — that's what 'no net movement' means."}},
{id:"u2t10",t:"u2trans",q:"A cell poison stops ATP production. Which process stops FIRST?",
 opts:["O₂ diffusing into the cell","Water moving through aquaporins","The Na⁺/K⁺ pump","Glucose moving down its gradient through a carrier protein"],a:2,
 why:"Only active transport needs ATP. Everything else listed is passive and keeps going.",
 wrong:{0:"Simple diffusion needs no energy.",1:"Osmosis through aquaporins is passive.",3:"Facilitated diffusion is passive."}},
{id:"u2t11",t:"u2trans",q:"Which pair is matched correctly?",
 opts:["Simple diffusion: needs a carrier protein, no energy","Facilitated diffusion: needs a protein, no energy","Active transport: needs energy, but no protein","Osmosis: needs a pump protein and energy"],a:1,
 why:"Her Blue Sheet table: simple diffusion (no protein, no energy, high→low); facilitated diffusion (channel/carrier protein, no energy, high→low); active transport (pump protein, energy, low→high).",
 wrong:{0:"Simple diffusion uses no protein.",2:"Active transport always uses a pump protein.",3:"Osmosis is passive."}},
{id:"u2t12",t:"u2trans",q:"Why can't a large protein simply diffuse out of a cell?",
 opts:["It is small and nonpolar, so it dissolves in the tails and gets stuck there","It is large and polar, so it can't cross the hydrophobic core of the bilayer","Proteins never leave cells; they stay where they are made by ribosomes","The cell wall blocks it, even though the membrane would let it through"],a:1,
 why:"Idea 6 again: the middle of the bilayer is nonpolar. Large polar molecules need help, and something as big as a protein leaves by exocytosis.",
 wrong:{0:"It's large and polar, not small and nonpolar.",2:"Cells secrete many proteins (enzymes, hormones, antibodies).",3:"Animal cells have no wall, and the membrane is the real barrier."}},

// ---------- 2.6–2.7 FACILITATED DIFFUSION & TONICITY ----------
{id:"u2o1",t:"u2tonic",q:"Facilitated diffusion uses membrane proteins to move charged and large polar molecules WITH the concentration gradient. 'With' the gradient means",
 opts:["from low concentration to high concentration","from high concentration to low concentration","in both directions equally","against the flow of water"],a:1,
 why:"With = down the gradient, from high [X] to low [X], so no energy is needed. The protein just provides a hydrophilic path.",
 wrong:{0:"That's against (up) the gradient: active transport.",2:"That's equilibrium, not what 'with' means.",3:"Water direction isn't the point."}},
{id:"u2o2",t:"u2tonic",q:"A solution that has a HIGHER solute concentration than the cell is called",
 opts:["hypotonic","hypertonic","isotonic","plasmolyzed"],a:1,
 why:"Hyper = more solute. Always a comparison: 'the solution is hypertonic compared to the cell.'",
 wrong:{0:"Hypo = less solute.",2:"Iso = equal.",3:"Plasmolyzed describes a plant cell that lost water, not a solution."}},
{id:"u2o3",t:"u2tonic",q:"In osmosis, water moves",
 opts:["from hypertonic to hypotonic","from hypotonic to hypertonic","from low water concentration to high water concentration","only through the phospholipids"],a:1,
 why:"Water moves toward where there is more solute (less free water): hypotonic → hypertonic. Same idea said three ways: high [H₂O] → low [H₂O]; high Ψ → low Ψ; low osmolarity → high osmolarity.",
 wrong:{0:"Backwards.",2:"Backwards: water moves from HIGH water concentration to LOW.",3:"Most water moves through aquaporins."}},
{id:"u2o4",t:"u2tonic",q:"A red blood cell is placed in distilled water. What happens?",
 opts:["It shrivels (crenates), because water leaves the cell","It swells and may burst (lyse), because water enters","Nothing, because distilled water is isotonic to the cell","It becomes turgid and stays safe, because water enters"],a:1,
 why:"Distilled water is hypotonic to the cell, so water moves in. Animal cells have no wall to push back, so they can lyse.",
 wrong:{0:"That happens in a hypertonic solution.",2:"Distilled water has no solute; the cell does.",3:"Turgid is the healthy state for PLANT cells, which have a wall; a red blood cell has none."}},
{id:"u2o5",t:"u2tonic",q:"Which is the healthy (normal) state for a plant cell?",
 opts:["Plasmolyzed (in a hypertonic environment)","Flaccid (in an isotonic environment)","Turgid (in a hypotonic environment)","Lysed (in a hypotonic environment)"],a:2,
 why:"Plant cells want water pushing their membrane against the wall (turgor pressure). That's why plants wilt (flaccid) when they lack water. Animal cells are healthiest in isotonic solutions.",
 wrong:{0:"Plasmolysis (membrane pulling away from the wall) happens in hypertonic solutions and can kill the cell.",1:"Flaccid (isotonic) = limp, wilting.",3:"The wall keeps plant cells from lysing."}},
{id:"u2o6",t:"u2tonic",q:"A plant cell is placed in a very salty solution. The membrane pulls away from the cell wall. This is",
 opts:["turgor","plasmolysis","lysis","endocytosis"],a:1,
 why:"The solution is hypertonic, water leaves the cell, and the membrane shrinks away from the wall: plasmolysis.",
 wrong:{0:"Turgor is the pressure of a full cell.",2:"Lysis is bursting; plant cells don't lyse because of the wall.",3:"Unrelated."}},
{id:"u2o7",t:"u2tonic",fig:FIG_BEAKER,q:"Using the figure, which way does water flow?",
 opts:["Out of the cell, because the beaker is hypertonic compared to the cell","Into the cell, because the cell is hypertonic compared to the beaker","No net flow, because the cell and beaker are isotonic to each other","Out of the cell, because glucose leaves and water follows it"],a:1,
 why:"Only the solute that CAN'T cross determines water movement. Sucrose is trapped: 0.03 M inside vs 0.01 M outside, so the cell is hypertonic and water moves in. (Glucose and fructose just diffuse until equal on both sides.)",
 wrong:{0:"The beaker has less of the trapped solute (sucrose), so it's hypotonic.",2:"Sucrose differs (0.03 vs 0.01).",3:"Glucose leaving doesn't reverse water flow; sucrose sets the gradient."}},
{id:"u2o8",t:"u2tonic",fig:FIG_BEAKER,q:"In the same setup, which way will fructose move?",
 opts:["Into the cell","Out of the cell","It can't cross","No net movement from the start"],a:0,
 why:"Fructose can cross and is 0.01 M outside vs 0 inside, so it diffuses in, from high fructose concentration to low.",
 wrong:{1:"There's no fructose inside to start with.",2:"The membrane is permeable to fructose.",3:"There is a gradient: 0.01 outside, 0 inside."}},
{id:"u2o9",t:"u2tonic",q:"Aquaporins are",
 opts:["pump proteins that use ATP to push water against its gradient","channel proteins that let water cross the membrane quickly by osmosis","phospholipids with bent tails that open gaps for water to slip through","vesicles that carry water into the cell by pinocytosis"],a:1,
 why:"Water is polar, so only a little slips through the bilayer. Aquaporins are channels (facilitated diffusion of water) and require no energy.",
 wrong:{0:"Water always moves passively.",2:"They are proteins, not lipids.",3:"No vesicles are involved."}},
{id:"u2o10",t:"u2tonic",q:"Plant roots are usually hypertonic to the soil. This means water",
 opts:["moves from the roots into the soil","moves from the soil into the roots","doesn't move","moves only by active transport"],a:1,
 why:"Roots have a higher solute concentration (carbohydrates) than the soil, so water moves from the soil (hypotonic) into the roots (hypertonic). Her slide used this exact example.",
 wrong:{0:"Backwards.",2:"There is a gradient.",3:"Water moves passively."}},
{id:"u2o11",t:"u2tonic",q:"A freshwater fish lives in water that is hypotonic to its body. Its main osmoregulation problem is",
 opts:["water constantly leaving its cells, so it must drink to replace it","water constantly entering its body, so it must get rid of extra water","salt constantly entering its body from the lake, so it must pump salt out","none, because its body is isotonic to the fresh water around it"],a:1,
 why:"Water moves from the hypotonic lake into the fish. Freshwater fish produce lots of dilute urine and actively take in salts. Osmoregulation = keeping water and solute balance (homeostasis).",
 wrong:{0:"That's the saltwater fish's problem.",2:"Fresh water has few salts; the fish tends to LOSE salts.",3:"The lake is hypotonic, not isotonic."}},
{id:"u2o12",t:"u2tonic",q:"Which BEST describes 'isotonic'?",
 opts:["Solute concentration is equal on both sides, so water stops moving across the membrane","Solute concentration is equal on both sides; water moves both ways with no net movement","Solute concentration is higher outside, so water moves both ways but mostly out","The cell is turgid because water pressure balances the solute on both sides"],a:1,
 why:"Iso = same. Water keeps crossing (dynamic equilibrium) but the net flow is zero.",
 wrong:{0:"Water still moves; only the net is zero.",2:"That's a hypertonic environment, not isotonic.",3:"A plant cell in isotonic solution is flaccid."}},
{id:"u2o13",t:"u2tonic",q:"Glucose enters most body cells by facilitated diffusion through GLUT proteins. If blood glucose drops below the glucose level inside the cell, glucose will",
 opts:["keep entering through GLUT, because GLUT only moves glucose in","move out through GLUT, down its gradient","stop moving entirely until blood glucose rises again","be pumped in by GLUT using ATP, against its gradient"],a:1,
 why:"Channels and carriers don't choose a direction; the gradient does. If the inside has more glucose, it moves out.",
 wrong:{0:"Facilitated diffusion only goes down the gradient, in either direction.",2:"As long as there's a gradient, there's net movement.",3:"GLUT is not a pump."}},

// ---------- 2.7–2.8 WATER POTENTIAL ----------
{id:"u2w1",t:"u2wp",q:"Water always moves from",
 opts:["low water potential to high (less negative) water potential","high water potential to low (more negative) water potential","positive pressure potential to negative solute potential","the cell to the solution, whatever the water potentials"],a:1,
 why:"High Ψ → low Ψ. 'Low' usually means MORE NEGATIVE: water moves from −2 bars toward −7 bars.",
 wrong:{0:"Backwards.",2:"Not a rule; compare total Ψ.",3:"Depends on the values."}},
{id:"u2w2",t:"u2wp",q:"What is the water potential of pure water in an open beaker?",
 opts:["−1 bar","0 bars","+1 bar","It depends on the temperature"],a:1,
 why:"By definition, pure water at atmospheric pressure has Ψ = 0. Solute can only lower it (Ψs is 0 or negative), and an open beaker means Ψp = 0.",
 wrong:{0:"Pure water has no solute to lower it.",2:"Ψs can't be positive, and Ψp = 0 in an open container.",3:"With C = 0, Ψs = 0 at any temperature."}},
{id:"u2w3",t:"u2wp",q:"Adding solute to water makes its solute potential (Ψs)",
 opts:["more positive","more negative","zero","unchanged"],a:1,
 why:"More solute means more water tied up in hydration shells around the solute, so less free water can move, so Ψs goes down (more negative). ↑[solute] = ↓ free water = ↓Ψ.",
 wrong:{0:"Backwards.",2:"Only pure water is zero.",3:"Solute always lowers Ψs."}},
{id:"u2w4",t:"u2wp",q:"Why is the ionization constant (i) for NaCl equal to 2, but for sucrose equal to 1?",
 opts:["NaCl is heavier per mole, so each mole of it counts twice as much as sucrose","NaCl splits into two ions (Na⁺ and Cl⁻) in water; sucrose stays whole","Sucrose is charged, so it binds water and acts as one particle","NaCl contains two elements, while sucrose is a single compound"],a:1,
 why:"Each particle ties up water. Two particles tie up about twice as much water, so NaCl lowers Ψs twice as much at the same molarity. Unit 1 link: ionic bonds ionize in water.",
 wrong:{0:"Mass isn't what i measures.",2:"Sucrose is uncharged.",3:"The number of elements doesn't matter; i counts particles in solution (sucrose has three elements but stays one molecule)."}},
{id:"u2w5",t:"u2wp",q:"In an animal cell, the pressure potential (Ψp) is",
 opts:["always equal to Ψs, because the cell is at equilibrium","0, because there is no cell wall to push back","always negative, because water is pulled into the cell","greater than 0, because the membrane pushes back"],a:1,
 why:"Pressure potential comes from the wall pushing back on a swollen plant cell. Animal cells have no wall, so Ψp = 0 (and they can burst). Open beakers also have Ψp = 0.",
 wrong:{0:"Only at equilibrium in plant cells do Ψp and Ψs cancel.",2:"Not in this course's problems.",3:"No wall, no pressure; a membrane alone can't push back."}},
{id:"u2w6",t:"u2wp",q:"A plant cell has Ψ = −3 bars. It is placed in a solution with Ψ = −5 bars. Water will",
 opts:["move into the cell","move out of the cell","not move","move in, then burst the cell"],a:1,
 why:"From high (−3) to low (−5): water leaves the cell.",
 wrong:{0:"The solution is lower (more negative), so water moves toward it.",2:"There's a difference of 2 bars.",3:"Plant cells don't burst; and water is leaving."}},
{id:"u2w7",t:"u2wp",q:"When a potato cell in pure water stops gaining water, even though it still has more solute than the water, it is because",
 opts:["its sucrose leaked out through the membrane until both sides had equal concentrations","turgor pressure (Ψp) built up against the wall and balanced the solute potential","the water outside became hypertonic as water moved into the cell","the membrane closed its aquaporins, which stopped all water movement"],a:1,
 why:"As water enters, the membrane presses on the wall. That positive pressure (Ψp) rises until Ψcell = Ψs + Ψp equals 0, the Ψ of pure water. Net flow stops (dynamic equilibrium).",
 wrong:{0:"The cell membrane keeps sucrose in.",2:"Pure water can't be hypertonic.",3:"Water still crosses both ways."}},
{id:"u2w8",t:"u2wp",q:"On a graph of % change in potato mass (y) vs. sucrose molarity (x), the point where the line crosses 0% tells you",
 opts:["the temperature at which the potato cells stopped taking up water","the sucrose concentration that is isotonic to the potato cells","the sucrose concentration where the potato gained the most mass","the concentration at which the potato cells died from water loss"],a:1,
 why:"At 0% change, no net water moved: the solution matches the potato's water potential. That molarity is your C for Ψs = −iCRT.",
 wrong:{0:"Temperature is measured separately.",2:"The biggest gain is at the lowest molarity, not where the line crosses 0%.",3:"Crossing 0% means no net water movement, not death."}},
{id:"u2w9",t:"u2wp",q:"In Ψs = −iCRT, the T must be in",
 opts:["degrees Celsius (°C)","degrees Fahrenheit (°F)","kelvin (°C + 273)","bars (the pressure unit)"],a:2,
 why:"R is 0.0831 L·bar/mol·K, so T must be in K. Forgetting to add 273 is the most common calculation error.",
 wrong:{0:"Convert to K first.",1:"Never.",3:"Bars is the unit of the answer."}},
{id:"u2w10",t:"u2wp",q:"Which answer would lose points on her teacher's test?",
 opts:["The solute potential is −13.6 bars.","Ψs = 13.6","The solute potential of the solution is −4.95 bars.","Water moves from the cell (Ψ = −2 bars) into the solution (Ψ = −4 bars)."],a:1,
 why:"Her first-test notes: include the negative sign AND the unit (bars), and write the result as a complete sentence. '13.6' has neither.",
 wrong:{0:"Sign, unit, and a sentence: full credit.",2:"Sign, unit, and a sentence: full credit.",3:"Complete, with values: full credit."}},
{id:"u2w11",t:"u2wp",q:"A farmer adds far too much fertilizer (dissolved salts) to the soil. What happens to the crops?",
 opts:["The soil's water potential rises above the roots', so water enters the roots faster","The soil's water potential drops below the roots', so water leaves the roots and plants wilt","Nothing changes, because roots always stay hypertonic to the soil around them, no matter what","Water enters the roots so quickly that the root cells swell and burst open"],a:1,
 why:"Salts lower the soil's Ψs. When the soil's Ψ drops below the root's Ψ, water moves from the roots into the soil. Fix: water heavily to dilute the salts.",
 wrong:{0:"Backwards: salts LOWER the soil's water potential.",2:"Roots are hypertonic only while the soil has the higher Ψ.",3:"Plant cells don't burst, and water is leaving."}},
{id:"u2w12",t:"u2wp",q:"Wheat roots have Ψs = −11 bars. Seawater has Ψs = −24 bars. If the fields are irrigated with seawater,",
 opts:["water moves into the roots, because the roots have more solute","water moves out of the roots, into the soil, and the plants wilt","nothing happens, because both water potentials are negative","the roots take up the salt and grow faster from the extra minerals"],a:1,
 why:"−11 is higher than −24, so water flows from the roots to the seawater-soaked soil. The plants lose water (the lab's extension question uses this same reasoning).",
 wrong:{0:"Water moves toward the more negative Ψ, which is the seawater; the roots have LESS solute.",2:"There's a 13-bar difference.",3:"Not what the numbers predict."}},

// ---------- 2.8 PUMPS & COTRANSPORT ----------
{id:"u2q1",t:"u2mech",q:"The sodium-potassium pump moves",
 opts:["3 Na⁺ into the cell and 2 K⁺ out of the cell, using ATP","3 Na⁺ out of the cell and 2 K⁺ into the cell, using ATP","Na⁺ and K⁺ down their gradients through a channel, with no ATP","3 Na⁺ out and 2 K⁺ in, powered by the glucose gradient"],a:1,
 why:"It keeps Na⁺ low inside and K⁺ high inside. Both ions go against their gradients, so it's active transport powered by ATP (the pump changes shape when phosphorylated).",
 wrong:{0:"Backwards: Na⁺ goes out and K⁺ comes in.",2:"It's a pump, not a channel.",3:"Right ions and directions, but the pump is powered by ATP, not by glucose."}},
{id:"u2q2",t:"u2mech",fig:FIG_GUT,q:"In the model, how does glucose get from the intestinal cell into the blood?",
 opts:["Active transport through the Na⁺/K⁺ pump, from low glucose (cell) to high glucose (blood)","Facilitated diffusion through GLUT2, from high glucose (cell) to low glucose (blood)","Simple diffusion through the bilayer, from high glucose (cell) to low glucose (blood)","Exocytosis in vesicles that carry glucose out of the cell and fuse on the blood side"],a:1,
 why:"The cell has HIGH glucose and the blood has LOW glucose, so glucose moves down its gradient through the GLUT2 channel/carrier: facilitated diffusion, no energy.",
 wrong:{0:"The pump moves Na⁺ and K⁺, not glucose, and glucose goes DOWN its gradient here.",2:"Glucose is large and polar; it needs a protein.",3:"Single molecules don't need vesicles."}},
{id:"u2q3",t:"u2mech",fig:FIG_GUT,q:"How does glucose get from the intestine INTO the cell, even though the cell already has more glucose?",
 opts:["By simple diffusion across the bilayer, from high glucose concentration to low glucose concentration","Through the Na⁺/glucose symporter: Na⁺ moving down its gradient pulls glucose in against its gradient","Through GLUT2 on the intestine side, which lets glucose in whenever the cell needs more sugar","Through the Na⁺/K⁺ pump, which spends ATP to carry glucose into the cell along with K⁺"],a:1,
 why:"This is cotransport (secondary active transport). The Na⁺/K⁺ pump keeps Na⁺ low inside the cell. Na⁺ 'wants' to rush in, and the symporter only lets it in with a glucose. The energy comes from the Na⁺ gradient, which ATP built.",
 wrong:{0:"Glucose is moving from low to high here, which needs energy — and it's large and polar.",2:"GLUT2 is on the blood side and only goes down the gradient.",3:"The pump moves only Na⁺ and K⁺; it builds the Na⁺ gradient that the symporter uses."}},
{id:"u2q4",t:"u2mech",fig:FIG_GUT,q:"What is the ultimate energy source for moving glucose into the intestinal cell?",
 opts:["The glucose gradient, since glucose moves down it into the cell","ATP, used by the Na⁺/K⁺ pump to build the Na⁺ gradient","Light, captured by the intestinal cells' chloroplasts","Water potential, since water drags glucose in by osmosis"],a:1,
 why:"The symporter uses no ATP directly, but it depends on the Na⁺ gradient, and the pump spends ATP to maintain it. Stop the pump and glucose uptake stops too.",
 wrong:{0:"Glucose moves AGAINST its gradient here; that can't be the energy source.",2:"Animal cells have no chloroplasts, and no light is involved.",3:"Water potential drives water, not glucose."}},
{id:"u2q5",t:"u2mech",fig:FIG_GUT,q:"Na⁺ moves INTO the intestinal cell and also moves OUT of the cell into the blood. How are these different?",
 opts:["Both are passive: Na⁺ moves down its gradient each time, through the symporter and then a channel","In is passive (down its gradient, via the symporter); out to the blood is active (against it, via the ATP pump)","Both are active: the symporter and the Na⁺/K⁺ pump each use ATP directly to move Na⁺","In is active (against its gradient, via the ATP pump); out to the blood is passive (down it, via a channel)"],a:1,
 why:"Read the concentrations: lumen high Na⁺ → cell low Na⁺ (downhill, passive). Cell low Na⁺ → blood high Na⁺ (uphill, needs the ATP pump). This is a question from her Visual Representations practice.",
 wrong:{0:"Going into the blood is uphill; it needs the pump.",2:"The symporter doesn't use ATP directly; Na⁺ moves downhill into the cell.",3:"Backwards."}},
{id:"u2q6",t:"u2mech",q:"A drug blocks the Na⁺/K⁺ pump in intestinal cells. Predict the effect on glucose absorption from the intestine.",
 opts:["It increases, because more Na⁺ stays outside to pull glucose in","It decreases, because the Na⁺ gradient that powers the symporter runs down","No effect, because the symporter itself does not use any ATP","It stays the same, because glucose switches to entering through GLUT2"],a:1,
 why:"No pump → Na⁺ builds up inside → no Na⁺ gradient → the symporter stops bringing glucose in. Indirect dependence on ATP is what 'secondary active transport' means.",
 wrong:{0:"Backwards: without the pump, Na⁺ builds up INSIDE and the gradient disappears.",2:"It depends on the gradient the pump makes.",3:"GLUT2 can't move glucose against its gradient."}},
{id:"u2q7",t:"u2mech",q:"A proton pump uses ATP to move H⁺ into a plant vacuole. What happens to the pH inside the vacuole?",
 opts:["It rises (more basic)","It falls (more acidic)","It stays the same (buffered)","It becomes neutral (pH 7)"],a:1,
 why:"More H⁺ = lower pH = more acidic. Unit 1 link: pH measures H⁺ concentration. (In her morning-glory practice problem, a transporter moves H⁺ OUT of the vacuole, so the pH rises to 7.7.)",
 wrong:{0:"Adding H⁺ lowers pH.",2:"H⁺ concentration changes, so pH changes.",3:"Adding H⁺ makes it acidic, not neutral."}},
{id:"u2q8",t:"u2mech",q:"In the morning-glory petal model, a K⁺/H⁺ transporter moves K⁺ INTO the vacuole. Why does the vacuole then swell?",
 opts:["K⁺ carries water molecules with it through the transporter, which fills the vacuole","More K⁺ inside lowers the vacuole's water potential, so water moves in by osmosis","The transporter also pumps water directly into the vacuole, using ATP to do it","More K⁺ inside raises the vacuole's water potential, so water moves in by osmosis"],a:1,
 why:"Adding solute lowers Ψs (more negative), so water moves from high Ψ to low Ψ: into the vacuole. The cell gets bigger and the flower opens.",
 wrong:{0:"K⁺ is an ion; water moves separately, by osmosis.",2:"Water moves passively, following the solute.",3:"Adding solute LOWERS water potential."}},
{id:"u2q9",t:"u2mech",q:"What is a 'symporter'?",
 opts:["A protein that moves two substances in the same direction at the same time","A protein that moves two substances in opposite directions at the same time","A vesicle that carries two substances into the cell together","A channel that only lets water through, like an aquaporin"],a:0,
 why:"Sym = together. The Na⁺/glucose symporter moves both into the cell. (An antiporter moves two substances in opposite directions, like the Na⁺/K⁺ pump.)",
 wrong:{1:"That's an antiporter.",2:"Not a vesicle.",3:"That's an aquaporin."}},
{id:"u2q10",t:"u2mech",q:"How does a pump protein move a solute across the membrane?",
 opts:["It opens a permanent pore that the solute diffuses through, down its gradient","It changes shape when energy is added, carrying the solute to the other side","It dissolves in the membrane and carries the solute across the lipid tails","It wraps the solute in a vesicle and releases it on the other side"],a:1,
 why:"Unit 1 link again: a protein's shape is its function. ATP causes a shape change that moves the solute from one side to the other.",
 wrong:{0:"That's a channel.",2:"Proteins don't dissolve in the tails; the pump stays in place and changes shape.",3:"That's bulk transport (endocytosis/exocytosis)."}},
{id:"u2q11",t:"u2mech",q:"Which gradient does the Na⁺/K⁺ pump create that other transporters rely on?",
 opts:["Low Na⁺ inside the cell, high Na⁺ outside","High Na⁺ inside the cell, low Na⁺ outside","Equal Na⁺ on both sides of the membrane","High glucose outside the cell, low inside"],a:0,
 why:"By pumping Na⁺ out, the cell keeps inside Na⁺ low. That 'stored' gradient is then used by cotransporters (like the Na⁺/glucose symporter).",
 wrong:{1:"Backwards.",2:"A pump creates differences.",3:"Glucose isn't moved by the pump."}},

// ---------- 2.9–2.10 COMPARTMENTALIZATION & ENDOSYMBIOSIS ----------
{id:"u2x1",t:"u2comp",q:"Why is compartmentalization an advantage for eukaryotic cells?",
 opts:["It makes eukaryotic cells smaller, so their SA:V stays high enough for diffusion to supply them","Compartments keep different (even competing) reactions apart and add membrane surface area","It lets all of the cell's enzymes mix freely in one space, so reactions run faster","It lets each compartment skip having a membrane, so materials move freely between them"],a:1,
 why:"Her slide gives both reasons: it prevents competing reactions from interfering (e.g., lysosome enzymes kept away from the cytoplasm) and increases surface area (e.g., folded inner mitochondrial membrane, ER).",
 wrong:{0:"Eukaryotic cells are usually larger.",2:"The advantage is keeping reactions SEPARATE.",3:"Compartments are defined by their membranes."}},
{id:"u2x2",t:"u2comp",q:"Which is evidence that mitochondria were once free-living prokaryotes?",
 opts:["They have a single membrane, like the membrane around bacteria","They have their own circular DNA and 70S ribosomes, like bacteria","They are assembled in the Golgi from proteins made on the rough ER","They are found only in plants, which absorbed bacteria from the soil"],a:1,
 why:"Four pieces of evidence (her slide): double membrane; own naked, circular DNA; own 70S (bacteria-sized) ribosomes; they divide on their own like bacteria (made only from pre-existing mitochondria).",
 wrong:{0:"They have a DOUBLE membrane: the inner one from the original bacterium, the outer from the engulfing cell.",2:"They reproduce by dividing, not by assembly in the Golgi.",3:"Animals, plants and fungi all have mitochondria."}},
{id:"u2x3",t:"u2comp",q:"Why do mitochondria and chloroplasts have TWO membranes?",
 opts:["Two membranes give them extra strength, protecting their DNA from the cell's digestive enzymes","The inner one is from the engulfed prokaryote; the outer is from the host membrane that engulfed it","The outer membrane came from the engulfed prokaryote; the inner one grew later by infolding","Their DNA is stored in the space between the two membranes, which keeps it separate"],a:1,
 why:"That's exactly what you'd expect if one cell engulfed another. Link to 2.5: engulfing = endocytosis.",
 wrong:{0:"Not the explanation for their origin.",2:"Reversed: the INNER membrane is the original prokaryote's.",3:"Their DNA is inside the inner membrane, and that isn't why they have two."}},
{id:"u2x4",t:"u2comp",q:"The endomembrane system (nuclear envelope, ER, Golgi) most likely evolved from",
 opts:["endosymbiosis of a smaller prokaryote","infolding of the plasma membrane","budding off from the mitochondria","breakdown of the cell wall"],a:1,
 why:"Two origin stories, two kinds of organelles: infolding → nucleus and endomembrane system; endosymbiosis → mitochondria and chloroplasts.",
 wrong:{0:"Endosymbiosis explains mitochondria and chloroplasts.",2:"Mitochondria came from endosymbiosis; they didn't produce the ER.",3:"No."}},
{id:"u2x5",t:"u2comp",q:"Which sequence of endosymbiosis is supported by the fact that ALL eukaryotes have mitochondria but only some have chloroplasts?",
 opts:["Chloroplasts first (photosynthetic bacterium), then mitochondria in all lineages","Mitochondria first (aerobic bacterium), then chloroplasts in some lineages","Both at the same time, from one bacterium that could do both jobs","Neither was engulfed; both formed by infolding of the plasma membrane"],a:1,
 why:"If mitochondria came first, every later lineage inherits them; only the lineage that later engulfed a photosynthetic bacterium (plants/algae) got chloroplasts.",
 wrong:{0:"Then animals would have chloroplasts or would lack mitochondria.",2:"Not supported.",3:"Contradicts the evidence (own DNA, 70S ribosomes, double membrane)."}},
{id:"u2x6",t:"u2comp",q:"Prokaryotes carry out cellular respiration and photosynthesis without mitochondria or chloroplasts. Where?",
 opts:["In the nucleus, where their enzymes are stored","On infolded regions of the plasma membrane","In lysosomes, which break down their food","They can't do either without organelles"],a:1,
 why:"Her slide shows respiratory and thylakoid membranes in bacteria: folds of the plasma membrane. Same principle as always: more membrane surface = more room for reactions.",
 wrong:{0:"Prokaryotes have no nucleus.",2:"Prokaryotes have no lysosomes.",3:"Many bacteria do both."}},
{id:"u2x7",t:"u2comp",q:"Why are lysosomal enzymes kept inside lysosomes?",
 opts:["They only work at the cytoplasm's neutral pH, and the lysosome membrane keeps that pH steady for them","Free in the cytoplasm, they would digest the cell's own molecules; the membrane keeps them apart","They are too large to cross any membrane, so they stay put until the lysosome bursts open","They are made inside the lysosome, so they have never been exposed to the cytoplasm"],a:1,
 why:"Compartmentalization in action. Lysosomes are acidic inside (the enzymes work best there), and the membrane protects the rest of the cell. Lysosomal storage diseases happen when these enzymes don't work and material builds up.",
 wrong:{0:"They work best at the lysosome's ACIDIC pH.",2:"Size isn't the main reason; separation is.",3:"They're made on the rough ER and sent through the Golgi."}},
{id:"u2x8",t:"u2comp",q:"Which statement about ribosomes and endosymbiosis is correct?",
 opts:["Mitochondrial ribosomes are 70S, like bacterial ones; cytoplasmic ribosomes are larger (80S)","Mitochondria have no ribosomes of their own, so they import every protein they use from the cytoplasm","All ribosomes are the same size, which shows all cells share one ancestor","Mitochondrial ribosomes are 80S, like the cytoplasm's, because the nucleolus makes them"],a:0,
 why:"The size match with bacteria is key evidence.",
 wrong:{1:"They do have their own.",2:"Sizes differ; that's the evidence.",3:"They're 70S, and mitochondria make their own."}},
{id:"u2x9",t:"u2comp",q:"A student claims prokaryotes have no compartments at all. The best correction is",
 opts:["The claim is correct: prokaryotes are just a bag of cytoplasm, and all of their reactions mix together","They lack membrane-bound organelles, but a nucleoid region and infolded membranes separate some functions","Prokaryotes have a small nucleus, and their ribosomes form a separate compartment","Prokaryotes have mitochondria-like compartments, which is where respiration happens"],a:1,
 why:"Precise language earns points: prokaryotes lack MEMBRANE-BOUND organelles (Idea 1 tripping point), but they still organize their interior.",
 wrong:{0:"Too strong.",2:"No nucleus, and ribosomes have no membrane.",3:"No mitochondria; respiration happens on infolded plasma membrane."}},

// ---------- LABS & DATA ----------
{id:"u2L1",t:"u2lab",q:"In the dialysis-tubing lab, a bag of glucose + starch is placed in water with iodine (IKI). Afterward, the INSIDE of the bag turns blue-black and the water outside tests positive for glucose. What does this show?",
 opts:["Starch and IKI can cross the tubing, but glucose cannot","Glucose and IKI can cross the tubing, but starch cannot","Nothing crossed; the color change came from inside the bag","Glucose crossed the tubing, but IKI and starch cannot"],a:1,
 why:"The color change is inside, so IKI got IN to the starch. Glucose showed up outside, so glucose got OUT. Starch stayed in (outside never turned blue-black). Conclusion: glucose and IKI are smaller than the pores; starch is larger.",
 wrong:{0:"If starch had left, the outside would turn blue-black, and glucose did leave.",2:"Both glucose and IKI moved.",3:"IKI must have entered: the inside turned blue-black."}},
{id:"u2L2",t:"u2lab",q:"Why does the potato core lab (Activity B of the Diffusion and Osmosis lab) measure percent change in mass instead of just change in mass?",
 opts:["It's easier to measure, since the balance can't read changes smaller than 1 g","The cores start at different masses; percent change lets you compare them fairly","Percent change is always positive, so it's easier to graph than a mass change","Balances in the lab only show percents, so that is the only value students can record"],a:1,
 why:"A 1 g gain means more for a 2 g core than a 10 g core. Percent change = (final − initial) ÷ initial × 100 puts everything on the same scale. Understand the reason; then write the lab answer in your own words.",
 wrong:{0:"Not the reason.",2:"It can be negative (mass lost).",3:"No."}},
{id:"u2L3",t:"u2lab",q:"A potato core LOSES mass in a sucrose solution. The solution was",
 opts:["hypotonic to the potato","hypertonic to the potato","isotonic to the potato","pure water (0.0 M sucrose)"],a:1,
 why:"Mass lost = water left the potato = water moved toward the higher solute concentration outside. The solution is hypertonic (lower Ψ) compared to the potato.",
 wrong:{0:"In a hypotonic solution the core gains water.",2:"Isotonic = no net change.",3:"Pure water is hypotonic; the core would gain mass."}},
{id:"u2L4",fig:FIG_POTATO,t:"u2lab",q:"Using the data, at about what sucrose molarity would the potato neither gain nor lose mass?",
 opts:["About 0.0 M (where the line starts)","About 0.28 M (between 0.2 and 0.4 M)","About 0.6 M (between 0.4 and 0.8 M)","About 1.0 M (the highest molarity)"],a:1,
 why:"The % change goes from +5.0 at 0.2 M to −8.0 at 0.4 M, so it crosses 0 between them, closer to 0.2: 0.2 + 0.2 × (5 ÷ 13) ≈ 0.28 M. On a graph, read where the line crosses the x-axis.",
 wrong:{0:"At 0.0 M it gained 18%.",2:"At 0.6 M it lost 16%.",3:"At 1.0 M it lost 24%."}},
{id:"u2L5",fig:FIG_POTATO,t:"u2lab",q:"Cores that soaked in 0.2 M are moved to 0.8 M sucrose. What happens?",
 opts:["They gain water, because 0.8 M is hypotonic to the cells (higher water potential)","They lose water, because 0.8 M is hypertonic to the cells (lower water potential)","Nothing changes, because the cores already reached equilibrium in the 0.2 M sucrose","They take in water until they burst, because 0.8 M has more solute than the cells"],a:1,
 why:"0.8 M is far above the potato's ~0.28 M equilibrium, so its Ψ is lower than the cells'. Water leaves, cells shrink, membranes pull from the walls. This is a question from her Visual Representations practice.",
 wrong:{0:"0.8 M has MORE solute, so it's hypertonic.",2:"Equilibrium with 0.2 M doesn't carry over; now there's a big gradient.",3:"Plant cells don't burst, and water is leaving."}},
{id:"u2L6",t:"u2lab",q:"In the potato lab, which is the independent variable?",
 opts:["Percent change in mass of each potato core","Sucrose concentration (molarity) of the solution","Final mass of each core after soaking overnight","Temperature of the solutions during the soak time"],a:1,
 why:"The IV is what you change on purpose: the sucrose molarity. It goes on the x-axis. % change in mass is the dependent variable (y-axis). Her graphing notes: IV with units on x; DV with units on y.",
 wrong:{0:"That's the DV.",2:"Used to calculate the DV.",3:"Held constant (a controlled variable)."}},
{id:"u2L7",t:"u2lab",q:"Which is the BEST graphing practice according to her teacher's notes?",
 opts:["Start the line at the origin (0,0) even when there's no 0,0 data point","Use simple scale intervals (1, 2, 5, 10), plot every point, and connect them","Draw extra grid lines on the graph paper to make points easier to read","Extend the best-fit line well past the last point to show where the trend is going"],a:1,
 why:"Her Blue Sheet tips: simple intervals, plot every point accurately (one misplaced point loses the plotting point), connect dots for line graphs, don't go to 0,0 unless it's data, don't extend past the last point unless asked, never add lines to the graph paper.",
 wrong:{0:"Only if 0,0 is a real data point.",2:"Never add lines to the graph paper.",3:"Only if asked to extrapolate."}},
{id:"u2L8",t:"u2lab",q:"A marine clam is put in a freshwater aquarium. What happens?",
 opts:["Water leaves its cells, since fresh water is hypertonic to the clam, so the cells shrivel up","Water enters its cells, since fresh water is hypotonic to the clam; cells swell and may burst","Nothing happens, since a clam's cells stay isotonic to whatever water it is placed in","Salt moves into its cells from the fresh water, so the clam becomes more salty"],a:1,
 why:"Fresh water has a higher Ψ (fewer solutes) than the clam's cells. Water moves in; animal cells have no wall, so they can lyse. This is one of her lab extension questions, so practice explaining it in terms of water potential.",
 wrong:{0:"Fresh water is HYPOtonic to a marine animal; shriveling is what happens to a freshwater animal in salt water.",2:"There's a big gradient.",3:"Salt would, if anything, leave."}},
{id:"u2L9",t:"u2lab",q:"In a lab, a student writes: 'The water moved because it was hypotonic.' What's missing?",
 opts:["Nothing; 'hypotonic' already tells which way the water moved, so it earns the point","A comparison: hypotonic compared to what (e.g., 'the beaker was hypotonic compared to the cell')","The color of the solution, so the reader can tell which side had more solute","A labeled drawing of the cell and beaker showing arrows for the water movement"],a:1,
 why:"Tonicity words are always comparisons. Her test notes: complete every comparison, and don't use 'it.'",
 wrong:{0:"It loses the point: 'hypotonic' means nothing without 'compared to what'.",2:"Irrelevant.",3:"Not required."}}
);

// ---- numeric (typed) ----
MCQ.push(
{id:"u2n7",t:"u2wp",type:"num",q:"Calculate the solute potential (Ψs) of a 0.2 M sucrose solution at 22 °C. Use Ψs = −iCRT with R = 0.0831 L·bar/mol·K. (Type the number in bars, with its sign.)",
 answer:-4.90, tol:0.05, unit:"bars",
 why:"i = 1 (sucrose doesn't ionize). T = 22 + 273 = 295 K. Ψs = −(1)(0.2)(0.0831)(295) = −4.90 bars. In a sentence: 'The solute potential of the solution is −4.90 bars.'",
 hint:"Most common errors: forgetting to convert °C to K (+273), or dropping the negative sign."},
{id:"u2n8",t:"u2wp",type:"num",q:"Calculate Ψs of a 0.15 M CaCl₂ solution at 25 °C. (CaCl₂ breaks into Ca²⁺ + 2 Cl⁻.)",
 answer:-11.14, tol:0.06, unit:"bars",
 why:"i = 3 (three ions). T = 298 K. Ψs = −(3)(0.15)(0.0831)(298) = −11.14 bars.",
 hint:"Count the ions: one Ca²⁺ and two Cl⁻, so i = 3."},
{id:"u2n9",t:"u2wp",type:"num",q:"A plant cell has Ψp = 3 bars and Ψs = −5.2 bars. What is its water potential (Ψ)?",
 answer:-2.2, tol:0.02, unit:"bars",
 why:"Ψ = Ψs + Ψp = −5.2 + 3 = −2.2 bars.",
 hint:"Add them, keeping the signs."},
{id:"u2n10",t:"u2wp",type:"num",q:"At equilibrium in an open beaker, a plant cell's Ψs is −6.0 bars and the surrounding solution's Ψ is −2.5 bars. What is the cell's pressure potential (Ψp)?",
 answer:3.5, tol:0.02, unit:"bars",
 why:"At equilibrium Ψcell = Ψsolution. So Ψs + Ψp = −2.5 → −6.0 + Ψp = −2.5 → Ψp = +3.5 bars.",
 hint:"At equilibrium, the cell's total Ψ equals the solution's Ψ. Solve for Ψp."},
{id:"u2n11",t:"u2wp",type:"num",q:"Calculate Ψs of a 0.4 M glucose solution at 27 °C.",
 answer:-9.97, tol:0.05, unit:"bars",
 why:"i = 1, T = 300 K. Ψs = −(1)(0.4)(0.0831)(300) = −9.97 bars.",
 hint:"27 °C + 273 = 300 K."},
{id:"u2n12",t:"u2lab",type:"num",q:"A potato core had an initial mass of 4.20 g and a final mass of 3.78 g. What is the percent change in mass?",
 answer:-10, tol:0.1, unit:"%",
 why:"(3.78 − 4.20) ÷ 4.20 × 100 = −0.42 ÷ 4.20 × 100 = −10.0%. Negative means it lost water.",
 hint:"(final − initial) ÷ initial × 100. Keep the negative sign."},
{id:"u2n13",t:"u2lab",type:"num",q:"A potato core went from 5.00 g to 5.45 g. What is the percent change in mass?",
 answer:9, tol:0.1, unit:"%",
 why:"(5.45 − 5.00) ÷ 5.00 × 100 = +9.0%.",
 hint:"Divide by the INITIAL mass."},
{id:"u2n14",t:"u2lab",type:"num",q:"From the potato data (0.2 M: +5.0%; 0.4 M: −8.0%), estimate the sucrose molarity where % change = 0. Round to two decimal places.",
 answer:0.28, tol:0.02, unit:"M",
 why:"The line drops 13 percentage points over 0.2 M. To drop 5 points (from +5 to 0) takes 0.2 × 5/13 ≈ 0.077 M. 0.2 + 0.077 ≈ 0.28 M.",
 hint:"Find how far between 0.2 and 0.4 the zero lies: 5 out of 13 of the way."},
{id:"u2n15",t:"u2lab",type:"num",q:"Using C = 0.28 M sucrose (the potato's equilibrium) at 23 °C, calculate the potato cells' solute potential.",
 answer:-6.89, tol:0.05, unit:"bars",
 why:"Ψs = −(1)(0.28)(0.0831)(296) = −6.89 bars. This is exactly what the lab analysis asks you to do with your class's C and room temperature.",
 hint:"T = 23 + 273 = 296 K; i = 1 for sucrose."}
);

// ---- daily short written questions (graded by Claude each night) ----
FRQ.push(
{id:"U2S19",t:"u2trans",short:true,title:"Passive or active?",
 stem:"Oxygen enters a muscle cell, and the same cell also takes in K⁺ ions even though there is already much more K⁺ inside than outside.",
 parts:[
  {verb:"Identify",text:"the type of transport for each substance.",pts:1,rubric:["O₂: passive transport (simple diffusion); K⁺: active transport (both needed)"]},
  {verb:"Explain",text:"why K⁺ movement requires energy but O₂ movement does not.",pts:1,rubric:["K⁺ moves against its concentration gradient (from low K⁺ outside to high K⁺ inside), which requires energy (ATP) and a pump protein; O₂ moves down its gradient (high O₂ outside to low O₂ inside) and, being small and nonpolar, crosses the bilayer without energy"]}
 ]},
{id:"U2S20",t:"u2trans",short:true,title:"Receptor-mediated endocytosis",
 stem:"Liver cells take in cholesterol-carrying particles (LDL) using receptor proteins on the plasma membrane.",
 parts:[
  {verb:"Describe",text:"how receptor-mediated endocytosis brings LDL into the cell.",pts:2,rubric:["LDL binds to specific receptor proteins on the plasma membrane","The membrane region with the bound receptors folds inward and pinches off, forming a vesicle that carries the LDL into the cell (requires energy)"]}
 ]},
{id:"U2S21",t:"u2trans",short:true,title:"Diffusion in words",
 stem:"A student writes: \"It moves from high to low until it's even.\"",
 parts:[
  {verb:"Rewrite",text:"this sentence so it would earn credit for glucose diffusing into a cell.",pts:1,rubric:["Names glucose (no 'it') and says concentration: e.g., 'Glucose moves from an area of high glucose concentration outside the cell to an area of low glucose concentration inside the cell'"]},
  {verb:"Explain",text:"why diffusion needs no energy from the cell.",pts:1,rubric:["Molecules are in constant random motion; the net movement down a concentration gradient (toward more disorder/entropy) happens on its own, so no ATP is needed"]}
 ]},
{id:"U2S22",t:"u2tonic",short:true,title:"Red blood cell in salt water",
 stem:"A red blood cell is placed in a 5% salt solution. Red blood cells are isotonic to a 0.9% salt solution.",
 parts:[
  {verb:"Identify",text:"the tonicity of the 5% solution compared with the cell.",pts:1,rubric:["The 5% salt solution is hypertonic compared to the red blood cell (comparison stated)"]},
  {verb:"Predict",text:"what happens to the cell and justify your prediction.",pts:1,rubric:["The cell shrivels (crenates) because water moves by osmosis out of the cell (hypotonic, higher water concentration) into the hypertonic solution"]}
 ]},
{id:"U2S23",t:"u2tonic",short:true,title:"Why plants wilt",
 stem:"A houseplant that hasn't been watered for a week droops.",
 parts:[
  {verb:"Describe",text:"the state of the plant's cells (use turgid, flaccid, or plasmolyzed).",pts:1,rubric:["The cells are flaccid (or plasmolyzed if severe): they've lost water, so the membrane no longer presses against the cell wall"]},
  {verb:"Explain",text:"how watering the plant makes it stand up again.",pts:1,rubric:["Water moves into the cells (the cells are hypertonic to the water / lower Ψ), the central vacuole fills, and turgor pressure pushes the membrane against the cell wall, making cells firm (turgid)"]}
 ]},
{id:"U2S24",t:"u2tonic",short:true,title:"Only the trapped solute counts",
 stem:"A bag permeable to water and glucose (but NOT sucrose) contains 0.4 M sucrose and is placed in a beaker of 0.4 M glucose.",
 parts:[
  {verb:"Predict",text:"what happens to the bag's mass over time.",pts:1,rubric:["The bag gains mass (swells)"]},
  {verb:"Justify",text:"your prediction.",pts:1,rubric:["Glucose diffuses into the bag until equal on both sides, but sucrose can't leave; the bag ends up with more total solute (hypertonic), so water moves in by osmosis"]}
 ]},
{id:"U2S25",t:"u2wp",short:true,title:"Solute potential, in a sentence",
 stem:"A student places potato cores in 0.3 M sucrose at 20 °C.",
 parts:[
  {verb:"Calculate",text:"the solute potential of the solution. Show your setup and answer in a complete sentence.",pts:1,rubric:["Ψs = −(1)(0.3 mol/L)(0.0831 L·bar/mol·K)(293 K) = −7.30 bars, stated in a sentence with the negative sign and the unit bars"]},
  {verb:"Explain",text:"why Ψs can never be positive.",pts:1,rubric:["Pure water has Ψs = 0; adding solute binds water in hydration shells and reduces free water, so Ψs can only decrease (become negative); the equation has a negative sign"]}
 ]},
{id:"U2S26",t:"u2wp",short:true,title:"Which way does water go?",
 stem:"Plant cell: Ψs = −6 bars, Ψp = +2 bars. It is placed in an open beaker of solution with Ψs = −3 bars.",
 parts:[
  {verb:"Calculate",text:"the water potential of the cell and of the solution.",pts:1,rubric:["Cell Ψ = −6 + 2 = −4 bars; solution Ψ = −3 + 0 = −3 bars (open beaker, Ψp = 0)"]},
  {verb:"Predict",text:"the direction of net water movement and justify.",pts:1,rubric:["Water moves into the cell, because water moves from higher water potential (−3 bars, solution) to lower water potential (−4 bars, cell)"]}
 ]},
{id:"U2S27",t:"u2wp",short:true,title:"Salted cucumbers",
 stem:"Salt is sprinkled on sliced cucumbers, and after 20 minutes a puddle of water forms under them.",
 parts:[
  {verb:"Explain",text:"where the water came from, using water potential.",pts:2,rubric:["The salt dissolves on the surface, lowering the water potential outside the cucumber cells (more negative Ψs)","Water moves by osmosis from the cells (higher Ψ) to the salty surface (lower Ψ), so the cells lose water"]}
 ]},
{id:"U2S28",t:"u2mech",short:true,title:"The sodium–potassium pump",
 stem:"Nerve cells spend a large share of their ATP on the Na⁺/K⁺ pump.",
 parts:[
  {verb:"Describe",text:"what the pump moves and in which directions.",pts:1,rubric:["3 Na⁺ out of the cell and 2 K⁺ into the cell"]},
  {verb:"Explain",text:"why this process requires ATP.",pts:1,rubric:["Both ions move against their concentration gradients (Na⁺ to where Na⁺ is already high outside; K⁺ to where K⁺ is already high inside), which requires energy; ATP causes the pump's shape change"]}
 ]},
{id:"U2S29",t:"u2mech",short:true,title:"Cotransport",
 stem:"Intestinal cells use a Na⁺/glucose symporter to bring glucose into the cell, even when the cell already has more glucose than the intestine.",
 parts:[
  {verb:"Explain",text:"how the symporter moves glucose against its gradient without using ATP directly.",pts:1,rubric:["Na⁺ moves down its concentration gradient (high outside, low inside) through the symporter, and that movement provides the energy to carry glucose in against its gradient"]},
  {verb:"Identify",text:"what maintains the Na⁺ gradient.",pts:1,rubric:["The Na⁺/K⁺ pump, using ATP, pumps Na⁺ out of the cell"]}
 ]},
{id:"U2S30",t:"u2mech",short:true,title:"Opening the flower",
 stem:"In morning-glory petals, an active K⁺/H⁺ transporter moves K⁺ into the vacuole and H⁺ out of it as the flower opens, and the vacuole swells. (Vacuole pH is 6.6 in the bud and 7.7 in the open flower.)",
 parts:[
  {verb:"Describe",text:"how the vacuole's pH changes, and why.",pts:1,rubric:["The pH increases (becomes more basic, 6.6 → 7.7) because H⁺ ions are transported out of the vacuole"]},
  {verb:"Explain",text:"why the vacuole swells.",pts:1,rubric:["K⁺ moving in increases the solute concentration of the vacuole, lowering its water potential, so water moves into the vacuole by osmosis"]}
 ]},
{id:"U2S31",t:"u2comp",short:true,title:"Evidence for endosymbiosis",
 stem:"The endosymbiotic theory proposes that mitochondria were once free-living prokaryotes.",
 parts:[
  {verb:"Identify",text:"TWO pieces of evidence that support this theory.",pts:2,rubric:["Any one of: double membrane; own circular (naked) DNA; own 70S (bacteria-like) ribosomes; reproduce by division / only come from pre-existing mitochondria","A second, different piece of evidence from the same list"]}
 ]},
{id:"U2S32",t:"u2comp",short:true,title:"Why compartments help",
 stem:"Lysosomes contain enzymes that break down proteins, lipids, and nucleic acids.",
 parts:[
  {verb:"Explain",text:"how keeping these enzymes inside a membrane benefits the cell.",pts:2,rubric:["The membrane separates the hydrolytic reactions from the rest of the cell, so the enzymes don't digest the cell's own molecules (prevents competing/harmful reactions)","It allows a specialized environment (acidic pH) where the enzymes work best"]}
 ]},
{id:"U2S33",t:"u2comp",short:true,title:"Two origins",
 stem:"Eukaryotic cells have a nucleus and ER, and also mitochondria.",
 parts:[
  {verb:"Contrast",text:"how the nucleus/ER and the mitochondria are thought to have originated.",pts:2,rubric:["The nucleus and endomembrane system (ER) formed from infolding of the plasma membrane","Mitochondria originated by endosymbiosis: an aerobic prokaryote was engulfed by a host cell and kept"]}
 ]},
{id:"U2S34",t:"u2lab",short:true,title:"Reading the dialysis bag",
 stem:"A dialysis bag with starch and glucose sits in a cup of water with IKI. After 30 minutes, the bag's contents are blue-black, the water in the cup is still amber (yellow-brown), and the cup water tests positive for glucose.",
 parts:[
  {verb:"Identify",text:"which molecules crossed the tubing and which did not.",pts:1,rubric:["Glucose (out) and IKI (in) crossed; starch did not cross (all three needed)"]},
  {verb:"Explain",text:"what this tells you about molecule size and the tubing's pores.",pts:1,rubric:["Glucose and IKI are smaller than the pores; starch (a polysaccharide polymer) is larger than the pores, so the tubing is selectively permeable by size"]}
 ]},
{id:"U2S35",t:"u2lab",short:true,title:"Designing the potato lab",
 stem:"In the potato core lab, cores are placed in sucrose solutions from 0.0 M to 1.0 M overnight.",
 parts:[
  {verb:"Identify",text:"the independent variable, the dependent variable, and one controlled variable.",pts:1,rubric:["IV: sucrose concentration (M); DV: percent change in mass; a controlled variable such as temperature, time in solution, size/type of potato, or volume of solution (all three needed)"]},
  {verb:"Explain",text:"why the 0.0 M (distilled water) cup is useful.",pts:1,rubric:["It serves as a control/reference with no solute: the cores gain the most water there, showing the potato's cells are hypertonic to pure water"]}
 ]},
{id:"U2S36",t:"u2lab",short:true,title:"The carrot and the corn syrup",
 stem:"A hole in a carrot is filled with corn syrup (very concentrated sugar) and sealed with a glass tube. The carrot sits in pure water.",
 parts:[
  {verb:"Predict",text:"what happens to the liquid level in the glass tube.",pts:1,rubric:["The liquid level in the tube rises"]},
  {verb:"Explain",text:"your prediction in terms of water potential.",pts:1,rubric:["Pure water has the highest Ψ (0), the carrot cells are in between, and the corn syrup has the lowest Ψ; water moves from high to low Ψ, from the cup through the carrot cells into the corn syrup, so the volume in the tube increases"]}
 ]}
);

// ---- full AP-style FRQs ----
FRQ.push(
{id:"U2F8",t:"u2lab",title:"Potato cores and water potential (lab FRQ)",fig:FIG_POTATO,
 stem:"Students placed potato cores in sucrose solutions of different molarities at 23 °C for 24 hours and calculated the percent change in mass (table).",
 parts:[
  {verb:"Identify",text:"the independent variable and the dependent variable.",pts:1,rubric:["IV: molarity of sucrose in the beaker (M); DV: percent change in mass of the potato cores"]},
  {verb:"Construct",text:"a graph of the data. Describe your axes (labels and units), your scale, and how you would plot and connect the points.",pts:2,rubric:["x-axis: sucrose molarity (M) with a simple scale (e.g., 0.1 M intervals); y-axis: percent change in mass (%) with a scale including negative values (e.g., 5% intervals from −25 to +20)","All six points plotted and connected with straight lines point to point (no line to the origin, not extended past 1.0 M)"]},
  {verb:"Determine",text:"the molarity of sucrose that is isotonic to the potato cells.",pts:1,rubric:["About 0.28 M (accept 0.25–0.30 M), where the line crosses 0% change"]},
  {verb:"Calculate",text:"the solute potential of the potato cells. Show your work.",pts:1,rubric:["Ψs = −(1)(0.28)(0.0831)(296) ≈ −6.9 bars (consistent with their C), with the negative sign and the unit bars, stated in a sentence"]},
  {verb:"Explain",text:"why the cores in 0.0 M sucrose gained mass.",pts:1,rubric:["Distilled water has a higher water potential (0 bars) than the potato cells (lower/negative Ψ), so water moved into the cells by osmosis"]},
  {verb:"Predict",text:"how the results would change if the cores were sweet potato, which has a higher sugar content, and justify.",pts:2,rubric:["The line would shift right: the isotonic point (x-intercept) would be at a higher sucrose molarity","Sweet potato cells have more solute, so a lower Ψs; it takes a more concentrated solution to match them, and they gain water in solutions that would make regular potato lose water"]}
 ]},
{id:"U2F9",t:"u2mech",title:"Glucose absorption in the intestine",fig:FIG_GUT,
 stem:"The model shows a cell lining the small intestine, with the concentrations of Na⁺ and glucose in the blood, the cell, and the intestine.",
 parts:[
  {verb:"Identify",text:"the type of transport that moves glucose from the cell into the blood.",pts:1,rubric:["Facilitated diffusion (passive) through GLUT2"]},
  {verb:"Describe",text:"how the Na⁺/K⁺ pump establishes the conditions needed for glucose to enter the cell from the intestine.",pts:1,rubric:["The pump uses ATP to move Na⁺ out of the cell (into the blood), keeping Na⁺ concentration low inside the cell, creating a Na⁺ gradient from the lumen into the cell"]},
  {verb:"Explain",text:"how the Na⁺/glucose symporter moves glucose into the cell against its concentration gradient.",pts:1,rubric:["Na⁺ moves down its gradient into the cell through the symporter; the energy of that movement is coupled to moving glucose into the cell against its gradient (secondary active transport/cotransport)"]},
  {verb:"Predict",text:"the effect on glucose absorption if the cell ran out of ATP, and justify.",pts:1,rubric:["Glucose absorption from the intestine would decrease/stop, because without ATP the pump stops, the Na⁺ gradient runs down, and the symporter no longer has the energy to bring glucose in"]}
 ]},
{id:"U2F10",t:"u2comp",title:"Where did mitochondria come from?",
 stem:"Researchers compared mitochondria with free-living bacteria. Mitochondria have two membranes, a circular DNA molecule, and ribosomes that are 70S in size (like bacteria); the rest of the eukaryotic cell has 80S ribosomes. New mitochondria form only by the division of existing mitochondria.",
 parts:[
  {verb:"Describe",text:"the endosymbiotic theory.",pts:1,rubric:["An ancestral host cell engulfed a free-living (aerobic) prokaryote, which was not digested and lived inside it in a mutually beneficial relationship, eventually becoming the mitochondrion"]},
  {verb:"Explain",text:"how TWO of the observations support the theory.",pts:2,rubric:["One observation linked to reasoning, e.g., circular DNA and 70S ribosomes match bacteria, not the eukaryotic nucleus/cytoplasm","A second observation with reasoning, e.g., the double membrane (inner from the bacterium, outer from the host's engulfing membrane) or division like bacterial fission"]},
  {verb:"Explain",text:"how compartmentalization inside the mitochondrion benefits the cell.",pts:1,rubric:["The folded inner membrane increases surface area for the reactions that make ATP, and separating these reactions from the cytoplasm keeps competing reactions apart"]}
 ]},
{id:"U2F11",t:"u2tonic",title:"Osmosis in a dialysis bag",fig:FIG_BEAKER,
 stem:"A model cell (dialysis bag) and a beaker contain the solutions shown. The membrane is permeable to water, glucose, and fructose, but not sucrose.",
 parts:[
  {verb:"Identify",text:"whether the cell is hypertonic, hypotonic, or isotonic compared to the beaker.",pts:1,rubric:["The cell is hypertonic compared to the beaker (0.03 M vs 0.01 M sucrose, the solute that can't cross)"]},
  {verb:"Predict",text:"the direction of net water movement and justify.",pts:1,rubric:["Water moves into the cell, from the hypotonic beaker (higher water concentration/higher Ψ) to the hypertonic cell"]},
  {verb:"Describe",text:"the movement of glucose and of fructose.",pts:1,rubric:["Glucose moves out of the cell (0.02 M → 0.01 M) and fructose moves into the cell (0.01 M → 0 M), each down its own concentration gradient until equal on both sides"]},
  {verb:"Explain",text:"why sucrose, not glucose, determines the direction of water movement at equilibrium.",pts:1,rubric:["Glucose and fructose even out on both sides, so they create no lasting difference; sucrose can't cross, so its concentration difference remains and sets the water gradient"]}
 ]}
);

// ================= REVIEW-SHEET COVERAGE (Sep 26 audit) =================
const FIG_BAG = `<svg viewBox="0 0 360 220" role="img" aria-label="Line graph: percent change in mass of glucose-filled dialysis bags versus molarity of glucose in the beaker" style="width:100%;max-width:520px;font:11px sans-serif">
<text x="195" y="14" text-anchor="middle" font-weight="700">% change in mass of dialysis bags vs. glucose in beaker</text>
<g stroke="rgba(120,120,120,.35)">${[40,30,20,10,0,-10,-20,-30].map(v=>`<line x1="50" x2="340" y1="${110-v*2.5}" y2="${110-v*2.5}"/>`).join('')}${[0,0.2,0.4,0.6,0.8,1,1.2].map(v=>`<line y1="10" y2="185" x1="${50+v*240}" x2="${50+v*240}"/>`).join('')}</g>
<line x1="50" x2="340" y1="110" y2="110" stroke="currentColor" stroke-width="1.5"/>
${[40,30,20,10,0,-10,-20,-30].map(v=>`<text x="44" y="${114-v*2.5}" text-anchor="end">${v}</text>`).join('')}
${[0,0.2,0.4,0.6,0.8,1,1.2].map(v=>`<text x="${50+v*240}" y="198" text-anchor="middle">${v}</text>`).join('')}
<polyline fill="none" stroke="currentColor" stroke-width="2.5" points="${[[0,30],[0.1,27],[0.2,22],[0.3,20],[0.4,14],[0.5,10],[0.6,4],[0.7,0],[0.8,-8],[0.9,-11],[1.0,-18]].map(([x,y])=>`${50+x*240},${110-y*2.5}`).join(' ')}"/>
<text x="195" y="214" text-anchor="middle">Molarity of glucose in beaker (M)</text>
<text x="12" y="110" transform="rotate(-90 12 110)" text-anchor="middle">% change in mass</text>
</svg>`;

MCQ.push(
{id:"u2r1",t:"u2endo",pair:true,q:"How do free ribosomes and bound ribosomes differ?",
 opts:["Free ones make proteins for secretion or membranes; bound ones (on rough ER) make proteins for the cytosol","Free ones make proteins for the cytosol; bound ones (on rough ER) make proteins for secretion, membranes or lysosomes","Free ones are larger (80S) and make most proteins; bound ones are smaller (70S), as in prokaryotes","Free ones make proteins for the cytosol; bound ones (on smooth ER) make lipids and steroid hormones"],a:1,
 why:"The ribosomes themselves are identical. What differs is where the protein ends up: cytosol (free) vs. the endomembrane route (bound).",
 wrong:{0:"Reversed.",2:"They're the same kind of ribosome; only their location differs.",3:"Ribosomes only make proteins; the smooth ER makes lipids, and bound ribosomes sit on the ROUGH ER."}},
{id:"u2r2",t:"u2endo",q:"Where is an enzyme that works in the cytosol typically made?",
 opts:["On ribosomes bound to the rough ER","On free ribosomes in the cytosol","In the Golgi","In the nucleolus"],a:1,
 why:"Proteins that stay in the cytosol are made on free ribosomes and never enter the ER–Golgi route. This is practice problem 6 on her review sheet.",
 wrong:{0:"Bound ribosomes make proteins for secretion, membranes, or lysosomes.",2:"The Golgi modifies proteins; it doesn't make them.",3:"The nucleolus makes ribosomes, not enzymes."}},
{id:"u2r3",t:"u2cells",pair:true,q:"Which statement correctly contrasts the nucleus and the nucleolus?",
 opts:["They are two names for the same double-membrane compartment that holds the DNA and makes ribosomes","The nucleus is the double-membrane compartment holding DNA; the nucleolus is a region inside it that makes ribosomes","The nucleolus is a membrane that surrounds the nucleus and controls what enters and leaves it","The nucleolus is the double-membrane compartment holding DNA; the nucleus is a region inside it that makes ribosomes"],a:1,
 why:"Nucleolus = inside the nucleus, the ribosome factory (rRNA). Nucleus = the whole DNA compartment with its nuclear envelope.",
 wrong:{0:"They're different structures.",2:"It's inside, not around, and it has no membrane.",3:"Reversed."}},
{id:"u2r4",t:"u2mem",pair:true,q:"How does an integral protein differ from a peripheral protein?",
 opts:["Integral proteins are embedded in or span the bilayer; peripheral proteins sit loosely on the surface","Peripheral proteins are embedded in or span the bilayer; integral proteins sit loosely on the surface","Integral proteins are carbohydrates attached to lipids; peripheral proteins are made of amino acids","Only peripheral proteins act as channels, because integral proteins are buried inside the tails"],a:0,
 why:"Integral proteins have nonpolar R-groups where they pass through the nonpolar tails (Unit 1 link). Channels and pumps are integral. Peripheral proteins attach to the surface.",
 wrong:{1:"Reversed.",2:"Both are proteins.",3:"Channels must span the membrane, so they're integral."}},
{id:"u2r5",t:"u2mem",pair:true,q:"Match: receptor protein, channel protein, glycoprotein.",
 opts:["Receptor = passage for certain ions or molecules; channel = cell-recognition tag; glycoprotein = binds a signal","Receptor = binds a specific signal; channel = passage for certain ions or molecules; glycoprotein = cell-recognition tag","Receptor = binds a specific signal; channel = pump that uses ATP for ions; glycoprotein = stores sugar for energy","Receptor = pump that uses ATP to move ions; channel = binds a specific signal; glycoprotein = passage for water"],a:1,
 why:"Receptor → signal. Channel → passage. Glycoprotein → recognition (the carbohydrate 'ID tag', Unit 1 carbohydrates).",
 wrong:{0:"Mixed up.",2:"Channels are passive, not pumps, and glycoproteins are for recognition.",3:"Mixed up, and receptors aren't pumps."}},
{id:"u2r6",t:"u2endo",pair:true,q:"How do lysosomes and secretory vesicles differ?",
 opts:["Both come from the Golgi; lysosomes release their enzymes by exocytosis, and secretory vesicles digest material inside the cell","Both come from the Golgi; lysosomes keep enzymes inside to digest material, and secretory vesicles release products by exocytosis","Both come from the rough ER; secretory vesicles digest bacteria, and lysosomes carry hormones to the membrane","Lysosomes come from the smooth ER and are found only in plants; secretory vesicles come from the Golgi"],a:1,
 why:"Same origin (the Golgi), opposite fates: one keeps and digests, one ships out.",
 wrong:{0:"Reversed.",2:"Both bud from the Golgi, and the jobs are reversed.",3:"Lysosomes come from the Golgi and are typical of animal cells."}},
{id:"u2r7",t:"u2endo",pair:true,q:"Which correctly contrasts ribosomes and the Golgi apparatus?",
 opts:["Both are membrane-bound; ribosomes build polypeptides, and the Golgi modifies, packages and ships proteins","Ribosomes build polypeptides and have no membrane; the Golgi modifies, packages and ships proteins and is membrane-bound","The Golgi builds polypeptides and is membrane-bound; ribosomes package and ship proteins and have no membrane","Ribosomes build polypeptides but are found only in eukaryotes; the Golgi modifies and ships proteins in all cells"],a:1,
 why:"Build (ribosome) vs. finish and ship (Golgi). All cells have ribosomes; only eukaryotes have a Golgi.",
 wrong:{0:"Ribosomes have no membrane.",2:"Reversed.",3:"All cells have ribosomes; only eukaryotes have a Golgi."}},
{id:"u2r8",t:"u2comp",pair:true,q:"Which is TRUE of both mitochondria and chloroplasts, but NOT of the Golgi?",
 opts:["They have a single membrane, their own linear DNA, and ribosomes on their surface","They have a double membrane, their own circular DNA, and their own ribosomes","They modify, package and ship proteins made by ribosomes on the rough ER","They are found in all prokaryotes as well as in plant and animal cells"],a:1,
 why:"These features point to endosymbiotic origin. The difference between the two: mitochondria carry out cellular respiration in all eukaryotes; chloroplasts carry out photosynthesis in plants and algae.",
 wrong:{0:"Both have double membranes and circular DNA; the Golgi has one membrane.",2:"That's the Golgi.",3:"Prokaryotes have neither."}},
{id:"u2r9",t:"u2tonic",q:"A solution has HIGH osmolarity compared to a cell. That means the solution",
 opts:["has fewer dissolved particles and is hypotonic, so water enters the cell","has more dissolved particles and is hypertonic, so water leaves the cell","has more dissolved particles and is hypotonic, so water enters the cell","has the same dissolved particles as the cell and is isotonic, so no net flow"],a:1,
 why:"Osmolarity = total concentration of dissolved particles. Water moves from low osmolarity (hypotonic) to high osmolarity (hypertonic).",
 wrong:{0:"Reversed.",2:"More solute outside = hypertonic, and water leaves the cell.",3:"Isotonic means equal osmolarity."}},
{id:"u2r10",t:"u2perm",pair:true,q:"Which correctly contrasts the cell membrane and the cell wall?",
 opts:["The wall is a selectively permeable bilayer in all cells; the membrane is a rigid carbohydrate layer outside it in plants, fungi and bacteria","The membrane is a selectively permeable bilayer in all cells; the wall is a rigid carbohydrate layer outside it in plants, fungi and bacteria","The membrane is a rigid carbohydrate layer in plants only; the wall is a flexible bilayer found in all cells, including animals","The membrane and wall are the same bilayer; plants call it a wall because it is thicker and made of cellulose"],a:1,
 why:"Every cell has a membrane. Only some have a wall, which sits outside the membrane and gives structure.",
 wrong:{0:"Reversed.",2:"Animal cells have a membrane and no wall; the wall is the rigid one.",3:"Different structures, different jobs."}},
{id:"u2r11",t:"u2trans",pair:true,q:"How is osmosis different from diffusion in general?",
 opts:["Osmosis is the movement of water that requires ATP, while diffusion is always passive","Osmosis is specifically the diffusion of WATER across a selectively permeable membrane","Osmosis is diffusion from high to low, while diffusion goes from low to high concentration","Osmosis is specifically the diffusion of SOLUTES across a selectively permeable membrane"],a:1,
 why:"Both are passive and go from high to low concentration (of the thing moving). Osmosis is the water-only case.",
 wrong:{0:"Both are passive.",2:"Both go from high to low concentration.",3:"Osmosis is the diffusion of WATER; solutes spreading out is ordinary diffusion."}},
{id:"u2r12",t:"u2wp",pair:true,q:"How do solute potential (Ψs) and pressure potential (Ψp) differ?",
 opts:["Ψs comes from physical pressure and is 0 or positive; Ψp comes from dissolved solute and is negative in plant cells","Ψs comes from dissolved solute and is 0 or negative; Ψp comes from physical pressure and is positive in turgid plant cells","Ψs and Ψp both come from dissolved solute; Ψs is for cells and Ψp is for the solution in the beaker","Ψs comes from dissolved solute and is positive; Ψp depends on the ionization constant and is always negative"],a:1,
 why:"Ψ = Ψs + Ψp. Solute pulls Ψ down; wall pressure pushes it up.",
 wrong:{0:"Reversed.",2:"Two separate parts of Ψ: solute vs pressure.",3:"Ψs is 0 or negative, and i is in the Ψs equation, not Ψp."}},
{id:"u2r13",t:"u2tonic",pair:true,q:"How are 'isotonic' and 'dynamic equilibrium' related?",
 opts:["They mean the same thing: solute is equal on both sides, so water has stopped moving across the membrane","Isotonic is the condition (equal solute on both sides); dynamic equilibrium is the result (no net water movement)","Dynamic equilibrium is the condition (equal solute); isotonic is the result (water moves in only)","They are unrelated: isotonic describes solutes, and dynamic equilibrium describes only enzymes"],a:1,
 why:"Molecules never stop moving. Equal solute → equal movement each way → no NET change.",
 wrong:{0:"Water keeps moving; only the net is zero.",2:"Isotonic is the condition, and water moves both ways, not in only.",3:"One leads to the other."}},
{id:"u2r14",t:"u2comp",pair:true,q:"Which organelles are explained by membrane infolding, and which by endosymbiosis?",
 opts:["Infolding: mitochondria and chloroplasts; endosymbiosis: nucleus and ER","Infolding: nucleus, ER, Golgi; endosymbiosis: mitochondria and chloroplasts","Endosymbiosis explains every organelle, including the nucleus, ER and Golgi","Infolding: mitochondria and ER; endosymbiosis: nucleus and chloroplasts"],a:1,
 why:"Infolding of the plasma membrane → the endomembrane system. Engulfed prokaryotes → mitochondria and chloroplasts (double membrane, own DNA).",
 wrong:{0:"Reversed.",2:"Each explains a different group; the nucleus, ER and Golgi came from infolding.",3:"Mixed up."}},
{id:"u2r15",t:"u2lab",fig:FIG_BAG,q:"Students forgot to record the glucose concentration inside their dialysis bags. Using the graph, which molarity was inside the bags?",
 opts:["About 0.30 M","About 0.70 M","About 1.00 M","0 M"],a:1,
 why:"Where the line crosses 0% change, the bag neither gained nor lost water, so the beaker matched the bag: about 0.70 M. This is practice problem 1 on her review sheet.",
 wrong:{0:"At 0.3 M the bags still gained about 20%.",2:"At 1.0 M they lost about 18%.",3:"At 0 M they gained the most."}}
);
for (const id of ["u2w4","u2t11","u2o2","u2o5","u2t4","u2t6"]) { const q=MCQ.find(x=>x.id===id); if(q) q.pair=true; }

MCQ.push(
{id:"u2n16",t:"u2lab",type:"num",fig:FIG_BAG,q:"From the graph, determine the molarity of glucose that was inside the dialysis bags. Round to two decimal places.",
 answer:0.70, tol:0.03, unit:"M",
 why:"The line crosses 0% change at about 0.70 M. That's the concentration where the beaker and the bag were isotonic, so it must be the bag's concentration.",
 hint:"Find where the line crosses the horizontal 0 line, then read straight down to the x-axis."},
{id:"u2n17",t:"u2wp",type:"num",q:"Using 0.70 M glucose (from the dialysis-bag graph), calculate the solute potential of the dialysis bag at 20 °C.",
 answer:-17.04, tol:0.5, unit:"bars",
 why:"i = 1 (glucose), T = 293 K. Ψs = −(1)(0.70)(0.0831)(293) = −17.04 bars. In a sentence: 'The solute potential of the dialysis bag is −17.04 bars.' (If you read the graph as 0.71 M, you'd get −17.29 bars; small reading differences are fine.) This is practice problem 2 on her review sheet.",
 hint:"20 °C + 273 = 293 K. Keep the negative sign."}
);

FRQ.push(
{id:"U2S37",t:"u2tonic",short:true,title:"Snail in the Great Salt Lake",
 stem:"A freshwater snail is accidentally put into an aquarium filled with water from the Great Salt Lake (far saltier than the snail's cells).",
 parts:[
  {verb:"Describe",text:"the direction of water movement in terms of tonicity (hypotonic, hypertonic, isotonic).",pts:1,rubric:["The salt water is hypertonic compared to the snail's cells (the cells are hypotonic compared to the water), so water moves out of the snail's cells into the salt water"]},
  {verb:"Predict",text:"the likely outcome for the snail.",pts:1,rubric:["The snail's cells lose water and shrivel/dehydrate, and the snail is likely to die"]}
 ]},
{id:"U2S38",t:"u2perm",short:true,title:"Getting straight through the membrane",
 stem:"In a model of a cell's response to infection, an inactive signaling protein (interleukin) is activated and then leaves the cell. Suppose a version of active interleukin could pass directly through the phospholipid bilayer without any protein or vesicle.",
 parts:[
  {verb:"Predict",text:"TWO characteristics this molecule would need.",pts:1,rubric:["Small AND nonpolar/hydrophobic (uncharged); both characteristics needed"]},
  {verb:"Justify",text:"your prediction.",pts:1,rubric:["The interior of the bilayer is made of nonpolar/hydrophobic fatty-acid tails, so only small, nonpolar molecules can pass through without a protein; charged or large polar molecules are blocked"]}
 ]},
{id:"U2S39",t:"u2lab",short:true,title:"Holes in the dialysis tubing",
 stem:"A dialysis bag with 3% starch and 3% glucose sits in distilled water. Bacteria that release plastic-digesting enzymes get into the water and quickly create large openings in the tubing.",
 parts:[
  {verb:"Predict",text:"what you would find in the water outside the bag the next day.",pts:1,rubric:["Both glucose and starch outside the bag"]},
  {verb:"Justify",text:"your prediction.",pts:1,rubric:["Glucose is small enough to pass through the normal pores anyway; the large openings now let starch (normally too large to cross) out as well, so both diffuse from high concentration in the bag to low concentration in the water"]}
 ]},
{id:"U2S40",t:"u2wp",short:true,title:"Onion cells in salt",
 stem:"A student views onion cells in water, then adds 15% NaCl to the slide. The cell contents shrink away from the cell walls.",
 parts:[
  {verb:"Explain",text:"why water left the cells, using water potential.",pts:1,rubric:["Adding 15% NaCl lowered the water potential outside the cells (more negative Ψs), so water moved from the cells (higher Ψ) to the salt solution (lower Ψ) by osmosis"]},
  {verb:"Explain",text:"how the water potential of the cells changed as they lost water.",pts:1,rubric:["As water left, the solute concentration inside increased (Ψs more negative) and turgor pressure dropped (Ψp toward 0), so the cells' water potential decreased until it matched the solution; the cells plasmolyzed"]}
 ]},
{id:"U2S41",t:"u2endo",short:true,title:"When lysosomes don't work",
 stem:"A phagocytic cell engulfs a bacterium into a vesicle, which fuses with a lysosome, and the bacterium is digested. In lysosomal storage diseases, lysosomes don't function properly.",
 parts:[
  {verb:"Describe",text:"how this process would look different in a person with a lysosomal storage disease.",pts:1,rubric:["The engulfed material (bacterium/molecules) would not be broken down; it would build up inside the vesicles/lysosomes instead of being digested"]},
  {verb:"Explain",text:"why, connecting to lysosome function.",pts:1,rubric:["Lysosomes normally use hydrolytic enzymes to break down polymers by hydrolysis; without working enzymes, macromolecules can't be broken into monomers, so material accumulates"]}
 ]},
{id:"U2S42",t:"u2endo",short:true,title:"Who else is on the team?",
 stem:"A diagram of a cell labels only the rough ER, the Golgi apparatus, and a vesicle.",
 parts:[
  {verb:"Identify",text:"ONE additional organelle that works with these to make and export a protein.",pts:1,rubric:["Any one: nucleus, ribosomes, plasma membrane (or lysosome, for proteins sent there)"]},
  {verb:"Explain",text:"its function in relation to the labeled organelles.",pts:1,rubric:["A correct role tied to the pathway, e.g., the nucleus holds the DNA instructions (mRNA sent to ribosomes); ribosomes on the rough ER synthesize the polypeptide; the plasma membrane fuses with the vesicle to release the protein by exocytosis"]}
 ]},
{id:"U2S43",t:"u2endo",short:true,title:"Word pair: free vs. bound ribosomes",
 stem:"One cell makes two proteins: an enzyme that works in the cytosol, and a hormone released into the blood.",
 parts:[
  {verb:"Identify",text:"where each protein is synthesized.",pts:1,rubric:["Cytosolic enzyme: free ribosomes in the cytosol; hormone: ribosomes bound to the rough ER (both needed)"]},
  {verb:"Describe",text:"the path the hormone takes to leave the cell.",pts:1,rubric:["Rough ER → transport vesicle → Golgi (modified/packaged) → secretory vesicle → fuses with the plasma membrane → released by exocytosis"]}
 ]},
{id:"U2S44",t:"u2mem",short:true,title:"Word pair: three membrane proteins",
 stem:"The plasma membrane contains receptor proteins, channel proteins, and glycoproteins.",
 parts:[
  {verb:"Describe",text:"the function of each.",pts:2,rubric:["Receptor: binds a specific signal molecule; channel: provides a passage for specific ions/molecules to cross (two correct = 1 pt)","Glycoprotein: a protein with a carbohydrate chain used for cell recognition/identification (1 pt; all three needed for full credit)"]}
 ]}
);

// ================= UNIT 2 — APPLY-LEVEL (lvl:2) MCQs + DAILY FRQs · set A (u2cells, u2endo, u2cyto, u2size, u2mem, u2perm) =================
MCQ.push(
// ---------- u2cells ----------
{id:"hA_cells_1",t:"u2cells",lvl:2,q:"A student examined four unknown cells with an electron microscope and recorded the data below. Which conclusion is best supported by the data?",
 fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Cell</th><th style="border:1px solid var(--line-2);padding:4px 10px">Nucleus with a membrane</th><th style="border:1px solid var(--line-2);padding:4px 10px">Ribosomes</th><th style="border:1px solid var(--line-2);padding:4px 10px">Cell wall</th><th style="border:1px solid var(--line-2);padding:4px 10px">Mitochondria</th><th style="border:1px solid var(--line-2);padding:4px 10px">Chloroplasts</th><th style="border:1px solid var(--line-2);padding:4px 10px">Diameter</th></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">W</td><td style="border:1px solid var(--line-2);padding:4px 10px">No</td><td style="border:1px solid var(--line-2);padding:4px 10px">Yes</td><td style="border:1px solid var(--line-2);padding:4px 10px">Yes</td><td style="border:1px solid var(--line-2);padding:4px 10px">No</td><td style="border:1px solid var(--line-2);padding:4px 10px">No</td><td style="border:1px solid var(--line-2);padding:4px 10px">2 µm</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">X</td><td style="border:1px solid var(--line-2);padding:4px 10px">Yes</td><td style="border:1px solid var(--line-2);padding:4px 10px">Yes</td><td style="border:1px solid var(--line-2);padding:4px 10px">Yes</td><td style="border:1px solid var(--line-2);padding:4px 10px">Yes</td><td style="border:1px solid var(--line-2);padding:4px 10px">No</td><td style="border:1px solid var(--line-2);padding:4px 10px">15 µm</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Y</td><td style="border:1px solid var(--line-2);padding:4px 10px">Yes</td><td style="border:1px solid var(--line-2);padding:4px 10px">Yes</td><td style="border:1px solid var(--line-2);padding:4px 10px">No</td><td style="border:1px solid var(--line-2);padding:4px 10px">Yes</td><td style="border:1px solid var(--line-2);padding:4px 10px">No</td><td style="border:1px solid var(--line-2);padding:4px 10px">20 µm</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Z</td><td style="border:1px solid var(--line-2);padding:4px 10px">Yes</td><td style="border:1px solid var(--line-2);padding:4px 10px">Yes</td><td style="border:1px solid var(--line-2);padding:4px 10px">Yes</td><td style="border:1px solid var(--line-2);padding:4px 10px">Yes</td><td style="border:1px solid var(--line-2);padding:4px 10px">Yes</td><td style="border:1px solid var(--line-2);padding:4px 10px">60 µm</td></tr></table>`,
 opts:["Cell W is eukaryotic, because it has a cell wall like plant and fungal cells do.","Cell Y must be a prokaryote, because it is the only cell without a cell wall.","Cell X is eukaryotic, but it may not be a plant cell; a wall without chloroplasts also fits a fungal cell.","Cell W cannot make proteins, because it has no membrane-bound organelles such as rough ER or a Golgi apparatus to build them."],a:2,
 why:"Cell X has a membrane-bound nucleus and mitochondria, so it is eukaryotic. But plants, fungi and prokaryotes all have cell walls, and not every plant cell has chloroplasts (root cells don't), so a wall alone can't identify X as a plant cell.",
 wrong:{0:"Prokaryotes have cell walls too. W has no membrane-bound nucleus and no mitochondria, so it is a prokaryote.",1:"Animal cells have no cell wall. Y has a membrane-bound nucleus and mitochondria, so it is eukaryotic.",3:"W has ribosomes, and ribosomes make proteins without any membrane around them. Every cell makes proteins."}},
{id:"hA_cells_2",t:"u2cells",lvl:2,q:"A student using a light microscope (resolution about 0.2 µm) says she can see individual ribosomes lined up on the rough ER of a pancreatic cell. The table lists typical sizes of some cell structures. Which is the best evaluation of her claim?",
 fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Structure</th><th style="border:1px solid var(--line-2);padding:4px 10px">Typical size</th></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Nucleus</td><td style="border:1px solid var(--line-2);padding:4px 10px">6 µm across</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Bacterium</td><td style="border:1px solid var(--line-2);padding:4px 10px">2 µm long</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Mitochondrion</td><td style="border:1px solid var(--line-2);padding:4px 10px">1 µm wide</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Ribosome</td><td style="border:1px solid var(--line-2);padding:4px 10px">25 nm (0.025 µm) across</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Plasma membrane</td><td style="border:1px solid var(--line-2);padding:4px 10px">8 nm (0.008 µm) thick</td></tr></table>`,
 opts:["Supported, because pancreatic cells make so much protein that their ribosomes are packed together and easy to see.","Not supported: a ribosome (0.025 µm) is 8 times smaller than the 0.2 µm a light microscope can resolve; she would need a TEM.","Not supported, because ribosomes are found only inside the nucleus, where the nuclear envelope blocks the light.","Supported, because ribosomes are larger than the plasma membrane is thick, and the edge of a cell is visible with a light microscope."],a:1,
 why:"0.2 µm ÷ 0.025 µm = 8, so a single ribosome is far below the light microscope's resolution. Seeing ribosomes on the ER needs a TEM (about 2 nm resolution), which images internal structures.",
 wrong:{0:"How many ribosomes there are doesn't change how small each one is. Individual objects smaller than 0.2 µm can't be resolved.",2:"Ribosomes work in the cytosol and on the rough ER, not only in the nucleus (the nucleolus helps assemble them).",3:"You see a cell's edge because of contrast, not because the 0.008 µm membrane thickness is resolved. At 0.025 µm, ribosomes are still well below 0.2 µm."}},
{id:"hA_cells_3",t:"u2cells",lvl:2,q:"Researchers break open spinach leaf cells and separate the cell-free extract into fractions. When lit, fraction 1 absorbs light and produces sugar and O₂. When given sugar, fraction 2 uses O₂ and produces ATP. A student concludes: ‘Because leaf cells make their own sugar in fraction 1, they do not need the organelle in fraction 2.’ Which is the best evaluation?",
 opts:["Correct, because the chloroplasts in fraction 1 make enough ATP to power every activity in the leaf cell.","Correct, because plant cells have chloroplasts instead of mitochondria, so fraction 2 must be contamination from another cell type.","Incorrect, because fraction 2 is where the leaf makes sugar at night, when fraction 1 has no light.","Incorrect, because mitochondria (fraction 2) must still convert the chloroplasts' sugar into ATP for the cell's work."],a:3,
 why:"Fraction 1 is chloroplasts (light → sugar) and fraction 2 is mitochondria (sugar → ATP). Plants have both: making sugar isn't the same as having usable ATP, so plant cells still need mitochondria.",
 wrong:{0:"Chloroplasts do make some ATP, but they use it to build sugar. The rest of the cell's work runs on ATP from mitochondria.",1:"Plants have both chloroplasts and mitochondria. That is a classic trap.",2:"Mitochondria break sugar down to make ATP. They don't make sugar."}},
{id:"hA_cells_4",t:"u2cells",lvl:2,q:"An antibiotic binds to bacterial ribosomes, which differ in structure from the ribosomes in a human cell's cytosol, and stops bacterial protein synthesis. At high doses, human cells with high energy demand, such as heart muscle, start producing less ATP. Which is the best explanation?",
 opts:["Mitochondria have their own ribosomes that resemble bacterial ones, so the drug also blocks protein synthesis inside mitochondria.","The drug binds the ribosomes on the rough ER, which stops production of every protein the heart cell makes, including its enzymes.","The drug damages the nucleolus, so heart cells can no longer make the rRNA that mitochondria need.","Ribosomes produce ATP directly, so any drug that binds ribosomes lowers ATP production, especially in cells that need a lot of it."],a:0,
 why:"Ribosomes are also found inside mitochondria (and chloroplasts), and they resemble bacterial ribosomes. The drug slows mitochondrial protein synthesis, so cells that depend most on mitochondrial ATP are hit first.",
 wrong:{1:"Ribosomes on the rough ER are the same as free cytosolic ribosomes, which the stem says the drug doesn't bind. If all protein synthesis stopped, every cell would be affected, not mainly high-energy ones.",2:"The drug binds ribosomes. Nothing suggests it acts on the nucleolus.",3:"Ribosomes make proteins, not ATP."}},
{id:"hA_cells_5",t:"u2cells",lvl:2,q:"As mammalian red blood cells mature, they lose their nucleus, mitochondria and ribosomes and fill up with hemoglobin, an oxygen-carrying protein. A mature red blood cell survives about 120 days. Which prediction is best supported?",
 opts:["Mature red blood cells will divide to replace themselves as they wear out, because cells come only from preexisting cells.","Mature red blood cells will keep replacing damaged hemoglobin as it wears out, because hemoglobin is a protein and cells make proteins.","Mature red blood cells can't replace damaged proteins or divide, so new ones must come from dividing cells that have a nucleus.","Mature red blood cells will make ATP by aerobic respiration, because they carry large amounts of O₂."],a:2,
 why:"With no DNA and no ribosomes, a mature red blood cell can't make new proteins or divide, so it wears out. Cell theory still holds: new red blood cells come from the division of preexisting cells that have a nucleus (stem cells in the bone marrow).",
 wrong:{0:"Cell theory is right, but the dividing cell has to have DNA. A cell with no nucleus can't divide.",1:"Making protein needs ribosomes and DNA instructions, and mature red blood cells have lost both.",3:"Carrying O₂ isn't the same as using it. Aerobic respiration happens in mitochondria, which these cells no longer have."}},
{id:"hA_cells_6",t:"u2cells",lvl:2,q:"In a strain of mice, a mutation reduces the folding of the inner mitochondrial membrane in sperm cells. The number of mitochondria and the structure of the flagellum are normal. Which prediction, with its reasoning, is best?",
 opts:["Sperm will swim faster, because fewer folds leave more space inside each mitochondrion for reactions.","Sperm will swim more slowly, because less inner-membrane surface means less ATP is made to power the flagellum.","Swimming speed won't change, because the flagellum is built from microtubules and doesn't need ATP.","Sperm will swim more slowly, because the folds of the inner membrane are what assemble the flagellum's microtubules."],a:1,
 why:"The folded inner membrane increases surface area for the reactions of aerobic respiration. Fewer folds mean less ATP, and dynein in the flagellum needs ATP to change shape and bend it.",
 wrong:{0:"This reverses structure → function. The reactions take place ON the inner membrane, so less membrane means less ATP production.",2:"Microtubules are the frame, but dynein motors use ATP to slide them. No ATP, no beating.",3:"Microtubules are made of tubulin protein by the cell. Mitochondrial membranes don't build them."}},

// ---------- u2endo ----------
{id:"hA_endo_1",t:"u2endo",lvl:2,q:"Researchers gave normal and mutant yeast cells radioactive amino acids for 5 minutes, then tracked the labeled proteins. The table shows the percent of radioactivity in each location. Which defect best explains the mutant's data?",
 fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Cells</th><th style="border:1px solid var(--line-2);padding:4px 10px">Time</th><th style="border:1px solid var(--line-2);padding:4px 10px">Rough ER</th><th style="border:1px solid var(--line-2);padding:4px 10px">Golgi</th><th style="border:1px solid var(--line-2);padding:4px 10px">Secretory vesicles</th><th style="border:1px solid var(--line-2);padding:4px 10px">Outside cell</th></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Normal</td><td style="border:1px solid var(--line-2);padding:4px 10px">5 min</td><td style="border:1px solid var(--line-2);padding:4px 10px">85</td><td style="border:1px solid var(--line-2);padding:4px 10px">10</td><td style="border:1px solid var(--line-2);padding:4px 10px">5</td><td style="border:1px solid var(--line-2);padding:4px 10px">0</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Normal</td><td style="border:1px solid var(--line-2);padding:4px 10px">30 min</td><td style="border:1px solid var(--line-2);padding:4px 10px">20</td><td style="border:1px solid var(--line-2);padding:4px 10px">60</td><td style="border:1px solid var(--line-2);padding:4px 10px">15</td><td style="border:1px solid var(--line-2);padding:4px 10px">5</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Normal</td><td style="border:1px solid var(--line-2);padding:4px 10px">90 min</td><td style="border:1px solid var(--line-2);padding:4px 10px">5</td><td style="border:1px solid var(--line-2);padding:4px 10px">15</td><td style="border:1px solid var(--line-2);padding:4px 10px">30</td><td style="border:1px solid var(--line-2);padding:4px 10px">50</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Mutant</td><td style="border:1px solid var(--line-2);padding:4px 10px">5 min</td><td style="border:1px solid var(--line-2);padding:4px 10px">85</td><td style="border:1px solid var(--line-2);padding:4px 10px">10</td><td style="border:1px solid var(--line-2);padding:4px 10px">5</td><td style="border:1px solid var(--line-2);padding:4px 10px">0</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Mutant</td><td style="border:1px solid var(--line-2);padding:4px 10px">30 min</td><td style="border:1px solid var(--line-2);padding:4px 10px">80</td><td style="border:1px solid var(--line-2);padding:4px 10px">12</td><td style="border:1px solid var(--line-2);padding:4px 10px">6</td><td style="border:1px solid var(--line-2);padding:4px 10px">2</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Mutant</td><td style="border:1px solid var(--line-2);padding:4px 10px">90 min</td><td style="border:1px solid var(--line-2);padding:4px 10px">78</td><td style="border:1px solid var(--line-2);padding:4px 10px">12</td><td style="border:1px solid var(--line-2);padding:4px 10px">6</td><td style="border:1px solid var(--line-2);padding:4px 10px">4</td></tr></table>`,
 opts:["The mutant's ribosomes can't join amino acids, so the protein is never made.","The mutant's secretory vesicles can't fuse with the plasma membrane.","The mutant's Golgi can't add carbohydrates, so the protein is sent to the wrong place.","The mutant can't form or send transport vesicles from the rough ER to the Golgi."],a:3,
 why:"At 5 minutes both strains have 85% of the label in the rough ER, so the protein is made and enters the ER normally. After that the mutant's label stays stuck there (78% at 90 min vs 5% in normal cells) and never builds up in the Golgi (12% vs 60%). The failing step is ER → Golgi.",
 wrong:{0:"The mutant has 85% of the label in the rough ER at 5 min, so the protein IS made.",1:"A fusion defect would make the label pile up in secretory vesicles. The mutant's vesicles hold only 6%.",2:"The label would still reach the Golgi before being mis-sorted. The mutant's Golgi never holds more than 12%."}},
{id:"hA_endo_2",t:"u2endo",lvl:2,q:"The enzymes of glycolysis are made on free ribosomes and stay in the cytosol. Researchers attach a short ‘address tag’ of amino acids to one of these enzymes. In other proteins, this tag makes the ribosome that is building the protein attach to the rough ER. Predict what happens to the tagged enzyme.",
 opts:["It is still made on free ribosomes and stays in the cytosol, because free and bound ribosomes are structurally different kinds of ribosomes.","It is made on ribosomes bound to the rough ER and sent through the Golgi into vesicles, so less of it stays in the cytosol.","It is made by the rough ER membrane itself instead of by a ribosome, then sent through a nuclear pore into the nucleus.","It is made in the smooth ER, because adding the tag turns the enzyme into a lipid."],a:1,
 why:"Free and bound ribosomes are identical. The protein's own tag decides where the ribosome works. With the ER tag, the enzyme enters the endomembrane route (RER → vesicle → Golgi → vesicle) and ends up out of the cytosol, likely secreted.",
 wrong:{0:"Free and bound ribosomes are the same. Only the protein being made determines whether the ribosome attaches to the ER.",2:"Ribosomes make proteins, not the ER membrane itself. Nothing points toward the nucleus.",3:"A tag made of amino acids doesn't turn a protein into a lipid, and the smooth ER has no ribosomes."}},
{id:"hA_endo_3",t:"u2endo",lvl:2,q:"The table shows the percent of cell volume taken up by four organelles in three cell types from the same animal. One cell secretes digestive enzymes, one makes the steroid hormone testosterone, and one is a flight-muscle cell. Which match is best supported?",
 fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Cell</th><th style="border:1px solid var(--line-2);padding:4px 10px">Rough ER</th><th style="border:1px solid var(--line-2);padding:4px 10px">Smooth ER</th><th style="border:1px solid var(--line-2);padding:4px 10px">Golgi</th><th style="border:1px solid var(--line-2);padding:4px 10px">Mitochondria</th></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">1</td><td style="border:1px solid var(--line-2);padding:4px 10px">22%</td><td style="border:1px solid var(--line-2);padding:4px 10px">1%</td><td style="border:1px solid var(--line-2);padding:4px 10px">7%</td><td style="border:1px solid var(--line-2);padding:4px 10px">8%</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">2</td><td style="border:1px solid var(--line-2);padding:4px 10px">2%</td><td style="border:1px solid var(--line-2);padding:4px 10px">16%</td><td style="border:1px solid var(--line-2);padding:4px 10px">3%</td><td style="border:1px solid var(--line-2);padding:4px 10px">12%</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">3</td><td style="border:1px solid var(--line-2);padding:4px 10px">3%</td><td style="border:1px solid var(--line-2);padding:4px 10px">2%</td><td style="border:1px solid var(--line-2);padding:4px 10px">1%</td><td style="border:1px solid var(--line-2);padding:4px 10px">35%</td></tr></table>`,
 opts:["Cell 1: digestive enzymes · Cell 2: testosterone · Cell 3: flight muscle","Cell 1: testosterone · Cell 2: digestive enzymes · Cell 3: flight muscle","Cell 1: digestive enzymes · Cell 2: flight muscle · Cell 3: testosterone","Cell 1: flight muscle · Cell 2: testosterone · Cell 3: digestive enzymes"],a:0,
 why:"Digestive enzymes are proteins made for export, so they need rough ER (22%) and Golgi (7%). Testosterone is a steroid (a lipid), made in the smooth ER (16%). Flight muscle uses huge amounts of ATP, so it has the most mitochondria (35%).",
 wrong:{1:"This swaps proteins and steroids. Steroids are made in the smooth ER, not the rough ER.",2:"Cell 2 stands out for smooth ER (16%), not mitochondria. Cell 3 has only 2% smooth ER, too little for a steroid-making cell.",3:"A cell that secretes protein needs lots of rough ER and Golgi. Cell 3 has only 3% and 1%. Its mitochondria (35%) point to muscle."}},
{id:"hA_endo_4",t:"u2endo",lvl:2,q:"Lysosomal hydrolytic enzymes work best at about pH 5, the pH inside lysosomes. The cytosol is about pH 7.2. When a few lysosomes break open in a healthy cell, the cell is usually not damaged. Which is the best explanation?",
 opts:["The cytosol contains no polymers such as proteins or nucleic acids, so the released enzymes have nothing to hydrolyze.","The released enzymes are immediately removed from the cell by exocytosis.","The released enzymes work poorly at the cytosol's pH, so keeping them in the acidic lysosome protects the rest of the cell.","At the cytosol's higher pH, hydrolytic enzymes switch to building polymers by dehydration synthesis instead of breaking them."],a:2,
 why:"Enzyme activity depends on shape, and shape depends on pH (Unit 1). At pH 7.2 these enzymes barely work. Compartmentalizing them inside the acidic lysosome lets the cell digest things there without digesting itself.",
 wrong:{0:"The cytosol is full of proteins, RNA and other polymers that hydrolytic enzymes could break down.",1:"Exocytosis releases the contents of vesicles. Loose enzymes in the cytosol aren't packaged into vesicles.",3:"A change in pH lowers an enzyme's activity. It doesn't make the enzyme catalyze the opposite reaction."}},
{id:"hA_endo_5",t:"u2endo",lvl:2,q:"Rats were given a sedative drug daily for 5 days. Their liver cells' smooth ER grew to about 2.5 times its normal amount, and the drug was cleared from the blood faster each day. Five days after the drug was stopped, the smooth ER was back to normal size, and membrane fragments were seen inside lysosomes. Which explanation fits ALL of these observations?",
 opts:["The drug was converted into extra rough ER, which then made the enzymes that removed the drug from the rats' blood faster.","The liver cells built extra smooth ER to detoxify the drug; after the drug was gone, lysosomes digested the extra membranes.","The smooth ER grew in order to produce more of the drug, and lysosomes then digested the drug molecules.","Lysosomes produced the extra smooth ER during treatment, which is why smooth ER membrane fragments were later found inside them."],a:1,
 why:"The smooth ER detoxifies drugs in liver cells, so more demand led to more smooth ER and faster clearance. Lysosomes recycle old or unneeded organelles, which explains the membrane fragments inside them once the demand ended.",
 wrong:{0:"A drug isn't turned into an organelle, and the change was in the SMOOTH ER, the organelle that detoxifies.",2:"The drug was given to the rats, not made by them, and it was cleared faster. The smooth ER was breaking it down.",3:"Lysosomes digest and recycle. They don't build organelles. The fragments were inside because they were being broken down."}},
{id:"hA_endo_6",t:"u2endo",lvl:2,q:"A pancreatic cell is stimulated and, within minutes, releases the contents of 1,000 secretory vesicles by exocytosis. Researchers measure the area of its plasma membrane right afterward. Which prediction is best supported?",
 opts:["The area decreases, because membrane is used up when the secretory vesicles pinch off from the plasma membrane.","The area stays the same, because the vesicle membranes dissolve into the fluid outside the cell.","The area increases only if the Golgi also sends loose phospholipids straight to the plasma membrane.","The area increases, because each vesicle's membrane fuses with and becomes part of the plasma membrane."],a:3,
 why:"In exocytosis the vesicle's bilayer merges with the plasma membrane, so membrane is added to the cell surface. Endocytosis later pinches membrane back off, which keeps the cell's size steady.",
 wrong:{0:"This describes endocytosis, where vesicles pinch off FROM the plasma membrane. Exocytosis adds membrane.",1:"Phospholipid bilayers don't dissolve in water. The vesicle membrane joins the plasma membrane.",2:"The vesicle membranes themselves are the added membrane. No separate delivery of phospholipids is needed."}},

// ---------- u2cyto ----------
{id:"hA_cyto_1",t:"u2cyto",lvl:2,q:"Researchers treated cells with Drug P or Drug Q and observed three activities (+ = normal, − = blocked). Which conclusion is best supported?",
 fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Activity</th><th style="border:1px solid var(--line-2);padding:4px 10px">Control</th><th style="border:1px solid var(--line-2);padding:4px 10px">Drug P</th><th style="border:1px solid var(--line-2);padding:4px 10px">Drug Q</th></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Vesicles carried along a nerve cell's axon</td><td style="border:1px solid var(--line-2);padding:4px 10px">+</td><td style="border:1px solid var(--line-2);padding:4px 10px">−</td><td style="border:1px solid var(--line-2);padding:4px 10px">+</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Chromosomes pulled apart during cell division</td><td style="border:1px solid var(--line-2);padding:4px 10px">+</td><td style="border:1px solid var(--line-2);padding:4px 10px">−</td><td style="border:1px solid var(--line-2);padding:4px 10px">+</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Cell crawls by changing its shape</td><td style="border:1px solid var(--line-2);padding:4px 10px">+</td><td style="border:1px solid var(--line-2);padding:4px 10px">+</td><td style="border:1px solid var(--line-2);padding:4px 10px">−</td></tr></table>`,
 opts:["Drug P disrupts microtubules, and Drug Q disrupts microfilaments.","Drug P disrupts intermediate filaments, and Drug Q disrupts microtubules.","Drug P disrupts microfilaments, and Drug Q disrupts microtubules.","Both drugs disrupt microtubules, but Drug Q is weaker than Drug P."],a:0,
 why:"Microtubules are the tracks for vesicles and the fibers that move chromosomes, which are exactly the two things Drug P blocks. Microfilaments (actin) change the cell's shape, which is the one thing Drug Q blocks.",
 wrong:{1:"Intermediate filaments anchor organelles and resist tension. They aren't tracks for vesicles. And Drug Q leaves both microtubule jobs normal.",2:"This is reversed. Shape change is the microfilament job, and Drug Q is the one that blocks it.",3:"A weaker microtubule drug would slow vesicles or chromosomes. Drug Q leaves both normal and blocks something different."}},
{id:"hA_cyto_2",t:"u2cyto",lvl:2,q:"In a test tube, researchers mixed microtubules, kinesin and vesicles, then added either ATP or a look-alike molecule that binds kinesin the way ATP does but cannot be broken down (hydrolyzed). Which is the best explanation for the look-alike result?",
 fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Added</th><th style="border:1px solid var(--line-2);padding:4px 10px">Vesicles attached to microtubules?</th><th style="border:1px solid var(--line-2);padding:4px 10px">Vesicle speed (µm/s)</th></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.01 mM ATP</td><td style="border:1px solid var(--line-2);padding:4px 10px">Yes</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.2</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.1 mM ATP</td><td style="border:1px solid var(--line-2);padding:4px 10px">Yes</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.6</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">1 mM ATP</td><td style="border:1px solid var(--line-2);padding:4px 10px">Yes</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.8</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">10 mM ATP</td><td style="border:1px solid var(--line-2);padding:4px 10px">Yes</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.8</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">1 mM look-alike</td><td style="border:1px solid var(--line-2);padding:4px 10px">Yes (stuck)</td><td style="border:1px solid var(--line-2);padding:4px 10px">0</td></tr></table>`,
 opts:["The look-alike stopped microtubules from assembling from tubulin, so there were no tracks for the vesicles to move along.","The look-alike denatured the kinesin, so kinesin could no longer bind to either the vesicles or the microtubule tracks.","Kinesin must break down ATP to change shape for each step; the look-alike lets it grip the microtubule but not step.","Vesicles really move by diffusion, and the look-alike made the solution too thick for diffusion."],a:2,
 why:"Kinesin walks by repeated conformational (shape) changes powered by breaking down ATP. With the look-alike, kinesin still holds the vesicle on the microtubule but can't complete the step, so the speed is 0.",
 wrong:{0:"The vesicles were still attached to microtubules, so the tracks were there.",1:"A denatured kinesin couldn't hold vesicles on the microtubules, but they stayed attached.",3:"Speed rose with ATP and then leveled off, which is the pattern of an ATP-powered motor, not diffusion. Nothing in the data points to thickness."}},
{id:"hA_cyto_3",t:"u2cyto",lvl:2,q:"Cilia with their membranes removed still bend when ATP is added. Researchers treat a batch of these cilia with an enzyme that cuts ONLY the nexin links between neighboring microtubule doublets, then add ATP. Which result is predicted?",
 opts:["The cilia bend normally, because dynein, not nexin, is the motor protein.","The cilia do nothing at all, because without nexin, dynein can no longer bind or use ATP.","The microtubules fall apart into separate tubulin subunits.","The doublets slide past each other until the cilium slides apart, but it never bends."],a:3,
 why:"Dynein changes shape to slide neighboring doublets past each other. Nexin cross-links the doublets, so the sliding is forced into a bend. Cut the nexin and dynein's sliding just pushes the doublets apart.",
 wrong:{0:"Dynein does provide the force, but it produces SLIDING. Bending only happens because nexin holds the doublets together.",1:"Dynein still has ATP and can still change shape. Nexin isn't part of the motor.",2:"The enzyme cuts only nexin. The microtubules themselves stay intact."}},
{id:"hA_cyto_4",t:"u2cyto",lvl:2,q:"A fluorescent dye small enough to pass through ion channels is injected into one cell of each of two animal tissues. In tissue X, the dye spreads into neighboring cells within seconds. In tissue Y, the dye stays in the injected cell, and dye added to the fluid on one side of the tissue sheet can't leak between the cells to the other side. Which junctions best explain these results?",
 opts:["X: tight junctions · Y: gap junctions","X: gap junctions · Y: tight junctions","X: desmosomes · Y: tight junctions","X: plasmodesmata · Y: desmosomes"],a:1,
 why:"Gap junctions are openings between the cytoplasms of neighboring cells, so small molecules pass directly from cell to cell (X). Tight junctions seal neighboring cells into a leak-proof sheet, so nothing slips between them (Y).",
 wrong:{0:"This is reversed. Tight junctions seal and gap junctions connect.",2:"Desmosomes attach cells to each other but don't open channels between their cytoplasms, so they can't explain X.",3:"Plasmodesmata are found in plant cells, and these are animal tissues. Desmosomes don't seal the spaces between cells."}},
{id:"hA_cyto_5",t:"u2cyto",lvl:2,q:"In skin disorder 1, cells stay attached to one another, but individual cells rupture when the skin is rubbed. In skin disorder 2, each cell stays intact, but layers of cells pull apart from each other and form blisters. Which pair of defective structures is most consistent with these observations?",
 opts:["1: intermediate filaments · 2: desmosomes","1: desmosomes · 2: intermediate filaments","1: microtubules · 2: gap junctions","1: tight junctions · 2: microfilaments"],a:0,
 why:"Intermediate filaments are rope-like fibers that resist tension INSIDE each cell, so without them cells tear under friction. Desmosomes attach neighboring cells to each other, so without them intact cells separate.",
 wrong:{1:"This is reversed. Cells that separate point to desmosomes, and cells that tear point to intermediate filaments.",2:"Microtubules are tracks and move chromosomes. Gap junctions pass small molecules between cells and don't hold cells together.",3:"Losing tight junctions causes leaks between cells, not ruptured cells. Microfilaments change cell shape."}},
{id:"hA_cyto_6",t:"u2cyto",lvl:2,q:"A drug binds ONLY to tubulin and easily crosses cell walls and membranes. It stops the swimming of Paramecium, a protist that swims using cilia, but has no effect on E. coli, a bacterium that swims using a flagellum. Which is the best explanation?",
 opts:["E. coli's flagellum is much longer than Paramecium's cilia, so the drug can't reach enough of it to stop the bacterium.","E. coli's ribosomes break down the drug inside the bacterium before it can reach and bind to the flagellum's proteins.","Cilia are built of microtubules (9 + 2); a bacterial flagellum is a structurally different structure with no microtubules.","Cilia use ATP to move but bacterial flagella need no energy, so blocking tubulin affects only cilia."],a:2,
 why:"Eukaryotic cilia and flagella are made of microtubules (tubulin) in a 9 + 2 pattern. The teacher's slide notes that bacterial flagella are structurally different, so a drug that targets tubulin has nothing to bind in E. coli.",
 wrong:{0:"The stem says the drug reaches cells easily. Length isn't the issue, since the drug's target, tubulin, isn't in the bacterial flagellum.",1:"Ribosomes make proteins. They don't break down drugs.",3:"Bacterial flagella do need energy to rotate. The real difference is what they're built from."}},

// ---------- u2size ----------
{id:"hA_size_1",t:"u2size",lvl:2,q:"Students made three agar blocks with the SAME volume (8 cm³) but different shapes, soaked them in acid for 10 minutes, and measured the percent of each block's volume the acid reached. Which conclusion is best supported?",
 fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Block</th><th style="border:1px solid var(--line-2);padding:4px 10px">Dimensions (cm)</th><th style="border:1px solid var(--line-2);padding:4px 10px">% of volume reached by acid</th></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">A</td><td style="border:1px solid var(--line-2);padding:4px 10px">2 × 2 × 2</td><td style="border:1px solid var(--line-2);padding:4px 10px">48.8</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">B</td><td style="border:1px solid var(--line-2);padding:4px 10px">1 × 1 × 8</td><td style="border:1px solid var(--line-2);padding:4px 10px">65.8</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">C</td><td style="border:1px solid var(--line-2);padding:4px 10px">4 × 4 × 0.5</td><td style="border:1px solid var(--line-2);padding:4px 10px">83.8</td></tr></table>`,
 opts:["Volume alone controls diffusion, so the three results should be equal; the differences must be measurement error.","Block C, with the highest SA:V (5:1), was reached the most (83.8%), so shape alone can increase exchange.","Block B was reached most efficiently because it is the longest block, giving the acid the farthest distance to travel.","Block A was reached the least because it has the largest surface area of the three blocks."],a:1,
 why:"SA: A = 24 cm², B = 2(1+8+8) = 34 cm², C = 2(16+2+2) = 40 cm². With V = 8 cm³, SA:V is 3:1, 4.25:1 and 5:1, and the percent reached rises in the same order (48.8 → 65.8 → 83.8%). Shape changes SA:V even at a fixed volume, which is why flat or thin cells exchange materials well.",
 wrong:{0:"The differences are large and follow SA:V exactly. Volume was held constant on purpose to show that.",2:"Block C, not B, was reached most. What matters is how far the center is from a surface, not the block's length.",3:"Block A has the SMALLEST surface area (24 cm²) and the lowest SA:V."}},
{id:"hA_size_2",t:"u2size",lvl:2,q:"A frog egg divides repeatedly WITHOUT growing. Treat each cell as a sphere. Which statement is best supported by the data?",
 fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Stage</th><th style="border:1px solid var(--line-2);padding:4px 10px">Number of cells</th><th style="border:1px solid var(--line-2);padding:4px 10px">Radius of each cell (mm)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Total volume (mm³)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Total surface area (mm²)</th></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Fertilized egg</td><td style="border:1px solid var(--line-2);padding:4px 10px">1</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.50</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.524</td><td style="border:1px solid var(--line-2);padding:4px 10px">3.14</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">After 3 divisions</td><td style="border:1px solid var(--line-2);padding:4px 10px">8</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.25</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.524</td><td style="border:1px solid var(--line-2);padding:4px 10px">6.28</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">After 6 divisions</td><td style="border:1px solid var(--line-2);padding:4px 10px">64</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.125</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.524</td><td style="border:1px solid var(--line-2);padding:4px 10px">12.57</td></tr></table>`,
 opts:["Dividing increases the embryo's total volume, which gives the embryo more room for organelles such as mitochondria and ER.","Each single division doubles the embryo's total SA:V ratio, since each division doubles the number of cells.","Dividing lowers the total surface area of the embryo but raises its SA:V ratio, because the cells get smaller.","Volume stays constant while total surface area rises, so SA:V rises from 6:1 to 24:1 and exchange is more efficient."],a:3,
 why:"Volume stays at 0.524 mm³ while surface area goes from 3.14 to 12.57 mm². SA:V = 3.14/0.524 = 6:1, then 12:1, then 24:1. Division is one way cells restore a high SA:V.",
 wrong:{0:"The total volume column is constant at 0.524 mm³.",1:"It took THREE divisions (1 → 8 cells) to double SA:V from 6:1 to 12:1. One division raises it by only about 1.26 times.",2:"Total surface area goes UP (3.14 → 12.57 mm²)."}},
{id:"hA_size_3",t:"u2size",lvl:2,q:"The Arctic fox has short, rounded ears and a compact body. The fennec fox of the Sahara has very large, thin ears. Both keep about the same body temperature, and heat is exchanged with the environment across the body's surface. Which explanation is best supported by SA:V reasoning?",
 opts:["The fennec fox's large, thin ears raise its SA:V, increasing heat loss; the Arctic fox's compact shape lowers SA:V, conserving heat.","The Arctic fox's small, rounded ears raise its SA:V, so its body can absorb more heat from the cold air around it.","The fennec fox's large ears lower its SA:V, which traps heat inside its body in the desert.","Ear size affects only hearing, because the SA:V principle applies to single cells and not to whole organisms."],a:0,
 why:"Exchange of anything, including heat, happens across surfaces. Thin, large ears add a lot of surface with little volume (high SA:V), which gets rid of heat. A compact body with small ears has a low SA:V, which keeps heat in.",
 wrong:{1:"Small, rounded parts LOWER SA:V, and cold air can't give the fox heat. Heat moves from the warm body to the cold air.",2:"This is reversed. Large, thin ears RAISE SA:V and release heat.",3:"The SA:V principle works at every level, from microvilli to lungs to whole bodies."}},
{id:"hA_size_4",t:"u2size",lvl:2,q:"In a Decocube-style lab, a student soaked a 3 cm cube and a 1 cm cube in vinegar for 10 minutes. The student claims, ‘Vinegar molecules moved through the agar faster (penetrated deeper per minute) in the 1 cm cube.’ Which is the best evaluation of the claim?",
 fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Cube side</th><th style="border:1px solid var(--line-2);padding:4px 10px">Depth vinegar penetrated (mm)</th><th style="border:1px solid var(--line-2);padding:4px 10px">% of volume reached</th></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">3 cm</td><td style="border:1px solid var(--line-2);padding:4px 10px">4</td><td style="border:1px solid var(--line-2);padding:4px 10px">60.6</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">1 cm</td><td style="border:1px solid var(--line-2);padding:4px 10px">4</td><td style="border:1px solid var(--line-2);padding:4px 10px">99.2</td></tr></table>`,
 opts:["Supported, because 99.2% of the 1 cm cube's volume was reached in 10 minutes but only 60.6% of the 3 cm cube's volume.","Supported, because vinegar molecules move faster inside a cube that has less volume.","Not supported: both cubes were penetrated at the same rate (4 mm in 10 min); the smaller cube's higher SA:V let that depth reach more of it.","Not supported, because the 3 cm cube has the lower SA:V ratio, so the vinegar penetrated deeper into the 3 cm cube."],a:2,
 why:"Diffusion distance (4 mm in 10 min) was the same in both, so the rate of diffusion didn't change. The small cube wins on the FRACTION of its volume reached, because its higher SA:V puts more of its volume close to a surface. That's exactly why small cells exchange materials efficiently.",
 wrong:{0:"Percent of volume reached isn't how fast the vinegar moved through the agar; the depth column (4 mm in both) shows the same speed.",1:"Molecules move at the same speed at the same temperature. The depth column shows it.",3:"Both cubes were penetrated to the same depth, 4 mm."}},
{id:"hA_size_5",t:"u2size",lvl:2,type:"num",q:"An intestinal lining cell is roughly a rectangular box 10 µm × 10 µm × 25 µm (ignore the microvilli). What is its SA:V ratio? Write it as SA:1. (Rectangular solid: SA = 2lh + 2lw + 2wh, V = lwh)",
 answer:0.48, tol:0.01, unit:"", ratio:true,
 why:"SA = 2(10×25) + 2(10×10) + 2(10×25) = 500 + 200 + 500 = 1,200 µm². V = 10×10×25 = 2,500 µm³. SA:V = 1,200 ÷ 2,500 = 0.48, written 0.48:1. That low ratio is why these cells fold their surface membrane into microvilli.",
 hint:"There are three pairs of faces: two 10×25, two 10×10, and two more 10×25."},
{id:"hA_size_6",t:"u2size",lvl:2,type:"num",q:"A fungal hypha is modeled as a cylinder with radius 2 µm and length 100 µm. Calculate its SA:V ratio, including both ends. Write it as SA:1, rounded to two decimal places. (Cylinder: SA = 2πrh + 2πr², V = πr²h)",
 answer:1.02, tol:0.02, unit:"", ratio:true,
 why:"SA = 2π(2)(100) + 2π(2²) = 400π + 8π = 408π ≈ 1,281.77 µm². V = π(2²)(100) = 400π ≈ 1,256.64 µm³. SA:V = 1.02:1. For comparison, a sphere with the same volume would have r ≈ 6.69 µm and SA:V = 3/r ≈ 0.45:1, so the long, thin shape more than doubles the ratio.",
 hint:"Leave π in until the end: SA = 408π and V = 400π, so the πs cancel."},

// ---------- u2mem ----------
{id:"hA_mem_1",t:"u2mem",lvl:2,q:"Researchers fused a mouse cell with a human cell. Right after fusion, mouse membrane proteins (tagged green) were on one half of the hybrid cell and human membrane proteins (tagged red) were on the other half. The table shows the percent of hybrid cells with completely mixed colors after 40 minutes. Which conclusion is best supported?",
 fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Condition</th><th style="border:1px solid var(--line-2);padding:4px 10px">% of hybrid cells with mixed colors</th></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">37 °C</td><td style="border:1px solid var(--line-2);padding:4px 10px">90</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">37 °C + drug that blocks protein synthesis</td><td style="border:1px solid var(--line-2);padding:4px 10px">88</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">37 °C + drug that blocks ATP production</td><td style="border:1px solid var(--line-2);padding:4px 10px">89</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">15 °C</td><td style="border:1px solid var(--line-2);padding:4px 10px">8</td></tr></table>`,
 opts:["Colors mixed because ribosomes made new membrane proteins and inserted them evenly across the whole membrane.","Membrane proteins drift sideways in a fluid bilayer without new protein or ATP, and drift more slowly when the membrane is cold.","Membrane proteins are moved across the membrane by ATP-powered motor proteins walking along microtubules.","Membrane proteins are fixed in place; the colors mixed because phospholipids flipped from the inner layer to the outer layer of the bilayer."],a:1,
 why:"Blocking protein synthesis (88%) or ATP (89%) barely changed mixing, so the existing proteins moved on their own. Cold (15 °C) nearly stopped mixing (8%) because the membrane was less fluid. That's the ‘fluid’ in fluid mosaic.",
 wrong:{0:"Blocking protein synthesis left mixing at 88%, so new proteins aren't the cause.",2:"Blocking ATP left mixing at 89%. The movement is passive drifting, not motor-driven.",3:"If the proteins were fixed, the colors couldn't mix, and flipping phospholipids wouldn't move tagged proteins. Temperature affecting the result points to fluidity."}},
{id:"hA_mem_2",t:"u2mem",lvl:2,q:"A liposome is a tiny sphere made of a phospholipid bilayer surrounding a watery core. A company wants to carry the two drugs below in the same liposome. Where will each drug most likely be carried?",
 fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Drug</th><th style="border:1px solid var(--line-2);padding:4px 10px">Properties</th></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">A</td><td style="border:1px solid var(--line-2);padding:4px 10px">Charged; dissolves easily in water</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">B</td><td style="border:1px solid var(--line-2);padding:4px 10px">Nonpolar; dissolves in oil but not in water</td></tr></table>`,
 opts:["Both drugs in the watery core, because the phospholipid bilayer is a barrier that no drug molecule can enter.","Drug A among the fatty-acid tails in the middle of the bilayer; Drug B in the watery core of the liposome.","Drug A in the watery core; Drug B among the hydrophobic fatty-acid tails in the middle of the bilayer.","Drug A bonded to the phospholipid heads on the outer surface; Drug B in the watery core."],a:2,
 why:"Like dissolves like. The charged drug stays in water (the core), and the nonpolar drug dissolves into the nonpolar tail region of the bilayer, the same way steroids and O₂ move through the membrane interior.",
 wrong:{0:"The hydrophobic middle of the bilayer readily holds nonpolar molecules. That's why nonpolar substances cross membranes.",1:"This is reversed. A charged drug is repelled by the nonpolar tails, and a nonpolar drug is repelled by water.",3:"Drug B is nonpolar and won't dissolve in the watery core."}},
{id:"hA_mem_3",t:"u2mem",lvl:2,q:"Researchers make two sets of artificial membranes: one with no cholesterol and one with 30% cholesterol. They measure fluidity (how fast phospholipids move sideways) at 5 °C and at 40 °C. Which results would support the model of cholesterol taught in class?",
 opts:["Cholesterol membrane: LESS fluid than the cholesterol-free membrane at both 5 °C and 40 °C.","Cholesterol membrane: MORE fluid at 5 °C and LESS fluid at 40 °C than the cholesterol-free membrane.","Cholesterol membrane: LESS fluid at 5 °C and MORE fluid at 40 °C than the cholesterol-free membrane.","Both membranes have the same fluidity at each temperature, because cholesterol is a steroid, not a phospholipid."],a:1,
 why:"Cholesterol acts as a fluidity buffer. In the cold it acts as a spacer that keeps the tails from packing tightly (more fluid). In the warm it interacts with several tails and holds them back (less fluid). The result is a smaller swing in fluidity.",
 wrong:{0:"That describes only the warm-temperature effect. In the cold, cholesterol increases fluidity.",2:"This is exactly reversed from the model.",3:"Cholesterol sits between the phospholipids and does change how they move, even though it isn't a phospholipid itself."}},
{id:"hA_mem_4",t:"u2mem",lvl:2,q:"A plasma membrane protein has a stretch of 20 amino acids with nonpolar R-groups (such as leucine and valine), with regions rich in charged R-groups (lysine, glutamate) on either side. A mutation replaces several nonpolar amino acids in the 20-amino-acid stretch with aspartate, which has a negatively charged R-group. Which prediction is best supported?",
 opts:["The protein will embed more firmly in the membrane, because charged R-groups form strong bonds with the fatty-acid tails.","The protein will be unaffected, because only the charged regions at its two ends determine where in the cell it sits.","The 20-amino-acid stretch will now face the watery fluid, and the charged side regions will move into the bilayer instead.","The mutated stretch will be unstable among the hydrophobic tails, so the protein may no longer stay embedded in the membrane."],a:3,
 why:"The nonpolar stretch is what spans the bilayer, since nonpolar R-groups interact with the nonpolar tails. Adding charged R-groups makes that stretch hydrophilic, so it's no longer compatible with the membrane's interior.",
 wrong:{0:"Charged groups are repelled by the nonpolar tails. Like attracts like.",1:"The middle stretch is the part inside the bilayer, so its R-groups matter most for staying embedded.",2:"The side regions are charged, so they are even less compatible with the hydrophobic interior."}},
{id:"hA_mem_5",t:"u2mem",lvl:2,q:"Cells from a red sponge species and a yellow sponge species are separated and mixed together. Over several hours they reassemble into separate red clumps and yellow clumps. If the cells are first treated with an enzyme that removes the carbohydrate chains from surface proteins (leaving the proteins and bilayer intact), the cells clump randomly. Which conclusion is best supported?",
 opts:["The carbohydrate chains of surface glycoproteins let cells recognize other cells of their own species.","The phospholipid bilayer lets cells recognize one another, because the enzyme left the bilayer unchanged.","Cells sort by color because pigment molecules cross the membrane and attract cells of the same color.","Removing the carbohydrates made the membranes more fluid, so the cells stuck together randomly."],a:0,
 why:"The only thing the enzyme removed was the carbohydrate chains, and that alone destroyed sorting. Glycoproteins (and glycolipids) act as the cell's ID tags for cell recognition.",
 wrong:{1:"The bilayer was intact, yet recognition failed. So the bilayer can't be what does the recognizing.",2:"Nothing in the experiment tests pigments, and the enzyme didn't touch them.",3:"The experiment didn't measure fluidity, and carbohydrate chains on the surface aren't what controls fluidity (that's cholesterol and the fatty-acid tails)."}},
{id:"hA_mem_6",t:"u2mem",lvl:2,q:"Researchers isolate red blood cell membranes. Washing them in a concentrated salt solution, which disrupts ionic bonds and hydrogen bonds, releases Protein X but not Protein Y. Protein Y comes off only when a detergent that breaks apart the phospholipid bilayer is added. Which conclusion is best supported?",
 opts:["Protein X is peripheral, held to the surface by ionic or hydrogen bonds; Protein Y is integral, with hydrophobic regions embedded among the tails.","Protein X is an integral protein and Protein Y is a peripheral protein, since Y is held on more strongly.","Both are integral proteins, but Protein X is smaller, so it washes out of the bilayer more easily.","Protein Y is a glycolipid rather than a protein, because it is released only when the bilayer breaks apart."],a:0,
 why:"A protein that salt can remove was held only by ionic or hydrogen bonds at the surface, so it's peripheral. A protein that comes out only when the bilayer is dissolved has nonpolar regions buried among the tails, so it's integral.",
 wrong:{1:"This is reversed. Surface attachment by weak bonds is what makes a protein peripheral.",2:"An integral protein's hydrophobic region keeps it embedded no matter its size. Salt doesn't disrupt hydrophobic interactions.",3:"The stem calls Y a protein. A glycolipid is a carbohydrate attached to a lipid."}},

// ---------- u2perm ----------
{id:"hA_perm_1",t:"u2perm",lvl:2,q:"A researcher measured how fast five compounds cross an artificial phospholipid bilayer that has no proteins. Which conclusion is best supported by the data?",
 fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Compound</th><th style="border:1px solid var(--line-2);padding:4px 10px">Mass (g/mol)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Polarity / charge</th><th style="border:1px solid var(--line-2);padding:4px 10px">Relative crossing rate</th></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">P</td><td style="border:1px solid var(--line-2);padding:4px 10px">32</td><td style="border:1px solid var(--line-2);padding:4px 10px">Nonpolar</td><td style="border:1px solid var(--line-2);padding:4px 10px">100</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Q</td><td style="border:1px solid var(--line-2);padding:4px 10px">300</td><td style="border:1px solid var(--line-2);padding:4px 10px">Nonpolar</td><td style="border:1px solid var(--line-2);padding:4px 10px">20</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">R</td><td style="border:1px solid var(--line-2);padding:4px 10px">60</td><td style="border:1px solid var(--line-2);padding:4px 10px">Polar, uncharged</td><td style="border:1px solid var(--line-2);padding:4px 10px">1</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">T</td><td style="border:1px solid var(--line-2);padding:4px 10px">180</td><td style="border:1px solid var(--line-2);padding:4px 10px">Polar, uncharged</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.01</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">S</td><td style="border:1px solid var(--line-2);padding:4px 10px">23</td><td style="border:1px solid var(--line-2);padding:4px 10px">Charged (+1 ion)</td><td style="border:1px solid var(--line-2);padding:4px 10px">≈ 0</td></tr></table>`,
 opts:["Smaller molecules always cross faster than larger molecules, because they fit more easily between the phospholipids.","Only nonpolar molecules can cross a bilayer; polar molecules and ions can't cross it at all without a protein.","Charge and polarity matter more than size: Q (300) crosses 20× faster than R (60), and ion S (23) barely crosses.","Molecular mass has no effect on crossing rate for any type of molecule."],a:2,
 why:"The big nonpolar Q beats the small polar R 20 to 1, and the smallest compound, the ion S, is the slowest. Charge beats size. Size still matters among similar molecules: R crosses 100 times faster than the larger polar T.",
 wrong:{0:"S is the smallest compound and crosses the slowest, and Q (300) is faster than R (60).",1:"R and T are polar and still cross, just slowly.",3:"Among the polar uncharged compounds, R (60 g/mol) crosses 100 times faster than T (180 g/mol), and P beats Q among the nonpolar ones."}},
{id:"hA_perm_2",t:"u2perm",lvl:2,q:"Kidney collecting-duct cells store many aquaporins in the membranes of vesicles inside the cell. Researchers measured aquaporins in the plasma membrane and the membrane's water permeability, with and without a hormone. Which conclusion is best supported?",
 fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Condition</th><th style="border:1px solid var(--line-2);padding:4px 10px">Aquaporins in plasma membrane (relative)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Water permeability (relative)</th></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">No hormone</td><td style="border:1px solid var(--line-2);padding:4px 10px">1</td><td style="border:1px solid var(--line-2);padding:4px 10px">1</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Hormone added</td><td style="border:1px solid var(--line-2);padding:4px 10px">8</td><td style="border:1px solid var(--line-2);padding:4px 10px">9</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Hormone + drug that blocks vesicle fusion with the plasma membrane</td><td style="border:1px solid var(--line-2);padding:4px 10px">1</td><td style="border:1px solid var(--line-2);padding:4px 10px">1.1</td></tr></table>`,
 opts:["The hormone makes the phospholipid bilayer more fluid, so water molecules slip between the phospholipids much faster.","The hormone makes vesicles fuse with the plasma membrane, adding aquaporins, which raises water permeability.","The hormone supplies ATP, so aquaporins can pump water against its concentration gradient.","Water crosses only through aquaporins, so cells without the hormone were completely impermeable to water."],a:1,
 why:"Permeability rose (1 → 9) only when aquaporins in the plasma membrane rose (1 → 8), and blocking vesicle fusion canceled both. The cell controls its water permeability by inserting water channels, which ties in the endomembrane system.",
 wrong:{0:"If the hormone acted on the bilayer, blocking vesicle fusion wouldn't cancel the effect. It did (1.1).",2:"Aquaporins are channels. Water moves through them passively, down its gradient, with no ATP.",3:"Cells without the hormone still had a permeability of 1, not 0. Some water crosses between the phospholipids and through the few aquaporins present."}},
{id:"hA_perm_3",t:"u2perm",lvl:2,q:"Plant cells are treated with cellulase, an enzyme that digests the cell wall but leaves the plasma membrane intact. These wall-less cells are called protoplasts. Normal plant cells and protoplasts are both placed in distilled water. Which prediction is best supported?",
 opts:["Neither will burst, because plant plasma membranes don't let water cross.","Neither will burst, because the large central vacuole can take in and store all of the extra water that enters.","Normal cells will burst but protoplasts won't, because the cell wall traps the incoming water inside the normal cells.","Protoplasts will swell and burst, but normal cells will only become firm (turgid), because the wall resists expansion."],a:3,
 why:"Water enters both kinds of cells. In normal cells, the rigid carbohydrate wall pushes back, so the cell becomes turgid but doesn't burst. Without the wall, the protoplast keeps swelling until the membrane breaks, just like an animal cell. That's the wall's structural role.",
 wrong:{0:"Water crosses plant membranes (especially through aquaporins). That's how normal cells become turgid.",1:"The vacuole does take in water, but nothing stops a wall-less cell from continuing to expand.",2:"This is reversed. The wall is what PREVENTS bursting."}},
{id:"hA_perm_4",t:"u2perm",lvl:2,q:"Penicillin kills growing bacteria by blocking the synthesis of peptidoglycan, the carbohydrate-based polymer in bacterial cell walls. A patient asks for penicillin to treat a fungal skin infection. Which is the best evaluation?",
 opts:["It won't work: fungal walls are made of chitin, not peptidoglycan, so the drug's target is missing.","It will work, because all cell walls are made of complex carbohydrates and have a similar structural function.","It won't work, because fungi have no cell wall, only a plasma membrane.","It will work, but it will also destroy the cell walls of the patient's own skin cells."],a:0,
 why:"All cell walls are complex carbohydrates with a similar job, but the specific molecule differs: cellulose in plants, chitin in fungi, peptidoglycan in bacteria. A drug that blocks peptidoglycan synthesis has no target in a fungus.",
 wrong:{1:"The general statement is true, but drugs act on specific molecules. Chitin isn't peptidoglycan.",2:"Fungi do have cell walls, made of chitin.",3:"Human (animal) cells have no cell wall at all."}},
{id:"hA_perm_5",t:"u2perm",lvl:2,q:"A candidate drug has to enter its target cells by simple diffusion, because those cells have no transport protein for it. The current version has two charged groups and three –OH groups, and it barely gets in. Which change is most likely to increase how fast it crosses the plasma membrane?",
 opts:["Attach a glucose molecule to the drug, because cells need glucose and constantly take it in from the blood.","Add a phosphate group so the drug dissolves better in water and reaches the membrane in higher amounts.","Replace the charged and –OH groups with nonpolar groups such as –CH₃, keeping the size about the same.","Add another charged group to strengthen the drug's attraction to the polar heads of the membrane."],a:2,
 why:"To pass the hydrophobic interior of the bilayer on its own, a molecule should be small and nonpolar. Removing the charges and polar –OH groups makes the drug more like a steroid or O₂.",
 wrong:{0:"Glucose makes the drug bigger and more polar. Glucose itself needs a protein to cross, and these cells have none for the drug.",1:"A phosphate group is charged. Better water solubility means WORSE crossing of the oily interior.",3:"Charged groups are repelled by the nonpolar fatty-acid tails, so this would slow crossing even more."}},
{id:"hA_perm_6",t:"u2perm",lvl:2,q:"Two DNA stains glow only when bound to DNA. Stain 1 is a large molecule with two positive charges. Stain 2 is small and nonpolar. Both are added to (A) healthy living cells and (B) cells treated with a detergent that breaks up phospholipid bilayers. Which result is predicted?",
 opts:["Healthy cells: both stains glow. Detergent-treated cells: only Stain 2 glows.","Healthy cells: only Stain 1 glows. Detergent-treated cells: both stains glow.","Healthy cells: neither stain glows. Detergent-treated cells: only Stain 1 glows.","Healthy cells: only Stain 2 glows. Detergent-treated cells: both stains glow."],a:3,
 why:"Stain 2 is small and nonpolar, so it diffuses through intact membranes and reaches the DNA. Stain 1 is charged and can't cross an intact bilayer, but once detergent destroys the membranes it reaches the DNA too. Labs use this to tell living cells from dead ones.",
 wrong:{0:"A charged stain can't cross the intact membranes of healthy cells, and detergent only makes it easier for stains to get in.",1:"This is reversed. The charged stain is the one kept out.",2:"Stain 2 is small and nonpolar, so it gets into healthy cells."}}
);

FRQ.push(
// ---------- u2cells ----------
{id:"D2_cells_1",t:"u2cells",daily:true,title:"Two microbes from a hot spring",
 stem:"Researchers collected two single-celled organisms from a hot spring and examined thin slices of each with a transmission electron microscope (TEM). Their observations are shown in the table.",
 fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Feature</th><th style="border:1px solid var(--line-2);padding:4px 10px">Organism A</th><th style="border:1px solid var(--line-2);padding:4px 10px">Organism B</th></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Location of DNA</td><td style="border:1px solid var(--line-2);padding:4px 10px">In a region of the cytoplasm with no membrane around it</td><td style="border:1px solid var(--line-2);padding:4px 10px">Inside a double membrane with pores</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Ribosomes</td><td style="border:1px solid var(--line-2);padding:4px 10px">Present</td><td style="border:1px solid var(--line-2);padding:4px 10px">Present</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Cell wall</td><td style="border:1px solid var(--line-2);padding:4px 10px">Present</td><td style="border:1px solid var(--line-2);padding:4px 10px">Present</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Membrane-bound organelles</td><td style="border:1px solid var(--line-2);padding:4px 10px">None observed</td><td style="border:1px solid var(--line-2);padding:4px 10px">Mitochondria, chloroplasts, large central vacuole</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Length</td><td style="border:1px solid var(--line-2);padding:4px 10px">1.5 µm</td><td style="border:1px solid var(--line-2);padding:4px 10px">40 µm</td></tr></table>`,
 parts:[
  {verb:"Justify",text:"Identify which organism is a prokaryote, and justify your answer using TWO pieces of evidence from the table.",pts:2,rubric:["Names Organism A as the prokaryote AND cites that A's DNA is not enclosed by a membrane (nucleoid region), while B's DNA is inside a nucleus (double membrane with pores)","A second, different piece of evidence: A has no membrane-bound organelles (B has mitochondria, chloroplasts and a vacuole), OR A is much smaller (1.5 µm vs 40 µm). No credit for ribosomes or cell wall: both organisms have them"]},
  {verb:"Explain",text:"why a TEM, rather than a light microscope, was needed to determine whether Organism A's DNA is surrounded by a membrane.",pts:1,rubric:["A membrane is only a few nanometers thick, far smaller than a light microscope can resolve (about 0.2 µm); a TEM resolves about 2 nm and shows INTERNAL structures (an SEM shows only surfaces)"]},
  {verb:"Predict",text:"whether Organism B can make ATP in complete darkness. Justify your prediction.",pts:2,rubric:["Prediction in a complete sentence: Organism B WILL still make ATP in the dark (a prediction of what will happen, not what won't)","Justification names the mitochondria: they convert the chemical energy in sugar (made earlier by the chloroplasts or taken in) into ATP through aerobic respiration, which doesn't need light. ‘Powerhouse’ or any analogy earns 0"]}
 ]},
{id:"D2_cells_2",t:"u2cells",daily:true,title:"Taking a liver cell apart",
 stem:"To study liver cells, researchers broke them open and used a centrifuge to separate the cell-free extract into five fractions. They tested each fraction; the results are in the table.",
 fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Fraction</th><th style="border:1px solid var(--line-2);padding:4px 10px">What the researchers found</th></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">1</td><td style="border:1px solid var(--line-2);padding:4px 10px">Most of the cell's DNA, surrounded by a double membrane with pores</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">2</td><td style="border:1px solid var(--line-2);padding:4px 10px">Used O₂ and produced ATP when sugar-derived fuel was added</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">3</td><td style="border:1px solid var(--line-2);padding:4px 10px">Enzymes that break down proteins, nucleic acids and lipids; most active at pH 5</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">4</td><td style="border:1px solid var(--line-2);padding:4px 10px">Tubular membranes with no ribosomes; enzymes that make lipids and break down a sedative drug</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">5</td><td style="border:1px solid var(--line-2);padding:4px 10px">Membranes studded with ribosomes; newly made proteins inside the membranes</td></tr></table>`,
 parts:[
  {verb:"Identify",text:"the organelle found in fraction 2 and the organelle found in fraction 4.",pts:1,rubric:["Fraction 2: mitochondria AND fraction 4: smooth ER (both needed)"]},
  {verb:"Explain",text:"how the structure of the organelle in fraction 2 supports its function. Describe the actual structure (no analogies).",pts:2,rubric:["Structure: an outer membrane surrounding a highly folded inner membrane (a double membrane)","Function link: the folds increase the inner membrane's surface area, so it holds more of the proteins for aerobic respiration and more ATP can be made from the energy in sugar. ‘Powerhouse’ earns 0"]},
  {verb:"Explain",text:"When the fraction 3 enzymes were tested at pH 7.2 (the pH of the cytosol), they had only 5% of their activity at pH 5. Explain how this result shows an advantage of compartmentalization.",pts:1,rubric:["The hydrolytic enzymes work in the acidic lysosome but are nearly inactive (5%) at the cytosol's pH, so keeping them inside a membrane-bound compartment lets the cell digest materials there WITHOUT hydrolyzing its own proteins, nucleic acids and lipids if an enzyme leaks out (must cite 5% or pH 7.2 vs 5)"]},
  {verb:"Describe",text:"The newly made proteins in fraction 5 included the enzymes found in fraction 3. Describe the path these enzymes take from fraction 5 to the organelle in fraction 3.",pts:1,rubric:["Rough ER → transport vesicle → Golgi apparatus (modifies and sorts the enzymes) → vesicle that buds from the Golgi becomes or fuses with a lysosome. ER must come before the Golgi"]}
 ]},

// ---------- u2endo ----------
{id:"D2_endo_1",t:"u2endo",daily:true,title:"Three tagged versions of one protein",
 stem:"Researchers attached a green fluorescent tag to three versions of the same secreted protein and made each one in cultured human cells. Version A is unchanged. Version B is missing the short ‘address tag’ of amino acids at its beginning that directs the ribosome making it to the rough ER. Version C has an extra tag that the Golgi reads as ‘send to lysosome.’ Two hours later, the researchers recorded where the green fluorescence was.",
 fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Version</th><th style="border:1px solid var(--line-2);padding:4px 10px">Where green fluorescence was found after 2 hours</th></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">A (unchanged)</td><td style="border:1px solid var(--line-2);padding:4px 10px">Rough ER, Golgi, secretory vesicles, and the fluid outside the cell</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">B (ER address tag removed)</td><td style="border:1px solid var(--line-2);padding:4px 10px">Cytosol only</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">C (lysosome tag added)</td><td style="border:1px solid var(--line-2);padding:4px 10px">Rough ER, Golgi, lysosomes</td></tr></table>`,
 parts:[
  {verb:"Identify",text:"where Version B was synthesized, and support your answer with the data.",pts:1,rubric:["On free ribosomes in the cytosol; the data show Version B only in the cytosol, never in the rough ER or Golgi, so it never entered the endomembrane system"]},
  {verb:"Describe",text:"the path Version A took from its synthesis to the outside of the cell.",pts:2,rubric:["Made by ribosomes bound to the rough ER, enters the rough ER, then is carried in a transport vesicle to the Golgi","The Golgi modifies/packages it into a secretory vesicle, which fuses with the plasma membrane and releases it outside the cell (exocytosis). ER-before-Golgi order required"]},
  {verb:"Explain",text:"why fluorescence appears in the Golgi for both Version A and Version C, even though they end up in different places.",pts:1,rubric:["The Golgi modifies and SORTS proteins by destination (reads the tags); both proteins must pass through it to be packaged into the right vesicles, and lysosomes themselves originate from the Golgi"]},
  {verb:"Predict",text:"where Version A's fluorescence would be found in cells treated with a drug that prevents secretory vesicles from fusing with the plasma membrane. Justify your prediction.",pts:1,rubric:["Fluorescence will build up in secretory vesicles (near the plasma membrane, plus the ER and Golgi), with none outside the cell, because the protein can leave only when the vesicle fuses with the membrane in exocytosis"]}
 ]},
{id:"D2_endo_2",t:"u2endo",daily:true,title:"Enzymes sent to the wrong address",
 stem:"Cells grown from a patient with an inherited disease were compared with cells from a healthy person. Hydrolytic enzyme activity is shown as a percent of the activity inside healthy lysosomes.",
 fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Measurement</th><th style="border:1px solid var(--line-2);padding:4px 10px">Healthy cells</th><th style="border:1px solid var(--line-2);padding:4px 10px">Patient's cells</th></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Hydrolytic enzyme activity inside lysosomes (%)</td><td style="border:1px solid var(--line-2);padding:4px 10px">100</td><td style="border:1px solid var(--line-2);padding:4px 10px">6</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Hydrolytic enzyme activity in the fluid outside the cells (%)</td><td style="border:1px solid var(--line-2);padding:4px 10px">4</td><td style="border:1px solid var(--line-2);padding:4px 10px">90</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Average lysosome diameter (µm)</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.5</td><td style="border:1px solid var(--line-2);padding:4px 10px">2.0</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Undigested material inside lysosomes</td><td style="border:1px solid var(--line-2);padding:4px 10px">Very little</td><td style="border:1px solid var(--line-2);padding:4px 10px">Large amounts</td></tr></table>`,
 parts:[
  {verb:"Describe",text:"the normal function of lysosomes, including the type of reaction their enzymes catalyze.",pts:1,rubric:["Lysosomes digest nutrients/macromolecules and recycle old or damaged organelles, using hydrolytic enzymes that catalyze HYDROLYSIS (breaking bonds between monomers by adding water). Both the function and ‘hydrolysis’ needed"]},
  {verb:"Explain",text:"why the patient's lysosomes are enlarged. Use data in your answer.",pts:2,rubric:["Cites numbers: enzyme activity inside the patient's lysosomes is 6% vs 100%, AND diameter is 2.0 µm vs 0.5 µm","Reasoning: without hydrolytic enzymes, the macromolecules and old organelles delivered to lysosomes can't be broken down, so undigested material builds up and the lysosomes swell"]},
  {verb:"Justify",text:"the researchers' claim that the patient's cells make normal amounts of the enzymes but the Golgi sends them to the wrong destination.",pts:1,rubric:["Enzyme activity OUTSIDE the patient's cells is 90% (vs 4%), so the enzymes are made and active; they were packaged into secretory vesicles and released by exocytosis instead of being sorted to lysosomes. If synthesis had failed, activity would be low everywhere"]},
  {verb:"Predict",text:"how the patient's cells will handle damaged mitochondria.",pts:1,rubric:["Damaged mitochondria will build up inside the cell (or inside lysosomes) because the lysosomes lack the hydrolytic enzymes needed to break them down and recycle their parts. Must be a prediction of what WILL happen"]}
 ]},

// ---------- u2cyto ----------
{id:"D2_cyto_1",t:"u2cyto",daily:true,title:"How a fish turns pale",
 stem:"Fish skin pigment cells contain thousands of dark pigment granules. When the hormone adrenaline is added, the granules move to the center of each cell in about 30 seconds and the skin looks pale. Researchers treated pigment cells in four ways and then added adrenaline.",
 fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Treatment before adrenaline</th><th style="border:1px solid var(--line-2);padding:4px 10px">Granules move to the center?</th><th style="border:1px solid var(--line-2);padding:4px 10px">Time to reach center (s)</th></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">None (control)</td><td style="border:1px solid var(--line-2);padding:4px 10px">Yes</td><td style="border:1px solid var(--line-2);padding:4px 10px">30</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Drug that takes apart microtubules</td><td style="border:1px solid var(--line-2);padding:4px 10px">No</td><td style="border:1px solid var(--line-2);padding:4px 10px">—</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Drug that takes apart microfilaments</td><td style="border:1px solid var(--line-2);padding:4px 10px">Yes</td><td style="border:1px solid var(--line-2);padding:4px 10px">32</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Cells depleted of ATP</td><td style="border:1px solid var(--line-2);padding:4px 10px">No</td><td style="border:1px solid var(--line-2);padding:4px 10px">—</td></tr></table>`,
 parts:[
  {verb:"Identify",text:"the cytoskeletal fiber that serves as the track for granule movement. Support your answer with data.",pts:1,rubric:["Microtubules; when microtubules were taken apart the granules did not move, but when microfilaments were taken apart they still moved (32 s vs 30 s)"]},
  {verb:"Explain",text:"how a motor protein such as dynein or kinesin moves a granule along its track.",pts:2,rubric:["The motor protein binds the granule (cargo) and the microtubule and changes its shape (conformational change)","The shape change is powered by ATP; repeated shape changes make the protein ‘walk’ step by step along the microtubule, pulling the granule. Must describe the mechanism, not an analogy"]},
  {verb:"Justify",text:"the claim that granule movement requires energy, using the data.",pts:1,rubric:["ATP-depleted cells did not move their granules, while control cells did in 30 s; the only difference was the absence of ATP, so movement requires energy from ATP"]},
  {verb:"Evaluate",text:"A student claims that microfilaments are needed for the granules to move to the center. Evaluate this claim using the data.",pts:1,rubric:["The claim is NOT supported: with microfilaments taken apart, the granules still moved to the center in 32 s, almost the same as the control's 30 s (must cite data)"]}
 ]},
{id:"D2_cyto_2",t:"u2cyto",daily:true,title:"Cilia that can't beat",
 stem:"A patient has had repeated lung infections since childhood and is infertile. Electron micrographs of cross sections of the patient's airway cilia show the normal 9 + 2 arrangement of microtubules, but the dynein arms are missing. Researchers measured the data below.",
 fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Measurement</th><th style="border:1px solid var(--line-2);padding:4px 10px">Healthy person</th><th style="border:1px solid var(--line-2);padding:4px 10px">Patient</th></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Rate at which airway cilia move mucus (mm/min)</td><td style="border:1px solid var(--line-2);padding:4px 10px">12.0</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.6</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Sperm swimming speed (µm/s)</td><td style="border:1px solid var(--line-2);padding:4px 10px">50</td><td style="border:1px solid var(--line-2);padding:4px 10px">0</td></tr></table>`,
 parts:[
  {verb:"Calculate",text:"the percent decrease in the rate of mucus movement in the patient compared with the healthy person. Show your work.",pts:1,rubric:["(12.0 − 0.6) ÷ 12.0 × 100 = 95%; setup shown, answer as a decimal/percent in a complete sentence"]},
  {verb:"Explain",text:"how the loss of dynein prevents the cilia from bending, even though the microtubules are normal.",pts:2,rubric:["Normally dynein changes shape (conformational change, using ATP) to slide neighboring microtubule doublets past each other","Nexin cross-links the doublets so the sliding becomes bending; without dynein there is no sliding force, so the cilium can't bend even with a normal 9 + 2 structure"]},
  {verb:"Explain",text:"why the same defect causes BOTH lung infections and infertility.",pts:1,rubric:["Airway cilia and sperm flagella share the same 9 + 2 microtubule structure driven by dynein; without dynein, cilia can't sweep mucus and trapped bacteria out of the airways (0.6 vs 12.0 mm/min) and the sperm flagellum can't move (0 vs 50 µm/s)"]}
 ]},

// ---------- u2size ----------
{id:"D2_size_1",t:"u2size",daily:true,title:"Small algae in a hungry ocean",
 stem:"Marine algae are single spherical cells that absorb phosphate, a nutrient, across their plasma membranes. Researchers measured phosphate uptake per cubic micrometer of cell volume for algae of four sizes. (Sphere: SA = 4πr², V = 4/3 πr³)",
 fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Cell diameter (µm)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Phosphate uptake per µm³ of cell per hour (relative units)</th></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">2</td><td style="border:1px solid var(--line-2);padding:4px 10px">100</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">5</td><td style="border:1px solid var(--line-2);padding:4px 10px">40</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">10</td><td style="border:1px solid var(--line-2);padding:4px 10px">20</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">20</td><td style="border:1px solid var(--line-2);padding:4px 10px">10</td></tr></table>`,
 parts:[
  {verb:"Calculate",text:"the SA:V ratio of the 2 µm cell and of the 20 µm cell. Show your setup and write each ratio as SA:1.",pts:2,rubric:["2 µm cell: r = 1 µm; SA = 4π(1)² = 12.57 µm², V = 4/3 π(1)³ = 4.19 µm³; SA:V = 3:1 (must use the radius, not the diameter)","20 µm cell: r = 10 µm; SA = 1,256.64 µm², V = 4,188.79 µm³; SA:V = 0.3:1 (decimals, written as SA:1)"]},
  {verb:"Describe",text:"the relationship between cell size and phosphate uptake per unit volume. Cite data.",pts:1,rubric:["As cell diameter increases (2 → 20 µm), SA:V decreases (3:1 → 0.3:1) and uptake per µm³ decreases (100 → 10); both drop tenfold, at least two data points cited"]},
  {verb:"Explain",text:"why larger cells take in less phosphate per unit of volume.",pts:1,rubric:["Phosphate can enter only across the plasma membrane (the surface); as a cell grows, volume increases faster than surface area, so there is less membrane per unit of volume and each µm³ of cytoplasm gets less phosphate"]},
  {verb:"Predict",text:"which size of algae will be most common in ocean water with very little phosphate. Justify your prediction.",pts:1,rubric:["The smallest (2 µm) cells will be most common, because their high SA:V (3:1) lets them absorb scarce phosphate fast enough to meet the needs of their volume"]}
 ]},
{id:"D2_size_2",t:"u2size",daily:true,title:"When the villi flatten",
 stem:"In celiac disease, the immune system damages the villi of the small intestine. Researchers compared biopsy samples from healthy people and from people with untreated celiac disease.",
 fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Measurement (per cm of intestine)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Healthy</th><th style="border:1px solid var(--line-2);padding:4px 10px">Untreated celiac disease</th></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Average villus height (mm)</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.50</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.10</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Absorptive surface area (cm²)</td><td style="border:1px solid var(--line-2);padding:4px 10px">60</td><td style="border:1px solid var(--line-2);padding:4px 10px">12</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Volume of intestinal lining tissue (cm³)</td><td style="border:1px solid var(--line-2);padding:4px 10px">1.2</td><td style="border:1px solid var(--line-2);padding:4px 10px">1.1</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Dietary fat absorbed (%)</td><td style="border:1px solid var(--line-2);padding:4px 10px">95</td><td style="border:1px solid var(--line-2);padding:4px 10px">70</td></tr></table>`,
 parts:[
  {verb:"Calculate",text:"the percent decrease in absorptive surface area in people with untreated celiac disease.",pts:1,rubric:["(60 − 12) ÷ 60 × 100 = 80% decrease; setup shown"]},
  {verb:"Calculate",text:"the ratio of absorptive surface area to tissue volume for each group. Write each as SA:1.",pts:1,rubric:["Healthy: 60 ÷ 1.2 = 50:1; celiac: 12 ÷ 1.1 = 10.9:1 (both needed, decimals, written as SA:1)"]},
  {verb:"Explain",text:"how the change in villus structure leads to the change in fat absorption. Cite data.",pts:2,rubric:["Flattened villi (0.10 vs 0.50 mm) greatly reduce the absorptive surface area (12 vs 60 cm²) while the tissue volume stays about the same (1.1 vs 1.2 cm³), so SA:V falls","Nutrients are absorbed across the plasma membranes of the cells covering the villi, so less membrane surface means fewer nutrients can be absorbed per unit time: fat absorption drops from 95% to 70%"]},
  {verb:"Predict",text:"what will happen to fat absorption if a gluten-free diet lets the villi grow back. Justify your prediction.",pts:1,rubric:["Fat absorption will increase back toward 95%, because regrown villi restore the absorptive surface area (higher SA:V) across which nutrients are absorbed"]}
 ]},

// ---------- u2mem ----------
{id:"D2_mem_1",t:"u2mem",daily:true,title:"Fish membranes and cold water",
 stem:"Researchers analyzed the fatty-acid tails of the plasma membrane phospholipids of three fish species from different habitats. When membrane fluidity was measured at each species' own habitat temperature, it was nearly the same for all three.",
 fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Species</th><th style="border:1px solid var(--line-2);padding:4px 10px">Habitat water temperature (°C)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Phospholipid tails that are unsaturated (%)</th></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">A (polar)</td><td style="border:1px solid var(--line-2);padding:4px 10px">−1</td><td style="border:1px solid var(--line-2);padding:4px 10px">65</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">B (temperate)</td><td style="border:1px solid var(--line-2);padding:4px 10px">12</td><td style="border:1px solid var(--line-2);padding:4px 10px">50</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">C (tropical)</td><td style="border:1px solid var(--line-2);padding:4px 10px">28</td><td style="border:1px solid var(--line-2);padding:4px 10px">35</td></tr></table>`,
 parts:[
  {verb:"Describe",text:"the relationship between habitat temperature and the percent of unsaturated tails. Cite data.",pts:1,rubric:["As habitat temperature decreases (28 → −1 °C), the percent of unsaturated tails increases (35% → 65%); at least two data points cited"]},
  {verb:"Explain",text:"how a higher percent of unsaturated tails keeps a membrane fluid at cold temperatures.",pts:2,rubric:["Unsaturated tails have C=C double bonds that put kinks (bends) in the tails","The kinks keep the tails from packing tightly together, so the membrane stays fluid instead of becoming rigid in the cold (saturated tails are straight and pack tightly)"]},
  {verb:"Predict",text:"what will happen to the fluidity of species C's membranes if the fish is moved to −1 °C water. Justify your prediction.",pts:1,rubric:["The membranes will become less fluid (more rigid), because with only 35% unsaturated tails, most tails are straight and will pack tightly at low temperature"]},
  {verb:"Evaluate",text:"A student claims that species A's membranes are more fluid than species C's membranes under all conditions. Evaluate this claim using the information provided.",pts:1,rubric:["The claim is not supported: at each species' own habitat temperature, fluidity was nearly the SAME; A's membrane would be more fluid only if both were measured at the same temperature"]}
 ]},
{id:"D2_mem_2",t:"u2mem",daily:true,title:"Mapping a receptor protein",
 stem:"Protein R is a 400-amino-acid receptor in the plasma membrane of liver cells, and it carries carbohydrate chains. Researchers added a protein-digesting enzyme (protease) that cannot cross membranes under two conditions.",
 fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Condition</th><th style="border:1px solid var(--line-2);padding:4px 10px">What remained of Protein R</th></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Protease added to the outside of intact cells</td><td style="border:1px solid var(--line-2);padding:4px 10px">250 amino acids remained; all carbohydrate chains were removed</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">Protease added to broken-open membranes (both faces exposed)</td><td style="border:1px solid var(--line-2);padding:4px 10px">Only a 22-amino-acid segment remained</td></tr></table>`,
 parts:[
  {verb:"Identify",text:"whether Protein R is an integral or a peripheral protein, and support your answer with the data.",pts:1,rubric:["Integral (transmembrane): a 22-amino-acid segment was protected even with both faces exposed, so it is buried within the bilayer, and parts of R are exposed on both sides of the membrane"]},
  {verb:"Explain",text:"what kind of R-groups you expect in the 22-amino-acid segment, and why.",pts:2,rubric:["The segment will have mostly nonpolar (hydrophobic) R-groups","Because it is surrounded by the nonpolar fatty-acid tails in the interior of the bilayer, and nonpolar R-groups interact with nonpolar tails (polar or charged R-groups would be repelled)"]},
  {verb:"Calculate",text:"the percent of Protein R's amino acids that are located in the cytoplasm. Show your work.",pts:1,rubric:["Outside portion = 400 − 250 = 150; cytoplasmic portion = 400 − 150 − 22 = 228; 228 ÷ 400 × 100 = 57%"]},
  {verb:"Explain",text:"why the carbohydrate chains are located only on the part of Protein R outside the cell, based on their function.",pts:1,rubric:["Carbohydrate chains of glycoproteins function in cell recognition (ID tags / binding signals); they must face the extracellular fluid to be recognized by or interact with other cells and molecules outside the cell"]}
 ]},

// ---------- u2perm ----------
{id:"D2_perm_1",t:"u2perm",daily:true,title:"The cell wall as a filter",
 stem:"Researchers added fluorescent dextrans (polysaccharides made of many glucose units) of different sizes to living onion cells, then looked at them with a fluorescence microscope after 30 minutes.",
 fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Dextran size (kDa)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Where fluorescence was seen</th></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">4</td><td style="border:1px solid var(--line-2);padding:4px 10px">Throughout the cell wall, up to the plasma membrane; not in the cytoplasm</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">10</td><td style="border:1px solid var(--line-2);padding:4px 10px">Throughout the cell wall, up to the plasma membrane; not in the cytoplasm</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">40</td><td style="border:1px solid var(--line-2);padding:4px 10px">Only outside the cell wall</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">70</td><td style="border:1px solid var(--line-2);padding:4px 10px">Only outside the cell wall</td></tr></table>`,
 parts:[
  {verb:"Identify",text:"the main molecule that makes up the plant cell wall and the type of macromolecule it is.",pts:1,rubric:["Cellulose; a carbohydrate (polysaccharide / complex carbohydrate). Both needed"]},
  {verb:"Describe",text:"the role the cell wall plays in regulating what reaches the plasma membrane. Use the data.",pts:1,rubric:["The wall acts as a size filter: smaller dextrans (4 and 10 kDa) passed through the wall to the membrane, while larger ones (40 and 70 kDa) were blocked outside the wall"]},
  {verb:"Explain",text:"why even the smallest dextran did not enter the cytoplasm.",pts:2,rubric:["Dextrans are large, polar molecules (many –OH groups; even 4 kDa is far larger than one glucose)","The interior of the plasma membrane is made of hydrophobic fatty-acid tails, which large polar molecules can't pass without a transport protein, and the cells have no dextran transporter"]},
  {verb:"Predict",text:"whether a small, nonpolar fluorescent dye would appear in the cytoplasm. Justify your prediction.",pts:1,rubric:["Yes, it will appear in the cytoplasm: it is small enough to pass through the wall, and because it is small and nonpolar it diffuses directly between the phospholipids of the bilayer"]}
 ]},
{id:"D2_perm_2",t:"u2perm",daily:true,title:"Frog eggs and water channels",
 stem:"Frog egg cells (oocytes) normally let water cross their membranes very slowly. Researchers injected one group of oocytes with the mRNA for an aquaporin, so the cells made aquaporin proteins, and injected a second group with water only. A third group made aquaporins but was treated with mercury, which blocks aquaporin channels. All oocytes were placed in a solution that is hypotonic compared with the oocyte cytoplasm, and their volume was measured.",
 fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Time (min)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Water-injected: volume (% of start)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Aquaporin: volume (% of start)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Aquaporin + mercury: volume (% of start)</th></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">0</td><td style="border:1px solid var(--line-2);padding:4px 10px">100</td><td style="border:1px solid var(--line-2);padding:4px 10px">100</td><td style="border:1px solid var(--line-2);padding:4px 10px">100</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">1</td><td style="border:1px solid var(--line-2);padding:4px 10px">101</td><td style="border:1px solid var(--line-2);padding:4px 10px">110</td><td style="border:1px solid var(--line-2);padding:4px 10px">102</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">2</td><td style="border:1px solid var(--line-2);padding:4px 10px">102</td><td style="border:1px solid var(--line-2);padding:4px 10px">121</td><td style="border:1px solid var(--line-2);padding:4px 10px">103</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">3</td><td style="border:1px solid var(--line-2);padding:4px 10px">103</td><td style="border:1px solid var(--line-2);padding:4px 10px">132</td><td style="border:1px solid var(--line-2);padding:4px 10px">104</td></tr>
<tr><td style="border:1px solid var(--line-2);padding:4px 10px">4</td><td style="border:1px solid var(--line-2);padding:4px 10px">104</td><td style="border:1px solid var(--line-2);padding:4px 10px">burst</td><td style="border:1px solid var(--line-2);padding:4px 10px">105</td></tr></table>`,
 parts:[
  {verb:"Identify",text:"the purpose of the water-injected group.",pts:1,rubric:["It is the control: it shows how much the oocytes swell from the injection procedure and normal water movement WITHOUT aquaporins, so any difference can be attributed to the aquaporins"]},
  {verb:"Calculate",text:"the rate of volume increase (% per minute) over the first 3 minutes for the aquaporin group and for the water-injected group.",pts:1,rubric:["Aquaporin: (132 − 100) ÷ 3 = 10.7% per minute; water-injected: (103 − 100) ÷ 3 = 1.0% per minute (both needed, decimals)"]},
  {verb:"Explain",text:"why the aquaporin oocytes swelled so much faster.",pts:2,rubric:["Water is polar, so only small amounts can pass between the hydrophobic fatty-acid tails of the bilayer","Aquaporins provide a hydrophilic channel, so much more water moves by osmosis from the hypotonic solution (low solute concentration) into the hypertonic cytoplasm (high solute concentration) — passive, no ATP. Direction must be complete; ‘it moves in’ earns 0"]},
  {verb:"Justify",text:"the conclusion that the aquaporins, and not some other effect of the mRNA injection, caused the fast swelling. Use the mercury data.",pts:1,rubric:["When the aquaporins were blocked by mercury, swelling fell to (104 − 100) ÷ 3 = 1.3% per minute, close to the control's 1.0% per minute instead of 10.7% per minute, so the fast swelling depends on working aquaporin channels"]}
 ]}
);

// ================= UNIT 2 — APPLY-LEVEL SET B (2.5–2.10 + labs) =================
// 36 apply-level (lvl:2) MCQ / numeric items + 12 daily FRQs. Generated; see gen_B.py.
MCQ.push(
{id:"hB_trans_1",t:"u2trans",lvl:2,fig:`<table style="border-collapse:collapse;font-size:15px"><caption style="caption-side:top;text-align:left;padding:2px 0 6px;font-weight:600">Rate of X uptake (µmol/min per g of cells)</caption><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Outside [X] (mM)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Uptake rate, no cyanide</th><th style="border:1px solid var(--line-2);padding:4px 10px">Uptake rate, + cyanide</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">1</td><td style="border:1px solid var(--line-2);padding:4px 10px">2.0</td><td style="border:1px solid var(--line-2);padding:4px 10px">2.0</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">5</td><td style="border:1px solid var(--line-2);padding:4px 10px">8.5</td><td style="border:1px solid var(--line-2);padding:4px 10px">8.4</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">10</td><td style="border:1px solid var(--line-2);padding:4px 10px">13.0</td><td style="border:1px solid var(--line-2);padding:4px 10px">13.1</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">20</td><td style="border:1px solid var(--line-2);padding:4px 10px">16.0</td><td style="border:1px solid var(--line-2);padding:4px 10px">15.9</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">40</td><td style="border:1px solid var(--line-2);padding:4px 10px">16.5</td><td style="border:1px solid var(--line-2);padding:4px 10px">16.4</td></tr></table>`,q:"Substance X is a charged amino acid. Researchers measured how fast X enters cultured cells at different outside concentrations, with and without cyanide (which stops ATP production). In every trial, the concentration of X inside the cells stayed LOWER than outside. Which conclusion is best supported by the data?",
 opts:["Simple diffusion, because blocking ATP production with cyanide had no effect on how fast charged X entered the cells","Active transport, because the uptake rate levels off once every pump in the membrane is working at its maximum speed","Facilitated diffusion, because X moves down its gradient through a limited number of proteins and needs no ATP","Receptor-mediated endocytosis, because the cells take in only X and the rate depends on how much X binds outside"],a:2,
 why:"Two clues: X always ends up lower inside than outside (it moves from high X concentration to low X concentration) and cyanide changes nothing, so the transport is passive. X is charged, so it needs a protein, and the rate levels off (about 16 units) because there are only so many proteins to carry it.",
 wrong:{0:"No ATP dependence only shows the transport is passive. A charged molecule can't cross the nonpolar interior of the bilayer on its own, and the leveling off (16.0 → 16.5) points to a limited number of proteins.",1:"Cyanide had no effect (16.5 vs 16.4 at 40 mM), and X never became more concentrated inside than outside, so X is not being moved against its gradient.",3:"Endocytosis forms vesicles, which requires energy; the cyanide data show no energy is needed."}},
{id:"hB_trans_2",t:"u2trans",lvl:2,q:"Thyroid cells take up iodide ions (I⁻) from the blood to make thyroid hormone. A researcher claims that thyroid cells take up iodide by active transport. Which observation would provide the STRONGEST evidence for this claim?",
 opts:["Iodide builds up to 30 times the blood level, and uptake stops completely when ATP production is blocked","Iodide needs a specific membrane protein to enter, because charged iodide cannot cross the phospholipid bilayer","Iodide uptake gets faster when blood iodide rises, showing that the cells actively respond to more iodide","Iodide leaves the thyroid cells when the blood has no iodide, showing that the cells control iodide movement"],a:0,
 why:"Active transport has two signatures: the substance moves against its gradient (low iodide concentration in the blood to high iodide concentration in the cell) and it needs energy. Only the first option shows both.",
 wrong:{1:"Facilitated diffusion also uses a specific protein. Needing a protein doesn't show that energy is used.",2:"Passive transport also speeds up when the gradient is steeper, so this can't tell the two apart.",3:"Moving from high iodide inside to low iodide outside is downhill (passive); it says nothing about how iodide got in."}},
{id:"hB_trans_3",t:"u2trans",lvl:2,fig:`<table style="border-collapse:collapse;font-size:15px"><caption style="caption-side:top;text-align:left;padding:2px 0 6px;font-weight:600">Concentration inside new vesicles ÷ concentration in surrounding fluid</caption><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Molecule</th><th style="border:1px solid var(--line-2);padding:4px 10px">Cells WITH TfR</th><th style="border:1px solid var(--line-2);padding:4px 10px">Cells WITHOUT TfR</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Dextran</td><td style="border:1px solid var(--line-2);padding:4px 10px">1.0</td><td style="border:1px solid var(--line-2);padding:4px 10px">1.0</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Transferrin</td><td style="border:1px solid var(--line-2);padding:4px 10px">45</td><td style="border:1px solid var(--line-2);padding:4px 10px">1.0</td></tr></table>`,q:"Researchers added two fluorescent molecules to the fluid around cells: dextran (a sugar polymer that binds to no receptor) and transferrin (an iron-carrying protein). Some cells had the membrane protein TfR; others lacked it. After 10 minutes, they measured the concentration of each molecule inside newly formed vesicles compared with the surrounding fluid. Which explanation best accounts for the data?",
 opts:["TfR is a pump that uses energy to move transferrin against its gradient, while dextran enters the vesicles by pinocytosis","Transferrin moves through a TfR channel by facilitated diffusion, while dextran is taken in by pinocytosis","Both molecules enter by phagocytosis, but transferrin is engulfed far more often because it is larger than dextran","Transferrin binds TfR and is gathered before the vesicle forms (receptor-mediated endocytosis); dextran enters by pinocytosis"],a:3,
 why:"The ratio of 1.0 for dextran means vesicles just scoop up fluid (pinocytosis). Transferrin is 45 times more concentrated only when TfR is present, so binding to the receptor gathers transferrin before the vesicle forms. The name says it: receptor-mediated.",
 wrong:{0:"The transferrin is found inside vesicles, so it was brought in by the membrane folding inward, not pushed through a pump one molecule at a time.",1:"Facilitated diffusion can't make the inside 45 times more concentrated than the outside, and transferrin (a large protein) ends up inside vesicles.",2:"Phagocytosis takes in large particles like bacteria, not dissolved molecules, and it can't explain why transferrin is concentrated only when TfR is present."}},
{id:"hB_trans_4",t:"u2trans",lvl:2,q:"Pancreatic cells are treated with colchicine, a drug that takes apart microtubules. The cells keep making digestive enzymes on the rough ER, and their ATP levels stay normal. Which process would be MOST directly reduced?",
 opts:["Diffusion of O₂ into the cell, because microtubules hold the phospholipids of the membrane in place","Release of enzymes by exocytosis, because vesicles travel to the membrane along microtubules","Osmosis through aquaporins, because water needs microtubules to pull it across the membrane","The Na⁺/K⁺ pump, because the pump needs microtubules to power its change in shape"],a:1,
 why:"Bulk transport depends on the cytoskeleton: vesicles are carried along microtubules by motor proteins (kinesin). With the microtubules taken apart, secretory vesicles from the Golgi can't reach the plasma membrane, so fewer enzymes are released by exocytosis.",
 wrong:{0:"O₂ crosses the bilayer by simple diffusion. It doesn't depend on microtubules or ATP.",2:"Osmosis through aquaporins is passive, driven by the water gradient; the cytoskeleton doesn't pull water across.",3:"ATP levels are normal, and the pump's shape change is powered by ATP, not by microtubules."}},
{id:"hB_trans_5",t:"u2trans",lvl:2,fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Ion</th><th style="border:1px solid var(--line-2);padding:4px 10px">Pond water (mM)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Cytoplasm (mM)</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">K⁺</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.1</td><td style="border:1px solid var(--line-2);padding:4px 10px">80</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Na⁺</td><td style="border:1px solid var(--line-2);padding:4px 10px">1.2</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.3</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Cl⁻</td><td style="border:1px solid var(--line-2);padding:4px 10px">1.5</td><td style="border:1px solid var(--line-2);padding:4px 10px">60</td></tr></table>`,q:"The giant freshwater alga <i>Chara</i> has cells large enough to sample the cytoplasm directly. The table shows ion concentrations in the pond water and in the cytoplasm. Which ion movement REQUIRES the cell to spend energy?",
 opts:["K⁺ moving from the cytoplasm out into the pond water","Na⁺ moving from the pond water into the cytoplasm","Na⁺ moving from the cytoplasm out into the pond water","Cl⁻ moving from the cytoplasm out into the pond water"],a:2,
 why:"Energy is needed only to move an ion toward the side where it is already more concentrated. Na⁺ is 0.3 mM inside and 1.2 mM in the pond, so moving Na⁺ out goes from low Na⁺ concentration to high Na⁺ concentration: active transport through a pump.",
 wrong:{0:"K⁺ is 80 mM in the cytoplasm and 0.1 mM in the pond, so moving out is from high K⁺ concentration to low K⁺ concentration: passive.",1:"Na⁺ is 1.2 mM in the pond and 0.3 mM inside, so moving in is downhill: passive.",3:"Cl⁻ is 60 mM inside and 1.5 mM outside, so moving out is downhill: passive."}},
{id:"hB_trans_6",t:"u2trans",lvl:2,q:"Root cells take up nitrate (NO₃⁻) from the soil even though nitrate is already more concentrated inside the root cells than in the soil water. After a field floods for several days, the soil water holds almost no O₂, and the crop shows nitrogen deficiency even though the soil still contains nitrate. Which explanation is best?",
 opts:["Flood water dilutes the soil so it becomes hypertonic to the roots, and nitrate moves out of the roots","O₂ is carried into root cells along with nitrate, so without O₂ the nitrate carrier cannot work","Nitrate now diffuses into the roots faster than the cells can use it, which damages the root cells","Without O₂, mitochondria make little ATP, so the pumps moving nitrate against its gradient slow"],a:3,
 why:"Nitrate moves from low nitrate concentration in the soil to high nitrate concentration in the root, so its uptake is active transport and needs energy. Roots get most of their ATP from cellular respiration in mitochondria, which needs O₂. No O₂ → little ATP → slow nitrate uptake → nitrogen deficiency.",
 wrong:{0:"Dilution makes the soil hypotonic, not hypertonic, and tonicity describes water movement, not nitrate uptake.",1:"O₂ is small and nonpolar and diffuses through the bilayer on its own; it isn't carried by the nitrate transporter.",2:"Nitrate is more concentrated inside the roots, so it can't diffuse in down its gradient."}},
{id:"hB_tonic_1",t:"u2tonic",lvl:2,fig:`<table style="border-collapse:collapse;font-size:15px"><caption style="caption-side:top;text-align:left;padding:2px 0 6px;font-weight:600">Rate of entry (relative units)</caption><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Substance</th><th style="border:1px solid var(--line-2);padding:4px 10px">Pure phospholipid vesicles</th><th style="border:1px solid var(--line-2);padding:4px 10px">Vesicles with protein P</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Water</td><td style="border:1px solid var(--line-2);padding:4px 10px">5</td><td style="border:1px solid var(--line-2);padding:4px 10px">90</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">O₂</td><td style="border:1px solid var(--line-2);padding:4px 10px">100</td><td style="border:1px solid var(--line-2);padding:4px 10px">100</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Glucose</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.1</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.1</td></tr></table>`,q:"Researchers made artificial vesicles from pure phospholipids and compared them with identical vesicles that also contained protein P. No ATP was present. They measured how fast each substance entered the vesicles (relative units). Which conclusion is best supported?",
 opts:["P is a pump that uses energy to push water into the vesicles faster than osmosis","P is an aquaporin that speeds up osmosis by facilitated diffusion, using no energy","Water cannot cross a pure phospholipid bilayer at all, so P is the only way in","P makes the whole membrane more permeable to every small molecule, including water"],a:1,
 why:"Only water's rate changed (5 → 90), and no energy source was present, so P must be a passive, water-specific channel. O₂ was already fast (small and nonpolar), and glucose stayed slow (P doesn't carry it).",
 wrong:{0:"No ATP was present, so P can't be a pump. Water moves passively, down its own gradient.",2:"The pure bilayer still let water in at 5 units. A little water slips through; P makes it about 18 times faster.",3:"O₂ and glucose rates didn't change, so P is selective for water."}},
{id:"hB_tonic_2",t:"u2tonic",lvl:2,fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Solution</th><th style="border:1px solid var(--line-2);padding:4px 10px">Result after 30 min</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.30 M sucrose</td><td style="border:1px solid var(--line-2);padding:4px 10px">No change in shape</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.15 M NaCl</td><td style="border:1px solid var(--line-2);padding:4px 10px">No change in shape</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.20 M NaCl</td><td style="border:1px solid var(--line-2);padding:4px 10px">Cells shrink</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.30 M urea</td><td style="border:1px solid var(--line-2);padding:4px 10px">Cells swell and burst</td></tr></table>`,q:"Red blood cells were placed in four solutions. The cell membrane is permeable to urea but NOT to NaCl or sucrose. Which statement best explains the result in 0.30 M urea?",
 opts:["0.30 M urea is hypertonic compared to the cells, so water moved into the cells until they burst","0.30 M urea matches 0.30 M sucrose, so no change was expected; urea must have dissolved the membranes","Urea is actively pumped into the cells, and the pump carries water in along with it until they burst","Urea enters the cells, raising their solute level, so water follows by osmosis until they burst"],a:3,
 why:"Only solutes that CAN'T cross set tonicity. 0.30 M sucrose and 0.15 M NaCl (0.30 M of particles, i = 2) are isotonic, so there's no change. Urea diffuses into the cells from high urea concentration to low urea concentration. The cells' trapped solutes plus the urea make the inside hypertonic, so water keeps entering and the cells lyse, exactly as in pure water.",
 wrong:{0:"Water moves toward a hypertonic solution, so a hypertonic outside would make the cells shrink, not swell.",1:"Equal molarity only predicts no change if the solute can't cross. The data point to the difference in permeability, not membrane damage.",2:"Nothing in the data shows energy use, and water always moves passively."}},
{id:"hB_tonic_3",t:"u2tonic",lvl:2,fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Salt outside (mM)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Contractions per minute</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0</td><td style="border:1px solid var(--line-2);padding:4px 10px">12</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">25</td><td style="border:1px solid var(--line-2);padding:4px 10px">8</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">50</td><td style="border:1px solid var(--line-2);padding:4px 10px">4</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">100</td><td style="border:1px solid var(--line-2);padding:4px 10px">1</td></tr></table>`,q:"<i>Paramecium</i> is a single-celled freshwater protist. Its contractile vacuole collects water and expels it from the cell. A student moved paramecia into water with different salt concentrations (all below the salt concentration of the cytoplasm) and counted contractions. Which explanation best accounts for the trend?",
 opts:["More outside salt makes the water less hypotonic compared to the cell, so less water enters to be removed","More outside salt means more salt enters the cell, and the vacuole contracts less because it pumps out salt","More outside salt makes the water more hypotonic compared to the cell, so the vacuole has less work to do","At 100 mM the water is hypertonic compared to the cell, so water leaves and the vacuole nearly stops"],a:0,
 why:"In fresh water, the cell is hypertonic compared to its surroundings, so water keeps flowing in. The smaller the difference, the slower water enters, so the vacuole contracts less often (12 → 1 per minute). This is osmoregulation: spending energy to get rid of the water that osmosis brings in.",
 wrong:{1:"The contractile vacuole removes excess water, not salt, and fewer contractions means less work.",2:"Adding salt makes the outside LESS hypotonic, not more; a more hypotonic outside would mean more water entering and more contractions.",3:"All the solutions are below the cytoplasm's salt concentration, so they are still hypotonic. The cell still gains a little water (1 contraction/min)."}},
{id:"hB_tonic_4",t:"u2tonic",lvl:2,q:"A U-tube is divided by a membrane that is permeable only to water. Side A holds 0.5 M glucose and side B holds 0.3 M NaCl. Both start at the same height. Which prediction is correct?",
 opts:["Side A rises, because 0.5 M glucose is more concentrated than 0.3 M NaCl, making A hypertonic","Neither side rises, because water keeps moving in both directions across the membrane equally","Side B rises, because 0.3 M NaCl gives 0.6 M of particles, making B hypertonic to A","Side B rises, because the Na⁺ and Cl⁻ ions cross the membrane and water follows the ions"],a:2,
 why:"Tonicity depends on the number of dissolved particles. Glucose stays whole (0.5 M of particles); NaCl gives 2 × 0.3 = 0.6 M of particles. Water moves from side A (hypotonic compared to B) into side B (hypertonic compared to A), so side B rises.",
 wrong:{0:"This ignores ionization: NaCl splits into Na⁺ and Cl⁻, so side B has 0.6 M of particles.",1:"The particle concentrations differ (0.5 vs 0.6), so there is net water movement.",3:"The membrane is permeable only to water; the ions can't cross."}},
{id:"hB_tonic_5",t:"u2tonic",lvl:2,q:"Salmon hatch in rivers, grow in the ocean, and return to fresh water as adults to spawn. In the ocean, seawater is hypertonic compared to their body fluids, and gill cells actively pump salt OUT of the body. When adult salmon swim up a freshwater river to spawn, which change would best maintain their water and salt balance?",
 opts:["Gill cells keep pumping salt out, and the fish drinks river water to replace water it loses","Gill cells actively take in salt, and the kidneys make large amounts of dilute urine","The kidneys make only a little urine, to hold on to the salt and water already in the body","No change is needed, because salmon body fluids are isotonic to both seawater and fresh water"],a:1,
 why:"River water is hypotonic compared to the salmon's body fluids, so water moves into the fish by osmosis and salts diffuse out. To keep homeostasis, the fish must get rid of the extra water (lots of dilute urine) and move salt in against its gradient (active transport in the gills).",
 wrong:{0:"In fresh water the fish already gains water and loses salt; pumping salt out and drinking more would make both problems worse.",2:"Making little urine to save water is the ocean strategy (and fish can't make urine more concentrated than their blood). In fresh water, water floods in, so the fish must get rid of water.",3:"Seawater is hypertonic and river water is hypotonic compared to the fish, so the fish must change strategies."}},
{id:"hB_tonic_6",t:"u2tonic",lvl:2,q:"Liver cells take in glucose through GLUT carrier proteins, which do not use ATP. As soon as glucose enters, an enzyme attaches a phosphate to it, making glucose-6-phosphate, which GLUT cannot carry. Why does this keep glucose entering the cell?",
 opts:["It keeps free glucose inside low, so glucose keeps diffusing in down its concentration gradient","The added phosphate gives GLUT the energy it needs to pump glucose in against its gradient","Glucose-6-phosphate leaves through GLUT, which makes room inside for more glucose to enter","Glucose is attracted to the negative charges on glucose-6-phosphate, so it is pulled into the cell"],a:0,
 why:"Facilitated diffusion only goes downhill. By turning each incoming glucose into a different molecule, the cell keeps free glucose inside low, so the gradient never runs out and glucose keeps entering without any energy spent on transport.",
 wrong:{1:"GLUT is a carrier for facilitated diffusion, not a pump; it doesn't use this energy.",2:"The stem says GLUT can't carry glucose-6-phosphate, and it stays trapped inside.",3:"Diffusion is driven by the concentration gradient, not attraction."}},
{id:"hB_wp_1",t:"u2wp",lvl:2,type:"num",q:"Calculate the solute potential (Ψs) of a 0.35 M NaCl solution at 15 °C in an open beaker. Use Ψs = −iCRT with R = 0.0831 L·bar/mol·K. (Type the number in bars, with its sign.)",
 answer:-16.75,tol:0.08,unit:"bars",
 why:"NaCl splits into Na⁺ and Cl⁻, so i = 2. T = 15 + 273 = 288 K. Ψs = −(2)(0.35 mol/L)(0.0831 L·bar/mol·K)(288 K) = −16.75 bars. In a sentence: 'The solute potential of the NaCl solution is −16.75 bars.'",
 hint:"Three traps: i = 2 for NaCl, add 273 to get kelvin, and keep the negative sign."},
{id:"hB_wp_2",t:"u2wp",lvl:2,type:"num",q:"At 25 °C, a plant cell whose contents act like 0.50 M sucrose (i = 1) is at equilibrium with a 0.20 M NaCl solution in an open beaker. What is the cell's pressure potential (Ψp)? (Type the number in bars, with its sign.)",
 answer:2.48,tol:0.05,unit:"bars",
 why:"Cell: Ψs = −(1)(0.50)(0.0831)(298) = −12.38 bars. Solution: Ψ = Ψs = −(2)(0.20)(0.0831)(298) = −9.91 bars (open beaker, Ψp = 0). At equilibrium the cell's Ψ equals the solution's Ψ: −12.38 + Ψp = −9.91, so Ψp = +2.48 bars.",
 hint:"Find both solute potentials first (NaCl has i = 2). At equilibrium, Ψs(cell) + Ψp = Ψ(solution)."},
{id:"hB_wp_3",t:"u2wp",lvl:2,fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Cell</th><th style="border:1px solid var(--line-2);padding:4px 10px">Ψs (bars)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Ψp (bars)</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">X</td><td style="border:1px solid var(--line-2);padding:4px 10px">−7</td><td style="border:1px solid var(--line-2);padding:4px 10px">+4</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Y</td><td style="border:1px solid var(--line-2);padding:4px 10px">−9</td><td style="border:1px solid var(--line-2);padding:4px 10px">+4</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Z</td><td style="border:1px solid var(--line-2);padding:4px 10px">−6</td><td style="border:1px solid var(--line-2);padding:4px 10px">+0.5</td></tr></table>`,q:"Three neighboring plant cells, X, Y and Z, are connected in a row (X–Y–Z). Their solute and pressure potentials are shown. Which describes the net movement of water?",
 opts:["Z → X → Y, because Z has the least negative solute potential and Y has the most negative","X → Y → Z, because the total water potentials are −3, −5 and −5.5 bars","Y → X → Z, because Y has the greatest pressure potential pushing water out","No net movement, because each cell's pressure potential balances its solute potential"],a:1,
 why:"Ψ(X) = −7 + 4 = −3 bars; Ψ(Y) = −9 + 4 = −5 bars; Ψ(Z) = −6 + 0.5 = −5.5 bars. Water moves from high Ψ to low Ψ: from X (−3) into Y (−5), and from Y (−5) into Z (−5.5).",
 wrong:{0:"This uses Ψs alone. Water follows TOTAL water potential: Ψ = Ψs + Ψp.",2:"X and Y have the same Ψp (+4); Y's more negative Ψs gives it a lower Ψ than X, so water moves into Y from X.",3:"The totals are different (−3, −5, −5.5 bars), so water moves."}},
{id:"hB_wp_4",t:"u2wp",lvl:2,q:"Two beakers each contain 0.30 M sucrose. One is at 5 °C and the other at 35 °C. Which statement about their solute potentials is correct?",
 opts:["At 35 °C, Ψs is about 0.75 bars more negative, because Ψs depends on the kelvin temperature","Their Ψs values are equal, because sucrose does not ionize, so temperature has no effect","At 35 °C, Ψs is 7 times more negative, because Ψs is proportional to temperature (35 ÷ 5 = 7)","At 5 °C, Ψs is more negative, because cold water molecules hold dissolved sucrose more tightly"],a:0,
 why:"Ψs(5 °C) = −(1)(0.30)(0.0831)(278) = −6.93 bars; Ψs(35 °C) = −(1)(0.30)(0.0831)(308) = −7.68 bars. The difference is about 0.75 bars, not a factor of 7, because the temperature must be in kelvin.",
 wrong:{1:"i = 1 for both, but T still appears in −iCRT, so temperature changes Ψs.",2:"This forgets to convert to kelvin: 308 K ÷ 278 K is only about 1.1.",3:"Backwards: lower T makes −iCRT smaller in size, so the 5 °C solution is less negative."}},
{id:"hB_wp_5",t:"u2wp",lvl:2,q:"A turgid plant cell sits in pure water at equilibrium: Ψs = −7 bars and Ψp = +7 bars. It is moved to an open beaker of solution with Ψ = −3 bars. Assume the cell's Ψs stays at about −7 bars. Which describes the cell at its new equilibrium?",
 opts:["The cell's Ψ stays at 0 bars, because the rigid cell wall keeps Ψp at +7 bars","Ψp becomes −3 bars, so that the cell's pressure matches the solution's Ψ","The cell plasmolyzes, so Ψp = 0 and the cell's Ψ settles at −7 bars","Water left until Ψp fell to about +4 bars, so the cell's Ψ is now −3 bars"],a:3,
 why:"The cell starts at Ψ = −7 + 7 = 0 bars, higher than the solution (−3 bars), so water leaves. As it leaves, the membrane presses less on the wall and Ψp drops. Net movement stops when −7 + Ψp = −3, so Ψp = +4 bars.",
 wrong:{0:"At 0 bars the cell has a higher Ψ than the solution (−3), so water must leave, and Ψp falls as the cell loses water.",1:"It's the TOTAL Ψ of the cell that matches the solution: −7 + Ψp = −3, so Ψp = +4 bars.",2:"That would make the cell's Ψ (−7) lower than the solution's (−3), and water would move back in. The cell stops losing water once Ψp reaches +4 bars."}},
{id:"hB_wp_6",t:"u2wp",lvl:2,fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Beaker</th><th style="border:1px solid var(--line-2);padding:4px 10px">Solution</th><th style="border:1px solid var(--line-2);padding:4px 10px">Temperature</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">1</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.20 M NaCl</td><td style="border:1px solid var(--line-2);padding:4px 10px">20 °C</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">2</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.35 M sucrose</td><td style="border:1px solid var(--line-2);padding:4px 10px">20 °C</td></tr></table>`,q:"Slices of plant tissue with Ψ = −9.0 bars are placed in two open beakers at 20 °C. Predict what happens to the mass of the slices in each beaker.",
 opts:["They gain mass in 0.20 M NaCl and lose mass in 0.35 M sucrose, because 0.20 M is less concentrated than 0.35 M","They lose mass in 0.20 M NaCl and gain mass in 0.35 M sucrose","They lose mass in both, because both solutions contain solute and the tissue does not","They gain mass in both, because plant cells are always hypertonic compared to their surroundings"],a:1,
 why:"NaCl: Ψ = −(2)(0.20)(0.0831)(293) = −9.74 bars, lower than the tissue (−9.0), so water moves out of the slices. Sucrose: Ψ = −(1)(0.35)(0.0831)(293) = −8.52 bars, higher than the tissue, so water moves into the slices.",
 wrong:{0:"This forgets that NaCl gives two particles (i = 2), so 0.20 M NaCl has the more negative Ψ.",2:"The tissue has solute too (Ψ = −9.0). In sucrose, −8.52 bars is higher than −9.0, so water moves into the tissue.",3:"In NaCl, −9.74 bars is lower than −9.0, so water leaves the tissue."}},
{id:"hB_mech_1",t:"u2mech",lvl:2,fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Condition</th><th style="border:1px solid var(--line-2);padding:4px 10px">Sucrose uptake (% of control)</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Control (outside pH 5.5)</td><td style="border:1px solid var(--line-2);padding:4px 10px">100</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Outside pH 7.0 (fewer H⁺ outside)</td><td style="border:1px solid var(--line-2);padding:4px 10px">35</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">+ vanadate (proton pump blocked)</td><td style="border:1px solid var(--line-2);padding:4px 10px">12</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">+ protonophore (membrane leaky to H⁺)</td><td style="border:1px solid var(--line-2);padding:4px 10px">8</td></tr></table>`,q:"Plant cells load sucrose using a membrane protein. Researchers measured sucrose uptake under different conditions. Vanadate blocks the ATP-powered proton (H⁺) pump. A protonophore makes the membrane leaky to H⁺ but does NOT affect ATP levels. Which conclusion do the data best support?",
 opts:["Sucrose is pumped directly by ATP, so any drug that interferes with the proton pump or ATP stops it","Sucrose enters by facilitated diffusion, and the two drugs simply damage the sucrose carrier","Sucrose is cotransported with H⁺, using an H⁺ gradient built by the ATP-powered proton pump","Sucrose and H⁺ move in opposite directions through an antiporter powered by the H⁺ gradient"],a:2,
 why:"Three pieces fit together: block the proton pump → uptake drops (12%). Leave ATP alone but let the H⁺ gradient leak away → uptake drops (8%). More H⁺ outside → more uptake. So the H⁺ gradient is the direct energy source, and ATP is used only to build that gradient: secondary active transport (cotransport).",
 wrong:{0:"The protonophore leaves ATP levels normal but still drops uptake to 8%. Uptake depends on the H⁺ gradient, not on ATP directly.",1:"Changing only the outside pH (no drug) also cut uptake to 35%, so the H⁺ gradient itself matters; this isn't facilitated diffusion.",3:"More H⁺ outside (pH 5.5 vs 7.0) increased sucrose uptake into the cell, so H⁺ and sucrose move into the cell together (symport)."}},
{id:"hB_mech_2",t:"u2mech",lvl:2,q:"Each cycle of the Na⁺/K⁺ pump uses one ATP to move 3 Na⁺ out of the cell and 2 K⁺ into the cell. How does this help make the inside of the cell negative compared with the outside?",
 opts:["Each cycle moves one more positive charge out of the cell than it brings in","The pump also carries negative chloride ions into the cell during each cycle","K⁺ ions carry a negative charge, so bringing K⁺ in makes the inside negative","The pump moves 2 Na⁺ out and 3 K⁺ in, so more ions enter than leave"],a:0,
 why:"3 positive charges leave and 2 positive charges enter, so each cycle removes one net positive charge from the cell. Over many cycles, the inside becomes negative compared with the outside. This separation of charge is stored energy the cell can use, just like the Na⁺ concentration gradient.",
 wrong:{1:"The Na⁺/K⁺ pump moves only Na⁺ and K⁺, and both are positive.",2:"K⁺ is a positive ion.",3:"The numbers are reversed, and that would make the inside more positive."}},
{id:"hB_mech_3",t:"u2mech",lvl:2,q:"Heart muscle cells remove Ca²⁺ using a Na⁺/Ca²⁺ exchanger (antiporter): Na⁺ moving into the cell down its gradient powers Ca²⁺ moving out against its gradient. Digoxin, a heart drug from the foxglove plant, partly blocks the Na⁺/K⁺ pump. Predict how digoxin affects the Ca²⁺ concentration inside heart cells.",
 opts:["It decreases, because less Na⁺ enters the cell and Ca²⁺ always moves in the same direction as Na⁺","It increases, because Na⁺ builds up inside, weakening the Na⁺ gradient that drives Ca²⁺ out","It doesn't change, because the Na⁺/Ca²⁺ exchanger does not use any ATP directly","It increases, because the Na⁺/K⁺ pump normally moves Ca²⁺ out of the cell along with Na⁺"],a:1,
 why:"The Na⁺/K⁺ pump keeps Na⁺ low inside. Block it and Na⁺ accumulates inside, so less Na⁺ flows in through the exchanger, and less Ca²⁺ is pushed out. Ca²⁺ builds up inside the cells (which is why digoxin makes heart muscle contract harder).",
 wrong:{0:"In an antiporter the two ions move in opposite directions: Na⁺ in, Ca²⁺ out.",2:"The exchanger doesn't use ATP directly, but it depends on the Na⁺ gradient that the ATP-powered pump builds.",3:"Right direction, wrong reason: the Na⁺/K⁺ pump moves only Na⁺ and K⁺. Ca²⁺ is removed by the exchanger, which depends on the Na⁺ gradient."}},
{id:"hB_mech_4",t:"u2mech",lvl:2,fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Ion</th><th style="border:1px solid var(--line-2);padding:4px 10px">Inside the cell (mM)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Stomach contents (mM)</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">H⁺</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.00006 (pH 7.2)</td><td style="border:1px solid var(--line-2);padding:4px 10px">150 (pH ≈ 0.8)</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">K⁺</td><td style="border:1px solid var(--line-2);padding:4px 10px">140</td><td style="border:1px solid var(--line-2);padding:4px 10px">10</td></tr></table>`,q:"Cells lining the stomach secrete acid using an H⁺/K⁺ pump that uses ATP to move H⁺ into the stomach and K⁺ into the cell. K⁺ then returns to the stomach through K⁺ channels. The table shows concentrations on each side. Which statement is correct?",
 opts:["H⁺ moves passively into the stomach, because the acidic stomach attracts H⁺ ions from the cell","K⁺ enters the cell passively through the pump, because the pump works as a K⁺ channel","Blocking the K⁺ channels would increase acid secretion, because more K⁺ stays inside for the pump","The pump moves H⁺ and K⁺ uphill using ATP; K⁺ leaving through channels moves downhill"],a:3,
 why:"Read each arrow against the table. H⁺: 0.00006 mM (cell) → 150 mM (stomach) is uphill. K⁺ into the cell: 10 mM → 140 mM is uphill. Both need the ATP-powered pump. K⁺ back out: 140 mM → 10 mM is downhill, so channels are enough. The same ion can move actively one way and passively the other.",
 wrong:{0:"The stomach already has far more H⁺ (150 mM vs 0.00006 mM), so moving H⁺ there is uphill.",1:"K⁺ is 140 mM inside and 10 mM in the stomach, so moving K⁺ into the cell is uphill; the pump uses ATP.",2:"The pump needs K⁺ on the STOMACH side to trade for H⁺. If K⁺ can't return to the stomach through channels, the pump runs out of K⁺ to bring in, and acid secretion falls."}},
{id:"hB_mech_5",t:"u2mech",lvl:2,q:"<i>E. coli</i> cells are suspended in unbuffered water, and lactose is added. As lactose enters the cells through the protein LacY, the pH of the water outside the cells RISES. Which model of LacY is best supported?",
 opts:["LacY is a symporter that carries H⁺ into the cell together with lactose","LacY is an antiporter that pumps H⁺ out of the cell as lactose comes in","Lactose enters by pinocytosis, which releases OH⁻ into the water","LacY is a channel for lactose, and lactose raises the pH of water"],a:0,
 why:"A rising pH means fewer H⁺ in the water outside, so H⁺ is leaving the water and entering the cells along with lactose: symport (same direction). The H⁺ gradient (built by proton pumps) provides the energy to bring lactose in.",
 wrong:{1:"Adding H⁺ to the outside water would make its pH fall, not rise.",2:"Bacteria don't do endocytosis, and nothing here produces OH⁻.",3:"Lactose is a sugar, not a base; the pH change points to H⁺ movement."}},
{id:"hB_mech_6",t:"u2mech",lvl:2,fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Time (min)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Na⁺ inside (mM)</th><th style="border:1px solid var(--line-2);padding:4px 10px">K⁺ inside (mM)</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0</td><td style="border:1px solid var(--line-2);padding:4px 10px">12</td><td style="border:1px solid var(--line-2);padding:4px 10px">140</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">30</td><td style="border:1px solid var(--line-2);padding:4px 10px">30</td><td style="border:1px solid var(--line-2);padding:4px 10px">120</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">60</td><td style="border:1px solid var(--line-2);padding:4px 10px">55</td><td style="border:1px solid var(--line-2);padding:4px 10px">95</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">120</td><td style="border:1px solid var(--line-2);padding:4px 10px">90</td><td style="border:1px solid var(--line-2);padding:4px 10px">60</td></tr></table>`,q:"Red blood cells were placed in a solution containing a drug that stops ATP production. The concentrations of Na⁺ and K⁺ inside the cells were measured over two hours. Outside the cells, Na⁺ stays at 145 mM and K⁺ stays at 5 mM. Which explanation best fits the data?",
 opts:["The pump runs backward, actively moving Na⁺ into the cell and K⁺ out of the cell","Na⁺ and K⁺ channels need ATP to stay closed, so without ATP they open wider","The pump stops, so Na⁺ and K⁺ leak down their gradients toward the outside levels","K⁺ is pumped out of the cell because the cell has become hypertonic to the solution"],a:2,
 why:"Normally the pump spends ATP to keep Na⁺ low (12 mM) and K⁺ high (140 mM) inside, against a constant leak. Without ATP, only the leak continues: Na⁺ moves from high Na⁺ outside to low Na⁺ inside (12 → 90 mM), and K⁺ moves from high K⁺ inside to low K⁺ outside (140 → 60 mM).",
 wrong:{0:"Without ATP, the pump simply stops; the ions move by leaking passively down their gradients.",1:"Channels are passive and don't use ATP; they were leaking ions all along, while the pump kept up.",3:"Nothing is being pumped without ATP. Tonicity describes water, not K⁺ movement."}},
{id:"hB_comp_1",t:"u2comp",lvl:2,fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Treatment</th><th style="border:1px solid var(--line-2);padding:4px 10px">Cytosolic protein synthesis (% of control)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Mitochondrial protein synthesis (% of control)</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Chloramphenicol (blocks 70S)</td><td style="border:1px solid var(--line-2);padding:4px 10px">98</td><td style="border:1px solid var(--line-2);padding:4px 10px">5</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Cycloheximide (blocks 80S)</td><td style="border:1px solid var(--line-2);padding:4px 10px">3</td><td style="border:1px solid var(--line-2);padding:4px 10px">95</td></tr></table>`,q:"Yeast cells were treated with one of two antibiotics. Chloramphenicol blocks bacterial (70S) ribosomes; cycloheximide blocks eukaryotic (80S) ribosomes. Researchers measured protein synthesis in the cytosol and inside the mitochondria. How do these results support the endosymbiotic theory?",
 opts:["Mitochondria get all their proteins from the cytosol, which shows they were once engulfed","Mitochondrial ribosomes respond like bacterial ribosomes: blocked only by the 70S drug","Both drugs block both kinds of ribosomes equally, so all the ribosomes in the cell are alike","Cytosolic ribosomes respond like bacterial ribosomes, so the cytosol came from a bacterium"],a:1,
 why:"Mitochondrial protein synthesis drops to 5% with chloramphenicol but stays at 95% with cycloheximide. That's the pattern of bacterial 70S ribosomes, which matches the idea that mitochondria came from an engulfed bacterium that kept its own ribosomes.",
 wrong:{0:"The data show the mitochondria make proteins themselves (95% with cycloheximide).",2:"The drugs have opposite effects on the two compartments (98% vs 5%; 3% vs 95%).",3:"The cytosol is blocked by cycloheximide (3%), the eukaryotic-ribosome drug, not by chloramphenicol."}},
{id:"hB_comp_2",t:"u2comp",lvl:2,q:"The inner membrane of mitochondria contains large amounts of cardiolipin, a phospholipid otherwise found mainly in bacterial plasma membranes. The outer mitochondrial membrane has a lipid makeup similar to the host cell's plasma membrane. Which hypothesis best explains this difference?",
 opts:["Both membranes formed by infolding of the host cell's plasma membrane around the organelle","The outer membrane is the engulfed bacterium's own membrane; the inner is the host's","Cardiolipin diffused into the inner membrane from the cytosol after the mitochondrion formed","The inner membrane is the engulfed bacterium's own membrane; the outer is the host's"],a:3,
 why:"When the host engulfed the bacterium (a kind of endocytosis), the bacterium kept its own plasma membrane (now the inner membrane), and the host's membrane surrounded it (now the outer membrane). Bacterial-type lipids in the inner membrane fit this model.",
 wrong:{0:"Infolding would give both membranes host-like lipids; it doesn't explain bacterial cardiolipin in the inner membrane.",1:"Reversed: the bacterial lipid is in the inner membrane.",2:"That wouldn't explain why the lipid matches bacteria or why only the inner membrane has it."}},
{id:"hB_comp_3",t:"u2comp",lvl:2,fig:`<table style="border-collapse:collapse;font-size:15px"><caption style="caption-side:top;text-align:left;padding:2px 0 6px;font-weight:600">Relative enzyme activity</caption><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Lysosomal enzyme</th><th style="border:1px solid var(--line-2);padding:4px 10px">Activity at pH 4.8</th><th style="border:1px solid var(--line-2);padding:4px 10px">Activity at pH 7.2</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Protease</td><td style="border:1px solid var(--line-2);padding:4px 10px">100</td><td style="border:1px solid var(--line-2);padding:4px 10px">5</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Nuclease</td><td style="border:1px solid var(--line-2);padding:4px 10px">100</td><td style="border:1px solid var(--line-2);padding:4px 10px">4</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Lipase</td><td style="border:1px solid var(--line-2);padding:4px 10px">100</td><td style="border:1px solid var(--line-2);padding:4px 10px">6</td></tr></table>`,q:"Lysosomal enzymes were tested at the pH inside a lysosome (pH 4.8) and at the pH of the cytosol (pH 7.2). If a few lysosomes break open inside a cell, the cell is usually not harmed. Which explanation is best supported by the data?",
 opts:["Leaked enzymes barely work at the cytosol's pH, so the acidic compartment protects the cell","The enzymes are destroyed as soon as they touch the cytosol, so they cannot harm the cell","The cytosol contains no macromolecules, so the leaked enzymes have nothing to break down","The enzymes work faster in the cytosol, but the cell quickly replaces the damaged molecules"],a:0,
 why:"Each enzyme's activity falls to about 5% at pH 7.2. Keeping them inside an acidic compartment gives them the conditions they need and keeps their digestion separate from the rest of the cell. Even when a few leak, the pH difference is a backup safeguard.",
 wrong:{1:"The data show the enzymes still have some activity at pH 7.2 (4–6%); they're not destroyed, just much less active.",2:"The cytosol is full of proteins, nucleic acids and lipids.",3:"Activity drops sharply at pH 7.2 (for example, 100 → 5 for protease)."}},
{id:"hB_comp_4",t:"u2comp",lvl:2,q:"Cyanobacteria are prokaryotes that carry out photosynthesis on stacks of internal membranes (thylakoids) formed by infoldings of the plasma membrane. A mutant strain makes only about half as many thylakoid membranes as normal. In bright light, the mutant grows much more slowly. Which is the best explanation?",
 opts:["Without enough thylakoid membranes, the mutant cannot assemble the chloroplasts it needs","Thylakoid membranes are needed to enclose the cell's DNA in a nucleus before it can divide","Less internal membrane means less surface area for photosynthesis proteins, so less sugar is made","The mutant has a higher SA:V ratio, so it loses water faster than it can take it in by osmosis"],a:2,
 why:"Internal membranes increase surface area for reactions that happen on membranes. Halving the thylakoids halves the room for photosynthesis proteins, so the cell makes less sugar and grows more slowly. Same principle as the folded inner membrane of mitochondria.",
 wrong:{0:"Cyanobacteria are prokaryotes; they never have chloroplasts.",1:"Prokaryotes have no nucleus; their DNA is in the nucleoid.",3:"The mutation reduces internal membranes; it doesn't change the cell's size or outer surface."}},
{id:"hB_comp_5",t:"u2comp",lvl:2,q:"Which finding, if it were discovered, would most WEAKEN the hypothesis that chloroplasts came from an engulfed photosynthetic bacterium?",
 opts:["Chloroplast DNA is circular, and its sequences are most similar to cyanobacteria's","Chloroplasts divide by splitting in two, similar to bacterial binary fission","Chloroplasts have 70S ribosomes, while the plant cell's cytosol has 80S ribosomes","Cells that lost all their chloroplasts could rebuild them from ER membranes"],a:3,
 why:"A key piece of evidence is that chloroplasts only come from existing chloroplasts, like free-living cells. If a cell could make them from ER membranes, chloroplasts would behave like endomembrane organelles formed by infolding, not like descendants of bacteria.",
 wrong:{0:"This supports the hypothesis: it matches bacteria.",1:"This supports the hypothesis: new chloroplasts come from existing ones, like bacteria.",2:"This supports the hypothesis: the ribosomes match bacteria."}},
{id:"hB_comp_6",t:"u2comp",lvl:2,q:"Most of the proteins inside human mitochondria are coded by genes in the nucleus, made on ribosomes in the cytosol, and then imported. A student claims this disproves the endosymbiotic theory. Which response best evaluates the claim?",
 opts:["Supported: a once free-living cell would still make every one of its own proteins, so imported proteins show it never lived independently","Supported: proteins made on cytosolic ribosomes show that mitochondria formed by infolding of the host's membrane","Not supported: mitochondria keep their own DNA and 70S ribosomes, and a partner could lose genes to its host over time","Not supported: mitochondria make all of their own proteins on their own 70S ribosomes, just like bacteria do"],a:2,
 why:"Evaluate means weigh the evidence. Importing proteins shows the mitochondrion now depends on the host, which fits a partnership that is over a billion years old. It does not erase the evidence that mitochondria still have: their own circular DNA, 70S ribosomes, double membrane and division.",
 wrong:{0:"This ignores the evidence that remains (own DNA, 70S ribosomes, double membrane, division) and the long time the two cells have lived together.",1:"Where proteins are made doesn't show how the organelle's membranes formed; the double membrane and own DNA point to endosymbiosis.",3:"Right verdict, false reason: the stem says most mitochondrial proteins are imported from the cytosol."}},
{id:"hB_lab_1",t:"u2lab",lvl:2,type:"num",q:"A beet cylinder had an initial mass of 6.40 g. After soaking overnight in a sucrose solution, its mass was 5.92 g. Calculate the percent change in mass. (Type the number with its sign.)",
 answer:-7.5,tol:0.1,unit:"%",
 why:"% change = (final − initial) ÷ initial × 100 = (5.92 − 6.40) ÷ 6.40 × 100 = −0.48 ÷ 6.40 × 100 = −7.5%. The negative sign means the beet lost water, so the solution was hypertonic compared to the beet cells.",
 hint:"Subtract initial from final (keep the sign), then divide by the INITIAL mass."},
{id:"hB_lab_2",t:"u2lab",lvl:2,type:"num",fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Sucrose (M)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Class average % change in mass</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.1</td><td style="border:1px solid var(--line-2);padding:4px 10px">+6.2</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.2</td><td style="border:1px solid var(--line-2);padding:4px 10px">+2.6</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.3</td><td style="border:1px solid var(--line-2);padding:4px 10px">−1.3</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.4</td><td style="border:1px solid var(--line-2);padding:4px 10px">−4.9</td></tr></table>`,q:"Students soaked zucchini cores in sucrose solutions overnight. Using the class averages in the table, estimate the sucrose molarity at which the cores would neither gain nor lose mass. Round to two decimal places.",
 answer:0.27,tol:0.02,unit:"M",
 why:"The % change crosses 0 between 0.2 M (+2.6%) and 0.3 M (−1.3%). That interval drops 3.9 percentage points; reaching 0 from +2.6 takes 2.6 ÷ 3.9 of the way: 0.2 + 0.1 × (2.6 ÷ 3.9) = 0.27 M. On a graph, this is where the line crosses the x-axis.",
 hint:"Find the two concentrations where the sign changes, then figure out what fraction of the way between them the zero falls."},
{id:"hB_lab_3",t:"u2lab",lvl:2,fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Test on the cup water after 1 hour</th><th style="border:1px solid var(--line-2);padding:4px 10px">Result</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Biuret (protein)</td><td style="border:1px solid var(--line-2);padding:4px 10px">Negative</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Glucose test strip</td><td style="border:1px solid var(--line-2);padding:4px 10px">Positive</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Silver nitrate (Cl⁻)</td><td style="border:1px solid var(--line-2);padding:4px 10px">Positive</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Change in bag mass</td><td style="border:1px solid var(--line-2);padding:4px 10px">+1.2 g</td></tr></table>`,q:"A dialysis bag containing a protein (albumin), glucose and NaCl was placed in a cup of distilled water. Tests after one hour are shown. Which conclusion is supported by ALL of the data?",
 opts:["The bag gained mass because glucose moved into the bag from the cup along with water","Glucose and NaCl crossed but protein could not, so the bag stayed hypertonic and gained water","The protein crossed the tubing too, but there was too little of it in the cup to detect","Water moved out of the bag, because salt and glucose left the bag and water followed them"],a:1,
 why:"The cup tested positive for Cl⁻ and glucose, so both left the bag, from high concentration in the bag to low concentration in the cup. Protein was never found outside, so it can't cross. That trapped protein keeps the bag's solute concentration higher than the cup's, so water moved in by osmosis (+1.2 g).",
 wrong:{0:"Glucose was only inside at the start, and it was found in the cup afterward, so glucose moved out.",2:"No evidence supports this; the bag's mass gain is best explained by a solute that could not leave.",3:"The bag gained 1.2 g, so net water movement was INTO the bag."}},
{id:"hB_lab_4",t:"u2lab",lvl:2,q:"A student tries to find the water potential of sweet potato cells. She tests only 0.0 M, 0.1 M and 0.2 M sucrose, and the cores gain mass in every solution (+12%, +9%, +5%). What is the best conclusion?",
 opts:["The isotonic point is above 0.2 M, so she must test stronger solutions until cores lose mass","The isotonic point is 0.0 M, because the cores gained the most water in distilled water","She can find the exact isotonic point by extending her line beyond 0.2 M until it reaches 0%","The sweet potato cells have a water potential of 0 bars, because they gained mass in every solution"],a:0,
 why:"To find the x-intercept, the data have to bracket zero: some solutions must cause gains and others losses. All three here cause gains, so the cells are hypertonic compared to 0.2 M sucrose, and the isotonic point lies somewhere above 0.2 M.",
 wrong:{1:"Gaining mass in distilled water means the cells are hypertonic compared to 0.0 M, not isotonic with it.",2:"Her teacher's graphing rules say not to extend a line past the last point unless asked. She needs data on both sides of 0%.",3:"Gaining water means the cells have a LOWER (more negative) water potential than every solution tested."}},
{id:"hB_lab_5",t:"u2lab",lvl:2,fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Sucrose (M)</th><th style="border:1px solid var(--line-2);padding:4px 10px">White potato % change</th><th style="border:1px solid var(--line-2);padding:4px 10px">Sweet potato % change</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.0</td><td style="border:1px solid var(--line-2);padding:4px 10px">+14</td><td style="border:1px solid var(--line-2);padding:4px 10px">+20</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.2</td><td style="border:1px solid var(--line-2);padding:4px 10px">+3</td><td style="border:1px solid var(--line-2);padding:4px 10px">+12</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.4</td><td style="border:1px solid var(--line-2);padding:4px 10px">−7</td><td style="border:1px solid var(--line-2);padding:4px 10px">+4</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.6</td><td style="border:1px solid var(--line-2);padding:4px 10px">−14</td><td style="border:1px solid var(--line-2);padding:4px 10px">−3</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.8</td><td style="border:1px solid var(--line-2);padding:4px 10px">−19</td><td style="border:1px solid var(--line-2);padding:4px 10px">−9</td></tr></table>`,q:"Students repeated the potato-core lab with white potato and with sweet potato. Using the data, which comparison is correct?",
 opts:["White potato has the lower Ψ, because its cores lost more mass (−19% vs −9%) in 0.8 M sucrose","Sweet potato has the higher Ψ, because its cores gained more water (+20% vs +14%) in distilled water","Both have the same Ψ, because both kinds of cores gained mass in 0.0 M sucrose (distilled water)","Sweet potato has the lower Ψ, since it is isotonic with stronger sucrose (≈0.51 M vs ≈0.26 M)"],a:3,
 why:"White potato crosses 0% between 0.2 M (+3) and 0.4 M (−7): about 0.26 M. Sweet potato crosses between 0.4 M (+4) and 0.6 M (−3): about 0.51 M. More solute inside the sweet potato cells means a more negative Ψs, so a stronger solution is needed to match them.",
 wrong:{0:"The amount of mass lost in one solution doesn't give the cells' Ψ; the isotonic point (x-intercept) does.",1:"Gaining MORE water from pure water means the sweet potato's Ψ is further below 0, so it is lower, not higher.",2:"Gaining mass in pure water only shows both have Ψ below 0; their x-intercepts (0.26 M vs 0.51 M) are different."}},
{id:"hB_lab_6",t:"u2lab",lvl:2,q:"In the potato-core lab, one group forgot to blot the cores dry before weighing their FINAL masses, so a film of solution clung to every core. How would this error most likely affect their results?",
 opts:["% changes read too low, so the line crosses 0% at a lower molarity and Ψs comes out too close to 0","It would not matter, because calculating % change corrects for any differences in mass","% changes read too high, so the line crosses 0% at a higher molarity and Ψs comes out too negative","The line would cross 0% at the same molarity, because the error affects every core equally"],a:2,
 why:"Extra solution on each core makes every final mass too high, so every % change is shifted up. A line shifted up crosses 0% farther to the right, at a larger C. In Ψs = −iCRT, a larger C gives a more negative Ψs than the potato really has.",
 wrong:{0:"Extra liquid adds mass, so the final masses (and % changes) would be too high, not too low.",1:"% change corrects for different starting masses, not for extra liquid added to the final mass.",3:"Shifting every point UP moves the zero crossing to the right, even if the shift is the same for every core."}}
);

// ---- daily FRQs (about 10 minutes each, graded by Claude) ----
FRQ.push(
{id:"D2_trans_1",t:"u2trans",daily:true,title:"Potassium uptake by barley roots",
 stem:"Barley roots were placed in a solution containing 1 mM K⁺. One set of roots was kept in solution bubbled with air; the other set was kept in solution bubbled with nitrogen gas (no O₂). The K⁺ concentration inside the root cells was measured over 4 hours.",fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Time (h)</th><th style="border:1px solid var(--line-2);padding:4px 10px">K⁺ inside root cells, aerated (mM)</th><th style="border:1px solid var(--line-2);padding:4px 10px">K⁺ inside root cells, no O₂ (mM)</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0</td><td style="border:1px solid var(--line-2);padding:4px 10px">50</td><td style="border:1px solid var(--line-2);padding:4px 10px">50</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">1</td><td style="border:1px solid var(--line-2);padding:4px 10px">65</td><td style="border:1px solid var(--line-2);padding:4px 10px">51</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">2</td><td style="border:1px solid var(--line-2);padding:4px 10px">85</td><td style="border:1px solid var(--line-2);padding:4px 10px">52</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">4</td><td style="border:1px solid var(--line-2);padding:4px 10px">110</td><td style="border:1px solid var(--line-2);padding:4px 10px">52</td></tr></table>`,
 parts:[
  {verb:"Identify",text:"the type of transport that moves K⁺ into the root cells in the aerated solution. Support your answer with data.",pts:1,rubric:["Active transport, supported by data: K⁺ inside the root cells rose from 50 mM to 110 mM even though the solution had only 1 mM K⁺, so K⁺ moved from low K⁺ concentration to high K⁺ concentration (must cite numbers)"]},
  {verb:"Explain",text:"why K⁺ uptake stopped when the solution had no O₂.",pts:2,rubric:["Without O₂, the root cells' mitochondria can't carry out (aerobic) cellular respiration, so the cells make much less ATP","The pump proteins that move K⁺ against its concentration gradient require ATP (energy), so with little ATP the pumps stop and K⁺ stays at about 50–52 mM (must link ATP to pumping, not just 'no energy')"]},
  {verb:"Predict",text:"the effect on K⁺ uptake if a drug that blocks ATP production were added to the aerated roots at 2 hours. Justify your prediction.",pts:1,rubric:["Predicts K⁺ inside will stop rising (stay near 85 mM) or begin to fall, justified: without ATP the pump can't move K⁺ against its gradient (a prediction of what WILL happen is required)"]},
  {verb:"Evaluate",text:"a student's claim that K⁺ enters the roots by facilitated diffusion through K⁺ channels.",pts:1,rubric:["The claim is not supported: facilitated diffusion only moves K⁺ down its gradient (from high to low K⁺ concentration) and needs no energy, but here K⁺ accumulated to over 100 times the outside concentration and uptake stopped without O₂"]}
 ]},
{id:"D2_trans_2",t:"u2trans",daily:true,title:"What an amoeba eats and drinks",
 stem:"An amoeba was placed in water containing live yeast cells and a dissolved fluorescent dye that does not bind to any receptor. After 1 hour, the researchers counted yeast cells inside each amoeba and measured the dye inside vesicles. The experiment was repeated with a drug that blocks ATP production.",fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Condition</th><th style="border:1px solid var(--line-2);padding:4px 10px">Yeast cells inside each amoeba</th><th style="border:1px solid var(--line-2);padding:4px 10px">Dye inside vesicles (relative units)</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">No drug</td><td style="border:1px solid var(--line-2);padding:4px 10px">12</td><td style="border:1px solid var(--line-2);padding:4px 10px">100</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">+ drug (no ATP)</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.5</td><td style="border:1px solid var(--line-2);padding:4px 10px">8</td></tr></table>`,
 parts:[
  {verb:"Identify",text:"the type of endocytosis used to take in the yeast cells and the type used to take in the dye.",pts:1,rubric:["Yeast cells: phagocytosis; dye: pinocytosis (both needed)"]},
  {verb:"Describe",text:"how the amoeba's plasma membrane brings a yeast cell into the cell.",pts:1,rubric:["The plasma membrane (pseudopods) extends around the yeast cell and pinches off, enclosing the yeast cell in a vesicle (food vacuole) inside the amoeba"]},
  {verb:"Explain",text:"why the drug reduced both kinds of uptake. Use data in your answer.",pts:1,rubric:["Endocytosis requires energy (ATP) to reshape the membrane, form vesicles and move them; without ATP, yeast uptake fell from 12 to 0.5 cells and dye uptake fell from 100 to 8 units (must cite data)"]},
  {verb:"Predict",text:"what will happen to a yeast cell after it is inside the amoeba. Justify your prediction by naming the organelle involved.",pts:1,rubric:["The vesicle will fuse with a lysosome, and the lysosome's hydrolytic enzymes will break down (digest) the yeast cell's macromolecules into monomers the amoeba can use (must name lysosome)"]}
 ]},
{id:"D2_tonic_1",t:"u2tonic",daily:true,title:"Red blood cells and IV fluids",
 stem:"Samples of human red blood cells were placed in NaCl solutions of different concentrations (% NaCl by mass). After 30 minutes, researchers measured the percent of cells that had burst (hemolysis) and observed the shape of the remaining cells.",fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">NaCl (%)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Hemolysis (% of cells burst)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Shape of remaining cells</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.00</td><td style="border:1px solid var(--line-2);padding:4px 10px">100</td><td style="border:1px solid var(--line-2);padding:4px 10px">none left</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.30</td><td style="border:1px solid var(--line-2);padding:4px 10px">95</td><td style="border:1px solid var(--line-2);padding:4px 10px">swollen</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.45</td><td style="border:1px solid var(--line-2);padding:4px 10px">50</td><td style="border:1px solid var(--line-2);padding:4px 10px">swollen</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.60</td><td style="border:1px solid var(--line-2);padding:4px 10px">5</td><td style="border:1px solid var(--line-2);padding:4px 10px">slightly swollen</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.90</td><td style="border:1px solid var(--line-2);padding:4px 10px">0</td><td style="border:1px solid var(--line-2);padding:4px 10px">normal</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">1.50</td><td style="border:1px solid var(--line-2);padding:4px 10px">0</td><td style="border:1px solid var(--line-2);padding:4px 10px">shrunken</td></tr></table>`,
 parts:[
  {verb:"Identify",text:"the NaCl concentration that is isotonic to red blood cells. Support your answer with data.",pts:1,rubric:["0.90% NaCl is isotonic, because it is the only concentration with 0% hemolysis AND normal cell shape (0.60% still caused some bursting; 1.50% made cells shrink)"]},
  {verb:"Explain",text:"why most of the cells burst in 0.30% NaCl.",pts:2,rubric:["0.30% NaCl is hypotonic compared to the red blood cells (complete comparison required), so water moves by osmosis from the solution (high water concentration) into the cells (low water concentration)","Red blood cells are animal cells with no cell wall, so nothing pushes back against the incoming water, and the cells swell until they burst (lyse)"]},
  {verb:"Predict",text:"what will happen to an <i>Elodea</i> (pond plant) leaf cell placed in 0.30% NaCl. Justify your prediction.",pts:1,rubric:["The Elodea cell will gain water and become turgid (firm), but will NOT burst, because its cell wall pushes back (turgor pressure) and stops further water entry"]},
  {verb:"Evaluate",text:"a proposal to give a patient an IV of 0.9% glucose instead of 0.9% NaCl. (0.9% NaCl = 0.154 M; 0.9% glucose = 0.050 M.)",pts:1,rubric:["The proposal should be rejected: 0.9% NaCl gives about 0.31 M of particles (i = 2), but 0.9% glucose is only 0.050 M of particles, so it is hypotonic compared to the red blood cells; water would enter the cells and many would burst"]}
 ]},
{id:"D2_tonic_2",t:"u2tonic",daily:true,title:"Two crabs in an estuary",
 stem:"Researchers placed two species of crab in water of different salt concentrations and measured the total solute concentration of each crab's blood (in milliosmoles per liter, mOsm). Full-strength seawater is 1000 mOsm.",fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Outside water (mOsm)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Green crab blood (mOsm)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Spider crab blood (mOsm)</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">1000</td><td style="border:1px solid var(--line-2);padding:4px 10px">1000</td><td style="border:1px solid var(--line-2);padding:4px 10px">1000</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">800</td><td style="border:1px solid var(--line-2);padding:4px 10px">850</td><td style="border:1px solid var(--line-2);padding:4px 10px">800</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">600</td><td style="border:1px solid var(--line-2);padding:4px 10px">720</td><td style="border:1px solid var(--line-2);padding:4px 10px">600</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">400</td><td style="border:1px solid var(--line-2);padding:4px 10px">650</td><td style="border:1px solid var(--line-2);padding:4px 10px">400</td></tr></table>`,
 parts:[
  {verb:"Describe",text:"how the blood solute concentration of EACH crab changes as the outside water becomes more dilute.",pts:1,rubric:["Spider crab: blood concentration decreases and matches the outside water at every concentration (1000 → 400 mOsm); green crab: blood concentration also decreases but much less, staying above the outside water (1000 → 650 mOsm). Both crabs must be described"]},
  {verb:"Identify",text:"whether the green crab's blood is hypertonic, hypotonic, or isotonic compared to the 400 mOsm water, and the direction of net water movement.",pts:1,rubric:["The blood (650 mOsm) is hypertonic compared to the 400 mOsm water, so water moves by osmosis from the water into the crab's cells/blood (complete comparison required)"]},
  {verb:"Explain",text:"how the green crab keeps its blood solute concentration above that of the dilute water.",pts:2,rubric:["Gill cells take in salt ions (e.g., Na⁺, Cl⁻) from the water by active transport, moving them from low concentration in the water to high concentration in the blood, which requires ATP","The crab gets rid of the extra water that enters by osmosis (e.g., producing large amounts of dilute urine), so its blood stays more concentrated than the water"]},
  {verb:"Predict",text:"which crab is more likely to survive when heavy rain lowers the estuary water to 300 mOsm. Justify your prediction.",pts:1,rubric:["The green crab will survive, because it can regulate its blood concentration; the spider crab's blood would drop to about 300 mOsm, and its cells would take in water and swell until they are damaged (cite the pattern in the data)"]}
 ]},
{id:"D2_wp_1",t:"u2wp",daily:true,title:"Beet cells in salt and sugar",
 stem:"A beet cell has a solute potential (Ψs) of −9.2 bars and a pressure potential (Ψp) of +3.0 bars. It is placed in an open beaker containing 0.15 M KCl at 22 °C. (KCl dissociates into K⁺ and Cl⁻.) Use R = 0.0831 L·bar/mol·K.",
 parts:[
  {verb:"Calculate",text:"the solute potential of the KCl solution. Show your work and give your answer in a complete sentence.",pts:1,rubric:["Ψs = −(2)(0.15 mol/L)(0.0831 L·bar/mol·K)(295 K) = −7.35 bars; must use i = 2 and T = 295 K, include the negative sign and the unit bars, and be written as a sentence (e.g., 'The solute potential of the KCl solution is −7.35 bars.')"]},
  {verb:"Predict",text:"the direction of net water movement between the beet cell and the KCl solution. Justify with water potential values.",pts:1,rubric:["The beet cell's Ψ = −9.2 + 3.0 = −6.2 bars, which is higher than the solution's Ψ (−7.35 bars, since Ψp = 0 in an open beaker), so water will move out of the cell into the solution, from higher to lower water potential"]},
  {verb:"Calculate",text:"the pressure potential of the beet cell when it reaches equilibrium with the solution. Assume the cell's Ψs stays at −9.2 bars.",pts:1,rubric:["At equilibrium Ψ(cell) = Ψ(solution): −9.2 + Ψp = −7.35, so Ψp = +1.85 bars (accept +1.8 to +1.9 bars; sign and unit required)"]},
  {verb:"Explain",text:"why the same beet cell would respond differently in 0.15 M sucrose at 22 °C. Include a calculation.",pts:2,rubric:["Sucrose does not ionize (i = 1), so 0.15 M sucrose has Ψs = −(1)(0.15)(0.0831)(295) = −3.68 bars, only half as negative as 0.15 M KCl","−3.68 bars is higher than the cell's Ψ (−6.2 bars), so water would move INTO the cell instead of out, and the cell would become more turgid"]}
 ]},
{id:"D2_wp_2",t:"u2wp",daily:true,title:"Road salt and roadside trees",
 stem:"In winter, road crews spread NaCl on a highway. In spring, scientists measured the solute potential of the soil water at different distances from the road. The root cells of the maple trees along the road have a water potential of −6.0 bars. The soil temperature was 10 °C.",fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Distance from road (m)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Soil water Ψs (bars)</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">1</td><td style="border:1px solid var(--line-2);padding:4px 10px">−9.1</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">5</td><td style="border:1px solid var(--line-2);padding:4px 10px">−5.4</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">10</td><td style="border:1px solid var(--line-2);padding:4px 10px">−2.3</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">25</td><td style="border:1px solid var(--line-2);padding:4px 10px">−0.8</td></tr></table>`,
 parts:[
  {verb:"Identify",text:"the distances from the road at which maple roots will lose water to the soil. Support your answer with data.",pts:1,rubric:["At 1 m only: the soil water there has Ψ = −9.1 bars, which is lower than the roots' −6.0 bars; at 5, 10 and 25 m the soil Ψ (−5.4, −2.3, −0.8 bars) is higher than the roots', so the roots gain water there"]},
  {verb:"Calculate",text:"the concentration of NaCl in the soil water 1 m from the road. Show your work.",pts:1,rubric:["C = Ψs ÷ (−iRT) = −9.1 ÷ −(2)(0.0831)(283 K) = 0.19 M NaCl (accept 0.19–0.20 M); must use i = 2 and T = 283 K"]},
  {verb:"Explain",text:"why trees 1 m from the road wilt even though the soil there is wet.",pts:2,rubric:["Water moves from high water potential to low water potential; the root cells (−6.0 bars) have a higher Ψ than the salty soil water (−9.1 bars), so water moves out of the roots into the soil by osmosis","The cells lose water, so turgor pressure (Ψp) drops, the cells become flaccid or plasmolyzed, and the leaves wilt; the presence of water doesn't matter if its Ψ is lower than the roots'"]},
  {verb:"Predict",text:"how several days of heavy spring rain would affect the trees nearest the road. Justify your prediction.",pts:1,rubric:["The trees will recover (take up water), because rain dilutes/washes away the salt, raising the soil's Ψ above the roots' −6.0 bars so water moves back into the roots"]}
 ]},
{id:"D2_mech_1",t:"u2mech",daily:true,title:"Sodium leaving a squid axon",
 stem:"Squid nerve cells (axons) are large enough to inject substances directly. Researchers loaded an axon with radioactive Na⁺ and measured how fast radioactive Na⁺ left the cell into the surrounding seawater, which has a much higher Na⁺ concentration than the axon. Cyanide blocks ATP production.",fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Condition</th><th style="border:1px solid var(--line-2);padding:4px 10px">Na⁺ efflux (% of normal)</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Normal seawater</td><td style="border:1px solid var(--line-2);padding:4px 10px">100</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">+ cyanide</td><td style="border:1px solid var(--line-2);padding:4px 10px">10</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">+ cyanide, then ATP injected into axon</td><td style="border:1px solid var(--line-2);padding:4px 10px">85</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">K⁺-free seawater (no cyanide)</td><td style="border:1px solid var(--line-2);padding:4px 10px">30</td></tr></table>`,
 parts:[
  {verb:"Identify",text:"the membrane protein responsible for moving Na⁺ out of the axon, and the type of transport.",pts:1,rubric:["The Na⁺/K⁺ pump (sodium-potassium pump), by active transport (both needed)"]},
  {verb:"Explain",text:"why cyanide reduced Na⁺ efflux, and why injecting ATP into the poisoned axon restored it. Use data.",pts:2,rubric:["Na⁺ moves out from low Na⁺ concentration in the axon to high Na⁺ concentration in the seawater, against its gradient, which requires energy; cyanide stops ATP production, so efflux fell to 10% of normal","Injected ATP gives the pump the energy it needs directly (ATP powers the pump's shape change), so efflux returned to 85% even though cyanide was still present, showing ATP (not something else cyanide affects) is the energy source"]},
  {verb:"Explain",text:"why removing K⁺ from the seawater also reduced Na⁺ efflux, even though ATP was present.",pts:1,rubric:["The pump moves 3 Na⁺ out and 2 K⁺ in during each cycle; without K⁺ outside to bind, the pump can't complete its cycle, so Na⁺ efflux fell to 30%"]},
  {verb:"Predict",text:"what will happen to the Na⁺ concentration inside a cyanide-treated axon over the next several hours. Justify your prediction.",pts:1,rubric:["The Na⁺ concentration inside will increase, because Na⁺ keeps leaking in down its gradient (from high Na⁺ in seawater to low Na⁺ inside) through channels while the pump no longer removes it"]}
 ]},
{id:"D2_mech_2",t:"u2mech",daily:true,title:"Keeping the lysosome acidic",
 stem:"A lysosome's membrane contains a proton pump that uses ATP to move H⁺ from the cytosol (pH 7.2) into the lysosome (pH 4.8). Researchers treated cells with bafilomycin, a drug that blocks this pump, and measured lysosomal pH and the rate at which lysosomes broke down proteins.",fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Time after bafilomycin (min)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Lysosome pH</th><th style="border:1px solid var(--line-2);padding:4px 10px">Protein breakdown (% of control)</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0</td><td style="border:1px solid var(--line-2);padding:4px 10px">4.8</td><td style="border:1px solid var(--line-2);padding:4px 10px">100</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">15</td><td style="border:1px solid var(--line-2);padding:4px 10px">5.4</td><td style="border:1px solid var(--line-2);padding:4px 10px">60</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">30</td><td style="border:1px solid var(--line-2);padding:4px 10px">6.0</td><td style="border:1px solid var(--line-2);padding:4px 10px">30</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">60</td><td style="border:1px solid var(--line-2);padding:4px 10px">6.5</td><td style="border:1px solid var(--line-2);padding:4px 10px">15</td></tr></table>`,
 parts:[
  {verb:"Describe",text:"the movement of H⁺ by the proton pump relative to the H⁺ concentration gradient.",pts:1,rubric:["H⁺ moves from low H⁺ concentration in the cytosol (pH 7.2) to high H⁺ concentration in the lysosome (pH 4.8), against its concentration gradient (lower pH = higher H⁺ concentration)"]},
  {verb:"Explain",text:"why bafilomycin raises the pH inside lysosomes. Use data.",pts:1,rubric:["With the pump blocked, H⁺ is no longer moved into the lysosome, and H⁺ that leaks out down its gradient isn't replaced, so the H⁺ concentration falls and pH rises from 4.8 to 6.5 over 60 minutes"]},
  {verb:"Explain",text:"why protein breakdown slows as lysosomal pH rises.",pts:1,rubric:["Lysosomal (hydrolytic) enzymes work best at acidic pH; at a higher pH their shape (tertiary structure / active site) is altered, so they hydrolyze proteins more slowly (100 → 15 units)"]},
  {verb:"Predict",text:"what will build up inside cells treated with bafilomycin for several days. Justify your prediction.",pts:1,rubric:["Undigested macromolecules (proteins, and engulfed material) will build up inside lysosomes/vesicles, because the enzymes can't break them down into monomers at the higher pH"]}
 ]},
{id:"D2_comp_1",t:"u2comp",daily:true,title:"An amoeba with a captured cyanobacterium",
 stem:"The amoeba <i>Paulinella</i> contains photosynthetic structures called chromatophores, which scientists think were acquired much more recently than chloroplasts. Each chromatophore has two surrounding membranes, a circular DNA molecule, and 70S ribosomes, and it divides in step with the host cell. Its DNA is about 1 million base pairs long, compared with about 3 million in free-living cyanobacteria. Some proteins it needs are coded by genes in the amoeba's nucleus.",
 parts:[
  {verb:"Describe",text:"how the chromatophore most likely originated.",pts:1,rubric:["An ancestral Paulinella engulfed a free-living photosynthetic prokaryote (cyanobacterium) by endocytosis/phagocytosis, did not digest it, and the two came to live together in a mutually beneficial relationship"]},
  {verb:"Explain",text:"how TWO of the features described support your answer in part (a).",pts:2,rubric:["One feature linked to bacteria, e.g., circular DNA and 70S ribosomes match prokaryotes, not the host's nucleus and 80S ribosomes","A second, different feature with reasoning, e.g., the two membranes (inner from the cyanobacterium, outer from the host's engulfing membrane) or division like binary fission"]},
  {verb:"Explain",text:"why a chromatophore removed from the amoeba could not survive on its own. Use data.",pts:1,rubric:["Its DNA is only about 1 million base pairs (one-third of a free-living cyanobacterium's 3 million), and some of its proteins are coded in the host's nucleus, so it has lost genes it would need to live independently"]}
 ]},
{id:"D2_comp_2",t:"u2comp",daily:true,title:"Folded membranes and ATP",
 stem:"Researchers compared mitochondria from three types of mouse cells. They measured the total area of the inner mitochondrial membrane (the folded cristae) per mitochondrion and the rate of ATP production per mitochondrion.",fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Cell type</th><th style="border:1px solid var(--line-2);padding:4px 10px">Inner membrane area per mitochondrion (µm²)</th><th style="border:1px solid var(--line-2);padding:4px 10px">ATP production (relative units)</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Heart muscle</td><td style="border:1px solid var(--line-2);padding:4px 10px">30</td><td style="border:1px solid var(--line-2);padding:4px 10px">100</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Liver</td><td style="border:1px solid var(--line-2);padding:4px 10px">10</td><td style="border:1px solid var(--line-2);padding:4px 10px">35</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Skin fibroblast</td><td style="border:1px solid var(--line-2);padding:4px 10px">6</td><td style="border:1px solid var(--line-2);padding:4px 10px">20</td></tr></table>`,
 parts:[
  {verb:"Describe",text:"the relationship between inner membrane area and ATP production shown in the data.",pts:1,rubric:["As inner membrane area per mitochondrion increases, the rate of ATP production increases (e.g., 6 µm² → 20 units in fibroblasts vs 30 µm² → 100 units in heart muscle); must include direction and cite data"]},
  {verb:"Explain",text:"how folding of the inner membrane allows heart muscle mitochondria to produce more ATP.",pts:1,rubric:["The folded inner membrane (cristae) increases surface area, so more of the membrane proteins that carry out the ATP-producing reactions of cellular respiration fit in each mitochondrion"]},
  {verb:"Explain",text:"how enclosing these reactions inside the mitochondrion benefits the cell.",pts:1,rubric:["Compartmentalization keeps the reactions of cellular respiration separate from other (competing) reactions in the cytosol and lets the mitochondrion keep its own conditions (e.g., concentration gradients across the inner membrane)"]},
  {verb:"Justify",text:"the claim that aerobic bacteria can make ATP without mitochondria.",pts:1,rubric:["Bacteria carry out the same reactions on infolded regions of their plasma membrane, which provide membrane surface area without membrane-bound organelles; their small size (high SA:V) also helps"]}
 ]},
{id:"D2_lab_1",t:"u2lab",daily:true,title:"Cucumber cores and water potential",
 stem:"Students soaked cucumber cores in sucrose solutions overnight at 21 °C and recorded each core's initial and final mass.",fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Sucrose (M)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Initial mass (g)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Final mass (g)</th><th style="border:1px solid var(--line-2);padding:4px 10px">% change in mass</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.0</td><td style="border:1px solid var(--line-2);padding:4px 10px">5.20</td><td style="border:1px solid var(--line-2);padding:4px 10px">5.83</td><td style="border:1px solid var(--line-2);padding:4px 10px">+12.12</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.2</td><td style="border:1px solid var(--line-2);padding:4px 10px">5.10</td><td style="border:1px solid var(--line-2);padding:4px 10px">5.36</td><td style="border:1px solid var(--line-2);padding:4px 10px">+5.10</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.4</td><td style="border:1px solid var(--line-2);padding:4px 10px">5.30</td><td style="border:1px solid var(--line-2);padding:4px 10px">5.19</td><td style="border:1px solid var(--line-2);padding:4px 10px">?</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.6</td><td style="border:1px solid var(--line-2);padding:4px 10px">5.25</td><td style="border:1px solid var(--line-2);padding:4px 10px">4.83</td><td style="border:1px solid var(--line-2);padding:4px 10px">−8.00</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0.8</td><td style="border:1px solid var(--line-2);padding:4px 10px">5.15</td><td style="border:1px solid var(--line-2);padding:4px 10px">4.62</td><td style="border:1px solid var(--line-2);padding:4px 10px">−10.29</td></tr></table>`,
 parts:[
  {verb:"Calculate",text:"the percent change in mass for the core in 0.4 M sucrose. Show your work.",pts:1,rubric:["(5.19 − 5.30) ÷ 5.30 × 100 = −2.08% (accept −2.1%); negative sign required"]},
  {verb:"Determine",text:"the sucrose molarity that is isotonic to the cucumber cells. Show how you used the data.",pts:1,rubric:["About 0.34 M (accept 0.32–0.36 M): the % change goes from +5.10% at 0.2 M to −2.08% at 0.4 M, so it crosses 0% between them: 0.2 + 0.2 × (5.10 ÷ 7.18) ≈ 0.34 M"]},
  {verb:"Calculate",text:"the solute potential of the cucumber cells. Give your answer in a complete sentence.",pts:1,rubric:["Ψs = −(1)(0.34 mol/L)(0.0831 L·bar/mol·K)(294 K) ≈ −8.3 bars (accept a value consistent with their part b answer); must use T = 294 K, include the negative sign and bars, in a sentence"]},
  {verb:"Predict",text:"how the isotonic concentration would change if the cores had been left out in dry air for 2 hours before the experiment. Justify your prediction.",pts:1,rubric:["The isotonic concentration would be higher (line shifts right), because the cores lose water to the air, which concentrates the solutes in the cells and makes their water potential more negative, so a stronger sucrose solution is needed to match them"]}
 ]},
{id:"D2_lab_2",t:"u2lab",daily:true,title:"Does temperature speed up osmosis?",
 stem:"A student wants to test whether temperature affects the rate of osmosis. She fills dialysis bags with 0.5 M sucrose, places each bag in a beaker of distilled water at 10 °C, 25 °C, or 40 °C, and weighs the bags after 30 minutes. Her results are shown.",fig:`<table style="border-collapse:collapse;font-size:15px"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Temperature (°C)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Initial bag mass (g)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Mass gained after 30 min (g)</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">10</td><td style="border:1px solid var(--line-2);padding:4px 10px">18.0</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.8</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">25</td><td style="border:1px solid var(--line-2);padding:4px 10px">22.0</td><td style="border:1px solid var(--line-2);padding:4px 10px">1.4</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">40</td><td style="border:1px solid var(--line-2);padding:4px 10px">25.0</td><td style="border:1px solid var(--line-2);padding:4px 10px">2.1</td></tr></table>`,
 parts:[
  {verb:"Identify",text:"the independent variable, the dependent variable, and TWO variables that should be held constant.",pts:1,rubric:["IV: temperature (°C); DV: change in bag mass (or % change in mass) after 30 minutes; two controlled variables such as sucrose concentration in the bag, volume/type of solution, bag size/type of tubing, time (all four parts needed)"]},
  {verb:"Describe",text:"an appropriate negative control for this experiment.",pts:1,rubric:["A dialysis bag filled with distilled water (no sucrose) placed in distilled water at each temperature, which should show no net change in mass, so any mass change in the experimental bags is due to the sucrose gradient"]},
  {verb:"Calculate",text:"the percent change in mass for each bag, and use the results to evaluate the student's conclusion that 'the bag at 40 °C gained the most water because it was the biggest.'",pts:2,rubric:["Correct % changes: 10 °C: 0.8 ÷ 18 × 100 = 4.4%; 25 °C: 1.4 ÷ 22 × 100 = 6.4%; 40 °C: 2.1 ÷ 25 × 100 = 8.4%","The conclusion is not supported: even after correcting for the different starting masses, % change still increases with temperature (4.4% → 6.4% → 8.4%), so temperature, not bag size, explains the difference"]},
  {verb:"Explain",text:"why higher temperature would increase the rate of osmosis.",pts:1,rubric:["At higher temperature, water molecules have more kinetic energy and move faster, so more water molecules cross the membrane per minute from the distilled water (high water concentration) into the bag (low water concentration)"]}
 ]}
);

// ================= MOCK UNIT 2 TEST (held out: mock:true — never shown in daily practice) =================
// 25 MCQ (MK_1..MK_25, all lvl:2) + 4 FRQ (MKF_1..MKF_4). Question sets: MK_1–MK_2 (temperature blocks on a membrane glycoprotein), MK_19–MK_21 (guard cells).
MCQ.push(
{id:"MK_1",t:"u2endo",lvl:2,mock:true,q:"Hamster cells make a fluorescent viral glycoprotein that normally ends up in the plasma membrane. At 40 °C this mutant protein misfolds and is held in the rough ER. After 2 hours at 40 °C, protein synthesis was blocked and the cells were kept at 40 °C or moved to 32 °C or 20 °C for 60 minutes (table). Which conclusion about the cells moved to 20 °C is best supported?",
 fig:`<table style="border-collapse:collapse;font-size:15px;margin:4px 0"><caption style="text-align:left;font-weight:700;padding-bottom:4px">Percent of the fluorescent glycoprotein in each location</caption><tr><th style="border:1px solid var(--line-2);padding:4px 10px">60 min at…</th><th style="border:1px solid var(--line-2);padding:4px 10px">Rough ER</th><th style="border:1px solid var(--line-2);padding:4px 10px">Golgi</th><th style="border:1px solid var(--line-2);padding:4px 10px">Vesicles in cytoplasm</th><th style="border:1px solid var(--line-2);padding:4px 10px">Plasma membrane</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">40 °C (kept)</td><td style="border:1px solid var(--line-2);padding:4px 10px">94%</td><td style="border:1px solid var(--line-2);padding:4px 10px">4%</td><td style="border:1px solid var(--line-2);padding:4px 10px">2%</td><td style="border:1px solid var(--line-2);padding:4px 10px">0%</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">32 °C</td><td style="border:1px solid var(--line-2);padding:4px 10px">6%</td><td style="border:1px solid var(--line-2);padding:4px 10px">10%</td><td style="border:1px solid var(--line-2);padding:4px 10px">6%</td><td style="border:1px solid var(--line-2);padding:4px 10px">78%</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">20 °C</td><td style="border:1px solid var(--line-2);padding:4px 10px">9%</td><td style="border:1px solid var(--line-2);padding:4px 10px">80%</td><td style="border:1px solid var(--line-2);padding:4px 10px">7%</td><td style="border:1px solid var(--line-2);padding:4px 10px">4%</td></tr></table>`,
 opts:["The protein left the rough ER but was held in the Golgi, because the step that sends it on toward the plasma membrane is blocked at 20 °C.","The protein could not leave the rough ER at 20 °C, because the cold kept the protein misfolded in the same way that 40 °C did.","The protein was made in the Golgi at 20 °C, because the Golgi held 80% of the protein even though the rough ER was not making any.","The protein reached the plasma membrane and was then returned to the Golgi by endocytosis, because cold speeds up endocytosis."],a:0,
 why:"Only 9% stayed in the rough ER, so the protein could leave the ER at 20 °C. But 80% piled up in the Golgi and only 4% reached the plasma membrane (vs 78% at 32 °C), so the Golgi → vesicle → plasma membrane step is the one blocked by cold.",
 wrong:{1:"At 20 °C only 9% of the protein was left in the rough ER (vs 94% at 40 °C), so it clearly left the ER.",2:"Protein synthesis had been blocked, and the protein was already made (held in the rough ER at 40 °C). The Golgi modifies and sorts proteins; it doesn't make them.",3:"Only 4% ever appeared in the plasma membrane at 20 °C, so there was almost nothing there to bring back. Nothing in the data supports the claim about endocytosis."}},
{id:"MK_2",t:"u2endo",lvl:2,mock:true,q:"Hamster cells make a fluorescent viral glycoprotein that normally ends up in the plasma membrane. At 40 °C this mutant protein misfolds and is held in the rough ER. After 2 hours at 40 °C, protein synthesis was blocked and the cells were kept at 40 °C or moved to 32 °C or 20 °C for 60 minutes (table). In the cells moved to 32 °C, the glycoprotein ends up in the plasma membrane instead of being released outside the cell like a secreted protein. Which explanation is best?",
 fig:`<table style="border-collapse:collapse;font-size:15px;margin:4px 0"><caption style="text-align:left;font-weight:700;padding-bottom:4px">Percent of the fluorescent glycoprotein in each location</caption><tr><th style="border:1px solid var(--line-2);padding:4px 10px">60 min at…</th><th style="border:1px solid var(--line-2);padding:4px 10px">Rough ER</th><th style="border:1px solid var(--line-2);padding:4px 10px">Golgi</th><th style="border:1px solid var(--line-2);padding:4px 10px">Vesicles in cytoplasm</th><th style="border:1px solid var(--line-2);padding:4px 10px">Plasma membrane</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">40 °C (kept)</td><td style="border:1px solid var(--line-2);padding:4px 10px">94%</td><td style="border:1px solid var(--line-2);padding:4px 10px">4%</td><td style="border:1px solid var(--line-2);padding:4px 10px">2%</td><td style="border:1px solid var(--line-2);padding:4px 10px">0%</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">32 °C</td><td style="border:1px solid var(--line-2);padding:4px 10px">6%</td><td style="border:1px solid var(--line-2);padding:4px 10px">10%</td><td style="border:1px solid var(--line-2);padding:4px 10px">6%</td><td style="border:1px solid var(--line-2);padding:4px 10px">78%</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">20 °C</td><td style="border:1px solid var(--line-2);padding:4px 10px">9%</td><td style="border:1px solid var(--line-2);padding:4px 10px">80%</td><td style="border:1px solid var(--line-2);padding:4px 10px">7%</td><td style="border:1px solid var(--line-2);padding:4px 10px">4%</td></tr></table>`,
 opts:["The protein is too large to leave by exocytosis, because only small proteins fit inside the vesicles that fuse with the membrane.","The vesicles carrying the protein fuse back with the Golgi instead of the plasma membrane, so the protein never leaves the cell.","Its hydrophobic region stays embedded in the vesicle membrane, and when the vesicle fuses, that membrane becomes plasma membrane.","The protein is moved into the plasma membrane by active transport, because it is moving against its own concentration gradient."],a:2,
 why:"A membrane protein is inserted into the ER membrane with its hydrophobic region inside the bilayer. It stays in the membrane of every vesicle it travels in. When the last vesicle fuses with the plasma membrane, the vesicle membrane, with the protein in it, becomes part of the plasma membrane.",
 wrong:{0:"Vesicles carry very large proteins (for example antibodies and digestive enzymes) out of cells. Size isn't why this protein stays in the membrane.",1:"At 32 °C, 78% of the protein reached the plasma membrane, so its vesicles did fuse with the plasma membrane.",3:"Active transport moves small solutes across a membrane through a pump. Proteins reach the plasma membrane in vesicles, not through pumps."}},
{id:"MK_3",t:"u2cells",lvl:2,mock:true,q:"The table compares three animal cell types. A drug that destroys only the nucleolus is added to silk gland cells, which export large amounts of silk protein. Which prediction is best supported?",
 fig:`<table style="border-collapse:collapse;font-size:15px;margin:4px 0"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Cell type</th><th style="border:1px solid var(--line-2);padding:4px 10px">Nucleolus (% of nucleus volume)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Protein made (relative units/hour)</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Silk gland cell (silkworm)</td><td style="border:1px solid var(--line-2);padding:4px 10px">24%</td><td style="border:1px solid var(--line-2);padding:4px 10px">100</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Skin fibroblast</td><td style="border:1px solid var(--line-2);padding:4px 10px">7%</td><td style="border:1px solid var(--line-2);padding:4px 10px">20</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Mature sperm cell</td><td style="border:1px solid var(--line-2);padding:4px 10px">&lt;1%</td><td style="border:1px solid var(--line-2);padding:4px 10px">1</td></tr></table>`,
 opts:["Silk output would fall but cytosolic enzymes would not, because the nucleolus makes only the ribosomes that attach to the rough ER.","Protein output would fall over time in both the cytosol and the rough ER, because no new ribosomes could replace worn-out ones.","Protein output would stop at once, because the nucleolus is the place where the mRNA for silk protein is translated into protein.","Protein output would not change, because ribosomes are assembled in the cytosol from parts that do not come from the nucleolus."],a:1,
 why:"The nucleolus makes rRNA and assembles ribosome subunits. The table shows that cells making more protein have larger nucleoli (24% vs <1%). Without a nucleolus, existing ribosomes keep working for a while, but they can't be replaced, so protein output by both free and bound ribosomes falls.",
 wrong:{0:"Free and bound ribosomes are the same kind of ribosome, and both are assembled from subunits made in the nucleolus.",2:"Translation happens at ribosomes in the cytoplasm, not in the nucleolus. Ribosomes already made would keep working for a while.",3:"Ribosomal RNA is made, and ribosome subunits are assembled, in the nucleolus, so ribosome production would stop."}},
{id:"MK_4",t:"u2cells",lvl:2,mock:true,q:"In many mature plant cells the central vacuole fills 80–90% of the cell, so the cytoplasm is a thin layer (about 1–3 µm thick) just inside the plasma membrane. An animal cell of the same size would be filled with cytoplasm. Which is the best explanation of how this arrangement benefits a large plant cell?",
 opts:["The vacuole raises the cell’s SA:V ratio, because water-filled space does not count as part of a cell’s volume.","The vacuole holds the cell’s ribosomes and mitochondria, so the thin cytoplasm needs fewer organelles of its own.","The vacuole makes the cell hypotonic to its surroundings, so water leaves the cell and it can never burst.","The working cytoplasm lies close to the plasma membrane, so materials diffuse only a short way even in a large cell."],a:3,
 why:"Exchange with the surroundings happens across the plasma membrane, and the reactions that use those materials happen in the cytoplasm. Keeping the cytoplasm in a thin layer means every part of it is within a few µm of the membrane, even though the whole cell has a low SA:V ratio.",
 wrong:{0:"The vacuole is part of the cell’s volume; the SA:V ratio depends only on the cell’s size and shape.",1:"Ribosomes and mitochondria are in the cytoplasm. The vacuole stores water, ions and other substances.",2:"Plant cells are usually hypertonic compared to their surroundings, so water enters, and the wall prevents bursting."}},
{id:"MK_5",t:"u2endo",lvl:2,mock:true,q:"Macrophages engulf bacteria by phagocytosis, and the vesicle that forms normally fuses with lysosomes. The bacterium that causes tuberculosis releases a protein that prevents its vesicle from fusing with lysosomes. Which outcome is most likely?",
 opts:["The bacteria are still digested, because the vesicle made by phagocytosis produces its own hydrolytic enzymes.","The bacteria survive and can multiply in the vesicle, because hydrolytic enzymes from lysosomes never reach them.","The macrophage digests itself, because lysosomes that cannot fuse with the vesicle burst open in the cytosol.","The bacteria are expelled by exocytosis, because a vesicle that can’t fuse with a lysosome goes to the plasma membrane."],a:1,
 why:"Hydrolytic enzymes are delivered to the engulfed bacterium only when a lysosome fuses with its vesicle. If fusion is blocked, the bacterium sits in a vesicle with no digestive enzymes, so it survives, which is how TB bacteria persist inside the very cells meant to kill them.",
 wrong:{0:"The vesicle is just pinched-off plasma membrane with no enzymes. The hydrolytic enzymes come from lysosomes, which are made by the Golgi.",2:"Blocking fusion doesn't damage the lysosomes. They just stay separate from the vesicle.",3:"Nothing in the scenario redirects the vesicle, and the bacterium’s strategy is to stay inside the macrophage."}},
{id:"MK_6",t:"u2cyto",lvl:2,mock:true,q:"Each microvillus on an intestinal lining cell is supported by a core bundle of actin filaments. Cytochalasin D prevents actin from assembling into filaments. If intestinal tissue is treated with cytochalasin D, which result is most likely?",
 opts:["Cilia on the cells stop beating, because cilia are built from actin, so food is no longer pushed along the intestine.","The nucleus loses its shape and position, because the nuclear lamina and the fibers anchoring it are made of actin.","The microvilli shorten or collapse, so the membrane surface area available for absorbing nutrients decreases.","Vesicles stop moving from the Golgi, because kinesin carries vesicles by walking along actin filaments."],a:2,
 why:"Microfilaments (actin) form the core that holds each microvillus up. Without them, the microvilli collapse and the extra membrane area they provide for absorption is lost.",
 wrong:{0:"Cilia are built from microtubules (tubulin) in a 9 + 2 pattern, not actin.",1:"The nuclear lamina and the fibers that anchor the nucleus are intermediate filaments, not actin.",3:"Kinesin walks along microtubules, not actin filaments."}},
{id:"MK_7",t:"u2size",lvl:2,mock:true,q:"A human red blood cell is a flattened, biconcave disc with a volume of about 90 µm³ and a surface area of about 136 µm². A sphere with the same volume would have a radius of about 2.8 µm (SA = 4πr², V = 4/3 πr³). Which statement is best supported?",
 opts:["The sphere’s SA:V would be about 1.5:1 and the disc’s about 1.1:1, because a sphere has the most surface for its volume.","The disc and the sphere have equal SA:V ratios, because two cells with the same volume must have the same ratio.","The disc’s SA:V is about 0.66:1 (90 ÷ 136), so the flattened shape actually slows the exchange of O₂ with the blood.","The disc’s SA:V is about 1.5:1 versus about 1.1:1 for a sphere, giving more membrane per unit of volume for O₂ exchange."],a:3,
 why:"Disc: 136 ÷ 90 = 1.5:1. Sphere: SA = 4π(2.8)² ≈ 97 µm², so 97 ÷ 90 ≈ 1.1:1 (or 3/r = 1.1). The flattened shape gives about 40% more membrane per µm³ of cell, so O₂ diffuses in and out faster.",
 wrong:{0:"This swaps the two values. A sphere has the LEAST surface area for its volume, so any flattened shape has a higher SA:V.",1:"Shape changes surface area even when the volume stays the same: 136 µm² for the disc vs about 97 µm² for the sphere.",2:"This divides V by SA. SA:V is surface area ÷ volume = 136 ÷ 90 = 1.5:1, which is higher than the sphere’s ratio."}},
{id:"MK_8",t:"u2size",lvl:2,mock:true,q:"Students soak a 4 cm agar cube (with a pH indicator) in acid. Another group cuts an identical 4 cm cube into eight 2 cm cubes and soaks all eight. In 10 minutes the acid moves 0.5 cm inward from every surface in both setups. Which statement correctly compares the two setups?",
 opts:["Total surface area doubles (96 → 192 cm²), and the percent of agar the acid reaches rises from about 58% to about 88%.","Total surface area stays at 96 cm², because cutting doesn’t change the volume of agar, so about 58% is reached either way.","Total surface area doubles, but the percent reached stays near 58%, because the acid still moves only 0.5 cm in 10 minutes.","Total surface area increases eightfold (96 → 768 cm²), so the acid reaches 100% of the agar in the eight smaller cubes."],a:0,
 why:"One 4 cm cube: SA = 6 × 16 = 96 cm²; unreached core = 3 cm cube, so reached = 1 − 27/64 = 57.8%. Eight 2 cm cubes: SA = 8 × 24 = 192 cm²; each unreached core = 1 cm cube, so reached = 1 − 1/8 = 87.5%. Same volume, more surface, so more of the agar is reached.",
 wrong:{1:"Cutting exposes new faces. Each 2 cm cube has 24 cm² of surface, and 8 × 24 = 192 cm².",2:"The depth is the same, but in 2 cm cubes a 0.5 cm layer is a much larger fraction of each cube: 87.5% vs 57.8%.",3:"8 × 96 would be eight 4 cm cubes. Each small cube has only 24 cm² (8 × 24 = 192), and a 1 cm core in each cube is still unreached."}},
{id:"MK_9",t:"u2mem",lvl:2,mock:true,q:"Researchers extracted all the lipids from a sample of red blood cells (which have no internal membranes) and spread them on water, where phospholipids form a layer one molecule thick. The table compares that layer’s area with the total surface area of the cells. Which conclusion is best supported?",
 fig:`<table style="border-collapse:collapse;font-size:15px;margin:4px 0"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Measurement</th><th style="border:1px solid var(--line-2);padding:4px 10px">Area</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Total surface area of the red blood cells</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.47 m²</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Area covered by the extracted lipid layer on water</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.92 m²</td></tr></table>`,
 opts:["The plasma membrane is one layer of phospholipids thick, because the lipid layer covered about the same area as the cells’ surface.","The plasma membrane is two layers of phospholipids thick, because the lipid layer covered about twice the cells’ surface area.","Half of the lipids came from membranes inside the cells, because the lipid layer covered about twice the cells’ surface area.","The membrane is mostly protein, because the lipid layer covered only about half of the area needed to surround the cells."],a:1,
 why:"0.92 ÷ 0.47 ≈ 2. A layer one molecule thick covered twice the cells’ surface, so the membrane around each cell must hold two layers of phospholipids: a bilayer.",
 wrong:{0:"The lipid layer covered 0.92 m², about twice (not the same as) the cells’ 0.47 m².",2:"The stem says these cells have no internal membranes, so all the lipid came from the plasma membrane.",3:"The lipids covered MORE area than the cell surface (0.92 vs 0.47 m²), not half of it."}},
{id:"MK_10",t:"u2mem",lvl:2,mock:true,q:"Cells of red Swiss chard stems store a red pigment in their central vacuoles. Stem pieces were rinsed, held in water at different temperatures for 1 minute, and then placed in room-temperature water for 30 minutes. The table shows how much pigment ended up in the water. Which explanation best accounts for the data?",
 fig:`<table style="border-collapse:collapse;font-size:15px;margin:4px 0"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Temperature for 1 min (°C)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Pigment in water (absorbance)</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">20</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.05</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">40</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.08</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">55</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.45</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">70</td><td style="border:1px solid var(--line-2);padding:4px 10px">1.20</td></tr></table>`,
 opts:["Above about 40 °C the membranes became too fluid and their proteins denatured, so they lost selective permeability.","Heat changed the pigment molecules into small nonpolar molecules, so they diffused through the intact bilayer faster.","Heat switched on pumps in the plasma membrane, which moved the pigment out of the cells by active transport.","Heat dissolved the cell walls, and the cell wall is the barrier that normally keeps the red pigment in the cells."],a:0,
 why:"Pigment in the water barely changed from 20 °C to 40 °C (0.05 → 0.08) but jumped at 55 °C and 70 °C (0.45 and 1.20). High heat makes the bilayer much more fluid and denatures membrane proteins, so the membranes stop acting as selective barriers and the pigment leaks out.",
 wrong:{1:"Nothing suggests the pigment changed. A large polar pigment stays out of an intact bilayer, so the leak points to damaged membranes.",2:"Pumps need ATP and specific proteins; heat high enough to cause this leak denatures proteins rather than switching pumps on.",3:"Cell walls are freely permeable, so they never held the pigment in. The selective barriers are the vacuole membrane and plasma membrane."}},
{id:"MK_11",t:"u2mem",lvl:2,mock:true,q:"Researchers tagged molecules in a cell’s plasma membrane with a fluorescent label, then used a laser to bleach (permanently darken) a small spot. They measured how much brightness returned to the spot within 60 seconds as unbleached molecules moved in from elsewhere in the membrane. Which conclusion is best supported?",
 fig:`<table style="border-collapse:collapse;font-size:15px;margin:4px 0"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Labeled molecule</th><th style="border:1px solid var(--line-2);padding:4px 10px">% of brightness recovered in 60 s</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Phospholipid</td><td style="border:1px solid var(--line-2);padding:4px 10px">98%</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Membrane protein A</td><td style="border:1px solid var(--line-2);padding:4px 10px">90%</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Membrane protein B</td><td style="border:1px solid var(--line-2);padding:4px 10px">25%</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Protein B, after its link to the cytoskeleton is cut</td><td style="border:1px solid var(--line-2);padding:4px 10px">85%</td></tr></table>`,
 opts:["The laser destroyed that part of the membrane, because the spot with protein B stayed mostly dark after 60 seconds.","The cell made new copies of protein A during the 60 seconds, because the brightness returned to the bleached spot.","Phospholipids move sideways, but proteins are too large to move within the membrane, because they are embedded in it.","Lipids and most proteins drift sideways, but protein B is held in place by its attachment to the cytoskeleton."],a:3,
 why:"Brightness came back for phospholipids (98%) and protein A (90%), so they drift within the fluid bilayer. Protein B recovered only 25%, but 85% once it was released from the cytoskeleton, so its anchor, not the membrane, was holding it still.",
 wrong:{0:"When protein B was released from the cytoskeleton, its spot recovered 85%, so the membrane there was not destroyed.",1:"The recovery took only 60 seconds, and the bleached molecules stay dark. Brightness returns because unbleached molecules move in, which the data for lipids show too.",2:"Protein A recovered 90%, so proteins can move sideways within the membrane."}},
{id:"MK_12",t:"u2perm",lvl:2,mock:true,q:"A drug is a weak acid. In the stomach (pH 2) about 99% of its molecules are uncharged, but in the small intestine (pH 7.5) about 99% carry a negative charge. The drug has no transport protein and enters cells only by simple diffusion. Across equal areas of membrane, where would it cross fastest?",
 opts:["In the small intestine, because the charged form is more water-soluble and so enters the membrane more easily.","In the stomach, because the uncharged form can pass through the hydrophobic interior of the phospholipid bilayer.","At equal rates in both places, because only a molecule’s size controls how fast it diffuses across a bilayer.","In the small intestine, because the negative charge is pulled through the bilayer by the phosphate heads."],a:1,
 why:"Charged particles can’t pass through the nonpolar fatty-acid core of the bilayer without a protein. In the stomach almost all of the drug is uncharged, so it can diffuse through the membrane.",
 wrong:{0:"Being water-soluble keeps a molecule OUT of the hydrophobic interior. Charged forms cross slowest.",2:"Size matters, but charge matters more. The same molecule crosses much faster when uncharged.",3:"The phosphate heads are also negative and would repel a negative ion, and the ion still couldn’t cross the nonpolar core."}},
{id:"MK_13",t:"u2perm",lvl:2,mock:true,q:"Moss leaf cells were placed in a concentrated sucrose solution containing a red dye that cannot cross plasma membranes. Each cell’s membrane and cytoplasm pulled away from the cell wall. The space between the wall and the membrane filled with red solution, while the cytoplasm stayed green. Which conclusion is best supported?",
 opts:["The cell wall is freely permeable to water and dissolved solutes, while the plasma membrane is selectively permeable.","The cell wall is selectively permeable, because it let the red dye pass through but kept the chloroplasts inside.","The plasma membrane is freely permeable, because water left the cell and the dye then filled the space beside it.","The cell wall actively pumped the dye and sucrose inward, because the dye collected between the wall and membrane."],a:0,
 why:"The red dye and sucrose passed through the wall into the space next to the membrane, so the wall lets solutes through freely. The dye stayed out of the green cytoplasm, and water left the cell, so the plasma membrane lets some substances through but not others.",
 wrong:{1:"The chloroplasts are held in by the plasma membrane, and the wall let both the dye and sucrose through, so the wall is not being selective.",2:"The dye never entered the cytoplasm, so the plasma membrane blocked it. It lets water through but not the dye.",3:"Cell walls have no pumps; the solution simply flowed in through the wall as the protoplast shrank."}},
{id:"MK_14",t:"u2trans",lvl:2,mock:true,q:"Cultured kidney cells were placed in a solution containing 10 mM substance Y and 10 mM substance Z. The table shows the concentration of each inside the cells over time. A second batch was given a poison that blocks ATP production. Which conclusion is best supported?",
 fig:`<table style="border-collapse:collapse;font-size:15px;margin:4px 0"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Time (min)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Y inside (mM)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Z inside (mM)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Z inside, ATP blocked (mM)</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">0</td><td style="border:1px solid var(--line-2);padding:4px 10px">0</td><td style="border:1px solid var(--line-2);padding:4px 10px">0</td><td style="border:1px solid var(--line-2);padding:4px 10px">0</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">10</td><td style="border:1px solid var(--line-2);padding:4px 10px">6</td><td style="border:1px solid var(--line-2);padding:4px 10px">15</td><td style="border:1px solid var(--line-2);padding:4px 10px">6</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">30</td><td style="border:1px solid var(--line-2);padding:4px 10px">9.5</td><td style="border:1px solid var(--line-2);padding:4px 10px">38</td><td style="border:1px solid var(--line-2);padding:4px 10px">9.5</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">60</td><td style="border:1px solid var(--line-2);padding:4px 10px">10</td><td style="border:1px solid var(--line-2);padding:4px 10px">50</td><td style="border:1px solid var(--line-2);padding:4px 10px">10</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">90</td><td style="border:1px solid var(--line-2);padding:4px 10px">10</td><td style="border:1px solid var(--line-2);padding:4px 10px">50</td><td style="border:1px solid var(--line-2);padding:4px 10px">10</td></tr></table>`,
 opts:["Y and Z both move by active transport, because both kept entering the cells during the first 30 minutes.","Y moves by active transport, because Y reached its final concentration inside the cells sooner than Z did.","Y enters only passively (it stops at 10 mM), but Z is pumped in (it reaches 50 mM only when ATP is made).","Z moves only by simple diffusion, because Z still entered the cells even after ATP production was blocked."],a:2,
 why:"Y stops rising when the inside concentration equals the outside (10 mM), which is equilibrium for passive transport. Z builds up to 50 mM, five times the outside concentration, which is against its gradient. When ATP is blocked, Z stops at 10 mM, so moving Z against its gradient needs ATP.",
 wrong:{0:"Entering during the first 30 minutes happens with passive transport too. The test is whether the substance goes past the outside concentration (10 mM). Only Z does.",1:"How quickly a substance levels off doesn't show active transport. Y stops at the outside concentration, which is what passive transport does.",3:"Without ATP, Z only reaches equilibrium (10 mM). Z still enters passively down its gradient, but reaching 50 mM requires active transport."}},
{id:"MK_15",t:"u2trans",lvl:2,mock:true,q:"At a nerve–muscle junction, the nerve cell stores a signaling molecule (acetylcholine) in vesicles and releases it when the vesicles fuse with the plasma membrane. Botulinum toxin destroys a protein needed for this fusion, and the affected muscles stop contracting. Which statement best explains the effect?",
 opts:["Acetylcholine leaks out of the nerve cell by simple diffusion instead, because it can no longer be packed into vesicles.","Acetylcholine stays in vesicles inside the nerve cell because exocytosis is blocked, so none reaches the muscle cell.","The nerve cell can no longer take acetylcholine back in by endocytosis, so acetylcholine builds up around the muscle.","The vesicles fuse with lysosomes instead, because a blocked vesicle is always sent to a lysosome to be digested."],a:1,
 why:"Release of acetylcholine is exocytosis: the vesicle must fuse with the plasma membrane. With the fusion protein destroyed, the vesicles stay inside the nerve cell, so no signal reaches the muscle.",
 wrong:{0:"The toxin blocks fusion, not packaging, and acetylcholine, a charged polar molecule, doesn’t diffuse through the bilayer.",2:"If acetylcholine built up around the muscle, the muscle would be overstimulated, not stop contracting.",3:"Nothing in the scenario redirects the vesicles; the toxin simply prevents fusion with the plasma membrane."}},
{id:"MK_16",t:"u2trans",lvl:2,mock:true,q:"Cholera toxin locks open a Cl⁻ channel in the membrane of intestinal cells on the side facing the intestine. In a simplified model, Cl⁻ is more concentrated inside these cells than in the intestinal fluid. Patients lose large amounts of water into the intestine. Which statement best explains this?",
 opts:["Cl⁻ is pumped into the intestine by active transport, and water follows because the Cl⁻ channel lets water through too.","Cl⁻ moves from the intestine into the cells, making the cells hypertonic, so water moves out of the intestinal fluid.","Water moves into the intestine by active transport, because the toxin supplies the ATP that the channel needs to open.","Cl⁻ flows out by facilitated diffusion, raising the intestinal fluid’s solute concentration, so water follows by osmosis."],a:3,
 why:"An open channel lets Cl⁻ move passively from high Cl⁻ concentration inside the cells to low Cl⁻ concentration in the intestine. The added solute makes the intestinal fluid hypertonic compared to the cells, so water moves into the intestine by osmosis.",
 wrong:{0:"A channel allows only passive movement down a gradient; it doesn't pump. Water crosses through aquaporins or the bilayer, not the Cl⁻ channel.",1:"Cl⁻ is more concentrated inside the cells, so it moves OUT, into the intestine, not in.",2:"Water always moves passively, by osmosis. It is never actively transported, and channels don’t need ATP to let ions through."}},
{id:"MK_17",t:"u2tonic",lvl:2,mock:true,q:"Cells from a freshwater mussel contain 0.12 M of dissolved particles that cannot leave the cell. Their membrane lets glycerol cross freely but blocks Na⁺, Cl⁻, Ca²⁺ and sucrose. In which solution would the cells show NO net change in volume over time?",
 opts:["0.12 M NaCl","0.12 M glycerol","0.04 M CaCl₂","0.04 M sucrose"],a:2,
 why:"CaCl₂ splits into Ca²⁺ + 2 Cl⁻ (i = 3), so 0.04 M gives 0.12 M of particles that can’t cross, matching the cytoplasm. The solution is isotonic compared to the cells.",
 wrong:{0:"NaCl gives 2 particles, so 0.24 M of particles: hypertonic compared to the cells, which would shrink.",1:"Glycerol crosses the membrane, so it enters until inside equals outside, and water follows. The cells swell, as if they were in pure water.",3:"Sucrose doesn't dissociate, so 0.04 M of particles is hypotonic compared to the 0.12 M cytoplasm, and the cells would swell."}},
{id:"MK_18",t:"u2tonic",lvl:2,mock:true,q:"Seawater has a total solute concentration of about 1000 mOsm (a measure of dissolved particles). Bony marine fish have blood of about 400 mOsm. Sharks keep urea in their blood, raising it to about 1050 mOsm, and their gills are nearly impermeable to urea. Which prediction is best supported?",
 opts:["Sharks lose water across their gills just as bony marine fish do, because seawater is hypertonic compared to shark blood.","Sharks have no net water movement across their gills, because urea does not count toward the solute concentration of blood.","Sharks take in water so fast that their cells burst, because blood that is hypertonic to seawater draws in water without limit.","Sharks gain a little water by osmosis across the gills, because their blood is slightly hypertonic compared to seawater."],a:3,
 why:"Shark blood (1050 mOsm) has a slightly higher solute concentration than seawater (1000 mOsm), so water moves by osmosis from the seawater into the shark. Unlike bony marine fish, sharks don’t have to drink seawater to replace lost water.",
 wrong:{0:"That is true of bony fish (400 mOsm). Shark blood, at 1050 mOsm, is hypertonic compared to seawater, so sharks gain water.",1:"Urea that can’t leave through the gills counts toward tonicity, just like any other solute that can’t cross.",2:"The difference is small (1050 vs 1000 mOsm), so water enters slowly and the shark gets rid of the extra water in its urine."}},
{id:"MK_19",t:"u2tonic",lvl:2,mock:true,q:"Each stoma (leaf pore) is surrounded by two guard cells. In the morning, guard cells take in K⁺ and Cl⁻ from neighboring epidermal cells, and the stoma opens as the guard cells swell. The table shows data at 25 °C (solute values are total dissolved particles, so use i = 1). The neighboring epidermal cells have Ψ = −4.5 bars. Ψs = −iCRT; R = 0.0831 L·bar/mol·K. Which statement explains why the guard cells swell as they take in K⁺ and Cl⁻?",
 fig:`<table style="border-collapse:collapse;font-size:15px;margin:4px 0"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Time</th><th style="border:1px solid var(--line-2);padding:4px 10px">Guard-cell solute concentration (M)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Guard-cell Ψp (bars)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Stoma</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">10 a.m.</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.60</td><td style="border:1px solid var(--line-2);padding:4px 10px">+9.0</td><td style="border:1px solid var(--line-2);padding:4px 10px">opening</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">6 p.m.</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.20</td><td style="border:1px solid var(--line-2);padding:4px 10px">+3.0</td><td style="border:1px solid var(--line-2);padding:4px 10px">?</td></tr></table>`,
 opts:["K⁺ and Cl⁻ enter by osmosis, and the added ions themselves take up the extra volume inside the guard cells.","The guard cells become hypotonic compared to the epidermal cells, so water moves out of the epidermal cells.","The ions make the guard cells hypertonic compared to the epidermal cells, so water enters the guard cells by osmosis.","The ions make the epidermal cells hypertonic compared to the guard cells, so water moves into the guard cells."],a:2,
 why:"Taking in K⁺ and Cl⁻ raises the solute concentration of the guard cells, making them hypertonic compared to the epidermal cells (which lost those ions). Water moves by osmosis into the guard cells, which swell.",
 wrong:{0:"Osmosis is the movement of water, not ions. The swelling comes from the water that follows the ions in, not from the ions’ own volume.",1:"A cell that gains solute becomes HYPERtonic, not hypotonic. This option uses the wrong term even though the direction is right.",3:"The epidermal cells LOST ions, so they become hypotonic compared to the guard cells. This reverses the tonicity."}},
{id:"MK_20",t:"u2wp",lvl:2,mock:true,q:"Each stoma (leaf pore) is surrounded by two guard cells. In the morning, guard cells take in K⁺ and Cl⁻ from neighboring epidermal cells, and the stoma opens as the guard cells swell. The table shows data at 25 °C (solute values are total dissolved particles, so use i = 1). The neighboring epidermal cells have Ψ = −4.5 bars. Ψs = −iCRT; R = 0.0831 L·bar/mol·K. Using the 10 a.m. data, what is the water potential of a guard cell?",
 fig:`<table style="border-collapse:collapse;font-size:15px;margin:4px 0"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Time</th><th style="border:1px solid var(--line-2);padding:4px 10px">Guard-cell solute concentration (M)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Guard-cell Ψp (bars)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Stoma</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">10 a.m.</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.60</td><td style="border:1px solid var(--line-2);padding:4px 10px">+9.0</td><td style="border:1px solid var(--line-2);padding:4px 10px">opening</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">6 p.m.</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.20</td><td style="border:1px solid var(--line-2);padding:4px 10px">+3.0</td><td style="border:1px solid var(--line-2);padding:4px 10px">?</td></tr></table>`,
 opts:["−14.9 bars","+7.8 bars","−23.9 bars","−5.9 bars"],a:3,
 why:"Ψs = −(1)(0.60)(0.0831)(298 K) = −14.9 bars. Ψ = Ψs + Ψp = −14.9 + 9.0 = −5.9 bars. That is lower than the epidermal cells (−4.5 bars), so water is still entering the guard cells as the stoma opens.",
 wrong:{0:"This is only Ψs. The guard cell’s water potential also includes its pressure potential: Ψ = Ψs + Ψp.",1:"This uses 25 °C instead of 298 K: −(0.60)(0.0831)(25) + 9.0 = +7.8. Always convert to kelvin.",2:"This subtracts Ψp. Pressure potential is added: Ψ = −14.9 + 9.0."}},
{id:"MK_21",t:"u2wp",lvl:2,mock:true,q:"Each stoma (leaf pore) is surrounded by two guard cells. In the morning, guard cells take in K⁺ and Cl⁻ from neighboring epidermal cells, and the stoma opens as the guard cells swell. The table shows data at 25 °C (solute values are total dissolved particles, so use i = 1). The neighboring epidermal cells have Ψ = −4.5 bars. Ψs = −iCRT; R = 0.0831 L·bar/mol·K. By 6 p.m. the guard cells have released most of their K⁺ and Cl⁻. Using the 6 p.m. data, predict the net movement of water and what happens to the stoma.",
 fig:`<table style="border-collapse:collapse;font-size:15px;margin:4px 0"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Time</th><th style="border:1px solid var(--line-2);padding:4px 10px">Guard-cell solute concentration (M)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Guard-cell Ψp (bars)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Stoma</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">10 a.m.</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.60</td><td style="border:1px solid var(--line-2);padding:4px 10px">+9.0</td><td style="border:1px solid var(--line-2);padding:4px 10px">opening</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">6 p.m.</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.20</td><td style="border:1px solid var(--line-2);padding:4px 10px">+3.0</td><td style="border:1px solid var(--line-2);padding:4px 10px">?</td></tr></table>`,
 opts:["Water moves into the guard cells, because their Ψs (−5.0 bars) is lower than the epidermal cells’ Ψ (−4.5 bars).","Water moves out of the guard cells, because their Ψ (−2.0 bars) is higher than the epidermal cells’ Ψ, so the stoma closes.","No water moves, because the guard cells’ Ψp (+3.0 bars) exactly cancels the pull of the epidermal cells on the water.","Water moves out of the guard cells, because their Ψ (−8.0 bars) is lower than the epidermal cells’ Ψ (−4.5 bars)."],a:1,
 why:"Ψs = −(1)(0.20)(0.0831)(298) = −5.0 bars; Ψ = −5.0 + 3.0 = −2.0 bars. Water moves from higher Ψ (guard cells, −2.0 bars) to lower Ψ (epidermal cells, −4.5 bars), so the guard cells lose turgor and the stoma closes.",
 wrong:{0:"This compares Ψs alone. Water follows TOTAL water potential (Ψs + Ψp = −2.0 bars), which is higher than −4.5 bars, so water leaves.",2:"Ψp is part of the cell’s total Ψ (−2.0 bars), which does not equal the epidermal cells’ −4.5 bars, so water moves.",3:"This subtracts Ψp (−5.0 − 3.0). And water moves toward LOWER Ψ, so a guard cell at −8.0 bars would gain water, not lose it."}},
{id:"MK_22",t:"u2wp",lvl:2,mock:true,q:"Mangrove trees grow with their roots in seawater, which has a water potential of −25 bars. A mangrove root cell maintains a pressure potential of +3 bars. Which solute potential (Ψs) would allow the root cell to take up water from the seawater?",
 opts:["−30 bars","−27 bars","−23 bars","+28 bars"],a:0,
 why:"Water enters the cell only if the cell’s Ψ is lower than −25 bars. Ψ = Ψs + Ψp, so Ψs + 3 < −25 and Ψs must be lower than −28 bars. With Ψs = −30 bars, Ψ = −27 bars, which is below −25 bars, so water moves in.",
 wrong:{1:"Ψ = −27 + 3 = −24 bars, which is HIGHER than seawater (−25 bars), so the cell would lose water. This choice ignores the +3 bars of pressure potential.",2:"Ψ = −23 + 3 = −20 bars, far higher than −25 bars, so water would leave the root.",3:"Solute potential can never be positive. Solutes always lower Ψ below that of pure water (0 bars)."}},
{id:"MK_23",t:"u2mech",lvl:2,mock:true,q:"Kidney tubule cells reabsorb glucose from the fluid that will become urine using a Na⁺/glucose symporter (SGLT2). A Na⁺/K⁺ pump on the blood side of each cell keeps Na⁺ low inside the cell. Some diabetes drugs block SGLT2. Which effect of the drug is most likely?",
 opts:["More glucose is lost in the urine, because glucose can no longer be carried into the tubule cells against its gradient.","Less glucose is lost in the urine, because the Na⁺/K⁺ pump now works harder and moves the glucose into the cells directly.","Urine glucose doesn't change, because glucose can still diffuse across the tubule cells’ phospholipid bilayer by itself.","More Na⁺ is reabsorbed, because blocking SGLT2 leaves more Na⁺ channels open for Na⁺ to flow into the tubule cells."],a:0,
 why:"SGLT2 uses Na⁺ moving down its gradient (from high Na⁺ in the tubule fluid to low Na⁺ inside the cell) to carry glucose into the cell against its gradient. With SGLT2 blocked, glucose stays in the tubule fluid and leaves in the urine, which lowers blood glucose.",
 wrong:{1:"The Na⁺/K⁺ pump moves only Na⁺ and K⁺. It builds the Na⁺ gradient but never carries glucose itself.",2:"Glucose is large and polar, so it can’t cross the bilayer without a transport protein.",3:"SGLT2 carries Na⁺ and glucose together. Blocking it reduces Na⁺ entry through that protein, and it doesn't open other channels."}},
{id:"MK_24",t:"u2mech",lvl:2,mock:true,q:"A muscle contracts when Ca²⁺ is released from the sarcoplasmic reticulum (SR, a modified smooth ER) into the cytosol, and relaxes when a pump in the SR membrane moves Ca²⁺ back into the SR. The table gives resting Ca²⁺ concentrations. Which explains why Ca²⁺ stays high in the cytosol of muscle cells that have run out of ATP?",
 fig:`<table style="border-collapse:collapse;font-size:15px;margin:4px 0"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Location</th><th style="border:1px solid var(--line-2);padding:4px 10px">Ca²⁺ concentration (mM)</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Cytosol of a resting muscle cell</td><td style="border:1px solid var(--line-2);padding:4px 10px">0.0001</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Inside the SR</td><td style="border:1px solid var(--line-2);padding:4px 10px">1</td></tr></table>`,
 opts:["Ca²⁺ diffuses back into the SR on its own, because ions always move toward the side where they are more concentrated.","The Na⁺/K⁺ pump normally removes Ca²⁺ from the cytosol, and that pump stops working as soon as the ATP runs out.","The SR pump needs ATP to move Ca²⁺ from low concentration in the cytosol to high concentration inside the SR.","Ca²⁺ enters the SR through channels only when ATP is present, because channel proteins need ATP to stay open."],a:2,
 why:"The SR holds 10,000 times more Ca²⁺ than the resting cytosol (1 mM vs 0.0001 mM). Moving Ca²⁺ into the SR is against its concentration gradient, so it requires a pump powered by ATP. Without ATP, Ca²⁺ that leaks out of the SR can’t be pumped back.",
 wrong:{0:"Diffusion moves ions from HIGH to LOW concentration. On its own, Ca²⁺ would leave the SR, not enter it.",1:"The Na⁺/K⁺ pump moves only Na⁺ and K⁺; a separate Ca²⁺ pump in the SR membrane removes Ca²⁺ from the cytosol.",3:"Channels allow only passive movement down a gradient and can’t move Ca²⁺ into the SR, where it is already more concentrated."}},
{id:"MK_25",t:"u2comp",lvl:2,mock:true,q:"The protist Hatena engulfs a green alga and keeps it alive in a vesicle, where the alga photosynthesizes. When Hatena divides, only one daughter cell gets the alga; the other must find and engulf a new one. Which future finding would best show that the alga had become a true organelle, as endosymbiotic theory describes?",
 opts:["The alga keeps carrying out photosynthesis inside the host and supplies the host with sugar, as it does now.","The alga stays surrounded by the host’s vesicle membrane, the way a mitochondrion has an outer membrane.","The host digests the alga with lysosomes when food runs short and then engulfs a replacement alga.","The alga divides along with the host so every daughter inherits it, and it can no longer live on its own."],a:3,
 why:"An organelle is passed to every daughter cell and depends on the host (many of its genes have moved to the host’s nucleus), as mitochondria and chloroplasts do. Being inherited by every generation and being unable to live independently mark the change from partner to organelle.",
 wrong:{0:"The alga already does this, so it can’t show that anything has changed. A free partner can photosynthesize too.",1:"It is already in a host vesicle. That membrane matches the endosymbiosis model but doesn't show the alga is now permanent.",2:"Digesting and replacing the alga shows it is still a temporary partner, not a permanent part of the cell."}}
);

FRQ.push(
{id:"MKF_1",t:"u2wp",mock:true,title:"Counting plasmolyzed cells (lab FRQ)",
 fig:`<table style="border-collapse:collapse;font-size:15px;margin:4px 0"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">NaCl (M)</th><th style="border:1px solid var(--line-2);padding:4px 10px">0.00</th><th style="border:1px solid var(--line-2);padding:4px 10px">0.05</th><th style="border:1px solid var(--line-2);padding:4px 10px">0.10</th><th style="border:1px solid var(--line-2);padding:4px 10px">0.15</th><th style="border:1px solid var(--line-2);padding:4px 10px">0.20</th><th style="border:1px solid var(--line-2);padding:4px 10px">0.25</th><th style="border:1px solid var(--line-2);padding:4px 10px">0.30</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">% of cells plasmolyzed</td><td style="border:1px solid var(--line-2);padding:4px 10px">0</td><td style="border:1px solid var(--line-2);padding:4px 10px">0</td><td style="border:1px solid var(--line-2);padding:4px 10px">6</td><td style="border:1px solid var(--line-2);padding:4px 10px">30</td><td style="border:1px solid var(--line-2);padding:4px 10px">70</td><td style="border:1px solid var(--line-2);padding:4px 10px">94</td><td style="border:1px solid var(--line-2);padding:4px 10px">100</td></tr></table>`,
 stem:"A student estimated the solute potential of the purple leaf-epidermis cells of a spiderwort (Tradescantia) plant. She peeled thin strips of epidermis from one leaf, placed a strip in each of seven NaCl solutions at 20 °C for 20 minutes, and then used a microscope to count how many of 100 cells in each strip were plasmolyzed (membrane pulled away from the wall) (table). In the solution where 50% of the cells are plasmolyzed, the average cell is just at the point where its membrane starts to pull away from the wall, so its pressure potential (Ψp) is 0 and its solute potential equals the water potential of the solution. NaCl dissociates completely and cannot cross the membrane. Use Ψs = −iCRT, R = 0.0831 L·bar/mol·K. Answer in complete sentences.",
 parts:[
  {verb:"Identify",text:"the independent variable and the dependent variable.",pts:1,rubric:["IV: NaCl concentration of the solution (M); DV: percent of cells plasmolyzed (out of 100 counted). Both are needed; ‘plasmolysis’ without ‘percent of cells’, or ‘mass’, earns no credit"]},
  {verb:"Identify",text:"TWO variables, other than temperature, that the student should hold constant.",pts:1,rubric:["Any two of: time in each solution (20 min), strips taken from the same leaf/plant (same age), strip thickness, number of cells counted (100), volume of solution, criterion used to call a cell plasmolyzed. Temperature doesn't count, and a vague answer (‘same cells’, ‘same amount’) earns no credit"]},
  {verb:"Justify",text:"the student’s decision to count 100 cells in each strip instead of observing one cell.",pts:1,rubric:["Cells in the same tissue differ in their solute concentration, so one cell might not represent the tissue. Counting 100 cells gives a percent (a larger sample size) that reduces the effect of individual variation or chance and makes the results more reliable. ‘It’s more accurate’ with no reason earns no credit"]},
  {verb:"Construct",text:"a graph of the data. In words, describe the graph type, axes (labels, units, scale), and how you would plot and connect the points.",pts:2,rubric:["Line graph with the x-axis labeled NaCl concentration (M), with an evenly spaced scale (e.g., 0.05 M intervals from 0.00 to 0.30 M), and the y-axis labeled % of cells plasmolyzed (%), with an evenly spaced scale from 0 to 100%","All 7 points plotted accurately and connected point to point (no smooth S-curve drawn through or beyond the data), with a descriptive title. A bar graph earns no credit for this point"]},
  {verb:"Determine",text:"the NaCl concentration at which 50% of the cells are plasmolyzed.",pts:1,rubric:["About 0.175 M NaCl (accept 0.16–0.19 M), found halfway between 0.15 M (30%) and 0.20 M (70%) or read from the graph, with the unit M"]},
  {verb:"Calculate",text:"the solute potential of the spiderwort cells. Show your work.",pts:2,rubric:["Correct setup: Ψs(cells) = Ψ of the 50% solution = −iCRT = −(2)(≈0.175 mol/L)(0.0831 L·bar/mol·K)(293 K). Requires i = 2 for NaCl and the temperature in kelvin (20 + 273 = 293 K)","Answer ≈ −8.5 bars (accept −7.8 to −9.3 bars, consistent with their concentration) as a decimal, with the negative sign AND the unit bars, stated in a sentence. A missing sign or missing ‘bars’ loses this point"]},
  {verb:"Predict",text:"(i) the SUCROSE concentration at which 50% of these cells would be plasmolyzed, and (ii) the pressure potential of these cells after a strip reaches equilibrium in distilled water. Justify both predictions.",pts:2,rubric:["(i) About 0.35 M sucrose (twice the NaCl value), because sucrose doesn't dissociate (i = 1), so twice the molarity is needed to reach the same particle concentration and the same Ψs (≈ −8.5 bars)","(ii) Ψp ≈ +8.5 bars (equal in size to their Ψs, with a positive sign), because at equilibrium the cell’s Ψ must equal that of distilled water (0 bars), so Ψp = 0 − Ψs. The cell wall pushes back as water enters, so the cell becomes turgid and doesn't burst"]}
 ]},
{id:"MKF_2",t:"u2endo",mock:true,title:"Vesicles that can’t fuse",
 stem:"Mammary gland cells make three proteins: casein, a milk protein that is secreted; GLUT1, a glucose transporter glycoprotein in the plasma membrane, which lets glucose enter the cell by facilitated diffusion; and hexokinase, an enzyme that works in the cytosol. Researchers studied a mutant cell line with a temperature-sensitive protein. At 32 °C the cells are normal, but at 39 °C vesicles that bud from the Golgi apparatus travel to the plasma membrane but cannot fuse with it. All other steps, including delivery of vesicles from the Golgi to lysosomes, still work. Answer in complete sentences and name specific structures.",
 parts:[
  {verb:"Describe",text:"the path GLUT1 takes in a normal cell from its synthesis to its final location, naming each structure it passes through.",pts:2,rubric:["GLUT1 is made by ribosomes bound to the rough ER and inserted into the ER membrane, so it enters the endomembrane system at the rough ER. ‘Made by a ribosome’ alone earns no credit","It travels in a transport vesicle to the Golgi apparatus, where it is modified (carbohydrates added, making it a glycoprotein) and sorted. It then moves in a vesicle to the plasma membrane, and when the vesicle fuses, GLUT1 becomes part of the plasma membrane. The order ER → Golgi → vesicle → plasma membrane is required"]},
  {verb:"Explain",text:"why hexokinase production is NOT affected at 39 °C.",pts:1,rubric:["Hexokinase is made by free ribosomes in the cytosol and released directly into the cytosol, so it never enters the ER/Golgi or needs to travel in a vesicle to the plasma membrane. Both free ribosomes and not using the endomembrane pathway are needed"]},
  {verb:"Predict",text:"where newly made casein will accumulate in mutant cells at 39 °C, and justify your prediction.",pts:1,rubric:["Casein will build up in secretory vesicles in the cytoplasm near the plasma membrane, not in the ER or Golgi, because it is still made at the rough ER, processed in the Golgi and packaged into vesicles, but the vesicles can’t fuse with the plasma membrane for exocytosis, so no casein is secreted. ‘In the ER’ or ‘in the Golgi’ earns no credit"]},
  {verb:"Predict",text:"how the rate of glucose uptake by mutant cells will change over several hours at 39 °C, and justify your prediction.",pts:1,rubric:["Glucose uptake will decrease over time, because new GLUT1 can’t be added to the plasma membrane while old GLUT1 proteins are removed or broken down. With fewer GLUT1 proteins, less glucose enters by facilitated diffusion. The answer must be a prediction with a direction and must tie it to the number of transport proteins in the membrane"]},
  {verb:"Explain",text:"why the cell’s lysosomes will still receive hydrolytic enzymes at 39 °C, and one advantage of keeping these enzymes inside lysosomes.",pts:1,rubric:["Lysosomal enzymes go rough ER → Golgi → vesicles that bud from the Golgi and fuse with lysosomes. That route never requires fusion with the plasma membrane, so it still works. AND keeping the enzymes inside the lysosome’s membrane (compartmentalization) lets them work at the lysosome’s acidic pH and keeps them from digesting the cell’s own molecules and organelles in the cytosol. Both halves are needed"]}
 ]},
{id:"MKF_3",t:"u2mech",mock:true,title:"Storing salt in the vacuole (model FRQ)",
 fig:`<table style="border-collapse:collapse;font-size:15px;margin:4px 0"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Location</th><th style="border:1px solid var(--line-2);padding:4px 10px">pH</th><th style="border:1px solid var(--line-2);padding:4px 10px">Na⁺ concentration</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Cytosol</td><td style="border:1px solid var(--line-2);padding:4px 10px">7.5</td><td style="border:1px solid var(--line-2);padding:4px 10px">15 mM</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Central vacuole</td><td style="border:1px solid var(--line-2);padding:4px 10px">5.5</td><td style="border:1px solid var(--line-2);padding:4px 10px">180 mM</td></tr></table>`,
 stem:"Salt-tolerant plants that grow in salty soil keep Na⁺ out of their cytosol, where it would interfere with enzymes, by storing it in the central vacuole. A model of the vacuole’s membrane shows two proteins. Protein 1 hydrolyzes ATP and moves H⁺ from the cytosol into the vacuole. Protein 2 moves one H⁺ out of the vacuole into the cytosol while moving one Na⁺ from the cytosol into the vacuole; it can’t move either ion alone. The table shows typical conditions in a root cell. Answer in complete sentences.",
 parts:[
  {verb:"Identify",text:"the type of membrane transport carried out by Protein 1 and by Protein 2.",pts:1,rubric:["Protein 1: (primary) active transport by a proton (H⁺) pump. Protein 2: cotransport by an antiporter (exchanger), a form of secondary active transport. Both are needed; calling Protein 2 a ‘channel’ or ‘facilitated diffusion’ earns no credit"]},
  {verb:"Describe",text:"the movement of H⁺ and of Na⁺ through Protein 2 relative to each ion’s concentration gradient. Use the data.",pts:1,rubric:["H⁺ moves DOWN its gradient, from high H⁺ concentration in the vacuole (pH 5.5) to low H⁺ concentration in the cytosol (pH 7.5). Na⁺ moves AGAINST its gradient, from low Na⁺ concentration in the cytosol (15 mM) to high Na⁺ concentration in the vacuole (180 mM). The ion must be named each time (never ‘it’), and numbers must be cited"]},
  {verb:"Predict",text:"how the Na⁺ concentration in the cytosol of a root cell in salty soil will change if a drug blocks Protein 1.",pts:1,rubric:["The Na⁺ concentration in the cytosol will increase, and less Na⁺ will be moved into the vacuole. The answer must predict what WILL happen"]},
  {verb:"Justify",text:"your prediction.",pts:1,rubric:["With Protein 1 blocked, H⁺ is no longer pumped into the vacuole, so the H⁺ concentration gradient between the vacuole and the cytosol runs down as H⁺ leaves. Protein 2 relies on H⁺ moving down that gradient to power Na⁺ moving against its own gradient, so Na⁺ entering the cell from the soil stays in the cytosol. The chain from pump to H⁺ gradient to antiporter must be explicit"]}
 ]},
{id:"MKF_4",t:"u2perm",mock:true,title:"Sea urchin eggs in three solutes (data FRQ)",
 fig:`<table style="border-collapse:collapse;font-size:15px;margin:4px 0"><tr><th style="border:1px solid var(--line-2);padding:4px 10px">Solution</th><th style="border:1px solid var(--line-2);padding:4px 10px">Molar mass (g/mol)</th><th style="border:1px solid var(--line-2);padding:4px 10px">–OH groups per molecule</th><th style="border:1px solid var(--line-2);padding:4px 10px">Egg volume after 10 min (start = 1.00)</th><th style="border:1px solid var(--line-2);padding:4px 10px">Time until 50% of eggs burst</th></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Seawater (control)</td><td style="border:1px solid var(--line-2);padding:4px 10px">—</td><td style="border:1px solid var(--line-2);padding:4px 10px">—</td><td style="border:1px solid var(--line-2);padding:4px 10px">1.00</td><td style="border:1px solid var(--line-2);padding:4px 10px">none burst in 3 h</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Sucrose</td><td style="border:1px solid var(--line-2);padding:4px 10px">342</td><td style="border:1px solid var(--line-2);padding:4px 10px">8</td><td style="border:1px solid var(--line-2);padding:4px 10px">1.00</td><td style="border:1px solid var(--line-2);padding:4px 10px">none burst in 3 h</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Glycerol</td><td style="border:1px solid var(--line-2);padding:4px 10px">92</td><td style="border:1px solid var(--line-2);padding:4px 10px">3</td><td style="border:1px solid var(--line-2);padding:4px 10px">1.15</td><td style="border:1px solid var(--line-2);padding:4px 10px">45 min</td></tr><tr><td style="border:1px solid var(--line-2);padding:4px 10px">Ethylene glycol</td><td style="border:1px solid var(--line-2);padding:4px 10px">62</td><td style="border:1px solid var(--line-2);padding:4px 10px">2</td><td style="border:1px solid var(--line-2);padding:4px 10px">1.60</td><td style="border:1px solid var(--line-2);padding:4px 10px">7 min</td></tr></table>`,
 stem:"Unfertilized sea urchin eggs were placed at 20 °C in solutions of three different solutes. Each solution had the same total solute concentration as the eggs’ cytoplasm, whose own solutes cannot leave the cell. The eggs’ volume and the time until half of the eggs burst were recorded (table). Answer in complete sentences.",
 parts:[
  {verb:"Identify",text:"which solution was isotonic compared to the eggs, and cite evidence from the data.",pts:1,rubric:["The sucrose solution was isotonic compared to the eggs: egg volume stayed at 1.00 (the same as in seawater) and no eggs burst in 3 hours. A complete comparison AND at least one number from the table are required"]},
  {verb:"Explain",text:"why eggs in ethylene glycol swelled and burst even though the solution had the same total solute concentration as the cytoplasm.",pts:1,rubric:["Ethylene glycol can cross the plasma membrane, so it diffuses into the egg from high ethylene glycol concentration outside to low ethylene glycol concentration inside. That raises the solute concentration inside, so water follows by osmosis into the egg, which swells (1.60×) and bursts because it has no cell wall. Only solutes that can’t cross the membrane set tonicity, so the solution acts as if it were hypotonic. Naming the solute and the direction is required; ‘it moves in’ earns no credit"]},
  {verb:"Explain",text:"why eggs burst much faster in ethylene glycol than in glycerol. Use the data.",pts:1,rubric:["Ethylene glycol (62 g/mol, 2 –OH groups) is smaller and less polar than glycerol (92 g/mol, 3 –OH groups), so it passes through the hydrophobic interior of the phospholipid bilayer faster. It enters faster, so water follows faster and the eggs burst in 7 min instead of 45 min. Both size and polarity (–OH groups) must be tied to crossing the bilayer, with numbers cited"]},
  {verb:"Predict",text:"how the time for 50% of eggs to burst in ethylene glycol would change if the experiment were run at 5 °C, and justify your prediction.",pts:1,rubric:["It will take longer than 7 minutes, because at a lower temperature molecules move more slowly and the phospholipid bilayer is less fluid (the phospholipids pack more tightly), so ethylene glycol and water cross the membrane more slowly. A prediction of direction AND a justification based on the membrane or molecular motion are both required"]}
 ]}
);
