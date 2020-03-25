import React, {useState, useEffect} from 'react';
import './styles.css';
import scrollTo from '../../utils';

import avatar from './assets/avatar.png';
import avatarFace from '../Contact/assets/profile.png';

function Home({ windowWidth }) {
  const [subtitle, setSubtitle] = useState("");
  function typeWrite(element){
      const textArray = element.split('');
      setSubtitle(' ');
      let textActual = '';
      textArray.forEach(function(letter, i){   
        setTimeout(function(){
            textActual += letter;
            setSubtitle(textActual);
        }, 90 * i);
    });
  }
  useEffect(() => {
    typeWrite("Desenvolvedor Front-End");
  },[]);
  return (
    <div className="slide home" id="home">
      {windowWidth < 1000 &&
        <span>
            <img src={avatarFace} className="avatar"/>
        </span>
      }
      <article>
        <h1 className="title">Mateus Santos</h1>
        <h1 className="subtitle">{subtitle}</h1>
      </article>
      {windowWidth >= 1000 &&
        <>
          <span>
              <img src={avatar} className="avatar"/>
          </span>
          <article>
            <i className="fas fa-chevron-right" onClick={() => scrollTo(document.getElementById("about").offsetLeft)}></i>
          </article>
        </>
      }
    </div>
  );
}

export default Home;
