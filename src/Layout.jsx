import React, { useState, useEffect } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Import das imagens da logo
import LogoLight from "@/img/logoErgo00.png";
import LogoDark from "@/img/logoErgo02.png";

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Pattern pontilhado (adapta para claro/escuro)
  const dotColor = isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(56,81,112,0.16)';
  const patternStyle = {
    backgroundImage: `radial-gradient(${dotColor} 1px, transparent 1px)`,
    backgroundSize: '18px 18px',
    backgroundPosition: '0 0',
  };

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

  // Alternar tema
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.classList.toggle("dark", !isDarkMode);
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  // Detecta scroll para fundo da navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
  { 
    label: t("nav.home"), 
    action: () => window.scrollTo({ top: 0, behavior: "smooth" }) 
  },
  { 
    label: t("nav.services"), 
    action: () => scrollToSection("servicos") 
  },
  { 
    label: t("nav.training"), 
    action: () => scrollToSection("treinamentos") 
  },
  { 
    label: t("nav.partners"), 
    action: () => scrollToSection("parceiros") 
  },
  { 
    label: t("nav.contact"), 
    action: () => scrollToSection("contato") 
  },
];


  // Escolhe a logo baseada no tema
  const currentLogo = isDarkMode ? LogoDark : LogoLight;

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* Pattern global pontilhado */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10 pointer-events-none"
        style={patternStyle}
      />

      {/* === NAVBAR === */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 dark:bg-background/90 backdrop-blur-xl shadow-lg dark:shadow-xl border-b border-border"
            : "bg-background/80 dark:bg-background/80 backdrop-blur-md border-b border-border/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* LOGO COM IMAGEM */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="transition-all hover:opacity-80 flex items-center hover:scale-105 duration-300"
            >
              <motion.img
                key={isDarkMode ? 'dark' : 'light'}
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
                  className="text-foreground hover:text-secondary dark:hover:text-secondary transition-all font-semibold text-[15px] tracking-wide"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </motion.button>
              ))}

              {/* BOTÃO DE TEMA */}
              <motion.button
                onClick={toggleTheme}
                className="relative flex items-center justify-center p-2 rounded-xl bg-muted dark:bg-muted/80 hover:bg-muted/80 dark:hover:bg-muted/60 transition-all duration-300 shadow-sm"
                whileTap={{ scale: 0.85, rotate: 90 }}
                aria-label="Alternar tema"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isDarkMode ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Sun className="w-5 h-5 text-amber-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Moon className="w-5 h-5 text-primary" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* SELETOR DE IDIOMA */}
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-card dark:bg-card/90 border border-secondary/50 dark:border-secondary/40 text-foreground rounded-xl px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-secondary/50 dark:focus:ring-secondary/40 backdrop-blur-sm transition-all duration-300"
                >
                  <option value="pt-BR">🇧🇷 PT</option>
                  <option value="en">🇺🇸 EN</option>
                  <option value="es">🇪🇸 ES</option>
                </select>
              </motion.div>

              {/* BOTÃO DE CONTATO */}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  onClick={() => scrollToSection("contato")}
                  className="bg-gradient-to-r from-secondary to-contraste dark:from-secondary/80 dark:to-contraste/80 hover:from-secondary/90 hover:to-contraste/90 dark:hover:from-secondary/70 dark:hover:to-contraste/70 text-primary-foreground font-bold shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 px-6 py-2 rounded-xl"
                >
                  {t("nav.proposal")}
                </Button>
              </motion.div>
            </div>

            {/* BOTÃO MOBILE */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-foreground p-2 bg-card/80 dark:bg-card/70 rounded-xl backdrop-blur-sm border border-border"
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* MENU MOBILE */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-background/95 dark:bg-background/90 border-t border-border backdrop-blur-xl"
            >
              <div className="px-6 py-6 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={index}
                    onClick={link.action}
                    className="block w-full text-left text-foreground hover:text-secondary dark:hover:text-secondary transition-all font-semibold py-3 text-lg border-b border-border last:border-b-0"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.button>
                ))}

                <div className="flex gap-3 pt-4">
                  {/* Botão de tema no mobile */}
                  <motion.button
                    onClick={toggleTheme}
                    className="flex items-center justify-center gap-2 flex-1 bg-muted dark:bg-muted/80 text-foreground rounded-xl py-3 font-semibold transition-all hover:bg-muted/80 dark:hover:bg-muted/60 border border-border"
                    whileHover={{ scale: 1.02 }}
                  >
                    {isDarkMode ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-primary" />}
                    {isDarkMode ? "Modo Claro" : "Modo Escuro"}
                  </motion.button>

                  {/* Seletor de idioma mobile */}
                  <motion.div className="flex-1" whileHover={{ scale: 1.02 }}>
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="w-full bg-card dark:bg-card/90 border border-secondary/50 dark:border-secondary/40 text-foreground rounded-xl px-3 py-3 text-sm font-semibold"
                    >
                      <option value="pt-BR">🇧🇷 PT</option>
                      <option value="en">🇺🇸 EN</option>
                      <option value="es">🇪🇸 ES</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Button
                    onClick={() => scrollToSection("contato")}
                    className="w-full bg-gradient-to-r from-secondary to-contraste dark:from-secondary/80 dark:to-contraste/80 hover:from-secondary/90 hover:to-contraste/90 dark:hover:from-secondary/70 dark:hover:to-contraste/70 text-primary-foreground font-bold py-3 rounded-xl mt-4 shadow-lg hover:shadow-xl"
                  >
                    {t("nav.proposal")}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* === CONTEÚDO PRINCIPAL === */}
      <main className="pt-20">{children}</main>

      {/* === FOOTER === */}
      <footer 
        className="bg-muted dark:bg-background/90 text-foreground py-16 border-t border-border mt-24"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-secondary to-contraste dark:from-secondary/80 dark:to-contraste/80 bg-clip-text text-transparent">
              ErgoBio
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground dark:text-muted-foreground/90">
              Ergonomia e Saúde Ocupacional para ambientes de trabalho mais humanos, seguros e produtivos.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-foreground dark:text-foreground">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-secondary dark:text-secondary">📞</span>
                <span className="text-foreground dark:text-foreground/90 font-medium">(41) 9848-7876</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary dark:text-secondary">✉️</span>
                <span className="text-foreground dark:text-foreground/90 font-medium">tatiana@ergobio.com.br</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary dark:text-secondary">📍</span>
                <span className="text-foreground dark:text-foreground/90 font-medium">Curitiba - PR</span>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-foreground dark:text-foreground">Links Rápidos</h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={link.action}
                    className="text-foreground/80 dark:text-foreground/80 hover:text-secondary dark:hover:text-secondary transition-all duration-300 hover:translate-x-1 block font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 border-t border-border dark:border-border pt-6 text-center">
          <span className="text-sm text-muted-foreground dark:text-muted-foreground">
            © 2025 ErgoBio. Todos os direitos reservados.
          </span>
        </div>
      </footer>
    </div>
  );
}