import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    "karona webapplication": {
      description:
        "This web application is similar to Instagram and YouTube and is currently undergoing development as part of my startup. It has features like user authentication, uploading posts, and exploring other users' content. This project has helped me improve my skills in React, Python Flask, SQL, backend development, and UI/UX design.",
      githubLink: "https://github.com/hisanthooosh/karona-code",
    },
    "karona mobile application": {
      description:
        "This mobile application complements the web application developed for my startup. It allows users to access the platform's features on the go, including browsing and interacting with posts. The mobile app is built using React Native, enhancing my skills in mobile development and expanding the reach of the platform to a wider audience.",
      githubLink: "https://github.com/hisanthooosh/karona-app",
    },
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName]?.description}
        <br />

        <a
          href={desc[projectName]?.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectBox;

