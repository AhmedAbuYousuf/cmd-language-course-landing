import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export const Features = () => {
  const { t } = useTranslation();

  const features = [
    t("features.jlpt"),
    t("features.teachers"),
    t("features.hours"),
    t("features.etiquette"),
    t("features.classes"),
    t("features.materials"),
    t("features.exam"),
    t("features.skill"),
    t("features.agency"),
    t("features.nursing"),
    t("features.recruiting"),
    t("features.interview"),
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t("features.title")}
        </h2>

        <Card className="max-w-5xl mx-auto shadow-[var(--shadow-soft)] border-2">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 animate-in fade-in slide-in-from-left duration-500"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="mt-1 shrink-0">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center space-y-4">
          <div className="bg-gradient-to-r from-accent/20 to-accent/10 rounded-2xl p-6 max-w-3xl mx-auto border border-accent/20">
            <h3 className="text-2xl font-bold text-accent mb-2">
              {t("benefits.title")}
            </h3>
            <p className="text-lg font-semibold text-foreground">{t("benefits.duration")}</p>
            <p className="text-lg italic text-muted-foreground">{t("benefits.schedule")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
