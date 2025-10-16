/* eslint-disable @typescript-eslint/no-explicit-any */

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Metadata } from "next";
import {
  FaPython,
  FaReact,
  FaGitSquare,
  FaBootstrap,
  FaSourcetree,
  FaJs,
  RiNextjsFill,
  TbBrandVscode,
  SiFlask,
  SiTailwindcss,
  SiPostman,
  SiTypescript,
  SiDotnet,
  SiCsharp,
  SiNodedotjs,
  SiExpress,
} from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Bima Sanjaya | About",
  description:
    "As a Software Engineer, I possess a diverse skill set that drives project success. I have been focusing on frontend development since 2020 and expanding my backend knowledge since 2024.",
};

const about = {
  title: "About me",
  description:
    "I am a software engineer with one year of experience. As a frontend engineer, I specialize in building responsive UIs, integrating APIs with JavaScript frameworks like Next.js, and using Tailwind/Bootstrap. I also have backend experience with Python, C#, and .NET.",
  info: [
    { fieldName: "Name", fieldValue: "Bima Sanjaya" },
    { fieldName: "Experience", fieldValue: "1+ Years" },
    { fieldName: "Nationality", fieldValue: "Indonesia" },
    { fieldName: "Email", fieldValue: "bimasanjayawork@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "Indonesian, English" },
  ],
};

const experience = {
  title: "My Experience",
  description:
    "I bring valuable skills and insights gained through professional experience in software engineering.",
  items: [
    {
      company: "LG Sinarmas - Karawang",
      position: "IT System Engineer",
      duration: "May 2025 - Present",
    },
    {
      company: "Formulatrix - Salatiga",
      position: "Junior Software Engineer",
      duration: "Nov 2024 - May 2025",
    },
    {
      company: "Formulatrix - Salatiga",
      position: "Intern Software Engineer",
      duration: "Sep 2024 - Oct 2024",
    },
    {
      company: "Prakalight - Semarang",
      position: "FrontEnd Developer",
      duration: "Jan 2023 - Present",
    },
    {
      company: "DISKOMINFO - Semarang",
      position: "Intern Web Developer",
      duration: "Nov 2021 - Jan 2022",
    },
    {
      company: "Tonec Vison - Salatiga",
      position: "Intern Foto & Videographer",
      duration: "Mar 2018 - Apr 2018",
    },
  ],
};

const education = {
  title: "My Education",
  description:
    "Explore my educational background and qualifications that shaped my skills as a software engineer.",
  items: [
    {
      institution: "Bootcamp Formulatrix",
      degree: "Software Engineer",
      duration: "Jul 2024 - Sept 2024",
    },
    {
      institution: "Universitas Negeri Semarang",
      degree: "S1 Bachelor of Education",
      duration: "Aug 2019 - Jul 2024",
    },
    {
      institution: "SMK Negeri 1 Pringapus",
      degree: "Multimedia",
      duration: "2016 - 2019",
    },
  ],
};

const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "C Sharp", icon: <SiCsharp /> },
      { name: "Python", icon: <FaPython /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "VS Code", icon: <TbBrandVscode /> },
      { name: "Git", icon: <FaGitSquare /> },
      { name: "Sourcetree", icon: <FaSourcetree /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "Next JS", icon: <RiNextjsFill /> },
      { name: "React JS", icon: <FaReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: ".NET", icon: <SiDotnet /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
    ],
  },
];

const SectionTitle = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <>
    <h3 className="text-2xl md:text-4xl font-bold 2xl:text-[44px]">{title}</h3>
    <p className="text-primary/80 dark:text-white/60 mx-auto text-sm md:text-balance lg:text-left">
      {description}
    </p>
  </>
);

const InfoList = ({ data }: { data: typeof about.info }) => (
  <ul className="grid grid-cols-1 gap-6 w-full mx-auto lg:grid-cols-2">
    {data.map(({ fieldName, fieldValue }, i) => (
      <li
        key={i}
        className="flex flex-col lg:flex-row items-start lg:items-center gap-4 p-4 bg-gray-100 dark:bg-[#232329] rounded-lg shadow-md"
      >
        <span className="font-semibold text-primary/60 dark:text-white/60">
          {fieldName}:
        </span>
        <span className="text-base text-primary dark:text-white font-medium">
          {fieldValue}
        </span>
      </li>
    ))}
  </ul>
);

const TimelineList = ({
  data,
  isEducation = false,
}: {
  data: any[];
  isEducation?: boolean;
}) => (
  <ScrollArea className="h-[400px]">
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
      {data.map((item, i) => (
        <li
          key={i}
          className="bg-[#232329] h-[184px] py-6 px-4 md:px-10 rounded-lg flex flex-col justify-center items-center lg:items-start gap-1"
        >
          <span className="text-accent">{item.duration}</span>
          <h3 className="text-lg text-white text-center lg:text-left">
            {isEducation ? item.degree : item.position}
          </h3>
          <div className="flex items-center gap-3">
            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
            <p className="text-sm text-white/60">
              {isEducation ? item.institution : item.company}
            </p>
          </div>
        </li>
      ))}
    </ul>
  </ScrollArea>
);

const SkillsList = () => (
  <ul className="grid grid-cols-2 gap-4 lg:gap-6">
    {skills.map((cat, i) => (
      <li key={i} className="relative group">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="w-full bg-[#232329] h-[160px] rounded-lg flex flex-col items-center justify-center p-4">
              <span className="text-accent font-semibold mb-6">
                {cat.category}
              </span>
              <div className="flex flex-wrap justify-center gap-2">
                {cat.items.map((tech, j) => (
                  <div key={j} className="text-white text-2xl">
                    {tech.icon}
                  </div>
                ))}
              </div>
            </TooltipTrigger>
            <TooltipContent className="text-white bg-[#232329]">
              {cat.items.map((tech, j) => (
                <p key={j} className="text-sm">
                  {tech.name}
                </p>
              ))}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </li>
    ))}
  </ul>
);

const About = () => {
  return (
    <div className="min-h-[80vw] flex items-center justify-center">
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col lg:flex-row gap-[40px] md:gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vw] w-full">
            <TabsContent value="about">
              <div className="flex flex-col gap-6 lg:p-0">
                <SectionTitle {...about} />
                <InfoList data={about.info} />
              </div>
            </TabsContent>

            <TabsContent value="experience">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <SectionTitle {...experience} />
                <TimelineList data={experience.items} />
              </div>
            </TabsContent>

            <TabsContent value="education">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <SectionTitle {...education} />
                <TimelineList data={education.items} isEducation />
              </div>
            </TabsContent>

            <TabsContent value="skills">
              <div className="flex flex-col gap-[30px]">
                <SectionTitle
                  title="Skills"
                  description="Technologies and tools I use."
                />
                <SkillsList />
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default About;
