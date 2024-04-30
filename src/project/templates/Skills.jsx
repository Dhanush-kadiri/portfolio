import React from "react";
import {
  FaReact,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { DiJavascript1 , DiMysql } from "react-icons/di";
// import { SiReact } from "react-icons/si";



const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Javascript: <DiJavascript1 />,
    Python: <FaPython />,
    React: <FaReact />,
    Github: <FaGithub />,
    JAVA: <FaJava />,
    MYSQL: < DiMysql  />,
    ReactNative : < FaReact/>
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
