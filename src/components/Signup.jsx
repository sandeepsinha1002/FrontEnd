import React from 'react'
import  {AiFillGithub} from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import bg from '../assets/images/bg.jpeg';
const Signup = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
        <img src={bg} alt="" className='absolute w-full h-full object-cover mix-blend-lighten'/>
    <div className='flex justify-center items-center h-full'>
        <form action="" className='max-w-[400px] w-full mx-auto bg-white p-8 text-black rounded-3xl'>
            <h2 className='text-4xl font-bold text-center py-8'>NoteAI.in</h2>
            <div className='flex justify-between mb-5'>
                <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex  items-center'>
                    <FcGoogle className='mr-2'/>Google
                </p>
                <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'>
                    <AiFillGithub className='mr-2'/>Github
                </p>
            </div>
            <div className='flex flex-col mb-4'>
                <label >Username</label>
                <input type="text" className='border relative p-2 bg-gray-100'/>
            </div>
            <div className='flex flex-col mb-4'>
                <label>Email</label>
                <input className='border relative p-2 bg-gray-100' type="email" />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Password</label>
                <input className='border relative p-2 bg-gray-100' type="password" />
            </div>
            <button className='w-full py-3 mt-5 bg-indigo-600 hover:bg-indigo-500  relative text-white'>Sign In</button>
            <p className='flex items-center'><input className='mr-2' type="checkbox" name="" id="" />Remember Me</p>
            <p className='text-center mt-8'>Not a Member? Sign Up Now</p>
        </form>
    </div>
    </div>
  )
}

export default Signup