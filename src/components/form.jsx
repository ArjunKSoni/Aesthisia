import React from 'react'
import { AiOutlineEye } from 'react-icons/ai';

export default function Form() {
    return (
        <div className=' form-side flex rounded-3xl items-start justify-center p-6'>
            <div className='w-full'>
                <div style={{ height: "100%" }} className='flex flex-col mb-10 items-center justify-center w-full'>
                    <img src="logo.png" width={"50px"} height={"50px"} alt="" />
                    <h2 className='text-3xl flex gap-2 font-bold'>Welcome <p style={{ color: "#08A593" }}>Back!</p></h2>
                    <h3 className='text-slate-500 text-sm'>Glad to see you, Again!</h3>
                </div>
                <div className='input mb-4 flex flex-col items-center justify-center  w-full'>
                    <input className='p-4 mb-4' placeholder='Enter Your email' type="text" />
                    <div className='input2 flex items-center justify-between p-4'><input placeholder='Enter Your password' className='w-4/5' type="text" /><AiOutlineEye className='ml-1' /></div>
                    <div style={{ width: "60%" }} className='text-end'><h3 className='text-slate-400 text-sm'>Forgot Password?</h3></div>
                </div>
                <div className='input flex flex-col items-center justify-center  w-full'>
                    <button style={{ width: "60%", height: "40px" }} className='text-white mt-8 bg-black rounded-lg'>Log In</button>
                </div>
                <div>
                    <h2 className='text-sm mt-10 flex items-center gap-1 justify-center text-slate-500'>Don't have an account yet? <a href='#' className='text-blue-500 '>Sign Up</a></h2>
                </div>
            </div>
        </div>
    )
}
