'use strict';

const username = document.getElementById('username'),
registerUser = document.getElementById('registerUser'),
login = document.getElementById('login'),
list = document.getElementById('list');

let userR = [];

let date = new Date;

console.log(date.getFullYear());
const monthes = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

const month = monthes[date.getMonth()];
console.log(month);
const userList = function(){
  list.textContent = '';

 userR.forEach(function(item) {
    let li = document.createElement('li');
      li.classList.add('user-item');

   li.textContent = 'имя: ' + item[0] + ' фамилия:  ' + item[1] + ' дата регистрации:  ' + date.getDate() + ' ' + month  + ' ' + date.getFullYear() + ' года ' + ' в ' + date.getHours() + ':' + date.getMinutes()+';';
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

