"use client";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import React from 'react';
import dynamic from "next/dynamic";
const GettingStep1Data=dynamic(()=>import("@/app/gettingData/gettingProcessSection/gettingSteps/gettingStep1"),{ssr:false})
function Step1() {
  
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUpVariants}
      >
        <motion.h1 className="font-display tracking-[-0.01rem] drop-shadow-sm">
          <GettingStep1Data />
        </motion.h1>
      </motion.div>
    </section>
  );
}

export default Step1;
