import React, {useEffect, useState} from 'react';
import './styles.css';

import lumiSquare from './assets/lumiSquare.jpg';
import smartEarSquare from './assets/smartEarSquare.jpg';
import UFCineSquare from './assets/UFCineSquare.jpg';
import respondeSquare from './assets/respondeAquiSquare.jpg';
import noPontoSquare from './assets/NoPontoSquare.png';
import smdSquare from './assets/smdSquare.jpg';

import lumi from '../../components/Modal/assets/lumi.png';
import noPonto from '../../components/Modal/assets/NoPonto.jpeg';
import respondeAqui from '../../components/Modal/assets/respondeAqui.png';
import smartEar from '../../components/Modal/assets/smartEar.png';
import SMD from '../../components/Modal/assets/SMD.jpeg';
import UFCine from '../../components/Modal/assets/UFCine.png';

var Scroll  = require('react-scroll');
var ScrollElement = Scroll.ScrollElement;

function Works({nameClass, handleModal}) {
  const [classTitle, setClassTitle] = useState("");
  const [page, setPage] = useState(0);
  const [buttonWeb, setButtonWeb] = useState("active");
  const [buttonMobile, setButtonMobile] = useState("");

  useEffect(() => {
    if(nameClass === "hide"){
      setTimeout(() => {
        setClassTitle("swingText");
      }, 1500);
    }
    else{
      setClassTitle("");
    }
  }, [nameClass]);

  function handlePage(index) {
    setPage(index);
    if(index === 0){
      setButtonMobile("");
      setButtonWeb("active");
    }else{
      setButtonMobile("active");
      setButtonWeb("");
    }
  }

  return (
    <div id="works" className="slide works" id="works">
      <div className={"ocult " + nameClass + " " + classTitle}>
        <h4 className="title">Works</h4>
      </div>
      <div className="buttons">
        <button className={buttonWeb} onClick={() => handlePage(0)}>Web</button>
        <button className={buttonMobile} onClick={() => handlePage(1)}>Mobile</button>
      </div>
      <div className="jobs">
        {page === 0 ?
          <>
            <article className="job" onClick={() => handleModal({name: "Lumi", description: "Lumi is a platform created with the intention of generating visibility to audiovisual projects developed in the course of Systems and Digital Media, from the Federal University of Ceará.", skills: "HTML5, CSS3, ReactJS, Firebase", image: lumi})}>
              <article>
                <img src={lumiSquare}/>
              </article>
              <p>Lumi</p>
            </article>
            <article className="job" onClick={() => handleModal({name: "SmartEar", description: "SmartEar is an application developed by the Now Loading team, of which I took part in the 2nd semester in the course on Systems and Digital Media, at the Federal University of Ceará. The application is part of the 2nd Integrated Project of the course, which aims to make university students closer to the job market, having to develop applications for a specific client. The application has the function of teaching music theory in a playful and dynamic way, through tasks and mini-games.", skills: "HTML5, CSS3, P5.js", image: smartEar})}>
              <article>
                <img src={smartEarSquare}/>
              </article>
              <p>SmartEar</p>
            </article>
            <article className="job" onClick={() => handleModal({name: "UFCine", description: "UFCine is an online film straming platform produced in the Cinema and Audiovisual course at the Federal University of Ceará. In addition to the films, the system also provides access to the students' portfolios on the course.", skills: "HTML5, CSS3, JavaScript, JQuery, MongoDB", image: UFCine})}>
              <article>
                <img src={UFCineSquare}/>
              </article>
              <p>UFCine</p>
            </article>
            <article className="job" onClick={() => handleModal({name: "Responde Aqui", description: "RespondeAqui is a system developed for students at the Federal University of Ceará to share research forms so that other students can know and answer their research.", skills: "HTML5, CSS3, JavaScript, SpringBoot, PostgreSQL", image: respondeAqui})}>
              <article>
                <img src={respondeSquare}/>
              </article>
              <p>Responde Aqui</p>
            </article>
          </>
          :
          <>
            <article className="job" onClick={() => handleModal({name: "No Ponto", description: "NoPonto is an application that aims to alert users when it is close to a certain point chosen by him. Very useful to know when to get off public transport, for example.", skills: "React Native", image: noPonto})}>
              <article>
                <img src={noPontoSquare}/>
              </article>
              <p>No Ponto</p>
            </article>
            <article className="job" onClick={() => handleModal({name: "SMD", description: "SMD is an application for controlling schedules and resources of the Systems and Digital Media course. It is possible to book classrooms and resources available in the coordination of the course, in addition to viewing the class schedules.", skills: "React Native, Firebase", image: SMD})}>
              <article>
                <img src={smdSquare}/>
              </article>
              <p>SMD</p>
            </article>
          </>
        }
        
      </div>
    </div>
  );
}

export default ScrollElement(Works);
