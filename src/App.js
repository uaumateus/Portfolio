import React, {useState, useEffect} from 'react';
import FloatingBar from './components/FloatingBar';
import Home from './screens/Home';
import About from './screens/About';
import Skills from './screens/Skills';
import Works from './screens/Works';
import Contact from './screens/Contact';
import Modal from './components/Modal';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  const [valueProgress, setValueProgress] = useState(0);
  const [classModal, setClassModal] = useState("hideModal");
  const [showModal, setShowModal] = useState(false);
  const [classAbout, setClassAbout] = useState("");
  const [classSkills, setClassSkills] = useState("");
  const [classWorks, setClassWorks] = useState("");
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(windowDimensions.width < 1000){
      setClassAbout("hide");
      setClassSkills("hide");
      setClassWorks("hide");
    }
  }, [windowDimensions]);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }
  
  function scroll(){
    var scroll = document.getElementById("container").scrollTop;
    
    setValueProgress((720/document.getElementById("scroll").clientWidth) * scroll);

    var positionElement = document.getElementById("about").offsetLeft;
    var widthElement = document.getElementById("about").clientWidth;
    if(scroll >= positionElement - ((widthElement/2) + 400)){
      setClassAbout("hide");
    }else{
      setClassAbout("");
    }

    var positionElement = document.getElementById("skills").offsetLeft;
    var widthElement = document.getElementById("skills").clientWidth;
    if(scroll >= positionElement - ((widthElement/2) + 400)){
      setClassSkills("hide");
    }else{
      setClassSkills("");
    }

    var positionElement = document.getElementById("works").offsetLeft;
    var widthElement = document.getElementById("works").clientWidth;
    if(scroll >= positionElement - ((widthElement/2) + 400)){
      setClassWorks("hide");
    }else{
      setClassWorks("");
    }
  }

  function handleModal(){
    if(showModal){
      setClassModal("hideModal");
      setTimeout(() => {
        setShowModal(!showModal);
      }, 800);
    }else{
      setClassModal("showModal");
      setShowModal(!showModal);
    }
  }

  return (
    <div className="container" onScroll={scroll}>
      <div className="outer-wrapper" id="container">
        <div className="wrapper" id="scroll">
          <Home windowWidth={windowDimensions.width}/>
          <About nameClass={classAbout} windowWidth={windowDimensions.width}/>
          <Skills nameClass={classSkills}/>
          <Works nameClass={classWorks} handleModal={handleModal}/>
          <Contact />
        </div>
      </div>
      {windowDimensions.width >= 1000 ?
        <FloatingBar valueProgress={valueProgress}/>
        :
        <NavBar />
      }
      
      {showModal &&
        <Modal handleModal={handleModal} classModal={classModal}/>
      }
    </div>
  );
}

export default App;
