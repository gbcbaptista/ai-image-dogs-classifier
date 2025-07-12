"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenuSidebar from "./MobileMenuSidebar";

const Header = () => {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLinkClass = (path: string) => {
    if (path === "/") {
      return pathname === "/"
        ? "text-accent font-bold"
        : "text-primary hover:text-accent";
    }
    return pathname.startsWith(path)
      ? "text-accent font-bold"
      : "text-primary hover:text-accent";
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="bg-card border-b border-gray-700 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🐕</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-primary pr-2">
                    {t("title")}
                  </h1>
                  <p className="text-sm text-secondary hidden xl:block">
                    {t("subtitle")}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <nav className="hidden lg:flex items-center gap-6">
                <Link
                  href="/"
                  className={`transition-colors ${getLinkClass("/")}`}
                >
                  {t("home")}
                </Link>
                <Link
                  href="/how-it-works"
                  className={`transition-colors ${getLinkClass(
                    "/how-it-works"
                  )}`}
                >
                  {t("howItWorks")}
                </Link>
                <Link
                  href="/about"
                  className={`transition-colors ${getLinkClass("/about")}`}
                >
                  {t("about")}
                </Link>
                <a
                  href="https://gabriel-baptista.dev/"
                  className="text-primary hover:text-accent transition-colors"
                >
                  {t("portfolio")}
                </a>
              </nav>
              <LanguageSelector />

              <MobileMenuButton
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <MobileMenuSidebar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        getLinkClass={getLinkClass}
        t={t}
      />
    </>
  );
};

export default Header;
