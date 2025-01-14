// STRINGGS
let nombre1 = "Juan";
let nombre2 = 'Pedro';
let nombre3 = `Maria`;

let declaracion = "Mi lenguaje favorito es 'javascript'. <br>";
document.write(declaracion);

let compras = `lista de compras:
* Aceite
* Arroz
* Carne
* Frutas <br>`;
document.write(compras);

let compras2 = "lista de compras: \n* Aceite \n* Arroz \n* Carne \n* Frutas <br>";
document.write(compras2);
console.log(compras2);

//Template string
let edad = 15;
document.write(`Roberto tiene ${edad} años. <br>`);
document.write("Roberto tiene " + edad + " años. <br>");

//Largo del string
let saludo = 'Hola mundo!';
document.write(saludo.length);
console.log(saludo.length);

//Accediendo a caracteres
console.log(saludo[10]);

saludo[0] = 'h';
console.log(saludo[0]);

saludo = 'hola Mundo!';
console.log(saludo[0]);

//Cambio entre mayusculas y minusculas
console.log(saludo.toUpperCase());
console.log(saludo.toLowerCase());

//Subcadenas
let frase = 'HTML es un lenguaje de marcado y Javascript es un lenguaje de programacion';
console.log(frase.indexOf('HTML'));
console.log(frase.indexOf('lenguaje'));
console.log(frase.indexOf('es'));
console.log(frase.indexOf('es',6));
console.log(frase.indexOf('CSS'));
console.log(frase.lastIndexOf('es'));

//includes, startsWith, endsWith -> existen otros metodos.
console.log(frase.includes('lenguaje'));
console.log(frase.includes('CSS'));
console.log(frase.endsWith('programacion'));
console.log(frase.endsWith('programación'));

//substring
let lenguaje = ' Javascript ';
// lenguaje = lenguaje.trim();
console.log(lenguaje.substring(2,4));
console.log(lenguaje.substr(2,4));

//trim y repeat
console.log(lenguaje.repeat(10));