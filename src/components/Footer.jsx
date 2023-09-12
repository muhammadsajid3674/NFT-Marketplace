import {
   DiscordLogo,
   Eye,
   InstagramLogo,
   Storefront,
   TwitterLogo,
   YoutubeLogo,
} from "@/core/icon";
import React from "react";

const Footer = () => {
   return (
      <footer className='px-36 py-10 bg-darkDim'>
         <div className='grid grid-cols-4 gap-5'>
            <div>
               <div className='flex items-center gap-5 mb-3'>
                  <Storefront />
                  <h5 className='font-spaceMono'>NFT Marketplace</h5>
               </div>
               <p className='text-dimCaption'>
                  NFT marketplace UI created with Anima for Figma.
               </p>
               <div className='mt-3'>
                  <p className='text-dimCaption'>Join our community</p>
                  <div className='flex gap-3'>
                     <DiscordLogo />
                     <YoutubeLogo />
                     <TwitterLogo />
                     <InstagramLogo />
                  </div>
               </div>
            </div>
            <div>
               <h5>Explore</h5>
               <ul className='list-none'>
                  <li className="text-dimCaption py-3">Marketplace</li>
                  <li className="text-dimCaption py-3">Rankings</li>
                  <li className="text-dimCaption py-3">Connect a wallet</li>
               </ul>
            </div>
            <div className='col-span-2'>
               <h5 className='font-spaceMono mb-3'>Join our weekly digest</h5>
               <p className='text-dimCaption'>
                  Get exclusive promotions & updates straight to your inbox.
               </p>
               <div className='mt-3'>
                  <p className='text-dimCaption'>Join our community</p>
                  <div className='input-cont w-11/12'>
                     <input placeholder='Enter your email here' />
                     <button className='btn btn-primary'>
                        <Eye className='w-6' />
                        <span>See NFT</span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div className="border border-1 border-dimCaption w-full my-5"/>
         <small>&copy; NFT Market. Use this template freely.</small>
      </footer>
   );
};

export default Footer;
