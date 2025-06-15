var signUpName = document.getElementById("signUpName");
var signUpEmail = document.getElementById("signUpEmail");
var signUpPassword = document.getElementById("signUpPassword");
var textSuccess = document.getElementById("textSuccess");
var textDanger = document.getElementById("textDanger");
var signUpBtn = document.getElementById("signUpBtn");
var loginEmail = document.getElementById("loginEmail");
var loginPass = document.getElementById("loginPass");

var listsReg = [];

if (localStorage.getItem("lists") != null) {
  listsReg = JSON.parse(localStorage.getItem("lists"));
}

function addReg() {
  if (
    validation(signUpName.id) &&
    validation(signUpEmail.id) &&
    validation(signUpPassword.id)
  ) {
    var listReg = {
      name: signUpName.value,
      email: signUpEmail.value,
      pass: signUpPassword.value,
    };
    var check = false;
    for (var i = 0; i < listsReg.length; i++) {
      if (listsReg[i].email == signUpEmail.value) {
        check = true;
        break;
      }
    }
    if (check) {
      textSuccess.classList.add("d-none");
      textDanger.classList.remove("d-none");
    } else {
      listsReg.push(listReg);
      localStorage.setItem("lists", JSON.stringify(listsReg));
      textSuccess.classList.remove("d-none");
      textDanger.classList.add("d-none");
      clear();
      setTimeout(function () {
        window.location.href = "../login.html";
      }, 2000);
    }
  }
}
signUpBtn.addEventListener("click", function () {
  addReg();
});

function clear() {
  signUpName.value = null;
  signUpEmail.value = null;
  signUpPassword.value = null;
  signUpName.classList.remove("is-valid");
  signUpEmail.classList.remove("is-valid");
  signUpPassword.classList.remove("is-valid");
}

function validation(idInput) {
  var regex;
  var myInput = document.getElementById(idInput);
  testString = myInput.value;

  switch (idInput) {
    case "signUpName":
      regex = /^[a-zA-Z](\w| )+$/;
      break;
    case "signUpEmail":
      regex = /[a-zA-Z]+@[a-zA-Z.]+/;
      break;
    case "signUpPassword":
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

signUpName.addEventListener("input", function () {
  validation(signUpName.id);
});
signUpEmail.addEventListener("input", function () {
  validation(signUpEmail.id);
});
signUpPassword.addEventListener("input", function () {
  validation(signUpPassword.id);
});
