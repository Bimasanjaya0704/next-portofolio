import React from "react";
import { GetLimitedBlog } from "./GetLimitBlog";
import BlogItem from "./BlogItem";
import { listBlog, BlogData } from "./BlogData";
import Link from "next/link";
import { Button } from "../ui/button";

const BlogLanding: React.FC = () => {
  const limitedBlog: BlogData[] = GetLimitedBlog(listBlog, 5);

  return (
    <div className="container">
      <div className="bg-light dark:bg-dark md:p-10 md:px-10 my-5 md:my-10">
        <div className="flex items-center md:space-x-4">
          <div className="w-full md:w-[250px] 2xl:w-[320px] py-4 md:py-6">
            <h2 className="text-xs md:text-base 2xl:text-2xl text-second dark:text-accent">
              Bima Sanjaya
            </h2>
            <h2 className="text-xl md:text-3xl 2xl:text-[40px] text-accent dark:text-secondaryLight font-bold">
              Latest Blog{" "}
            </h2>
          </div>
          <div className="border-l-[2px] h-7 border-accent block md:hidden md:w-full mr-1"></div>
          <div className="border-l-[4px] md:border-l-0 h-7 md:h-0 md:border-t-[5px] 2xl:border-t-[6px] border-accent md:w-full"></div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {limitedBlog.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </div>

        <Link href={"/blog"} className="flex justify-center mt-4 2xl:mt-6">
          <Button className="text-white dark:text-second">See all</Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogLanding;
