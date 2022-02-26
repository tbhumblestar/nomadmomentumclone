const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greetingText = document.querySelector(".login h1")

const userNameKey = "username"
const hiddenclassName = "hiddenbydisplay"
const box2 = document.querySelector("#box2")
const box2Top = box2.offsetTop
const box2_title = document.querySelector("#box2_title")
const box2_letters = document.querySelector("#box2_sentences")



function paint(username){
    greetingText.innerText = `wanna enter \n your name again?`
    box2_title.innerText = `안녕하세요? ${username}님 반갑습니다!!!\n`
    box2_letters.innerText = 
    `저는 32기 김영빈 이라고 합니다!\n
    데이터를 다루는게 재미있고, 서비스를 뒤에서 든든하게 받쳐주는 느낌이 좋아서 백엔드를 지향하고 있습니다!\n
    개발자를 결심한 이래로, id를 지을때는 항상 humblebee라는 이름으로 짓는데요\n
    해야할 때는 늘 든든하게 제몫을 해주는 트랜스포머의 범블비와\n
    겸손(humble)을 합친 이름입니다 ㅎㅎ\n
    이름처럼 다재다능하면서 겸손한 백엔드 개발자가 되고 싶습니다!
    `
}


function regist(event){//addeventlistener로 작동되는 함수는 무조건 첫번재 인자로 발생된 이벤트에 대한 정보를 담음
    event.preventDefault(); // form이 제출되어서 새로고침되는 걸 막아줌
    const username = loginInput.value
    localStorage.setItem(userNameKey,username)
    // loginForm.classList.add(hiddenclassName)
    greetingText.classList.add("fade-in-box")
    paint(username)
}

const savedusername = localStorage.getItem(userNameKey)



// if (savedusername === null){
//     loginForm.addEventListener("submit",regist)
// }
// else{
//     paint(savedusername)
//     // loginForm.classList.add(hiddenclassName)
// }

if (savedusername !== null){
    paint(savedusername)
}

const toDoContainer = document.querySelector("#toDoContainer")

function showtoDoForm(){
    toDoContainer.classList.remove("hiddenbyvisibility")
    toDoContainer.classList.add("fade-in-box")
    box2.classList.remove("hiddenbyvisibility")
    box2.classList.add("fade-in-box")
    window.scroll({top:box2Top,behavior:'smooth'})
}

loginForm.addEventListener("submit",regist)
loginForm.addEventListener("submit",showtoDoForm)




if (localStorage.getItem("username") !== null){
    toDoContainer.classList.remove("hiddenbyvisibility")
    box2.classList.remove("hiddenbyvisibility")
    toDoContainer.classList.add("fade-in-box")
    box2.classList.add("fade-in-box")
    window.scroll({top:box2Top,behavior:'smooth'})
}