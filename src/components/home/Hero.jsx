import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";
import heroImage from "../../img/hero.png";

export default function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollDown = () => {
    scrollToSection("servicos");
  };

  const dotColor = "rgba(56,81,112,0.16)";
  const darkDotColor = "rgba(255,255,255,0.08)";
  const patternStyle = {
    backgroundImage: `radial-gradient(${dotColor} 1px, transparent 1px)`,
    backgroundSize: "18px 18px",
    backgroundPosition: "0 0",
  };
  const darkPatternStyle = {
    backgroundImage: `radial-gradient(${darkDotColor} 1px, transparent 1px)`,
    backgroundSize: "18px 18px",
    backgroundPosition: "0 0",
  };

  return (
    <section className="relative min-h-[70vh] pt-1 lg:pt-2 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={patternStyle} />
        <div
          className="absolute inset-0 dark:opacity-100 opacity-0"
          style={darkPatternStyle}
        />
      </div>

      {/* Fundo gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-background/50 to-muted/20 dark:from-background/40 dark:via-background/60 dark:to-secondary/10" />

      {/* Gradient Orbs - Reduzidos */}
      <div className="absolute top-1/4 -left-10 w-48 h-48 bg-gradient-to-r from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/15 rounded-full blur-2xl opacity-40 dark:opacity-30 animate-pulse" />
      <div className="absolute bottom-1/4 -right-10 w-48 h-48 bg-gradient-to-r from-contraste/20 to-primary/20 dark:from-contraste/10 dark:to-primary/10 rounded-full blur-2xl opacity-40 dark:opacity-30 animate-pulse delay-1000" />

      {/* Conteúdo principal - Removido padding vertical extra */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-gray-300 dark:border-gray-600 backdrop-blur-sm"
            >
              <ShieldCheck className="w-3 h-3 text-secondary dark:text-secondary" />
              <span className="text-xs font-medium text-foreground dark:text-foreground/90">
                {t("hero.compliance")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            >
              <span className="text-foreground">{t("hero.title.main", "Soluções em")}</span>{" "}
              <span className="px-2 py-1 rounded-lg bg-secondary text-white dark:bg-contraste dark:text-background border-2 border-gray-800 dark:border-gray-200 shadow-md">
                {t("hero.title.highlight", "Ergonomia")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl leading-relaxed text-foreground/80 dark:text-foreground/90"
            >
              {t("hero.text")}
            </motion.p>

            {/* Benefícios - Mais compacto */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-secondary/20 dark:bg-secondary/30 border border-gray-300 dark:border-gray-600">
                  <CheckCircle className="w-3 h-3 text-secondary dark:text-secondary" />
                </div>
                <span className="text-foreground font-medium dark:text-foreground text-sm">
                  {t("hero.compliance")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-contraste/20 dark:bg-contraste/30 border border-gray-300 dark:border-gray-600">
                  <TrendingUp className="w-3 h-3 text-contraste dark:text-contraste" />
                </div>
                <span className="text-foreground font-medium dark:text-foreground text-sm">
                  {t("hero.productivity", "+ Produtividade")}
                </span>
              </div>
            </motion.div>

            {/* Botões CTA - Mais compactos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("servicos")}
                aria-label={t("hero.services")}
                className="px-6 py-4 text-base group font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl bg-secondary hover:bg-secondary/90 text-primary-foreground dark:bg-secondary/80 dark:hover:bg-secondary/70 border-2 border-gray-800 dark:border-gray-200"
              >
                {t("hero.services")}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contato")}
                aria-label={t("hero.contact")}
                className="px-6 py-4 text-base font-semibold rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border-contraste text-contraste hover:bg-contraste hover:text-white dark:border-contraste/90 dark:text-contraste/90 dark:hover:bg-contraste dark:hover:text-background"
              >
                {t("hero.contact")}
              </Button>
            </motion.div>
          </motion.div>

          {/* Imagem Hero - Reduzida */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-6 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800">
              <img
                src={heroImage}
                alt={t("hero.imageAlt", "Dashboard mostrando soluções ergonômicas")}
                loading="lazy"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-background/10 to-contraste/5 dark:from-background/20 dark:to-contraste/10" />
            </div>

            {/* Floating stats - Reduzidos */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -left-4 top-1/4 backdrop-blur-xl rounded-xl p-3 shadow-lg border border-gray-300 dark:border-gray-600 bg-card/90 dark:bg-card/80"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/20 dark:bg-secondary/30 border border-gray-300 dark:border-gray-600">
                  <TrendingUp className="w-4 h-4 text-secondary dark:text-secondary" />
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground">+</div>
                  <div className="text-xs text-muted-foreground dark:text-muted-foreground/90">
                    {t("hero.productivity", "Produtividade")}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -right-4 bottom-1/4 backdrop-blur-xl rounded-xl p-3 shadow-lg border border-gray-300 dark:border-gray-600 bg-card/90 dark:bg-card/80"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-contraste/20 dark:bg-contraste/30 border border-gray-300 dark:border-gray-600">
                  <ShieldCheck className="w-4 h-4 text-contraste dark:text-contraste" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">NR-17</div>
                  <div className="text-xs text-muted-foreground dark:text-muted-foreground/90">
                    {t("hero.compliance", "Conformidade")}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Versão simplificada com bom contraste */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-10 lg:bottom-12 left-1/2 -translate-x-1/2 cursor-pointer"
            onClick={handleScrollDown}
          >
            <div className="w-5 h-8 rounded-full flex justify-center border-2 border-gray-600 dark:border-gray-400 bg-background/80 dark:bg-background/40 backdrop-blur-sm">
              <motion.div
                className="w-1.5 h-1.5 rounded-full mt-2 bg-gray-600 dark:bg-gray-400"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>   
    </section>
  );
}