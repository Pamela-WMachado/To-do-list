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
    createDeleteBtn(li)
    saveTasks();
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

function createDeleteBtn(li) {
    li.innerText += " ";
    const botaoDeletar = document.createElement('button');
    botaoDeletar.innerText = "Delete";
    botaoDeletar.setAttribute('class', 'apagar')
    li.appendChild(botaoDeletar);
}

//cria evento que descobre onde clicamos
    document.addEventListener('click', function(e) {
        //informa dentro da const el o elemento que foi clicadouh
        const el = e.target;

        if (el.classList.contains('apagar')) {
            el.parentElement.remove();
            saveTasks();
        }
    })

    function saveTasks() {
        //varrer os li e pegar o texto de cada um deles (pois se tratam de tarefas)
        const liTarefas = tasks.querySelectorAll('li');
        console.log(liTarefas);

        //criando array para salvar dados das tarefas
        const tasksList = [];

        //iterar a nodeLista e pegar todos os textos
        for (let tarefa of liTarefas) {
            let taskText = tarefa.innerText;
            taskText = taskText.replace('Delete', '').trim();
            tasksList.push(taskText);

        }

        //transformar a lista em um json
        const tarefasJSON = JSON.stringify(tasksList)
        console.log(tarefasJSON)

        //salvando dados no NAVEGADOR local storage
        localStorage.setItem('tasks', tarefasJSON);
    }

    //funçao que pega as tarefas que haviam sido criadas posteriormente
    //e printa elas na tela mesmo após o reload da pagina
    function addSavedTasks() {
        const tarefas = localStorage.getItem('tasks');
        const listaDeTarefas = JSON.parse(tarefas)
        console.log(listaDeTarefas)

        for (let tarefa of listaDeTarefas) {
            addTask(tarefa)
        }
    }

    addSavedTasks();