import React from "react";
import { useState } from "react";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Sidebar from "./components/Sidebar";
import Signup from "./components/Signup";
function App() {
  return (
    // <div className="flex" >
    //   <Sidebar/>
    //   <div className="flex-col"><Carousel/>
    //   <div className="flex-col justify-center align-center">
    //   <span className="mx-96 text-3xl  font-nunito "> Quick Notes</span>
    //   <div className="flex -my-2 border-4 rounded-3xl border-solid border-black w-3/4">
    //     <Card imgSrc="https://img.icons8.com/sf-regular/48/null/compact-camera.png" 
    //     title="Scan with your camera"/>
    //       <Card imgSrc="https://img.icons8.com/sf-regular/48/null/microphone.png" 
    //     title="Speech to Text"/>
    //     <Card imgSrc="https://img.icons8.com/ios-filled/50/null/grammar.png" 
    //     title="Check grammar of Text"/>
    //     <Card imgSrc="https://img.icons8.com/ios/50/null/emotional-intelligence.png" 
    //     title="Sentiment Analysis"/>
    //     </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <Signup/>
    </div>
  );
}

export default App;
