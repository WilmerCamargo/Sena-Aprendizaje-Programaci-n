// Esta es un forma de colocar el elemento

// const PI = 3.14;

// function area(radio){
//     return PI*radio**2;
// }

// console.log('area :' + area(10));





// *******************************

// // Esta es la segunda forma de exportar

// import{area} from "./funciones.js";

// console.log('area :' + area(10));




// *******************************

// // Esta es la tercera forma de exportar

// import calculoArea from "./funciones.js";

// console.log('area :' + calculoArea(10));




// *******************************

// // Esta es la cuarta forma de exportar
// puedres agregar mas exportaciones en una sola línea con ","
import calculoArea from "./funciones.js";
import {perimetro, PI} from "./funciones.js";

console.log('area :' + calculoArea(10));
console.log('perimetro :' + perimetro(10));
console.log('PI : ' + PI);











