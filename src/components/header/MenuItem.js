import React from "react";

function MenuItem(props) {
  return (
    <li className="nav-item">
      {props.downloadable ? 
      (<a className="nav-link quin-text" href={props.link} download>{props.title}</a>)
      : (<a className="nav-link quin-text" href={props.link}>{props.title}</a>)}
    </li>
  );
}

export default MenuItem;