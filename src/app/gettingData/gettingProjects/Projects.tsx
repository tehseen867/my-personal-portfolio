"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import client from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import SliderBtn from "../../component/sliderBtn";

// Define project types
type ProjectType = {
  projectImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
  link: string;
  techStack: string[];
  projectNumber: number;
  projectName: string;
  description: string;
};

const Projects = () => {
  const [allProjects, setAllProjects] = useState<ProjectType[]>([]);
  const [project, setProject] = useState<ProjectType | null>(null);
  const handleSlideChange = (swiper: { activeIndex: number }) => {
    if (allProjects.length > 0) {
      const currentIndex = swiper.activeIndex;
      setProject(allProjects[currentIndex]);
    }
  };
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "projects"]{
          projectImage{
            asset->{
              _id,
              url
            }
          },
          link,
          techStack,
          projectNumber,
          projectName,
          description
        }`;
        const res = await client.fetch(query);
        setAllProjects(res);
   
        if (res.length > 0) {
          setProject(res[0]);
     
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);
  
  // Destructure project properties for better readability
  const { link, techStack, projectNumber, projectName, description } = project || {};

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.8, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[60vh] flex flex-col justify-end xl:py-20 xl:pr-28 mb-12 xl:mb-0"
    >
      <div className="container mx-auto">
        <div className="flex items-center max-w-96">
          <div className="flex flex-col xl:flex-row max-w-[700px] xl:gap-x-[20px]">
            <div className="w-full xl:w-[300px] xl:h-[360px] h-full flex flex-col gap-y-3 xl:gap-y-8 xl:pt-6 order-2 xl:px-0 px-2 xl:order-none">
              <div className="text-7xl text-transparent leading-none font-extrabold text-outline">
                {projectNumber}
              </div>
              <h2 className="text-white text-[40px] xl:text-[28px] leading-none font-bold group-hover:text-blue-600 transition-all duration-500 capitalize">
                {projectName}
              </h2>
              <p className="text-white/60">{description}</p>
              <ul className="flex gap-2">
                {techStack?.map((item, index) => (
                  <li key={index} className="text-xl text-blue-600">
                    {item}
                    {index !== techStack.length - 1 && ", "}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20 max-w-screen"></div>
              <div>
                <Link href={link ?? "#"}>
                  <span className="flex gap-x-2 group">
                    <span className="flex items-center">
                      <ArrowUpRight className="border rounded-full size-8 text-white p-2 cursor-pointer border-blue-600 transition-transform duration-300 transform group-hover:rotate-45 group-hover:text-blue-600" />
                    </span>
                    <div className="flex items-center">
                      <p className="text-blue-600 flex text-sm font-sans uppercase items-center cursor-pointer">
                        view project
                      </p>
                    </div>
                  </span>
                </Link>
              </div>
            </div>

            <div className="text-white w-[350px]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[360px] md:mb-12 mb-4"
                onSlideChange={handleSlideChange}
              >
                {allProjects.map((project, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[320px] relative group flex justify-center items-center bg-pink-50">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="w-full  h-full relative">
                        {project?.projectImage?.asset && (
                          <Image
                            src={urlFor(project.projectImage.asset).url()}
                            alt={project.projectName}
                            fill
                            className="object-cover"
                            onError={(e) => {
                              e.currentTarget.src = '/path/to/placeholder/image.jpg'; // Use a placeholder image
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <SliderBtn />
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};



  export default Projects