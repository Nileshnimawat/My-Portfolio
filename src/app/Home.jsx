import React from 'react'
import {
  BiLogoGmail,
  BiLogoLinkedin,
} from "react-icons/bi";

import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

import DownloadButton from "../common/components/DownloadButton/DownloadButton";
import cv from "../common/components/Resume/resume.pdf";


import style from "./App.module.css";
import clsx from "clsx";


const Home = () => {
  return (
    <>
        <div id="Home" className={style.home}>
        <div className={style["home-content"]}>
          <h1>HEY, I'M Nilesh Nimawat</h1>
          <p>
            A Full Stack Developer building full-stack Websites and Web Applications with a focus on creating seamless user experiences and robust backend functionality, contributing to the success of the overall product.
          </p>
          <a
            href={cv}
            download="cv-PDF-document"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadButton>Download CV</DownloadButton>
          </a>
        </div>
        <div className={style["scroll-icon"]}>
          <div
            className={style["scroll-down"]}
            style={{ color: "skyblue !important" }}
          >
            <div className={style.chevrons}>
              <div className={style["chevron-down"]}></div>
              <div className={style["chevron-down"]}></div>
            </div>
          </div>
        </div>
        <div className={style["contact-nav"]}>
          <a
            className={style.github}
            target="_blank"
            href="https://github.com/Nileshnimawat"
          >
            <AiFillGithub size="30px" color="black" />
          </a>
           <a
            className={style.linkedin} 
            target="_blank"
            href="https://www.linkedin.com/in/nilesh-nimawat-089746257"
          >
            <AiFillLinkedin size="30px" color="black" />
          </a>
          <a
            className={style.gmail} 
            target="_blank"
            href="mailto:nileshnimawat121@gmail.com?subject=SendMail&body=Description"
          >
            <BiLogoGmail size="30px" color="black" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Home
