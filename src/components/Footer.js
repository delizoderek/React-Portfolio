import React from "react";

export default function Footer() {
  return (
    <footer className="py-4 prime-bg">
      <div
        className="
        col-12 col-lg-10
        vw-100
        d-flex
        justify-content-around
        custom-direction
      "
      >
        <h2 className="contactlinks quin-text">509-593-0047</h2>
        <h2 className="contactlinks">
          <a
            className="quin-text"
            href="mailto:dwdelizo@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            dwdelizo@gmail.com
          </a>
        </h2>
        <h2 className="contactlinks">
          <a
            className="quin-text"
            href="https://www.linkedin.com/in/derek-delizo/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </h2>
        <h2 className="contactlinks">
          <a
            className="quin-text"
            href="https://github.com/delizoderek"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </h2>
      </div>
    </footer>
  );
}
