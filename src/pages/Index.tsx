import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Teachers } from "@/components/Teachers";
import { WhySection } from "@/components/WhySection";
import { RegistrationForm } from "@/components/RegistrationForm";
import { Footer } from "@/components/Footer";
import "@/i18n/config";

const Index = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onRegisterClick={() => setIsRegistrationOpen(true)} />
      <main>
        <Hero onRegisterClick={() => setIsRegistrationOpen(true)} />
        <Features />
        <Teachers />
        <WhySection />
      </main>
      <Footer onRegisterClick={() => setIsRegistrationOpen(true)} />
      <RegistrationForm
        open={isRegistrationOpen}
        onOpenChange={setIsRegistrationOpen}
      />
    </div>
  );
};

export default Index;
