import React from "react";
import "./fonts.css";
import "./App.css";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import Resume from "./components/Resume";
import Legasy from "./components/Legasy";

function App() {
  return (
    <>
      <div className="bg-blue-100 ">
        <Navbar />
        <div className="flex ">
          <SideNav />
          <div className="w-full grid grid-cols-12 px-8 gap-8 pt-24 my-4">
            <Resume />
            <Legasy />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
