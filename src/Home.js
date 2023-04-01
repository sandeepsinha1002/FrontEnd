import React from 'react'
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Notescard from "./components/Notescard";
import Sidebar from "./components/Sidebar";
const Home = () => {
  return (
    <div>
    <div className="flex" >
    <Sidebar/>
    <div className='flex-col'>
    <Carousel/>
    <Notescard/>
    </div>
    </div>
    </div>
  )
}

export default Home