import Link from "next/link";
import { SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

const techFavorite = [
  {
    icon: <BiLogoTypescript />,
    path: "https://www.typescriptlang.org/",
  },
  {
    icon: <RiNextjsFill />,
    path: "https://nextjs.org/",
  },
  {
    icon: <SiTailwindcss />,
    path: "https://tailwindcss.com/",
  },
];
const TechFavorite = () => {
  return (
    <div className="flex justify-center lg:justify-start items-center mt-2 gap-4 text-[30px] lg:text-[36px]">
      {techFavorite.map((item, index) => {
        return (
          <Link
            href={item.path}
            key={index}
            className="text-primary/70 hover:text-accent dark:hover:text-white transition-all dark:text-white/30"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default TechFavorite;
