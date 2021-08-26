import React from 'react'

/* props object
    imgLink - String
    altText - String
    projectName - String
    tech - Array
    links - Array of objects {
        link - string
        title - string
    }
 */
export default function ProjectCard(props) {
    const {imgLink,altText,projectName,tech,links} = props.project;
    return (
        <div className="col-12 col-lg-3 col-md-5 card custom-card-margin border-0 second-bg">
          <div className="card second-bg">
            <img
              src={imgLink}
              className="card-img-top"
              alt={altText}
            />
            <div className="card-body second-bg">
              <h5 className="card-title quin-text">{projectName}</h5>
              <p className="card-text quin-text">{tech.join(" | ")}</p>
              <div className="d-flex flex-column align-items-start">
                {links.map((item, i) => <a key={i} href={item.link} target="_blank" className="btn custom-btn m-1 prime-text" rel="noreferrer">{item.title}</a>)}
              </div>
            </div>
          </div>
        </div>
    )
}
