// components/GettingStep2Data.js

"use client";
import React, { useEffect, useState } from 'react';
import client from '@/sanity/lib/client';
import { Dot } from 'lucide-react';
const GettingStep2Data = () => {
  type Step2DataType = {
    subHeading: string;
    heading: string;
    description: string;
    keyPoints: string[];
  };

  const [step2Data, setStep2Data] = useState<Step2DataType | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchStep2Data = async () => {
      try {
        const query = `*[_type=="step2"]{
          subHeading,
          heading,
          description,
          keyPoints
        }`;
        const res: Step2DataType[] = await client.fetch(query);
        const latest = res.pop();
        setStep2Data(latest || null);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching step2 data:', error);
        setError('Failed to load data'); // Set error message
      }
    };

    fetchStep2Data();
  }, []);

  if (loading) {
    return   <div className="xl:px-4 px-2 xl:py-6 py-3 border-[0.2px] border-gray-800 bg-gray-950 rounded-md xl:w-[499.6px] w-screen sm:mx-8 xl:mx-14 mx-2 my-3"><p className="text-2xl font-sans font-light text-white">Loading...</p> </div>; // Loading message
  }

  if (error) {
    return <p className="text-red-500">{error}</p>; // Error message
  }

  return (
    <div className="xl:px-4 px-2 xl:py-6 py-3 border-[0.2px] border-gray-800 bg-gray-950 rounded-md max-w-[499.6px] w-auto sm:mx-8 xl:mx-14 mx-2 my-3">
      <div className="px-2">
        <p className="text-gray-400 mb-1 sm:text-[15px] text-[10px] font-sans uppercase">{step2Data?.subHeading}</p>
        <h2 className="text-blue-600 font-sans sm:text-2xl text-xl mb-2 uppercase">{step2Data?.heading}</h2>
        <p className="text-white font-extralight xl:text-[15px] text-[12px] font-sans xl:mb-3 mb-2 tracking-wider">{step2Data?.description}</p>
      </div>
      <div>
        {step2Data?.keyPoints.map((keyPoint: string, index: number) => (
          <div key={index} className="flex items-center mb-2">
            <Dot className="text-blue-600 size-10" />
            <p className="ml-2 text-white font-extralight font-sans tracking-wider xl:text-[15px] text-[12px]">{keyPoint}</p>
          </div>
        ))}
      </div>
    </div>
  );
};



    export default GettingStep2Data