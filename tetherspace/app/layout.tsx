import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "./libs/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tetherspace",
  description: "tetherspace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-gradient-to-r from-black/20 to-white",
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
