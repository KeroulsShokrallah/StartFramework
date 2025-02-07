import React from "react";

export default function Portoflio() {
  return (
    <>
      <div className="portflio-cover">
        <div className="container p-5">
          <div className="p-5 mb-3">
            <h1>PORTOFLIO COMPONENT</h1>
            <div>
              <h6 className="portoflio">
                <i className="fa-solid fa-star"></i>
              </h6>
            </div>
          </div>
          <div className="container">
            <div className="row g-5"> 
              <div className="col-md-6 col-lg-4 layer2 position-relative rounded rounded-2">
                <img className="w-100" src="../src/assets/port1.png" alt="" />
                <div className="layer position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
                  <i class="fa-solid fa-plus fs-6 text-white layer3 rounded rounded-2"></i>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 layer2 position-relative rounded rounded-2 ">
                <img className="w-100" src="../src/assets/port1.png" alt="" />
                <div className="layer position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center ">
                  <i class="fa-solid fa-plus fs-6 text-white layer3 rounded rounded-2"></i>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 layer2 position-relative rounded rounded-2">
                <img className="w-100" src="../src/assets/port1.png" alt="" />
                <div className="layer position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center ">
                  <i class="fa-solid fa-plus fs-6 text-white layer3 rounded rounded-2"></i>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 layer2 position-relative rounded rounded-2">
                <img className="w-100" src="../src/assets/port1.png" alt="" />
                <div className="layer position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center ">
                  <i class="fa-solid fa-plus fs-6 text-white layer3 rounded rounded-2"></i>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 layer2 position-relative  rounded rounded-2">
                <img className="w-100" src="../src/assets/port1.png" alt="" />
                <div className="layer position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center ">
                  <i class="fa-solid fa-plus fs-6 text-white layer3 rounded rounded-2"></i>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 layer2 position-relative  rounded rounded-2">
                <img className="w-100" src="../src/assets/port1.png" alt="" />
                <div className="layer position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center ">
                  <i class="fa-solid fa-plus fs-6 text-white layer3 rounded rounded-2"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
