import {
  FaPython,
  FaReact,
  FaBootstrap,
  FaJs,
  RiNextjsFill,
  SiFlask,
  SiTailwindcss,
  SiPostman,
  SiTypescript,
  SiDotnet,
  SiCsharp,
  SiNodedotjs,
  SiExpress,
} from "@/components/ui/icons";

const techList: { name: string; icon: JSX.Element }[] = [
  { name: "JavaScript", icon: <FaJs /> },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  { name: "C Sharp", icon: <SiCsharp /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Next JS", icon: <RiNextjsFill /> },
  { name: "React JS", icon: <FaReact /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Dotnet", icon: <SiDotnet /> },
  { name: "Flask", icon: <SiFlask /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Postman", icon: <SiPostman /> },
];

const careerMilestones = [
  {
    year: 2024,
    title: "Junior Software Engineer",
  },
  {
    year: 2022,
    title: "Frontend Engineer",
  },
  {
    year: 2021,
    title: "Web Developer Internship",
  },
];

const About = () => {
  return (
    <section>
      <div className="bg-white dark:bg-[#232329] dark:border-accent dark:text-accent dark:border-opacity-5 border-4 py-8 md:py-24 text-primary px-4 lg:p-8 my-12 lg:mx-5 rounded-lg flex flex-col lg:flex-row items-center">
        {/* Text on the left */}
        <div className="w-full flex flex-wrap md:flex-nowrap justify-center items-center gap-8">
          <div className="w-full">
            <div className="md:text-3xl lg:text-5xl 2xl:text-[100px] 2xl:mb-12 font-bold text-center lg:text-left mb-4">
              Career Journey
            </div>

            <div className="space-y-2 md:space-y-3 mb-8 dark:text-primary">
              {/* Milestone 1 */}
              {careerMilestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex items-center w-full space-x-2 md:space-x-4 py-1.5 md:py-2 px-3 md:px-4 bg-accent rounded-xl"
                >
                  <div className="font-bold text-md md:text-xl">
                    {milestone.year}
                  </div>
                  <div className="border-l-2 border-primary h-5 2xl:border-l-4"></div>

                  <div className="text-sm md:text-md font-semibold">
                    {milestone.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text on the right */}
          <div className="w-full">
            <div className="text-2xl mb-4 md:mb-0 md:text-3xl lg:text-5xl 2xl:text-[100px] 2xl:mb-12 font-bold text-center lg:text-right space-y-2">
              Techstack
            </div>
            <p className="my-4 hidden md:block text-justify text-sm lg:text-base 2xl:text-xl dark:text-white dark:text-opacity-80">
              As a Software Engineer, I possess a diverse skill set that drives
              project success. I have been focusing on frontend development since
              2020 and have been expanding my knowledge into backend technologies
              since 2024. Here are some of the technologies and tools I use
            </p>

            <div className="relative w-full overflow-hidden">
              <div className="flex w-max space-x-4 animate-loop-scroll">
                {techList.concat(techList).map((service, index) => (
                  <div
                    key={index}
                    className="flex space-x-1 md:space-x-2 px-[10px] py-[5px] md:px-4 md:py-2 bg-accent text-dark dark:text-primary rounded-full shadow-md"
                  >
                    <div className="flex items-center gap-2">
                      <div className="text-[12px] md:text-base">
                        {service.icon}
                      </div>
                      <div className="text-[12px] md:text-base">
                        {service.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>        
      </div>
    </section>
  );
};

export default About;
