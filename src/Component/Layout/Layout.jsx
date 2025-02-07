import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="min-vh-100">
        <Navbar />
        <div className=" mt-5 ">
          <Outlet />
        </div>
      </div>

      <Footer />
    </>
  );
}
