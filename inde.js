/*
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

// Set
// window.localStorage.setItem("color", "#DDD");
// window.localStorage.fontWeight = "bold";
// window.localStorage["fontSize"] = "20px";

// Get
// console.log(window.localStorage.getItem("color"));
// console.log(window.localStorage.color);
// console.log(window.localStorage["color"]);

// Remove One
// window.localStorage.removeItem("color");

// Remove All
// window.localStorage.clear();

// Get Key
// console.log(window.localStorage.key(0));

// Set Color In Page
// document.body.style.backgroundColor = window.localStorage.getItem("color");

// console.log(window.localStorage);
// console.log(typeof window.localStorage);





let lis = document.querySelectorAll("ul li");
let div = document.querySelector(".experiment");
if (window.localStorage.getItem("color")) {
  div.style.backgroundColor = `${window.localStorage.getItem("color")}`;
  lis.forEach((li) => { li.classList.remove("active"); });
  document.querySelector(`[data-color=${window.localStorage.getItem("color")}]`).className=(`active`);
}
lis.forEach(function (li) {
  li.addEventListener("click", function (e) {
    // console.log(e.target.dataset.color);
    lis.forEach((li) => { li.classList.remove("active"); });
    e.currentTarget.classList.add("active");
    window.localStorage.setItem("color", e.currentTarget.dataset.color)
    div.style.backgroundColor = `${e.currentTarget.dataset.color}`;
  })
  
})






/*
  BOM [Browser Object Model]
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
*/

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

// document.querySelector("input").onblur = function () {
  // console.log(this.value);
//   window.sessionStorage.setItem("input-name", this.value);
// };
// document.querySelector("input").value=window.sessionStorage.getItem("input-name");