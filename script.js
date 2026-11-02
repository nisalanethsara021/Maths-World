const topics = [
  {icon:"x²",title:"වීජ ගණිතය",desc:"වීජීය ප්‍රකාශන, සමීකරණ, සාධක සහ අනන්‍යතා.",count:"12 පාඩම්",glow:"#6b8cff"},
  {icon:"△",title:"ජ්‍යාමිතිය",desc:"කෝණ, ත්‍රිකෝණ, චතුරස්‍ර, වෘත්ත සහ ඝන වස්තු.",count:"15 පාඩම්",glow:"#63e4e8"},
  {icon:"sin",title:"ත්‍රිකෝණමිතිය",desc:"Sin, Cos, Tan සහ සෘජුකෝණී ත්‍රිකෝණ.",count:"6 පාඩම්",glow:"#9b8cff"},
  {icon:"%",title:"ප්‍රතිශත හා අනුපාත",desc:"ප්‍රතිශත, අනුපාත, සමානුපාත සහ පොලිය.",count:"8 පාඩම්",glow:"#63e4e8"},
  {icon:"▥",title:"සංඛ්‍යානය",desc:"මධ්‍යන්‍යය, මධ්‍යස්ථය, ප්‍රකාරය සහ ප්‍රස්ථාර.",count:"7 පාඩම්",glow:"#9b8cff"},
  {icon:"ƒ(x)",title:"ප්‍රස්ථාර හා ශ්‍රිත",desc:"ඛණ්ඩාංක, සරල රේඛා සහ ශ්‍රිත.",count:"6 පාඩම්",glow:"#6b8cff"},
  {icon:"√",title:"සංඛ්‍යා හා මූල",desc:"භාග, දශම, වර්ගමූල සහ ඝනමූල.",count:"10 පාඩම්",glow:"#63e4e8"},
  {icon:"P",title:"සම්භාවිතාව",desc:"සිදුවීම්, ප්‍රතිඵල සහ සම්භාවිතා ගණනය.",count:"4 පාඩම්",glow:"#9b8cff"},
  {icon:"3D",title:"මිනුම් හා පරිමාව",desc:"පරිමිතිය, වර්ගඵලය, පෘෂ්ඨ වර්ගඵලය සහ පරිමාව.",count:"9 පාඩම්",glow:"#6b8cff"}
];
const formulas = [
  ["වීජ ගණිතය","වර්ගයක විස්තාරය","(a + b)² = a² + 2ab + b²","වරහන් දෙකක් එකිනෙකින් ගුණ කළ විට ලැබෙන සූත්‍රය."],
  ["වීජ ගණිතය","වර්ග දෙකක වෙනස","a² − b² = (a − b)(a + b)","වර්ග දෙකක වෙනස සාධක දෙකකට වෙන් කරයි."],
  ["වීජ ගණිතය","වර්ගජ සමීකරණයේ මූල","x = (−b ± √(b² − 4ac)) / 2a","ax² + bx + c = 0 සමීකරණයේ මූල සෙවීමට."],
  ["ජ්‍යාමිතිය","ත්‍රිකෝණයක වර්ගඵලය","A = ½ × පාදය × උස","ත්‍රිකෝණයේ පාදය සහ ඊට ලම්බ උස භාවිතා කරයි."],
  ["ජ්‍යාමිතිය","සෘජුකෝණාස්‍රයක වර්ගඵලය","A = දිග × පළල","දිග සහ පළල ගුණ කිරීමෙන් වර්ගඵලය ලැබේ."],
  ["ජ්‍යාමිතිය","වර්ගයක වර්ගඵලය","A = a²","a යනු වර්ගයේ එක් පැත්තක දිගයි."],
  ["ජ්‍යාමිතිය","වෘත්තයක පරිධිය","C = 2πr = πd","r අරය වන අතර d විෂ්කම්භයයි."],
  ["ජ්‍යාමිතිය","වෘත්තයක වර්ගඵලය","A = πr²","π ආසන්න වශයෙන් 3.14159 කි."],
  ["ජ්‍යාමිතිය","ඝනකායක පරිමාව","V = දිග × පළල × උස","ඝනකායක මාන තුන ගුණ කරයි."],
  ["ජ්‍යාමිතිය","සිලින්ඩරයක පරිමාව","V = πr²h","r පාදයේ අරය සහ h උසයි."],
  ["ජ්‍යාමිතිය","ත්‍රිකෝණයක කෝණ එකතුව","A + B + C = 180°","ඕනෑම ත්‍රිකෝණයක අභ්‍යන්තර කෝණ එකතුව."],
  ["ජ්‍යාමිතිය","පයිතගරස් ප්‍රමේයය","a² + b² = c²","සෘජුකෝණී ත්‍රිකෝණයක කර්ණය සොයයි."],
  ["ත්‍රිකෝණමිතිය","සයින් අනුපාතය","sin θ = විරුද්ධ පාදය / කර්ණය","සෘජුකෝණී ත්‍රිකෝණයක කෝණයක සයින් අනුපාතය."],
  ["ත්‍රිකෝණමිතිය","කොසයින් අනුපාතය","cos θ = යාබද පාදය / කර්ණය","කෝණයට යාබද පාදය සහ කර්ණය අතර අනුපාතය."],
  ["ත්‍රිකෝණමිතිය","ටැන්ජන්ට් අනුපාතය","tan θ = විරුද්ධ පාදය / යාබද පාදය","විරුද්ධ පාදය සහ යාබද පාදය අතර අනුපාතය."],
  ["ප්‍රතිශත හා අනුපාත","ප්‍රතිශතය","ප්‍රතිශතය = (කොටස / මුළු ගණන) × 100%","මුළු ප්‍රමාණයෙන් කොටසක ප්‍රතිශතය."],
  ["ප්‍රතිශත හා අනුපාත","සරල පොලිය","I = (P × R × T) / 100","P ප්‍රාග්ධනය, R වාර්ෂික අනුපාතය, T කාලය (වසර)."],
  ["සංඛ්‍යානය","මධ්‍යන්‍යය","මධ්‍යන්‍යය = අගයන්ගේ එකතුව / අගයන් ගණන","සියලු දත්තවල එකතුව දත්ත ගණනින් බෙදයි."],
  ["සංඛ්‍යානය","පරාසය","පරාසය = විශාලතම අගය − කුඩාම අගය","දත්ත කාණ්ඩයේ පැතිරීම පෙන්වයි."],
  ["සම්භාවිතාව","සරල සම්භාවිතාව","P(A) = හිතකර ප්‍රතිඵල / සියලු සමාන හැකියාව ඇති ප්‍රතිඵල","සියලු ප්‍රතිඵල සමාන හැකියාවක් ඇති විට භාවිතා කරයි."],
  ["ප්‍රස්ථාර හා ශ්‍රිත","සරල රේඛාව","y = mx + c","m අනුක්‍රමණය වන අතර c y-අන්තඃඛණ්ඩයයි."],
  ["සංඛ්‍යා හා මූල","වර්ගමූලය","√a × √a = a","ධන a අගයක් සඳහා වර්ගමූලයේ මූලික ගුණය."]
];
const topicGrid=document.getElementById("topicGrid");
topics.forEach((t,i)=>{const el=document.createElement("article");el.className="topic-card";el.style.setProperty("--glow",t.glow);el.innerHTML=`<div class="topic-top"><span class="topic-icon">${t.icon}</span><span class="topic-count">${t.count}</span></div><h3>${t.title}</h3><p>${t.desc}</p><a class="topic-link" href="#formulas" data-topic="${t.title}">අදාළ සූත්‍ර බලන්න ↗</a>`;topicGrid.appendChild(el)});
const categorySelect=document.getElementById("formulaCategory");
[...new Set(formulas.map(f=>f[0]))].forEach(c=>{const o=document.createElement("option");o.value=c;o.textContent=c;categorySelect.appendChild(o)});
function renderFormulas(){const q=document.getElementById("formulaSearch").value.trim().toLowerCase(),cat=categorySelect.value;const list=formulas.filter(f=>(cat==="all"||f[0]===cat)&&f.join(" ").toLowerCase().includes(q));const grid=document.getElementById("formulaGrid");grid.innerHTML="";list.forEach(f=>{const el=document.createElement("article");el.className="formula-card";el.innerHTML=`<span class="formula-category">${f[0]}</span><h3>${f[1]}</h3><div class="formula-equation">${f[2]}</div><p>${f[3]}</p>`;grid.appendChild(el)});document.getElementById("emptyState").hidden=list.length>0}
document.getElementById("formulaSearch").addEventListener("input",renderFormulas);categorySelect.addEventListener("change",renderFormulas);renderFormulas();
document.querySelectorAll("[data-topic]").forEach(a=>a.addEventListener("click",()=>{const map={"වීජ ගණිතය":"වීජ ගණිතය","ජ්‍යාමිතිය":"ජ්‍යාමිතිය","ත්‍රිකෝණමිතිය":"ත්‍රිකෝණමිතිය","ප්‍රතිශත හා අනුපාත":"ප්‍රතිශත හා අනුපාත","සංඛ්‍යානය":"සංඛ්‍යානය","ප්‍රස්ථාර හා ශ්‍රිත":"ප්‍රස්ථාර හා ශ්‍රිත","සංඛ්‍යා හා මූල":"සංඛ්‍යා හා මූල","සම්භාවිතාව":"සම්භාවිතාව","මිනුම් හා පරිමාව":"ජ්‍යාමිතිය"};categorySelect.value=map[a.dataset.topic]||"all";renderFormulas()}));

