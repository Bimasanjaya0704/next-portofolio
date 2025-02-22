import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/utils/authMiddleware";

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    const user = await verifyToken(token);

    if (!user) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    const users = await prisma.user.findMany({
      select: { id: true, username: true, createdAt: true },
    });

    return NextResponse.json({ success: true, data: users }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
