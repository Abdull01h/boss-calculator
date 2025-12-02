// LOADING
setTimeout(()=>{
document.getElementById("loading").style.display="none";
document.getElementById("login").style.display="flex";
},3000);

// LOGIN
function unlock(){
if(pass.value==="abdullah-mafia-1880"){
login.style.display="none";
app.style.display="block";
}else msg.innerText="Wrong Password!";
}
function lock(){
app.style.display="none";
login.style.display="flex";
}

// MENU
function openPage(id){
document.querySelectorAll('.page').forEach(p=>p.classList.remove("active"));
document.getElementById(id).classList.add("active");
}

// NORMAL
function add(x){screen.value+=x}
function clearAll(){screen.value=""}
function calc(){screen.value=eval(screen.value)}

// SCIENTIFIC
function sadd(x){sview.value+=x}
function clearSci(){sview.value=""}
function equal(){sview.value=eval(sview.value)}
function sin(){sview.value=Math.sin(sview.value)}
function cos(){sview.value=Math.cos(sview.value)}
function tan(){sview.value=Math.tan(sview.value)}
function sqrt(){sview.value=Math.sqrt(sview.value)}
function pi(){sview.value=Math.PI}
function e(){sview.value=Math.E}
function pow(){
let a=prompt("Base");let b=prompt("Power");
sview.value=Math.pow(a,b);
}
function fact(){
let n=sview.value,f=1;
for(i=1;i<=n;i++)f*=i;
sview.value=f;
}

// ZAKAT
function zakat(){
let m=zmoney.value;
zout.innerText="Zakat = "+(m*0.025).toFixed(2);
}

// AGE
function age(){
let d=birth.value.split("-");
let dob=new Date(d[2],d[1]-1,d[0]);
let a=new Date(Date.now()-dob);
aout.innerText="Age: "+(a.getUTCFullYear()-1970);
}

// SUN MOON (demo)
function sunmoon(){
let la=lat.value, lo=lon.value;
sout.innerText=
"Sunrise: 05:15 AM\n"+
"Sunset: 06:30 PM\n"+
"Moon Phase: Waxing Gibbous\n"+
"Lat:"+la+" | Lon:"+lo;
}
