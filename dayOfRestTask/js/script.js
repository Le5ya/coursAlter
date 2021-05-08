'use strict';

const username = document.getElementById('username'),
registerUser = document.getElementById('registerUser'),
login = document.getElementById('login'),
list = document.getElementById('list');

let userR = [];

let date = new Date;


const userList = function(){
  list.textContent = '';

 userR.forEach(function(item) {
    let li = document.createElement('li');
      li.classList.add('user-item');

      li.textContent = item[0] + ' ' + item[1] + ' ' + date;

      list.append(li);
 });

   
};




registerUser.addEventListener('click', () =>{
const	init = prompt("Your first name and name"),
      initR = init.split(' '),
      userName = prompt("Your username"),
      password = prompt("Pick a password");
      
 let newUser = [initR[0], initR[1], userName, password];

   if(newUser.length !==0) {
   	userR.push(newUser);
   }
   userList();
});
userList();

