import { Facebook, Instagram, Linkedin, Mail, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { ContactForm } from "./ContactForm";

export const Footer = ({ onRegisterClick }: { onRegisterClick: () => void }) => {
  const { t } = useTranslation();

  const socialLinks = {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  };

  return (
    <footer className="bg-muted/50 border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 mb-8">
          {/* Left Section - Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                {t("footer.company")}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Professional Japanese language training for care-giver aspirants. Expert instructors, comprehensive curriculum, and career placement support.
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:cmdconsultant@yahoo.com" className="hover:text-primary transition-colors">
                  cmdconsultant@yahoo.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:01783862376" className="hover:text-primary transition-colors">
                  01783-862376
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Globe className="w-4 h-4 text-primary" />
                <a href="https://www.cmd-bd.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  www.cmd-bd.com
                </a>
              </div>
            </div>
          </div>

          {/* Middle Section - Contact Form */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">{t("footer.contact")}</h3>
            <ContactForm />
          </div>

          {/* Right Section - Social Links & Register */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">{t("footer.followUs")}</h3>
              <div className="flex gap-3">
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-accent/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <Button
                onClick={onRegisterClick}
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-[var(--shadow-elegant)]"
              >
                {t("hero.cta")}
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center pt-4">
              © 2024 CMD. {t("footer.rights")}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
