import React, { useEffect, useState } from 'react';
import CanvasBackground from './Components/elements/CanvasBackground';
import { Home, Experience } from './Components/sections';
import ScrollingContainer from './Components/containers/ScrollingContainer'
import 'normalize.css'
import './styles/app.global.scss';
import './styles/App.css'

export const WindowContext = React.createContext()

function App() {
	const [windowDimensions, setWindowDimensions] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	})
	const images = []
	for(let i = 1; i < 29; i++){
		images.push(<img key={`getschreckt${i}`} href='./ShrekIsCool/11zon_1.jpeg'/>)
	}

	useEffect(() => {
		window.addEventListener("resize", () => setWindowDimensions({
			width: window.innerWidth,
			height: window.innerHeight,}
			));
	},[])

	return (
		<div className="App">
			<WindowContext.Provider value={windowDimensions}>
				<CanvasBackground/>
				<ScrollingContainer>
					<Home/>
					<Experience/>
				</ScrollingContainer>
			</WindowContext.Provider>
		</div>
	);
}

export default App;
