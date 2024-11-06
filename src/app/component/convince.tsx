"use client";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";
const GettingConvinceData=dynamic(()=>import("@/app/gettingData/gettingConvinceSection"),{ssr:false})


function ConvinceSection() {
  const [isLoaded,setIsLoaded]=useState(false)
  useEffect(() => {
    setIsLoaded(true);
}, []);
  const { ref, inView } = useInView({
    threshold: 0.2, // Triggers when 20% of the component is visible
    triggerOnce: true, // Only trigger once
  });
 
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  if(!isLoaded){
    return <div className='flex h-full items-center text-white justify-center gap-4 p-4 text-4xl'>loading...</div>

}
  return (
    <section ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUpVariants}
      >
        <motion.h1 className="font-display tracking-[-0.01rem] drop-shadow-sm">
          <GettingConvinceData />
        </motion.h1>
      </motion.div>
    </section>
  );
}

export default ConvinceSection;
