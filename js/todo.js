const toDoForm = document.querySelector("#todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoUl = document.querySelector("#todo-list")

let toDoList = []

function saveToDoListInLocalstorage(toDoList){
    localStorage.setItem("toDoList",JSON.stringify(toDoList))
    // JSON.stringfy는 받은 대상이 뭐든간에 그냥 전체를 string으로 바꿔줌. ex) ["가","나"] >> "["가","나"]"
    // JSOn.stringfy없이 그냥 toDoList를 넣으니까 되게 이상하게 변해서 localstorage에 들어갔음..
}

function deleteList(event){
    const li = event.target.parentElement
    toDoList = toDoList.filter((obj) => obj.id !== parseInt(li.id))
    //toDoList내부의 객체들 중 조건에 맞지 않는 애를 제거한다는 뜻임. 굳이 이름을 obj라고 지을필요는 없음
    //참고로 parseint는 string을 int로 바꿔주는 거임
    li.remove()
    saveToDoListInLocalstorage(toDoList)
}

function writeToDoList(newToDoObject){
    const li = document.createElement("li")
    //element인 li를 생성. 이때 const로 만들어진 li는 존재하기는 하나, html에 없는 상태임
    li.id = newToDoObject.id
    const span = document.createElement("span")
    span.innerText = `${newToDoObject.content}        `
    const button = document.createElement("button")
    // button.innerText = "V"
    button.addEventListener("click",deleteList)
    //button click하면 delete해준다는 뜻
    //만들어지는 모든 리스트에 대한 모든 버튼들이 click을 기다리고 있는 상태임. 좀신기함
    li.appendChild(span)
    //appendchild 부모노드의 끝에 자식노드를 위치시키는 작업임.. 위에서 createElement로 만들고, 만든 애들을 이제 추가시킨다는 말임 ()안의 내용을 추가한다는 뜻임. 아이러니한 것은, 아직도 li의 위치는 정해지지 않았음. 즉 li가 그냥 뒤에 span을 달고 실재하지만, HTML에는 없는 것임
    li.appendChild(button)
    toDoUl.appendChild(li)
    li.classList.add("fade-in-box-1")
    
}

function onFormSubmit(event){
    event.preventDefault();
    // 새로고침막아줌
    const newToDo = toDoInput.value;
    const newToDoObject = {
        "id":Date.now(),
        "content":newToDo
    }
    // 나중에 각 todolist를 식별하기 위해서 id를 넣어줌. Date.now()는 ms초로 현재시간을 반영해서 각자가 고유한 값을 가질 수 밖에 없음
    toDoInput.value = ""
    toDoList.push(newToDoObject)
    writeToDoList(newToDoObject)
    saveToDoListInLocalstorage(toDoList)
    //작성한 애들을 todolist에 새로이 저장해줌
}

toDoForm.addEventListener("submit",onFormSubmit)

const savedTodos = localStorage.getItem("toDoList")

if (savedTodos){
    //기존에 쓰여져있던 todolist가 있는지 체크하는 것임
    toDoList = JSON.parse(savedTodos)
    //JSON.parse()를 사용하면, 인자로 받은 애를 다시 리스트로 이쁘장하게 바꿔줌
    //즉, "["A","B"]" >> ["A","B"] 이런식으로
    toDoList.forEach(writeToDoList)
    /*for each에 사용되는 함수는 addeventlistener처럼 사용되는 함수의 첫번째 인자로, 현재 함수가 작용된 아이템이 뭔지를 보여줌.
    즉, A = [a,b,c]이고 A.foreach(sayhello)는 sayhello(a),sayhello(b),sayhello(c)를 순차적으로 실행하는 것과 같음. 따라서
    사용하려면 addeventlistner처럼, 사용되는 함수에 첫번째 인자칸을 만들어줘야함. 근데 위에보면 writeToDoList함수는 이미 인자로 newToDoObject를 받아서
    사용중임. 즉, 그냥 쓰면 자연스럽게 각 리스트의 원소가 순차적으로 들어감. arrow function을 쓸수도 있음.(7.4강의 후반부를 참고)*/
    
}
