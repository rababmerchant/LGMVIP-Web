function add() {
    const input = document.getElementsByClassName("todoInput")
    const todoDiv = document.createElement("div")

    const deleteIcon = document.createElement("img")
    deleteIcon.src = "./images/delete.png"

    const todo = document.createElement("input")
    const text = document.createTextNode(input[0].value)

    todoDiv.appendChild(todo)
    todoDiv.appendChild(deleteIcon)

    todo.className = "todoText";

    todoDiv.style.backgroundColor = "#c5e1e5"
    todoDiv.style.width = "305px"
    todoDiv.style.height = "48px"
    todoDiv.style.paddingRight = "20px"
    todoDiv.style.paddingLeft = "20px"
    todoDiv.style.margin = "auto"
    todoDiv.style.marginTop = "10px"
    todoDiv.style.display = "flex"
    todoDiv.style.justifyContent = "space-between"
    todoDiv.style.alignItems = "center"
    todoDiv.style.borderRadius = "10px"

    deleteIcon.style.height = "20px"
    deleteIcon.style.width = "18px"
    deleteIcon.style.borderRadius = "5px"
    deleteIcon.style.padding = "5px"
    deleteIcon.style.backgroundColor = "#1d1ba3"
    deleteIcon.onclick = function(){
        todoDiv.remove()
    }

    todo.type = "button"
    todo.value = text.data
    todo.style.fontSize = "16px"
    todo.style.color = "#020554"
    todo.style.fontFamily = "Calibri"
    todo.style.width = "250px"
    todo.style.backgroundColor = "#c5e1e5"
    todo.style.border = "0px"
    todo.onclick = function () {
        todo.style.textDecoration = "line-through"
    };
    
    
    let list = document.getElementById("todoList")
    list.appendChild(todoDiv)
    input[0].value = null
}