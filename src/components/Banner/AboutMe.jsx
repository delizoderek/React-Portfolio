import React from "react";
import headerImg from "../../assets/img/DerekAnimatedHeadshot.gif";
import { ReactComponent as LeftArrow } from "../../assets/img/left-arrow-no-circle.svg";
import "animate.css";
import "./banner.css";

function AboutMe({ onClick, text }) {
  return (
    <div className="temp-row">
      <div className="about-me pane-left">
        <button className="button-bottom" onClick={onClick}>
          <LeftArrow
            className="svg-right"
            width={25}
            height={25}
            fill="white"
          />
          {"Back"}
        </button>
        <article>
          <h1>My Story</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </article>
      </div>
      <div className="pane-right">
        <div className="animate__animated animate__zoomIn">
          <img src={headerImg} alt="Header Img" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;