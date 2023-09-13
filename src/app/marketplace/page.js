import Layout from "@/components/Layout";
import Tabs from "@/components/Tabs";
import { MagnifyingGlass } from "@/core/icon";
import { nfts } from "@/core/sample/nfts";
import Image from "next/image";
import React from "react";

const NFTCards = ({ item, index }) => (
   <div
      key={index}
      className='col-span-4 bg-dark w-full h-full flex flex-col rounded-3xl relative '
   >
      <div className='self-stretch relative rounded-t-lg'>
         <Image src={item.img} className='w-full h-auto' />
      </div>
      <div className='m-5'>
         <h4>{item.title}</h4>
         <div className='flex gap-2 my-3'>
            <Image src={item.avatar} width={"100%"} />
            <p>{item.name}</p>
         </div>
         <div className='flex-between my-3'>
            <div>
               <small className='text-dimCaption'>Price</small>
               <p className='font-spaceMono'>{item.price} ETH</p>
            </div>
            <div>
               <small className='text-dimCaption'>Highest Bid</small>
               <p className='font-spaceMono'>{item.highestBid} wETH</p>
            </div>
         </div>
      </div>
   </div>
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
            <Tabs tabs={["NFTs", "Collections"]} panel={[nfts, []]} count>
               <div className='grid grid-cols-12 gap-5'>
                  {nfts.length > 0 &&
                     nfts.map((item, index) => (
                        <NFTCards item={item} index={index} />
                     ))}
               </div>
            </Tabs>
         </Layout>
         <div className='border-2 border-dark' />
      </main>
   );
};

export default Marketplace;
