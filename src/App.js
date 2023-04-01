import React from "react";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Notescard from "./components/Notescard";
import Sidebar from "./components/Sidebar";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Title from "./Title";
function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" Component={Home}></Route>
      <Route exact path="/title" Component={Title}></Route>
      </Routes>
      </Router>
    // <Home/>
  );
}

export default App;
