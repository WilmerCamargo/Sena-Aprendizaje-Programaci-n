// Primero hay que cerar el nodo y despues agregarlo.

// Crear Nodos

const parrafoCuatro = document.createElement('p');
const textoParrafoCuatro = document.createTextNode('Párrafo 4');
const parrafoCinco = document.createElement('p');

// Agregar texto al segundo párrafo
parrafoCinco.innerHTML = 'Párrafo 5';

// Seleccionar elemento padre

const elementoPadre = document.querySelector('.padre');

// Agregar el nodo al elemento padre

// elementoPadre.appendChild(parrafoCuatro);
parrafoCuatro.appendChild(textoParrafoCuatro);
// elementoPadre.appendChild(parrafoCinco);
elementoPadre.append(parrafoCuatro, parrafoCinco);


// 23 APRENDE a USAR insertAdjacentElement() y setAttibute()

// Crear nodo a insertar y agregar el texto

const parrafoCero = document.createElement('p');
parrafoCero.innerHTML = 'Párrafo 0';


// Seleccionar o aplicar el metoco

const parrafoUno = document.querySelector('p'); 
const parrafoDos = document.querySelector('#Parrafo2');

elementoPadre.insertBefore(parrafoCero, parrafoDos);

// Usando insertAdjacentElement()

const parrafoExtra = document.createElement('p');
parrafoExtra.innerHTML = 'Párrafo Extra';

// elementoPadre.insertAdjacentElement('beforebegin', parrafoExtra);
// elementoPadre.insertAdjacentElement('afterbegin', parrafoExtra);
// elementoPadre.insertAdjacentElement('beforeend', parrafoExtra);
elementoPadre.insertAdjacentElement('afterend', parrafoExtra);


// ATRIBUTOS setAttibute()

parrafoExtra.setAttribute('class', 'parrafos');