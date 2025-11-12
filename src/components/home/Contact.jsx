import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Send, Clock, MessageCircle, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mjkvwzlo", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t("contact.phone"),
      content: "(41) 9848-7876",
      description: t("contact.phoneDesc"),
      gradientLight: "from-blue-600 to-cyan-600",
      gradientDark: "from-blue-400 to-cyan-400",
    },
    {
      icon: Mail,
      title: t("contact.email"),
      content: "tatiana@ergobio.com.br",
      description: t("contact.emailDesc"),
      gradientLight: "from-green-600 to-emerald-600",
      gradientDark: "from-green-400 to-emerald-400",
    },
    {
      icon: MapPin,
      title: t("contact.location"),
      content: "Curitiba - PR",
      description: t("contact.locationDesc"),
      gradientLight: "from-orange-600 to-amber-600",
      gradientDark: "from-orange-400 to-amber-400",
    },
    {
      icon: Clock,
      title: t("contact.hours"),
      content: t("contact.hoursWeek"),
      description: t("contact.hoursTime"),
      gradientLight: "from-purple-600 to-pink-600",
      gradientDark: "from-purple-400 to-pink-400",
    },
  ];

  return (
    <section id="contato" className="py-24 bg-background transition-colors relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-gray-300 dark:border-gray-600 mb-6"
          >
            <MessageCircle className="w-4 h-4 text-secondary dark:text-secondary" />
            <span className="text-sm font-medium text-foreground">{t("contact.tag")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            <span className="text-foreground">{t("contact.titleMain")} </span>
            <span className="px-3 py-1 rounded-lg bg-secondary text-white dark:bg-contraste dark:text-background border border-gray-800 dark:border-gray-200">
              {t("contact.titleHighlight")}
            </span>
          </motion.h2>

          <p className="text-xl md:text-2xl text-foreground/80 dark:text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="border border-gray-300 dark:border-gray-600 bg-card/60 dark:bg-card/40 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${item.gradientLight} dark:${item.gradientDark} shadow-lg border border-gray-800 dark:border-gray-200`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground mb-1">{item.title}</h3>
                      <p className="text-foreground font-medium text-lg mb-1">{item.content}</p>
                      <p className="text-muted-foreground dark:text-muted-foreground/90 text-sm">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Extra Info */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/10 dark:to-secondary/10 rounded-2xl p-6 border border-gray-300 dark:border-gray-600">
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary dark:text-secondary" />
                {t("contact.why.title")}
              </h4>
              <ul className="space-y-2 text-sm text-foreground/80 dark:text-foreground/90">
                {t("contact.why.list").map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary dark:bg-secondary rounded-full flex-shrink-0 border border-gray-800 dark:border-gray-200" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border border-gray-300 dark:border-gray-600 shadow-2xl dark:shadow-xl bg-card/70 dark:bg-card/50 backdrop-blur-sm overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 border-b border-gray-300 dark:border-gray-600">
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <Send className="w-6 h-6 text-secondary dark:text-secondary" />
                  {t("contact.formTitle")}
                </CardTitle>
                <p className="text-foreground/80 dark:text-foreground/90 mt-2">{t("contact.formSubtitle")}</p>
              </CardHeader>

              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">{t("contact.formName")}</Label>
                    <Input id="name" name="name" required placeholder={t("contact.placeholderName")} />
                  </div>

                  <div>
                    <Label htmlFor="email">{t("contact.formEmail")}</Label>
                    <Input id="email" name="email" type="email" required placeholder={t("contact.placeholderEmail")} />
                  </div>

                  <div>
                    <Label htmlFor="company">{t("contact.formCompany")}</Label>
                    <Input id="company" name="company" placeholder={t("contact.placeholderCompany")} />
                  </div>

                  <div>
                    <Label htmlFor="message">{t("contact.formMessage")}</Label>
                    <Textarea id="message" name="message" rows={5} required placeholder={t("contact.placeholderMessage")} />
                  </div>

                  <Button type="submit" disabled={status === "sending"} className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-secondary to-contraste dark:from-secondary dark:to-contraste hover:opacity-90 transition-all duration-300 disabled:opacity-70 disabled:pointer-events-none">
                    {status === "sending" ? t("contact.sending") : t("contact.send")}
                    <Send className="ml-2 w-5 h-5" />
                  </Button>

                  {status === "success" && (
                    <motion.div className="p-4 bg-green-50 dark:bg-green-900/40 border rounded-xl text-green-700 dark:text-green-300 flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>{t("contact.success")}</span>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div className="p-4 bg-red-50 dark:bg-red-900/40 border rounded-xl text-red-700 dark:text-red-300 flex items-center gap-3">
                      ⚠️ <span>{t("contact.error")}</span>
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
