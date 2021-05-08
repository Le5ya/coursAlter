 'use strict';

const todoControl = document.querySelector('.todo-control'),
      headerInput = document.querySelector('.header-input'),
      todoList = document.querySelector('.todo-list'),
      todoCompleted = document.querySelector('.todo-completed');

const todoData = [
  
    ];

    const render = function() {

      todoList.textContent = '';
      todoCompleted.textContent = '';

      todoData.forEach(function(item, index){
        //console.log(item)
        let li = document.createElement('li');
        li.classList.add('todo-item');

        li.innerHTML = '<span class="text-todo"> '+ item.value + '</span>' +
         '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>';
        //li.dataValue = item.value
        li.dataIndex = index//todoData.indexOf(item)

        if(item.completed) {
             todoCompleted.append(li);
        } else {
          todoList.append(li); 
        }

        const btnTodoCompleted = li.querySelector('.todo-complete');
        btnTodoCompleted.addEventListener('click', function () {
          item.completed = !item.completed;
          render();   
        });
        const btnTodoRemove = li.querySelector('.todo-remove');
        btnTodoRemove.addEventListener('click', function(){
           //li.style.display = 'none';
           
           //console.log(li.dataValue)
           /*
           todoData.forEach(function(item){
            if (item.value == li.dataValue){
              let index = todoData.indexOf(item);
              if (index > -1) {
                todoData.splice(index, 1);
              }
            }
           })
           */
           todoData.splice(li.dataIndex,1)
           render()
        });  

      }); 
    };
    todoControl.addEventListener('submit', function(event){
      event.preventDefault()
      const newTodo = {
        value: headerInput.value,
        completed: false
      };
      if (newTodo.value !==''){
        todoData.push(newTodo);   
      };
      headerInput.value = '';
      render();
       let todo = JSON.stringify(todoData);
      localStorage.setItem('list', todo);
      
    });
    render();

// let arr = ["Bilbo", "Gandalf", "Nazgul"];
// console.log(arr);
/*arr.forEach((item, index, array) => {
   // console.log(`${item} имеет позицию ${index} в ${array}`);
   console.log(item, index)
  if(item === "Gandalf"){
  arr.splice(index, 1); 
  }
  if(item === "Nazgul"){
  arr.splice(index, 1); 
  }

  
});
*/
// function isBigEnough(value) {
//   return value[0] != "G" && value[0] != "N";
// }

// let filtered = arr.filter(isBigEnough);
// // массив filtered равен [12, 130, 44]
// console.log(filtered);


