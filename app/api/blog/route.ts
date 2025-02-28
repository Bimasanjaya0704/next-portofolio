import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "@/utils/authMiddleware";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;
    const skip = (page - 1) * limit;

    const blogs = await prisma.blog.findMany({
      take: limit,
      skip: skip,
      orderBy: { createdAt: "desc" },
    });

    const totalBlogs = await prisma.blog.count();

    return NextResponse.json(
      { success: true, data: blogs, total: totalBlogs, page, limit },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const token = req.headers.get("Authorization")?.replace("Bearer ", "");
    console.log("Authorization Header:", token);
    if (!token)
      return NextResponse.json(
        { success: false, message: "Unauthorized: No token provided" },
        { status: 401 }
      );

    const isAdmin = verifyToken(token);
    if (!isAdmin)
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );

    const { title, content, image } = await req.json();
    const newBlog = await prisma.blog.create({
      data: { title, content, image },
    });

    return NextResponse.json({ success: true, data: newBlog }, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
