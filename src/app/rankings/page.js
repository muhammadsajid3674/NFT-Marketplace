import Layout from "@/components/Layout";
import Tabs from "@/components/Tabs";
import { Avatar1, AvatarLg } from "@/core/avatar";
import { avatar } from "@/core/sample/creators";
import Image from "next/image";

const CreatorsRow = () => (
   <ul>
      <li className='flex gap-10 creator-list-head'>
         <p className='basis-auto'>#</p>
         <p className='basis-10/12'>Artist</p>
         <p className='basis-1/2'>Change</p>
         <p className='basis-1/2'>NFTs Sold</p>
         <p className='basis-1/2'>Volume</p>
      </li>
      <li className='flex items-center gap-10 creator-list'>
         <p className='basis-auto'>1</p>
         <p className='basis-10/12 flex items-center gap-4'>
            <Image src={AvatarLg} className="w-1/6" /> <span className="text-lg">Jaydon Ekstrom Bothman</span>
         </p>
         <p className='basis-1/2'>+1.41%</p>
         <p className='basis-1/2'>602</p>
         <p className='basis-1/2'>12.4ETH</p>
      </li>
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
            panel={[[], [], [], []]}
         >
            <div className='grid grid-cols-1 gap-5'>
               <CreatorsRow />
               {/* {avatar.length > 0 &&
            avatar.map((item, index) => (
              <CreatorsRow item={item} index={index} />
            ))} */}
            </div>
         </Tabs>
      </Layout>
      <div className='border-2 border-dark' />
   </main>
);

export default Rankings;
