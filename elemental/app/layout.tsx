import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./ReusableComponents/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elemental",
  description:
    "Elemental is a showcase of reusable UI components, featuring interactive demos and code snippets for developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen text-lightTextContrast bg-lightBg dark:text-darkTextContrast dark:bg-darkBg`}
      >
        <Header />
        <div className="pt-[75px]">{children} </div>
      </body>
    </html>
  );
}
