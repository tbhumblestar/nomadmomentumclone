const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greetingText = document.querySelector(".login h1")

const userNameKey = "username"
const hiddenclassName = "hiddenbydisplay"

function paint(username){
    greetingText.innerText = `Hello ${username}! \n Thank you for coming!!`
}

function regist(event){//addeventlistener로 작동되는 함수는 무조건 첫번재 인자로 발생된 이벤트에 대한 정보를 담음
    event.preventDefault(); // form이 제출되어서 새로고침되는 걸 막아줌
    const username = loginInput.value
    localStorage.setItem(userNameKey,username)
    loginForm.classList.add(hiddenclassName)
    greetingText.classList.add("fade-in-box")
    paint(username)
}

const savedusername = localStorage.getItem(userNameKey)

if (savedusername === null){
    loginForm.addEventListener("submit",regist)
}
else{
    paint(savedusername)
    loginForm.classList.add(hiddenclassName)
}

const toDoContainer = document.querySelector("#toDoContainer")
function showtoDoForm(){
    toDoContainer.classList.remove("hiddenbyvisibility")
    toDoContainer.classList.add("fade-in-box")
}

loginForm.addEventListener("submit",showtoDoForm)

if (localStorage.getItem("username") !== null){
    toDoContainer.classList.add("fade-in-box")
    toDoContainer.classList.remove("hiddenbyvisibility")
    
}