import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/img/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay suave */}
      <div className="absolute inset-0 bg-[rgba(20,45,76,0.6)]" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Transformando Ambientes de Trabalho para <br />
            <span className="text-[var(--cor-secundaria)]">
              Saúde, Produtividade e Conformidade Legal
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Soluções especializadas em Ergonomia e Saúde Ocupacional para
            empresas que buscam excelência no cuidado com seus colaboradores.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection("servicos")}
              className="px-8 py-6 text-lg font-semibold"
              style={{
                backgroundColor: "var(--cor-secundaria)",
                color: "var(--cor-primaria)",
              }}
            >
              Conheça Nossos Serviços
              <ArrowRight className="ml-2" />
            </Button>

            <Button
              size="lg"
              onClick={() => scrollToSection("contato")}
              className="px-8 py-6 text-lg font-semibold text-white"
              style={{ backgroundColor: "var(--cor-contraste)" }}
            >
              Fale Conosco
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div
          className="w-6 h-10 rounded-full border-2 flex justify-center"
          style={{ borderColor: "var(--cor-secundaria)" }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 rounded-full mt-2"
            style={{ backgroundColor: "var(--cor-secundaria)" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
