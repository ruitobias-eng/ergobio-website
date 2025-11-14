import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  ClipboardCheck,
  AlertTriangle,
  Users,
  Scale,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

// Importando imagens
import aetImage from "../../img/aet.png";
import aprImage from "../../img/apr.png";
import cteImage from "../../img/cte.png";
import nr17Image from "../../img/nr17.png";

export default function Services() {
  const { t } = useLanguage();

  // Função auxiliar para garantir que sempre retorne um array
  const getArray = (path, fallback = []) => {
    const result = t(path);
    return Array.isArray(result) ? result : fallback;
  };

  const services = [
    {
      icon: ClipboardCheck,
      title: t("services.items.aetTitle") || "Análise Ergonômica do Trabalho (AET)",
      description: t("services.items.aetDesc") || "A AET é um estudo aprofundado das condições de trabalho, visando identificar e avaliar riscos ergonômicos presentes no ambiente.",
      image: aetImage,
      gradientLight: "from-blue-600 to-cyan-600",
      gradientDark: "from-blue-400 to-cyan-400",
      features: getArray("services.items.aetFeat", [
        "Diagnóstico completo",
        "Laudo detalhado",
        "Recomendações personalizadas",
        "Prevenção de LER/DORT",
      ]),
      benefits: getArray("services.items.aetBen", [
        "Redução de afastamentos",
        "Aumento da produtividade",
        "Conformidade legal",
      ]),
    },
    {
      icon: AlertTriangle,
      title: t("services.items.aprTitle") || "Avaliação Ergonômica Preliminar (AEP)",
      description: t("services.items.aprDesc") || "A AEP é uma ferramenta essencial para a identificação rápida e inicial de riscos ergonômicos.",
      image: aprImage,
      gradientLight: "from-orange-600 to-amber-600",
      gradientDark: "from-orange-400 to-amber-400",
      features: getArray("services.items.aprFeat", [
        "Identificação de riscos",
        "Priorização de ações",
        "Relatório executivo",
        "Plano de intervenção",
      ]),
      benefits: getArray("services.items.aprBen", [
        "Prevenção eficaz",
        "Custo reduzido",
        "Rápida implementação",
      ]),
    },
    {
      icon: Users,
      title: t("services.items.cteTitle") || "Consultoria Técnica Ergonômica",
      description: t("services.items.cteDesc") || "Oferecemos suporte especializado para implementar soluções ergonômicas customizadas.",
      image: cteImage,
      gradientLight: "from-green-600 to-emerald-600",
      gradientDark: "from-green-400 to-emerald-400",
      features: getArray("services.items.cteFeat", [
        "Soluções customizadas",
        "Acompanhamento contínuo",
        "Treinamentos especializados",
        "Otimização de processos",
      ]),
      benefits: getArray("services.items.cteBen", [
        "Melhoria contínua",
        "Eficiência operacional",
        "Retorno sobre investimento",
      ]),
    },
    {
      icon: Scale,
      title: t("services.items.nr17Title") || "Atendimento Legal (NR-17 e NR-01)",
      description: t("services.items.nr17Desc") || "Garantimos total conformidade com as normas NR-17 e NR-01, ajudando sua empresa a evitar multas.",
      image: nr17Image,
      gradientLight: "from-purple-600 to-pink-600",
      gradientDark: "from-purple-400 to-pink-400",
      features: getArray("services.items.nr17Feat", [
        "Conformidade total",
        "Documentação completa",
        "Defesa em auditorias",
        "Assessoria jurídica",
      ]),
      benefits: getArray("services.items.nr17Ben", [
        "Segurança jurídica",
        "Evitação de multas",
        "Ambiente regulado",
      ]),
    },
  ];

  return (
    <section
      id="servicos"
      className="py-24 bg-background transition-colors duration-500 relative overflow-hidden"
    >
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
            <ClipboardCheck className="w-4 h-4 text-secondary dark:text-secondary" />
            <span className="text-sm font-medium text-foreground dark:text-foreground/90">
              {t("services.tag") || "Serviços Especializados"}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground"
          >
            {t("services.title") || "Soluções Completas em"}{" "}
            <span className="px-3 py-1 rounded-lg bg-secondary text-white dark:bg-contraste dark:text-background">
              Ergonomia
            </span>
          </motion.h2>

          <p className="text-xl md:text-2xl text-foreground/80 dark:text-foreground/90 max-w-4xl mx-auto leading-relaxed">
            {t("services.description") || "Soluções completas e personalizadas para garantir a saúde ocupacional e conformidade legal da sua empresa."}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border border-border bg-card/70 dark:bg-card/50 backdrop-blur-sm overflow-hidden hover:shadow-2xl dark:hover:shadow-xl transition-all duration-500 rounded-3xl group-hover:scale-[1.02] group-hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent dark:from-background/90 dark:via-background/50 dark:to-transparent" />

                  <div
                    className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-r ${service.gradientLight} dark:${service.gradientDark} shadow-lg`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-background/80 dark:bg-background/80 backdrop-blur-sm text-foreground text-sm font-medium rounded-full border border-border">
                      {t("services.specialized") || "Especializado"}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-foreground/80 dark:text-foreground/90 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary dark:text-secondary" />
                        {t("services.includes") || "Inclui:"}
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm text-foreground/80 dark:text-foreground/90"
                          >
                            <div className="w-1.5 h-1.5 bg-secondary dark:bg-secondary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-contraste dark:text-contraste" />
                        {t("services.benefits") || "Benefícios:"}
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm text-foreground/80 dark:text-foreground/90"
                          >
                            <div className="w-1.5 h-1.5 bg-contraste dark:bg-contraste rounded-full" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-4 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 dark:bg-contraste dark:text-background dark:hover:bg-contraste/90 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    {t("services.learnMore") || "Saiba Mais"}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </CardContent>
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
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/15 dark:to-secondary/15 rounded-3xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t("services.ctaTitle") || "Precisa de uma solução personalizada?"}
            </h3>
            <p className="text-foreground/80 dark:text-foreground/90 mb-6 max-w-2xl mx-auto">
              {t("services.ctaDesc") || "Nossa equipe está pronta para desenvolver um plano sob medida para as necessidades específicas da sua empresa."}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-white dark:bg-contraste dark:text-background px-8 py-4 rounded-xl font-semibold hover:bg-secondary/90 dark:hover:bg-contraste/90 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300"
            >
              {t("services.ctaButton") || "Solicitar Consultoria Personalizada"}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}