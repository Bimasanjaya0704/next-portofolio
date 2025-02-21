"use client";
import React from "react";
import Link from "next/link";
import Social from "./Social";
import { links } from "./Navbar";

const Footer = () => {
  return (
    <footer className="bg-[#232329] text-white dark:text-accent py-8">
      <div className="container mx-auto px-4 2xl:px-16">
        <div className="md:flex flex-col md:flex-row justify-between items-center">
          {/* Left section */}
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-bold 2xl:text-3xl">BIMA SANJAYA</p>
            <p className="text-xs md:text-sm 2xl:text-base mt-0.5 md:mt-2">
              © 2025 All Rights Reserved.
            </p>
          </div>

          {/* Center section with dynamic navigation links */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-6 mb-6 md:mb-0">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="hover:text-accent-hover transition-all hover:scale-y-110 capitalize font-medium text-xs md:text-md 2xl:text-xl md:hover:scale-110"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right section */}
          <div className="flex gap-4">
            <Social
              containerStyles="flex gap-4"
              iconStyles="w-9 h-9 border border-accent 
                  rounded-full flex justify-center items-center 
                  text-accent text-base hover:bg-accent 
                  hover:text-primary hover:transition-all duration-500 2xl:text-3xl 2xl:h-14 2xl:w-14"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
