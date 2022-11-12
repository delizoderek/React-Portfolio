import React from 'react';
import CanvasBackground from './Components/elements/CanvasBackground';
import { Home, Experience } from './Components/sections';
import ScrollingContainer from './Components/containers/ScrollingContainer'
import 'normalize.css'
import './styles/app.global.scss';
import './styles/App.css'

function App() {
	return (
		<div className="App">
			<CanvasBackground/>
			<ScrollingContainer>
				<Home/>
				<Experience/>
			</ScrollingContainer>
		</div>
	);
}

export default App;
