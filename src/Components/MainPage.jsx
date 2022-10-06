import React from 'react';
import ScrollingContainer from './containers/ScrollingContainer';
import Navbar from './elements/Navbar/Navbar';
import * as Sections from './sections';

class MainPage extends React.Component {
	constructor(props){
		super(props);
		this.pages = [
			'Home',
			'About Me',
			'Skills',
			'Experience',
			'News'
		];
	}

	render(){
		return (
			<>
				<Navbar pages={this.pages}/>
				<ScrollingContainer>
					{this.pages.map(pageName => React.createElement(Sections[pageName.replaceAll(' ','')],{key:`section-${pageName}`}))}
				</ScrollingContainer>
			</>
		);
	}

}
export default MainPage;
