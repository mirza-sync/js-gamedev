const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 500
const CANVAS_HEIGHT = canvas.height = 600

class Enemy {
  constructor() {
    this.x = 0
    this.y = 0
    this.width = 100
    this.height = 100
  }

  update() {
    this.x++
    this.y++
  }

  draw() {
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}

const enemy1 = new Enemy()

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  enemy1.update()
  enemy1.draw()
  requestAnimationFrame(animate)
}

animate()