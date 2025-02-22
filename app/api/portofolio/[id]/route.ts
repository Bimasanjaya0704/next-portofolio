import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "@/utils/authMiddleware";

const prisma = new PrismaClient();

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!params.id) {
      return NextResponse.json(
        { success: false, message: "ID is required" },
        { status: 400 }
      );
    }

    const portfolio = await prisma.portfolio.findUnique({
      where: { id: Number(params.id) },
    });

    if (!portfolio) {
      return NextResponse.json(
        { success: false, message: "Portfolio not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: portfolio },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to retrieve portfolio" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { title, description, imageUrl, projectUrl, liveUrl, token } =
      await req.json();

    const isAdmin = verifyToken(token);
    if (!isAdmin) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    if (!params.id) {
      return NextResponse.json(
        { success: false, message: "ID is required" },
        { status: 400 }
      );
    }

    const updatedPortfolio = await prisma.portfolio.update({
      where: { id: Number(params.id) },
      data: { title, description, imageUrl, projectUrl, liveUrl },
    });

    return NextResponse.json(
      { success: true, data: updatedPortfolio },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
