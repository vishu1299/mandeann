import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import Herosearch from "@/components/hero-search";
import LogoSection from "@/components/logo-section";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mandean - E-commerce Store",
  description: "Modern e-commerce store with the best products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-roboto antialiased`}>
        <LogoSection />
        <Header />
        {/* <Herosearch /> */}
        <main className="mt-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
