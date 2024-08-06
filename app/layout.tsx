import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Frontend/navbar";
import Footer from "@/components/Frontend/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tapales Vet Clinic",
  description: "Iloilo Vet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
