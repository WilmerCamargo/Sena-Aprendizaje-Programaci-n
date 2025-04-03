let IdCounter = 0;
const input = document.querySelector('input[type="text"]');

userInput.addEventListener('submit', ()=>{
    event.preventDefault();
    addTask();
});

let addTask = ()=>{
    IdCounter++;

    let newValue = input.value;

    list.innerHTML += `
    <div class="task-container" id="${IdCounter}">
        <label>
            <input type="checkbox">
            ${newValue}
        </label>
        <img src="./imagenes/Delete.png" class="closeBtn">
    </div>
    `
    input.value = '';
    updateStats();
};

list.addEventListener('click', (event)=>{
    if(event.srcElement.nodeName == 'INPUT'){
        updateStats();
    }
});

let updateStats = ()=>{
    let element = list.querySelectorAll('div');
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');
    stats.innerHTML = `<p>Tareas pendientes: ${element.length} Completasdas: ${checkbox.length}</p>`
};