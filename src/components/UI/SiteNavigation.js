import React from "react";

function SiteNavigation(props) {
  return (
    <nav className="site-nav">
      <div className="nav-btn">
        <span className="nav-text hover">Home</span>
      </div>
      <div className="nav-btn">
        <span className="nav-text hover">Blog</span>
      </div>
      <div className="nav-btn">
        <span className="nav-text hover">Resume</span>
      </div>
    </nav>
  );
}

export default SiteNavigation;
