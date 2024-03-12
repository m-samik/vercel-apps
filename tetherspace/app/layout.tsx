import type { Metadata } from "next";
import { MuseoModerno } from "next/font/google";
import "./globals.css";
import { cn } from "./libs/utils";
import Header from "./components/header";
import Footer from "./components/footer";

const museoModerno = MuseoModerno({ subsets: ["latin"] });

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
          "bg-gradient-to-r from-yellow-600 from-1% via-black via-30% to-black/20 to-20%",
          museoModerno.className
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
