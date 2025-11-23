import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export const Gallery = () => {
  const { t } = useTranslation();

  // Placeholder images - these can be replaced with actual images
  const galleryItems = [
    {
      title: t("gallery.item1"),
      description: t("gallery.description1"),
      image: "/placeholder.svg",
    },
    {
      title: t("gallery.item2"),
      description: t("gallery.description2"),
      image: "/placeholder.svg",
    },
    {
      title: t("gallery.item3"),
      description: t("gallery.description3"),
      image: "/placeholder.svg",
    },
    {
      title: t("gallery.item4"),
      description: t("gallery.description4"),
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t("gallery.title")}
        </h2>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryItems.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-0">
                        <div className="aspect-[4/3] bg-muted relative overflow-hidden group">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-4 text-white">
                              <h3 className="font-bold text-lg">{item.title}</h3>
                              <p className="text-sm text-white/80">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          {t("gallery.swipeHint")}
        </p>
      </div>
    </section>
  );
};
