const num = Math.floor(Math.random()*12)+1+100
const bgi = document.createElement("img")
bgi.id = "bgi"
bgi.src = `img/${num}.jpg`

document.body.appendChild(bgi)

