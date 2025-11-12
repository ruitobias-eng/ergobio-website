import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";
import { Users2, Target, Eye, HeartHandshake } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="py-24 bg-background transition-colors duration-500 relative overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Cabeçalho */}
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-secondary/20 dark:border-secondary/30 mb-6"
          >
            <Users2 className="w-4 h-4 text-secondary dark:text-secondary" />
            <span className="text-sm font-medium text-foreground dark:text-foreground/90">
              {t("about.tag")}
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
            {t("about.title")}
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 dark:text-foreground/90 max-w-4xl mx-auto leading-relaxed">
            {t("about.text")}
          </p>
        </motion.div>

        {/* Cards de Missão, Visão e Valores */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card/70 dark:bg-card/50 border border-border backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Target className="w-10 h-10 text-secondary dark:text-secondary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {t("about.mission")}
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-card/70 dark:bg-card/50 border border-border backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Eye className="w-10 h-10 text-secondary dark:text-secondary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {t("about.vision")}
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card/70 dark:bg-card/50 border border-border backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <HeartHandshake className="w-10 h-10 text-secondary dark:text-secondary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {t("about.values")}
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
