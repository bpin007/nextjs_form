import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { ZodType, z } from 'zod';
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';


type FormData = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
}


export default function Companies() {
    const schema: ZodType<FormData> = z.object({
      firstName: z.string().min(2).max(30).nonempty({message:"first name is required"}),
      lastName: z.string().min(2).max(30),
      email: z.string().email(),
      password: z.string().min(5).max(20),
      confirmPassword: z.string().min(5).max(20)
    }).refine((data) => data.password === data.confirmPassword, { message: 'Passwords do not match', path: ["confirmPassword"] });
  const [showEmailInput, setShowEmailInput] = useState(false);

  const handleEmailOptionClick = () => {
    setShowEmailInput(true);
  };

  const { register, handleSubmit,reset,formState:{errors} } = useForm<FormData>({ resolver: zodResolver(schema) });
  const submitData = (data: FormData) => {
    console.log("Form data:", data);
    // Additional submission logic can be added here
    reset()
  };
  return (
    <main>
      <p className='w-[85%] text-center m-auto'>For <span className='font-bold'>startups and companies</span>. Submit your tool, access sponsorships and more.</p>
      <p className='text-sm text-center py-2'>Already have an account? <span className='underline text-base font-semibold cursor-pointer hover:text-green-500'>Login</span></p>
      <div className='grid grid-row-3 items-center gap-5 py-4'>
        <div className='flex items-center gap-1 cursor-pointer py-1 px-3 border-[1px] border-black rounded-lg hover:border-purple-300'><FcGoogle/><p className='px-10 md:px-28'>with Google</p></div>
        <div className='flex items-center gap-1 cursor-pointer py-1 px-3 border-[1px] border-black rounded-lg hover:border-purple-300'><RiLinkedinBoxFill/><p className='px-10 md:px-28'>with LinkedIn</p></div>
        <div className='flex items-center gap-1 cursor-pointer py-1 px-3 border-[1px] border-black rounded-lg hover:border-purple-300' onClick={handleEmailOptionClick}><MdAlternateEmail/><p className='px-10 md:px-28'>with Email</p></div>
      </div>
      {showEmailInput && (
        <form onSubmit={handleSubmit(submitData)}>
        <div className='grid grid-row-3 gap-3'>
            <div className='flex gap-3'>
            <div>
                <p>First Name</p>
            <input type='text' placeholder='Bipin' className='p-2 border-[1px] rounded-lg border-black w-[100%]' {...register("firstName")} />
            {errors.firstName && <span className='text-red-600 text-sm '>{errors.firstName.message}</span>}
            </div>
            <div>
                <p>Last Name</p>
            <input type='text' placeholder='K' className='p-2 border-[1px] rounded-lg border-black w-[100%]' {...register("lastName")}/>
            {errors.lastName && <span className='text-red-600 text-sm '>{errors.lastName.message}</span>}
            </div>
              
            </div>
          <div>
            <p>Email</p>
            <input type='text' placeholder='e.g. bipingowda7@gmail.com' className='p-2 border-[1px] rounded-lg border-black w-full' {...register("email")}/>
            {errors.email && <span className='text-red-600 text-sm '>{errors.email.message}</span>}
          </div>
          <div>
            <p>Password</p>
            <input type='password' placeholder='password' className='p-2 border-[1px] rounded-lg border-black w-full' {...register("password")}/>
            {errors.password && <span className='text-red-600 text-sm '>{errors.password.message}</span>}
            <p className='text-xs'>Must be at least 8 characters</p>
          </div>
          <div>
            <p>confrim</p>
            <input type='password' placeholder='confrim' className='p-2 border-[1px] rounded-lg border-black w-full' {...register("confirmPassword")}/>
            {errors.confirmPassword && <span className='text-red-600 text-sm '>{errors.confirmPassword.message}</span>}
            <p className='text-xs'>Must be at least 8 characters</p>
          </div>
          <div className='flex justify-center items-center'>
            <button className='justify-center cursor-pointer bg-purple-400 px-4 py-3 rounded-lg hover:border-2 hover:border-black hover:bg-white font-semibold' type='submit'>Start Now</button>
          </div>
        </div>
        </form>
      )}
      <p className='text-xs text-center py-2'>By signing up, you agree to the <span className='underline cursor-pointer'>Terms</span> and <span className='underline cursor-pointer'>Privacy</span></p>
    </main>
  );
}
