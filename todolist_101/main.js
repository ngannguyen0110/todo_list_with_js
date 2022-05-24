let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById("inputField");
let addToDo = document.getElementById("addToDo");

inputField.addEventListener("keypress", function(event){
    // If the users presses "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        addToDo.click()
    }
})
addToDo.addEventListener("click", function(){
    var task = document.createElement('p') //create a <p> element and append it to the document.
    task.innerText = inputField.value;
    toDoContainer.appendChild(task)
    inputField.value = ""
    task.addEventListener("click", function(){
        task.style.textDecoration = "line-through";
    })
    task.addEventListener("dblclick", function(){
        toDoContainer.removeChild(task);
    })
})