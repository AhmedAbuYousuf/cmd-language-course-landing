import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTranslation } from "react-i18next";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Building2, Smartphone } from "lucide-react";

interface RegistrationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const RegistrationForm = ({ open, onOpenChange }: RegistrationFormProps) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState<"card" | "banking" | "mobileBanking">("card");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    bankName: "",
    accountNumber: "",
    mobileProvider: "",
    mobileNumber: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted!",
      description: "We will contact you shortly with the next steps.",
    });
    onOpenChange(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      education: "",
      experience: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
      bankName: "",
      accountNumber: "",
      mobileProvider: "",
      mobileNumber: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t("form.title")}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t("form.name")}</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder={t("form.name")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t("form.email")}</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder={t("form.email")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">{t("form.phone")}</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder={t("form.phone")}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="education">{t("form.education")}</Label>
                <Input
                  id="education"
                  required
                  value={formData.education}
                  onChange={(e) => handleChange("education", e.target.value)}
                  placeholder={t("form.education")}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">{t("form.experience")}</Label>
                <Input
                  id="experience"
                  required
                  value={formData.experience}
                  onChange={(e) => handleChange("experience", e.target.value)}
                  placeholder={t("form.experience")}
                />
              </div>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="space-y-4 pt-4 border-t border-border">
            <Label>{t("form.payment")}</Label>
            <RadioGroup value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as "card" | "banking" | "mobileBanking")}>
              <div className="flex items-center space-x-2 p-4 rounded-lg border-2 border-border hover:border-primary transition-colors cursor-pointer">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                  <CreditCard className="w-5 h-5 text-primary" />
                  {t("form.card")}
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-4 rounded-lg border-2 border-border hover:border-primary transition-colors cursor-pointer">
                <RadioGroupItem value="banking" id="banking" />
                <Label htmlFor="banking" className="flex items-center gap-2 cursor-pointer flex-1">
                  <Building2 className="w-5 h-5 text-primary" />
                  {t("form.banking")}
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-4 rounded-lg border-2 border-border hover:border-primary transition-colors cursor-pointer">
                <RadioGroupItem value="mobileBanking" id="mobileBanking" />
                <Label htmlFor="mobileBanking" className="flex items-center gap-2 cursor-pointer flex-1">
                  <Smartphone className="w-5 h-5 text-accent" />
                  {t("form.mobileBanking")}
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Payment Details */}
          {paymentMethod === "card" && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right duration-300">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">{t("form.cardNumber")}</Label>
                <Input
                  id="cardNumber"
                  required
                  value={formData.cardNumber}
                  onChange={(e) => handleChange("cardNumber", e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">{t("form.expiry")}</Label>
                  <Input
                    id="expiry"
                    required
                    value={formData.expiry}
                    onChange={(e) => handleChange("expiry", e.target.value)}
                    placeholder="MM/YY"
                    maxLength={5}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">{t("form.cvv")}</Label>
                  <Input
                    id="cvv"
                    required
                    value={formData.cvv}
                    onChange={(e) => handleChange("cvv", e.target.value)}
                    placeholder="123"
                    maxLength={3}
                  />
                </div>
              </div>
            </div>
          )}
          
          {paymentMethod === "banking" && (
            <div className="space-y-4 animate-in fade-in slide-in-from-left duration-300">
              <div className="space-y-2">
                <Label htmlFor="bankName">{t("form.bankName")}</Label>
                <Input
                  id="bankName"
                  required
                  value={formData.bankName}
                  onChange={(e) => handleChange("bankName", e.target.value)}
                  placeholder={t("form.bankName")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="accountNumber">{t("form.accountNumber")}</Label>
                <Input
                  id="accountNumber"
                  required
                  value={formData.accountNumber}
                  onChange={(e) => handleChange("accountNumber", e.target.value)}
                  placeholder={t("form.accountNumber")}
                />
              </div>
            </div>
          )}

          {paymentMethod === "mobileBanking" && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom duration-300">
              <div className="space-y-2">
                <Label htmlFor="mobileProvider">{t("form.mobileProvider")}</Label>
                <Input
                  id="mobileProvider"
                  required
                  value={formData.mobileProvider}
                  onChange={(e) => handleChange("mobileProvider", e.target.value)}
                  placeholder="bKash, Nagad, Rocket, etc."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobileNumber">{t("form.mobileNumber")}</Label>
                <Input
                  id="mobileNumber"
                  type="tel"
                  required
                  value={formData.mobileNumber}
                  onChange={(e) => handleChange("mobileNumber", e.target.value)}
                  placeholder="01XXXXXXXXX"
                />
              </div>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-lg py-6"
          >
            {t("form.submit")}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
