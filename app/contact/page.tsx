"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) 8953 4086 8777",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "bimasanjayawork@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Semarang, Indonesia",
  },
];

const Contact = () => {
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
    >
      <div className="container mx-auto pb-12">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="lg:w-[54%] order-2 lg:order-none">
            <form
              action=""
              className="flex flex-col gap-6 p-4 sm:p-10 bg-accent/15 dark:bg-[#27272c] rounded-xl"
            >
              <h3 className="text-2xl md:text-4xl text-accent font-semibold">
                Let's work together
              </h3>
              <p className="dark:text-white/60 text-sm md:text-balance text-primary/60">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam ipsum recusandae commodi repudiandae tenetur adipisci?
              </p>

              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone" />
              </div>

              {/* Select
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Web Dev</SelectItem>
                    <SelectItem value="ui">UI/UX</SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}

              {/* Textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your messege here"
              />

              {/* Button */}
              <Button className="max-w-40 text-sm md:text-balance text-white dark:text-primary">
                Send Messege
              </Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-2 lg:mb-0">
            <ul className="flex flex-col gap-5 md:gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-3 sm:gap-6">
                    <div className="w-[44px] h-[44px] md:w-[52px] md:h-[52px] lg:w-[72px] lg:h-[72px] bg-accent/20 dark:bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[20px] md:text-[28px]">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-primary/60 dark:text-white/60 text-sm md:text-balance font-semibold">
                        {item.title}
                      </p>
                      <h3 className="text-sm sm:text-balance md:text-xl">
                        {item.description}
                      </h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
