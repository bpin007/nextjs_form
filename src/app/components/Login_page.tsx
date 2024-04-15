import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";

export default function Login_page() {
  return (
    <main>
      <div className='flex flex-col items-center justify-center '>
      <p className='text-5xl font-extrabold'>Login</p>
      <p className='text-center mt-4 text-lg hover:border-purple-300 md:w-[60%] m-auto leading-6 '>Access your AllThingsAI account now. The place to find and learn about AI.</p>
      <p className='text-sm py-2'>Don't have an account? <span className='underline text-base font-semibold cursor-pointer hover:text-green-500'>Sign up</span></p>
      <div className='grid grid-row-3 items-center gap-5 py-4'>
      <div className=' flex items-center gap-1 cursor-pointer py-1 px-3 border-[1px] border-black rounded-lg hover:border-purple-300'><FcGoogle/><p className='px-10 md:px-28'>with Google</p></div>
      <div className='flex items-center gap-1 cursor-pointer py-1 px-3 border-[1px] border-black rounded-lg hover:border-purple-300'><RiLinkedinBoxFill/><p className='px-10 md:px-28'>with LinkedIn</p></div>
      <div className='flex items-center gap-1 cursor-pointer py-1 px-3 border-[1px] border-black rounded-lg hover:border-purple-300'><MdAlternateEmail/><p className='px-10 md:px-28'>with Email</p></div>
      </div>
      </div>
    </main>
  )
}
