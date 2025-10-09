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
      label: t("nav.trainings"), // Adicionado link para Treinamentos
      action: () => scrollToSection("treinamentos") 
    },
    { 
      label: t("nav.contact"), 
      action: () => scrollToSection("contato") 
    },
  ];

  // Escolhe a logo baseada no tema
  // Nota: A troca de logo já é feita pelo React/state, mas a animação de opacidade ajuda na transição visual.
  const currentLogo = isDarkMode ? LogoDark : LogoLight;

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* === NAVBAR === */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 dark:bg-background/90 backdrop-blur-xl shadow-lg dark:shadow-xl border-b border-border"
            : "bg-transparent"
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
                key={isDarkMode ? 'dark' : 'light'} // Key para forçar a animação
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
                  // Contraste ajustado para full foreground
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
                  // Ajustado contraste e foco do seletor
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
                  // CORREÇÃO CRÍTICA: Substituído 'accent' por 'contraste'
                  className="bg-gradient-to-r from-secondary to-contraste dark:from-secondary/80 dark:to-contraste/80 hover:from-secondary/90 hover:to-contraste/90 dark:hover:from-secondary/70 dark:hover:to-contraste/70 text-primary-foreground font-bold shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 px-6 py-2 rounded-xl"
                >
                  {t("nav.proposal")}
                </Button>
              </motion.div>
            </div>

            {/* BOTÃO MOBILE */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              // Contraste ajustado
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
                    // Contraste ajustado para full foreground
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
                      // Contraste ajustado no mobile
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
                    // CORREÇÃO CRÍTICA: Substituído 'accent' por 'contraste'
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
        // CORREÇÃO: Usando primary/background para um footer com contraste consistente e cores ajustadas
        className="bg-primary dark:bg-background/90 text-primary-foreground py-16 border-t border-border mt-24"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-12">
          <div>
            {/* CORREÇÃO: Gradiente de texto usando contraste em vez de accent */}
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-secondary to-contraste dark:from-secondary/80 dark:to-contraste/80 bg-clip-text text-transparent">
              ErgoBio
            </h3>
            {/* CORREÇÃO: Cor do texto ajustada para primary-foreground para legibilidade */}
            <p className="text-primary-foreground dark:text-foreground/90 text-lg leading-relaxed">
              Ergonomia e Saúde Ocupacional para ambientes de trabalho mais humanos, seguros e produtivos.
            </p>
          </div>

          <div>
            {/* CORREÇÃO: Título usando contraste para ser vibrante e ter contraste no footer escuro */}
            <h4 className="text-xl font-bold mb-6 text-contraste dark:text-contraste/80">{t("nav.contact")}</h4>
            <ul className="space-y-3 text-primary-foreground dark:text-foreground/90">
              <li className="flex items-center gap-3 font-medium">
                <span className="text-secondary dark:text-contraste">📞</span> (41) 9848-7876
              </li>
              <li className="flex items-center gap-3 font-medium">
                <span className="text-secondary dark:text-contraste">✉️</span> tatiana@ergobio.com.br
              </li>
              <li className="flex items-center gap-3 font-medium">
                <span className="text-secondary dark:text-contraste">📍</span> Curitiba - PR
              </li>
            </ul>
          </div>

          <div>
            {/* CORREÇÃO: Título usando contraste */}
            <h4 className="text-xl font-bold mb-6 text-contraste dark:text-contraste/80">Links Rápidos</h4>
            <ul className="space-y-3 text-primary-foreground dark:text-foreground/90">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={link.action}
                    // Hover ajustado para contraste
                    className="font-medium hover:text-secondary dark:hover:text-secondary transition-all duration-300 hover:translate-x-1 block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 dark:border-foreground/30 pt-6 text-center text-primary-foreground/70 dark:text-foreground/80 text-sm">
          © 2025 ErgoBio. {t("footer.rights")}
        </div>
      </footer>
    </div>
  );
}