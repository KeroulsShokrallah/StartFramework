import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Component/About/About";
import Layout from "./Component/Layout/Layout";
import Home from "./Component/Home/Home";
import Contact from "./Component/Contact/Contact"
import Portoflio from "./Component/Portoflio/Portoflio"
import NotFound from "./Component/NotFound/NotFound"
import Gallery from "./Component/Gallery/Gallery";
import Web from "./Component/Web/Web"
import Mobile from "./Component/Mobile/Mobile"
import Ui from "./Component/Ui/Ui"

let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index :true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "about", element: <About /> },
      { path: "portoflio", element: <Portoflio /> },
      { path: "contact", element: <Contact /> },
      { path: "gallery", element: <Gallery /> ,children : [
        {path : "web" , element :<Web/>},
        {path : "mobile" , element :<Mobile/>},
        {path : "ui" , element :<Ui/>},
      ] },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={x}></RouterProvider>;
}

export default App;
