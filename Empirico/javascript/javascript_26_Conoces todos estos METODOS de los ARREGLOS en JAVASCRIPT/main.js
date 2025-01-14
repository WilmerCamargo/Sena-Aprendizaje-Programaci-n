// 1 Push - Permite agregar un elemento a la derecha de un arreglo.
let array1 = [5, 2, 4, 3, 1];
array1.push(8);
console.log(array1); // [5, 2, 4, 3, 1, 8]

// 2 Pop - Elimina el último elemento a la derecha de un arreglo.
let array2 = [5, 2, 4, 3, 1];
array2.pop();
console.log(array2); // [5, 2, 4, 3];

// 3 unshift - Permite agregar un elemento a la izquierda de un arreglo.
let array3 = [5, 2, 4, 3, 1];
array3.unshift(9);
console.log(array3); // [9, 5, 2, 4, 3, 1]

// 4 shift - Elimina el primer elemento a la izquierda de un arreglo.
let array4 = [5, 2, 4, 3, 1];
array4.shift();
console.log(array4); // [2, 4, 3, 1]

// 5. splice - permite hacer un corte o cambiar, espeficicando el indice del arreglo donde empieza y termina.
let array5 = [5, 2, 4, 3, 1];
array5.splice(1,3); // array5.splice(1,3,0,0); -> console.log(array5); // [5, 1, 0, 0]
console.log(array5); // [5, 1]

// 6. slice - Crea una nueva versión del arreglo con una parte de éste.
let array6 = [5, 2, 4, 3, 1];
let resultado6 = array6.slice(1, 3);
console.log(resultado6); // [2, 4]
console.log(array6); // [5, 2, 4, 3, 1]

// 7. concat - Combina dos o más arreglos en un nuevo arreglo.
let array7 = [1,2,3];
let strings = ['one', 'two', 'three'];
let newarray = array7.concat(strings);
console.log(newarray); // [1, 2, 3, 'one', 'two', 'three']

// 8. indexof - consultar un elemento
let array8 = ['one', 'two', 'three'];
console.log(array8.indexOf('two')); // 1
console.log(array8.indexOf('four')); // -1 - si no se encuentra colocara el número negativo -1

// 9. includes - Consulta un elemento su resultado dara un buleano (truo o false)
let array9 = ['one', 'two', 'three'];
console.log(array9.includes('five')); // false

// 10. find - arroja un resultado usando una variable.
let array10 = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Alice'},
    {id: 3, name: 'Bob'}
];
let resultado10 = array10.find(item => item.id == 3);
console.log(resultado10); // {id: 3, name: 'Bob'}

// 11. findindex - Da como resultado el indice del objeto que se esta buscando.
let array11 = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Alice'},
    {id: 3, name: 'Bob'}
];
let resultado11 = array11.findIndex(index => index.name == 'Alice');
console.log(resultado11); // 1

// 12. filter - Crea un nuevo arreglo con todos los elementos que pasan la prueba implementada por la función proporcionada.
let array12 = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Alice'},
    {id: 3, name: 'Bob'}
];
let resultado12 = array12.filter(item => item.id <= 2);
console.log(resultado12); // 0: {id: 1, name: 'John'} 1: {id: 2, name: 'Alice'}

// 13. forEach - permite iterar cada uno de los elementos de un arreglo y realzar una operación.
let array13 = [5, 2, 4, 3, 1];
let resultado13 = [];
array13.forEach(item => resultado13.push(item*10));
console.log(resultado13); // [50, 20, 40, 30, 10]

// 14. map - trabaja sobre cada uno de los elementos de los arreglos y los almacena en un nuevo arreglo.
let array14 = [5, 2, 4, 3, 1];
let resultado14 = array14.map(item=>item*10);
console.log(resultado14); // [50, 20, 40, 30, 10]

// 15. sort -
let array15 = [5, 2, 10, 3, 1];
array15.sort((a,b)=>a-b);
console.log(array15); //  [1, 2, 3, 5, 10]

// 16. reverse - Se invierte el orden de sus elementos.
let array16 = [5, 2, 4, 3, 1];
array16.reverse();
console.log(array16); // [1, 3, 4, 2, 5]

// 17. split - Trabaja sobre los strings
let string = 'amanecer';
let resultado17 = string.split('');
console.log(resultado17); // ['a', 'm', 'a', 'n', 'e', 'c', 'e', 'r'] // let resultado17 = string.split(''); => ['aman', 'c', 'r']

// 18. join - Trabaja sobre los arrays "los estapcios entre si"
let array18 = ['a', 'm', 'a', 'n', 'e', 'c', 'e', 'r'];
let resultado18 = array18.join('_');
console.log(resultado18); // a_m_a_n_e_c_e_r

// 19. reduce - reduce lo que hay dentro de los arrays y devuelve un solo valor. "Tiene dos parametors, la funcion y el valor del acomulador"
let arrya19 = [5, 2, 4, 3, 1];
let resultado19 = arrya19.reduce((sum, index)=>sum+index, 0);
console.log(resultado19); // 15