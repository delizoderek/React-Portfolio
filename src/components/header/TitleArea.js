import React from "react";

export default function titleArea() {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h1 className="mx-3 quin-text">Derek DeLizo</h1>
      <button
        id="navBtn"
        className="hamburger"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa fa-bars"></i>
      </button>
    </div>
  );
}
