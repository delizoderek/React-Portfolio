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
              <h5 className="card-title">{projectName}</h5>
              <p className="card-text">{tech.join(" | ")}</p>
              {links.map((item, i) => <a key={i} href={item.link} target="_blank" className="btn custom-btn" rel="noreferrer">{item.title}</a>)}
            </div>
          </div>
        </div>
    )
}
