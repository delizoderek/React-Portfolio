import React from 'react';
import Headshot from '../../../assets/DerekHeadshot.jpg';
import './Home.scss';

export default function Home() {
	return (
		<div id="Home" className="split-pane">
			<div className="pane pane-left">
				<article>
					<h1>Hello I am Derek</h1>
					<p>
            I’m a dynamic, motivated, results-oriented Developer who enjoys
            developing innovative solutions that drive technological
            advancement. Throughout my career, I’ve acquired and honed
            outstanding skills in system design, project management, testing,
            validation, research, and Agile methodologies. Further, I maintain a
            proven track record of completing projects on-time and under budget
            while exceeding stringent expectations.
					</p>
					<p>
            I’ve earned respect as a diligent, analytical leader and
            collaborator who guides team members in successfully realizing
            project and company objectives through a people-focused approach. As
            an out-of-the-box thinker, I remain committed to making continuous
            improvements in planning, process, communication, and teamwork to
            enable long-term growth and profitability.
					</p>
				</article>
			</div>
			<div className="pane pane-right">
				<img style={{ maxWidth: '50%' }} src={Headshot} alt="person wearing a black shirt"/>
			</div>
		</div>
	);
}