const calcDefinitions={
 circle:{title:"වෘත්තයක වර්ගඵලය",symbol:"π",fields:[["r","අරය (cm)",7]],run:v=>({result:`${(Math.PI*v.r*v.r).toFixed(2)} cm²`,steps:`A = π × r² = π × ${v.r}² = ${(Math.PI*v.r*v.r).toFixed(2)} cm²`,visual:"circle"})},
 triangle:{title:"ත්‍රිකෝණයක වර්ගඵලය",symbol:"△",fields:[["base","පාදය (cm)",10],["height","උස (cm)",6]],run:v=>({result:`${(v.base*v.height/2).toFixed(2)} cm²`,steps:`A = ½ × පාදය × උස = ½ × ${v.base} × ${v.height}`,visual:"triangle"})},
 pythagoras:{title:"පයිතගරස් ප්‍රමේයය",symbol:"√",fields:[["a","පළමු පාදය",3],["b","දෙවන පාදය",4]],run:v=>({result:`${Math.sqrt(v.a*v.a+v.b*v.b).toFixed(2)}`,steps:`c = √(a² + b²) = √(${v.a}² + ${v.b}²)`,visual:"triangle"})},
 percentage:{title:"ප්‍රතිශතය ගණනය",symbol:"%",fields:[["part","කොටස",25],["whole","මුළු ප්‍රමාණය",200]],run:v=>({result:`${v.whole===0?"අර්ථ දක්වා නැත":(v.part/v.whole*100).toFixed(2)+"%"}`,steps:`ප්‍රතිශතය = (${v.part} ÷ ${v.whole}) × 100`,visual:"percent"})},
 quadratic:{title:"වර්ගජ සමීකරණයේ මූල",symbol:"x²",fields:[["a","a අගය",1],["b","b අගය",-5],["c","c අගය",6]],run:v=>{if(v.a===0)return{result:"a ≠ 0 විය යුතුයි",steps:"මෙය වර්ගජ සමීකරණයක් වීමට a ශුන්‍ය නොවිය යුතුය."};const d=v.b*v.b-4*v.a*v.c;if(d<0)return{result:"තාත්වික මූල නොමැත",steps:`විභේදකය D = b² − 4ac = ${d} < 0`};const x1=(-v.b+Math.sqrt(d))/(2*v.a),x2=(-v.b-Math.sqrt(d))/(2*v.a);return{result:`x = ${x1.toFixed(2)} සහ ${x2.toFixed(2)}`,steps:`D = b² − 4ac = ${d}. ඉන්පසු x = (−b ± √D) / 2a`,visual:"quadratic"}}}
};
const calcInputs=document.getElementById("calcInputs");let currentCalc="circle";
function drawVisual(type){if(type==="circle")return'<svg viewBox="0 0 230 90"><circle cx="115" cy="45" r="34" fill="#63e4e822" stroke="#63e4e8" stroke-width="2"/><path d="M115 45H149" stroke="#9b8cff" stroke-width="2"/><text x="130" y="39" fill="currentColor" font-size="10">r</text></svg>';if(type==="triangle")return'<svg viewBox="0 0 230 90"><path d="M75 72L155 72L155 18Z" fill="#63e4e822" stroke="#63e4e8" stroke-width="2"/><path d="M145 72V62H155" fill="none" stroke="#9b8cff"/></svg>';if(type==="percent")return'<svg viewBox="0 0 230 90"><circle cx="115" cy="45" r="32" fill="none" stroke="#35435e" stroke-width="12"/><circle cx="115" cy="45" r="32" fill="none" stroke="#63e4e8" stroke-width="12" stroke-dasharray="50 201" transform="rotate(-90 115 45)"/></svg>';return'<span>සූත්‍රයට අගයන් ආදේශ කර ප්‍රතිඵලය සොයන්න</span>'}
function updateCalc(){const def=calcDefinitions[currentCalc],values={};def.fields.forEach(([key])=>values[key]=Number(document.getElementById("field-"+key).value));const out=def.run(values);document.getElementById("calcResult").textContent=out.result;document.getElementById("calcSteps").textContent=out.steps;document.getElementById("calcVisual").innerHTML=drawVisual(out.visual||"") }
function setCalc(name){currentCalc=name;const d=calcDefinitions[name];document.getElementById("calcTitle").textContent=d.title;document.querySelector(".calc-symbol").textContent=d.symbol;calcInputs.innerHTML=d.fields.map(([key,label,val])=>`<div class="field"><label for="field-${key}">${label}</label><input id="field-${key}" type="number" step="any" value="${val}"></div>`).join("");d.fields.forEach(([key])=>document.getElementById("field-"+key).addEventListener("input",updateCalc));document.querySelectorAll(".calc-tab").forEach(b=>b.classList.toggle("active",b.dataset.calc===name));updateCalc()}
document.querySelectorAll(".calc-tab").forEach(b=>b.addEventListener("click",()=>setCalc(b.dataset.calc)));setCalc("circle");

