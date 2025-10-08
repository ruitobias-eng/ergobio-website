import React from "react";
import { motion } from "framer-motion";
import { Award, Target, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[var(--background)] transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--cor-primaria)]">
              Sobre a ErgoBio
            </h2>
            <p className="text-xl mb-8 leading-relaxed text-[var(--cor-texto)]">
              A ErgoBio é sua parceira estratégica em Ergonomia e Saúde Ocupacional,
              liderada pela fisioterapeuta Tatiana Carvalho. Com foco em resultados,
              ajudamos empresas a criar ambientes de trabalho mais seguros e eficientes.
            </p>

            <div className="space-y-4">
              {[
                { icon: Target, text: "Soluções personalizadas e focadas em resultados" },
                { icon: Award, text: "Conformidade garantida com NR-17 e NR-01" },
                { icon: Heart, text: "Compromisso com saúde e bem-estar" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="p-2 bg-[var(--cor-secundaria)]/15 rounded-lg">
                    <item.icon className="w-5 h-5 text-[var(--cor-secundaria)]" />
                  </div>
                  <span className="font-medium text-[var(--cor-texto)] dark:text-gray-300">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Card Tatiana */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[var(--cor-secundaria)] to-[var(--cor-primaria)] rounded-2xl p-10 text-white shadow-2xl"
          >
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Award className="w-16 h-16 text-[var(--cor-secundaria)]" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Fisioterapeuta Tatiana Carvalho</h3>
              <p className="text-xl text-[var(--cor-secundaria)]/90 mb-6">
                Especialista em Ergonomia e Saúde Ocupacional
              </p>
              <div className="border-t border-white/30 pt-6">
                <p className="text-lg leading-relaxed">
                  Profissional com vasta experiência em soluções ergonômicas corporativas,
                  dedicada a transformar ambientes de trabalho em espaços de saúde e produtividade.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
