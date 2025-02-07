import React from "react";

export default function About() {
  return (
    <>
      <div className="about-cover text-center">
        <div className="container pad_about">
        <div className="p-5">
          <h1 className="text-white">ABOUT COMPONENT</h1>
          <div>
            <h6><i className="fa-solid fa-star text-white"></i></h6>
          </div>
        </div>


        <div className="row">
          <div className="col-md-6">
            <p className="text-white text-start">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className="col-md-6">
            <p className="text-white text-start">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
        </div>

      </div>
    </>
  );
}
