function login(){
  let email = document.getElementById("loginEmail").value;
  let pass = document.getElementById("loginPass").value;

  let storedEmail = localStorage.getItem("userEmail");
  let storedPass = localStorage.getItem("userPass");

  if(email === storedEmail && pass === storedPass){
    alert("Login Success");
    window.location.href="dashboard.html";
  } else {
    alert("Invalid Email or Password");
  }
}