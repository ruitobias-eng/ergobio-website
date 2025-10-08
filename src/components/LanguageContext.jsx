import React, { createContext, useContext, useState } from "react";

// Dicionário com textos em 3 idiomas
const translations = {
  "pt-BR": {
    nav: {
      home: "Início",
      services: "Serviços",
      about: "Sobre Nós",
      contact: "Contato",
      proposal: "Solicitar Proposta",
    },
    hero: {
      text: "Soluções especializadas em Ergonomia e Saúde Ocupacional para empresas que buscam excelência no cuidado com seus colaboradores.",
      services: "Conheça Nossos Serviços",
      contact: "Fale Conosco",
      compliance: "Conformidade Legal Garantida",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About Us",
      contact: "Contact",
      proposal: "Request a Quote",
    },
    hero: {
      text: "Specialized solutions in Ergonomics and Occupational Health for companies seeking excellence in employee care.",
      services: "Explore Our Services",
      contact: "Contact Us",
      compliance: "Legal Compliance Guaranteed",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Sobre Nosotros",
      contact: "Contacto",
      proposal: "Solicitar Cotización",
    },
    hero: {
      text: "Soluciones especializadas en Ergonomía y Salud Ocupacional para empresas que buscan excelencia en el cuidado de sus empleados.",
      services: "Conozca Nuestros Servicios",
      contact: "Contáctenos",
      compliance: "Cumplimiento Legal Garantizado",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("pt-BR");

  const t = (path) => {
    const keys = path.split(".");
    return keys.reduce((acc, key) => acc?.[key], translations[language]) || path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
