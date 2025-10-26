import React from "react";
import { motion } from "framer-motion";
import { Building2, Link } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function Partners() {
  const { t } = useLanguage();

  const partners = [
    {
      name: "LC Centro de Montagem",
      url: "https://www.grupolclog.com.br/nossos-negocios/lc-centro-de-montagem",
      logo: "/ergobio-website/img/lc.png",
    },
    {
      name: "Almaq Oficial",
      url: "https://www.instagram.com/almaq_oficial?igsh=MWl1MHNzMjZlbDM5dQ==",
      logo: "/ergobio-website/img/almaq.png",
    },
    {
      name: "Copylink Oficial",
      url: "https://www.instagram.com/copylink_oficial?igsh=NnN6eWxiNzZvOHB6",
      logo: "/ergobio-website/img/copylink.png",
    },
    {
      name: "Açougue MP",
      url: "https://www.instagram.com/acougue_mp/",
      logo: "/ergobio-website/img/mp.png",
    },
    {
      name: "Urbem",
      url: "https://urbembr.com/sobre/",
      logo: "/ergobio-website/img/urbem.png",
    },
    {
      name: "Procoat Indústria",
      url: "https://procoat.ind.br/",
      logo: "/ergobio-website/img/procoat.png",
    },
    {
      name: "Copo Brasil",
      url: "https://www.copobrasil.com/",
      logo: "/ergobio-website/img/copo.png",
    },
  ];

  const dotColor = "rgba(56,81,112,0.16)";
  const darkDotColor = "rgba(255,255,255,0.08)";
  const patternStyle = {
    backgroundImage: `radial-gradient(${dotColor} 1px, transparent 1px)`,
    backgroundSize: "18px 18px",
  };
  const darkPatternStyle = {
    backgroundImage: `radial-gradient(${darkDotColor} 1px, transparent 1px)`,
    backgroundSize: "18px 18px",
  };

  return (
    <section
      id="parceiros"
      className="py-24 bg-background transition-colors duration-500 relative overflow-hidden"
    >
      {/* Fundo pontilhado */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={patternStyle} />
        <div
          className="absolute inset-0 dark:opacity-100 opacity-0"
          style={darkPatternStyle}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-secondary/20 mb-6">
            <Building2 className="w-4 h-4 text-secondary dark:text-secondary/80" />
            <span className="text-sm font-medium text-foreground">
              {t("partners.tag")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            <span className="px-3 py-1 rounded-lg bg-secondary text-white dark:bg-contraste dark:text-background">
              {t("partners.title")}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 dark:text-foreground/90 max-w-3xl mx-auto">
            {t("partners.description")}
          </p>
        </motion.div>

        {/* Logos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <motion.a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-card/70 dark:bg-card/50 backdrop-blur-sm border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 w-full h-52"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="max-h-16 object-contain mb-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
              <p className="font-semibold text-foreground text-center">
                {partner.name}
              </p>
              <Link className="w-4 h-4 text-secondary absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
