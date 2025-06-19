import React from 'react'
// import style
import style from "./App.module.css";
import clsx from "clsx";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillHtml5,
  AiOutlineEye,
} from "react-icons/ai";

//import images
import Ataa from "../assets/images/Ataa.png";
import GlobalShare from "../assets/images/GlobalShare.png";
import elzero from "../assets/images/elzero.png"
import Kasper from "../assets/images/Kasper.png"
import Leon from "../assets/images/Leon.png"
import twitterLogo from "../assets/images/logo.jpg";

import IconButton from "../common/components/IconButton/IconButton";



import { projects } from './utils';

const Projects = () => {
  return (
    <>
         <div id="Projects" className={style.projects}>
        <div className={style.container}>
          <h2 className={style.title}>Projects</h2>
          <p>
            Here you will find some of the personal projects that I created with
            each project containing its own case study
          </p>
          <div className={style["projects-list"]}>
            {projects.map((project, index) => {
              return (
                <div key={`project${index}`} className={style.project}>
                  <div className={style["project-image"]}>
                    <img src={project.image} alt="Project Image" />
                  </div>
                  <div className={style["project-info"]}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className={style["project-buttons"]}>
                      <IconButton
                        width="170px"
                        height="50px"
                        backgroundColor="var(--primary-main)"
                        color="white"
                        link={project.link}
                        icon={<AiOutlineEye size="25px" color="white" />}
                      >
                        Live Demo
                      </IconButton>
                      <IconButton
                        width="100px"
                        height="50px"
                        backgroundColor="black"
                        color="white"
                        link={project.github}
                        icon={<AiFillGithub size="25px" color="white" />}
                      >
                        Github 
                      </IconButton>
                     { project?.github2 && <IconButton
                        width="100px"
                        height="50px"
                        backgroundColor="black"
                        color="white"
                        link={project.github2}
                        icon={<AiFillGithub size="25px" color="white" />}
                      >
                        Backend
                      </IconButton>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
