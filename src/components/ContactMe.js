import React from "react";

export default function ContactMe() {
  return (
    <div
      className="
        col-12 col-lg-10
        vw-100
        d-flex
        pb-5
        justify-content-around
        custom-direction
        prime-bg
      "
    >
      <h2 class="contactlinks quin-text">509-593-0047</h2>
      <h2 class="contactlinks">
        <a class="quin-text" href="mailto:dwdelizo@gmail.com" target="_blank">
          dwdelizo@gmail.com
        </a>
      </h2>
      <h2 class="contactlinks">
        <a
          class="quin-text"
          href="https://www.linkedin.com/in/derek-delizo/"
          target="_blank"
        >
          LinkedIn
        </a>
      </h2>
      <h2 class="contactlinks">
        <a
          class="quin-text"
          href="https://github.com/delizoderek"
          target="_blank"
        >
          Github
        </a>
      </h2>
    </div>
  );
}
