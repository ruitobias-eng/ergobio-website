import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sun, Moon, X, Monitor } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function MobileMenu({ 
  isOpen, 
  onClose, 
  navLinks, 
  theme, 
  setTheme, 
  language, 
  setLanguage 
}) {
  const { t } = useLanguage();

  // Função para ciclar entre temas
  const cycleTheme = () => {
    const themes = ['system', 'light', 'dark'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  // Função para obter o ícone do tema atual
  const getThemeIcon = () => {
    switch (theme) {
      case 'dark':
        return <Moon className="w-4 h-4 text-blue-400" />;
      case 'light':
        return <Sun className="w-4 h-4 text-amber-500" />;
      default:
        return <Monitor className="w-4 h-4 text-green-500" />;
    }
  };

  // Função para obter o texto do tema atual - CORRIGIDO
  const getThemeText = () => {
    switch (theme) {
      case 'dark':
        return t("nav.themeDark") || "Escuro";
      case 'light':
        return t("nav.themeLight") || "Claro";
      default:
        return t("nav.themeSystem") || "Sistema";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
          />
          
          {/* Menu com rolagem corrigida */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-background border-l border-border shadow-2xl z-50 md:hidden flex flex-col overflow-hidden"
          >
            {/* Header fixo */}
            <div className="flex-shrink-0 flex items-center justify-between p-6 border-b border-border">
              <span className="text-lg font-bold text-foreground">
                {t("nav.menu") || "Menu"}
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-10 w-10"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Menu Items com scroll */}
            <div className="flex-1 overflow-y-auto">
              <nav className="p-6 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      link.action();
                      onClose();
                    }}
                    className="w-full text-left px-4 py-3 text-lg font-medium text-foreground hover:bg-muted rounded-xl transition-all duration-200 border border-transparent hover:border-border"
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
            </div>

            {/* Controls fixo na parte inferior */}
            <div className="flex-shrink-0 p-6 border-t border-border space-y-4 bg-background">
              {/* Theme Toggle - CORRIGIDO */}
              <div className="flex items-center justify-between p-3 bg-muted rounded-xl">
                <span className="text-sm font-medium text-foreground">
                  {t("nav.theme") || "Tema"}: {getThemeText()}
                </span>
                <motion.button
                  onClick={cycleTheme}
                  className="flex items-center justify-center p-2 rounded-lg bg-background hover:bg-muted transition-all"
                  whileTap={{ scale: 0.9 }}
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
              </div>

              {/* Language Selector - CORRIGIDO */}
              <div className="flex items-center justify-between p-3 bg-muted rounded-xl">
                <span className="text-sm font-medium text-foreground">
                  {t("nav.language") || "Idioma"}
                </span>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-background border border-border text-foreground rounded-lg px-2 py-1 text-sm font-medium focus:ring-2 focus:ring-secondary/50 transition-all"
                >
                  <option value="pt-BR">🇧🇷 PT</option>
                  <option value="en">🇺🇸 EN</option>
                  <option value="es">🇪🇸 ES</option>
                </select>
              </div>

              {/* CTA Button - CORRIGIDO */}
              <Button
                onClick={() => {
                  const contactId = language === 'pt-BR' ? 'contato' : 
                                  language === 'en' ? 'contact' : 'contacto';
                  const element = document.getElementById(contactId);
                  if (element) {
                    const navHeight = document.querySelector('nav')?.offsetHeight || 0;
                    const offsetTop = element.getBoundingClientRect().top + window.scrollY - navHeight + 10;
                    window.scrollTo({ top: offsetTop, behavior: "smooth" });
                    onClose();
                  }
                }}
                className="w-full bg-gradient-to-r from-secondary to-contraste text-primary-foreground font-bold shadow-lg hover:shadow-xl transition-all py-3 rounded-xl"
                size="lg"
              >
                {t("nav.proposal") || "Solicitar Proposta"}
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}