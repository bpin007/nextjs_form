import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Access_required_page = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
      <p className='text-5xl font-extrabold'>Account Required!</p>
      <p className='text-center mt-2 text-lg'>You need be logged in and have</p>
      <p className='text-center text-lg'>the necessary permissions to access this.</p>
      <div className="flex gap-16 items-center mt-4 ">
        <div className="flex items-center gap-1 cursor-pointer font-semibold">
          <FaLongArrowAltLeft /> Go Home
        </div>
        <div className="flex items-center gap-1 cursor-pointer px-4 py-3 hover:border-2 hover:border-black rounded-lg font-semibold">
          <FcGoogle /> Login
        </div>
        <div className="flex items-center gap-1 cursor-pointer bg-purple-400 px-4 py-3 rounded-lg  hover:border-2 hover:border-black hover:bg-white font-semibold">
          Sign Up <FaLongArrowAltRight />
        </div>
      </div>
    </div>
  )
}

export default Access_required_page
