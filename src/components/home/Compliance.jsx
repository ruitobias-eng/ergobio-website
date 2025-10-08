import React from 'react';
import { motion } from "framer-motion";
import { Shield, Award, TrendingUp } from "lucide-react";
import complianceImage from '../../img/compliance.png'; // Updated path


export default function Compliance() {
  return (
    <section className="py-24" style={{ background: `linear-gradient(to bottom, var(--cor-primaria), #0d1f34)` }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src={complianceImage}
              alt="Conformidade Legal"
              className="rounded-2xl shadow-2xl"
              onError={(e) => e.target.src = '/path/to/fallback/image.png'} // Fallback image
            />
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Conformidade Legal Garantida
            </h2>
            <p className="text-xl mb-8 leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              A ErgoBio é especialista em assegurar que sua empresa atenda plenamente às exigências da NR-17 e NR-01, transformando obrigações legais em oportunidades de melhoria contínua para a saúde e produtividade dos seus colaboradores.
            </p>

            <div className="space-y-6">
              {[
                { icon: Shield, title: "Proteção Legal", desc: "Evite multas e passivos trabalhistas" },
                { icon: Award, title: "Certificação", desc: "Conformidade com NR-17 e NR-01" },
                { icon: TrendingUp, title: "Melhoria Contínua", desc: "Transforme obrigações em oportunidades" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(159, 211, 199, 0.15)' }}>
                    <item.icon className="w-6 h-6" style={{ color: 'var(--cor-secundaria)' }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}