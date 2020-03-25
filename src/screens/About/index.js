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
      <p className="textAbout">Me chamo Mateus Pereira dos Santos, tenho 19 anos e resido em Fortaleza-CE. Possuo curso técnico em informática atrelada ao ensino médio, porém meu contato com a programação veio antes disso, por volta dos 13 anos, quando descobri o universo do desenvolvimento web. Atualmente estou cursando Sistemas e Mídias Digitais na Universidade Federal do Ceará, curso este que além de aperfeiçoar meus conhecimentos de programação, ainda me possibilita ser um profissional muito mais completo, sendo capaz de entender e desenvolver projetos em diversas áreas da tecnologia, como design, audiovisual, redes de computadores... Durante esse meio tempo me apaixonei também pelo mundo mobile, e desde então me tornei mais focado no desenvolvimento Frontend de aplicações Web.</p>
      {windowWidth >= 1000 &&
        <img src={imgProfile} className="imgProfile"/>
      }
    </div>
  );
}

export default About;
