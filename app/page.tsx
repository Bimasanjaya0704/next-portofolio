"use client";
import { useState } from "react";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Stats from "@/components/Stats";
import TechFavorite from "@/components/TechFavorite";

const Home = () => {
  const [isTextExpanded, setIsTextExpanded] = useState(false);
  const toggleTextExpansion = () => {
    setIsTextExpanded(!isTextExpanded);
  };
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-12">
          {/* Aboute me */}
          <div className="text-center lg:text-left order-2 lg:order-none">
            <h2 className="h2 text-accent mb-2">Bima Sanjaya</h2>
            <span className="h3">Software Engineer</span>
            <p className="text-primary mt-4 dark:text-white leading-relaxed text-justify lg:mr-14 text-md md:text-lg">
              I am a software engineer with one year of experience, specializing
              in frontend engineer . I have developed strong skills in creating
              responsive and engaging user interfaces and have hands-on
              experience integrating with backends through APIs.
            </p>

            {/* Tech yang disukai */}
            <div className=" text-md font-bold text-primary mt-4 dark:text-white">
              Current favorite tech :
              <TechFavorite />
            </div>

            {/* Button and social media */}
            <div className="flex mt-8 flex-col xl:flex-row items-center gap-8">
              <Button
                variant={"outline"}
                className="uppercase flex items-center gap-2 "
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 lg:mb-0">
                <Social
                  containerStyles="flex gap-4"
                  iconStyles="w-9 h-9 border border-accent 
                  rounded-full flex justify-center items-center 
                  text-accent text-base hover:bg-accent 
                  hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo  */}
          <div className="order-1 lg:order-none mb-8 lg:mb-0 ">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
