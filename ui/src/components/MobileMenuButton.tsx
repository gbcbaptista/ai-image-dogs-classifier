type MobileMenuButtonProps = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
};

const MobileMenuButton = (props: MobileMenuButtonProps) => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = props;
  return (
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
      aria-label="Toggle mobile menu"
    >
      <div className="w-6 h-6 flex flex-col justify-center items-center">
        <span
          className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
            isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-primary transition-all duration-300 mt-1 ${
            isMobileMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-primary transition-all duration-300 mt-1 ${
            isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </div>
    </button>
  );
};

export default MobileMenuButton;
