'use client'

import React, { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

/////////icon//////////////
import { BsArrowDownRight } from "react-icons/bs"
import { FiDownload } from "react-icons/fi"
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs
} from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'


////components
import Socials from "../components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import StairTransition from "@/components/StairTransition";

//////////////////////////

/////////project////////

const projects = [
  {
    num: '01',
    category: "Calculater",
    title: "Project 1",
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio vitae modi neque libero necessitatibus!',
    stack: [{ name: "C#" }, { name: "Xaml" },],
    image: '/1.png',
    live: "",
    github: ""
  },
  {
    num: '02',
    category: "Font-End",
    title: "Project 1",
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio vitae modi neque libero necessitatibus!',
    stack: [{ name: "C#" }, { name: "Xaml" }],
    image: '/2.png',
    live: "",
    github: ""
  },
  {
    num: '03',
    category: "Font-End",
    title: "Project 1",
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio vitae modi neque libero necessitatibus!',
    stack: [{ name: "C#" }, { name: "Xaml" }],
    image: '/3.png',
    live: "",
    github: ""
  },
  {
    num: '04',
    category: "Font-End",
    title: "Project 1",
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio vitae modi neque libero necessitatibus!',
    stack: [{ name: "C#" }, { name: "Xaml" }],
    image: '/4.png',
    live: "",
    github: ""
  },
]

//////////services//////
const services = [
  {
    num: '01',
    title: 'Web Deverloper',
    href: '/',
    description:
      'สามารถสร้างเเละพัฒนา Web app ได้',
  },
  {
    num: '02',
    title: 'UX/UI Design',
    href: '/',
    description:
      'สามารถออกแบบ UX/UI Website ได้',
  },
]

///////////// skills data /////////
const skills = {
  title: "My Skills",
  description:
    "ทักษะเเละสกิลที่ถนัดที่ตอนนี้",
  skillList: [
    {
      index: 1,
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      index: 2,
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      index: 3,
      icon: <FaJs />,
      name: 'Javascript',
    },
    {
      index: 4,
      icon: <FaReact />,
      name: 'React.js',
    },
    {
      index: 5,
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      index: 6,
      icon: <SiTailwindcss />,
      name: 'tailwend.css',
    },
    {
      index: 7,
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      index: 8,
      icon: <FaFigma />,
      name: 'Figma',
    },
  ]
}

///////////// about data ////////////// 
const about = {
  title: "About me",
  description:
    "ข้อมูลส่วนตัว",
  info: [
    {
      index: 1,
      fieldName: "Name",
      fieldValue: "Phichitphong Tamsuntai",
    },
    {
      index: 2,
      fieldName: "Phone",
      fieldValue: "065-486-9639",
    },
    {
      index: 3,
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      index: 4,
      fieldName: "Skype",
      fieldValue: "Film.01",
    },
    {
      index: 5,
      fieldName: "Nationality",
      fieldValue: "Thai",
    },
    {
      index: 6,
      fieldName: "Email",
      fieldValue: "Tamsuntai123@gmail.com",
    },
    {
      index: 7,
      fieldName: "Freelance",
      fieldValue: "Available",
    },
  ]
}

