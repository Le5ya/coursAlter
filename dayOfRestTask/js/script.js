'use strict';

const username = document.getElementById('username'),
registerUser = document.getElementById('registerUser'),
login = document.getElementById('login'),
list = document.getElementById('list');

let userR = [];
let allUsers;

let userBase;
    

let dataUser = localStorage.getItem('userList', userBase);
allUsers = JSON.parse(dataUser);


let date = new Date;

const monthes = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

const month = monthes[date.getMonth()];

const oldUserList = function() {
  let ul = document.createElement('ul');
  ul.classList.add('old');
  document.body.append(ul);

 allUsers.forEach(function(item){
  let li = document.createElement('li');
  li.classList.add('ctorage');
  li.textContent = item[0] + ' ' + item[1] + ' ' + item[2] + ' ' + item[3];
  document.querySelector('.old').append(li);
  userR.push(item);
 }) 
};

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

   	userBase = JSON.stringify(userR);
   	localStorage.setItem('userList', userBase);
   }
    userList(); 
console.log(userR);
});
login.addEventListener('click', ()=>{
  const init = prompt("Your first name and name"),
      initR = init.split(' '),
      userName = prompt("Your username"),
      password = prompt("enter password");
  username.textContent = init;
  let userLog = [initR[0], initR[1], userName, password];
  console.log(userLog);
 
   if(allUsers.includes(userLog)){
    alert("Welcome!");
  }else{
    alert("Sign in");
  }


});
console.log(allUsers[0]);

oldUserList();

userList();

// login.addEventListener('click', () => {
// const	init = prompt("Your first name and name"),
//       initR = init.split(' '),
//       userName = prompt("Your username"),
//       password = prompt("Pick a password");
//   let logUser =[initR[0], initR[1], userName, password];

//   console.log(logUser);
// });





