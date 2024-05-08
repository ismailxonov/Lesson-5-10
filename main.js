//Selctors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

// Event Listener
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
function addTodo(event) {
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    const btnCheck = document.createElement("button");
    btnCheck.innerHTML = '<i class="fa-solid fa-check"></i>'
    btnCheck.classList.add("check-btn");
    todoDiv.appendChild(btnCheck)

    const btnTarsh = document.createElement("button");
    btnTarsh.innerHTML = '<i class="fa-solid fa-trash"></i>'
    btnTarsh.classList.add("trash-btn");
    todoDiv.appendChild(btnTarsh)
    todoList.appendChild(todoDiv);

    todoDiv.style.display ='flex';
    todoDiv.style.padding = '50px';
    todoDiv.style.gap ='10px';
    todoDiv.style.background ='white';
    todoDiv.style.borderRadius = "5px"
    todoDiv.style.width ='400px';
    todoDiv.style.height ='50px';
    todoDiv.style.marginTop ='20px';
    btnCheck.style.width = '20px'
    btnCheck.style.height = '20px'
    btnTarsh.style.width = '20px'
    btnTarsh.style.height = '20px'
    todoDiv.style.color = 'black'

    btnCheck.addEventListener('click', ()=>{
       newTodo.style.textDecoration = "line-through";
       todoDiv.style.background = "linear-gradient(135deg, red, orange)"
    
    })
}

function deleteTodo(e) {
    let item = e.target;
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove(); 
    }

    if (item.classList[0] === "chek-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed")

    }
}

