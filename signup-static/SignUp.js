function togglesignup()
{
    document.getElementById("login-toggle").style.background = "#fff";
    document.getElementById("login-toggle").style.color = "#fff";
    document.getElementById("signup-toggle").style.background = "#57b846";
    document.getElementById("signup-toggle").style.color = "#fff";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
}
function togglelogin()
{
    document.getElementById("login-toggle").style.background = "#57b846";
    document.getElementById("login-toggle").style.color = "#fff";
    document.getElementById("signup-toggle").style.background = "#fff";
    document.getElementById("signup-toggle").style.color = "#222";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}