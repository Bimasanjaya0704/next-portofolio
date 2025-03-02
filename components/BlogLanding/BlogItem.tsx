import React from "react";
import { BlogData } from "./BlogData";
import { Button } from "../ui/button";
import Link from "next/link";

const BlogItem: React.FC<{ blog: BlogData }> = ({ blog }) => {
  const formatDate = (isoDate: string) => {
    return new Date(isoDate).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white hover:shadow-accent dark:bg-second shadow-lg rounded-xl overflow-hidden transition-all cursor-pointer hover:shadow-md hover:scale-[1.02] duration-200">
      <div className="p-4 md:p-6 flex flex-col gap-3">
        {/* Title with Icon */}
        <div className="flex items-center flex-wrap md:flex-none justify-between">
          <div className="text-lg md:text-2xl font-semibold text-second dark:text-accent">
            {blog.title}
          </div>
          {/* Created & Updated Date */}
          <div className="text-xs text-second dark:text-white/50 mt-2">
            <p>📅 {formatDate(blog.createdAt)}</p>
          </div>
        </div>

        {/* Content Preview */}
        <p className="text-[12px] md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          {blog.content.length > 240
            ? blog.content.substring(0, 240) + "..."
            : blog.content}
        </p>

        {/* Keywords */}
        <div className="mt-2 flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap justify-between items-center gap-2">
            {blog.keyword.split(",").map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 dark:bg-accent/80 text-[9px] md:text-sm text-second px-3 py-1 rounded-full shadow-sm"
              >
                {tag.trim()}
              </span>
            ))}
          </div>

          <Link
            href={`/blog/${encodeURIComponent(
              blog.title.replace(/\s+/g, "-")
            )}`}
            passHref
            className="mt-2"
          >
            <Button variant="outline" className="text-[10px]">
              Continue Reading...
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
