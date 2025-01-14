// Lectura de Nodos (Elementos)

// Por ID
// Let elementoPorId = document.getElementById("parrafo1"; // Referencia de la clase anterior.
let elementoPorId = document.querySelector("#Parrafo1");
elementoPorId.innerHTML = "Suscribete";


// Por nombre de clase
// let elementoPorId = document.getelementByClassName("parrafos");  // Referencia de la clase anterior.
let elementoPorClase = document.querySelectorAll('.parrafos');
console.log(elementoPorClase);
const arreglo = [...elementoPorClase];
console.log(arreglo);
arreglo[1].innerHTML = 'a CodingTube';

// elementoPorClase.forEach(elemento => {
//     document.write(elemento.innerHTML);  // Muestra el HTML dentro del elemento
// });


// Por etiqueta
// let elementoPorEtiqueta = document.getElementByTagName('p'); // Referencia de la clase anterior.
let elementoPorEtiqueta = document.querySelectorAll('p');
elementoPorEtiqueta[2].innerHTML = 'Ahora!';
