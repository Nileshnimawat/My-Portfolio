import React from 'react'
import style from "./App.module.css";
import { FaReact } from "react-icons/fa";
import { useState, Navlink } from 'react';


const Navbar = ({menu, setMenu}) => {


  return (
    <>
       <div className={style.nav}>
              <a className={style.logo}>
                <FaReact color="var(--primary-main)" size="50px" />
                <h5>Nilesh</h5>
              </a>
              <ul>
                <li>
                  <a href="#Home">Home</a>
                </li>
                <li>
                  <a href="#About">About</a>
                </li>
                <li>
                  <a href="#Projects">Projects</a>
                </li>
                <li>
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
              <div className={style["menu-icon"]}>
                <input id="checkbox" className={style["checkbox2"]} type="checkbox" />
                <label
                  className={`${style.toggle} ${style.toggle2}`}
                  for="checkbox"
                  onClick={() => setMenu(!menu)}
                >
                  <div className={`${style.bars} ${style.bar4}`}></div>
                  <div className={`${style.bars} ${style.bar5}`}></div>
                  <div className={`${style.bars} ${style.bar6}`}></div>
                </label>
              </div>
            </div>
            {menu === true && (
              <ul className={style.menu}>
                <li>
                  <a href="#Home">Home</a>
                </li>
                <li>
                  <a href="#About">About</a>
                </li>
                <li>
                  <a href="#Projects">Projects</a>
                </li>
                <li>
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            )}
    </>
  )
}

export default Navbar
