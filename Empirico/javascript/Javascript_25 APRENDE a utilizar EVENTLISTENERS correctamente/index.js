// saludoBtn.addEventListener('click', ()=> {
//     console.log('Hola desde función flecha');
// });

saludoBtn.addEventListener('click', saludo);

// saludoBtn.removeEventlistener('click', saludo);

function saludo(event){
    console.log(event.target.innerHTML);
}

userInput.addEventListener('keypress', (event)=>{
    if(event.key === "Enter"){
        console.log(event.target.value);
    }
});