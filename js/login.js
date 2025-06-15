var textSuccess = document.getElementById("textSuccess");
var textDanger = document.getElementById("textDanger");
var loginEmail = document.getElementById("loginEmail");
var loginPass = document.getElementById("loginPass");
var logInBtn = document.getElementById("logInBtn");

var listsReg = [];

if (localStorage.getItem("lists") != null) {
  listsReg = JSON.parse(localStorage.getItem("lists"));
}

function addLogIn() {
  if (validation(loginEmail.id) && validation(loginPass.id)) {
    for (var i = 0; i < listsReg.length; i++) {
      if (
        listsReg[i].email == loginEmail.value &&
        listsReg[i].pass == loginPass.value
      ) {
        textSuccess.classList.remove("d-none");
        textDanger.classList.add("d-none");
        setTimeout(function () {
          window.location.href = "../home.html";
        }, 2000);
        clear();
      } else {
        textSuccess.classList.add("d-none");
        textDanger.classList.remove("d-none");
      }
    }
  }
}
logInBtn.addEventListener("click", function () {
  addLogIn();
});

function clear() {
  loginEmail.value = null;
  loginPass.value = null;
  loginEmail.classList.remove("is-valid");
  loginPass.classList.remove("is-valid");
}

function validation(idInput) {
  var regex;
  var myInput = document.getElementById(idInput);
  testString = myInput.value;

  switch (idInput) {
    case "loginEmail":
      regex = /[a-zA-Z]+@[a-zA-Z.]+/;
      break;
    case "loginPass":
      regex = /^[A-Z]+[\w|\W]{7,}/;
      break;
  }

  if (regex.test(testString)) {
    myInput.classList.add("is-valid");
    myInput.classList.remove("is-invalid");
    return true;
  } else {
    myInput.classList.add("is-invalid");
    myInput.classList.remove("is-valid");
    return false;
  }
}

loginEmail.addEventListener("input", function () {
  validation(loginEmail.id);
});
loginPass.addEventListener("input", function () {
  validation(loginPass.id);
});
