function togglePsignup() {
  document.getElementById("DrSignup-toggle").style.background = "#fff";
  document.getElementById("DrSignup-toggle").style.color = "#222";
  document.getElementById("Psignup-toggle").style.background = "#9F74F2";
  document.getElementById("Psignup-toggle").style.color = "#fff";
  document.getElementById("DrSignup-form").style.display = "none";
  document.getElementById("Psignup-form").style.display = "block";
}
function toggleDrSignup() {
  document.getElementById("DrSignup-toggle").style.background = "#9F74F2";
  document.getElementById("DrSignup-toggle").style.color = "#fff";
  document.getElementById("Psignup-toggle").style.background = "#fff";
  document.getElementById("Psignup-toggle").style.color = "#222";
  document.getElementById("Psignup-form").style.display = "none";
  document.getElementById("DrSignup-form").style.display = "block";
}
