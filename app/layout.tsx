import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StarsCanvas from "@/components/StarBackground";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio de Iván Zafra",
  description: "Este es mi portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden overflow-y-scroll bg-[#030014]`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
