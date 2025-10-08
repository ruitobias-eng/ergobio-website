import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    const response = await fetch("https://formspree.io/f/mjkvwzlo", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contato" className="py-24 bg-[var(--background)] transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            Entre em Contato
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-[var(--cor-texto)]">
            Estamos prontos para ajudar sua empresa a alcançar um ambiente de trabalho mais saudável e produtivo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-2xl bg-white dark:bg-[#1a1a1a]">
              <CardHeader>
                <CardTitle className="text-2xl text-[var(--cor-primaria)] dark:text-white">
                  Envie sua Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Seu nome completo"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="seu@email.com"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Como podemos ajudar?"
                      className="mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                  >
                    {status === "sending" ? "Enviando..." : "Enviar Mensagem"}
                    <Send className="ml-2 w-4 h-4" />
                  </Button>

                  {status === "success" && (
                    <p className="text-green-500 text-center mt-3">
                      ✅ Mensagem enviada com sucesso!
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-red-500 text-center mt-3">
                      ❌ Erro ao enviar. Tente novamente.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Informações de contato */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg">
                <Phone className="w-6 h-6 text-cyan-500" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[var(--cor-primaria)] dark:text-white">
                  Telefone
                </h3>
                <p className="text-[var(--cor-texto)]">(11) 99999-9999</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg">
                <Mail className="w-6 h-6 text-cyan-500" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[var(--cor-primaria)] dark:text-white">
                  E-mail
                </h3>
                <p className="text-[var(--cor-texto)]">contato@ergobio.com.br</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg">
                <MapPin className="w-6 h-6 text-cyan-500" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[var(--cor-primaria)] dark:text-white">
                  Localização
                </h3>
                <p className="text-[var(--cor-texto)]">São Paulo - SP, Brasil</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
