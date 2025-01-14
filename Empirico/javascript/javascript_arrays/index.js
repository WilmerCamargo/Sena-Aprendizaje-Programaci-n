// ARRAYS (arreglos)

let variable = 5;

// Sintaxis

let arreglo = [];

// Elementos iniciales

let cursos = ['HTML5', 'CSS','javascript' ,'<br>'];

// Obtener un valor de un arreglo

document.write(cursos); 
document.write(cursos[0] + '<br>');
document.write(cursos[1] + "<br>");
document.write(cursos[2] + "<br>");


// Reemplazar elementos

cursos[2] = 'Python';
document.write("<br>" + cursos + "<br>");

// Agregar el elementos

cursos[3] = 'JavaScript';
document.write("<br>" + cursos + "<br>");

// longitud de un arreglo

document.write("<br>" + cursos.length + '<br>');

// Tipos de datos en un arreglo

let nuevoArreglo = ['Java', true, 12, function(){alert('Hola')}, {nombre : 'Wilmer'}];

// Metodos POP "Quita un elemento al final de un arreglo" 
// PUSH "Inserta un elemento al final de un arreglo"
// SHIFT "Quita el elemento al inicio de un arreglo" 
// UNSHIFT "Inserta un elemento al inicio de un arreglo"

let numeros = ['uno',
    'dos',
    'tres'
];
document.write( '<br>' + numeros);
numeros.push('cuatro'); // "Inserta un elemento al final de un arreglo"
document.write( '<br>' + numeros);
numeros.pop(); // "Quita un elemento al final de un arreglo" 
document.write( '<br>' + numeros);
numeros.unshift('cero'); // "Inserta un elemento al inicio de un arreglo"
document.write('<br>' + numeros);
numeros.shift(); // "Quita el elemento al inicio de un arreglo" 
document.write('<br>' + numeros + '<br>');

// Arreglos multidimencionales

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

document.write('<br>' + matriz[0][2] + '<br>'); // busca los indices desde el 0