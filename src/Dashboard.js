import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Sidebar from './components/Sidebar/Sidebar'
import Carousel from './components/Carousel/Carousel'
import Notescard from './components/FolderList/Notescard'
import AddFolder from './components/AddFolder/AddFolder'

const Dashboard = () => {
  // read loggedIn property from reducer;
  const details = useSelector(state => state.login);

  const loggedIn = details?.loggedIn;

  return (
    <>
      {loggedIn ?
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
        </> : <h1> You don't have permission to view this page</h1>
      }
    </>
  )
}

export default Dashboard