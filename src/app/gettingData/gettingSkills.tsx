"use client";
import React, { useState, useEffect } from 'react';
import client from '@/sanity/lib/client';
import { motion } from "framer-motion";

const GettingSkills = () => {
  type SkillType = {
    skillName: string;
    description: string;
    moreInfoLink: string;
    _id: string;
  };
  
  const [allSkills, setAllSkills] = useState<SkillType[]>([]);
  const [error, setError] = useState<string | null>(null); // Error state
  
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const query = `*[_type == "skills"]{
          skillName,
          description,
          moreInfoLink,
          _id
        }`;
        const res = await client.fetch(query);
        setAllSkills(res);
      } catch (error) {
        console.error('Error fetching skills:', error);
        setError('Failed to load skills. Please try again later.');
      }
    };

    fetchSkills();
  }, []);
  
  if (error) {
    return <p className='text-2xl font-sans font-light text-red-500'>{error}</p>; // Display error message
  }
 

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.4, ease: "easeIn" } }}
    >
      <div className='grid grid-cols-1 xl:my-10 mb-5 gap-x-5 xl:pt-20 xl:pl-10 xl:pr-5'>
        {allSkills.map((skill: SkillType) => (
          <div key={skill._id}>
            <div className='px-5 py-6 border border-gray-800 rounded-lg bg-gray-950 w-[350px] xl:w-full my-3'> 
              <h2 className='text-blue-600 font-sans text-3xl mb-2 uppercase'>
                {skill.skillName}
              </h2>
              <p className='text-gray-300 text-[15px] font-sans font-light tracking-wider mb-3'>
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};



export default GettingSkills