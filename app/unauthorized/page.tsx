import Link from "next/link";
import imageUnauthorized from "@/public/Unauthorized.svg";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function UnauthorizedPage() {
  return (
    <>
      <div className="container lg:p-10 bg-white flex flex-col mt-4 md:mt-0 md:flex-row items-center justify-around text-center md:text-left ">
        <div className="order-2 md:order-none">
          <h1 className="text-lg lg:text-5xl 2xl:text-[70px] font-black text-yellow-500 uppercase mb-4 md:mb-10">
            You seem to be lost!
          </h1>
          <p className="text-gray-600 text-sm md:text-base 2xl:text-xl">
            The page youre looking for isnt available. Try searching again or
            use the Go Back button below.
          </p>
          <Link href="/">
            <Button className="text-white mt-4 mb-8 2xl:text-2xl 2xl:px-8 2xl:py-8">
              &larr; Go Back
            </Button>
          </Link>
        </div>
        <div className="text-right order-1 md:order-none">
          <Image src={imageUnauthorized} alt="unaothorized" />
        </div>
      </div>
      <Footer />
    </>
  );
}
