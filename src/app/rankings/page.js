"use client";

import Layout from "@/components/Layout";
import Tabs from "@/components/Tabs";
import { Avatar1, AvatarLg } from "@/core/avatar";
import { avatar, creator } from "@/core/sample/creators";
import Image from "next/image";

const CreatorsRow = ({ data }) => (
   <ul className='col-span-12'>
      <li className='flex gap-10 creator-list-head'>
         <p className='basis-auto'>#</p>
         <p className='basis-10/12'>Artist</p>
         <p className='basis-1/2'>Change</p>
         <p className='basis-1/2'>NFTs Sold</p>
         <p className='basis-1/2'>Volume</p>
      </li>
      {data.length > 0 &&
         data.map((e, i) => (
            <li className='flex items-center gap-10 creator-list' key={i}>
               <p className='basis-auto'>{+i}</p>
               <p className='basis-10/12 flex items-center gap-4'>
                  <Image src={e.avatar} className='w-1/6' alt={e.name} />
                  <span className='text-lg'>{e.name}</span>
               </p>
               <p className='basis-1/2'>{e.change}</p>
               <p className='basis-1/2'>{e.sold}</p>
               <p className='basis-1/2'>{e.volume}ETH</p>
            </li>
         ))}
   </ul>
);

const Rankings = () => (
   <main>
      <Layout>
         <div className='flex flex-col gap-3'>
            <h1>Top Creators</h1>
            <p className='text-h5'>
               Check out top ranking NFT artists on the NFT Marketplace.
            </p>
         </div>
      </Layout>
      <Layout className='!p-0'>
         <Tabs
            tabs={["Today", "This Week", "This Month", "All Time"]}
            panel={[creator, [], [], []]}
            component={CreatorsRow}
         />
      </Layout>
      <div className='border-2 border-dark' />
   </main>
);

export default Rankings;
