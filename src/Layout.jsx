import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import LogoLight from "@/img/logoErgo00.png";
import LogoDark from "@/img/logoErgo02.png";

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);

  const { language, setLanguage, t } = useLanguage();

  // Atualiza a altura da navbar dinamicamente
  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight);
    };
    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);
    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

  // Detecta o tema salvo ou preferência do sistema
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.classList.toggle("dark", !isDarkMode);
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  // Detecta scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll com offset da navbar
  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - navHeight + 10;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: t("nav.home"), action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { label: t("nav.services"), action: () => scrollToSection("servicos") },
    { label: t("nav.training"), action: () => scrollToSection("treinamentos") },
    { label: t("nav.partners"), action: () => scrollToSection("parceiros") },
    { label: t("nav.contact"), action: () => scrollToSection("contato") },
  ];
  
  // REMOVIDO: const dotColor e patternStyle

  const currentLogo = isDarkMode ? LogoDark : LogoLight;

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* Pattern global: Agora usa classes CSS bg-dots-dark/light */}
      <div 
        aria-hidden 
        className={`fixed inset-0 -z-10 pointer-events-none ${
          isDarkMode ? "bg-dots-dark" : "bg-dots-light"
        }`} 
      />

      {/* === NAVBAR === */}
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 dark:bg-background/90 backdrop-blur-xl shadow-lg border-b border-border"
            : "bg-background/80 dark:bg-background/80 backdrop-blur-md border-b border-border/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="transition-all hover:opacity-80 flex items-center hover:scale-105 duration-300"
            >
              <motion.img
                key={isDarkMode ? "dark" : "light"}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={currentLogo}
                alt="ErgoBio Logo"
                className="h-10 md:h-12 w-auto"
              />
            </button>

            {/* LINKS DESKTOP */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={index}
                  onClick={link.action}
                  className="text-foreground hover:text-secondary font-semibold text-[15px] tracking-wide transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {link.label}
                </motion.button>
              ))}

              {/* BOTÃO DE TEMA */}
              <motion.button
                onClick={toggleTheme}
                className="flex items-center justify-center p-2 rounded-xl bg-muted hover:bg-muted/80 dark:bg-muted/80 dark:hover:bg-muted/60 transition-all"
                whileTap={{ scale: 0.9, rotate: 90 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isDarkMode ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <Sun className="w-5 h-5 text-amber-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                    >
                      <Moon className="w-5 h-5 text-primary" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* IDIOMA */}
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-card border border-secondary/50 text-foreground rounded-xl px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-secondary/50 transition-all"
              >
                <option value="pt-BR">🇧🇷 PT</option>
                <option value="en">🇺🇸 EN</option>
                <option value="es">🇪🇸 ES</option>
              </select>

              {/* PROPOSTA */}
              <Button
                onClick={() => scrollToSection("contato")}
                className="bg-gradient-to-r from-secondary to-contraste text-primary-foreground font-bold shadow-lg hover:shadow-xl transition-all px-6 py-2 rounded-xl"
              >
                {t("nav.proposal")}
              </Button>
            </div>

            {/* BOTÃO MOBILE */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-foreground p-2 bg-card/80 dark:bg-card/70 rounded-xl border border-border"
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* === CONTEÚDO PRINCIPAL === */}
      <main className="transition-all duration-300">
        {children}
      </main>

      {/* === FOOTER === */}
      <footer className="bg-muted dark:bg-background/90 text-foreground py-16 border-t border-border mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-secondary to-contraste bg-clip-text text-transparent">
            ErgoBio
          </h3>
          <p className="text-muted-foreground">
            © 2025 ErgoBio. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
