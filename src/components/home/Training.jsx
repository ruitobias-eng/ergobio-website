import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GraduationCap, Presentation } from "lucide-react";

export default function Training() {
  const trainings = [
    {
      icon: GraduationCap,
      title: "Treinamentos Ergonômicos",
      description:
        "Capacite seus colaboradores com práticas ergonômicas, postura correta e prevenção de lesões. Treinamentos dinâmicos, voltados para mudar hábitos e promover a autogestão da saúde no trabalho.",
    },
    {
      icon: Presentation,
      title: "Palestras Especializadas",
      description:
        "Apresentações inspiradoras sobre Qualidade de Vida, Fatores Psicossociais e Ergonomia. Conteúdo envolvente e educativo para equipes mais motivadas e conscientes.",
    },
  ];

  return (
    <section className="py-24 bg-[var(--secondary)]/10 dark:bg-[#101820] transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--cor-primaria)]">
            Treinamentos e Palestras
          </h2>
          <p className="text-xl text-[var(--cor-texto)] max-w-3xl mx-auto">
            Capacitação e conscientização para promover uma cultura de saúde e segurança
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {trainings.map((training, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white dark:bg-[#1a1a1a] hover:shadow-2xl transition-all duration-500 border-none">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 bg-[var(--cor-secundaria)]/15 rounded-xl">
                      <training.icon
                        className="w-10 h-10 text-[var(--cor-secundaria)]"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--cor-primaria)] dark:text-white">
                      {training.title}
                    </h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed text-[var(--cor-texto)] dark:text-gray-300">
                    {training.description}
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
