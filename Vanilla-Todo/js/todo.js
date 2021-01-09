var id = 0;
// Function to toggle todos
const toggleTodo = (e) => {
    console.log(e.target, " ================", e.currentTarget);
    if(e.target.matches("input")){
        let todoSpan = e.target.nextSibling;
        if(e.target.checked){
            todoSpan.style.textDecoration = "line-through";
        }
        else{  
            todoSpan.style.textDecoration = "none";
        }
    }
    else{
        return
    }
}

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
        //===============Approach 1 - attaching event listner to each individual checklist item
        // checkBox.addEventListener("click", (e) => {
        //     if(checkBox.checked){
        //         checkBox.checked = false;
        //         todoContent.style.textDecoration = "none";
        //     }
        //     else{
        //         checkBox.checked = true;
        //         todoContent.style.textDecoration = "line-through"

        //     }
        //     
        // });
        //===============Approach 1 - attaching event listner to each individual todo item
        // todoItem.addEventListener("click", (e) => {
        //     if(!(checkBox.checked)){
        //         todoContent.style.textDecoration = "line-through";
        //         checkBox.checked = true;}
        //         else{
        //             todoContent.style.textDecoration = "none";
        //             checkBox.checked = false;
        //         }
        //         console.log(e.target, " ============", e.currentTarget);
        // });
        todoItem.append(checkBox, todoContent);
        let todoList = document.getElementById("todos-display");
        todoList.addEventListener("click", toggleTodo);
        todoList.append(todoItem);
        task.value = "";

    }
});