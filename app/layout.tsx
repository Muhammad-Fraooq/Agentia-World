import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agentia World - Innovate Your Digital Presence",
  description: "Agentia World is your go-to solution for cutting-edge web development, design, and digital strategy. Elevate your brand with our expert services.",
  icons:'/agentic.jpeg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Header />
      <section className="pt-4 md:pt-12 ">
      {children}
      </section>
      <Footer/>
      </body>
    </html>
  );
}
