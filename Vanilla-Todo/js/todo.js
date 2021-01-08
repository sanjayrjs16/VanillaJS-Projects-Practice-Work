var id = 0;
let addButton = document.getElementById("add-task");
addButton.addEventListener("click", (e) => {
    let task = document.getElementById("task-input");
   
    if(task.value===""){
        alert("Please enter a task");
    }
    else{
        let todoItem = document.createElement("div");
        todoItem.id =`todo-item-${id++}`;
        console.log(todoItem);
        let checkBox = document.createElement("input");
        checkBox.type="checkbox";
        let todoContent = document.createElement("span");
        todoContent.textContent = task.value;
        todoItem.addEventListener("click", (e) => {
            if(!(checkBox.checked)){
                todoContent.style.textDecoration = "line-through";
                checkBox.checked = true;}
                else{
                    todoContent.style.textDecoration = "none";
                    checkBox.checked = false;
                }
        });
        todoItem.append(checkBox, todoContent);
        document.getElementById("todos-display").append(todoItem);
        task.value = "";

    }
});