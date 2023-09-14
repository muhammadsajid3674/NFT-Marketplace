import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { Avatar1, Avatar2, Avatar3 } from "@/core/avatar";
import {
   CollectionSvg,
   EarningSvg,
   Eye,
   RocketLaunch,
   WalletSvg,
} from "@/core/icon";
import {
   Astronaut,
   Highlighted,
   Image1,
   Image2,
   Image3,
   Primary,
   Primary2,
   Primary3,
   Secondary1,
   Secondary2,
   Secondary3,
   Secondary4,
   Secondary5,
   Secondary6,
} from "@/core/img";
import { categories } from "@/core/sample/categories";
import { avatar } from "@/core/sample/creators";
import Head from "next/head";
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

const Collection = ({ primary, secondary = [], name, title, avatar }) => {
   return (
      <div className='flex flex-col gap-5'>
         <Image alt="" src={primary} className='w-full h-auto' />
         <div className='flex gap-5'>
            {secondary.map((e, i) => (
               <Image alt="" src={e} key={i} className='w-full h-auto' />
            ))}
            <div className='rounded-3xl bg-action flex-center h-full w-full'>
               <h5>2045+</h5>
            </div>
         </div>
         <div>
            <h5>{title}</h5>
            <div className='flex gap-2 my-3'>
               <div>
                  <Image alt="" src={avatar} />
               </div>
               <small>{name}</small>
            </div>
         </div>
      </div>
   );
};

const Creators = ({ count, sales, title, avatar }) => {
   return (
      <div className='bg-darkDim w-full h-full py-5 flex-center flex-col rounded-3xl relative'>
         <div className='absolute top-4 left-5 bg-dark h-8 w-8 flex-center rounded-full'>
            <p className='text-dimCaption'>{count}</p>
         </div>
         <Image alt="" src={avatar} width={"100%"} />
         <div className='text-center mt-4'>
            <h5>{title}</h5>
            <span className='text-dimCaption'>
               Total Sale:{" "}
               <span className='text-white font-spaceMono'>{sales} ETH</span>
            </span>
         </div>
      </div>
   );
};

const Categories = ({ bg, title, Icon }) => {
   return (
      <div className='bg-darkDim w-full h-full flex-center flex-col rounded-3xl relative '>
         <div className='self-stretch relative rounded-t-lg'>
            <Image alt="" src={bg} className='w-full h-auto' />
            <div className='category-blur absolute top-0'></div>
            <Icon className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' />
         </div>
         <div className='my-5'>
            <h5>{title}</h5>
         </div>
      </div>
   );
};

const Discover = ({ img, title, avatar, name, price, highestBid }) => {
   return (
      <div className='bg-darkDim w-full h-full flex flex-col rounded-3xl relative '>
         <div className='self-stretch relative rounded-t-lg'>
            <Image alt="" src={img} className='w-full h-auto' />
         </div>
         <div className='m-5'>
            <h4 className='font-workSans'>{title}</h4>
            <div className='flex gap-2 my-3'>
               <Image alt="" src={avatar} width={"100%"} />
               <p>{name}</p>
            </div>
            <div className='flex-between my-3'>
               <div>
                  <small className='text-dimCaption'>Price</small>
                  <p className='font-spaceMono'>{price} ETH</p>
               </div>
               <div>
                  <small className='text-dimCaption'>Highest Bid</small>
                  <p className='font-spaceMono'>{highestBid} wETH</p>
               </div>
            </div>
         </div>
      </div>
   );
};

const CountDown = () => {
   return (
      <div className='glassmorphism'>
         <p className='font-spaceMono'>Auction ends in:</p>
         <div className='flex gap-5 items-center'>
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
      </div>
   );
};

const Works = ({ icon, title, desc }) => {
   return (
      <div className='bg-darkDim w-full h-full py-5 flex-center flex-col rounded-3xl'>
         {icon}
         <div className='text-center m-6'>
            <h4 className='mb-3'>{title}</h4>
            <p>{desc}</p>
         </div>
      </div>
   );
};

export const metadata = {
   title: "NFT Marketplace",
   description: "Generated by create next app",
};

