const PASS="abdullah-mafia-1880";

document.addEventListener("DOMContentLoaded",()=>{

  /* LOADING */
  setTimeout(()=>{
    document.getElementById("loading").style.display="none";
    document.getElementById("loginPage").classList.remove("hidden");
  },3000);

  /* LOGIN FUNCTION */
  window.login = function(){
    const input = document.getElementById("password").value.trim();
    const error = document.getElementById("error");
    if(input === PASS){
      document.getElementById("loginPage").classList.add("hidden");
      document.getElementById("app").classList.remove("hidden");
      error.innerText="";
    }else{
      error.innerText = "Wrong Password!";
    }
  }

  /* LOGOUT */
  window.logout = function(){
    document.getElementById("app").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
    document.getElementById("password").value = "";
  }

  /* SHOW CALCULATOR */
  window.showCalc = function(id){
    document.querySelectorAll(".calc").forEach(c => c.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
  }

  /* NORMAL CALCULATOR */
  let display = document.getElementById("display");
  window.press = v => display.value += v;
  window.clearDisplay = () => display.value = "";
  window.calc = () => {
    try{ display.value = eval(display.value); } 
    catch{ display.value = "Error"; }
  }

  /* SCIENTIFIC CALCULATOR */
  let sciDisplay = document.getElementById("sciDisplay");
  window.sci = function(op){
    if(op==="pi") sciDisplay.value+=Math.PI;
    else if(op==="e") sciDisplay.value+=Math.E;
    else if(op==="pow") sciDisplay.value+="Math.pow(";
    else sciDisplay.value+="Math."+op+"(";
  };
  window.calcSci=function(){ try{sciDisplay.value=eval(sciDisplay.value);}catch{sciDisplay.value="Error";} };
  window.clearSci = ()=> sciDisplay.value="";

  /* AGE */
  window.calcAge=function(){
    const dobInput = document.getElementById("dob").value;
    const parts = dobInput.split("-");
    if(parts.length!==3){ document.getElementById("ageResult").innerText="Invalid format"; return; }
    const birth = new Date(parts[2], parts[1]-1, parts[0]);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if(m<0 || (m===0 && today.getDate()<birth.getDate())) age--;
    document.getElementById("ageResult").innerText="Age: "+age+" Years";
  }

  /* ZAKAT */
  window.calcZakat=function(){
    const amt = parseFloat(document.getElementById("money").value);
    if(isNaN(amt)) document.getElementById("zakatResult").innerText="Enter Amount";
    else document.getElementById("zakatResult").innerText="Zakat: "+((amt*2.5)/100);
  }

  /* SUN / MOON */
  window.sunMoon=function(){
    const dateInput = document.getElementById("date").value;
    if(!dateInput){ document.getElementById("sunMoonResult").innerText="Select Date"; return; }
    const date = new Date(dateInput);
    const moonAge = date.getDate()%29;
    document.getElementById("sunMoonResult").innerText=
      `Moon Age: ${moonAge} days\nSunrise: 06:00 AM\nSunset: 06:00 PM`;
  }

});
