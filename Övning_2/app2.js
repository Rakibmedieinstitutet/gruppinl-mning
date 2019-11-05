function ShowData(){
  const div = document.querySelector(".divfaktura")
 
  div.innerHTML= localStorage.getItem("data");
 
}
 
//DOMContentLoaded event väntar tills documentet laddas upp helt 
//sedan anropar den functionen inuti 
document.addEventListener("DOMContentLoaded", function (){
   ShowData();
   
})
 