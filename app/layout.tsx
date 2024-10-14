import type { Metadata } from "next";
import { Milik, Proxima } from "./fonts/font";
import "./globals.css";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "AL-ANSAR CENTRE FOR COMPREHENSIVE EDUCATION (ACCE)",
  description: "AL-ANSAR CENTRE FOR COMPREHENSIVE EDUCATION (ACCE)",
  icons: {
    icon: "/svg/AicLogo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Milik.variable} ${Proxima.variable} font-proxima antialiased flex flex-col min-h-screen bg-[#F1FFF4]`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
