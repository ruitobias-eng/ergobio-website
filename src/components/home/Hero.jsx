import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from '../../img/hero.png';

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Pattern pontilhado adaptativo
  const dotColor = 'rgba(56,81,112,0.16)';
  const darkDotColor = 'rgba(255,255,255,0.08)';
  const patternStyle = {
    backgroundImage: `radial-gradient(${dotColor} 1px, transparent 1px)`,
    backgroundSize: '18px 18px',
    backgroundPosition: '0 0',
  };
  const darkPatternStyle = {
    backgroundImage: `radial-gradient(${darkDotColor} 1px, transparent 1px)`,
    backgroundSize: '18px 18px',
    backgroundPosition: '0 0',
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern - pontilhado adaptativo (PRIMEIRO - base) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Pattern para modo claro */}
        <div 
          className="absolute inset-0"
          style={patternStyle}
        />
        {/* Pattern para modo escuro */}
        <div 
          className="absolute inset-0 dark:opacity-100 opacity-0"
          style={darkPatternStyle}
        />
      </div>

      {/* Fundo gradiente adaptativo (SEGUNDO - sobre o pattern) */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-background/50 to-muted/20 dark:from-background/40 dark:via-background/60 dark:to-secondary/10" />

      {/* Gradient Orbs (TERCEIRO - sobre tudo) */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-gradient-to-r from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/15 rounded-full blur-3xl opacity-40 dark:opacity-30 animate-pulse" />
      <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-gradient-to-r from-contraste/20 to-primary/20 dark:from-contraste/10 dark:to-primary/10 rounded-full blur-3xl opacity-40 dark:opacity-30 animate-pulse delay-1000" />

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-gray-300 dark:border-gray-600 backdrop-blur-sm"
            >
              <ShieldCheck className="w-4 h-4 text-secondary dark:text-secondary" />
              <span className="text-sm font-medium text-foreground dark:text-foreground/90">
                Especialistas em Ergonomia
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-foreground">Soluções em</span>{' '}
              <span className="px-3 py-1 rounded-lg bg-secondary text-white dark:bg-contraste dark:text-background border border-gray-800 dark:border-gray-200">
                Ergonomia
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl leading-relaxed text-foreground/80 dark:text-foreground/90"
            >
              Soluções especializadas em <strong>Ergonomia</strong> e <strong>Saúde Ocupacional</strong> para empresas que buscam excelência no cuidado com seus colaboradores
            </motion.p>

            {/* Benefícios */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary/20 dark:bg-secondary/30 border border-gray-300 dark:border-gray-600">
                  <CheckCircle className="w-4 h-4 text-secondary dark:text-secondary" />
                </div>
                <span className="text-foreground font-medium dark:text-foreground">Conformidade Legal</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-contraste/20 dark:bg-contraste/30 border border-gray-300 dark:border-gray-600">
                  <TrendingUp className="w-4 h-4 text-contraste dark:text-contraste" />
                </div>
                <span className="text-foreground font-medium dark:text-foreground">+30% Produtividade</span>
              </div>
            </motion.div>

            {/* Botões CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('servicos')}
                aria-label="Conheça nossos serviços"
                className="px-8 py-6 text-lg group font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl bg-secondary hover:bg-secondary/90 text-primary-foreground dark:bg-secondary/80 dark:hover:bg-secondary/70 border border-gray-800 dark:border-gray-200"
              >
                Conheça Nossos Serviços
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contato')}
                aria-label="Fale conosco"
                className="px-8 py-6 text-lg font-semibold rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg 
                  border-contraste text-contraste border-gray-800 dark:border-gray-200
                  hover:bg-contraste hover:text-white 
                  dark:border-contraste/90 dark:text-contraste/90 dark:hover:bg-contraste dark:hover:text-background"
              >
                Fale Conosco
              </Button>
            </motion.div>
          </motion.div>

          {/* Imagem Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-200 dark:border-gray-700">
              <img
                src={heroImage}
                alt="Dashboard mostrando soluções ergonômicas"
                loading="lazy"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-background/10 to-contraste/5 dark:from-background/20 dark:to-contraste/10" />
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -left-6 top-1/4 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-gray-300 dark:border-gray-600 bg-card/80 dark:bg-card/90"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/20 dark:bg-secondary/30 border border-gray-300 dark:border-gray-600">
                  <TrendingUp className="w-5 h-5 text-secondary dark:text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">30%</div>
                  <div className="text-sm text-muted-foreground dark:text-muted-foreground/90">Produtividade</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -right-6 bottom-1/4 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-gray-300 dark:border-gray-600 bg-card/80 dark:bg-card/90"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-contraste/20 dark:bg-contraste/30 border border-gray-300 dark:border-gray-600">
                  <ShieldCheck className="w-5 h-5 text-contraste dark:text-contraste" />
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground">NR-17</div>
                  <div className="text-sm text-muted-foreground dark:text-muted-foreground/90">Conformidade</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de rolagem */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('servicos')}
      >
        <div className="w-6 h-10 rounded-full flex justify-center border-2 backdrop-blur-sm border-gray-800 dark:border-gray-200">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full mt-2 bg-gray-800 dark:bg-gray-200"
          />
        </div>
      </motion.div>
    </section>
  );
}