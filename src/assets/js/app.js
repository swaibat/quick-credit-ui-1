function toggle() {
    var element = document.getElementById("collapse-menu");
    element.classList.toggle("toggle-class");
  } 

// collapse script
var acc = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
var title = document.getElementsByTagName("title")[0];
var login = document.getElementsByTagName("body")[0];

if ( title.innerHTML === "login"){
  login.classList.add("login");
}

// signup
var signup = document.getElementById("signup").addEventListener("click", signup);
var signin = document.getElementById("signin").addEventListener("click", signin);
var admin = document.getElementById("admin-btn").addEventListener("click", admin); 
var client = document.getElementById("client-btn").addEventListener("click", client); 

function signup() {
  document.getElementById("signup-body").classList.remove("display-none");
  document.getElementById("signin-body").classList.add("display-none");
}

function signin() {
  document.getElementById("signup-body").classList.add("display-none");
  document.getElementById("signin-body").classList.remove("display-none");
}

function admin() {
  document.getElementById("client").classList.add("display-none");
  document.getElementById("admin").classList.remove("display-none");
}

function client() {
  document.getElementById("client").classList.remove("display-none");
  document.getElementById("admin").classList.add("display-none");
}
