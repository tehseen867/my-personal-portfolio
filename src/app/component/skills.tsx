"use client";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import React from 'react';
import dynamic from "next/dynamic";
const GettingSkills=dynamic(()=>import("@/app/gettingData/gettingSkills"),{ssr:false})


const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the component is visible
    triggerOnce: true, // Only trigger once
  });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div id="skillsSection">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUpVariants}
      >
        <motion.h2
          className="font-display tracking-[-0.01rem] drop-shadow-sm"
          variants={fadeUpVariants}
        >
          <GettingSkills />
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default Skills

