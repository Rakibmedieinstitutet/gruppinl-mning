const bestalla = document.querySelector("#bestalla"); 
const vatDiv = document.querySelector(".vatdiv"); 

 bestalla.addEventListener("click", ()=>
 {    
     const price = document.querySelector("#price").value;  
console.log(price);  
const priceConverted = Number(price); 

     
      var sumVat =0.25;     let vat = sumVat*priceConverted;    
  let totalis = vat + priceConverted    
 vatDiv.innerHTML = totalis;     
 console.log(price); });