import Link from "next/link";
import imageNotFound from "@/public/not-found.svg";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <>
      <div className="container lg:p-10 bg-white flex flex-col md:flex-row items-center justify-around text-center md:text-left ">
        <div className="order-2 md:order-none">
          <h1 className="text-lg lg:text-5xl 2xl:text-[70px] font-black text-yellow-500 uppercase mb-4 md:mb-10">
            Oops! Page Not Found
          </h1>
          <p className="text-gray-600 text-sm md:text-base 2xl:text-xl">
            The page you are looking for might have been moved or does not
            exist. Please check the URL or use the button below to return to the
            homepage.
          </p>
          <Link href="/">
            <Button className="text-white mt-4 mb-8 2xl:text-2xl 2xl:px-8 2xl:py-8">
              &larr; Go Back
            </Button>
          </Link>
        </div>
        <div className="text-right order-1 md:order-none">
          <Image
            src={imageNotFound}
            alt="not found"
            className="md:w-[900px] 2xl:w-[1000px]"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
