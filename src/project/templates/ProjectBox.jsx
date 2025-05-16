// import React from "react";
// import { FaGithub } from "react-icons/fa";


// const ProjectBox = ({ projectName }) => {
//   const desc = {
//     "karona webapplication": {
//       description:
//         "This web application is similar to Instagram and YouTube and is currently undergoing development as part of my startup. It has features like user authentication, uploading posts, and exploring other users' content. This project has helped me improve my skills in React, Python Flask, SQL, backend development, and UI/UX design.",
//       githubLink: "https://github.com/hisanthooosh/karona-code",
//     },
//     "karona mobile application": {
//       description:
//         "This mobile application complements the web application developed for my startup. It allows users to access the platform's features on the go, including browsing and interacting with posts. The mobile app is built using React Native, enhancing my skills in mobile development and expanding the reach of the platform to a wider audience.",
//       githubLink: "https://github.com/hisanthooosh/karona-app",
//     },
//   };

//   return (
//     <div className="projectBox">
//       <div>
//         <br />
//         <h3>{projectName}</h3>
//         <br />
//         {desc[projectName]?.description}
//         <br />

//         <a
//           href={desc[projectName]?.githubLink}
//           target="_blank"
//           rel="noreferrer"
//         >
//           <button className="projectbtn">
//             <FaGithub /> Github
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// };
// export default ProjectBox;



import React from "react";

const ProjectBox = ({ projectName }) => {
  const desc = {
    
    "MEMU": {
      description:
        "An event management web application where users can book events, agents can manage services, and owners have dashboards for insights. Frontend is deployed and functional.",
      status: "Deployed",
      deploymentUrl: "https://test1-git-main-dhanush-kadiris-projects.vercel.app/", // Replace with actual deployment URL
    },
    "KD CHATS": {
      description:
        "A simple business webpage for your venture with essential information and contact details. Deployed and accessible.",
      status: "Deployed",
      deploymentUrl: "https://kdchats.vercel.app/", // Replace with actual deployment URL
    },
    "Geo Spatial Planner": {
      description:
        "A mapping tool that allows users to pin locations and calculate distances. Built using Leaflet and Geolocation APIs. Fully deployed.",
      status: "Deployed",
      deploymentUrl: "https://geospatial-planner.vercel.app/", // Replace with actual deployment URL
    },
    "ALPACK": {
      description:
        "A smart weather protection system that detects sudden rain or harsh weather and activates protective responses. Under hardware and prototyping development.",
      status: "Under Development",
    },
    "VAAYUJA": {
      description:
        "A waste-to-wealth solution using CO₂ as an energy source. It captures CO₂ from the air and waste combustion, converting it into usable energy. Currently in ideation and research.",
      status: "Under Development",
    },
    "FLO": {
      description:
        "Fast Lane Operation system designed to reduce vehicle congestion near tollgates. Focuses on automation and time-saving during traffic bottlenecks.",
      status: "Under Development",
    },
    "RIACT": {
      description:
        "An emergency response device triggered by sudden vehicle stoppage. It offers immediate alerts and assistance. Hardware prototyping in progress.",
      status: "Under Development",
    },
    "Y-WIRE": {
      description:
        "A wireless charging solution aimed at eliminating traditional wired device charging. Part of a broader innovation in energy transfer. Under prototyping.",
      status: "Under Development",
    },
    "COMPANIO": {
      description:
        "A unique social networking platform where users can find roommates, gym partners, attend or host events, and stay updated on current affairs. In development.",
      status: "Under Development",
    },
    "Instakart": {
      description:
        "An e-commerce project focusing on seamless shopping experiences and fast delivery. Still in ideation phase.",
      status: "Under Development",
    },
    "AI skill enhancer": {
      description:
        "A platform aimed at enhancing skills through AI-powered learning modules. Helps users grow technically with personalized learning paths.",
      status: "Under Development",
    },
  };

  const data = desc[projectName];

  return (
    <div className="projectBox">
      <h3>{projectName}</h3>
      <p>{data?.description || "Description coming soon."}</p>
      <p style={{marginTop:'10px'}}><strong>Status:</strong> {data?.status}</p>
      {data?.deploymentUrl && (
        <a href={data.deploymentUrl} target="_blank" rel="noreferrer">
          <button className="projectbtn">View Deployment</button>
        </a>
      )}
    </div>
  );
};

export default ProjectBox;
