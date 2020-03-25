import React, {useState, useEffect} from 'react';
import './styles.css';

function Modal({handleModal, classModal}) {
  const [classBackground, setClassBackground] = useState("");

  useEffect(() => {
    if(classModal === "showModal")
      setClassBackground("showBackground");
    else
      setClassBackground("hideBackground");
  }, [classModal]);

  return (
    <>
        <div className={"backgroundModal " + classBackground}></div>
        <div className="modal">
            <div className={"content " + classModal} onClick={handleModal}>
                
            </div>
        </div>
    </>
  );
}

export default Modal;
