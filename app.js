import { link } from "fs";

/* const btn = document.querySelector("button")
function add(){
   
    const txt= document.querySelector(".text").value;
    const num = document.querySelector(".num").value;

   const nyel= document.createElement("li");
   nyel.innerHTML=Number(num)+Number(num)*.25;

  let val =document.querySelector("ul").appendChild(nyel).innerText;
  let val1 =Number(val);
 return val1;
}
btn.addEventListener("click", add )  
 */
/* const ul2= btn.cloneNode(true);
btn.append(btn, ul2) */

//document object model

/* const li =document.querySelectorAll("li")

for(let i= 0; i<li.length; i++){

li[i].innerHTML= "ändrat rutiner på morgonen";
console.log(li[i]);
} */

//document.querySelector("ul").style.backgroundColor="hotpink";
//document.querySelector("ul").className="bg-js";

//skapa två till css klassar med namnet visible  och invisble

//visible kommer att ha display egenskapen block
//invisible : display : none


//igenom att använda js ändra visibility av ul elementet
/* const ul =document.querySelector("ul")
//en button med function. 
const btn = document.querySelector("button");
btn.addEventListener("click", function(){
    if(ul.className==="visible")
    {
      ul.className="invisible";
    }
    else{
        ul.className="visible"
    }
}) */
//parametrar tillfärliga variablar
//exponent();
//kalle(2, 3);
//deklarera en function
/* function exponent(x,y ){
console.log("hej från function")
 console.log(x*y);
} */
//function expression , initialization av function
/* const kalle =function(x,y ){
console.log("hej från function")
 console.log(x*y);
}
 */
//Arrow function
/* const kalle =(x,y )=>{
console.log("hej från function")
 console.log(x*y);
}

kalle(5, 8); */
//exponent(9);
//exponent(); //argument
//NaN : Not a number


//return
//return i functionen eller i ifsatsen 







// function RäknaKostnad(){
//     const Produkt= document.querySelector("#produkt").value;
// const Moms =document.querySelector("#moms").value;
// //Number()
//     console.log(Number(Produkt)+Produkt*Moms)
//     document.querySelector("ul").innerHTML=
//     "<li>" + Number(Produkt)+Produkt*Moms + "</li>";
//     alert(Number(Produkt)+Produkt*Moms);
//     //return Produkt+Produkt*Moms

// }
// const btn1 = document.querySelector(".rakna");
// btn1.addEventListener("click", RäknaKostnad )

// const produkt1= RäknaKostnad(1000, .25);
// const produkt2=RäknaKostnad(2000, .25);
// console.log("totalt kostnad :" + (produkt1+produkt2))

    
    
//programmerings block

//lägga till childElement 
/* const div= document.createElement("div")
div.textContent="Det här är från JS"
console.log(div);

const ul =document.querySelector("ul");
ul.appendChild(div);
const li = document.querySelector("li");

//Remove en element 
ul.removeChild(li) ;
 */

function List(e){
    e.preventDefault();
    const text= document.querySelector("#text").value;
    const tel = document.querySelector("#tel").value;
    const epost = document.querySelector("#email").value;
    
   const div= document.createElement("div");
    const body = document.querySelector("body");
    div.innerHTML="<li>" + text + "</li>"+ "<li>"+tel +"</li>" +
    "<li>" +epost +"</li>"
    body.appendChild(div);
    console.log(text + " " + tel + " " + epost);


}
const addBtn = document.querySelector(".addBtn")
addBtn.addEventListener("click", List );
