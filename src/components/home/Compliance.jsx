import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, TrendingUp, CheckCircle, FileText, Users } from "lucide-react";
import complianceImage from "../../img/compliance.png";
import { useLanguage } from "@/components/LanguageContext";

export default function Compliance() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t("compliance.features.protection.title"),
      desc: t("compliance.features.protection.desc"),
      gradientLight: "from-blue-600 to-cyan-600",
      gradientDark: "from-blue-400 to-cyan-400",
    },
    {
      icon: Award,
      title: t("compliance.features.certification.title"),
      desc: t("compliance.features.certification.desc"),
      gradientLight: "from-green-600 to-emerald-600",
      gradientDark: "from-green-400 to-emerald-400",
    },
    {
      icon: TrendingUp,
      title: t("compliance.features.improvement.title"),
      desc: t("compliance.features.improvement.desc"),
      gradientLight: "from-orange-600 to-amber-600",
      gradientDark: "from-orange-400 to-amber-400",
    },
    {
      icon: Users,
      title: t("compliance.features.safety.title"),
      desc: t("compliance.features.safety.desc"),
      gradientLight: "from-purple-600 to-pink-600",
      gradientDark: "from-purple-400 to-pink-400",
    },
  ];

  // ✅ Garante que complianceItems seja sempre um array
  const complianceItemsRaw = t("compliance.list", { returnObjects: true });
  const complianceItems = Array.isArray(complianceItemsRaw)
    ? complianceItemsRaw
    : typeof complianceItemsRaw === "string"
    ? complianceItemsRaw.split(",").map((item) => item.trim())
    : [];

  return (
    <section id="compliance" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 dark:from-primary/20 dark:via-primary/10 dark:to-secondary/10" />
      <div className="absolute inset-0 opacity-5 dark:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--foreground) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-foreground/5 dark:bg-foreground/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 dark:bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-200 dark:border-gray-700">
              <img
                src={complianceImage}
                alt={t("compliance.imageAlt")}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent dark:from-primary/20 dark:to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-contraste to-orange-600 dark:from-contraste/80 dark:to-orange-500 text-white px-6 py-3 rounded-2xl shadow-2xl font-bold text-lg border border-gray-800 dark:border-gray-200"
            >
              {t("compliance.badge")}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-background/95 dark:bg-background/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-gray-300 dark:border-gray-600"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-1">
                  {t("compliance.stats.percent")}
                </div>
                <div className="text-sm font-semibold text-secondary dark:text-secondary/80">
                  {t("compliance.stats.title")}
                </div>
                <div className="text-xs text-muted-foreground dark:text-muted-foreground/90">
                  {t("compliance.stats.subtitle")}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 dark:bg-foreground/20 backdrop-blur-sm border border-gray-300 dark:border-gray-600"
              >
                <FileText className="w-4 h-4 text-foreground dark:text-foreground/80" />
                <span className="text-sm font-medium text-foreground dark:text-foreground/90">
                  {t("compliance.headerTag")}
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground"
              >
                {t("compliance.title")}
              </motion.h2>

              <p className="text-lg text-foreground/80 dark:text-foreground/90 leading-relaxed">
                {t("compliance.description")}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${item.gradientLight} dark:${item.gradientDark} text-white shadow-lg border border-gray-800 dark:border-gray-200`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground/90">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary" />
                {t("compliance.listTitle")}
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {complianceItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-foreground/90 dark:text-foreground"
                  >
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
