import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bima Sanjaya | Services",
  description:
    "If you have questions or need assistance with project planning, design, development, testing, deployment, or documentation, feel free to reach out. I'm here to help with any challenges you face and to discuss how we can work together effectively.",
};

const services = [
  {
    num: 1,
    title: "Project Planning",
    description:
      "Our project planning services involve defining project goals and scope, identifying key features and functionalities, and conducting market research to understand user needs and potential competitors. We analyze technical requirements and select appropriate technologies to ensure project success.",
  },
  {
    num: 2,
    title: "Design",
    description:
      "We focus on designing system architecture and user interfaces. This includes creating wireframes or mockups using tools like Figma or Adobe XD and documenting technical specifications for feature implementation. Our design process ensures a well-thought-out structure and user-friendly interfaces.",
  },
  {
    num: 3,
    title: "Development",
    description:
      "Our development services cover setting up the development environment, building frontend and backend components, and integrating APIs. We use modern technologies such as React, Angular, or Vue.js for frontend development and Python, Java, or C# for backend development. We ensure seamless integration between frontend and backend components and third-party services.",
  },
  {
    num: 4,
    title: "Testing",
    description:
      "We conduct thorough testing to ensure the quality of your application. This includes unit testing for individual components, integration testing for component interactions, and user acceptance testing (UAT) to validate that the application meets user needs. We also handle bug fixing to address any issues discovered during testing.",
  },
  {
    num: 5,
    title: "Deployment",
    description:
      "Our deployment process involves preparing the production environment, deploying the application to production servers using tools like Docker and Kubernetes, and leveraging cloud platforms like AWS, Azure, or Heroku. We also implement monitoring and logging to track application performance and detect potential issues.",
  },
  {
    num: 6,
    title: "Documentation",
    description:
      "Hi! my name is Bima Sanjaya - We create comprehensive documentation for your project, including code documentation for developers and user guides for end-users. This ensures that both the development team and users have the necessary resources to understand and use the application effectively.",
  },
];

const Services = () => {
  return (
    <section className="min-h-[40vw] flex flex-col justify-center mt-8 md:mt-0 pb-8 md:pb-0 md:py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[68px]">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-4 md:gap-6 group"
              >
                <div className="w-full cursor-grab flex justify-between items-center">
                  <h2 className="text-[20px] md:text-[42px] 2xl:text-[46px] font-bold leading-none text-primary dark:text-white group-hover:text-accent transition-all duration-500">
                    {service.title}
                  </h2>
                  <div className="text-3xl md:text-4xl 2xl:text-[44px] font-extrabold text-outline dark:text-outlinedark text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                </div>
                <p className="text-primary/60 dark:text-white/60 text-sm md:text-balance  2xl:text-xl">
                  {service.description}
                </p>
                <div className="border-b-2 md:border-b-4 border-primary/20 dark:border-white/20 w-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
