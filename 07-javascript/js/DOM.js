document.querySelector(".wrap").style.border = "1px solid #000";
document.querySelector("header").style.background = "#fafafa";
document.querySelector("header").style.height = "40px";

const parent = document.querySelector(".wrap");

console.log(parent.children);
console.log(`children : ${parent.children}`);
console.log(parent.childNodes);
console.log(`childrenNodes : ${parent.childNodes}`);
console.log(parent.firstChild);
console.log(parent.firstElementChild);

// document.getElementById("main").style.backgroundColor = "#faa034";
// document.getElementsByTagName("section");
// // "1px solid #faa034";
// // constdocument.getElementsByClassName("sidebar") = "#303030;";

// // document.getElementById("main").innerHTML = new Element();

// const link = document.querySelector(".link");
// link.setAttribute("href", "httop://google.com");
// link.textContent = "구글로 이동";

const newElement = document.createElement("div");
newElement.textContent = "새로운 요소";

document.querySelector(".sidebar").appendChild(newElement);
document.querySelector(".sidebar ul").lastElementChild.remove;

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  console.log("버튼클릭");
});
