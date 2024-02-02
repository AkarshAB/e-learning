import React, { useEffect } from 'react';
import Title from '../common/title/Title.jsx';
import { homeAbout } from '../../dummydata.js';
import AWrapper from './AWrapper.jsx';
import './About.css';

function AboutCard() {
  useEffect(() => {
    const flexSBElements = document.querySelectorAll('.flexSB');
    const observerOptions = {
      threshold: 0.5,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scrolled');
        } else {
          entry.target.classList.remove('scrolled');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe each element with the flexSB class
    flexSBElements.forEach((element) => {
      observer.observe(element);
    });

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []); // The empty dependency array ensures that the effect runs only once

  return (
    <>
      <section className="aboutHome">
        <div className="container-fluid border flexSB w-100">
          <div className="left row h-50">
            <img src="./images/about.webp" alt="" />
          </div>
          <div className="right row">
            <Title subtitle={"LEARN ANYTHING"} title={'Benefits About Online Education'} />
            <div className="items">
              {homeAbout.map((val, index) => (
                <div key={index} className="item flexSB">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <h5>{val.title}</h5>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AWrapper />
    </>
  );
}

export default AboutCard;
