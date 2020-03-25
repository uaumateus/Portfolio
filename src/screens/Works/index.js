import React, {useEffect, useState} from 'react';
import './styles.css';

var Scroll  = require('react-scroll');
var ScrollElement = Scroll.ScrollElement;

function Works({nameClass, handleModal}) {
  const [classTitle, setClassTitle] = useState("");

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

  return (
    <div id="works" className="slide works" id="works">
      <div className={"ocult " + nameClass + " " + classTitle}>
        <h4 className="title">Works</h4>
      </div>
      <div className="buttons">
        <button className="active">Web</button>
        <button>Mobile</button>
      </div>
      <div className="jobs" onClick={handleModal}>
        <article className="job">
          <article></article>
          <p>Lumi</p>
        </article>
        <article className="job">
          <article></article>
          <p>Lumi</p>
        </article>
        <article className="job">
          <article></article>
          <p>Lumi</p>
        </article>
        <article className="job">
          <article></article>
          <p>Lumi</p>
        </article>
        <article className="job">
          <article></article>
          <p>Lumi</p>
        </article>
      </div>
    </div>
  );
}

export default ScrollElement(Works);
