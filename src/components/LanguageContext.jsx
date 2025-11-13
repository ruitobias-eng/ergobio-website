import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("pt-BR");

  const translations = {
    // ===========================
    // 🇧🇷 PORTUGUÊS
    // ===========================
    "pt-BR": {
      nav: {
        home: "Início",
        services: "Serviços",
        training: "Treinamentos",
        partners: "Parceiros",
        about: "Sobre Nós",
        contact: "Contato",
        proposal: "Solicitar Proposta",
        menu: "Menu",
        theme: "Tema",
        themeSystem: "Sistema",
        themeLight: "Claro",
        themeDark: "Escuro",
        language: "Idioma"
      },

      hero: {
        title: {
          main: "Soluções em",
          highlight: "Ergonomia"
        },
        text: "Soluções especializadas em Ergonomia e Saúde Ocupacional para empresas que buscam excelência no cuidado com seus colaboradores.",
        services: "Conheça Nossos Serviços",
        contact: "Fale Conosco",
        compliance: "Conformidade Legal Garantida",
        productivity: "+ Produtividade",
        imageAlt: "Dashboard mostrando soluções ergonômicas"
      },

      compliance: {
        badge: "NR-17",
        imageAlt: "Conformidade Legal NR-17",
        headerTag: "Conformidade Legal",
        title: "Conformidade Legal Garantida",
        description:
          "A ErgoBio é especialista em assegurar que sua empresa atenda plenamente às exigências da NR-17 e NR-01, transformando obrigações legais em oportunidades de melhoria contínua para a saúde e produtividade dos seus colaboradores.",
        stats: {
          percent: "100%",
          title: "Conformidade",
          subtitle: "Garantida",
        },
        features: {
          protection: {
            title: "Proteção Legal",
            desc: "Evite multas e passivos trabalhistas com conformidade total.",
          },
          certification: {
            title: "Certificação NR-17",
            desc: "Documentação completa e laudos técnicos especializados.",
          },
          improvement: {
            title: "Melhoria Contínua",
            desc: "Transforme obrigações legais em vantagens competitivas.",
          },
          safety: {
            title: "Segurança dos Colaboradores",
            desc: "Ambientes de trabalho mais seguros e produtivos.",
          },
        },
        listTitle: "Serviços Incluídos:",
        list: [
          "Laudo Ergonômico completo",
          "Análise de posto de trabalho",
          "Adequação às normas regulamentadoras",
          "Programa de prevenção de LER/DORT",
          "Treinamentos especializados",
          "Documentação para auditoria",
        ],
      },

      services: {
        tag: "Serviços Especializados",
        title: "Soluções Completas em Ergonomia",
        description:
          "Soluções completas e personalizadas para garantir a saúde ocupacional e conformidade legal da sua empresa.",
        specialized: "Especializado",
        includes: "Inclui:",
        benefits: "Benefícios:",
        learnMore: "Saiba Mais",
        ctaTitle: "Precisa de uma solução personalizada?",
        ctaDesc:
          "Nossa equipe está pronta para desenvolver um plano sob medida para as necessidades específicas da sua empresa.",
        ctaButton: "Solicitar Consultoria Personalizada",
        items: {
          aetTitle: "Análise Ergonômica do Trabalho (AET)",
          aetDesc:
            "A AET é um estudo aprofundado das condições de trabalho, visando identificar e avaliar riscos ergonômicos presentes no ambiente.",
          aetFeat: [
            "Diagnóstico completo",
            "Laudo detalhado",
            "Recomendações personalizadas",
            "Prevenção de LER/DORT",
          ],
          aetBen: [
            "Redução de afastamentos",
            "Aumento da produtividade",
            "Conformidade legal",
          ],
          aprTitle: "Avaliação Preliminar de Risco (APR)",
          aprDesc:
            "A APR é uma ferramenta essencial para a identificação rápida e inicial de riscos ergonômicos.",
          aprFeat: [
            "Identificação de riscos",
            "Priorização de ações",
            "Relatório executivo",
            "Plano de intervenção",
          ],
          aprBen: [
            "Prevenção eficaz",
            "Custo reduzido",
            "Rápida implementação",
          ],
          cteTitle: "Consultoria Técnica Ergonômica",
          cteDesc:
            "Oferecemos suporte especializado para implementar soluções ergonômicas customizadas às necessidades da sua empresa.",
          cteFeat: [
            "Soluções customizadas",
            "Acompanhamento contínuo",
            "Treinamentos especializados",
            "Otimização de processos",
          ],
          cteBen: [
            "Melhoria contínua",
            "Eficiência operacional",
            "Retorno sobre investimento",
          ],
          nr17Title: "Atendimento Legal (NR-17 e NR-01)",
          nr17Desc:
            "Garantimos total conformidade com as normas NR-17 e NR-01, ajudando sua empresa a evitar multas e manter um ambiente seguro.",
          nr17Feat: [
            "Conformidade total",
            "Documentação completa",
            "Defesa em auditorias",
            "Assessoria jurídica",
          ],
          nr17Ben: [
            "Segurança jurídica",
            "Evitação de multas",
            "Ambiente regulado",
          ],
        },
      },

      partners: {
        tag: "Empresas Parceiras",
        title: "Nossos Parceiros de Confiança",
        description:
          "Trabalhamos lado a lado com empresas e instituições que compartilham nosso compromisso com a excelência em ergonomia e bem-estar ocupacional.",
      },

      about: {
        tag: "Sobre a ErgoBio",
        title: "Excelência em Ergonomia e Engenharia Ocupacional",
        text: "A ErgoBio é especializada em soluções ergonômicas e em conformidade legal para empresas de todos os portes.",
        mission:
          "Garantir a saúde ocupacional e o bem-estar dos colaboradores.",
        vision:
          "Ser referência nacional em engenharia ergonômica e segurança do trabalho.",
        values:
          "Ética, Inovação, Comprometimento e Respeito às pessoas.",
      },

      training: {
        tag: "Capacitação e Desenvolvimento",
        title: "Treinamentos e Palestras",
        description:
          "Capacitação e conscientização para promover uma cultura de saúde, segurança e bem-estar organizacional.",
        ctaTitle: "Programas Customizados para sua Empresa",
        ctaDesc:
          "Desenvolvemos treinamentos e palestras sob medida com conteúdo relevante e aplicação prática imediata.",
        ctaButton1: "Agendar Diagnóstico Gratuito",
        ctaButton2: "Ver Conteúdo Programático",
        requestQuote: "Solicitar Orçamento",
        featuresTitle: "Conteúdo Abordado:",
        benefitsTitle: "Benefícios:",
        stats: [
          { number: "***", label: "Colaboradores Treinados" },
          { number: "***", label: "Satisfação dos Participantes" },
          { number: "***", label: "Redução de LER/DORT" },
        ],
        items: [
          {
            title: "Treinamento de Ergonomia Aplicada",
            description:
              "Aborda práticas ergonômicas essenciais para o dia a dia corporativo, com foco na prevenção de lesões e aumento da produtividade.",
            duration: "Duração: 4h",
            audience: "Público: Colaboradores e líderes",
            features: [
              "Postura e ajustes de estação de trabalho",
              "Pausas e alongamentos",
              "Identificação de riscos ergonômicos",
              "Boas práticas no home office",
            ],
            benefits: [
              "Melhoria do bem-estar físico",
              "Redução de afastamentos",
              "Mais engajamento no trabalho",
            ],
          },
          {
            title: "Palestra de Conscientização Ergonômica",
            description:
              "Apresentação dinâmica e educativa sobre a importância da ergonomia e prevenção de doenças ocupacionais.",
            duration: "Duração: 2h",
            audience: "Público: Todos os colaboradores",
            features: [
              "Conceitos básicos de ergonomia",
              "Impactos da má postura",
              "Ergonomia no dia a dia corporativo",
              "Exercícios e práticas simples",
            ],
            benefits: [
              "Aumento da conscientização",
              "Prevenção de doenças",
              "Cultura de autocuidado",
            ],
          },
        ],
      },

      contact: {
        tag: "Vamos Conversar",
        titleMain: "Entre em",
        titleHighlight: "Contato",
        subtitle:
          "Estamos prontos para ajudar sua empresa a alcançar um ambiente de trabalho mais saudável, seguro e produtivo.",
        phone: "Telefone",
        phoneDesc: "Horário comercial",
        email: "E-mail",
        emailDesc: "Respondemos em até 24h",
        location: "Localização",
        locationDesc: "Curitiba - PR — Atendemos em todo o Brasil",
        hours: "Horário de Atendimento",
        hoursWeek: "Segunda a Sexta",
        hoursTime: "8h às 18h",
        formTitle: "Envie sua Mensagem",
        formSubtitle: "Preencha o formulário e nossa equipe retornará em breve.",
        formName: "Nome Completo *",
        formEmail: "E-mail *",
        formCompany: "Empresa",
        formMessage: "Mensagem *",
        send: "Enviar Mensagem",
        sending: "Enviando...",
        success: "Mensagem enviada com sucesso!",
        error: "Erro ao enviar mensagem. Tente novamente.",
        placeholderName: "Digite seu nome completo",
        placeholderEmail: "Digite seu e-mail",
        placeholderCompany: "Digite o nome da empresa",
        placeholderMessage: "Digite sua mensagem aqui...",
        why: {
          title: "Por que escolher a ErgoBio?",
          list: [
            "Equipe técnica altamente especializada",
            "Atendimento em todo o Brasil",
            "Soluciones personalizadas para cada cliente",
            "Experiência comprovada em diversos setores",
          ],
        },
      },
      footer: {
        copyright: "© 2025 ErgoBio. Todos os direitos reservados.",
        companyName: "ErgoBio"
      },
    },

    // ===========================
    // 🇺🇸 ENGLISH VERSION - COMPLETED
    // ===========================
    en: {
      nav: {
        home: "Home",
        services: "Services",
        training: "Training",
        partners: "Partners",
        about: "About Us",
        contact: "Contact",
        proposal: "Request Quote",
        menu: "Menu",
        theme: "Theme",
        themeSystem: "System",
        themeLight: "Light",
        themeDark: "Dark",
        language: "Language"
      },

      hero: {
        title: {
          main: "Solutions in",
          highlight: "Ergonomics"
        },
        text: "Specialized Ergonomics and Occupational Health solutions for companies seeking excellence in employee care.",
        services: "Explore Our Services",
        contact: "Get in Touch",
        compliance: "Legal Compliance Guaranteed",
        productivity: "+ Productivity",
        imageAlt: "Dashboard showing ergonomic solutions"
      },

      compliance: {
        badge: "NR-17",
        imageAlt: "NR-17 Legal Compliance",
        headerTag: "Legal Compliance",
        title: "Guaranteed Legal Compliance",
        description:
          "ErgoBio specializes in ensuring that your company fully complies with the requirements of NR-17 and NR-01, turning legal obligations into continuous improvement opportunities for employee health and productivity.",
        stats: {
          percent: "100%",
          title: "Compliance",
          subtitle: "Guaranteed",
        },
        features: {
          protection: {
            title: "Legal Protection",
            desc: "Avoid fines and labor liabilities with full compliance.",
          },
          certification: {
            title: "NR-17 Certification",
            desc: "Complete documentation and specialized technical reports.",
          },
          improvement: {
            title: "Continuous Improvement",
            desc: "Turn legal obligations into competitive advantages.",
          },
          safety: {
            title: "Employee Safety",
            desc: "Safer and more productive workplaces.",
          },
        },
        listTitle: "Included Services:",
        list: [
          "Comprehensive ergonomic report",
          "Workstation analysis",
          "Compliance with regulatory standards",
          "Repetitive strain injury prevention program",
          "Specialized training sessions",
          "Audit-ready documentation",
        ],
      },

      services: {
        tag: "Specialized Services",
        title: "Complete Ergonomics Solutions",
        description:
          "Complete and customized solutions to ensure your company's occupational health and legal compliance.",
        specialized: "Specialized",
        includes: "Includes:",
        benefits: "Benefits:",
        learnMore: "Learn More",
        ctaTitle: "Need a customized solution?",
        ctaDesc:
          "Our team is ready to develop a tailored plan for your company's specific needs.",
        ctaButton: "Request Custom Consultation",
        items: {
          aetTitle: "Ergonomics Work Analysis (EWA)",
          aetDesc:
            "The EWA is an in-depth study of working conditions, aimed at identifying and evaluating ergonomic risks present in the environment.",
          aetFeat: [
            "Complete diagnosis",
            "Detailed report",
            "Personalized recommendations",
            "RSI/WMSD prevention",
          ],
          aetBen: [
            "Reduction in absenteeism",
            "Increased productivity",
            "Legal compliance",
          ],
          aprTitle: "Preliminary Risk Assessment (PRA)",
          aprDesc:
            "The PRA is an essential tool for quick and initial identification of ergonomic risks.",
          aprFeat: [
            "Risk identification",
            "Action prioritization",
            "Executive report",
            "Intervention plan",
          ],
          aprBen: [
            "Effective prevention",
            "Reduced costs",
            "Quick implementation",
          ],
          cteTitle: "Technical Ergonomics Consulting",
          cteDesc:
            "We offer specialized support to implement customized ergonomic solutions tailored to your company's needs.",
          cteFeat: [
            "Customized solutions",
            "Continuous monitoring",
            "Specialized training",
            "Process optimization",
          ],
          cteBen: [
            "Continuous improvement",
            "Operational efficiency",
            "Return on investment",
          ],
          nr17Title: "Legal Compliance (NR-17 and NR-01)",
          nr17Desc:
            "We guarantee full compliance with NR-17 and NR-01 standards, helping your company avoid fines and maintain a safe environment.",
          nr17Feat: [
            "Full compliance",
            "Complete documentation",
            "Audit defense",
            "Legal advisory",
          ],
          nr17Ben: [
            "Legal security",
            "Fine avoidance",
            "Regulated environment",
          ],
        },
      },

      partners: {
        tag: "Partner Companies",
        title: "Our Trusted Partners",
        description:
          "We work side by side with companies and institutions that share our commitment to excellence in ergonomics and occupational well-being.",
      },

      about: {
        tag: "About ErgoBio",
        title: "Excellence in Ergonomics and Occupational Engineering",
        text: "ErgoBio specializes in ergonomic solutions and legal compliance for companies of all sizes.",
        mission: "To ensure occupational health and employee well-being.",
        vision: "To be a national reference in ergonomic engineering and workplace safety.",
        values: "Ethics, Innovation, Commitment and Respect for people.",
      },

      training: {
        tag: "Training and Development",
        title: "Workshops and Lectures",
        description:
          "Training and awareness to promote a culture of health, safety, and organizational well-being.",
        ctaTitle: "Customized Programs for Your Company",
        ctaDesc:
          "We design tailored workshops and lectures with relevant content and immediate practical application.",
        ctaButton1: "Schedule Free Assessment",
        ctaButton2: "View Course Content",
        requestQuote: "Request Quote",
        featuresTitle: "Covered Topics:",
        benefitsTitle: "Benefits:",
        stats: [
          { number: "50+", label: "Employees Trained" },
          { number: "***", label: "Participant Satisfaction" },
          { number: "***", label: "RSI/DORT Reduction" },
        ],
        items: [
          {
            title: "Applied Ergonomics Training",
            description:
              "Covers essential ergonomic practices for the workplace, focusing on injury prevention and productivity improvement.",
            duration: "Duration: 4h",
            audience: "Audience: Employees and leaders",
            features: [
              "Posture and workstation adjustments",
              "Breaks and stretching exercises",
              "Identification of ergonomic risks",
              "Best practices for home office",
            ],
            benefits: [
              "Improved physical well-being",
              "Reduced absenteeism",
              "Increased engagement at work",
            ],
          },
          {
            title: "Ergonomic Awareness Lecture",
            description:
              "Dynamic and educational presentation on the importance of ergonomics and prevention of occupational diseases.",
            duration: "Duration: 2h",
            audience: "Audience: All employees",
            features: [
              "Basic ergonomics concepts",
              "Impacts of poor posture",
              "Everyday workplace ergonomics",
              "Simple and practical exercises",
            ],
            benefits: [
              "Greater awareness",
              "Disease prevention",
              "Culture of self-care",
            ],
          },
        ],
      },

      contact: {
        tag: "Let's Talk",
        titleMain: "Get in",
        titleHighlight: "Touch",
        subtitle:
          "We are ready to help your company achieve a healthier, safer, and more productive workplace.",
        phone: "Phone",
        phoneDesc: "Business hours",
        email: "Email",
        emailDesc: "Response within 24h",
        location: "Location",
        locationDesc: "Curitiba, Brazil — Nationwide service",
        hours: "Business Hours",
        hoursWeek: "Monday to Friday",
        hoursTime: "8 AM to 6 PM",
        formTitle: "Send a Message",
        formSubtitle:
          "Fill out the form and our team will get back to you shortly.",
        formName: "Full Name *",
        formEmail: "Email *",
        formCompany: "Company",
        formMessage: "Message *",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Error sending message. Please try again.",
        placeholderName: "Enter your full name",
        placeholderEmail: "Enter your email",
        placeholderCompany: "Enter your company name",
        placeholderMessage: "Type your message here...",
        why: {
          title: "Why choose ErgoBio?",
          list: [
            "Highly specialized technical team",
            "Nationwide service coverage",
            "Customized solutions for each client",
            "Proven experience in multiple sectors",
          ],
        },
      },
      footer: {
        copyright: "© 2025 ErgoBio. All rights reserved.",
        companyName: "ErgoBio"
      },
    },

    // ===========================
    // 🇪🇸 ESPAÑOL VERSION - COMPLETED
    // ===========================
    es: {
      nav: {
        home: "Inicio",
        services: "Servicios",
        training: "Capacitación",
        partners: "Socios",
        about: "Sobre Nosotros",
        contact: "Contacto",
        proposal: "Solicitar Cotización",
        menu: "Menú",
        theme: "Tema",
        themeSystem: "Sistema",
        themeLight: "Claro",
        themeDark: "Oscuro",
        language: "Idioma"
      },

      hero: {
        title: {
          main: "Soluciones en",
          highlight: "Ergonomía"
        },
        text: "Soluciones especializadas en Ergonomía y Salud Ocupacional para empresas que buscan excelencia en el cuidado de sus colaboradores.",
        services: "Explorar Servicios",
        contact: "Contáctenos",
        compliance: "Cumplimiento Legal Garantizado",
        productivity: "+ Productividad",
        imageAlt: "Dashboard mostrando soluciones ergonómicas"
      },

      compliance: {
        badge: "NR-17",
        imageAlt: "Cumplimiento Legal NR-17",
        headerTag: "Cumplimiento Legal",
        title: "Cumplimiento Legal Garantizado",
        description:
          "ErgoBio está especializada en asegurar que su empresa cumpla plenamente con los requisitos de la NR-17 y NR-01, transformando las obligaciones legales en oportunidades de mejora continua para la salud y productividad de sus colaboradores.",
        stats: {
          percent: "100%",
          title: "Cumplimiento",
          subtitle: "Garantizado",
        },
        features: {
          protection: {
            title: "Protección Legal",
            desc: "Evite multas e pasivos laborales con cumplimiento total.",
          },
          certification: {
            title: "Certificación NR-17",
            desc: "Documentación completa e informes técnicos especializados.",
          },
          improvement: {
            title: "Mejora Continua",
            desc: "Transforme obligaciones legales en ventajas competitivas.",
          },
          safety: {
            title: "Seguridad de los Colaboradores",
            desc: "Entornos de trabajo más seguros y productivos.",
          },
        },
        listTitle: "Servicios Incluidos:",
        list: [
          "Informe ergonómico completo",
          "Análisis del puesto de trabajo",
          "Adecuación a normas reglamentarias",
          "Programa de prevención de LER/DORT",
          "Capacitaciones especializadas",
          "Documentación para auditorías",
        ],
      },

      services: {
        tag: "Servicios Especializados",
        title: "Soluciones Completas en Ergonomía",
        description:
          "Soluciones completas y personalizadas para garantizar la salud ocupacional y conformidad legal de su empresa.",
        specialized: "Especializado",
        includes: "Incluye:",
        benefits: "Beneficios:",
        learnMore: "Saber Más",
        ctaTitle: "¿Necesita una solución personalizada?",
        ctaDesc:
          "Nuestro equipo está listo para desarrollar un plan a medida para las necesidades específicas de su empresa.",
        ctaButton: "Solicitar Consultoría Personalizada",
        items: {
          aetTitle: "Análisis Ergonómico del Trabajo (AET)",
          aetDesc:
            "El AET es un estudio profundo de las condiciones de trabajo, que busca identificar y evaluar riesgos ergonómicos presentes en el ambiente.",
          aetFeat: [
            "Diagnóstico completo",
            "Informe detallado",
            "Recomendaciones personalizadas",
            "Prevención de LER/DORT",
          ],
          aetBen: [
            "Reducción de ausentismos",
            "Aumento de productividad",
            "Conformidad legal",
          ],
          aprTitle: "Evaluación Preliminar de Riesgo (EPR)",
          aprDesc:
            "La EPR es una herramienta esencial para la identificación rápida e inicial de riesgos ergonómicos.",
          aprFeat: [
            "Identificación de riesgos",
            "Priorización de acciones",
            "Informe ejecutivo",
            "Plan de intervención",
          ],
          aprBen: [
            "Prevención efectiva",
            "Costo reducido",
            "Implementación rápida",
          ],
          cteTitle: "Consultoría Técnica Ergonómica",
          cteDesc:
            "Ofrecemos soporte especializado para implementar soluciones ergonómicas personalizadas a las necesidades de su empresa.",
          cteFeat: [
            "Soluciones personalizadas",
            "Seguimiento continuo",
            "Capacitaciones especializadas",
            "Optimización de procesos",
          ],
          cteBen: [
            "Mejora continua",
            "Eficiencia operacional",
            "Retorno de inversión",
          ],
          nr17Title: "Atención Legal (NR-17 y NR-01)",
          nr17Desc:
            "Garantizamos total conformidad con las normas NR-17 y NR-01, ayudando a su empresa a evitar multas y mantener un ambiente seguro.",
          nr17Feat: [
            "Conformidad total",
            "Documentación completa",
            "Defensa en auditorías",
            "Asesoría jurídica",
          ],
          nr17Ben: [
            "Seguridad jurídica",
            "Evitación de multas",
            "Ambiente regulado",
          ],
        },
      },

      partners: {
        tag: "Empresas Socias",
        title: "Nuestros Socios de Confianza",
        description:
          "Trabajamos codo a codo con empresas e instituciones que comparten nuestro compromiso con la excelencia en ergonomía y bienestar ocupacional.",
      },

      about: {
        tag: "Sobre ErgoBio",
        title: "Excelencia en Ergonomía e Ingeniería Ocupacional",
        text: "ErgoBio se especializa en soluciones ergonómicas y en conformidad legal para empresas de todos los tamaños.",
        mission: "Garantizar la salud ocupacional y el bienestar de los colaboradores.",
        vision: "Ser referencia nacional en ingeniería ergonómica y seguridad laboral.",
        values: "Ética, Innovación, Compromiso y Respeto a las personas.",
      },

      training: {
        tag: "Capacitación y Desarrollo",
        title: "Entrenamientos y Conferencias",
        description:
          "Capacitación y concientización para promover una cultura de salud, seguridad y bienestar organizacional.",
        ctaTitle: "Programas Personalizados para su Empresa",
        ctaDesc:
          "Desarrollamos entrenamientos y conferencias adaptados a sus necesidades con contenido relevante y práctico.",
        ctaButton1: "Agendar Diagnóstico Gratuito",
        ctaButton2: "Ver Contenido del Programa",
        requestQuote: "Solicitar Presupuesto",
        featuresTitle: "Temas Abordados:",
        benefitsTitle: "Beneficios:",
        stats: [
          { number: "50+", label: "Colaboradores Capacitados" },
          { number: "***", label: "Satisfacción de los Participantes" },
          { number: "***", label: "Reducción de LER/DORT" },
        ],
        items: [
          {
            title: "Entrenamiento de Ergonomía Aplicada",
            description:
              "Incluye prácticas ergonómicas esenciales para el trabajo diario, enfocadas en la prevención de lesiones y mejora de la productividad.",
            duration: "Duración: 4h",
            audience: "Público: Colaboradores y líderes",
            features: [
              "Postura y ajustes del puesto de trabajo",
              "Pausas y ejercicios de estiramiento",
              "Identificación de riesgos ergonómicos",
              "Buenas prácticas en el home office",
            ],
            benefits: [
              "Mejor bienestar físico",
              "Reducción del ausentismo",
              "Mayor compromiso laboral",
            ],
          },
          {
            title: "Conferencia de Concientización Ergonómica",
            description:
              "Presentación dinámica y educativa sobre la importancia de la ergonomía y la prevención de enfermedades laborales.",
            duration: "Duración: 2h",
            audience: "Público: Todos los colaboradores",
            features: [
              "Conceptos básicos de ergonomía",
              "Impactos de la mala postura",
              "Ergonomía en el trabajo diario",
              "Ejercicios simples y prácticos",
            ],
            benefits: [
              "Mayor concientización",
              "Prevención de enfermedades",
              "Cultura de autocuidado",
            ],
          },
        ],
      },

      contact: {
        tag: "Hablemos",
        titleMain: "Póngase en",
        titleHighlight: "Contacto",
        subtitle:
          "Estamos listos para ayudar a su empresa a lograr un entorno laboral más saludable, seguro y productivo.",
        phone: "Teléfono",
        phoneDesc: "Horario laboral",
        email: "Correo electrónico",
        emailDesc: "Respondemos en 24h",
        location: "Ubicación",
        locationDesc: "Curitiba - Brasil — Atención en todo el país",
        hours: "Horario de Atención",
        hoursWeek: "Lunes a Viernes",
        hoursTime: "8h a 18h",
        formTitle: "Envíe su Mensaje",
        formSubtitle:
          "Complete el formulario y nuestro equipo se pondrá en contacto pronto.",
        formName: "Nombre Completo *",
        formEmail: "Correo Electrónico *",
        formCompany: "Empresa",
        formMessage: "Mensaje *",
        send: "Enviar Mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado con éxito!",
        error: "Error al enviar el mensaje. Intente nuevamente.",
        placeholderName: "Ingrese su nombre completo",
        placeholderEmail: "Ingrese su correo electrónico",
        placeholderCompany: "Ingrese el nombre de su empresa",
        placeholderMessage: "Escriba su mensaje aquí...",
        why: {
          title: "¿Por qué elegir a ErgoBio?",
          list: [
            "Equipo técnico altamente especializado",
            "Atención en todo el territorio nacional",
            "Soluciones personalizadas para cada cliente",
            "Experiencia comprobada en múltiples sectores",
          ],
        },
      },
      footer: {
        copyright: "© 2025 ErgoBio. Todos los derechos reservados.",
        companyName: "ErgoBio"
      },
    },
  };

  const t = (path) => {
    const keys = path.split(".");
    const result = keys.reduce((acc, key) => acc?.[key], translations[language]);

    // ✅ Retorna o próprio valor se for array ou objeto
    if (Array.isArray(result) || typeof result === "object") return result;

    // ✅ Se for string ou número, retorna normalmente
    if (typeof result === "string" || typeof result === "number") return result;

    // ⚠️ Caso a chave não exista, retorna o path original (debug)
    return path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);