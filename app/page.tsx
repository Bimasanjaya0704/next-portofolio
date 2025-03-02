import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import TechFavorite from "@/components/TechFavorite";
import type { Metadata } from "next";
import ButtonDownloadCv from "@/components/ButtonDownloadCv";
import About from "@/components/About";
import Footer from "@/components/Footer";
import BlogLanding from "@/components/BlogLanding/BlogLanding";

export const metadata: Metadata = {
  title: "Bima Sanjaya",
};
const Home = () => {
  return (
    <section className="h-full">
      <link rel="icon" href="/icons.ico" sizes="any" />
      <div className="container mx-auto 2xl:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-12">
          {/* Aboute me */}
          <div className="text-center lg:text-left order-2 lg:order-none">
            <h2 className="h2 text-accent mb-2 2xl:text-[70px]">
              Bima Sanjaya
            </h2>
            <span className="h3 text-primary dark:text-white dark:text-opacity-80 2xl:text-[30px]">
              Software Engineer
            </span>
            <p className="text-primary mt-4 dark:text-white dark:text-opacity-80 leading-relaxed text-sm text-center lg:text-left lg:mr-12 3xl:mr-16 2xl:text-xl md:text-lg">
              I am a software engineer with one year of experience. As a
              frontend engineer, I specialize in building responsive and
              interactive user interfaces, as well as integrating with backend
              services. My backend experience includes developing APIs, develop
              robotic system, and applying Object-Oriented Programming (OOP)
              principles using Python and C#.
            </p>

            {/* Tech yang disukai */}
            <div className="text-sm md:text-md 2xl:text-xl font-bold text-primary mt-4 dark:text-white dark:text-opacity-80">
              Current favorite tech :
              <TechFavorite />
            </div>

            {/* Button and social media */}
            <div className="flex mt-8 flex-col lg:flex-row items-center gap-8">
              <ButtonDownloadCv />
              <div className="mb-8 lg:mb-0">
                <Social
                  containerStyles="flex gap-4"
                  iconStyles="w-9 h-9 border border-accent 
                  rounded-full flex justify-center items-center 
                  text-accent text-base hover:bg-accent 
                  hover:text-primary hover:transition-all duration-500 2xl:text-3xl 2xl:h-14 2xl:w-14"
                />
              </div>
            </div>
          </div>
          {/* Photo  */}
          <div className="order-1 lg:order-none mb-8 lg:mb-0 ">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />

      <About />

      <BlogLanding />

      <Footer />
    </section>
  );
};

export default Home;
