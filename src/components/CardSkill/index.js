import React, {useState} from 'react';
import './styles.css';

function CardSkill({title, skills, percents}) {
  const [classCard, setClassCard] = useState("");
  const [classSkills, setClassSkills] = useState("");

  function hideCard() {
    setClassCard("hideCard");
    setClassSkills("hideSkills")
  }

  function ocultCard() {
    setClassCard("");
    setClassSkills("");
  }

  return (
    <div className="cardSkill" onMouseEnter={hideCard} onMouseLeave={ocultCard}>
      <p className="titleCard">{title}</p>
      <div className={"infos " + classCard}>
        <div className={classSkills}>
          {skills.map((item, index) => (
            <article>
              <p>{item}</p>
              <span className="percentEmpty"></span>
              <span className="percentFill" style={{ width: `${percents[index]}`, height: "4px", background: "#FFF", borderRadius: "20px", marginTop: "-5px", marginBottom: "-25px"}}></span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardSkill;
