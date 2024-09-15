"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import MobileNavbar from "./MobileNavbar";
import Image from "next/image";
import logo from "../public/assets/logo.svg";
import logoDark from "../public/assets/logoDark.svg";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const darkModeButton = (
    <Button onClick={toggleDarkMode}>
      {darkMode ? (
        <MdLightMode className="text-md lg:text-xl" />
      ) : (
        <MdDarkMode className="text-md lg:text-xl" />
      )}
    </Button>
  );

  return (
    <header className="py-8 xl:py-6 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <Image src={darkMode ? logo : logoDark} width={150} alt="logo" />
        </Link>

        {/* Dekstop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Navbar />
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
          {darkModeButton}
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden flex gap-4">
          {darkModeButton}
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
