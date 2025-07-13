"use client";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState, useEffect } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
  return (
    <html lang="en">
      <title>AI Dog Breed Classifier</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <LanguageProvider>
        <body className={`${poppins.className} bg-bg cursor-default`}>
          <div className={`loading-overlay ${!loading ? "hidden" : ""}`}>
            <div className="loading-spinner"></div>
          </div>

          <div
            style={{
              opacity: loading ? 0 : 1,
              transition: "opacity 1s ease-in-out",
            }}
          >
            <Header />
            <div className="min-h-[calc(100vh-192px)] lg:min-h-[calc(100vh-213px)]">
              {children}
            </div>
            <Footer />
          </div>
        </body>
      </LanguageProvider>
    </html>
  );
}
