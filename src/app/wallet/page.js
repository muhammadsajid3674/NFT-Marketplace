import { Coinbase, Metamask, WalletConnect } from "@/core/icon";
import { ConnectSide } from "@/core/img";
import Image from "next/image";
import React from "react";

const Wallet = () => {
   return (
      <div className='grid grid-cols-12'>
         <div className='col-span-6'>
            <Image src={ConnectSide} width={"100%"} />
         </div>
         <div className='col-span-5 self-center'>
            <h2>Connect wallet</h2>
            <p className='text-h5 mb-5'>
               Choose a wallet you want to connect. There are several wallet
               providers.
            </p>
            <div className='flex flex-col gap-5 w-60'>
               <button className='btn-secondary'>
                  <Metamask />
                  <span className='font-semibold'>Metamask</span>
               </button>
               <button className='btn-secondary'>
                  <WalletConnect />
                  <span className='font-semibold'>Wallet Connect</span>
               </button>
               <button className='btn-secondary'>
                  <Coinbase />
                  <span className='font-semibold'>Coinbase</span>
               </button>
            </div>
         </div>
      </div>
   );
};

export default Wallet;
