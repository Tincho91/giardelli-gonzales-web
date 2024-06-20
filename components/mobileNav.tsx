"use client";

import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { UserButton } from '@clerk/nextjs';

const MobileNav: React.FC = () => {
  const router = useRouter();  // Initialize useRouter
  const [isActive, setIsActive] = useState(false);
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const navigateTo = (url: string) => {
    router.push(url);  // Use Next.js's router.push for navigation
    setIsActive(false);  // Close the popover
  };

  const toggleActive = () => {
    setIsActive(!isActive);  // Toggle the popover
  };

  // Listen for clicks outside to deactivate
  useEffect(() => {
    const handleDocumentClick = (e: any) => {
      // Close the menu if clicking outside the menu
      if (isActive && e.target.closest('.popover-content') === null && e.target.closest('.popover-trigger') === null) {
        setIsActive(false);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isActive]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#metodologia', '#servicios', '#clientes']; // Add the IDs of the sections you want to track

      for (const section of sections) {
        const element = document.querySelector(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            setCurrentSection(section);
            return;
          }
        }
      }

      setCurrentSection(null);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex items-center'>

      <Popover open={isActive} onOpenChange={() => setIsActive(!isActive)}>
        <PopoverTrigger asChild onClick={() => setIsActive(!isActive)} className='mr-5 '>
          <Button
            onClick={() => setIsActive(!isActive)}
            className={
              isActive
                ? 'bg-customBlue-dark text-white hover:bg-customBlue-darker'  // Active state
                : 'bg-primary text-customBlue-dark hover:text-customBlue-darker border border-customBlue text-lg font-extrabold'  // Inactive state
            }
          >
            ☰
          </Button>
        </PopoverTrigger>
        <PopoverContent className="absolute right-0 w-56 z-[99999]">
          <div
            className={`cursor-pointer text-white p-2 ${currentSection === '#servicios' ? 'bg-gray-200 text-customBlue' : 'hover:bg-gray-200 hover:text-customBlue'}`}
            onClick={() => navigateTo('/#servicios')}
          >
            ¿QUÉ HACEMOS?
          </div>
          <div
            className={`cursor-pointer text-white p-2 ${currentSection === '#metodologia' ? 'bg-gray-200 text-customBlue' : 'hover:bg-gray-200 hover:text-customBlue'}`}
            onClick={() => navigateTo('/#metodologia')}
          >
            ¿CÓMO LO HACEMOS?
          </div>
          <div
            className={`cursor-pointer text-white p-2 ${currentSection === '#clientes' ? 'bg-gray-200 text-customBlue' : 'hover:bg-gray-200 hover:text-customBlue'}`}
            onClick={() => navigateTo('/#clientes')}
          >
            CLIENTES
          </div>
          <div
            className="cursor-pointer text-white hover:bg-gray-200 hover:text-customBlue p-2"
            onClick={() => navigateTo('/positions')}
          >
            BÚSQUEDAS ACTIVAS
          </div>
          <div
            className="cursor-pointer text-white hover:bg-gray-200 hover:text-customBlue p-2"
            onClick={() => navigateTo('/cv')}
          >
            CARGÁ TU CV
          </div>
        </PopoverContent>
      </Popover>

      <div className="cursor-pointer hover:bg-gray-200 hover:text-customBlue">
        <UserButton afterSignOutUrl="/" />
      </div>

    </div>
  );
};

export default MobileNav;