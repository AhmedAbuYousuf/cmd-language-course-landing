import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, TrendingUp, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

export const WhySection = () => {
  const { t } = useTranslation();

  const whyCmdPoints = [
    t("whyCmd.proficiency"),
    t("whyCmd.customs"),
    t("whyCmd.sharing"),
    t("whyCmd.critical"),
    t("whyCmd.jobInterview"),
    t("whyCmd.link"),
  ];

  const eligibilityPoints = [
    t("eligibility.age"),
    t("eligibility.education"),
    t("eligibility.experience"),
    t("eligibility.interview"),
  ];

  return (
    <section id="why" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Why Japan */}
          <Card className="shadow-[var(--shadow-soft)] border-2 animate-in fade-in slide-in-from-left duration-700">
            <CardHeader>
              <CardTitle className="text-3xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-primary" />
                {t("whyJapan.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <p className="text-foreground font-medium">{t("whyJapan.salary")}</p>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <p className="text-foreground font-medium">{t("whyJapan.secure")}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed pt-4 border-t border-border">
                {t("whyJapan.description")}
              </p>
            </CardContent>
          </Card>

          {/* Why CMD */}
          <Card className="shadow-[var(--shadow-soft)] border-2 animate-in fade-in slide-in-from-right duration-700" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <CardTitle className="text-3xl bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                {t("whyCmd.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {whyCmdPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <p className="text-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Eligibility */}
          <Card className="lg:col-span-2 shadow-[var(--shadow-soft)] border-2 animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <CardTitle className="text-3xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center">
                {t("eligibility.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {eligibilityPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                    <p className="text-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
