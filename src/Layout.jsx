import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

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
    { label: "Início", onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { label: "Serviços", onClick: () => scrollToSection("servicos") },
    { label: "Sobre Nós", onClick: () => scrollToSection("sobre") },
    { label: "Contato", onClick: () => scrollToSection("contato") },
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
            {/* LOGO - Substituído para usar a imagem */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="transition-opacity hover:opacity-80"
            >
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e4284182bd0254fcd95261/439ee4039_logo0521.png"
                alt="ErgoBio Logo"
                className="h-10 md:h-12 w-auto"
              />
            </button>

            {/* LINKS DESKTOP */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={index}
                  onClick={link.onClick}
                  className="text-gray-700 dark:text-gray-200 hover:text-[var(--cor-secundaria)] transition-colors font-medium"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </motion.button>
              ))}

              {/* BOTÃO DE TEMA COM ANIMAÇÃO */}
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

              {/* BOTÃO DE CONTATO */}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  onClick={() => scrollToSection("contato")}
                  className="bg-[var(--cor-secundaria)] hover:bg-[var(--cor-contraste)] text-white font-semibold transition-base"
                >
                  Solicitar Proposta
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
                    onClick={link.onClick}
                    className="block w-full text-left text-gray-700 dark:text-gray-200 hover:text-[var(--cor-secundaria)] transition-colors font-medium py-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.button>
                ))}

                {/* Botão de tema no mobile */}
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 w-full text-left py-2 text-gray-700 dark:text-gray-200 hover:text-[var(--cor-secundaria)]"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  {isDarkMode ? "Modo Claro" : "Modo Escuro"}
                </button>

                <Button
                  onClick={() => scrollToSection("contato")}
                  className="w-full bg-[var(--cor-secundaria)] hover:bg-[var(--cor-contraste)] text-white font-semibold"
                >
                  Solicitar Proposta
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* === CONTEÚDO PRINCIPAL === */}
      <main>{children}</main>

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
            <h4 className="text-xl font-semibold mb-4 text-cyan-400">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📞 (41) 9848-7876</li>
              <li>✉️ tatiana@ergobio.com.br</li>
              <li>📍 Curitiba - PR</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-cyan-400">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Início</button></li>
              <li><button onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}>Serviços</button></li>
              <li><button onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}>Sobre Nós</button></li>
              <li><button onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}>Contato</button></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          © 2025 ErgoBio. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}