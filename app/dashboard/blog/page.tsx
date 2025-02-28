"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { createBlog, deleteBlog, getBlogs, updateBlog } from "@/utils/api";
import { Blog } from "@/lib/types/interface";
import { LoadingIcon } from "@/components/loading-icon";
import PaginationComponent from "@/components/PaginationComponent";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getToken } from "@/utils/auth";

const Page = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [totalPages, setTotalPages] = useState<number>(1);

  // State for adding blog
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [content, setContent] = useState<string>("");

  // Edit blog
  const [editBlog, setEditBlog] = useState<Blog | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const blogsData = await getBlogs(page, limit);
        setBlogs(blogsData.data);
        setTotalPages(Math.ceil(blogsData.total / limit));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [page, limit]);

  const handleUpload = async () => {
    if (!title || !content || !image) {
      alert("All fields must be filled in!");
      return;
    }

    try {
      const token = getToken();
      if (!token) {
        alert("Unauthorized!");
        return;
      }

      const response = await createBlog(title, content, image, token);
      if (response?.success) {
        alert("Blog succesfully created!");
        setBlogs((prev) => [response.data, ...prev]);
        setTitle("");
        setImage("");
        setContent("");
      } else {
        alert(response?.message || "Error when create the blog");
      }
    } catch (error) {
      console.error("Uploading Error:", error);
      alert("An error occurred while uploading the blog");
    }
  };

  const handleDeleteBlog = async (blogId: number) => {
    try {
      const token = getToken();
      if (!token) {
        alert("Unauthorized!");
        return;
      }

      const response = await deleteBlog(blogId, token);
      console.log("API Response Delete:", response);

      if (response?.success) {
        alert("Blog successfully deleted!");
        setBlogs((prev) => prev.filter((blog) => blog.id !== blogId));
      } else {
        alert(response?.message || "Error deleting the blog");
      }
    } catch (error) {
      console.error("Delete Error:", error);
      alert("An error occurred while deleting the blog");
    }
  };

  const handleUpdateBlog = async () => {
    if (!editBlog) return;
    const { id, title, content, image } = editBlog;
    if (!title || !content || !image) {
      alert("All fields must be filled in!");
      return;
    }

    try {
      const token = getToken();
      if (!token) {
        alert("Unauthorized!");
        return;
      }

      const response = await updateBlog(id, title, content, image, token);
      if (response?.success) {
        alert("Blog successfully updated!");
        setBlogs((prev) =>
          prev.map((blog) =>
            blog.id === id ? { ...blog, title, content, image } : blog
          )
        );
        setEditBlog(null);
      } else {
        alert(response?.message || "Error when updating the blog");
      }
    } catch (error) {
      console.error("Updating Error:", error);
      alert("An error occurred while updating the blog");
    }
  };

  if (loading) {
    return <LoadingIcon />;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-semibold">Blog Table</div>
        <div className="flex items-center space-x-4">
          <Input
            type="text"
            className="border-second/30"
            placeholder="Search by title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-white">+ Add Blog</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Blog</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    className="col-span-3 border-second/30"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="keyword">Keyword</Label>
                  <Input
                    id="keyword"
                    className="col-span-3 border-second/30"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    className="col-span-3 border-second/30"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  className="text-white"
                  onClick={handleUpload}
                >
                  Upload
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Table className="w-full mb-6">
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Keyword</TableHead>
            <TableHead>Content</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Updated At</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell>{blog.id}</TableCell>
                <TableCell>{blog.title}</TableCell>
                <TableCell>{blog.image}</TableCell>
                <TableCell>{blog.content}</TableCell>
                <TableCell>
                  {new Date(blog.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {new Date(blog.updatedAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="text-xs px-3"
                          onClick={() => setEditBlog(blog)}
                        >
                          Edit
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit Blog</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div>
                            <Label htmlFor="title">Title</Label>
                            <Input
                              id="title"
                              className="col-span-3 border-second/30"
                              value={editBlog?.title || ""}
                              onChange={(e) =>
                                setEditBlog((prev) =>
                                  prev
                                    ? { ...prev, title: e.target.value }
                                    : null
                                )
                              }
                            />
                          </div>
                          <div>
                            <Label htmlFor="keyword">Keyword</Label>
                            <Input
                              id="keyword"
                              className="col-span-3 border-second/30"
                              value={editBlog?.image || ""}
                              onChange={(e) =>
                                setEditBlog((prev) =>
                                  prev
                                    ? { ...prev, image: e.target.value }
                                    : null
                                )
                              }
                            />
                          </div>
                          <div>
                            <Label htmlFor="content">Content</Label>
                            <Textarea
                              id="content"
                              className="col-span-3 border-second/30"
                              value={editBlog?.content || ""}
                              onChange={(e) =>
                                setEditBlog((prev) =>
                                  prev
                                    ? { ...prev, content: e.target.value }
                                    : null
                                )
                              }
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button
                            type="button"
                            className="text-white"
                            onClick={handleUpdateBlog}
                          >
                            Update
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <Dialog>
                      <DialogTrigger>
                        <Button
                          variant={"destructive"}
                          className="text-xs px-3"
                        >
                          Delete
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            Are you sure to Delete this Blog?
                          </DialogTitle>
                        </DialogHeader>
                        <DialogFooter className="sm:justify-start">
                          <Button
                            className="text-white hover:bg-accent"
                            onClick={() => handleDeleteBlog(blog.id)}
                          >
                            Yes
                          </Button>
                          <DialogClose asChild>
                            <Button
                              type="button"
                              variant="destructive"
                              className="hover:scale-105"
                            >
                              Cancel
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                No blogs found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex justify-between items-center mt-4">
        <select
          className="border p-2"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
        <PaginationComponent
          page={page}
          totalPages={totalPages}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default Page;
