const lista =[3,4,1,2,5];
//för att hämta värdet från array: ArraysNamn[indexnummer]

console.log( lista[0] );

// för att se längden av array
console.log(lista.length) //kommer att visa listas längd
//den kan behövas när man looper igenom lista 




const objekt= {
    nyckel:"värdet", //properties 
    namn:"John",
    lön:10000,
    age:26,
    canJS:true
    
}
//objekt.nynyckelnamn
objekt.bonus =1000;
console.log(objekt)
console.log(objekt.lön); //visar 10000 på konsolen.
const JohnsLön = objekt.lön;
console.log(JohnsLön);
console.log(objekt);

const nyttobjekt= new Object();
console.log(nyttobjekt);
nyttobjekt.namn= "Foo";
nyttobjekt.age= 60;
nyttobjekt.lön= 15000;
console.log(nyttobjekt);

console.log(Object.keys(nyttobjekt))

const objex2 = {
   person1 : {
       namn : "Peter",
       ålder : 50
 
   },
   person2:{
        namn:"Brain",
        ålder:10
   }
}
console.log(objex2.person2.ålder);


const employee = {
  namn:"Danish",
  id:01,
  timlön:300,
  arbetatTimmar:100,
  countSalary: () => {  //aldrig arrow function här
    
      console.log(this.timlön * this.arbetatTimmar)
      console.log(this);
     //what the hack is this?
     //this refererar till objektet 
     // motsvarande till employee.timlön
     
  }
}



 employee.countSalary();
 console.log(employee.countSalary());


//Array 
const lis = ["första värde", 2, true, 2.0, {}];
const nyvar = lis[4];
console.log(nyvar);
console.log(lis.length);
console.log(lis[2]);
lis.push(100000);
console.log(lis);
lis.unshift(1022020332);

lis[0] ="jag skriver om data";
const rensatItem =lis.pop();
console.log(rensatItem);
console.log(lis);
lis.shift();
console.log(lis);

const nylistaex= [1000, 2000, 3000, 5000];
//for loop
// for(let i= 0; i<nylistaex.length; i++){
//     console.log(i);
//     console.log(nylistaex[i]);
//     console.log("Loopen kör så länge villkoret är sant");
// }

//for each eller for in 
for(let i in nylistaex){
    
    console.log(nylistaex[i]);
     const summan = nylistaex[i]+nylistaex[i]*.25;
    console.log(summan) 
}

//map 
//listName.map( 
  //  (item)=>{ console.log(item)}
//); 



nylistaex.map(
    (i)=>{ console.log(i);}
)


const obj2= {
    namn: "rakib",
    yrke: "lärare",
    id: 10
}
Object.keys(obj2).map(
    (i)=> {
        console.log(i);
    }
)
Object.values(obj2).map(
    (i)=>{
        console.log(i)
    }
)