export default class Particle {
  constructor(x, y, directionX, directionY, size, color){
      this.name = crypto.randomUUID()
      this.x = x
      this.y = y
      this.directionX = directionX
      this.directionY = directionY
      this.size = size
      this.color = color
  }

  draw() {
      context.beginPath()
      context.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
      context.fillStyle = 'rgba(255,255,255,0.9)'
      context.fill()
  }

  // Check Particle Position
  update() {
      if(this.x + this.size > canvas.width || this.x - this.size < 0){
          this.directionX = -this.directionX
      }
      if(this.y + this.size > canvas.height || this.y - this.size < 0){
          this.directionY = -this.directionY
      }

      this.x += this.directionX
      this.y += this.directionY
      this.draw()
  }
}