import React from 'react'
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Notescard from "./components/Notescard";
import Sidebar from "./components/Sidebar";
import LoginHeader from './components/LoginHeader';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Feature from './components/Feature';
const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Feature/>
    <Footer/>
    </>
  )
}

export default Home