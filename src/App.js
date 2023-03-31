import React from "react";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Notescard from "./components/Notescard";
import Sidebar from "./components/Sidebar";
import Signup from "./components/Signup";
function App() {
  return (
    <div className="flex" >
      <Sidebar/>
      <div className="flex-col"><Carousel/>
      <Notescard/>
      </div>
      </div>
    // <div>
    //   <Signup/>
    // </div>
  );
}

export default App;
