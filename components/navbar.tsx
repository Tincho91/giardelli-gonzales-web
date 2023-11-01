"use client";

import Link from "next/link";
import { useState } from 'react';

import MainNav from "@/components/main-nav";
import MobileNav from "./mobileNav";
import Container from "@/components/ui/container";


const Navbar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="navbar fixed top-0 w-full border-b border-customBlue bg-white bg-opacity-85 z-50 overflow-hidden">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="ml-4 flex lg:ml-0 gap-x-2">
            <Link href="/">
              <img src="/brand.png" alt="CONSULTORA" className="h-10 w-full" />
            </Link>
          </div>
          <div className="hidden md:flex">
            <MainNav />
          </div>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
