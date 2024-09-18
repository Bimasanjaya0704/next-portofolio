"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import lesyukImage from "@/public/assets/work/lesyuk.webp";
import meetingImage from "@/public/assets/work/meeting.webp";
import todoImage from "@/public/assets/work/todo.webp";
import ringkasImage from "@/public/assets/work/ringkaaja.webp";
import melatiImage from "@/public/assets/work/melati.webp";
import bimoviesImage from "@/public/assets/work/bimovies.webp";
import prakalightImage from "@/public/assets/work/praka.webp";
import wawasanImage from "@/public/assets/work/wawasan.webp";
import rppImage from "@/public/assets/work/rpp.webp"; //
import juraganImage from "@/public/assets/work/juragan.webp";
import WorkSlideBtn from "@/components/WorkSlideBtn";
import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "Todolist using Laravel 10",
    description:
      "The Todolist App I developed using Laravel 10 and Bootstrap is a modern solution for users who want to efficiently manage their tasks. By combining the power of Laravel in web development with the responsive design of Bootstrap, this application offers an intuitive and enjoyable user experience.",
    image: todoImage,
    live: "https://todolistajayuk.000webhostapp.com/todolist",
    github: "https://github.com/Bimasanjaya0704/Todolist-Laravel",
    stack: [
      {
        name: "Laravel 10",
      },
      {
        name: "Bootstrap",
      },
    ],
  },
  {
    num: "02",
    category: "Frontend",
    title: "Lesyuk",
    description:
      "The LesYuk project is an innovative web application designed to streamline the process of finding the perfect tutor for students.",
    image: lesyukImage,
    live: "https://lesyuk.netlify.app/",
    github: "",
    stack: [
      {
        name: "React Js",
      },
      {
        name: "Tailwind Css",
      },
    ],
  },
  {
    num: "03",
    category: "Fullstack",
    title: "Meeting Schedular",
    description:
      "Meeting Scheduler is a user-friendly website designed to simplify the process of organizing and managing meetings. It allows users to easily schedule, reschedule, and coordinate meetings with colleagues or clients.",
    image: meetingImage,
    live: "",
    github:
      "https://github.com/Bimasanjaya0704/Meeting-scheduler-with-nextjs--and-kinde",
    stack: [
      {
        name: "Next JS",
      },
      {
        name: "Firebase",
      },
    ],
  },
  {
    num: "04",
    category: "Fullstack",
    title: "RingkasAJA",
    description:
      "RingkasAJA is a text summarization project using the Maximum Marginal Relevance (MMR) method. Its focus is on providing users with concise and relevant summaries while eliminating unnecessary details.",
    image: ringkasImage,
    live: "",
    github: "https://github.com/Bimasanjaya0704/peringkas_teks_otomatis_MMR",
    stack: [
      {
        name: "Python",
      },
      {
        name: "Tailwind Css",
      },
    ],
  },
  {
    num: "05",
    category: "Mobile",
    title: "App Melati",
    description:
      "Melati App is an innovative application that provides an in-depth experience of understanding the components and workings of electric bicycles.",
    image: melatiImage,
    live: "",
    github: "",
    stack: [
      {
        name: "Flutter",
      },
    ],
  },
  {
    num: "06",
    category: "Frontend",
    title: "BIMovies",
    description:
      "Developing a Web API Movie application that allows users to search for movie information such as title, images, and ratings.",
    image: bimoviesImage,
    live: "https://webmovies-bimovies.netlify.app/",
    github:
      "https://github.com/Bimasanjaya0704/Web-movies-using-ReactJS-and-Tailwind-with-TMDB-API",
    stack: [
      {
        name: "React Js",
      },
      {
        name: "Tailwind Css",
      },
    ],
  },
  {
    num: "07",
    category: "Frontend",
    title: "Prakalight",
    description:
      "Prakalight is a dynamic project that focuses on providing comprehensive information about website development services.",
    image: prakalightImage,
    live: "http://prakalight.live/",
    github: "",
    stack: [
      {
        name: "React Js",
      },
      {
        name: "Tailwind Css",
      },
    ],
  },
  {
    num: "08",
    category: "Wordpress",
    title: "Wawasan Edukasi",
    description:
      "Wawasan Edukasi is a website dedicated to providing educational news and insights to a diverse audience.",
    image: wawasanImage,
    live: "",
    github: "",
    stack: [
      {
        name: "Wordpress",
      },
      {
        name: "Elementor",
      },
    ],
  },
  {
    num: "09",
    category: "Fullstack",
    title: "RPP Maker",
    description:
      "Rancangan Pelaksanaan Pembelajaran (RPP) Maker is a project to make RPP for teacher. This project is university project. Already have patent from Ministry of Law and Human Rights of the Republic of Indonesia.",
    image: rppImage,
    live: "",
    github: "",
    stack: [
      {
        name: "PHP",
      },
      {
        name: "Bootstrap",
      },
    ],
  },
  {
    num: "10",
    category: "Frontend",
    title: "Juragan COD",
    description:
      "Juragan COD is a project to manage the delivery from the seller to the expedition provider.",
    image: juraganImage,
    live: "",
    github: "",
    stack: [
      {
        name: "React Js",
      },
      {
        name: "Tailwind",
      },
    ],
  },
];

const WorkPage = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2,
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      className="flex flex-col justify-center md:py-12 lg:pb-32"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          <div className="w-full lg:w-[58%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-4 md:gap-[30px]">
              {/* Outline num */}
              <div className="flex items-center justify-between">
                <div className="text-3xl md:text-6xl leading-none font-extrabold text-transparent text-outline dark:text-outlinedark">
                  {project.num}
                </div>
                <p className="text-primary dark:text-white text-sm md:text-balance font-semibold py-1 md:py-1 px-2 md:px-4 bg-accent/80">
                  {project.category} Project
                </p>
              </div>

              {/* Project Category */}
              <h2 className="text-2xl md:text-4xl font-bold  text-primary dark:text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>

              {/* Project Description */}
              <p className="text-primary/60 dark:text-white/60 text-sm md:text-balance">
                {project.description}
              </p>

              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-sm bg-accent/80 dark:bg-white/20 px-2 py-1 text-primary md:text-balance font-medium dark:text-accent"
                    >
                      {item.name}
                      {/* remove the las coma */}
                    </li>
                  );
                })}
              </ul>

              {/* Border */}
              <div className="border border-primary/20 dark:border-white/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Live Project button */}
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[34px] h-[34px] md:w-[56px] md:h-[56px] rounded-full bg-primary/20 dark:bg-[#232329] flex justify-center items-center group">
                          <BsArrowUpRight className="text-primary dark:text-white text-md md:text-2xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {/* Github Project button */}
                {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[34px] h-[34px] md:w-[56px] md:h-[56px] rounded-full bg-primary/20 dark:bg-[#232329] flex justify-center items-center group">
                          <BsGithub className="text-primary dark:text-white text-md md:text-2xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="lg:h-[520px] mb-6 md:mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[150px] sm:h-[300px] w-full md:h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-primary/5 lg:border-y-[6px] lg:border-accent z-10"></div>

                      {/* Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Slider Buttons */}
              <WorkSlideBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-8 h-8 md:w-[44px] md:h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkPage;
