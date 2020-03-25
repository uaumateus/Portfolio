import React, {useState, useEffect} from 'react';
import scrollTo from '../../utils';
import './styles.css';

function FloatingBar({ valueProgress }) {
  const [classFloating, setClassFloating] = useState("initialFloatingBar");
  const [styleProgress, setStyleProgress] = useState({});
  const [circleOne, setCircleOne] = useState("");
  const [circleTwo, setCircleTwo] = useState("");
  const [circleThree, setCircleThree] = useState("");
  const [circleFour, setCircleFour] = useState("");
  const [circleFive, setCircleFive] = useState("");
  const [showProgress, setShowProgress] = useState(false);
 
  useEffect(() => {
    setTimeout(() => {
      setShowProgress(true);
    }, 3000);
  }, [])

  useEffect(() => {
    setStyleProgress({ width: `${valueProgress + "px"}`, left: `${(document.getElementById("about").clientWidth/2) - 290 + "px"}`})
    var scroll = document.getElementById("container").scrollTop;
    if(scroll > 0)
      setCircleOne("completed");
    else
      setCircleOne("");
    if(scroll >= document.getElementById("about").offsetLeft-1)
      setCircleTwo("completed");
    else
      setCircleTwo("");
    if(scroll >= document.getElementById("skills").offsetLeft-1)
      setCircleThree("completed");
    else
      setCircleThree("");
    if(scroll >= document.getElementById("works").offsetLeft-1)
      setCircleFour("completed");
    else
      setCircleFour("");
    if(scroll >= document.getElementById("contact").offsetLeft-1)
      setCircleFive("completed");
    else
      setCircleFive("");
  }, [valueProgress])

  return (
    <div className="containerFloating">
      <div className={"floatingBar " + classFloating}>
        <p className="options" onClick={() => scrollTo(document.getElementById("home").offsetLeft)}>Início</p>
        <p className="options separator">-</p>
        <p className="options" onClick={() => scrollTo(document.getElementById("about").offsetLeft)}>Sobre</p>
        <p className="options separator">-</p>
        <p className="options" onClick={() => {scrollTo(document.getElementById("skills").offsetLeft); valueProgress = valueProgress}}>Habilidades</p>
        <p className="options separator">-</p>
        <p className="options" onClick={() => scrollTo(document.getElementById("works").offsetLeft)}>Trabalhos</p>
        <p className="options separator">-</p>
        <p className="options" onClick={() => scrollTo(document.getElementById("contact").offsetLeft)}>Contato</p>
      </div>
      <div className="progressiveBar">
        <span className={"circle " + circleOne}></span>
        <span className={"circle " + circleTwo}></span>
        <span className={"circle " + circleThree}></span>
        <span className={"circle " + circleFour}></span>
        <span className={"circle " + circleFive}></span>
      </div>
      {showProgress &&
        <div className="progress" style={styleProgress}></div>
      }
    </div>
  );
}

export default FloatingBar;
