import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Send, Clock, MessageCircle, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://formspree.io/f/mjkvwzlo", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(41) 9848-7876",
      description: "Horário comercial",
      gradientLight: "from-blue-600 to-cyan-600",
      gradientDark: "from-blue-400 to-cyan-400"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "tatiana@ergobio.com.br",
      description: "Respondemos em até 24h",
      gradientLight: "from-green-600 to-emerald-600",
      gradientDark: "from-green-400 to-emerald-400"
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "Curitiba - PR",
      description: "Atendemos em todo Brasil",
      gradientLight: "from-orange-600 to-amber-600",
      gradientDark: "from-orange-400 to-amber-400"
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: "Segunda a Sexta",
      description: "8h às 18h",
      gradientLight: "from-purple-600 to-pink-600",
      gradientDark: "from-purple-400 to-pink-400"
    }
  ];

  return (
    <section id="contato" className="py-24 bg-background transition-colors relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-secondary/20 dark:border-secondary/30 mb-6"
          >
            <MessageCircle className="w-4 h-4 text-secondary dark:text-secondary/80" />
            <span className="text-sm font-medium text-foreground dark:text-foreground/90">
              Vamos Conversar
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground dark:text-foreground/90">Entre em </span>
            <span className="bg-gradient-to-r from-secondary to-contraste dark:from-secondary/80 dark:to-contraste/80 bg-clip-text text-transparent">
              Contato
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground dark:text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para ajudar sua empresa a alcançar um ambiente de trabalho 
            mais <strong className="text-foreground dark:text-foreground/90">saudável, seguro e produtivo</strong>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="border border-border bg-card/50 dark:bg-card/30 backdrop-blur-sm hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${item.gradientLight} dark:${item.gradientDark} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-foreground dark:text-foreground/90 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-foreground dark:text-foreground/90 font-medium text-lg mb-1">
                          {item.content}
                        </p>
                        <p className="text-muted-foreground dark:text-muted-foreground/80 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-2xl p-6 border border-border"
            >
              <h4 className="font-semibold text-foreground dark:text-foreground/90 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary dark:text-secondary/80" />
                Por que escolher a ErgoBio?
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground/80">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-secondary dark:bg-secondary/80 rounded-full" />
                  Consultoria especializada em NR-17
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-secondary dark:bg-secondary/80 rounded-full" />
                  Resposta rápida e personalizada
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-secondary dark:bg-secondary/80 rounded-full" />
                  Soluções práticas e eficientes
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border border-border shadow-2xl dark:shadow-xl bg-card/50 dark:bg-card/30 backdrop-blur-sm overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 border-b border-border">
                <CardTitle className="text-2xl text-foreground dark:text-foreground/90 flex items-center gap-2">
                  <Send className="w-6 h-6 text-secondary dark:text-secondary/80" />
                  Envie sua Mensagem
                </CardTitle>
                <p className="text-muted-foreground dark:text-muted-foreground/80 mt-2">
                  Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                </p>
              </CardHeader>
              
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground dark:text-foreground/90 font-medium">
                      Nome Completo *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Seu nome completo"
                      className="bg-background dark:bg-background/80 border-border focus:border-secondary dark:focus:border-secondary/80 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground dark:text-foreground/90 font-medium">
                      E-mail *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="seu@email.com"
                      className="bg-background dark:bg-background/80 border-border focus:border-secondary dark:focus:border-secondary/80 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground dark:text-foreground/90 font-medium">
                      Empresa
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Sua empresa (opcional)"
                      className="bg-background dark:bg-background/80 border-border focus:border-secondary dark:focus:border-secondary/80 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground dark:text-foreground/90 font-medium">
                      Mensagem *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Conte-nos como podemos ajudar sua empresa..."
                      rows={5}
                      className="bg-background dark:bg-background/80 border-border focus:border-secondary dark:focus:border-secondary/80 transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-secondary to-contraste dark:from-secondary/80 dark:to-contraste/80 hover:from-secondary/90 hover:to-contraste/90 dark:hover:from-secondary/70 dark:hover:to-contraste/70 text-white shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 disabled:opacity-50"
                    size="lg"
                  >
                    {status === "sending" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="ml-2 w-5 h-5 transition-transform" />
                      </>
                    )}
                  </Button>

                  {/* Status Messages */}
                  <div className="min-h-[3rem]">
                    {status === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-green-700 dark:text-green-300"
                      >
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Mensagem enviada com sucesso!</p>
                          <p className="text-sm">Retornaremos em breve.</p>
                        </div>
                      </motion.div>
                    )}
                    
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-300"
                      >
                        <div className="w-5 h-5 flex items-center justify-center">⚠️</div>
                        <div>
                          <p className="font-medium">Erro ao enviar mensagem</p>
                          <p className="text-sm">Tente novamente ou entre em contato por outro meio.</p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}