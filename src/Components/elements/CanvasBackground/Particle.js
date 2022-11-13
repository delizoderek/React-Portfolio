export default class Particle {
  constructor(x, y, directionX, directionY, size, color,canvas,context){
      this.name = crypto.randomUUID()
      this.x = x
      this.y = y
      this.directionX = directionX
      this.directionY = directionY
      this.size = size
      this.color = color
			this.canvas = canvas
			this.context = context
  }

  draw() {
		this.context.current.beginPath()
		this.context.current.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
    this.context.current.lineWidth = 5
		this.context.current.strokeStyle = 'rgba(127, 255, 212,0.2)'
      this.context.current.stroke()
  }

  // Check Particle Position
  update() {
      if(this.x + this.size > this.canvas.width || this.x - this.size < 0){
          this.directionX = -this.directionX
      }
      if(this.y + this.size > this.canvas.height || this.y - this.size < 0){
          this.directionY = -this.directionY
      }
      this.x += this.directionX
      this.y += this.directionY
      this.draw()
  }
}