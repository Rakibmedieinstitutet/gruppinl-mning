const btn = document.querySelector(".rakna");
const data = document.querySelector("#span").value;

  const converteratData=  Number(data);


btn.addEventListener("click", (e)=>{
 e.preventDefault();
console.log(converteratData);
const Totalt= converteratData + (converteratData*.25);
localStorage.setItem("data", Totalt );
window.document.location="./faktura.html";
// window.document.location="./faktura.html"
})

btn.addEventListener("click", (e)=>{
 e.preventDefault();
console.log(converteratData);
const Totalt= converteratData + (converteratData*.25);
localStorage.setItem("data", Totalt );
window.document.location="./faktura.html";
// window.document.location="./faktura.html"
})