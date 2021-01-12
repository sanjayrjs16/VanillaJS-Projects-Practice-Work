var id = 0;
// Function to toggle todos upon clicking
const toggleTodo = (e) => {
    console.log(e.target, " ================", e.currentTarget);
    //if(e.target.matches("input")){
        let todoSpan = e.target.nextSibling;
        if(e.target.checked){
            todoSpan.style.textDecoration = "line-through";
        }
        else{  
            todoSpan.style.textDecoration = "none";
        }
    // }
    // else{
    //     return
    // }
}

let todoActions = document.getElementById("todo-list-container");
todoActions.addEventListener("click", (e) => {
    switch(e.target.id){
        case "add-task": {
            let taskEntered = document.getElementById("task-input");
            if(taskEntered.value===""){
                alert("No task entered yet");
            }
            else{
                let todoItem = document.createElement("div");
                let checkBox = document.createElement("input");
                checkBox.type = "checkbox";
                let todoContent = document.createElement("span");
                todoContent.textContent = taskEntered.value;
                todoItem.append(checkBox, todoContent);
                document.getElementById("todos-display").append(todoItem);
                taskEntered.value = "";

            }
            break;  
        }
        case "clear-all-tasks": {
            let taskList = document.getElementById("todos-display");
            if(taskList.childNodes.length==0){
                alert("No tasks added");
            }
            else{
                for(let child of taskList.childNodes){
                    taskList.removeChild(child);
                }
               
            }
          break;
        }
        case "check-all-tasks": {
            break;
        }
        case "uncheck-all-tasks":{
            break;
        }
        default:{
            if(e.target.tagName==="INPUT" && e.target.getAttribute("type") ==="checkbox"){
                toggleTodo(e);
             }
            break
        }

    };

   
})

// // event listner for add button

// let addButton = document.getElementById("add-task");
// addButton.addEventListener("click", (e) => {
//     let task = document.getElementById("task-input");
//     if(task.value===""){
//         alert("Please enter a task");
//     }
//     else{
//         let todoItem = document.createElement("div");
//         todoItem.id =`todo-item-${id++}`;
//         console.log(todoItem);
//         let checkBox = document.createElement("input");
//         checkBox.type="checkbox";
//         let todoContent = document.createElement("span");
//         todoContent.textContent = task.value;
  
//         todoItem.append(checkBox, todoContent);
//         let todoList = document.getElementById("todos-display");
//         todoList.addEventListener("click", toggleTodo);
//         todoList.append(todoItem);
//         task.value = "";

//     }
// });

// // event listner for clear button
// let clearButton = document.getElementById("clear-all-tasks");
// clearButton.addEventListener("click", (e) => {
//     let todoItems = document.getElementById("todos-display"), i = 0;
//     if(todoItems.childNodes.length===0){
//         alert("There's nothing to clear as of now.");
//     }
//    else{ 
//        let popInterval = setInterval((i) => {
//         todoItems.removeChild(todoItems.firstChild);
//         i = i + 1;
//         console.log(todoItems.childNodes.length, " more chids left to remove");
//         if(todoItems.childNodes.length == 0){
//             clearInterval(popInterval);
//             console.log("All done!")
//         }
//     }, 200);}
// });

// //
// let checkButton = document.getElementById("check-all-tasks");
// checkButton.addEventListener("click", (e) => {
   
//     let todoList = document.getElementById("todos-display").childNodes, i = 0;
//     if(todoList.length==0){
//         alert("You havn't added any items, nothing to check off");
//     }
//     else{   console.log(todoList[1].firstChild.checked);
//     todoList.forEach( (element) => {
//         document.getElementById(element.id).firstElementChild.checked =true;
//         document.getElementById(element.id).lastElementChild.style.textDecoration = "line-through";
//     });}
// });

// let uncheckButton = document.getElementById("uncheck-all-tasks");
// uncheckButton.addEventListener("click", (e) => {
    
//     let todoList = document.getElementById("todos-display").childNodes, i = 0;
//     if(todoList.length==0){
//         alert("You havn't added any items, nothing to uncheck");
//     }
//     else{ 
//     todoList.forEach( (element) => {
//         document.getElementById(element.id).firstElementChild.checked =false;
//         document.getElementById(element.id).lastElementChild.style.textDecoration = "none";
//     });
//  }
//     window.location.href = "http://www.digipower.in";
// });