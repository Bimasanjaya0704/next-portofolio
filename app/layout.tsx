import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import StoreProvider from "./StoreProvider";
import Head from "next/head";  // Import Head from next/head

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

          {/* Menambahkan Meta Tag secara manual di dalam Head */}
          <Head>
            {/* General Meta Tags */}
            <meta name="description" content="Hi! my name is Bima Sanjaya..." />
            <meta name="author" content="Bima Sanjaya" />
            <meta name="keywords" content="Bima Sanjaya, Software Engineer, Frontend Engineer, Web Development" />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content="Bima Sanjaya" />
            <meta property="og:description" content="Hi! my name is Bima Sanjaya - I am a software engineer..." />
            <meta property="og:image" content="https://bimasanjaya.vercel.app/bimas.png" />
            <meta property="og:image:alt" content="Bima Sanjaya - Software Engineer" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="Portofolio Bima Sanjaya" />
            <meta property="og:type" content="website" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:title" content="Bima Sanjaya" />
            <meta name="twitter:description" content="Hi! my name is Bima Sanjaya - I am a software engineer..." />
            <meta name="twitter:image" content="https://bimasanjaya.vercel.app/bimas.png" />
            <meta name="twitter:image:alt" content="Bima Sanjaya - Software Engineer" />
            <meta name="twitter:card" content="summary_large_image" />

            {/* Favicon */}
            <link rel="icon" href="https://bimasanjaya.vercel.app/favicon.ico" type="image/x-icon" />
            <link rel="icon" href="https://bimasanjaya.vercel.app/favicon.png" type="image/png" />

            {/* Apple Touch Icon */}
            <link rel="apple-touch-icon" href="https://bimasanjaya.vercel.app/apple-touch-icon.png" />
          </Head>
        </body>
      </StoreProvider>
    </html>
  );
}
