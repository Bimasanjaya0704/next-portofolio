"use client";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import logo from "../public/assets/logo.svg";
import Image from "next/image";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNavbar = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="mt-20 mb-16 flex justify-center">
          <Link href={"/"}>
            <Image src={logo} width={150} alt="logo" />
          </Link>
        </div>
        {/* Nav */}
        <nav className="flex flex-col justify-center items-center gap-8 text-primary dark:text-white">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={`${
                  link.path == pathname &&
                  "text-accent border-b-2 border-accent font-semibold"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
