import React from 'react'
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Notescard from "./components/Notescard";
import Sidebar from "./components/Sidebar";
import LoginHeader from './components/LoginHeader';
const Home = () => {
  return (
    <div>
    <div className="flex" >
    <Sidebar/>
    <div className='flex-col'>
    <Carousel/>
    <Notescard/>
    </div>
    {/* <LoginHeader/> */}
    </div>
    </div>
  )
}

export default Home