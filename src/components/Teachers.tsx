import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Teachers = () => {
  const { t } = useTranslation();

  const teachers = [
    {
      name: t("teachers.yoshie.name"),
      experience: t("teachers.yoshie.experience"),
      location: t("teachers.yoshie.location"),
    },
    {
      name: t("teachers.kaniz.name"),
      experience: t("teachers.kaniz.experience"),
      location: t("teachers.kaniz.location"),
    },
  ];

  return (
    <section id="teachers" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t("teachers.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teachers.map((teacher, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 border-2 animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 space-y-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="text-center space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">{teacher.name}</h3>
                  <p className="text-muted-foreground font-medium">{teacher.experience}</p>
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">{teacher.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
