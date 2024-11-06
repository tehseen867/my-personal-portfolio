"use client";
import React, { useEffect, useState } from 'react';
import client from '@/sanity/lib/client';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';
const GettingConvinceData = () => {
  type ConvinceDataType = {
    subHeading: string;
    heading: string;
    paragraph: string;
    buttonText: string;
  };

  const [convinceData, setConvinceData] = useState<ConvinceDataType | null>(null);
  const [error, setError] = useState<string | null>(null); // State for error handling

  
  useEffect(() => {
    const fetchConvinceData = async () => {
      try {
        const query = `*[_type=="convinceSection"]{
          subHeading,
          heading,
          paragraph,
          buttonText
        }`;
        const res: ConvinceDataType[] = await client.fetch(query);
        const latest = res.pop();
        setConvinceData(latest || null);
    
      } catch (error) {
        console.error('Error fetching convince data:', error);
        setError('Failed to load data. Please try again later.'); // Set error message
      }
    };
    
    fetchConvinceData();
  }, []);

  if (error) {
    return <p className='text-2xl font-sans font-light text-red-500'>{error}</p>; // Display error message
  }

  if (!convinceData) {
 
      return <div className='flex flex-col items-center justify-center gap-4 p-4 text-4xl'>loading...</div>
    
  }

  // Destructure properties from convinceData
  const { subHeading, heading, paragraph, buttonText } = convinceData;
  
  return (
    <div className='mb-20 md:mt-48 mt-28 px-2'>
      <div className='mt-20 flex justify-center'>
        <div className='text-center'>
          <p className='uppercase text-stone-300 text-sm mb-4'>{subHeading}</p>
          <div className='flex justify-center'>
            <h1 className='text-blue-700 md:text-[100px] sm:text-[60px] text-[45px] font-sans max-w-[1000px] font-light leading-none md:mb-8 mb-4'>{heading}</h1>
          </div>
          <div className='flex justify-center'>
            <p className='text-white font-sans sm:text-xl text-[16px] font-extralight max-w-[700px]'>{paragraph}</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <Link href={'/contact'} className='group border border-blue-700  py-1 px-2 md:mt-10 mt-6 rounded-2xl flex'>
          <div className='text-white font-sans capitalize'>{buttonText}</div>
          <span className="flex items-center">
            <MoveUpRight className="md:size-8 size-6 text-white p-[6px] cursor-pointer transition-transform duration-300 transform group-hover:rotate-45" />
          </span>
        </Link>
      </div>
    </div>
  );
};



      export default GettingConvinceData