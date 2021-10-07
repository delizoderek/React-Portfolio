import React from 'react';

function AboutMe() {
    return (
        <section className="about-container">
          <img
            src="./assets/media/SiteContent/DeLizoDerek_Square.jpg"
            id="avatar"
            className="float-start m-3"
            alt="Headshot of a person in a collared shirt"
          />
          <div className="d-flex p-4">
            <p id="aboutme-paragraph">
              Hello my name is Derek DeLizo,
              <br />
              <br />
              I am an electrical engineer that is transitioning to becoming a
              software developer. Currently, I am completing the full stack
              development bootcamp through UW. Web development has always been a
              passion of mine since I was young and now, the dream is becoming a
              reality.
            </p>
          </div>
      </section>
    )
}

export default AboutMe
