import React from 'react';
import { motion } from "framer-motion";
import { Shield, Award, TrendingUp, CheckCircle, FileText, Users } from "lucide-react";
import complianceImage from '../../img/compliance.png';

export default function Compliance() {
  const features = [
    { 
      icon: Shield, 
      title: "Proteção Legal", 
      desc: "Evite multas e passivos trabalhistas com conformidade total",
      gradientLight: "from-blue-600 to-cyan-600",
      gradientDark: "from-blue-400 to-cyan-400"
    },
    { 
      icon: Award, 
      title: "Certificação NR-17", 
      desc: "Documentação completa e laudos técnicos especializados",
      gradientLight: "from-green-600 to-emerald-600",
      gradientDark: "from-green-400 to-emerald-400"
    },
    { 
      icon: TrendingUp, 
      title: "Melhoria Contínua", 
      desc: "Transforme obrigações legais em vantagens competitivas",
      gradientLight: "from-orange-600 to-amber-600",
      gradientDark: "from-orange-400 to-amber-400"
    },
    { 
      icon: Users, 
      title: "Segurança dos Colaboradores", 
      desc: "Ambientes de trabalho mais seguros e produtivos",
      gradientLight: "from-purple-600 to-pink-600",
      gradientDark: "from-purple-400 to-pink-400"
    }
  ];

  const complianceItems = [
    "Laudo Ergonômico completo",
    "Análise de posto de trabalho",
    "Adequação às normas regulamentadoras",
    "Programa de prevenção de LER/DORT",
    "Treinamentos especializados",
    "Documentação para auditoria"
  ];

  return (
    <section id="compliance" className="py-24 relative overflow-hidden">
      {/* Background Gradient Adaptativo */}
      {/* Mantido o gradiente de fundo por ter baixa opacidade. */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/30 dark:from-primary/20 dark:via-primary/10 dark:to-secondary/10" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--foreground) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* Floating Elements Adaptativos */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-foreground/5 dark:bg-foreground/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 dark:bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-background dark:border-background/80">
              <img 
                src={complianceImage}
                alt="Conformidade Legal NR-17"
                loading="lazy"
                className="w-full h-auto"
              />
              {/* Gradient Overlay Adaptativo */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent dark:from-primary/20 dark:to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-contraste to-orange-600 dark:from-contraste/80 dark:to-orange-500 text-white px-6 py-3 rounded-2xl shadow-2xl font-bold text-lg"
            >
              NR-17
            </motion.div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-background/95 dark:bg-background/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-border"
            >
              <div className="text-center">
                {/* Aumentado o contraste para o foreground principal */}
                <div className="text-2xl font-bold text-foreground mb-1">100%</div>
                {/* Aumentado o contraste do texto secundário no dark mode */}
                <div className="text-sm text-muted-foreground dark:text-muted-foreground/90 font-medium">Conformidade</div>
                <div className="text-xs text-muted-foreground dark:text-muted-foreground/90">Garantida</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/10 dark:bg-foreground/20 backdrop-blur-sm border border-foreground/20 dark:border-foreground/30"
              >
                <FileText className="w-4 h-4 text-foreground dark:text-foreground/80" />
                {/* Usando text-foreground sem /90 para melhor legibilidade no light mode */}
                <span className="text-sm font-medium text-foreground dark:text-foreground/90">
                  Conformidade Legal
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                // Usando text-foreground sem /90 para melhor legibilidade em ambos os temas
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
              >
                Conformidade{' '}
                {/* A cor do texto foi ajustada para ter alto contraste no badge laranja do dark mode */}
                <span className="px-3 py-1 rounded-lg bg-secondary text-white dark:bg-contraste dark:text-background">
                  Legal
                </span>{' '}
                Garantida
              </motion.h2>

              <p className="text-xl text-foreground/80 dark:text-foreground/90 leading-relaxed">
                A ErgoBio é especialista em assegurar que sua empresa atenda plenamente às 
                exigências da <strong className="text-foreground">NR-17 e NR-01</strong>, transformando 
                obrigações legais em oportunidades de melhoria contínua para a saúde e 
                produtividade dos seus colaboradores.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  // Aumentado a opacidade do background para garantir melhor contraste
                  className="bg-card/70 dark:bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover:bg-card/90 dark:hover:bg-card/70 transition-all duration-300 group"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.gradientLight} dark:${item.gradientDark} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  {/* Título com alto contraste */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  {/* Descrição com bom contraste em relação ao fundo do card */}
                  <p className="text-muted-foreground dark:text-muted-foreground/90 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Compliance List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              // Aumentado a opacidade do background para garantir melhor contraste
              className="bg-card/60 dark:bg-card/40 backdrop-blur-sm rounded-2xl p-6 border border-border"
            >
              {/* Título com alto contraste */}
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary dark:text-secondary/80" />
                Serviços Incluídos:
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {complianceItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary dark:bg-secondary/80 rounded-full" />
                    {/* Texto do item da lista com bom contraste */}
                    <span className="text-foreground/90 dark:text-foreground/80 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}