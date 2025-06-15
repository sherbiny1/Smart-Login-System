var headerContent = document.querySelector(".header-content h1");
var LogOutBtn = document.querySelector(".header button");

var listsReg = [];

if (localStorage.getItem("lists") != null) {
  listsReg = JSON.parse(localStorage.getItem("lists"));
}
console.log(listsReg.length);

for (var i = 0; i < listsReg.length; i++) {
  headerContent.innerHTML = `Welcome ${listsReg[i].name}`;
}
LogOutBtn.addEventListener("click", function () {
  window.location.href = "../login.html";
});
