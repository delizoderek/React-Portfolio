import React, { useState, useEffect } from "react";
import ProfileCard from './ProfileCard'
import AboutMe from "./AboutMe";
import "animate.css";
import './Home.scss';

export default function Home() {
	const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
	const [flipped, setFlipped] = useState(false)
  const toRotate = [
    "a Fullstack Developer",
    "a Systems Engineer",
    "an Electrical Engineer",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

	const handleClick = () => setFlipped(!flipped)

  return (
    <section className="portfolio-section banner" id="home">
      <div className="container">
				<div className="wrapper">
					<div className={`card ${flipped ? 'card-flipped' : ''}`}>
						<div className="face front">
							<ProfileCard text={text} onClick={handleClick}/>
						</div>
						<div className="face back">
							<AboutMe onClick={handleClick}/>
						</div>
					</div>
				</div>
      </div>
    </section>
  );
}
