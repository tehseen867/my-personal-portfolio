"use client"
import React, { useEffect, useState } from 'react';
import client from '@/sanity/lib/client';
import {Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';


const GettingHeroData = () => {
  type SocialLinksType = {
    socialLinks: {
      facebook: string;
      instagram: string;
      linkedin: string;
      xAccount: string;
  }
  ;}

  type HeroDataType = {
    subHeading: string,
    mainHeading: string,
    buttonText: string,
    paragraph: string
  }
  const [heroData, setHeroData] = useState<HeroDataType | null>(null);

  const [SocialLinks, setSocialLinks] = useState<SocialLinksType | null>(null);
  useEffect(() => {
    const fetchHeroData = async () => {

            try {
              const query = `*[_type=="heroSection"]{
                subHeading,
                mainHeading,
                paragraph,
            
              }`;
              const query2 = `*[_type == "socialInformation"]{
        socialLinks{
          facebook,
          instagram,
          linkedin,
          xAccount
          },
      }`;
      
      const res: HeroDataType[] = await client.fetch(query);
      const latest=res.pop()
      setHeroData(latest || null);
      const res2:SocialLinksType[] = await client.fetch(query2);
      const latest2=res2.pop()
      setSocialLinks(latest2 || null);
 
    } catch (error) {
      console.error('Error fetching hero data:', error);
      }
    };

    fetchHeroData();
  }, []);




  return (

<div className='text-center xl:text-left order-2 xl:order-none'>

      <span className='text-gray-400 font-sans font md:text-[24px] leading-none text-lg  px-3 text-center xl:text-start '>{heroData?.subHeading}</span>
      <h1 className=" md:text-[110px] text-[60px] sm:text-[80px] font-sans text-white my-1 xl:my-0  text-center xl:text-start  leading-none">Hello I’m <br /><span className=' text-blue-700 capitalize'> {heroData?.mainHeading}</span>
      </h1>

      <p className=" text-gray-400 sm:text-xl text-lg shadow-lg sm:max-w-[650px] max-w-[320px] font-light  font-sans tracking-wider text-center mt-1 md:mt-1  xl:text-start">{heroData?.paragraph}</p>

      
        
     
      <div className=' flex flex-col-reverse xl:flex-row xl:gap-y-0 xl:py-0 gap-y-6 py-6 items-center xl:gap-x-10 md:mt-5 mt-0 mb-6 md:mb-0 px-2 justify-center xl:justify-start'>
      <Link href={'/contact'} className='hover:bg-blue-700 bg-transparent  border  border-blue-700  px-6 py-1  rounded-2xl flex'>
          <button className='text-white font-sans text-xl capitalize'>hire me</button>
         
        </Link>
        <div className='flex  gap-x-4'>
            <Link href={`${SocialLinks?.socialLinks.linkedin}`}> <Linkedin className="text-white hover:bg-blue-700  border-blue-600  bg-transparent  size-9 border rounded-xl p-1" />
       </Link>
         
       <Link href={`${SocialLinks?.socialLinks.instagram}`}>  <Instagram className="text-white hover:bg-blue-700  border-blue-600  bg-transparent  size-9 border rounded-xl p-1" />
       </Link>
       <Link href={`${SocialLinks?.socialLinks.xAccount}`}>
            <p className=" text-white border-blue-700  hover:bg-blue-700 bg-transparent text-lg size-9 px-3 border rounded-xl py-1 uppercase flex items-center justify-center" >x</p></Link>
        
            <Link href={`${SocialLinks?.socialLinks.facebook}`}>
            <Facebook  className="text-white hover:bg-blue-700  border-blue-600  bg-transparent  size-9 border rounded-xl p-1"  /></Link>
    
            
        </div>
        </div>
        </div>



  );
}



export default GettingHeroData