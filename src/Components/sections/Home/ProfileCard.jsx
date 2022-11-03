import React from "react";
import headerImg from "../../../assets/img/DerekHeadshot.svg";
import { ReactComponent as RightArrow } from "../../../assets/img/right-arrow-no-circle.svg";
import "animate.css";

function ProfileCard({ text, onClick }) {
	const isMobile = true;
  return (
    <div className="row">
      <div className="pane-left">
          <h1>Derek DeLizo</h1>
          <h2>They/Them</h2>
          <div>
            <h3>
              {`I'm a`}
              <span
                className="txt-rotate"
                data-rotate='[ " Fullstack Developer", " System Engineer", "n Electrical Engineer" ]'
              >
                <span className="wrap">{text}</span>
              </span>
            </h3>
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
      <div className="pane-right">
					<img src={headerImg} alt="Header Img" />
      </div>
    </div>
  );
}

export default ProfileCard;
