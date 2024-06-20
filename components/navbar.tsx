"use client";

import Link from "next/link";
import { useState } from 'react';

import MainNav from "@/components/main-nav";
import MobileNav from "./mobileNav";
import Container from "@/components/ui/container";


const Navbar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="navbar sticky top-0 w-[100vw] border-b border-customBlue bg-white z-[99999]">
      <Container>
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex md:hidden lg:flex lg:ml-0 gap-x-2">
            <Link href="/">
              <img src="/brand.png" alt="CONSULTORA" className="h-10 sm:h-11 w-full object-contain" />
            </Link>
          </div>
          <div className="lg:ml-0 gap-x-2 hidden md:flex lg:hidden">
            <Link href="/">
              <img src="/brand2.png" alt="CONSULTORA" className="h-10 w-full object-contain" />
            </Link>
          </div>
          <div className="hidden md:flex">
            <MainNav />
          </div>
          <div className="md:hidden ml-4">
            <MobileNav />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
