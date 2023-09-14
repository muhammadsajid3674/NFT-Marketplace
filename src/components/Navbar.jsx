"use client";
import { Storefront, User } from "@/core/icon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CustomLink = ({ href, title, className = "" }) => {
   const router = useRouter();
   return (
      <Link href={href} className={`${className} relative group`}>
         {title}
         <span
            className={`custom-link-hover ${
               router.asPath == href ? "w-full" : "w-0"
            }`}
         >
            &nbsp;
         </span>
      </Link>
   );
};

const Navbar = () => {
   const [isOpen, setOpen] = useState(false);
   const handleClick = () => {
      setOpen(!isOpen);
   };
   return (
      <nav className='flex-between bg-dark px-14 py-4 relative text-white'>
         <Link className='flex-center gap-5' href={"/"}>
            <Storefront />
            <h5 className='font-spaceMono'>NFT Marketplace</h5>
         </Link>
         <div className=' lg:hidden'>
            <ul className='flex items-center gap-10'>
               <li>
                  <CustomLink href={"/marketplace"} title='Marketplace' />
               </li>
               <li>
                  <CustomLink href={"/rankings"} title='Rankings' />
               </li>
               <li>
                  <CustomLink href={"/wallet"} title='Connect a wallet' />
               </li>
               <li>
                  <Link className='btn btn-primary' href={"/auth"}>
                     <User className='w-6' />
                     <span>Sign up</span>
                  </Link>
               </li>
            </ul>
         </div>
         {isOpen ? (
            <div className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
               <ul className='flex flex-col justify-center items-center'>
                  <li>
                     <CustomLink href={"/marketplace"} title='Marketplace' />
                  </li>
                  <li>
                     <CustomLink href={"/ranking"} title='Rankings' />
                  </li>
                  <li>
                     <CustomLink href={"/wallet"} title='Connect a wallet' />
                  </li>
                  <li>
                     <Link className='btn btn-primary' href={"/auth"}>
                        <User className={"w-6"} />
                        <span>Sign up</span>
                     </Link>
                  </li>
               </ul>
            </div>
         ) : null}
         <button
            className='flex-col justify-center items-center hidden lg:flex'
            onClick={handleClick}
         >
            <span
               className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
               }`}
            ></span>
            <span
               className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isOpen ? "opacity-0" : "opacity-100"
               }`}
            ></span>
            <span
               className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
               }`}
            ></span>
         </button>
      </nav>
   );
};

export default Navbar;
