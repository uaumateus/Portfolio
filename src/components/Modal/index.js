import React, {useState, useEffect} from 'react';
import './styles.css';

function Modal({handleModal, classModal, work}) {
  const [classBackground, setClassBackground] = useState("");

  useEffect(() => {
    if(classModal === "showModal")
      setClassBackground("showBackground");
    else
      setClassBackground("hideBackground");
  }, [classModal]);

  return (
    <>
        <div className={"backgroundModal " + classBackground} onClick={handleModal}></div>
        <div className="modal">
            <div className={"content " + classModal}>
              <div className="containerTop">
                <p>{work.name}</p>
                <i class="fas fa-times" onClick={handleModal}></i>
              </div>
              <p className="aboutWork">{work.description}</p>
              <p className="aboutWork"><b>Technologies used: </b>{work.skills}</p>
              <img src={work.image}/>
            </div>
        </div>
    </>
  );
}

export default Modal;
