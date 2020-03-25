import React, {useState, useEffect} from 'react';
import './styles.css';
import CardSkill from '../../components/CardSkill';

function Skills({nameClass}) {
  const [classTitle, setClassTitle] = useState("");
  const [classCards, setClassCards] = useState("");

  useEffect(() => {
    if(nameClass === "hide"){
      setTimeout(() => {
        setClassTitle("upTitle");
      }, 1500);
    }
    else{
      setClassTitle("");
    }
  }, [nameClass]);

  useEffect(() => {
    if(classTitle === "upTitle"){
      setTimeout(() => setClassCards("hideCards"), 1500);
    }
    else{
      setClassCards("");
    }
  }, [classTitle])

  return (
    <div className="slide skills" id="skills">
      <div className={"ocult " + nameClass + " " + classTitle}>
        <h4 className="title">Skills</h4>
      </div>
      {classTitle === "upTitle" &&
        <div className={"cards ocultCard " + classCards}>
          <CardSkill title="Developer" skills={["HTML5", "CSS3", "React JS", "React Native", "Java", "PostgreSQL", "Firebase"]} percents={["100%", "100%", "80%", "80%", "80%", "80%", "50%"]}/>
          <CardSkill title="Design" skills={["UI", "UX", "Adobe XD", "Adobe Photoshop", "Mobile First"]} percents={["70%", "60%", "90%", "75%", "75%"]}/>
          <CardSkill title="Projetos" skills={["GIT", "Scrum", "Trello", "Slack"]} percents={["80%", "50%", "100%", "100%"]}/>
        </div>
      }
    </div>
  );
}

export default Skills;
