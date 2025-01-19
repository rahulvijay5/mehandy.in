import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mehandy.in - Get Handy with Skills",
  description: "Learn Mehendi from Tanisha Vijay, a renowned artist with 550k+ Instagram followers. Join our courses and master the art of Mehendi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://db.onlinewebfonts.com/c/6bff5f8f85a7385fbdc21a8f724dd8ac?family=Rajasthan+Regular"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
