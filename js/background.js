const num = Math.floor(Math.random()*11)+1
const bgi = document.createElement("img")
bgi.id = "bgi"
bgi.src = `img/${num}.jpg`

document.body.appendChild(bgi)
