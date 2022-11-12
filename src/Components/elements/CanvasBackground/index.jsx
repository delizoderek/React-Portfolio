import React, { useEffect, useRef } from 'react'
import './CanvasBackground.scss'

function Particles() {
	const canvasRef = useRef(null)

	useEffect(() => {
		const canvas = canvasRef.current

		if(!canvas){ return;}
		const context = canvas.getContext('2d')
		if(!context){ return;}
		canvas.width = window.innerWidth
		canvas.height = window.innerHeight

		context.fillStyle = 'red'
		context.fillRect(0,0,100,100)
		
	},[])
	return (
		<canvas id="particleBg" ref={canvasRef} />
	)
}

export default Particles