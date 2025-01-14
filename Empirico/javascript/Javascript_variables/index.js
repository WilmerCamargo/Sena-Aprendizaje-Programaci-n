let userAge;
let birthYear;

// Se muestra un mensaje y se interactua en el mismo
userAge = prompt("Ingresa tu edad");


birthYear = 2024 - userAge;

// Se utilizan las comillas solas las invertidas ``, salen con el control + ALT + la tecla "{", se contatena también.
document.write(`tu tienes ${userAge} años de edad y naciste en el año ${birthYear}`); 