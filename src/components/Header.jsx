import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const menuItems = [
    { id: "inicio", label: t("header.home", "Início") },
    { id: "servicos", label: t("header.services", "Serviços") },
    { id: "treinamentos", label: t("header.training", "Treinamentos") },
    { id: "sobre", label: t("header.about", "Sobre") },
    { id: "parceiros", label: t("header.partners", "Parceiros") },
    { id: "contato", label: t("header.contact", "Contato") },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <img 
              src="/src/img/logo_ok.png" 
              alt="Ergobio" 
              className="h-8 w-auto"
            />
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Language Switcher - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-secondary hover:bg-secondary/90 text-white"
            >
              {t("header.contact", "Contato")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <LanguageSwitcher />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-gray-200 dark:border-gray-700">
                    <img 
                      src="/src/img/logo_ok.png" 
                      alt="Ergobio" 
                      className="h-8 w-auto"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>

                  {/* Menu Items */}
                  <nav className="flex-1 py-6">
                    <div className="space-y-4">
                      {menuItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className="w-full text-left px-4 py-3 text-lg font-medium text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </nav>

                  {/* Footer */}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <Button
                      onClick={() => scrollToSection("contato")}
                      className="w-full bg-secondary hover:bg-secondary/90 text-white py-3"
                    >
                      {t("header.contact", "Solicitar Proposta")}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}