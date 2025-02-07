import React from "react";

export default function Footer() {
  return (
    <>
      <div className="nav-color2 pt-3 justify-content-between">
        <div className="container d-flex justify-content-between align-items-center p-3 row">
          <div className="col-md-4">
            <h2 className="fs-4 text-white">LOCATION</h2>
            <h4 className="fs-6 text-white">2215 John Daniel Drive</h4>
            <h4 className="fs-6 text-white">Clark, MO 65243</h4>
          </div>
          <div className="col-md-4 my-5">
            <h2 className="fs-4 text-white">AROUND THE WEB</h2>
           <span className="fs-6 m-1"><i className="fa-brands fa-facebook rounded-circle border-1 border p-2 text-white"></i></span>
           <span className="fs-6 m-1"><i className="fa-brands fa-twitter rounded-circle border-1 border p-2 text-white"></i></span>
           <span className="fs-6 m-1"><i className="fa-brands fa-linkedin rounded-circle border-1 border p-2 text-white"></i></span>
           <span className="fs-6 m-1"><i className="fa-solid fa-globe rounded-circle border-1 border p-2 text-white"></i></span>
          </div>
          <div className="col-md-4">
            <h2 className="fs-4 text-white">ABOUT FREELANCER</h2>
            <h4 className="fs-6 text-white">Freelance is a free to use, licensed Bootstrap theme created</h4>
            <h4 className="fs-6 text-white">by Route</h4>
          </div>
        </div>
        <div className="nav-color p-2">
          <h5 className="text-white fs-6 pt-1"> Copyright © Your Website 2021</h5>
       
        </div>
        
      </div>
    </>
  );
}
