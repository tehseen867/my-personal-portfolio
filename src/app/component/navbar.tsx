"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import client from "@/sanity/lib/client";
import { usePathname } from 'next/navigation';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight } from 'lucide-react';

function Navbar() {
  const pathName = usePathname();
  const Links = [
    { name: 'Home', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'Workflow', path: "/workflow" },
    { name: 'Contact', path: "/contact" },
  ];

  const [name, setName] = useState(""); 

  useEffect(() => {
    const fetchName = async () => {
      try {
        const query = `*[_type=="navbar"]`;
        const res = await client.fetch(query);
        const latestName = res.pop();
        setName(latestName.companyName); 
   
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };
   
    fetchName();
  }, []);     

  return (
    <div>
      <div className="max-w-[700px] hidden md:flex fixed top-6 inset-x-0 mx-auto border bg-white border-white/[0.1] rounded-full filter shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-12 sm:px-10 py-1 350px:px-10 items-center justify-between sm:gap-x-10 350px:gap-x-6 text-white backdrop-blur-[2px] bg-opacity-5">
        <div className='text-3xl text-blue-600 font-sans font-semibold tracking-wide'>
          {name} <span className='text-white'>.</span>
        </div>
        <div className='flex gap-x-8 justify-center items-center'>
          <div className='flex gap-x-8'>
            {Links.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                className={`capitalize text-xl font-sans ${link.path === pathName ? "text-blue-600 border-b-2 border-blue-600" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <div className='flex md:hidden justify-between m-4 items-center'>
        <div className='text-3xl text-white font-sans font-bold tracking-wide'>
          {name} <span className='text-blue-600'>.</span>
        </div>



        <Sheet>
          <SheetTrigger className='flex justify-center items-center'>
            <AlignRight className='text-blue-600 size-10 cursor-pointer' />
          </SheetTrigger>
          <SheetContent className='bg-black'>
            <SheetHeader className='mt-28'>
              <SheetTitle className='text-white'> <div className='text-4xl text-white font-sans font-bold tracking-wide'>
          {name} <span className='text-blue-600'>.</span>
        </div></SheetTitle>
            </SheetHeader>
            <SheetDescription className='mt-10 mb-40 text-center text-white flex flex-col gap-y-6'>
           
              {Links.map((link, index) => (
                <Link key={index} href={link.path} className={`capitalize text-2xl font-sans font-semibold ${link.path === pathName ? "text-blue-600" : ""}`}>
                  {link.name}
                </Link>
              ))}
             
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Navbar
