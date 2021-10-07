import React from "react";

function PortfolioNavigation(props) {
  const {currentTab,handleSetTab} = props;
  return (
    <nav className="nav-portfolio">
        <button className="nav-btn" onClick={() => handleSetTab('About')}>
          <span className="nav-text hover">About</span>
        </button>
        <button className="nav-btn" onClick={() => handleSetTab('News')}>
          <span className="nav-text hover">News</span>
        </button>
        <button className="nav-btn" onClick={() => handleSetTab('Projects')}>
          <span className="nav-text hover">Projects</span>
        </button>
        <button className="nav-btn" onClick={() => handleSetTab('Contact')}>
          <span className="nav-text hover">Contact</span>
        </button>
      </nav>
  );
}

export default PortfolioNavigation;
