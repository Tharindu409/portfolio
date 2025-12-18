import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Helper/Home/Navbar/ResponsiveNav";
import ScreollToTop from "@/components/Helper/ScreollToTop";
import Footer from "@/components/Helper/Home/Footer/Footer";


const font=Inter({
  weight:["100","200","300","400","500","600","700","800","900"],
  subsets:["latin"],
   
})

export const metadata: Metadata = {
  title: "Tharindu Portfolio | Next.js 15",
  description: "{Portfolio website of Tharindu}",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased bg-[#0d0d1f]`}>
        <ResponsiveNav />
        {children}
        <Footer/>
        <ScreollToTop/>
        </body>
    </html>
  );
}
