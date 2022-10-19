import React from 'react';
import Headshot from '../../../assets/DerekHeadshot.jpg';
import './Home.scss';

export default function Home() {
	return (
		<div id="Home" className="split-pane">
			<div className="pane pane-left">
				<article>
					<h1>Hello I am Derek</h1>
				</article>
			</div>
			<div className="pane pane-right">
				<img style={{ maxWidth: '50%' }} src={Headshot} alt="person wearing a black shirt"/>
			</div>
		</div>
	);
}
