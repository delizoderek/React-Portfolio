import React from "react";
import headerImg from "../../../assets/img/DerekHeadshot.svg";
import { ReactComponent as RightArrow } from "../../../assets/img/right-arrow-no-circle.svg";
import "animate.css";
import "./banner.css";

function ProfileCard({ text, onClick }) {
  return (
    <div className="row">
      <div className="pane-left">
        <div className="animate__animated animate__fadeIn">
          <h1>
            Derek DeLizo{" "}
            <span>
              <h2>They/Them</h2>
            </span>
          </h1>
          <div>
            <h2>
              {`I'm a `}{" "}
              <span
                className="txt-rotate"
                data-rotate='[ "Fullstack Developer", "System Engineer", "Electrical Engineer" ]'
              >
                <span className="wrap">{text}</span>
              </span>
            </h2>
            <p>
              I’m a dynamic, motivated, results-oriented Developer who enjoys
              developing innovative solutions that drive technological
              advancement. Throughout my career, I’ve acquired and honed
              outstanding skills in system design, project management, testing,
              validation, research, and Agile methodologies. Further, I maintain
              a proven track record of completing projects on-time and under
              budget while exceeding stringent expectations.
            </p>
            <button className="button-top" onClick={onClick}>
              {" My Story "}
              <RightArrow
                className="svg-left"
                width={25}
                height={25}
                fill="white"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="pane-right">
        <div className="animate__animated animate__zoomIn">
          <img className="bounce" src={headerImg} alt="Header Img" />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
