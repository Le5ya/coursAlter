'use strict';

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');

const todoData = [];

const render = function() {
 todoList.textContent = '';
todoCompleted.textContent = ''; 

  todoData.forEach(function (item) {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.innerHTML = '<span class="text-todo"> '+ item.value + '</span>' +
        '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
        '</div>';
         if(item.completed) {
           todoCompleted.append(li);
         } else {
           todoList.append(li);
         }
         const btnTodoCompleted = li.querySelector('.todo-complete');
         const btnTodoRemove = li.querySelector('.todo-remove');
         
         btnTodoCompleted.addEventListener('click', function () {
           item.completed = !item.completed;
           render();
         });
         btnTodoRemove.addEventListener('click', function () {
             li.remove()
           //render();
         });       
  });
};
 const showTodo = function() {
    todoList.textContent = localStorage.getItem('list');
    // todoList.textContent = JSON.parse(todoData);
  }
  showTodo();

todoControl.addEventListener('submit', function(event){
  event.preventDefault();

const newTodo = {
  value: headerInput.value,
  completed: false
}
if (newTodo.value !==''){
  todoData.push(newTodo);
   
}

  headerInput.value = '';

  let json = JSON.stringify(todoData);

  localStorage.setItem('list', json);
  showTodo();

  render();
});
render();

