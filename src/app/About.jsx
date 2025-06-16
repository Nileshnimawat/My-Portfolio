import React from "react";
import style from "./App.module.css";

// import icons
import { FaReact } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { BsFacebook, BsGit, BsPuzzle } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
import { RiSendPlaneFill } from "react-icons/ri";

import {
  BiLogoGmail,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoRedux,
  BiLogoJava,
  BiLogoNodejs,
  BiLogoMongodb,
} from "react-icons/bi";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillHtml5,
  AiOutlineEye,
} from "react-icons/ai";


import { skills } from "./utils";


const About = () => {
    
   
  return (
    <>
      <div id="About" className={style.about}>
        <div className={style.container}>
          <h2 className={style.title}>About Me</h2>
          <p>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
          <div className={style["about-content"]}>
            <div className={style["about-info"]}>
              <h3>Get to know me!</h3>
              <p>
                I'm a <span>MERN Stack Developer</span> skilled in building
                full-stack Web Applications using MongoDB, Express.js, React,
                and Node.js. I focus on delivering end-to-end solutions that
                ensure a seamless user experience and contribute to the overall
                success of the product. Check out some of my work in the{" "}
                <span>Projects</span> section. <br />
                <br />
                I'm open to <span>Job</span> opportunities where I can
                contribute, grow, and continue learning. If you have a role that
                matches my skill set and experience, please don't hesitate to{" "}
                <span>contact</span> me.
              </p>
            </div>
            <div className={style["my-skill"]}>
              <h3>My Skills</h3>
              <div className={style.skills}>
                {skills.map((skill, index) => {
                  return (
                    <div
                      key={`skill${index}`}
                      className={`${style.skill} ${style[skill.cssName]}`}
                    >
                      <div className={style["skill-name"]}>{skill.name}</div>
                      <div className={style["skill-icon"]}>{skill.icon}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
