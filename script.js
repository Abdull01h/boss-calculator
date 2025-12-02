const PASS = "abdullah-mafia-1880";

/* ========== LOADING CONTROL ========== */
document.addEventListener("DOMContentLoaded", () => {

setTimeout(() => {
  document.getElementById("loading").style.display = "none";
  document.getElementById("loginPage").classList.remove("hidden");
}, 3000);

/* ========== LOGIN ========== */
window.login = function(){
  let p = document.getElementById("password").value;
  if (p === PASS) {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
  } else {
    document.getElementById("error").innerText = "Wrong Password!";
  }
};

window.logout = function(){
  document.getElementById("app").classList.add("hidden");
  document.getElementById("loginPage").classList.remove("hidden");
};

/* ========== SECTION SWITCH ========== */
window.showCalc = function(id){
  document.querySelectorAll(".calc").forEach(c => c.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
};

/* ========== NORMAL CALCULATOR ========== */
let display = document.getElementById("display");

window.press = function(v){
  display.value += v;
};

window.clearDisplay = function(){
  display.value = "";
};

window.calc = function(){
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
};

/* ========== SCIENTIFIC ========== */
let sciDisplay = document.getElementById("sciDisplay");

window.sci = function(op){
  if (op === "pi") sciDisplay.value += Math.PI;
  else if (op === "e") sciDisplay.value += Math.E;
  else if (op === "pow") sciDisplay.value += "Math.pow(";
  else sciDisplay.value += "Math."+op+"(";
};

window.calcSci = function(){
  try {
    sciDisplay.value = eval(sciDisplay.value);
  } catch {
    sciDisplay.value = "Error";
  }
};

window.clearSci = function(){
  sciDisplay.value = "";
};

/* ========== AGE ========== */
window.calcAge = function(){
  let dob = document.getElementById("dob").value.split("-");
  let birth = new Date(dob[2], dob[1]-1, dob[0]);
  let today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  let m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  document.getElementById("ageResult").innerText = "Age: " + age + " Years";
};

/* ========== ZAKAT ========== */
window.calcZakat = function(){
  let amount = parseFloat(document.getElementById("money").value);
  if (isNaN(amount)) {
    document.getElementById("zakatResult").innerText = "Enter Amount";
  } else {
    let zakat = (amount * 2.5) / 100;
    document.getElementById("zakatResult").innerText = "Zakat: " + zakat;
  }
};

/* ========== SUN / MOON BASIC ========== */
window.sunMoon = function(){
  let date = new Date(document.getElementById("date").value);
  let moonAge = (date.getDate() % 29);
  document.getElementById("sunMoonResult").innerText =
    `Moon Age: ${moonAge} days\nSunrise: 06:00 AM\nSunset: 06:00 PM`;
};

});
