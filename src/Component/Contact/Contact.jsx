import React from "react";

export default function Contact() {
  return (
    <>
      <div className="contact-cover ">
        <div className="container p-5">
          <div className="p-5 mb-3">
            <h1>CONTACT COMPONENT</h1>
            <div>
              <h6 className="portoflio">
                <i className="fa-solid fa-star"></i>
              </h6>
            </div>
          </div>

<input type="text" className="form-control my-4 border-0 border-bottom py-2" placeholder="User Name" />

<input type="text" className="form-control my-4 border-0 border-bottom py-2" placeholder="User Age" />

<input type="text" className="form-control my-4 border-0 border-bottom py-2" placeholder="User Email" />

<input type="text" className="form-control my-4 border-0 border-bottom py-2" placeholder="User password" />

<button className="btn btn-success mt-4 py-3 ">Send Message</button>

        </div>
      </div>
    </>
  );
}
