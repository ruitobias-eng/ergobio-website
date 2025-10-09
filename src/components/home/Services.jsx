import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ClipboardCheck, AlertTriangle, Users, Scale, ArrowRight, CheckCircle2 } from "lucide-react";

// Importing images
import aetImage from '../../img/aet.png';
import aprImage from '../../img/apr.png';
import cteImage from '../../img/cte.png';
import nr17Image from '../../img/nr17.png';

const services = [
  {
    icon: ClipboardCheck,
    title: "Análise Ergonômica do Trabalho (AET)",
    description: "A AET é um estudo aprofundado das condições de trabalho, visando identificar e avaliar riscos ergonômicos presentes no ambiente. Nosso serviço de AET oferece um diagnóstico preciso e recomendações personalizadas para otimizar postos de trabalho, prevenir doenças ocupacionais e promover conforto, segurança e produtividade.",
    image: aetImage,
    gradient: "from-blue-500 to-cyan-500",
    features: ["Diagnóstico completo", "Laudo detalhado", "Recomendações personalizadas", "Prevenção de LER/DORT"],
    benefits: ["Redução de afastamentos", "Aumento da produtividade", "Conformidade legal"]
  },
  {
    icon: AlertTriangle,
    title: "Avaliação Preliminar de Risco (APR)",
    description: "A APR é uma ferramenta essencial para a identificação rápida e inicial de riscos ergonômicos. Com foco na prevenção, nossa avaliação permite priorizar ações corretivas, minimizando a exposição a fatores de risco e garantindo conformidade legal.",
    image: aprImage,
    gradient: "from-orange-500 to-amber-500",
    features: ["Identificação de riscos", "Priorização de ações", "Relatório executivo", "Plano de intervenção"],
    benefits: ["Prevenção eficaz", "Custo reduzido", "Rápida implementação"]
  },
  {
    icon: Users,
    title: "Consultoria Técnica Ergonômica",
    description: "Oferecemos suporte especializado para implementar soluções ergonômicas customizadas às necessidades da sua empresa, melhorando saúde ocupacional, reduzindo afastamentos e elevando eficiência operacional.",
    image: cteImage,
    gradient: "from-green-500 to-emerald-500",
    features: ["Soluções customizadas", "Acompanhamento contínuo", "Treinamentos especializados", "Otimização de processos"],
    benefits: ["Melhoria contínua", "Eficiência operacional", "Retorno sobre investimento"]
  },
  {
    icon: Scale,
    title: "Atendimento Legal (NR-17 e NR-01)",
    description: "Garantimos total conformidade com as normas NR-17 e NR-01, ajudando sua empresa a evitar multas, passivos trabalhistas e manter um ambiente de trabalho saudável e seguro.",
    image: nr17Image,
    gradient: "from-purple-500 to-pink-500",
    features: ["Conformidade total", "Documentação completa", "Defesa em auditorias", "Assessoria jurídica"],
    benefits: ["Segurança jurídica", "Evitação de multas", "Ambiente regulado"]
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-background transition-colors duration-500 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6"
          >
            <ClipboardCheck className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-foreground">
              Serviços Especializados
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Nossos </span>
            <span className="bg-gradient-to-r from-secondary to-contraste bg-clip-text text-transparent">
              Serviços
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Soluções completas e personalizadas para garantir a{" "}
            <strong className="text-foreground">saúde ocupacional</strong> e{" "}
            <strong className="text-foreground">conformidade legal</strong> da sua empresa
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
              <Card className="h-full border border-border bg-card/50 backdrop-blur-sm overflow-hidden hover:shadow-2xl transition-all duration-500 rounded-3xl group-hover:scale-105">
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-r ${service.gradient} shadow-lg`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Service Label */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-background/80 backdrop-blur-sm text-foreground text-sm font-medium rounded-full border border-border">
                      Especializado
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                        Inclui:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-contraste" />
                        Benefícios:
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-contraste rounded-full" />
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
                    className="w-full py-3 px-4 bg-gradient-to-r from-secondary to-contraste text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    Saiba Mais
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </CardContent>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
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
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Precisa de uma solução personalizada?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nossa equipe está pronta para desenvolver um plano sob medida para as necessidades específicas da sua empresa.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-secondary to-contraste text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Solicitar Consultoria Personalizada
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}