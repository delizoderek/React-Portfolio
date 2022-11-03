import React, { useEffect, useRef } from 'react'
import './Particles.module.scss'

function Particles() {
	const canvasRef = useRef(null)
	useEffect(() => {
		const canvas = canvasRef.current

		if(!canvas){ return;}
		const context = canvas.getContext('2d')
		if(!context){ return;}
		console.log(context)
		context.fillStyle = 'red'
		context.fillRect(0,0,100,100)
	},[])
	return (
		<canvas ref={canvasRef} />
	)
}

export default Particles