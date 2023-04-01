import React from 'react'
import Card from './Card'
const Notescard = () => {
  return (
  
                // {/* <div className="mx-96 text-2xl  font-nunito text-amber-200 relative top-10 right-[22rem] ">
                //    QUICK NOTES 🗒️
                // </div>
                // <div className='flex -my-12'>
                // <div>Recently</div>
                // <div>Recently</div>
                // <div>Recently</div>
                // <div>Recently</div>
                // </div> */
                <div className='relative w-3/4 left-6 bottom-16'>
                  <p className='text-2xl top-8 relative left-6 font-nunito font-bold text-gray-700'>NOTES 🗒️</p>
               <div className="flex -my-2 border-1 rounded-lg border-solid shadow-lg bg-white">
                   <Card title="To-Do" desc="shot for dribble on wednesday" img="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"/>
                   <Card title="Template Text" desc="dqafhjsd affsji afljs alijf naflj ailfja failjfa falijfao afioaf haifugks afuaukshf fafkhafhaf kabfuoabf jhabfuafbkhafka fka fkabffouabfka ffjkabhbfa fk"/>
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