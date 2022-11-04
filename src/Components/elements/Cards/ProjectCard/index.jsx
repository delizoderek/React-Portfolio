import React from "react";
import "./ProjectCard.scss";
import { ReactComponent as Application } from "../../../../assets/img/icons/application.svg";
import { ReactComponent as Github } from "../../../../assets/img/icons/github.svg";
import { ReactComponent as Information } from "../../../../assets/img/icons/information.svg";
import { ReactComponent as Newspaper } from "../../../../assets/img/icons/newspaper.svg";
import { ReactComponent as WaveDivider } from "../../../../assets/img/wave-haikei.svg";

const ProjectCard = (props) => {
  const {
    title,
    shortDescription,
    longDescription,
    imgUrl,
    deployment,
    github,
    moreInfo,
    inTheNews,
  } = props;
  return (
    <div className="project-card">
      <div className="project-innercard">
        <div className="imgContainer">
          <img src={imgUrl} />
          <div className="project-header">
            <h4>{title}</h4>
            <span>{shortDescription}</span>
          </div>
        </div>
        <div className="project-content">
          <div className="project-details">
            {/*<WaveDivider className="wave-divider"/> */}
            <p>{longDescription}</p>
            <div className="project-links">
              {deployment && (
                <a href={deployment} target="_blank" rel="noreferrer">
                  <Application width="50px" height="50px" />
                </a>
              )}
              {github && (
                <a href={github} target="_blank" rel="noreferrer">
                  <Github width="50px" height="50px" />
                </a>
              )}
              {moreInfo && (
                <a href={moreInfo} target="_blank" rel="noreferrer">
                  <Information width="50px" height="50px" />
                </a>
              )}
              {inTheNews && (
                <a href={inTheNews} target="_blank" rel="noreferrer">
                  <Newspaper width="50px" height="50px" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
