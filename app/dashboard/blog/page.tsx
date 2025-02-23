"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getBlogs } from "@/utils/api";
import { Blog } from "@/lib/types/interface";
import { LoadingIcon } from "@/components/loading-icon";

const Page = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      try {
        const blogsData = await getBlogs();
        console.log("Blogs Response:", blogsData);
        setBlogs(blogsData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <LoadingIcon />;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-semibold">Blog Table</div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            className="input input-bordered"
            placeholder="Search by title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-primary">Add Blog</button>
        </div>
      </div>

      <Table className="w-full mb-6">
        <TableCaption>A list of your blogs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell>{blog.id}</TableCell>
                <TableCell>{blog.title}</TableCell>
                <TableCell>{blog.status || "Published"}</TableCell>
                <TableCell className="text-right">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No blogs found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Page;
