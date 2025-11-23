import { ContactForm } from "./ContactForm";
import { useTranslation } from "react-i18next";
import { Mail, Phone, Globe } from "lucide-react";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t("footer.contact")}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                {t("footer.company")}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Professional Japanese language training for care-giver aspirants. Expert instructors, comprehensive curriculum, and career placement support.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border hover:border-primary transition-colors">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:cmdconsultant@yahoo.com" className="hover:text-primary transition-colors">
                  cmdconsultant@yahoo.com
                </a>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border hover:border-primary transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:01783862376" className="hover:text-primary transition-colors">
                  01783-862376
                </a>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border hover:border-primary transition-colors">
                <Globe className="w-5 h-5 text-primary" />
                <a href="https://www.cmd-bd.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  www.cmd-bd.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background p-8 rounded-2xl border-2 border-border shadow-[var(--shadow-soft)]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
