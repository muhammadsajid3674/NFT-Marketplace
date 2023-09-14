"use client";
import Layout from "@/components/Layout";
import Tabs from "@/components/Tabs";
import { MagnifyingGlass } from "@/core/icon";
import { nfts } from "@/core/sample/nfts";
import Image from "next/image";
import React from "react";

const NFTCards = ({ data }) => (
   <>
      {data.length > 0 &&
         data.map((e, i) => (
            <div
               key={i}
               className='col-span-4 bg-dark w-full h-full flex flex-col rounded-3xl relative '
            >
               <div className='self-stretch relative rounded-t-lg'>
                  <Image alt="" src={e.img} className='w-full h-auto' />
               </div>
               <div className='m-5'>
                  <h4>{e.title}</h4>
                  <div className='flex gap-2 my-3'>
                     <Image alt="" src={e.avatar} width={"100%"} />
                     <p>{e.name}</p>
                  </div>
                  <div className='flex-between my-3'>
                     <div>
                        <small className='text-dimCaption'>Price</small>
                        <p className='font-spaceMono'>{e.price} ETH</p>
                     </div>
                     <div>
                        <small className='text-dimCaption'>
                           Highest Bid
                        </small>
                        <p className='font-spaceMono'>
                           {e.highestBid} wETH
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         ))}
   </>
);

const Marketplace = () => {
   return (
      <main>
         <Layout>
            <div className='flex flex-col gap-3'>
               <h1>Browse Marketplace</h1>
               <p className='text-h5'>
                  Browse through more than 50k NFTs on the NFT Marketplace.
               </p>
               <div className='relative'>
                  <input
                     className='search_input'
                     placeholder='search your favorite NFTs'
                  />
                  <button className={"absolute right-4 top-2 w-6"}>
                     <MagnifyingGlass className={"w-full"} />
                  </button>
               </div>
            </div>
         </Layout>
         <Layout className='!p-0'>
            <Tabs
               tabs={["NFTs", "Collections"]}
               panel={[nfts, []]}
               count
               component={NFTCards}
               theme={"bg-darkDim"}
            />
         </Layout>
         <div className='border-2 border-dark' />
      </main>
   );
};

export default Marketplace;
