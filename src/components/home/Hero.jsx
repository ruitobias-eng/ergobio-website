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
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background to-muted/30"
    >
      {/* Background Pattern Modern */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-10 dark:opacity-15"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, var(--cor-secundaria) 2px, transparent 0),
              radial-gradient(circle at 75% 75%, var(--cor-contraste) 1px, transparent 0)
            `,
            backgroundSize: '60px 60px, 40px 40px'
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-gradient-to-r from-contraste/20 to-primary/20 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />

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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-sm"
            >
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-foreground/80">
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
              <span 
                className="bg-gradient-to-r from-secondary to-contraste bg-clip-text text-transparent"
              >
                Ergonomia
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl leading-relaxed text-muted-foreground"
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
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary/20">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                </div>
                <span className="text-foreground font-medium">Conformidade Legal</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-contraste/20">
                  <TrendingUp className="w-4 h-4 text-contraste" />
                </div>
                <span className="text-foreground font-medium">+30% Produtividade</span>
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
                className="px-8 py-6 text-lg group font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                style={{ 
                  backgroundColor: 'var(--cor-secundaria)', 
                  color: 'var(--cor-primaria)'
                }}
              >
                Conheça Nossos Serviços
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contato')}
                className="px-8 py-6 text-lg font-semibold rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ 
                  borderColor: 'var(--cor-contraste)',
                  color: 'var(--cor-contraste)',
                  backgroundColor: 'transparent'
                }}
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-background">
              <img 
                src={heroImage}
                alt="ErgoBio Dashboard"
                className="w-full h-auto"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-background/10 to-contraste/5" />
            </div>

            {/* Floating Stats - Modernized */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -left-6 top-1/4 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border"
              style={{ 
                backgroundColor: 'hsl(var(--card))',
                borderColor: 'hsl(var(--border))'
              }}
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/20">
                  <TrendingUp className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">30%</div>
                  <div className="text-sm text-muted-foreground">Produtividade</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -right-6 bottom-1/4 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border"
              style={{ 
                backgroundColor: 'hsl(var(--card))',
                borderColor: 'hsl(var(--border))'
              }}
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-contraste/20">
                  <ShieldCheck className="w-5 h-5 text-contraste" />
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground">NR-17</div>
                  <div className="text-sm text-muted-foreground">Conformidade</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-contraste/20 border border-contraste/30"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="absolute -bottom-2 -left-4 w-6 h-6 rounded-full bg-secondary/20 border border-secondary/30"
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
        <div 
          className="w-6 h-10 rounded-full flex justify-center border-2 backdrop-blur-sm"
          style={{ borderColor: 'var(--cor-secundaria)' }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 rounded-full mt-2"
            style={{ backgroundColor: 'var(--cor-secundaria)' }}
          />
        </div>
      </motion.div>
    </section>
  );
}