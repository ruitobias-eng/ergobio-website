import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GraduationCap, Presentation, Users, Clock, CheckCircle2, ArrowRight, Star } from "lucide-react";

export default function Training() {
  const trainings = [
    {
      icon: GraduationCap,
      title: "Treinamentos Ergonômicos",
      description: "Capacite seus colaboradores com práticas ergonômicas, postura correta e prevenção de lesões. Treinamentos dinâmicos, voltados para mudar hábitos e promover a autogestão da saúde no trabalho.",
      gradientLight: "from-blue-600 to-cyan-600",
      gradientDark: "from-blue-400 to-cyan-400",
      features: [
        "Técnicas de postura correta",
        "Prevenção de LER/DORT",
        "Exercícios laborais",
        "Adaptação do posto de trabalho"
      ],
      duration: "4-8 horas",
      audience: "Todos os colaboradores",
      benefits: ["Redução de afastamentos", "Aumento da produtividade", "Melhoria do bem-estar"]
    },
    {
      icon: Presentation,
      title: "Palestras Especializadas",
      description: "Apresentações inspiradoras sobre Qualidade de Vida, Fatores Psicossociais e Ergonomia. Conteúdo envolvente e educativo para equipes mais motivadas e conscientes.",
      gradientLight: "from-purple-600 to-pink-600",
      gradientDark: "from-purple-400 to-pink-400",
      features: [
        "Qualidade de vida no trabalho",
        "Fatores psicossociais",
        "Gestão do estresse",
        "Motivação e engajamento"
      ],
      duration: "1-2 horas",
      audience: "Lideranças e equipes",
      benefits: ["Equipes motivadas", "Clima organizacional", "Conscientização coletiva"]
    },
  ];

  const stats = [
    { number: "500+", label: "Colaboradores Treinados", icon: Users },
    { number: "98%", label: "Satisfação", icon: Star },
    { number: "40%", label: "Redução de LER/DORT", icon: CheckCircle2 },
  ];

  return (
    <section id="treinamentos" className="py-24 bg-gradient-to-br from-muted/50 to-background dark:from-muted/20 dark:to-background/80 transition-colors relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-secondary/20 dark:border-secondary/30 mb-6"
          >
            <GraduationCap className="w-4 h-4 text-secondary dark:text-secondary/80" />
            <span className="text-sm font-medium text-foreground dark:text-foreground/90">
              Capacitação e Desenvolvimento
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground dark:text-foreground/90">Treinamentos e </span>
            <span className="bg-gradient-to-r from-secondary to-contraste dark:from-secondary/80 dark:to-contraste/80 bg-clip-text text-transparent">
              Palestras
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground dark:text-muted-foreground/80 max-w-4xl mx-auto leading-relaxed">
            Capacitação e conscientização para promover uma cultura de{" "}
            <strong className="text-foreground dark:text-foreground/90">saúde, segurança e bem-estar</strong> organizacional
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-card/50 dark:bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border hover:shadow-lg dark:hover:shadow-xl transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-secondary dark:text-secondary/80" />
              <div className="text-2xl md:text-3xl font-bold text-foreground dark:text-foreground/90 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground dark:text-muted-foreground/80 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Training Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {trainings.map((training, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border border-border bg-card/50 dark:bg-card/30 backdrop-blur-sm overflow-hidden hover:shadow-2xl dark:hover:shadow-xl transition-all duration-500 rounded-3xl group-hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${training.gradientLight} dark:${training.gradientDark} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <training.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground dark:text-foreground/90 mb-2">
                        {training.title}
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground/80">
                          <Clock className="w-4 h-4" />
                          {training.duration}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground/80">
                          <Users className="w-4 h-4" />
                          {training.audience}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Description */}
                  <p className="text-muted-foreground dark:text-muted-foreground/80 leading-relaxed text-lg">
                    {training.description}
                  </p>

                  {/* Features & Benefits Grid */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground dark:text-foreground/90 mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary dark:text-secondary/80" />
                        Conteúdo Abordado:
                      </h4>
                      <ul className="space-y-2">
                        {training.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground/80">
                            <div className="w-1.5 h-1.5 bg-secondary dark:bg-secondary/80 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground dark:text-foreground/90 mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                        <Star className="w-4 h-4 text-contraste dark:text-contraste/80" />
                        Benefícios:
                      </h4>
                      <ul className="space-y-2">
                        {training.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground/80">
                            <div className="w-1.5 h-1.5 bg-contraste dark:bg-contraste/80 rounded-full" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-4 bg-gradient-to-r from-secondary to-contraste dark:from-secondary/80 dark:to-contraste/80 hover:from-secondary/90 hover:to-contraste/90 dark:hover:from-secondary/70 dark:hover:to-contraste/70 text-white font-semibold rounded-xl hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </CardContent>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${training.gradientLight} dark:${training.gradientDark} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-3xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground dark:text-foreground/90 mb-4">
              Programas Customizados para sua Empresa
            </h3>
            <p className="text-muted-foreground dark:text-muted-foreground/80 mb-6 max-w-2xl mx-auto">
              Desenvolvemos treinamentos e palestras sob medida para as necessidades específicas 
              do seu negócio, com conteúdo relevante e aplicação prática imediata.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-secondary to-contraste dark:from-secondary/80 dark:to-contraste/80 hover:from-secondary/90 hover:to-contraste/90 dark:hover:from-secondary/70 dark:hover:to-contraste/70 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg dark:hover:shadow-xl transition-all duration-300"
              >
                Agendar Diagnóstico Gratuito
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-secondary dark:border-secondary/80 text-secondary dark:text-secondary/80 px-8 py-4 rounded-xl font-semibold hover:bg-secondary/5 dark:hover:bg-secondary/10 transition-all duration-300"
              >
                Ver Conteúdo Programático
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}