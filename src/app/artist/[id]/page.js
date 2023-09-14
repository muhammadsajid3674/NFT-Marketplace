"use client";

import Layout from "@/components/Layout";
import Tabs from "@/components/Tabs";
import {
   Copy,
   DiscordLogo,
   InstagramLogo,
   Plus,
   TwitterLogo,
   YoutubeLogo,
} from "@/core/icon";
import { ArtistCover, Primary, Secondary1 } from "@/core/img";
import { nfts } from "@/core/sample/nfts";
import Image from "next/image";

const Counter = () => {
   return (
      <div className='grid grid-cols-3 gap-5 w-full'>
         <div>
            <span className='font-spaceMono text-h4 font-bold'>240k+</span>
            <p>Total Sale</p>
         </div>
         <div>
            <span className='font-spaceMono text-h4 font-bold'>100k+</span>
            <p>Auctions</p>
         </div>
         <div>
            <span className='font-spaceMono text-h4 font-bold'>240k+</span>
            <p>Artists</p>
         </div>
      </div>
   );
};

const NFTCards = ({ data }) => (
   <>
      {data.length > 0 &&
         data.map((e, i) => (
            <div
               key={i}
               className='col-span-4 bg-dark w-full h-full flex flex-col rounded-3xl relative '
            >
               <div className='self-stretch relative rounded-t-lg'>
                  <Image alt='' src={e.img} className='w-full h-auto' />
               </div>
               <div className='m-5'>
                  <h4>{e.title}</h4>
                  <div className='flex gap-2 my-3'>
                     <Image alt='' src={e.avatar} width={"100%"} />
                     <p>{e.name}</p>
                  </div>
                  <div className='flex-between my-3'>
                     <div>
                        <small className='text-dimCaption'>Price</small>
                        <p className='font-spaceMono'>{e.price} ETH</p>
                     </div>
                     <div>
                        <small className='text-dimCaption'>Highest Bid</small>
                        <p className='font-spaceMono'>{e.highestBid} wETH</p>
                     </div>
                  </div>
               </div>
            </div>
         ))}
   </>
);

const Artist = () => {
   return (
      <main>
         <div className='relative'>
            <Image src={ArtistCover} alt='' className='w-full h-auto' />
            <div className='w-40 absolute bottom-[-15%] left-[9%]'>
               <Image src={Primary} alt='' className='w-full h-auto' />
            </div>
         </div>
         <Layout>
            <div className='grid grid-cols-12 gap-5 my-3'>
               <div className='col-span-10'>
                  <h2>AnimaKid</h2>
               </div>
               <div className='flex gap-5 col-span-2'>
                  <div>
                     <button className='btn btn-primary'>
                        <Copy className='w-6' />
                        <span>id</span>
                     </button>
                  </div>
                  <div>
                     <button className='btn btn-primary'>
                        <Plus className='w-6' />
                        <span>Follow</span>
                     </button>
                  </div>
               </div>
            </div>
            <div className='grid grid-cols-12 my-3'>
               <div className='col-span-6'>
                  <Counter />
                  <div className='mt-3'>
                     <p className='text-dimCaption'>Bio</p>
                     <p>The internet's friendliest designer kid.</p>
                  </div>
                  <div className='mt-3'>
                     <p className='text-dimCaption'>Links</p>
                     <div className='flex gap-3'>
                        <DiscordLogo />
                        <YoutubeLogo />
                        <TwitterLogo />
                        <InstagramLogo />
                     </div>
                  </div>
               </div>
            </div>
         </Layout>
         <div className='border border-darkDim' />
         <Layout className='!p-0'>
            <Tabs
               tabs={["Created", "Owned", "Collections"]}
               panel={[nfts, [], []]}
               count
               component={NFTCards}
               theme={"bg-darkDim"}
            />
         </Layout>
         <div className='border-2 border-dark' />
      </main>
   );
};

export default Artist;
