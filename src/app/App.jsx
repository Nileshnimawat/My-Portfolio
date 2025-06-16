import React, { useState, useRef } from "react";
// import style
import style from "./App.module.css";
import clsx from "clsx";


import {
  Navbar,
  Home,
  About,
  Projects,
  Footer,
  Contact
} from "./utils"


function App() {
 
  const [menu, setMenu] = useState(false);
  const [loading, setLoading] = useState(false);


  return (
    <div className={style.app}>
      {/* Navbar */}
      <Navbar menu={menu} setMenu={setMenu}/>

      {/* Home */}
      <Home/>

      {/* About */}
      <About/>

      {/* Projects */}
     <Projects/>

      {/* Contact */}
     <Contact loading={loading} setLoading={setLoading}/>
     
      {/* footer */}
      <Footer/>
    </div>
  );
}

export default App;
