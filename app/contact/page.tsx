import ContactForm from "@/app/contact/ContactForm";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bima Sanjaya | Contact",
  description:
    "Hi! my name is Bima Sanjaya - If you are interested in collaborating or have any questions, please contact me.",
};

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
    <section>
      <div className="container mx-auto pb-12 2xl:px-32">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="lg:w-full order-2 lg:order-none">
            <ContactForm />
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-2 lg:mb-0">
            <ul className="flex flex-col gap-5 md:gap-10">
              {info.map((item, index) => (
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
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