//////////////////////////////
export default function Home() {

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index 
    const currentIndex = swiper.activeIndex;
    /// update project state based on current slide index
    setProject(projects[currentIndex]);
  }

  return (
    <>
      <StairTransition />
      <div>

        {/* HomPage */}
        <section id="home" className="h-full xl:mt-16">
          <div className="container mx-auto h-full">
            <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-16">

              {/* text */}
              <div className="text-center mt-3 xl:text-left order-2 xl:order-none">
                <span className="text-xl">Web Deverloper</span>
                <h1 className="h1 mb-6">
                  Hello I'm Film <span className=" text-accent">Phichitphong</span>
                </h1>
                <p className="max-w-[500px] mb-9 text-white/80">
                  I can create programs or websites. and I have
                  skills in various programming languages ​​and technologies.
                </p>

                {/* btn */}
                <div className="flex flex-col xl:flex-row items-center gap-8">
                  <Button
                    variant="outline"
                    size="lg"
                    className=" uppercase flex items-center gap-2">
                    <span> Download CV</span>
                    <FiDownload className="text-xl" />
                  </Button>

                  {/* socials */}
                  <div className="mb-8 xl:mb-0 ">
                    <Socials
                      containerStyles="flex gap-6"
                      iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center
                    text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
                  </div>
                </div>
              </div>

              {/* photo */}
              <div className="order-1 xl:order-none" ><Photo /></div>
            </div>
            <Stats />
          </div>
        </section>

        {/* servicesPage */}
        <section id="services" className=" min-h-[50vh] xl:min-h-[100vh] flex flex-col py-8 justify-center ">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" }
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
              {services.map((service) => {
                return (
                  <div key={service.num}
                    className="flex flex-col flex-1 justify-center gap-6 group">
                    <div className="w-full flex justify-between items-center">
                      {/* top */}
                      <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                        {service.num}
                      </div>
                      <Link href={service.href}
                        className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                        <BsArrowDownRight className="text-primary text-3xl" />
                      </Link>
                    </div>
                    {/* title */}
                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">{service.title}</h2>

                    {/* description */}
                    <p className="text-white/80">{service.description}</p>

                    {/* border */}
                    <div className="w-full border-b border-white/20"></div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* resumePage */}
        <section id="resume" className="min-h-[100vh] flex flex-col justify-center py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' }
            }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
            <div className="container mx-auto">
              <Tabs
                defaultValue='skills'
                className='flex flex-col xl:flex-row gap-[60px]'>
                <TabsList className='flex flex-col w-full max-w-[380px] mx-auto gap-6 xl:mx-0'>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="about">About me</TabsTrigger>
                </TabsList>

                {/* content */}
                <div className="min-h-[70vh] w-full">
                  {/* skills */}
                  <TabsContent value="skills" className="w-full">
                    <div className="flex flex-col gap-[30px]">
                      <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                        <h3 className='text-4xl font-bold '>{skills.title}</h3>
                        <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                      </div>
                      <ul className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]'>
                        {skills.skillList.map((item) => {
                          return (
                            <li key={item.index}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                    <div className='text-6xl group-hover:text-accent transition-all duration-300'>{item.icon}</div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className='capitalize'>{item.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </TabsContent>
                  {/* about me */}
                  <TabsContent value="about" className="w-full text-center xl:text-left">
                    <div className='flex flex-col gap-[30px]'>
                      <h3 className='text-4xl font-bold'>{about.title}</h3>
                      <p className='max-w-[600px] mx-auto text-white/60 xl:mx-0'>{about.description}</p>
                      <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                        {about.info.map((item) => {
                          return (
                            <li key={item.index} className='flex justify-center items-center gap-4 xl:justify-start'>
                              <span className='text-white/60'>{item.fieldName}</span>
                              <span className='text-md'>{item.fieldValue}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </motion.div>
        </section>

        {/* workPage */}
        <section id="work" className="min-h-[100vh] flex flex-col justify-center py-8 xl:py-12">
          <div className="container mx-auto">
            <motion.section
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
              }}
              className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
              <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                  <div className="w-full flex flex-col order-2 xl:h-[460px] xl:w-[50%] xl:justify-between xl:order-none ">
                    <div className="flex flex-col gap-[30px] h-[50%]">
                      {/* outline-num */}
                      <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                        {project.num}
                      </div>
                      {/* project-category */}
                      <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">{project.category} Project</h2>
                      {/* project-description */}
                      <p className="text-white/60">{project.description}</p>
                      {/* stack */}
                      <ul className="flex gap-4">
                        {project.stack.map((item, index) => {
                          return (
                            <li key={index} className="text-xl text-accent">
                              {item.name}
                              {/* remove the last comma */}
                              {index !== project.stack.length - 1 && ","}
                            </li>
                          );
                        })}
                      </ul>
                      {/* border */}
                      <div className="border border-white/20"></div>
                      {/* buttons */}
                      <div className="flex items-center gap-4">
                        {/* live-project-button */}
                        <Link href={project.live}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Live project</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>
                        {/* github-project-button */}
                        <Link href={project.github}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Github repository</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full xl:w-[50%]">
                    <Swiper
                      spaceBetween={30}
                      slidesPerView={1}
                      className="xl:h-[620px] mb-12"
                      onSlideChange={handleSlideChange}>
                      {projects.map((project, index) => {
                        return (
                          <SwiperSlide key={index} className="w-full">
                            <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                              {/* overlay */}
                              <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                              {/* image */}
                              <div className="relative w-full h-full">
                                <img src={project.image} fill="true" className="object-cover" alt="" />
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </section>

      </div>
    </>
  );
}
