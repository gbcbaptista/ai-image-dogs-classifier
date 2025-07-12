import Link from "next/link";

type MobileMenuSidebarProps = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  getLinkClass: (path: string) => string;
  t: (key: string) => string;
};

const MobileMenuSidebar = (props: MobileMenuSidebarProps) => {
  const { isMobileMenuOpen, setIsMobileMenuOpen, getLinkClass, t } = props;
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-card border-l border-gray-700 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6">
        {/* Close button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="Close mobile menu"
          >
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-6">
          <Link
            href="/"
            className={`block text-lg font-medium transition-colors ${getLinkClass(
              "/"
            )}`}
          >
            {t("home")}
          </Link>
          <Link
            href="/how-it-works"
            className={`block text-lg font-medium transition-colors ${getLinkClass(
              "/how-it-works"
            )}`}
          >
            {t("howItWorks")}
          </Link>
          <Link
            href="/about"
            className={`block text-lg font-medium transition-colors ${getLinkClass(
              "/about"
            )}`}
          >
            {t("about")}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenuSidebar;
