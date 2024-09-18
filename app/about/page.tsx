import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  FaPython,
  FaReact,
  FaGitSquare,
  FaBootstrap,
  FaSourcetree,
  FaJs,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandVscode } from "react-icons/tb";
import {
  SiFlask,
  SiTailwindcss,
  SiPostman,
  SiTypescript,
  SiDotnet,
  SiCsharp,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bima Sanjaya | About",
  description:
    "As a Software Engineer, I possess a diverse skill set that drives project success. I have been focusing on frontend development since 2020 and have been expanding my knowledge into backend technologies since 2024.",
};

// Define the type for an individual technology item
interface TechItem {
  name: string;
  icon?: React.ReactNode; // Use ReactNode for optional JSX elements
}

// Define the type for categories
interface SkillCategory {
  category: string;
  items: TechItem[];
}

// Define the overall skills structure
interface Skills {
  title: string;
  description: string;
  list: SkillCategory[];
}
const skills: Skills = {
  title: "Skills",
  description:
    "As a Software Engineer, I possess a diverse skill set that drives project success. I have been focusing on frontend development since 2020 and have been expanding my knowledge into backend technologies since 2024. Here are some of the technologies and tools I use",
  list: [
    {
      category: "Languages",
      items: [
        { name: "JavaScript", icon: <FaJs /> },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-xl md:text-[32px]" />,
        },
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
      category: "FrontEnd",
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
        { name: "Dotnet", icon: <SiDotnet /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express.js", icon: <SiExpress /> },
      ],
    },
  ],
};

const about = {
  title: "About me",
  description:
    "I am a software engineer with one year of experience, specializing in frontend engineer . I have developed strong skills in creating responsive and engaging user interfaces and have hands-on experience integrating with backends through APIs. At frontend engineer , I am proficient in JavaScript with frameworks such as Next.js and CSS frameworks like Tailwind and Bootstrap. Additionally, I have backend engineer experience with Python and C# from bootcamp and internship programs, and I can effectively implement Object-Oriented Programming (OOP) in my projects. Furthermore, I am skilled in version control with Git. I am confident that my diverse skills and experience make me a valuable asset to any team.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Bima Sanjaya",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesia",
    },
    {
      fieldName: "Email",
      fieldValue: "bimasanjayawork@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Indonesian, English",
    },
  ],
};

const experience = {
  icon: "",
  title: "My Experience",
  description:
    "As a dedicated professional in the field, I bring a wealth of experience and expertise to every project. My journey in the industry has equipped me with valuable skills and insights, allowing me to thrive in dynamic environments.",
  items: [
    {
      company: "Formulatrix - Salatiga",
      position: "Intern Software Engineer",
      duration: "Jul 2024 - Present",
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
  icon: "",
  title: "My Education",
  description:
    "Explore my educational background and the qualifications I've acquired throughout my academic journey. This section highlights the degrees, certifications, and relevant coursework that have equipped me with the knowledge and skills in software engineering.",
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

const About = () => {
  return (
    <div className="min-h-[80vw] flex items-center justify-center pb-8 md:pb-0 md:py-12 lg:py-0">
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col lg:flex-row gap-[40px] md:gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skilss</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vw] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-2xl md:text-4xl font-bold">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] text-primary/80 dark:text-white/60 mx-auto text-sm md:text-balance text-justify lg:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-4 md:px-10 rounded-lg flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent text-sm md:text-balance">
                            {item.duration}
                          </span>
                          <h3 className="text-balance md:text-lg text-white max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-sm md:text-balance text-white/60">
                              {item.company}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-2xl md:text-4xl font-bold">
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-primary/80 dark:text-white/60 mx-auto text-sm md:text-balance text-justify lg:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-4 md:px-10 rounded-lg flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-balance md:text-lg text-white max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-xs md:text-balance text-white/60">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skilss */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col text-center lg:text-left gap-[30px]">
                  <h3 className="text-2xl md:text-4xl font-bold">
                    {skills.title}
                  </h3>
                  <p className="max-w-[600px] text-primary/80 dark:text-white/60 mx-auto text-sm md:text-balance text-justify lg:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 gap-4 lg:gap-6">
                  {skills.list.map((item, index) => (
                    <li key={index} className="relative group">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full bg-[#232329] h-[160px] rounded-lg flex flex-col items-center justify-center p-4">
                            <span className="text-accent text-balance md:text-2xl font-semibold mb-12">
                              {item.category}
                            </span>
                            <div className="flex flex-wrap items-center justify-center gap-2">
                              {item.items.map((tech, index) => (
                                <div
                                  key={index}
                                  className="text-white text-center"
                                >
                                  <div className="text-2xl md:text-4xl">
                                    {tech.icon}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="text-white bg-[#232329]">
                            {item.items.map((tech, index) => (
                              <div key={index} className="mb-1">
                                <p className="text-sm">{tech.name}</p>
                              </div>
                            ))}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center lg:text-left"
            >
              <div className="flex flex-col gap-6 lg:p-0">
                <h3 className="text-2xl md:text-4xl font-bold">
                  {about.title}
                </h3>
                <p className="max-w-[600px] text-primary/80 dark:text-white/60 mx-auto text-sm md:text-balance text-justify lg:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 gap-6 w-full mx-auto lg:grid-cols-2 lg:max-w-full">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-col lg:flex-row items-start lg:items-center gap-4 p-4 bg-gray-100 dark:bg-[#232329] rounded-lg shadow-md"
                    >
                      <span className="font-semibold text-primary/60 dark:text-white/60">
                        {item.fieldName}:
                      </span>
                      <span className="text-base text-primary dark:text-white font-medium">
                        {item.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default About;
