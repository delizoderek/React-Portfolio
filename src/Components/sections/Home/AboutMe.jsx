import React from "react";
import ArrowButton from "../../elements/Buttons/ArrowButton/ArrowButton";
import headerImg from "../../../assets/img/DerekAnimatedHeadshot.webp";
import "animate.css";

function AboutMe({ onClick, text }) {
  return (
    <div className="row">
      <div className="about-me pane-left">
						<ArrowButton
							classesToAdd="button-bottom"
							arrowLocation="left"
							fillColor="white"
							onClick={onClick}
							text=" Back "
						/>
        <article>
          <h1 className="title">About Me</h1>
          <p>
            I studied Electrical Engineering at the University of Washington
            Bothell Campus. While there, I worked as a Game Designer on
            Ghostlight Manor and participated in a handful of undergraduate
            research projects. A few of my favorites would be building a user
            interface in MATLAB to assist the biology department in decoding the
            language of crows, creating a cloud-based underwater acoustic
            recorder to monitor noise pollution in Lake Washington, and using
            unity to make an Augmented Reality assembly manual that showed how
            to assemble the E-nable Raptor Reloaded 3D printable prosthetic
            hand. When I am not working, I like to play video games, skateboard
            or snowboard (depending on the season), work on various projects,
            and spend time with my dog. Speaking of my dog, I need to take her for a walk!
          </p>
        </article>
      </div>
      <div className="pane-right">
        <img rel="preload" src={headerImg} alt="Header Img" />
      </div>
    </div>
  );
}

export default AboutMe;
