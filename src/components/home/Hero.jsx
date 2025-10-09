import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from '../../img/hero.png';

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient Adaptativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/50 dark:from-primary/5 dark:via-background dark:to-secondary/10" />
      
      {/* Background Pattern Modern */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-10 dark:opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, var(--cor-secundaria) 2px, transparent 0),
              radial-gradient(circle at 75% 75%, var(--cor-contraste) 1px, transparent 0)
            `,
            backgroundSize: '60px 60px, 40px 40px'
          }}
        />
      </div>

      {/* Gradient Orbs Adaptativos */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-gradient-to-r from-primary/30 to-secondary/30 dark:from-primary/10 dark:to-secondary/20 rounded-full blur-3xl opacity-40 dark:opacity-30 animate-pulse" />
      <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-gradient-to-r from-contraste/30 to-primary/30 dark:from-contraste/15 dark:to-primary/10 rounded-full blur-3xl opacity-40 dark:opacity-30 animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-secondary/20 dark:border-secondary/30 backdrop-blur-sm"
            >
              <ShieldCheck className="w-4 h-4 text-secondary dark:text-secondary/90" />
              <span className="text-sm font-medium text-foreground/80 dark:text-foreground/90">
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
              <span className="bg-gradient-to-r from-secondary to-contraste dark:from-secondary/90 dark:to-contraste/90 bg-clip-text text-transparent">
                Ergonomia
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl leading-relaxed text-muted-foreground dark:text-muted-foreground/90"
            >
              Soluções especializadas em Ergonomia e Saúde Ocupacional para empresas que buscam excelência no cuidado com seus colaboradores
            </motion.p>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary/20 dark:bg-secondary/30">
                  <CheckCircle className="w-4 h-4 text-secondary dark:text-secondary/80" />
                </div>
                <span className="text-foreground font-medium dark:text-foreground/90">Conformidade Legal</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-contraste/20 dark:bg-contraste/30">
                  <TrendingUp className="w-4 h-4 text-contraste dark:text-contraste/80" />
                </div>
                <span className="text-foreground font-medium dark:text-foreground/90">+30% Produtividade</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('servicos')}
                className="px-8 py-6 text-lg group font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl bg-secondary hover:bg-secondary/90 text-primary-foreground dark:bg-secondary/80 dark:hover:bg-secondary/70"
              >
                Conheça Nossos Serviços
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contato')}
                className="px-8 py-6 text-lg font-semibold rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg border-contraste text-contraste hover:bg-contraste hover:text-contraste-foreground dark:border-contraste/80 dark:text-contraste/80 dark:hover:bg-contraste/90 dark:hover:text-white"
              >
                Fale Conosco
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-background dark:border-background/80">
              <img 
                src={heroImage}
                alt="ErgoBio Dashboard"
                className="w-full h-auto"
              />
              
              {/* Gradient Overlay Adaptativo */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-background/10 to-contraste/5 dark:from-background/20 dark:to-contraste/10" />
            </div>

            {/* Floating Stats - Modernized */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -left-6 top-1/4 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border bg-card/80 dark:bg-card/90 border-border"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/20 dark:bg-secondary/30">
                  <TrendingUp className="w-5 h-5 text-secondary dark:text-secondary/80" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground dark:text-foreground/90">30%</div>
                  <div className="text-sm text-muted-foreground dark:text-muted-foreground/80">Produtividade</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -right-6 bottom-1/4 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border bg-card/80 dark:bg-card/90 border-border"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-contraste/20 dark:bg-contraste/30">
                  <ShieldCheck className="w-5 h-5 text-contraste dark:text-contraste/80" />
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground dark:text-foreground/90">NR-17</div>
                  <div className="text-sm text-muted-foreground dark:text-muted-foreground/80">Conformidade</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-contraste/20 dark:bg-contraste/30 border border-contraste/30 dark:border-contraste/40"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="absolute -bottom-2 -left-4 w-6 h-6 rounded-full bg-secondary/20 dark:bg-secondary/30 border border-secondary/30 dark:border-secondary/40"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator Modern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full flex justify-center border-2 backdrop-blur-sm border-secondary dark:border-secondary/80">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 rounded-full mt-2 bg-secondary dark:bg-secondary/80"
          />
        </div>
      </motion.div>
    </section>
  );
}