import React from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

// Import reusable components
import DownloadButton from "../common/components/DownloadButton/DownloadButton";
import IconButton from "../common/components/IconButton/IconButton";
import InputField from "../common/components/InputField/InputField";
import TextAreaField from "../common/components/TextAreaField/TextAreaField";
import SubmitButton from "../common/components/SubmitButton/SubmitButton";
import Loader from "../common/components/Loader/Loader";
import cv from "../common/components/Resume/resume.pdf";

// Icons
import { FaReact, FaMobileAlt } from "react-icons/fa";
import {
  AiFillHtml5,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import {
  BiLogoGmail,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoRedux,
  BiLogoJava,
  BiLogoNodejs,
} from "react-icons/bi";
import { BsGit, BsPuzzle } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
import { SiMongodb, SiExpress } from "react-icons/si";
import { RiSendPlaneFill } from "react-icons/ri";

// Images
// import Ataa from "../assets/images/Ataa.png";
import GlobalShare from "../assets/images/GlobalShare.png";

// import Kasper from "../assets/images/Kasper.png";
// import Leon from "../assets/images/Leon.png";
// import twitterLogo from "../assets/images/logo.jpg";

// Components
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

// CSS
import style from "./App.module.css";
import clsx from "clsx";

// Export Components
export {
  Navbar,
  Home,
  About,
  Projects,
  Contact,
  Footer,
  DownloadButton,
  IconButton,
  InputField,
  TextAreaField,
  SubmitButton,
  Loader,
  cv,
};

// Export Project List
export const projects = [
  {
    name: "Real Time Social Media",
    link: "https://twitter-lite-frontend.vercel.app/",
    github: "https://github.com/Nileshnimawat/twitter-lite-frontend",
    github2: "https://github.com/Nileshnimawat/twitter-lite-Backend",

    description:
      "Built a fully functional Twitter clone using the MERN stack (MongoDB, Express.js, React, Node.js) with a sleek modern UI and real-time chat capabilities. Implemented user authentication using JWT, enabling users to sign up, log in, and manage profiles. Users can post tweets, like/unlike posts and engage in real-time conversations through WebSockets. The frontend was crafted using React and Tailwind CSS for a responsive and clean interface, while the backend APIs and WebSocket server were built with Node.js and Express. MongoDB was used to store users, tweets, and chat messages, ensuring efficient data management.",
    image: GlobalShare,
  },

  {
    name: "Levi Music Player",
    link: "https://frontend-levi-music.vercel.app/",
    github: "https://github.com/Nileshnimawat/Frontend_levi_music_player",
     github2: "https://github.com/Nileshnimawat/Backend_Levi_Music_Player",
    description:
      "Built a full-stack Levi music player using the MERN stack (MongoDB, Express.js, React, Node.js) with a modern and responsive UI. Implemented user authentication using JWT, enabling users to register, log in, and manage their accounts. Users can upload and play music files, create and manage playlists, like or unlike songs. The frontend was built with React and Tailwind CSS, Shadcn while Node.js and Express handled the backend APIs. MongoDB was used to store user data, playlists, and song metadata. Integrated secure file upload,  and protected routes to deliver a personalized experience. a frontend clone of Spotify with modern UI and video support using React and Tailwind CSS.",
    image: GlobalShare,
  },
  // {
  //   name: "Mini Project: Currency Converter",
  //   link: "https://currency-generator-pi.vercel.app/",
  //   github: "https://github.com/Nileshnimawat/currency-generator",
   
  //   description:
  //     "Developed a responsive app for real-time currency conversion using a live exchange rate API with React and Tailwind CSS.",
  //   image: Ataa,
  // },
];

// Export Skills List
export const skills = [
  {
    name: "HTML 5",
    icon: <AiFillHtml5 size="25px" color="white" />,
    cssName: "html",
  },
  {
    name: "CSS 3",
    icon: <BiLogoCss3 size="25px" color="white" />,
    cssName: "css",
  },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript size="25px" color="white" />,
    cssName: "javascript",
  },
  {
    name: "React",
    icon: <FaReact size="25px" color="white" />,
    cssName: "react",
  },
  {
    name: "Redux Toolkit",
    icon: <BiLogoRedux size="25px" color="white" />,
    cssName: "redux",
  },
  {
    name: "Responsive Design",
    icon: <FaMobileAlt size="25px" color="white" />,
    cssName: "responsive",
  },
  {
    name: "Git",
    icon: <BsGit size="25px" color="white" />,
    cssName: "git",
  },
  {
    name: "Java",
    icon: <BiLogoJava size="25px" color="white" />,
    cssName: "java",
  },
  {
    name: "C++",
    icon: <TbBrandCpp size="25px" color="white" />,
    cssName: "cpp",
  },
  {
    name: "Problem Solving",
    icon: <BsPuzzle size="25px" color="white" />,
    cssName: "problem-solving",
  },
  {
    name: "Node.js",
    icon: <BiLogoNodejs size="25px" color="white" />,
    cssName: "node",
  },
  {
    name: "Express.js",
    icon: <SiExpress size="25px" color="white" />,
    cssName: "express",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size="25px" color="white" />,
    cssName: "mongodb",
  },
];
