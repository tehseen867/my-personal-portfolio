"use client"
import React, { useEffect, useState } from 'react'
import client from '@/sanity/lib/client';
import {motion} from "framer-motion"


const GettingAboutData = () => {
  
  type AboutDataType = {
          aboutSection:{
           subSubHeading:string,
            paragraph:string,
            heading:string,
          }
      };
 

      const [aboutData, setAboutData] = useState<AboutDataType | null>(null); 
      
    
      
      useEffect(() => {
        const fetchAboutData = async () => {
          try {
            const query = `*[_type == "aboutSection"]{
              aboutSection{
subSubHeading,
paragraph,
    heading
  }
}`;
const res: AboutDataType[] = await client.fetch(query);
const latest=res.pop()
            setAboutData(latest||null);
   
          } catch (error) {
            console.error('Error fetching skills:', error);
          }
        };
        
        fetchAboutData();
      }, []);  
    
      return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1,
      transition:{delay:0.8,duration:0.4,ease:"easeIn"}
     }}>
    <div id="aboutData" className='flex justify-center'>
    <div  className="md:w-full sm:w-[400px] w-80 max-w-[500px] h-auto xl:mt-36 mt-12 mb-8  border border-gray-800 bg-gray-950  rounded-lg md:p-10  p-5">
            <p className="text-stone-500 text-2xl font-sans font-light flex items-center uppercase">{aboutData?.aboutSection.subSubHeading}</p>
            <h2 className="text-blue-600 font-sans font-light text-4xl  mt-2">{aboutData?.aboutSection.heading}</h2>
            <p className="text-stone-300 font-sans font-extralight xl:text-2xl text-xl  my-2 tracking-wider ">{aboutData?.aboutSection.paragraph}</p>
         
          </div> 
          </div> 
          </motion.section>
  )
}


export default GettingAboutData