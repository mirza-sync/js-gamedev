let playerState = 'run'
const animationStates = [
  {
    name: 'idle',
    frames: 7,
  },
  {
    name: 'jump',
    frames: 7,
  },
  {
    name: 'fall',
    frames: 7,
  },
  {
    name: 'run',
    frames: 7,
  },
  {
    name: 'dizzy',
    frames: 11,
  },
  {
    name: 'sit',
    frames: 5,
  },
  {
    name: 'roll',
    frames: 7,
  },
  {
    name: 'bite',
    frames: 7,
  },
  {
    name: 'ko',
    frames: 12,
  },
  {
    name: 'getHit',
    frames: 4,
  },
]
const dropdown = document.getElementById('animations')
animationStates.forEach(animation => {
  let option = document.createElement('option')
  const displayName = animation.name.substring(0, 1).toUpperCase() + animation.name.substring(1, animation.name.length)
  option.text = displayName
  option.value = animation.name
  if (animation.name == 'run') {
    option.setAttribute('selected', '');
  }
  dropdown.appendChild(option)
})
dropdown.addEventListener('change', function (e) {
  playerState = e.target.value
})

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext("2d")
const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600

const playerImage = new Image()
playerImage.src = 'shadow_dog.png'
const spriteWidth = 575
const spriteHeight = 523

let gameFrame = 0
const staggerFrames = 5
const spriteAnimations = []

animationStates.forEach((state, index) => {
  let frames = {
    loc: []
  }

  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth
    let positionY = index * spriteHeight
    frames.loc.push({ x: positionX, y: positionY })
  }

  spriteAnimations[state.name] = frames
})
console.log(spriteAnimations);

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length
  let frameX = spriteAnimations[playerState].loc[position].x
  let frameY = spriteAnimations[playerState].loc[position].y
  // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
  ctx.drawImage(
    playerImage,
    frameX, frameY,
    spriteWidth, spriteHeight,
    0, 0, spriteWidth, spriteHeight
  )

  gameFrame++
  requestAnimationFrame(animate)
}
animate()