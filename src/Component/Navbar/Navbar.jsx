import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {


const[menuopen , setMenuOpen] =useState(false)



  return (
    <>
      <div className="nav-color position-fixed top-0 start-0 end-0 z-2 ">
        <div className="container d-flex justify-content-between align-items-center p-2 navbar-edit">
          <div>
            <ul className="d-flex list-unstyled p-3">
              <li>
                <Link className="text-decoration-none text-white fa-2xl logo2" to="">
                  START FRAMEWORK
                </Link>
              </li>
            </ul>

            <div className="menu" onClick={()=>{
              setMenuOpen(!menuopen)

              console.log("yes i'm here");
              
            }}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="brb">
          <div id="ultest" className={menuopen? "open": ""}>
            <ul className="d-flex list-unstyled gap-3 nav nav-pills edit">
              <li className="nav-item">
                <NavLink
                  className="text-decoration-none text-white fa-1 nav-link"
                  to="about"
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="text-decoration-none text-white fa-1 nav-link"
                  to="portoflio"
                >
                  PORTOFLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="text-decoration-none text-white fa-1 nav-link"
                  to="contact"
                >
                  CONTACT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="text-decoration-none text-white fa-1 nav-link"
                  to="gallery"
                >
                  GALLERY
                </NavLink>
              </li>
            </ul>
          </div>
          </div>
       
        </div>
      </div>
    </>
  );
}
