import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Gallery() {
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-4">
            <ul className="list-unstyled"> 
                <li  className="nav-item" ><NavLink  className="text-decoration-none text-dark nav-link" to="web">web</NavLink></li>
                <li  className="nav-item" ><NavLink  className="text-decoration-none text-dark nav-link" to="mobile">Mobile</NavLink></li>
                <li  className="nav-item" ><NavLink  className="text-decoration-none text-dark nav-link" to="ui">Ui</NavLink></li>
        
            </ul>
          </div>
          <div className="col-md-8">
            <div className="container">
            <Outlet />
            </div>
          

          </div>
        </div>
      </div>
    </>
  );
}
