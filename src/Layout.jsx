import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { useTheme } from "@/components/ThemeContext"; // ← Importe o useTheme
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "@/components/MobileMenu";

import LogoLight from "@/img/logoErgo00.png";
import LogoDark from "@/img/logoErgo02.png";

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);

  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme(); // ← Use o ThemeContext

  // Atualiza a altura da navbar dinamicamente
  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight);
    };
    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);
    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

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
    { label: t("nav.about"), action: () => scrollToSection("sobre") },
    { label: t("nav.contact"), action: () => scrollToSection("contato") },
  ];

  // Determina qual logo usar baseado no tema atual
  const getCurrentLogo = () => {
    const currentTheme = theme === 'system' 
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : theme;
    
    return currentTheme === 'dark' ? LogoDark : LogoLight;
  };

  const currentLogo = getCurrentLogo();

  // Função para obter o ícone do tema atual
  const getThemeIcon = () => {
    switch (theme) {
      case 'dark':
        return <Moon className="w-5 h-5 text-blue-400" />;
      case 'light':
        return <Sun className="w-5 h-5 text-amber-500" />;
      default:
        return <Monitor className="w-5 h-5 text-green-500" />;
    }
  };

  // Função para ciclar entre temas
  const cycleTheme = () => {
    const themes = ['system', 'light', 'dark'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  // Determina se está no modo escuro para o pattern background
  const isDarkMode = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* Pattern global */}
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
                key={theme} // Muda a key quando o tema muda para forçar animação
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={currentLogo}
                alt="ErgoBio Logo"
                className="h-10 md:h-12 w-auto"
              />
            </button>

            {/* LINKS DESKTOP */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link, index) => (
                <motion.button
                  key={index}
                  onClick={link.action}
                  className="text-foreground hover:text-secondary font-medium text-sm tracking-wide transition-all px-3 py-2 rounded-lg hover:bg-muted/50"
                  whileHover={{ scale: 1.05, y: -1 }}
                >
                  {link.label}
                </motion.button>
              ))}

              {/* BOTÃO DE TEMA - Agora cicla entre system/light/dark */}
              <motion.button
                onClick={cycleTheme}
                className="flex items-center justify-center p-2 rounded-xl bg-muted hover:bg-muted/80 dark:bg-muted/80 dark:hover:bg-muted/60 transition-all"
                whileTap={{ scale: 0.9 }}
                title={`Tema: ${theme === 'system' ? 'Sistema' : theme === 'light' ? 'Claro' : 'Escuro'}`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.2, opacity: 0 }}
                  >
                    {getThemeIcon()}
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              {/* IDIOMA */}
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-card border border-border text-foreground rounded-xl px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-secondary/50 transition-all"
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
              onClick={() => {
                console.log("🍔 Hamburger clicado! Estado:", isMobileMenuOpen);
                console.log("📱 Largura da tela:", window.innerWidth);
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="md:hidden text-foreground p-3 rounded-xl border border-border bg-background hover:bg-muted transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU - Atualize para receber theme e setTheme */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        theme={theme}
        setTheme={setTheme}
        language={language}
        setLanguage={setLanguage}
      />

      {/* === CONTEÚDO PRINCIPAL === */}
      <main className="transition-all duration-300 pt-20">
        {children}
      </main>

      {/* === FOOTER === */}
      <footer className="bg-muted dark:bg-background/90 text-foreground py-16 border-t border-border mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-secondary to-contraste bg-clip-text text-transparent">
            {t("footer.companyName")}
          </h3>
          <p className="text-muted-foreground">
            {t("footer.copyright")}
          </p>
        </div>
      </footer>
    </div>
  );
}