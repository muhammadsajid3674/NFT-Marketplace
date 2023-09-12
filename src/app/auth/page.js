import { ConnectSide } from "@/core/img";
import Image from "next/image";
import React from "react";

const Connect = () => {
   return (
      <div className='grid grid-cols-12'>
         <div className='col-span-6'>
            <Image src={ConnectSide} width={'100%'} />
         </div>
         <div className='col-span-6 self-center'>
            <h2>Create Account</h2>
            <p className="text-h5">
               Welcome! enter your details and start creating, collecting and
               selling NFTs.
            </p>
            <form className="w-1/2 flex flex-col gap-5 mt-3">
               <input className="app_input" placeholder='Username' />
               <input className="app_input" placeholder='Email Address' />
               <input className="app_input" placeholder='Password' />
               <input className="app_input" placeholder='Confirm Password' />
               <button className='btn-primary w-full text-center p-3 rounded-full' type='submit'>
                  Create account
               </button>
            </form>
         </div>
      </div>
   );
};

export default Connect;
