import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const Hero = ({ onRegisterClick }: { onRegisterClick: () => void }) => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-block">
            <div className="bg-gradient-to-r from-primary to-accent p-1 rounded-2xl shadow-[var(--shadow-elegant)]">
              <div className="bg-background px-8 py-6 rounded-xl">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("hero.title")}
                  </span>
                </h1>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide mt-2 text-foreground">
                  {t("hero.subtitle")}
                </h2>
              </div>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-primary font-semibold max-w-3xl mx-auto italic">
            {t("hero.tagline")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={onRegisterClick}
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-elegant)] hover:scale-105 transition-all duration-300"
            >
              {t("hero.cta")}
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
    </section>
  );
};
