import React, { useContext, useEffect, useRef } from "react";
import Particle from "./Particle";
import { WindowContext } from '../../../App'
import "./CanvasBackground.scss";

function Particles() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const particlesArrayRef = useRef([]);
	const dimensions = useContext(WindowContext)
  const calculateDistance = (x1, y1, x2, y2) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const drawLine = (x1, y1, x2, y2) => {
    contextRef.current.strokeStyle = "rgba(255,255,255,0.2)";
    contextRef.current.lineWidth = 2;
    contextRef.current.beginPath();
    contextRef.current.moveTo(x1, y1);
    contextRef.current.lineTo(x2, y2);
    contextRef.current.stroke();
  };

  const connect = () => {
    for (let a = 0; a < particlesArrayRef.current.length; a++) {
      for (let b = a; b < particlesArrayRef.current.length; b++) {
        const particleA = particlesArrayRef.current[a];
        const particleB = particlesArrayRef.current[b];
        const distance = calculateDistance(
          particleA.x,
          particleA.y,
          particleB.x,
          particleB.y
        );
        if (
          distance <
          canvasRef.current.width / 7 + canvasRef.current.height / 7
        ) {
          drawLine(particleA.x, particleA.y, particleB.x, particleB.y);
        }
      }
    }
  };

  const checkOverlap = (newX, newY, newRadius) => {
    if (particlesArrayRef.current.length === 0) return false;
    return particlesArrayRef.current.some((p) => {
      const newDist = calculateDistance(p.x, p.y, newX, newY);
      return newDist - newRadius - p.size > 0;
    });
  };

  const animate = () => {
    requestAnimationFrame(animate);
    if (!particlesArrayRef.current) return;
    contextRef.current.clearRect(0, 0, innerWidth, innerHeight);
		
    for (let particle of particlesArrayRef.current) {
      particle.update();
    }
    // connect()
  };

  const init = () => {
    let numberOfParticles = 10
      // (canvasRef.current.height * canvasRef.current.width) / 99000;
    for (let i = 0; i < numberOfParticles; ) {
      const size = 30;
      const x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
      const y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
      if (!checkOverlap()) {
        const directionX = Math.random() * 1 - 0.5;
        const directionY = Math.random() * 1 - 0.5;
        const color = "#FFFFFF";
        particlesArrayRef.current.push(
          new Particle(
            x,
            y,
            directionX,
            directionY,
            size,
            color,
            canvasRef.current,
            contextRef,
          )
        );
        i++;
      }
    }
    animate();
  };

	useEffect(() => {
		canvasRef.current.width = dimensions.width
		canvasRef.current.height = dimensions.height
	},[dimensions])

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }
    contextRef.current = canvas.getContext("2d");
    if (!contextRef.current) {
      return;
    }
		try{

			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			
			init();
		} catch (error){
			console.log(error)
		}
  }, []);
  return <canvas id="particleBg" ref={canvasRef} />;
}

export default Particles;
