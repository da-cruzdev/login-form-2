var password = document.getElementById("password");
var toggle = document.getElementById("toggle");
const loginBtn = document.querySelector(".btn");

console.log(loginBtn);

toggle.addEventListener("click", () => {
  if (password.type == "password") {
    password.setAttribute("type", "text");
    toggle.classList.add("fa-eye-slash");
  } else {
    password.setAttribute("type", "password");
    toggle.classList.remove("fa-eye-slash");
  }
});
loginBtn.addEventListener("click", () => {
  alert("Welcome");
});
