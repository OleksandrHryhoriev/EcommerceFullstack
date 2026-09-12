import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import MainWrapper from "@/components/main/MainWrapper";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "E-commerce Dashboard",
   description: "E-Commerce Admin Dashboard Interface",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
   return (
      <html
         lang="en"
         className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      >
         <body className="min-h-full flex">
            <Sidebar />
            <div className="w-full flex-1 flex flex-col gap-2">
               <Header />
               <MainWrapper>{children}</MainWrapper>
            </div>
         </body>
      </html>
   );
}
