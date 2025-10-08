import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from '../../img/hero.png'; // Updated path

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'transparent' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.06 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--cor-secundaria) 1px, transparent 0)`,
            backgroundSize: '44px 44px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 leading-relaxed"
              style={{ color: 'var(--cor-texto)' }}
            >
              Soluções especializadas em Ergonomia e Saúde Ocupacional para empresas que buscam excelência no cuidado com seus colaboradores
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('servicos')}
                className="px-8 py-6 text-lg group font-semibold"
                style={{ backgroundColor: 'var(--cor-secundaria)', color: 'var(--cor-primaria)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8bc4b8'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--cor-secundaria)'}
              >
                Conheça Nossos Serviços
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection('contato')}
                className="px-8 py-6 text-lg font-semibold text-white"
                style={{ backgroundColor: 'var(--cor-contraste)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d85e00'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--cor-contraste)'}
              >
                Fale Conosco
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex items-center gap-3"
              style={{ color: 'var(--cor-primaria)' }}
            >
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg font-medium">Conformidade Legal Garantida</span>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} // Updated path here
                alt="ErgoBio Dashboard"
                className="w-full h-auto"
              />
              {/* Glow Effect */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to top right, rgba(159, 211, 199, 0.2), transparent)` }} />
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -left-4 top-1/4 backdrop-blur-lg rounded-xl p-4 shadow-xl"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', border: `1px solid var(--cor-secundaria)` }}
            >
              <div className="text-3xl font-bold" style={{ color: 'var(--cor-contraste)' }}>30%</div>
              <div className="text-sm text-white">Produtividade</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -right-4 bottom-1/4 backdrop-blur-lg rounded-xl p-4 shadow-xl"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', border: `1px solid var(--cor-secundaria)` }}
            >
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="w-5 h-5" style={{ color: 'var(--cor-secundaria)' }} />
                <span className="text-sm font-semibold text-white">NR-17</span>
              </div>
              <div className="text-xs text-white">Conformidade</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full flex justify-center" style={{ border: `2px solid var(--cor-secundaria)` }}>
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
