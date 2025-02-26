import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import StoreProvider from "./StoreProvider";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Bima Sanjaya",
  description:
    "Hi! my name is Bima Sanjaya - I am a software engineer with one year of experience, specializing in frontend engineer . I have developed strong skills in creating responsive and engaging user interfaces and have hands-on experience integrating with backends through APIs.",
  authors: {
    name: "Bima Sanjaya",
    url: "https://bimasanjaya.vercel.app/",
  },
  icons: [
    { url: "https://bimasanjaya.vercel.app/favicon.ico", type: "image/x-icon" },
    { url: "https://bimasanjaya.vercel.app/favicon.png", type: "image/png" },
  ],
  openGraph: {
    type: "website",
    title: "Bima Sanjaya",
    description:
      "Hi! my name is Bima Sanjaya - I am a software engineer with one year of experience. As a frontend engineer, I specialize in building responsive and interactive user interfaces, as well as integrating with backend services. My backend experience includes developing APIs, develop robotic system, and applying Object-Oriented Programming (OOP) principles using Python and C#.",
    siteName: "Portofolio Bima Sanjaya",
    images: [
      {
        url: "https://bimasanjaya.vercel.app/bimas.png",
        alt: "Bima Sanjaya - Software Engineer",
      },
    ],
  },
  alternates: {
    canonical: "https://bimasanjaya.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={jetbrainsMono.variable}>
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </body>
      </StoreProvider>
    </html>
  );
}
