const num=3;
//num=4;
edad=[21, 27 , 28 , 29 , 35 ,30];
console.log(edad[2]);

let nombre= ["FUTER", "PARODI" , "GARCIA" , "ARIZAGA" , "BETZ"];
nombre.splice(0,2);
console.log(nombre);

let apellido= ["LUCIANA", "PATRICIO" , "HUGO", "ANGIE" , "JOTA"];
console.log(apellido);

let telefono=[
    "6885739",
    "3435294",
    "4989594",
    "4828934",
    "4548939",
];
console.log( telefono);

let direccion=[
    "av34d#54-54",
    "av34d#54-54",
    "av34d#54-54",
    "av34d#54-54",
];
console.log( direccion);

for (let i = 0;i  <edad.length; i++){
    console.log("  Edad: " + `${edad[i]}` 
    + "  Nombre: " +  
    `${nombre[i]}`+ 
     "  Apellido:" +  
     `${apellido[i]}` 
     + "  Telefono:" 
     + `${telefono[i]}`
     + "  Direccion:" 
     + `${direccion[i]}`);
}


nombre.forEach(Element=>{
    console.log(`el nombre es ${Element}`);
});
let pesona={"nombre":"yilena","apellido":"mosquera","gusto":"bailar"}
console.log(persona);