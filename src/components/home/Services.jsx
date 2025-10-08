import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ClipboardCheck, AlertTriangle, Users, Scale } from "lucide-react";

// Importing images
import aetImage from '../../img/aet.png';
import aprImage from '../../img/apr.png';
import cteImage from '../../img/cte.png';
import nr17Image from '../../img/nr17.png';

const services = [
  {
    icon: ClipboardCheck,
    title: "Análise Ergonômica do Trabalho (AET)",
    description:
      "A AET é um estudo aprofundado das condições de trabalho, visando identificar e avaliar riscos ergonômicos presentes no ambiente. Nosso serviço de AET oferece um diagnóstico preciso e recomendações personalizadas para otimizar postos de trabalho, prevenir doenças ocupacionais e promover conforto, segurança e produtividade.",
    image: aetImage,
  },
  {
    icon: AlertTriangle,
    title: "Avaliação Preliminar de Risco (APR)",
    description:
      "A APR é uma ferramenta essencial para a identificação rápida e inicial de riscos ergonômicos. Com foco na prevenção, nossa avaliação permite priorizar ações corretivas, minimizando a exposição a fatores de risco e garantindo conformidade legal.",
    image: aprImage,
  },
  {
    icon: Users,
    title: "Consultoria Técnica Ergonômica",
    description:
      "Oferecemos suporte especializado para implementar soluções ergonômicas customizadas às necessidades da sua empresa, melhorando saúde ocupacional, reduzindo afastamentos e elevando eficiência operacional.",
    image: cteImage,
  },
  {
    icon: Scale,
    title: "Atendimento Legal (NR-17 e NR-01)",
    description:
      "Garantimos total conformidade com as normas NR-17 e NR-01, ajudando sua empresa a evitar multas, passivos trabalhistas e manter um ambiente de trabalho saudável e seguro.",
    image: nr17Image,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-[var(--background)] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--cor-primaria)" }}
          >
            Nossos Serviços
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: "var(--cor-texto)" }}
          >
            Soluções completas e personalizadas para garantir a saúde ocupacional
            e conformidade legal da sua empresa
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden border-none bg-white dark:bg-[#121212] shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div
                    className="absolute bottom-4 left-4 p-3 rounded-lg"
                    style={{ backgroundColor: "var(--cor-contraste)" }}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <h3
                    className="text-2xl font-bold mt-3"
                    style={{ color: "var(--cor-primaria)" }}
                  >
                    {service.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p
                    className="leading-relaxed"
                    style={{ color: "var(--cor-texto)" }}
                  >
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
