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
      label: t("nav.about"), 
      action: () => scrollToSection("sobre") 
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
      {/* === NAVBAR === */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-800/50"
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
              <img
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
                  className="text-gray-800 dark:text-gray-100 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all font-semibold text-[15px] tracking-wide"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </motion.button>
              ))}

              {/* BOTÃO DE TEMA */}
              <motion.button
                onClick={toggleTheme}
                className="relative flex items-center justify-center p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm"
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
                      <Sun className="w-5 h-5 text-yellow-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Moon className="w-5 h-5 text-indigo-600" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* SELETOR DE IDIOMA */}
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-white/80 dark:bg-gray-800/80 border border-cyan-400/50 text-gray-800 dark:text-white rounded-xl px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400/30 backdrop-blur-sm transition-all duration-300"
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
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-2 rounded-xl"
                >
                  {t("nav.proposal")}
                </Button>
              </motion.div>
            </div>

            {/* BOTÃO MOBILE */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-800 dark:text-gray-200 p-2 bg-white/80 dark:bg-gray-800/80 rounded-xl backdrop-blur-sm"
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
              className="md:hidden bg-white/95 dark:bg-[#0a0a0a]/95 border-t border-gray-200/50 dark:border-gray-800/50 backdrop-blur-xl"
            >
              <div className="px-6 py-6 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={index}
                    onClick={link.action}
                    className="block w-full text-left text-gray-800 dark:text-gray-100 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all font-semibold py-3 text-lg border-b border-gray-100 dark:border-gray-800 last:border-b-0"
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
                    className="flex items-center justify-center gap-2 flex-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl py-3 font-semibold transition-all hover:bg-gray-200 dark:hover:bg-gray-700"
                    whileHover={{ scale: 1.02 }}
                  >
                    {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    {isDarkMode ? "Modo Claro" : "Modo Escuro"}
                  </motion.button>

                  {/* Seletor de idioma mobile */}
                  <motion.div className="flex-1" whileHover={{ scale: 1.02 }}>
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="w-full bg-gray-100 dark:bg-gray-800 border border-cyan-400/50 text-gray-800 dark:text-white rounded-xl px-3 py-3 text-sm font-semibold"
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
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 rounded-xl mt-4 shadow-lg"
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
      <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16 border-t border-gray-800 mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              ErgoBio
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Ergonomia e Saúde Ocupacional para ambientes de trabalho mais humanos, seguros e produtivos.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-cyan-400">{t("nav.contact")}</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3 font-medium">
                <span className="text-cyan-400">📞</span> (41) 9848-7876
              </li>
              <li className="flex items-center gap-3 font-medium">
                <span className="text-cyan-400">✉️</span> tatiana@ergobio.com.br
              </li>
              <li className="flex items-center gap-3 font-medium">
                <span className="text-cyan-400">📍</span> Curitiba - PR
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-cyan-400">Links Rápidos</h4>
            <ul className="space-y-3 text-gray-400">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={link.action}
                    className="font-medium hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          © 2025 ErgoBio. {t("footer.rights")}
        </div>
      </footer>
    </div>
  );
}