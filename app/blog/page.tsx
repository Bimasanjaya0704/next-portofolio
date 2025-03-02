"use client";

import BlogItem from "@/components/BlogLanding/BlogItem";
import { BlogData, listBlog } from "@/components/BlogLanding/BlogData";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BlogPage = () => {
  const [currentBlog, setCurrentBlog] = useState(4);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = listBlog.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleBlogs: BlogData[] = filteredBlogs.slice(0, currentBlog);

  const handleSeeMore = () => {
    setCurrentBlog((prev) => prev + 4);
  };

  return (
    <div className="container pb-8">
      <div className=" flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="w-full md:w-[180px] 2xl:w-[270px] py-4 md:py-6">
          <h2 className="text-xs md:text-base 2xl:text-2xl text-second dark:text-accent">
            My
          </h2>
          <h2 className="text-xl md:text-3xl 2xl:text-[40px] text-accent dark:text-secondaryLight font-bold">
            Blogs
          </h2>
        </div>
        <div className="border-t-[5px] 2xl:border-t-[6px] border-accent w-full"></div>
        <div>
          <Input
            type="text"
            placeholder="Search by title...."
            className="border-accent/50 transition-all hover:border-accent mt-2 md:mt-0 text-[10px] md:text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleBlogs.length > 0 ? (
          visibleBlogs.map((blog) => <BlogItem key={blog.id} blog={blog} />)
        ) : (
          <p className="text-center text-gray-500">No blogs found.</p>
        )}
      </div>

      {/* See More Button */}
      {currentBlog < filteredBlogs.length && (
        <div className="text-center mt-6 mb-8">
          <Button onClick={handleSeeMore} className="text-white px-6 py-2">
            See More..
          </Button>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
