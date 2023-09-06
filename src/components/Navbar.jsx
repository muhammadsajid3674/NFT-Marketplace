import { ArrowLeft } from "@/core/icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-dark px-14 py-5">
      <div className="font-bold">
        <Link href={"/"}>NFT Marketplace</Link>
      </div>
      <div>
        <ul className="flex items-center gap-10">
          <li>
            <Link href={"/"}>Marketplace</Link>
          </li>
          <li>
            <Link href={"/"}>Rankings</Link>
          </li>
          <li>
            <Link href={"/"}>Connect a wallet</Link>
          </li>
          <li>
            <button className="btn btn-primary">
              <Image src={ArrowLeft} priority className="w-6" />
              <span>Sign up</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
