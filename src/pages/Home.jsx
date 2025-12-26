import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Users2,
  Landmark,
  ShieldCheck,
  Scale,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { base44 } from "@/api/base44Client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Função para enviar os dados para o Base44
  const createLeadMutation = useMutation({
    mutationFn: (data) => base44.entities.Lead.create(data),
    onSuccess: () => {
      toast.success("Mensagem enviada com sucesso! Entraremos em contato.");
      setFormData({ name: "", phone: "", email: "", message: "" });
    },
    onError: () => {
      toast.error("Erro ao enviar. Verifique sua conexão.");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error("Nome e Telefone são obrigatórios.");
      return;
    }
    createLeadMutation.mutate(formData);
  };

  const services = [
    {
      icon: Building2,
      title: "Direito Imobiliário",
      description: "Assessoria em compra, venda e regularização de imóveis.",
    },
    {
      icon: Users2,
      title: "Direito Condominial",
      description:
        "Consultoria para síndicos e gestão de conflitos em condomínios.",
    },
    {
      icon: Landmark,
      title: "Direito Bancário",
      description: "Defesa contra juros abusivos e revisões contratuais.",
    },
    {
      icon: ShieldCheck,
      title: "Direito Previdenciário",
      description: "Planejamento, aposentadorias e benefícios do INSS.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0f172a]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/80 to-[#0f172a]/40 z-10" />
          <img
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Escritório"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Transformamos <span className="text-[#b49b67]">conflitos</span> em
              soluções.
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl font-light">
              Atuação especializada para proteger seu patrimônio e garantir seus
              direitos.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-[#b49b67] hover:bg-[#9a8455] rounded-none px-8"
              >
                Agendar Consulta
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção Sobre (id="about") */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664"
            className="rounded shadow-xl"
            alt="Sobre"
          />
          <div>
            <h2 className="text-[#b49b67] font-bold uppercase tracking-widest text-sm mb-4">
              Sobre o Escritório
            </h2>
            <h3 className="text-3xl font-serif font-bold mb-6">
              Advocacia moderna e ética.
            </h3>
            <p className="text-slate-600 mb-4">
              A Gomides & Gomes oferece atendimento personalizado e
              transparente, com foco total no resultado para o cliente.
            </p>
            <div className="space-y-3">
              {[
                "Atendimento Humanizado",
                "Estratégia Assertiva",
                "Segurança Jurídica",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="text-[#b49b67] w-5 h-5" /> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção Áreas (id="areas") */}
      <section id="areas" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold">
              Nossas Áreas de Atuação
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Card
                key={i}
                className="border-none shadow-sm hover:shadow-md transition"
              >
                <CardHeader>
                  <s.icon className="w-10 h-10 text-[#b49b67] mb-4" />
                  <CardTitle>{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600 text-sm">
                  {s.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Contato (id="contact") */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Fale Conosco</h2>
            <p className="text-slate-600 mb-8">
              Estamos prontos para ouvir seu caso e oferecer a melhor estratégia
              jurídica.
            </p>
            <div className="bg-amber-50 p-6 border-l-4 border-amber-400">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <AlertCircle className="w-5 h-5" /> Alerta
              </div>
              <p className="text-sm text-amber-800">
                Nunca solicitamos pagamentos via WhatsApp para liberação de
                alvarás.
              </p>
            </div>
          </div>

          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Telefone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                <Input
                  placeholder="E-mail"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <Textarea
                placeholder="Como podemos ajudar?"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <Button
                type="submit"
                className="w-full bg-[#0f172a] text-white"
                disabled={createLeadMutation.isPending}
              >
                {createLeadMutation.isPending
                  ? "Enviando..."
                  : "Enviar Mensagem"}
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}
