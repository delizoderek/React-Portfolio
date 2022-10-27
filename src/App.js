import React from 'react';
// import MainPage from './Components/MainPage';
import { Home, Experience } from './Components/sections';
import 'normalize.css'
import './styles/app.global.scss';
import './styles/App.css'

function App() {
	return (
		<div className="App">
			<Home/>
			<Experience/>
		</div>
	);
}

export default App;
