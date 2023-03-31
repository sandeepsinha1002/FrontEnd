import React from 'react'
import Card from './Card'
const Notescard = () => {
  return (
  
      <div className="flex-col justify-center align-center absolute bottom-6 left-[19rem]">
      <span className="mx-96 text-2xl  font-nunito text-amber-200 relative top-10 right-[22rem] ">QUICK NOTES 🗒️</span>
      <div className="flex -my-2 border-1 rounded-lg border-solid shadow-lg bg-white p-2 w-3/4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />  
        </div>
        </div>
        
  )
}

export default Notescard