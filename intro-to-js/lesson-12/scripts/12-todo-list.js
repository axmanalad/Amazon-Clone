const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach(function(todoObject, index) {
    const { name, dueDate } = todoObject;
    const html = `
        <div>${name}</div> 
        <div>${dueDate}</div>
        <button onclick="
          todoList.splice(${index}, 1);
          renderTodoList();"

        class="delete-todo-button">Delete</button>`;
    todoListHTML += html;
  });
  // Update the localStorage with the new todoList
  localStorage.setItem('todoList', JSON.stringify(todoList));
  // Update the todo list in the HTML
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  
  todoList.push({
    name,
    dueDate
  });
  console.log(todoList);

  // Clear the input fields after adding a todo
  inputElement.value = '';

  renderTodoList();
}