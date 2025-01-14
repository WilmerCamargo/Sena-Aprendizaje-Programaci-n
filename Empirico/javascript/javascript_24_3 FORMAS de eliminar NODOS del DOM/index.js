// Selenciona al nodo padre
const elementoPadre = document.querySelector('.padre');

// crear el nodo hijo
const parrafoCuatro = document.createElement('p');
parrafoCuatro.innerHTML = 'Párrafo 4';

// Agregar el nodo hijo al padre
// -- // elementoPadre.appendChild(parrafoCuatro);

// Eliminar

const parrafoUno = document.querySelector('#Parrafo1');
const parrafoDos = document.querySelector('#Parrafo2');
const parrafoTres = document.querySelector('#Parrafo3');

// RemoveChild
elementoPadre.removeChild(parrafoUno);

// Remove
parrafoDos.remove();

// ReplaceChild
elementoPadre.replaceChild(parrafoCuatro, parrafoTres);

// Event listeners
parrafoCuatro.addEventListener('click', ()=>{
    parrafoCuatro.innerHTML = 'Nuevo Texto';
});