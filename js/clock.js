function getClock(){
    const now = new Date()
    const hours = String(now.getHours()).padStart(2,"0")
    const minutes = String(now.getMinutes()).padStart(2,"0")
    const seconds = String(now.getSeconds()).padStart(2,"0")
    const Time = document.querySelector("#clock")
    Time.innerText = `${hours}:${minutes}:${seconds}`
    Time.classList.remove("hiddenbyvisibility")
}
setInterval(getClock,1000)


