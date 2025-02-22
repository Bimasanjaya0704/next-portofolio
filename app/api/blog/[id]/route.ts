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
    const { title, content, image, token } = await req.json();
    const isAdmin = verifyToken(token);
    if (!isAdmin) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const updatedBlog = await prisma.blog.update({
      where: { id: Number(params.id) },
      data: { title, content, image, updatedAt: new Date() },
    });

    return NextResponse.json(
      { success: true, data: updatedBlog },
      { status: 200 }
    );
  } catch (error) {
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
    const { token } = await req.json();
    const isAdmin = verifyToken(token);
    if (!isAdmin) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    await prisma.blog.delete({
      where: { id: Number(params.id) },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
