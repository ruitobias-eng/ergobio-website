import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Ícones de bandeiras (SVG inline para leveza e controle total)
const flags = {
  "pt-BR": (
    <span role="img" aria-label="Brasil" className="text-xl">
      🇧🇷
    </span>
  ),
  en: (
    <span role="img" aria-label="EUA" className="text-xl">
      🇺🇸
    </span>
  ),
  es: (
    <span role="img" aria-label="Espanha" className="text-xl">
      🇪🇸
    </span>
  ),
};

// Rótulos de idiomas
const labels = {
  "pt-BR": "Português",
  en: "English",
  es: "Español",
};

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Button
            variant="outline"
            className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium bg-card/80 dark:bg-card/70 border border-border text-foreground hover:bg-muted/60 transition-all duration-300"
          >
            {flags[language]}
            <span className="hidden sm:inline">{labels[language]}</span>
          </Button>
        </motion.div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={6}
        className="w-40 bg-card/95 dark:bg-card/90 backdrop-blur-md border border-border rounded-xl shadow-lg"
      >
        {Object.entries(flags).map(([code, flag]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLanguage(code)}
            className={`flex items-center gap-3 px-3 py-2 cursor-pointer rounded-lg text-sm font-medium hover:bg-muted/60 transition-colors ${
              language === code ? "bg-muted/50 dark:bg-muted/40" : ""
            }`}
          >
            {flag}
            <span>{labels[code]}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
