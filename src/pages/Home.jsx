import React from "react";
import Hero from "../components/home/Hero";
import Compliance from "../components/home/Compliance";
import Services from "../components/home/Services";
import Training from "../components/home/Training";
import About from "../components/home/About";
import Contact from "../components/home/Contact";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-[var(--background)] transition-colors duration-500">
      {/* HERO - Seção principal */}
      <section id="inicio">
        <Hero />
      </section>

      {/* CONFORMIDADE LEGAL */}
      <section id="conformidade">
        <Compliance />
      </section>

      {/* SERVIÇOS */}
      <section id="servicos">
        <Services />
      </section>

      {/* TREINAMENTOS */}
      <section id="treinamentos">
        <Training />
      </section>

      {/* SOBRE NÓS */}
      <section id="sobre">
        <About />
      </section>

      {/* CONTATO */}
      <section id="contato">
        <Contact />
      </section>
    </div>
  );
}