const questions=[{q:"ත්‍රිකෝණයක අභ්‍යන්තර කෝණ තුනේ එකතුව කීයද?",a:["90°","180°","270°","360°"],correct:1,why:"ත්‍රිකෝණයක අභ්‍යන්තර කෝණ එකතුව සෑම විටම 180° වේ."},{q:"අරය 7 cm වන වෘත්තයක විෂ්කම්භය කීයද?",a:["7 cm","14 cm","21 cm","49 cm"],correct:1,why:"විෂ්කම්භය = 2 × අරය = 2 × 7 = 14 cm."},{q:"25 හි 20% කීයද?",a:["2","5","10","20"],correct:1,why:"20% × 25 = 20/100 × 25 = 5."},{q:"3, 5, 7 යන සංඛ්‍යාවල මධ්‍යන්‍යය කීයද?",a:["3","5","6","7"],correct:1,why:"මධ්‍යන්‍යය = (3 + 5 + 7) ÷ 3 = 5."}];
let qIndex=0,answered=false;
function showQuestion(){const q=questions[qIndex];answered=false;document.getElementById("quizNumber").textContent=String(qIndex+1).padStart(2,"0");document.getElementById("quizQuestion").textContent=q.q;document.getElementById("quizFeedback").textContent="";const opts=document.getElementById("quizOptions");opts.innerHTML="";q.a.forEach((a,i)=>{const b=document.createElement("button");b.className="quiz-option";b.textContent=a;b.addEventListener("click",()=>{if(answered)return;answered=true;opts.querySelectorAll("button").forEach((x,j)=>{x.disabled=true;if(j===q.correct)x.classList.add("correct")});if(i!==q.correct)b.classList.add("wrong");document.getElementById("quizFeedback").textContent=(i===q.correct?"නිවැරදියි! ":"නැවත උත්සාහ කරමු. ")+q.why});opts.appendChild(b)})}
document.getElementById("nextQuestion").addEventListener("click",()=>{qIndex=(qIndex+1)%questions.length;showQuestion()});showQuestion();
document.getElementById("themeToggle").addEventListener("click",()=>{document.body.classList.toggle("light-mode");document.getElementById("themeToggle").textContent=document.body.classList.contains("light-mode")?"☾":"☼"});
document.getElementById("year").textContent=new Date().getFullYear();
