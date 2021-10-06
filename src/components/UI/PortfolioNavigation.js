import React from "react";

function PortfolioNavigation(props) {
  return (
    <nav className="nav-portfolio">
        <button className="nav-btn">
          <span className="nav-text hover">About</span>
        </button>
        <button className="nav-btn">
          <span className="nav-text hover">News</span>
        </button>
        <button className="nav-btn">
          <span className="nav-text hover">Projects</span>
        </button>
        <button className="nav-btn">
          <span className="nav-text hover">Contact</span>
        </button>
      </nav>
  );
}

export default PortfolioNavigation;
