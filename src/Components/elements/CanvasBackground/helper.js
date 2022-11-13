const canvas = document.getElementById('canvas1')
const context = canvas.getContext('2d')
canvas.height = window.innerHeight
canvas.width = window.innerWidth

let particlesArray

// getMousePosition
let mouse = {
    x: null,
    y: null,
    radius : (canvas.height/80) * (canvas.width/80)
}

window.addEventListener('mousemove',
function (event){
    mouse.x = event.x;
    mouse.y = event.y;
})


function calculateDistance(x1,y1,x2,y2) {
    const dx = x2-x1;
    const dy = y2-y1;
    return Math.sqrt((dx*dx) + (dy * dy))
}

function drawLine(x1,y1,x2,y2){
    context.strokeStyle='rgba(255,255,255,0.2)'
    context.lineWidth = 2
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke()
}

function connect(){
    for(let a = 0; a < particlesArray.length; a++){
        for(let b = a; b < particlesArray.length; b++){
            const particleA = particlesArray[a]
            const particleB = particlesArray[b]
            const distance = calculateDistance(particleA.x,particleA.y,particleB.x,particleB.y)
            if(distance < (canvas.width/7) + (canvas.height/7)){
                drawLine(particleA.x,particleA.y,particleB.x,particleB.y)
            }
        }
    }
}

function checkOverlap(newX,newY,newRadius){
    if(particlesArray.length === 0) return false
    return particlesArray.some((p) => {
        const newDist = calculateDistance(p.x,p.y,newX,newY)
        return newDist - newRadius - p.size > 0
    })
}

function init(){
    particlesArray = []
    let numberOfParticles = (canvas.height * canvas.width) / 15000;
    for (let i = 0; i < numberOfParticles;){
        const size = 3;
        const x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2)
        const y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2)
        if( !checkOverlap() ){
            const directionX = (Math.random() * 4) - 2
            const directionY = (Math.random() * 4) - 2
            const color = '#FFFFFF'
            particlesArray.push(new Particle(x,y,directionX,directionY,size, color))
            i++;
        }
    }
}

window.addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight
} )

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,innerWidth,innerHeight)
    for(let particle of particlesArray){
        particle.update()
    }
    connect()
}

init()
animate()