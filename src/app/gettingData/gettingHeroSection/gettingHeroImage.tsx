"use client"
import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"
import client from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
const GettingHeroImage = () => {
  type imageType={
    asset: {
      _id: string;
      url: string;
    };
  }
  const[heroImage,setHeroImage]=useState<imageType | null>(null)
 
  useEffect(() => {
    
    const fetchHeroImage = async () => {
      try {
        const query =`*[_type == "heroSection"]{
          mainImage{
            asset->{
              _id,
              url
            }
          }
        }`;
        const res = await client.fetch(query);
        const latest=res.pop()
        setHeroImage(latest.mainImage); 

        } catch (error) {
          console.error('Error fetching hero data:', error);
        }
      };
  
      fetchHeroImage();
  }, []);

  return (
<div className='w-full h-full relative'>
  <motion.div initial={{opacity:0}} animate={{opacity: 1, transition:{delay:0.5, duration:0.4,ease:"easeIn"} }}>
  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-zinc-950 mix-blend-lighten" />
 

    < motion.div
    initial={{opacity:0}}
    animate={
    {opacity: 1, transition:{
    delay:1.4,
    duration:0.4,
    ease:"easeInOut"} }}
     className='w-[298px] h-[298px] xl:w-[400px] xl:h-[400px]  absolute flex justify-center  items-baseline'>
       {heroImage && heroImage.asset && (
         
       <div className="relative">
       <img
         src={urlFor(heroImage).url()}
         alt="Description of the image"
         className="object-contain w-[350px] h-[350px] xl:w-[470px] xl:h-[470px] rounded-full"
         style={{
           mixBlendMode: 'lighten',
          }}
          />
     </div>
    )}
      </motion.div>
      <motion.svg className="w-[300px] xl:w-[400px] h-[300px] xl:h-[400px]" fill="transparent" viewBox="0 0 506 506"
xmlns="http://www.w3.org/2000/svg">

<motion.circle 
            cx="253" 
            cy="253" 
            r="250" 
            stroke="#2563eb" 
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{ strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], rotate: [120, 360] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            />
</motion.svg> 
      </motion.div>
</div>
  )
}




export default GettingHeroImage