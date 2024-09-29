import type { Metadata } from "next";
import { Cabinet_grotesk, maison_Neue } from "./fonts/font";
import "./globals.css";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "AL-ANSAR CENTRE FOR COMPREHENSIVE EDUCATION (ACCE)",
  description: "AL-ANSAR CENTRE FOR COMPREHENSIVE EDUCATION (ACCE)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Cabinet_grotesk.variable} ${maison_Neue.variable} font-grotesk  antialiased flex flex-col min-h-screen`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
