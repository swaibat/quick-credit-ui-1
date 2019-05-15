function toggle() {
    document.getElementById("collapse-menu").classList.toggle("toggle-class")
}
var i, acc = document.getElementsByClassName("collapsible");
for (i = 0; i < acc.length; i++) acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var e = this.nextElementSibling;
    "block" === e.style.display ? e.style.display = "none" : e.style.display = "block"
});
var signup = document.getElementById("signup").addEventListener("click", signup),
    signin = document.getElementById("signin").addEventListener("click", signin),
    admin = document.getElementById("admin-btn").addEventListener("click", admin),
    client = document.getElementById("client-btn").addEventListener("click", client);

function signup() {
    document.getElementById("signup-body").classList.remove("display-none"), document.getElementById("signin-body").classList.add("display-none")
}

function signin() {
    document.getElementById("signup-body").classList.add("display-none"), document.getElementById("signin-body").classList.remove("display-none")
}

function admin() {
    document.getElementById("client").classList.add("display-none"), document.getElementById("admin").classList.remove("display-none")
}

function client() {
    document.getElementById("client").classList.remove("display-none"), document.getElementById("admin").classList.add("display-none")
}