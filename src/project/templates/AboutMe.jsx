import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";

const ResumePDF = "https://1drv.ms/b/s!Ag6fMB7KrEcghedSYV2iiLonOYoNsQ"

const About = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = ResumePDF;
    link.download = "Dhanush_Kadiri_Resume.pdf";
    link.click();
  };

  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
<p>
    Hey there! I'm <b>Dhanush Kadiri</b>, a final-year student at SV University with a passion for entrepreneurship and frontend web development.
    <br /><br />
    As a <b>co-founder</b> and <b>frontend developer</b> at LetsLoot Startup, I pioneered <b>frontend development</b> for our groundbreaking platform. I led interface design and implementation, fostering user engagement and revenue generation. My adept <b>leadership skills</b> fostered team cohesion and <b>adaptability in dynamic environments</b>. I've presented progress updates to stakeholders, showcasing our unique value proposition, and handled diverse challenges with resilience, ensuring smooth project execution and problem-solving.
    <br /><br />
    Alongside my academic pursuits, I've explored the world of <b>acting</b>, adding a dynamic dimension to my profile. 
    <br /><br />
    Creativity fuels my projects, and my <b>commitment</b> to excellence drives me to deliver outstanding results every time. I love infusing my creations with beautiful designs and my unique twists.
    <br /><br />
    Apart from my <b>technical</b> and <b>academic skills</b>, I have a deep interest in <b>acting</b>, which adds a dynamic dimension to my profile. I've proven my commitment through my involvement in various projects and my continuous pursuit of personal and professional growth.
    <br /><br />
    <b>Collaboration</b> excites me! I'm always open to <b>new opportunities</b> where I can contribute and grow. Feel free to connect with me via the links in the footer. You can also find me on YouTube for my acting projects by clicking the YouTube link in the footer.
    <br /><br />
    Beyond coding, I'm a discord server maestro, a design aficionado, and a photography enthusiast in my spare time.
</p>


          <button onClick={downloadResume} className="resume-btn">
            Download Resume <FaFileDownload />
          </button>
        </div>
      </div>

      <h1 className="SkillsHeading">Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Javascript" />
        <Skills skill="React JS" />
        <Skills skill="Github" />
        <Skills skill="Python" />
        <Skills skill="MYSQL" />
        <Skills skill="JAVA" />
        <Skills skill="React Native"/>
      </div>
    </>
  );
};

export default About;
