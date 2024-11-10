var todoForm = document.getElementById('todo-form');
var todoInput = document.getElementById('todo-input');
var todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var newTask = todoInput.value;

  if (newTask === '') {
      alert('Please enter a task!');
      return;
  }
  todoInput.value = '';
  addTask(newTask);
});

function addTask(task) {
	var listItem = document.createElement('li');
	var taskText = document.createElement('span');
  taskText.textContent = task;
  listItem.appendChild(taskText);

  var checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  listItem.appendChild(checkBox);

  var deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.style.backgroundColor='#5F9EA0' ;
  deleteButton.style.color='white' ;
  deleteButton.style.border='none' ;
  deleteButton.style.borderRadius='4px';
  deleteButton.style.cursor='pointer' ;
  listItem.appendChild(deleteButton);

  todoList.appendChild(listItem);

  var editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.style.backgroundColor='#5F9EA0' ;
  editButton.style.color='white' ;
  editButton.style.border='none' ;
  editButton.style.borderRadius='4px';
  editButton.style.cursor='pointer' ;
  listItem.appendChild(editButton);

  checkBox.addEventListener('change', function() {
      if (this.checked) {
          taskText.style.textDecoration = 'line-through';
      } else {
          taskText.style.textDecoration = 'none';
      }
  });
 
  deleteButton.addEventListener('click', function() {
      todoList.removeChild(listItem);
  });

  editButton.addEventListener('click', function() {
	var isEditing = listItem.classList.contains('editing');
 
      if (isEditing) {
         
          taskText.textContent = this.previousSibling.value;
          listItem.classList.remove('editing');
          editButton.textContent = 'Edit';
      } else {
         
		var input = document.createElement('input');
          input.type = 'text';
          input.value = taskText.textContent;
          listItem.insertBefore(input, taskText);
          listItem.removeChild(taskText);
          listItem.classList.add('editing');
          editButton.textContent = 'Save';
      }
  });

//   saveTasksToLocalStorage();
}

// function saveTasksToLocalStorage() {
//   const tasks = [];
//   document.querySelectorAll('#todo-list li').forEach(task => {
//       const taskText = task.querySelector('span').textContent;
//       const isCompleted = task.classList.contains('completed');
//       tasks.push({ text: taskText, completed: isCompleted });
//   });
//   localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// document.addEventListener('DOMContentLoaded', function() {
//   const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//   savedTasks.forEach(task => {
//       addTask(task.text);
//   });
// });