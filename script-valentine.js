
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var heartCount = 1
var hearts = []; // define an array to hold the balls

var char = new Image()
var charX, charY
char.src = './utils/main.png'

char.onload = function() {
  background()
  text()
  
  add()
}

setInterval(function () {
  requestAnimationFrame(update);
}, 30);

function Heart(x, y) {
  console.log(x)
  this.x = x;
  this.y = y;
  this.radius = 15;
  this.vy = Math.floor(Math.random() * 7) + 4
  this.image = Math.floor(Math.random() * 5) + 1
}

Heart.prototype = {
  draw: function() {
    var image = new Image()
    image.src = `./utils/coracao${this.image}.png`
    heart = this
    ctx.drawImage(image, heart.x, heart.y)
  },

  update: function() {
    this.y += this.vy;
    if (this.y + this.radius > canvas.height) {
      this.y = - (Math.floor(Math.random() * 200) + 100)
      this.x = Math.floor(Math.random() * canvas.width)
      this.image = Math.floor(Math.random() * 5) + 1
    }
    this.draw()
  }
};

function add() {
  for (let i = 0; i < 100; i++) {
    var x = Math.floor(Math.random() * canvas.width)
    var y = - (Math.floor(Math.random() * 1000) + 500)

    hearts.push(new Heart(x, y))
  }
}


function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  background()
  text()
  for (let i = 0; i < hearts.length; i++) {
    hearts[i].update();
  }
};

// BACKGROUND

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

function text(){
  ctx.fillStyle = 'rgba(225,21,132,0.5)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.textAlign = "center";
  ctx.font = `${canvas.height * 0.08 }px Franklin Gothic`;
  ctx.fillStyle = "#000000";
  ctx.fillText("nudes@malandro.xyz", canvas.width/2, canvas.height/2 + (canvas.height/2 * 0.2));

  ctx.font = `${canvas.height * 0.2 }px Cooper Black`;
  ctx.fillStyle = "#ffffff";
  ctx.shadowColor="black";
  ctx.shadowBlur=7;
  ctx.fillText("Send Nudes", canvas.width/2, canvas.height/2);
  ctx.restore();

  ctx.fill();
}