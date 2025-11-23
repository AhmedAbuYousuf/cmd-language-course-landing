import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useTranslation } from "react-i18next";

export const Header = ({ onRegisterClick }: { onRegisterClick: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 items-center h-16 gap-4">
          {/* Left Section - Empty */}
          <div className="flex items-center">
            {/* Intentionally empty */}
          </div>

          {/* Middle Section - Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {t("nav.home")}
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {t("nav.features")}
            </button>
            <button
              onClick={() => scrollToSection("teachers")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {t("nav.teachers")}
            </button>
            <button
              onClick={() => scrollToSection("why")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {t("nav.why")}
            </button>
          </nav>

          {/* Right Section - Controls */}
          <div className="flex items-center justify-end gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <Button
              onClick={onRegisterClick}
              className="hidden md:inline-flex bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
            >
              {t("hero.cta")}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-border py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium transition-colors hover:text-primary text-left"
            >
              {t("nav.home")}
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium transition-colors hover:text-primary text-left"
            >
              {t("nav.features")}
            </button>
            <button
              onClick={() => scrollToSection("teachers")}
              className="text-sm font-medium transition-colors hover:text-primary text-left"
            >
              {t("nav.teachers")}
            </button>
            <button
              onClick={() => scrollToSection("why")}
              className="text-sm font-medium transition-colors hover:text-primary text-left"
            >
              {t("nav.why")}
            </button>
            <Button onClick={onRegisterClick} className="w-full bg-gradient-to-r from-primary to-primary/80">
              {t("hero.cta")}
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
