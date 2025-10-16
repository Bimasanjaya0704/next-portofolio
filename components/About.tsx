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
    year: 2025,
    title: "IT System Engineer",
  },
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
    <section className="container mx-auto">
      <div className="bg-white dark:bg-[#232329] dark:border-accent dark:text-accent dark:border-opacity-5 border-4 py-8 md:py-16 text-primary px-4 lg:px-8 my-12 lg:mx-5 rounded-lg">
        <div className="w-full flex justify-between items-center">
          <div className="md:text-3xl lg:text-5xl hidden lg:block 2xl:text-[60px] 2xl:mb-12 font-bold text-center mb-6">
            Career Journey
          </div>
          <div className="md:text-3xl lg:text-5xl hidden lg:block 2xl:text-[60px] 2xl:mb-12 font-bold text-center mb-6">
            Techstack
          </div>
        </div>
        <div></div>
        {/* Text on the left */}
        <div className="w-full flex-none lg:flex lg:space-x-12">
          <div className="w-full lg:w-1/2">
            <div className="text-xl md:text-3xl font-bold text-center mb-4 lg:hidden">
              Career Journey
            </div>
            <div className="space-y-4 dark:text-primary">
              {careerMilestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex items-center w-full space-x-2 md:space-x-4 py-2 md:py-3 px-4 bg-accent rounded-xl"
                >
                  <div className="font-semibold text-sm md:text-2xl 2xl:text-[24px]">
                    {milestone.year}
                  </div>
                  <div className="border-l-2 border-primary h-5"></div>

                  <div className="text-xs md:text-lg font-medium 2xl:text-[21px]">
                    {milestone.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text on the right */}
          <div className="w-full lg:w-1/2 mt-6 md:mt-0">
            <div className="text-xl md:text-3xl font-bold text-center lg:hidden">
              Techstack
            </div>
            <p className="hidden md:block text-justify text-sm lg:text-base 2xl:text-xl dark:text-white dark:text-opacity-80">
              As a Software Engineer, I possess a diverse skill set that drives
              project success. I have been focusing on frontend development
              since 2020 and have been expanding my knowledge into backend
              technologies since 2024. Here are some of the technologies and
              tools I use:
            </p>

            <div className="relative w-full overflow-hidden">
              <div className="flex w-max space-x-4 animate-loop-scroll mt-4">
                {techList.concat(techList).map((service, index) => (
                  <div
                    key={index}
                    className="flex space-x-2 px-[14px] py-[4px] md:px-6 md:py-3 bg-accent text-dark dark:text-primary rounded-full shadow-md"
                  >
                    <div className="flex items-center gap-2">
                      <div className="text-[15px] md:text-base 2xl:text-2xl">
                        {service.icon}
                      </div>
                      <div className="text-[12px] md:text-base 2xl:text-[16px]">
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
