"use client";
import React, { useEffect, useState } from "react";
import { services } from "@/app/component/tabs";
const { Tabs, TabsList, TabsTrigger, TabsContent } = services;
import client from '@/sanity/lib/client';
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const GettingDisplayData=dynamic(()=>import("@/app/gettingData/gettingAbut/gettingDisplayData"),{ssr:false})
const GettingAboutData=dynamic(()=>import("@/app/gettingData/gettingAbut/gettingAboutData"),{ssr:false})
const Projects=dynamic(()=>import("@/app/gettingData/gettingProjects/Projects"),{ssr:false})
const Skills=dynamic(()=>import("@/app/component/skills"),{ssr:false})
import { useInView } from 'react-intersection-observer';

const Resume = () => {
  type HireMeType = {
    heading: string;
    description: string;
  };

  const [content, setContent] = useState<HireMeType | null>(null);
  
  // Fetch content from the Sanity client
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const query = `*[_type == "hireMe"]{ heading, description }`;
        const res = await client.fetch(query);
        const latest = res.pop();
        setContent(latest);
      } catch (error) {
        console.error('Error fetching contact data:', error);
      }
    };
    fetchContent();
  }, []);

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  // Set page loaded state
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);
  
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  
  return (
    <motion.div
    initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.8, duration: 0.4, ease: "easeIn" },
      }}
      className='min-h-screen flex items-center justify-center  xl:px-28'
    >
      <div className="container mx-auto flex xl:block xl:items-start xl:justify-normal items-center justify-center
">
        <Tabs defaultValue="projects" className="flex flex-col xl:flex-row gap-[60px] xl:justify-normal justify-center items-center xl:items-start">
          <div className="xl:w-1/2 xl:h-1/2 w-[350px] px-2 xl:px-0  xl:sticky top-20 pt-14 xl:pt-4 bg-transparent flex justify-center">
            <div >
              <h2 className="text-white text-5xl font-sans capitalize text-center">{content?.heading}</h2>
              <p className="text-gray-400 font-sans max-w-[380px] pt-4 text-center pb-6 px-2 text-base tracking-wider">{content?.description}</p>
              <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="about">About me</TabsTrigger>
              </TabsList>
            </div>
          </div>

          <div className="min-h-[80vh] w-full">
            <TabsContent value="projects" className="w-full">
              <Projects />
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <Skills />
            </TabsContent>
            <TabsContent value="about" className="w-full">
              <div className="w-full p-4">
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={isPageLoaded ? "visible" : "hidden"}
                  variants={fadeUpVariants}
                  >
                  <motion.h1 className="font-display tracking-[-0.01rem] drop-shadow-sm">
                    <GettingDisplayData />
                  </motion.h1>
                </motion.div>

                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeUpVariants}
                >
                  <motion.h1 className="font-display tracking-[-0.01rem] drop-shadow-sm">
                    <GettingAboutData />
                  </motion.h1>
                </motion.div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};



export default Resume