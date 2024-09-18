// app/api/send-email/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 2525,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: Request) {
  const { firstname, lastname, email, phone, message } = await request.json();

  try {
    await transporter.sendMail({
      from: `"${firstname} ${lastname}" <${email}>`,
      to: "bimasanjayawork@gmail.com",
      subject: `New message from ${firstname} ${lastname}`,
      text: message,
      html: `<p><strong>First Name:</strong> ${firstname}</p>
             <p><strong>Last Name:</strong> ${lastname}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
