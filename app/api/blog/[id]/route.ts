import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "@/utils/authMiddleware";

const prisma = new PrismaClient();

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const blog = await prisma.blog.findUnique({
      where: { id: Number(params.id) },
    });

    if (!blog) {
      return NextResponse.json(
        { success: false, message: "Blog not found!" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: blog }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { success: false, message: "Unauthorized: No token provided" },
        { status: 401 }
      );
    }
    const token = authHeader.replace("Bearer ", "");
    const isAdmin = verifyToken(token);
    if (!isAdmin) {
      return NextResponse.json(
        { success: false, message: "Unauthorized: Invalid token" },
        { status: 401 }
      );
    }

    const blogId = Number(params.id);
    if (isNaN(blogId)) {
      return NextResponse.json(
        { success: false, message: "Invalid blog ID" },
        { status: 400 }
      );
    }
    const { title, content, image } = await req.json();

    const updatedBlog = await prisma.blog.update({
      where: { id: blogId },
      data: { title, content, image, updatedAt: new Date() },
    });

    return NextResponse.json(
      { success: true, data: updatedBlog },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { success: false, message: "Unauthorized: No token provided" },
        { status: 401 }
      );
    }
    const token = authHeader.replace("Bearer ", "");

    const isAdmin = verifyToken(token);
    if (!isAdmin) {
      return NextResponse.json(
        { success: false, message: "Unauthorized: Invalid token" },
        { status: 401 }
      );
    }

    const blogId = Number(params.id);
    if (isNaN(blogId)) {
      return NextResponse.json(
        { success: false, message: "Invalid blog ID" },
        { status: 400 }
      );
    }

    await prisma.blog.delete({ where: { id: blogId } });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
