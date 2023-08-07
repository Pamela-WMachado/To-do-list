//selcting elements

const inputTask = document.querySelector(".input-new-task");
const btnAddTask = document.querySelector(".btn-add-task");
const tasks = document.querySelector(".tasks");

//capturing button's event (click) - os parametros recebidos pelo eventListener
//são o tipo de evento e uma função ANONIMA

//funcao que cria um LI
function createLi() {
    const li = document.createElement('li');
    return li;
}

//funçao que adiciona uma tarefa na lista
function addTask(textInput) {
    const li = createLi();
    li.innerText = textInput;
    tasks.appendChild(li);
}

btnAddTask.addEventListener('click', function(e){
    if (!inputTask.value) return; 
    addTask(inputTask.value);
    clearInput();

});

inputTask.addEventListener('keypress', function(e){
    if (e.keyCode === 13) {
        if (!inputTask.value) return; 
            addTask(inputTask.value);
            clearInput();
    }
})

function clearInput() {
    inputTask.value = "";
    inputTask.focus();
}