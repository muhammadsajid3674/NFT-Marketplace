import Layout from "@/components/Layout";
import { Avatar1, Avatar2, Avatar3 } from "@/core/avatar";
import { ArrowRight, Eye, Globe } from "@/core/icon";
import { Image1, Image2, Image3, NFTCover } from "@/core/img";
import { creatorNfts } from "@/core/sample/nfts";
import Image from "next/image";

const CountDown = () => {
   return (
      <div className='glassmorphism flex-center flex-col'>
         <p className='font-spaceMono self-start'>Auction ends in:</p>
         <div className='flex gap-5 items-center my-3'>
            <div className='text-center'>
               <h3>59</h3>
               <p className='font-spaceMono'>Hours</p>
            </div>
            :
            <div className='text-center'>
               <h3>59</h3>
               <p className='font-spaceMono'>Minutes</p>
            </div>
            :
            <div className='text-center'>
               <h3>59</h3>
               <p className='font-spaceMono'>Hours</p>
            </div>
         </div>
         <button className='btn-primary w-full text-center p-3 rounded-xl'>
            Place Bid
         </button>
      </div>
   );
};

const NFTCard = ({ data, index }) => {
   return (
      <div
         className='bg-darkDim w-full h-full flex flex-col rounded-3xl relative '
         key={index}
      >
         <div className='self-stretch relative rounded-t-lg'>
            <Image alt='' src={data.img} className='w-full h-auto' />
         </div>
         <div className='m-5'>
            <h5 className='font-workSans'>{data.title}</h5>
            <div className='flex items-center gap-2 my-3'>
               <Image alt='' src={data.avatar} width={"100%"} />
               <small>{data.creator}</small>
            </div>
            <div className='flex-between my-3'>
               <div>
                  <small className='text-dimCaption'>Price</small>
                  <p className='font-spaceMono'>{data.price} ETH</p>
               </div>
               <div>
                  <small className='text-dimCaption'>Highest Bid</small>
                  <p className='font-spaceMono'>{data.highestBid} wETH</p>
               </div>
            </div>
         </div>
      </div>
   );
};

const nft = () => {
   return (
      <main>
        <div className="w-full h-96">
         <Image src={NFTCover} className='w-full h-full object-cover' alt='' />
        </div>
         <Layout>
            <div className='grid grid-cols-12 grid-rows-5 gap-10'>
               <div className='col-span-8 row-span-1'>
                  <h2>The Orbitians</h2>
                  <p className='text-dimCaption'>Minted on Sep 30, 2022</p>
               </div>
               <div className='col-span-4 row-span-5'>
                  <CountDown />
               </div>
               <div className='col-span-8 row-span-4'>
                  <div>
                     <p className='text-dimCaption font-spaceMono font-bold'>
                        Created By
                     </p>
                     <div className='flex gap-2 my-3'>
                        <div>
                           <Image alt='' src={Avatar1} />
                        </div>
                        <p>Orbitian</p>
                     </div>
                  </div>
                  <div>
                     <p className='text-dimCaption font-spaceMono font-bold'>
                        Description
                     </p>
                     <p className='mb-3 text-lg'>
                        The Orbitians is a collection of 10,000 unique NFTs on
                        the Ethereum blockchain,
                     </p>
                     <p className='mb-3 text-lg'>
                        There are all sorts of beings in the NFT Universe. The
                        most advanced and friendly of the bunch are Orbitians.
                     </p>
                     <p className='mb-3 text-lg'>
                        They live in a metal space machines, high up in the sky
                        and only have one foot on Earth.
                     </p>
                     <p className='mb-3 text-lg'>
                        These Orbitians are a peaceful race, but they have been
                        at war with a group of invaders for many generations.
                        The invaders are called Upside-Downs, because of their
                        inverted bodies that live on the ground, yet do not know
                        any other way to be. Upside-Downs believe that they will
                        be able to win this war if they could only get an eye
                        into Orbitian territory, so they've taken to make human
                        beings their target.
                     </p>
                  </div>
                  <div>
                     <p className='text-dimCaption font-spaceMono font-bold'>
                        Details
                     </p>
                     <div className='flex items-center gap-2 my-3'>
                        <Globe className={"w-6"} />
                        <p>View on Etherscan</p>
                     </div>
                     <div className='flex items-center gap-2 my-3'>
                        <Globe className={"w-6"} />
                        <p>View Original</p>
                     </div>
                  </div>
                  <div>
                     <p className='text-dimCaption font-spaceMono font-bold'>
                        Tags
                     </p>
                     <div className='flex items-center gap-2 my-3'>
                        <div className='tags'>
                           <small>Animation</small>
                        </div>
                        <div className='tags'>
                           <small>Illustration</small>
                        </div>
                        <div className='tags'>
                           <small>Moon</small>
                        </div>
                        <div className='tags'>
                           <small>Moon</small>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='flex-between my-14'>
               <h2>More from this artist</h2>
               <div className='self-end'>
                  <button className='btn btn-primary'>
                     <ArrowRight className='w-6' />
                     <span>Go To Artist Page</span>
                  </button>
               </div>
            </div>
            <div className="grid grid-cols-3 gap-5 w-full'">
               {creatorNfts.length > 0 &&
                  creatorNfts.map((e, i) => <NFTCard data={e} index={i} />)}
            </div>
         </Layout>
      </main>
   );
};

export default nft;
