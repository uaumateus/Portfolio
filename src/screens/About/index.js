import React from 'react';
import './styles.css';

import imgBubble from './assets/bubble.svg';
import imgProfile from './assets/profile.jpeg';

function About({nameClass, windowWidth}) {

  return (
    <div className="slide about " id="about">
      <img src={imgBubble} className="bubbleBackground" />
      <div className={"ocult " + nameClass}>
        <h4 className="title">About</h4>
      </div>
      {windowWidth < 1000 &&
        <img src={imgProfile} className="imgProfile"/>
      }
      <p className="textAbout">My name is Mateus, I am 20 years old and I live in Fortaleza, Ceará - Brazil. I am a computer technician and currently do the 8th semester of the Systems and Digital Media course at the Federal University of Ceará. My passion is to develop and implement interfaces for Web and Mobile systems. Continue to know more about me...</p>
      {/* {windowWidth >= 1000 &&
        <img src={imgProfile} className="imgProfile"/>
      } */}
    </div>
  );
}

export default About;
