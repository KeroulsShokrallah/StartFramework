import React from "react";

export default function Home() {
  return (
    <>
      <div className="home-cover d-flex justify-content-center align-items-center ">
        <div className="w-25 home-mob ">
          <img className="w-75" src="../src/assets/1.svg" alt="" />
          <h1 className="text-white">start Framework</h1>
          <div>
            <h6  className="line">   <i className="fa-solid fa-star text-white"></i></h6>
          </div>
       <div>
       <h5 className="text-white h6 mt-1">
            Graphic Artist - Web Designer - Illustrator
          </h5>
       </div>
     
        </div>
      </div>
    </>
  );
}
