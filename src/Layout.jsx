import React, { useState, useEffect } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* === NAVBAR === */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-[#0a0a0a]/80 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="transition-opacity hover:opacity-80"
            >
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e4284182bd0254fcd95261/22c42c785_logo_ok.jpeg"
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
                  className="text-gray-700 dark:text-gray-200 hover:text-cyan-400 transition-colors font-medium"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </motion.button>
              ))}

              {/* BOTÃO DE TEMA */}
              <motion.button
                onClick={toggleTheme}
                className="relative flex items-center justify-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
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
                      <Moon className="w-5 h-5 text-gray-700" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* SELETOR DE IDIOMA */}
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent border border-cyan-400 text-gray-700 dark:text-white rounded-md px-2 py-1 text-sm focus:outline-none"
              >
                <option value="pt-BR">🇧🇷 PT</option>
                <option value="en">🇺🇸 EN</option>
                <option value="es">🇪🇸 ES</option>
              </select>

              {/* BOTÃO DE CONTATO */}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  onClick={() => scrollToSection("contato")}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold"
                >
                  {t("nav.proposal")}
                </Button>
              </motion.div>
            </div>

            {/* BOTÃO MOBILE */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-700 dark:text-gray-200 p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
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
              className="md:hidden bg-white/95 dark:bg-[#0a0a0a] border-t border-gray-300 dark:border-gray-800"
            >
              <div className="px-6 py-4 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={index}
                    onClick={link.action}
                    className="block w-full text-left text-gray-700 dark:text-gray-200 hover:text-cyan-400 transition-colors font-medium py-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.button>
                ))}

                {/* Botão de tema no mobile */}
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 w-full text-left py-2 text-gray-700 dark:text-gray-200 hover:text-cyan-400"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  {isDarkMode ? t("theme.light") : t("theme.dark")}
                </button>

                {/* Seletor de idioma mobile */}
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full bg-transparent border border-cyan-400 text-gray-700 dark:text-white rounded-md px-2 py-1 text-sm"
                >
                  <option value="pt-BR">🇧🇷 Português</option>
                  <option value="en">🇺🇸 English</option>
                  <option value="es">🇪🇸 Español</option>
                </select>

                <Button
                  onClick={() => scrollToSection("contato")}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold"
                >
                  {t("nav.proposal")}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* === CONTEÚDO PRINCIPAL === */}
      <main className="pt-20">{children}</main>

      {/* === FOOTER === */}
      <footer className="bg-gray-900 text-white py-16 border-t border-gray-800 mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-3 text-cyan-400">ErgoBio</h3>
            <p className="text-gray-400">
              Ergonomia e Saúde Ocupacional para ambientes de trabalho mais humanos, seguros e produtivos.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-cyan-400">{t("nav.contact")}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📞 (41) 9848-7876</li>
              <li>✉️ tatiana@ergobio.com.br</li>
              <li>📍 Curitiba - PR</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-cyan-400">{t("footer.links")}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-cyan-400 transition-colors">{t("nav.home")}</button></li>
              <li><button onClick={() => scrollToSection("servicos")} className="hover:text-cyan-400 transition-colors">{t("nav.services")}</button></li>
              <li><button onClick={() => scrollToSection("sobre")} className="hover:text-cyan-400 transition-colors">{t("nav.about")}</button></li>
              <li><button onClick={() => scrollToSection("contato")} className="hover:text-cyan-400 transition-colors">{t("nav.contact")}</button></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          © 2025 ErgoBio. {t("footer.rights")}
        </div>
      </footer>
    </div>
  );
}