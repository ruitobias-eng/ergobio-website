import React from "react";
import { motion } from "framer-motion";
import { Award, Target, Heart, Star, Users, TrendingUp } from "lucide-react";

export default function About() {
  const features = [
    { 
      icon: Target, 
      text: "Soluções personalizadas e focadas em resultados",
      gradientLight: "from-blue-600 to-cyan-600",
      gradientDark: "from-blue-400 to-cyan-400"
    },
    { 
      icon: Award, 
      text: "Conformidade garantida com NR-17 e NR-01",
      gradientLight: "from-green-600 to-emerald-600",
      gradientDark: "from-green-400 to-emerald-400"
    },
    { 
      icon: Heart, 
      text: "Compromisso com saúde e bem-estar",
      gradientLight: "from-pink-600 to-rose-600",
      gradientDark: "from-pink-400 to-rose-400"
    },
  ];

  const stats = [
    { number: "50+", label: "Clientes Atendidos", icon: Users },
    { number: "100%", label: "Conformidade NR-17", icon: Award },
    { number: "30%", label: "Aumento Produtividade", icon: TrendingUp },
  ];

  return (
    <section id="sobre" className="py-24 bg-background transition-colors overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-secondary/20 dark:border-secondary/30 mb-6">
            <Star className="w-4 h-4 text-secondary dark:text-secondary/80" />
            <span className="text-sm font-medium text-foreground dark:text-foreground/90">
              Especialistas em Ergonomia
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            <span className="text-foreground dark:text-foreground/90">Sobre a </span>{' '}
            <span className="px-3 py-1 rounded-lg bg-secondary text-white dark:bg-contraste">
              ErgoBio
            </span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-muted-foreground dark:text-muted-foreground/80 max-w-4xl mx-auto leading-relaxed">
            Sua parceira estratégica em <strong className="text-foreground dark:text-foreground/90">Ergonomia e Saúde Ocupacional</strong>, 
            liderada pela fisioterapeuta Tatiana Carvalho. Transformamos ambientes de trabalho 
            em espaços de saúde, segurança e produtividade.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Features List */}
            <div className="space-y-6">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-card dark:bg-card/80 border border-border hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${item.gradientLight} dark:${item.gradientDark} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-foreground dark:text-foreground/90 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 pt-6"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl bg-muted/50 dark:bg-muted/30 border border-border hover:shadow-md dark:hover:shadow-lg transition-all duration-300"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-secondary dark:text-secondary/80" />
                  <div className="text-2xl font-bold text-foreground dark:text-foreground/90">{stat.number}</div>
                  <div className="text-xs text-muted-foreground dark:text-muted-foreground/80 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Card - Tatiana */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-card to-muted dark:from-card/90 dark:to-muted/50 rounded-3xl p-8 shadow-2xl border border-border overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 dark:opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-contraste dark:from-secondary/60 dark:to-contraste/60" />
              </div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Avatar */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-secondary to-contraste dark:from-secondary/80 dark:to-contraste/80 rounded-full flex items-center justify-center shadow-2xl border-4 border-background dark:border-background/80"
                >
                  <Award className="w-12 h-12 text-white" />
                </motion.div>

                {/* Name and Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-bold text-foreground dark:text-foreground/90 mb-2"
                >
                  Fisioterapeuta Tatiana Carvalho
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg text-muted-foreground dark:text-muted-foreground/80 mb-6 font-medium"
                >
                  Especialista em Ergonomia e Saúde Ocupacional
                </motion.p>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="border-t border-border pt-6"
                >
                  <p className="text-foreground dark:text-foreground/90 leading-relaxed text-lg">
                    Profissional com vasta experiência em soluções ergonômicas corporativas, 
                    dedicada a transformar ambientes de trabalho em espaços de saúde, 
                    segurança e alta produtividade.
                  </p>
                </motion.div>

                {/* Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap justify-center gap-3 mt-6"
                >
                  {["CREFITO", "NR-17", "Saúde Ocupacional"].map((badge, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-secondary/80 text-sm font-medium rounded-full border border-secondary/20 dark:border-secondary/30"
                    >
                      {badge}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-contraste dark:bg-contraste/60 rounded-full opacity-20 dark:opacity-30" />
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-secondary dark:bg-secondary/60 rounded-full opacity-20 dark:opacity-30" />
            </div>

            {/* Floating Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-contraste to-orange-500 dark:from-contraste/80 dark:to-orange-400 text-white px-4 py-2 rounded-xl shadow-lg font-semibold"
            >
              +10 anos Exp.
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}