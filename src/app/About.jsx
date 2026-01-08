import React from "react";
import style from "./App.module.css";

import { skills } from "./utils";

const About = () => {
  return (
    <>
      <div id="About" className={style.about}>
        <div className={style.container}>
          <h2 className={style.title}>About Me</h2>

          <p>
            Here you will find more information about me, what I do, and my
            current skills in programming and technology.
          </p>

          <div className={style["about-content"]}>
            <div className={style["about-info"]}>
              <h3>Get to know me!</h3>

              <p>
                I'm a <span>Full Stack Web Developer</span> specializing in
                building real-time, full-stack, and AI-powered web applications.
                I work with the <span>MERN stack, Next.js, and TypeScript</span>
                and focus on scalability, clean architecture, and well-structured
                backend systems that deliver smooth user experiences.
                <br />
                <br />
                I have hands-on experience with{" "}
                <span>Next.js (App Router)</span>, <span>React</span>,{" "}
                <span>Node.js</span>, <span>Express.js</span>,
                <span>MongoDB</span>, <span>Prisma ORM</span>,{" "}
                <span>Socket.IO</span> for real-time features, and AI tools like
                the <span>Gemini API</span>. My portfolio includes projects such as
                an <span>AI Website Builder</span>, <span>Real-time Music
                Player</span>, and <span>TweetLite Social App</span>, which you
                can explore in the <span>Projects</span> section.
                <br />
                <br />
                I also work on <span>freelance projects</span>, including
                developing a responsive business website for Utishta Bharata Pvt.
                Ltd. (UBPL), Indore.
                <br />
                <br />
                I'm open to <span>job opportunities</span> where I can contribute
                to impactful products, continue learning, and grow professionally.
                If you have a role that aligns with my skill set, feel free to{" "}
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

