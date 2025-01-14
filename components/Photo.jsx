"use client"

import { motion } from "framer-motion"
// import Image from "next/image"; 


export default function Photo() {
    return (
        <div className="w-full h-full relative">

            {/* image */}
            <motion.div initial={{ opacity: 0}} animate={{
                opacity:1,
                transition: { delay: 2, duration: 0.4, ease: "easeIn" }
            }}>
                <div className="absolute flex justify-center w-[298px] h-[248px] mt-4 xl:w-[598px] xl:h-[578px] xl:-mt-20 xl:-ms-12">
                    <img src="/bg.png" property="true" quality={100}  fill="true" alt="" className="object-contain"/>
                </div>
            </motion.div>

            {/* circle */}
            <motion.svg className="w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]" fill="transparent" viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg">
                <motion.circle cx={253} cy={253} r={250} stroke="#00ff99" strokeWidth={4} strokeLinecap={"round"} strokeLinejoin={"round"} 
                initial={{ strokeDasharray: "24 10 0 0"}}
                animate={{
                    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                    rotate: [120,360]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: 'reverse'
                }}>

                </motion.circle>
            </motion.svg>
        </div>
    );

} 