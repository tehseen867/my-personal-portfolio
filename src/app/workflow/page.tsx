"use client"
import { ArrowDown } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import dynamic from "next/dynamic";
const GettingProcessData=dynamic(()=>import("@/app/gettingData/gettingProcessSection/gettingProcessData"),{ssr:false})
const Step1=dynamic(()=>import("@/app/component/steps/step1"),{ssr:false})
const Step2=dynamic(()=>import("@/app/component/steps/step2"),{ssr:false})
const Step3=dynamic(()=>import("@/app/component/steps/step3"),{ssr:false})
const Step4=dynamic(()=>import("@/app/component/steps/step4"),{ssr:false})
const Step5=dynamic(()=>import("@/app/component/steps/step5"),{ssr:false})
const ConvinceSection=dynamic(()=>import("@/app/component/convince"),{ssr:false})

import Link from 'next/link';
function Process() {
    const [isLoaded,setIsLoaded]=useState(false)
    const { ref, inView } = useInView({
        threshold: 0.2, 
        triggerOnce: true, 
    });
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };
    useEffect(() => {
        setIsLoaded(true);
    }, []);
    if(!isLoaded){
            return <div className='flex h-screen items-center text-white justify-center gap-4 p-4 text-4xl'>loading...</div>

      }
    return (
        <div >
                <motion.div
    ref={ref}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    variants={fadeUpVariants}
    >
      <motion.h1
        className="font-display  tracking-[-0.01rem] drop-shadow-sm "
        variants={fadeUpVariants}
      >
           <GettingProcessData/>
            <div className='flex justify-center xl:justify-center  ml-2 xl:ml-0'>
                <div className='mb-16 xl:mb-0'>
                    <Link className='cursor-pointer' href={"#step1"} ><ArrowDown className="text-white border-blue-600 size-10 border rounded-full p-2 mt-8 mb-2" /></Link>
                    <div className='xl:flex justify-center hidden '>
                        <div className="h-32 w-[1px] bg-blue-600 text-center"></div></div>
                </div>
            </div>
            </motion.h1>
    
            </motion.div>
 
            <div>
                <div className='flex xl:justify-end justify-start' id='step1'>
                    <div className='ml-2 xl:ml-10'>
                        <div className='xl:flex hidden justify-center '>
                            <div className="h-44 w-[1px] bg-blue-600 text-center"></div></div>
                        <div className="text-white  size-10 border-blue-600  items-center flex justify-center border rounded-full p-2 xl:mt-2 mt-40 mb-2">01</div>
                        <div className='flex justify-center'>
                            <div className="h-[400px] xl:h-52 sm:h-[170px] xsm1:h-[370px] xsm2:h-[275px] xsm3:h-[210px] xsm4:h-[190px] xsm5:h-[160px]  w-[1px] bg-blue-600 text-center "></div></div>
                    </div>
              <Step1/>
                </div>
                <div className='flex justify-start'>
                <div className='block xl:hidden xl:ml-10 ml-2'>
                        <div className='flex justify-center'>
                            <div className="xl:h-44 h-32 w-[1px] bg-blue-600 text-center"></div></div>
                        <div className="text-white size-10 border-blue-600  items-center flex justify-center border rounded-full p-2 mt-2 mb-2">02</div>
                        <div className='flex justify-center'>
                            <div className="h-[400px] xl:h-52 sm:h-[170px] xsm1:h-[370px] xsm2:h-[275px] xsm3:h-[210px] xsm4:h-[190px] xsm5:h-[160px]  w-[1px] bg-blue-600 text-center "></div></div>
                    </div>
                   <Step2/>
                    <div className='hidden xl:block'>
                        <div className='flex justify-center'>
                            <div className="xl:h-44 h-32 w-[1px] bg-blue-600 text-center"></div></div>
                        <div className="text-white size-10 border-blue-600  items-center flex justify-center border rounded-full p-2 mt-2 mb-2">02</div>
                        <div className='flex justify-center'>
                            <div className="xl:h-52 h-36 w-[1px] bg-blue-600 text-center "></div></div>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex xl:justify-end justify-start xl:ml-10 ml-2'>
                    <div>
                        <div className='flex justify-center'>
                            <div className="xl:h-44 h-32 w-[1px] bg-blue-600 text-center"></div></div>
                        <div className="text-white size-10  items-center flex justify-center border-blue-600 border rounded-full p-2 mt-2 mb-2">03</div>
                        <div className='flex justify-center'>
                        <div className="h-[400px] xl:h-52 sm:h-[170px] xsm1:h-[420px] xsm2:h-[275px] xsm3:h-[210px] xsm4:h-[190px] xsm5:h-[170px]  w-[1px] bg-blue-600 text-center "></div></div>
                    </div>
                   <Step3/>
                </div>
                <div className='flex justify-start'>
                <div className='block xl:hidden xl:ml-10 ml-2'>
                        <div className='flex justify-center'>
                            <div className="xl:h-44 h-32 w-[1px] bg-blue-600 text-center"></div></div>
                        <div className="text-white size-10  items-center flex justify-center border-blue-600 border rounded-full p-2 mt-2 mb-2">04</div>
                        <div className='flex justify-center'>
                        <div className="h-[400px] xl:h-52 sm:h-[180px] xsm1:h-[470px] xsm2:h-[350px] xsm3:h-[230px] xsm4:h-[200px] xsm5:h-[200px]  w-[1px] bg-blue-600 text-center "></div></div>
                    </div>
                   <Step4/>
                    <div className='hidden xl:block'>
                        <div className='flex justify-center'>
                            <div className="xl:h-44 h-32 w-[1px] bg-blue-600 text-center"></div></div>
                        <div className="text-white size-10  items-center flex justify-center border border-blue-600 rounded-full p-2 mt-2 mb-2">04</div>
                        <div className='flex justify-center'>
                            <div className="xl:h-56 h-36 w-[1px] bg-blue-600 text-center "></div></div>
                    </div>

                </div>
            </div>
            <div className='flex xl:justify-end justify-start xl:ml-10 ml-2'>
                    <div>
                        <div className='flex justify-center'>
                            <div className="xl:h-44 h-36 w-[1px] bg-blue-600 text-center"></div></div>
                        <div className="text-white size-10  items-center flex justify-center border border-blue-600 rounded-full p-2 mt-2 mb-2">05</div>
                    
                    </div>
                    <Step5/>
                </div>
                <ConvinceSection/>
        </div >

    )
}


export default Process