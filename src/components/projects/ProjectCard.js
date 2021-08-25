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
    return (
        <div class="col-12 col-lg-5 card my-3 second-bg">
          <div class="card second-bg">
            <img
              src={props.imgLink}
              class="card-img-top"
              alt={props.altText}
            />
            <div class="card-body second-bg">
              <h5 class="card-title">{props.projectName}</h5>
              <p class="card-text">{props.tech.join(" | ")}</p>
              {props.links.map((item, i) => <a key={i} href={item.link} target="_blank" className="btn custom-btn">{item.title}</a>)}
            </div>
          </div>
        </div>
    )
}
