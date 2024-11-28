
var todoInput = document.getElementById("todo-input");
var addButton = document.getElementById("add-btn");
var todoList = document.getElementById("todo-list");


function addTodo() {
  var task = todoInput.value.trim();
  
  if (task === "") {
    alert("Please enter a task!");
    return;
  }

 
  var listItem = document.createElement("li");


  var taskText = document.createElement("span");
  taskText.textContent = task;
  taskText.addEventListener("click", () => {
    taskText.classList.toggle("completed"); 
  });

  
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-btn";
  deleteButton.addEventListener("click", () => {
    todoList.removeChild(listItem); 
  });


  listItem.appendChild(taskText);
  listItem.appendChild(deleteButton);

  todoList.appendChild(listItem);


  todoInput.value = "";
}


addButton.addEventListener("click", addTodo);


todoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});