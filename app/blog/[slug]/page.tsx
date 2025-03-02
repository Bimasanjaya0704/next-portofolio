import { listBlog } from "@/components/BlogLanding/BlogData";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import React from "react";

interface BlogDetailProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: BlogDetailProps): Promise<Metadata> {
  const blog = listBlog.find(
    (b) => b.title.replace(/\s+/g, "-") === decodeURIComponent(params.slug)
  );

  if (!blog) return { title: "Blog Not Found" };

  return {
    title: blog.title,
    description: blog.content.substring(0, 150) + "...",
  };
}

const BlogDetailPage: React.FC<BlogDetailProps> = ({ params }) => {
  const blog = listBlog.find(
    (b) => b.title.replace(/\s+/g, "-") === decodeURIComponent(params.slug)
  );

  if (!blog) return notFound();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl md:text-4xl 2xl:text-5xl font-bold mb-4 text-accent dark:text-accent">
        {blog.title}
      </h1>
      <p className="text-xs md:text-sm 2xl:text-base text-gray-500 mb-6">
        📅{" "}
        {new Date(blog.createdAt).toLocaleDateString("id-ID", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </p>
      <div
        className="text-sm md:text-lg 2xl:text-xl text-second dark:text-white/70 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
};

export default BlogDetailPage;
