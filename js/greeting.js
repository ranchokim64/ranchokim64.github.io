//변수 선언

const loginForm = document.querySelector("#login-form");
const loginName = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const todoDiv = document.querySelector("#todo-div");


const HIDDEN_CLASS_NAME = "hidden";
const USER_NAME_KEY = "userName";




const savedUserName = localStorage.getItem(USER_NAME_KEY);

if(savedUserName === null) {
    // show the login form
    loginForm.classList.remove(HIDDEN_CLASS_NAME);
    todoDiv.classList.add(HIDDEN_CLASS_NAME);

} else {
    //hide the login form and show greeting
    hideForm();
    showGreeting(savedUserName);
}




//로그인 처리
function login(event) {
    event.preventDefault();
    console.log(loginName.value);

    const userName = loginName.value;


    //save user name at local storage
    localStorage.setItem(USER_NAME_KEY, userName);
    //hide login form and show greeting

    hideForm();
    showGreeting(userName);
}

function hideForm() {

    loginForm.classList.add(HIDDEN_CLASS_NAME);

}

function showGreeting(userName) {
    greeting.innerHTML = `Hello ${userName}`
    greeting.classList.remove(HIDDEN_CLASS_NAME);
    todoDiv.classList.remove(HIDDEN_CLASS_NAME);

}



loginForm.addEventListener("submit", login);




