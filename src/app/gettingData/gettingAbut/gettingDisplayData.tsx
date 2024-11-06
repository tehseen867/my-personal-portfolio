// components/GettingDisplayData.js

"use client";
import React, { useEffect, useState } from 'react';
import client from '@/sanity/lib/client';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { motion } from "framer-motion";

type DisplayDataType = {
    displaySection: {
        description: string;
        companyOrUserName: string;
        buttonText: string;
    };
};

const GettingDisplayData: React.FC = () => {
    const [displayData, setDisplayData] = useState<DisplayDataType | null>(null);
 
    useEffect(() => {
        const fetchDisplayData = async () => {
            try {
                const query = `
                    *[_type == "aboutSection"]{
                        displaySection{
                            description,
                            companyOrUserName,
                            buttonText
                        }
                        }
                        `;
                        const res = await client.fetch(query);
                const latest = res.pop();
                setDisplayData(latest || null); // Ensure we handle case where res might be empty
       
            } catch (error) {
                console.error('Error fetching display data:', error);
            }
        };
        
        fetchDisplayData();
    }, []);

    // If displayData is not available, show a loading state or nothing
   
    
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.8, duration: 0.4, ease: "easeIn" }
            }}
        >
            <div className="xl:mt-36">
                <p className="xl:text-[120px] sm:text-[90px] text-[65px] leading-none text-center font-sans font-extralight text-blue-700">
                    {displayData?.displaySection.companyOrUserName}
                </p>
                <p className="text-white font-sans font-light text-xl text-center mt-4">
                    {displayData?.displaySection.description}
                </p>
                <Link href={"#aboutData"}>
                    <div className="flex justify-center gap-x-2 mt-8 group">
                        <ArrowDown className="group-hover:text-blue-600 group-hover:shadow shadow-lg border group-hover:shadow-blue-600 rounded-full size-8 text-white p-2 cursor-pointer border-blue-600" />
                        <p className="text-blue-600 text-xl font-sans font-light flex items-center uppercase cursor-pointer">
                            {displayData?.displaySection.buttonText}
                        </p>
                    </div>
                </Link>
            </div>
        </motion.section>
    );
};



export default GettingDisplayData