export default function Home() {
   return (
      <main>
         <Layout>
            <div className='grid grid-cols-2 gap-5'>
               <div className='col-span-1 flex flex-col items-start w-10/12 lg:w-full lg:text-center gap-4'>
                  <AnimatedText
                     text={"Discover digital art & Collect NFTs"}
                     className='text-start'
                  />
                  <p className='text-h5'>
                     NFT marketplace UI created with Anima for Figma. Collect,
                     buy and sell art from more than 20k NFT artists.
                  </p>
                  <button className='btn btn-primary'>
                     <RocketLaunch className='w-6' />
                     <span>Get Started</span>
                  </button>
                  <Counter />
               </div>
               <div className='ms-auto'>
                  <Image alt="" src={Highlighted} />
               </div>
            </div>
         </Layout>
         <Layout>
            <div className='mb-7'>
               <h2>Trending Collection</h2>
               <p className='text-h5'>
                  Checkout our weekly updated trending collection.
               </p>
            </div>
            <div className="grid grid-cols-3 gap-5 w-full'">
               <Collection
                  primary={Primary}
                  secondary={[Secondary1, Secondary2]}
                  avatar={Avatar1}
                  name={"DSGN Animals"}
                  title={"Mr Fox"}
               />
               <Collection
                  primary={Primary2}
                  secondary={[Secondary3, Secondary4]}
                  avatar={Avatar2}
                  name={"Magic Mushrooms"}
                  title={"Shroomie"}
               />
               <Collection
                  primary={Primary3}
                  secondary={[Secondary5, Secondary6]}
                  avatar={Avatar3}
                  name={"Disco Machines"}
                  title={"BeKind2Robots"}
               />
            </div>
         </Layout>
         <Layout>
            <div className='flex-between mb-7'>
               <div>
                  <h2>Top creators</h2>
                  <p className='text-h5'>
                     Checkout Top Rated Creators on the NFT Marketplace
                  </p>
               </div>
               <div className='self-end'>
                  <button className='btn btn-primary'>
                     <RocketLaunch className='w-6' />
                     <span>View Rankings</span>
                  </button>
               </div>
            </div>
            <div className="grid grid-cols-4 gap-5 w-full'">
               {avatar.map((e, i) => (
                  <Creators
                     avatar={e.avatar}
                     count={i + 1}
                     sales={e.sales}
                     title={e.title}
                  />
               ))}
            </div>
         </Layout>
         <Layout>
            <div className='mb-7'>
               <h2>Browse Categories</h2>
            </div>
            <div className="grid grid-cols-4 gap-5 w-full'">
               {categories.map((e, i) => (
                  <Categories bg={e.bg} Icon={e.icon} title={e.title} key={i} />
               ))}
            </div>
         </Layout>
         <Layout>
            <div className='flex-between mb-7'>
               <div>
                  <h2>Discover More NFTs</h2>
                  <p className='text-h5'>Explore new trending NFTs</p>
               </div>
               <div className='self-end'>
                  <button className='btn btn-primary'>
                     <Eye className='w-6' />
                     <span>See All</span>
                  </button>
               </div>
            </div>
            <div className="grid grid-cols-3 gap-5 w-full'">
               <Discover
                  avatar={Avatar1}
                  highestBid={0.33}
                  price={1.63}
                  title={"NFT Name"}
                  name={"NFT Artist"}
                  img={Image1}
               />
               <Discover
                  avatar={Avatar2}
                  highestBid={0.33}
                  price={1.63}
                  title={"NFT Name"}
                  name={"NFT Artist"}
                  img={Image2}
               />
               <Discover
                  avatar={Avatar3}
                  highestBid={0.33}
                  price={1.63}
                  title={"NFT Name"}
                  name={"NFT Artist"}
                  img={Image3}
               />
            </div>
         </Layout>
         <Layout className='NFT-bg'>
            <div className='flex flex-col justify-end h-full mb-7 rounded-full'>
               <div className='flex gap-2 my-3'>
                  <Image alt="" src={Avatar1} width={"100%"} />
                  <p>Hello world</p>
               </div>
               <div className='flex-between'>
                  <div>
                     <h2 className='mb-5'>Magic Mushrooms</h2>
                     <button className='btn btn-primary'>
                        <Eye className='w-6' />
                        <span>See NFT</span>
                     </button>
                  </div>
                  <CountDown />
               </div>
            </div>
         </Layout>
         <Layout>
            <div className='flex-between mb-7'>
               <div>
                  <h2>How it works</h2>
                  <p className='text-h5'>Find out how to get started</p>
               </div>
            </div>
            <div className='grid grid-cols-3 gap-5 w-full'>
               <Works
                  icon={<WalletSvg />}
                  title={"Setup Your wallet"}
                  desc={
                     "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
                  }
               />
               <Works
                  icon={<CollectionSvg />}
                  title={"Create Collection"}
                  desc={
                     "Upload your work and setup your collection. Add a description, social links and floor price."
                  }
               />
               <Works
                  icon={<EarningSvg />}
                  title={"Start Earning"}
                  desc={
                     "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
                  }
               />
            </div>
         </Layout>
         <Layout>
            <div className='grid grid-cols-2 gap-10 mb-7 bg-darkDim p-14 rounded-3xl'>
               <Image alt="" src={Astronaut} className='w-full h-auto' />
               <div className='flex flex-col justify-center'>
                  <h3>Join our weekly digest</h3>
                  <p className='text-h5'>
                     Get exclusive promotions & updates straight to your inbox.
                  </p>
                  <div className='input-cont w-11/12'>
                     <input placeholder='Enter your email here' />
                     <button className='btn btn-primary'>
                        <Eye className='w-6' />
                        <span>See NFT</span>
                     </button>
                  </div>
               </div>
            </div>
         </Layout>
      </main>
   );
}
