import React from 'react'
import Carousel from "./components/Carousel/Carousel";
import Notescard from "./components/FolderList/Notescard";
import Sidebar from "./components/Sidebar/Sidebar";
import AddFolder from './components/AddFolder/AddFolder';



const Home = () => {
  return (
    <>
      <div className='flex'>
        <div className='w-[16%]'>
          <Sidebar />
        </div>
        <div className='w-[80%]'>
          <Carousel />
          <Notescard />
        </div>
      </div>
      <AddFolder />
    </>
  )
}

export default Home