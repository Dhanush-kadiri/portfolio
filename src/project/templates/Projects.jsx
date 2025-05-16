import React from "react";
import ProjectBox from "./ProjectBox";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectName="MEMU" />
        <ProjectBox projectName="KD CHATS" />
        <ProjectBox projectName="Geo Spatial Planner" />
        <ProjectBox projectName="ALPACK" />
        <ProjectBox projectName="VAAYUJA" />
        <ProjectBox projectName="FLO" />
        <ProjectBox projectName="RIACT" />
        <ProjectBox projectName="Y-WIRE" />
        <ProjectBox projectName="COMPANIO" />
        <ProjectBox projectName="Instakart" />
        <ProjectBox projectName="AI skill enhancer" />
      </div>
    </div>
  );
};

export default Projects;
