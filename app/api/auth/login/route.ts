import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const SECRET_KEY = process.env.JWT_SECRET || "secret-key";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();
    console.log("Login request:", username, password);

    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Username or password wrong" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    return NextResponse.json(
      {
        user: {
          id: user.id,
          username: user.username,
          createdAt: user.createdAt,
        },
        token,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
