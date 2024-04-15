import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";

export default function Indivisual() {
  const [showEmailInput, setShowEmailInput] = useState(false);

  const handleEmailOptionClick = () => {
    setShowEmailInput(true);
  };



  return (
    <main>
      <p className='w-[85%] text-center m-auto'>Get access to the community, favorite and rate tools, and more.</p>
      <p className='text-sm text-center py-2'>Already have an account? <span className='underline text-base font-semibold cursor-pointer hover:text-green-500'>Login</span></p>
      <div className='grid grid-row-3 items-center gap-5 py-4'>
        <div className='flex items-center gap-1 cursor-pointer py-1 px-3 border-[1px] border-black rounded-lg hover:border-purple-300'><FcGoogle/><p className='px-10 md:px-28'>with Google</p></div>
        <div className='flex items-center gap-1 cursor-pointer py-1 px-3 border-[1px] border-black rounded-lg hover:border-purple-300'><RiLinkedinBoxFill/><p className='px-10 md:px-28'>with LinkedIn</p></div>
        <div className='flex items-center gap-1 cursor-pointer py-1 px-3 border-[1px] border-black rounded-lg hover:border-purple-300' onClick={handleEmailOptionClick}><MdAlternateEmail/><p className='px-10 md:px-28'>with Email</p></div>
      </div>
      {showEmailInput && (
        <div className='grid grid-row-3 gap-3'>
          <div>
            <p>Email</p>
            <input type='text' placeholder='e.g. bipingowda7@gmail.com' className='p-2 border-[1px] rounded-lg border-black w-full' />
          </div>
          <div>
            <p>Password</p>
            <input type='password' placeholder='password' className='p-2 border-[1px] rounded-lg border-black w-full' />
            <p className='text-xs'>Must be at least 8 characters</p>
          </div>
          <div className='flex justify-center items-center'>
            <button className='justify-center cursor-pointer bg-purple-400 px-4 py-3 rounded-lg hover:border-2 hover:border-black hover:bg-white font-semibold'>Start Now</button>
          </div>
        </div>
      )}
      <p className='text-xs text-center py-2'>By signing up, you agree to the <span>Terms</span> and <span>Privacy</span></p>
    </main>
  );
}
