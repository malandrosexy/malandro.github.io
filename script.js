
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var char = new Image()
var charX, charY
char.src = './utils/soeiro.png'

char.onload = function() {
  background()
 
}

var malandros = []
for (let index = 0; index < 1300; index++) {
  malandros.push([
    charX = Math.floor(Math.random() * canvas.width) * (Math.round(Math.random()) ? 1 : -1),
    charY = Math.ceil(Math.random() * canvas.height) * (Math.round(Math.random()) ? 1 : -1)
  ])
}

function background(){
  for (let index = 0; index < malandros.length; index++) {
    ctx.drawImage(
      char, 
      malandros[index][0], 
      malandros[index][1]
    )
  }
}
