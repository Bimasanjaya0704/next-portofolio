import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "@/utils/authMiddleware";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, data: blogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { title, content, image, token } = await req.json();
    const isAdmin = verifyToken(token);
    if (!isAdmin)
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );

    const userId = 1;
    const newBlog = await prisma.blog.create({
      data: { title, content, image },
    });

    return NextResponse.json({ success: true, data: newBlog }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
