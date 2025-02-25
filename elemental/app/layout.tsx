import type { Metadata } from "next";
import "./globals.css";
import Header from "./Components/Header/Header";


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
        className={`antialiased h-screen text-lightTextContrast bg-lightBg dark:text-darkTextContrast dark:bg-darkBg`}
      >
        <Header />
        <main className="pt-[75px]">{children} </main>
      </body>
    </html>
  );
}
