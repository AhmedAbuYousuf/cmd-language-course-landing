import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export const ContactForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We will get back to you shortly.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="contact-name" className="text-sm font-medium">
          {t("form.name")}
        </Label>
        <Input
          id="contact-name"
          required
          value={formData.name}
          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
          placeholder={t("form.name")}
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-email" className="text-sm font-medium">
          {t("form.email")}
        </Label>
        <Input
          id="contact-email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
          placeholder={t("form.email")}
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message" className="text-sm font-medium">
          Message
        </Label>
        <Textarea
          id="contact-message"
          required
          value={formData.message}
          onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
          placeholder="Your message..."
          rows={4}
          className="bg-background resize-none"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
      >
        <Send className="w-4 h-4" />
        Send Message
      </Button>
    </form>
  );
};
