const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

todoBtn.addEventListener("click", function createNew(event) {
    const todoDiv = document.createElement("div");
    const todoBtn = document.createElement("button");
    const todoText = document.createElement("li");
    todoBtn.innerText = "DELETE";

    todoText.innerHTML = todoInput.value
    todoDiv.appendChild(todoText);
    todoList.appendChild(todoDiv);
    todoDiv.appendChild(todoBtn);
    event.preventDefault ();
    console.log(todoDiv);








    todoDiv.style.display = "flex";
    todoDiv.style.gap = "10px";
    todoBtn.style.background = "red";
    todoBtn.style.border = "0px";
    todoBtn.style.borderRadius = "5px";
    todoDiv.style.marginTop = "20px";
    todoBtn.style.color = "white";
    todoBtn.style.width = "77px";
})
