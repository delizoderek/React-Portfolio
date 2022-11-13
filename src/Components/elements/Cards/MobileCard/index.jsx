import React from "react";
import "./MobileCard.scss";
import { ReactComponent as Application } from "../../../../assets/img/icons/application.svg";
import { ReactComponent as Github } from "../../../../assets/img/icons/github.svg";
import { ReactComponent as Information } from "../../../../assets/img/icons/information.svg";
import { ReactComponent as Newspaper } from "../../../../assets/img/icons/newspaper.svg";

const MobileCard = (props) => {
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
    <div className="mobile-card">
      <div className="mobile-header">
        <h4>{title}</h4>
        <span>{shortDescription}</span>
      </div>
      <div className="mobile-content">
        <div className="mobile-details">
          {/*<WaveDivider className="wave-divider"/> */}
          <p>{longDescription}</p>
          <div className="mobile-links">
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
  );
};

export default MobileCard;
