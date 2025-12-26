import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Menu, X, Phone, Instagram, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
      {" "}
      {/* Top Bar */}{" "}
      <div className="bg-[#0f172a] text-white/80 py-2 px-4 text-xs md:text-sm border-b border-white/10">
        {" "}
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {" "}
          <div className="flex gap-4">
            {" "}
            <span className="flex items-center gap-2">
              <a
                href="https://wa.me/5531999587412?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20um%20especialista%20da%20Gomides%20%26%20Gomes.%20Vim%20pelo%20site."
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              Atendimento via WhatsApp
            </span>{" "}
            <span className="hidden md:flex items-center gap-2">
              <Mail className="w-4 h-4" /> cgomides.adv@gmail.com
            </span>{" "}
          </div>{" "}
          <div className="flex gap-3">
            {" "}
            <a
              href="https://www.instagram.com/gomidesegomes/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Navigation */}{" "}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="flex justify-between items-center h-20">
            {" "}
            {/* Logo */}{" "}
            <Link to={createPageUrl("Home")} className="flex flex-col">
              {" "}
              <span className="text-2xl font-serif font-bold text-[#0f172a] tracking-tight">
                GOMIDES & GOMES
              </span>{" "}
              <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[#b49b67] font-medium">
                Assessoria Jurídica e imobiliária
              </span>{" "}
            </Link>{" "}
            {/* Desktop Menu */}{" "}
            <nav className="hidden md:flex items-center gap-8">
              {" "}
              <Link
                to={createPageUrl("Home")}
                className="text-sm font-medium text-slate-600 hover:text-[#0f172a] transition-colors"
              >
                Início
              </Link>{" "}
              <a
                href="#about"
                className="text-sm font-medium text-slate-600 hover:text-[#0f172a] transition-colors"
              >
                Sobre Nós
              </a>{" "}
              <a
                href="#areas"
                className="text-sm font-medium text-slate-600 hover:text-[#0f172a] transition-colors"
              >
                Áreas de Atuação
              </a>{" "}
              <a
                href="#contact"
                className="text-sm font-medium text-slate-600 hover:text-[#0f172a] transition-colors"
              >
                Contato
              </a>{" "}
              <Button className="bg-[#b49b67] hover:bg-[#9a8455] text-white rounded-none px-6 font-medium">
                {" "}
                Agendar Consulta{" "}
              </Button>{" "}
            </nav>{" "}
            {/* Mobile Menu Button */}{" "}
            <button
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {" "}
              {isMenuOpen ? <X /> : <Menu />}{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
        {/* Mobile Menu */}{" "}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-white border-t border-slate-100"
          >
            {" "}
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {" "}
              <Link
                to={createPageUrl("Home")}
                className="text-base font-medium text-slate-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>{" "}
              <a
                href="#about"
                className="text-base font-medium text-slate-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </a>{" "}
              <a
                href="#areas"
                className="text-base font-medium text-slate-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Áreas de Atuação
              </a>{" "}
              <a
                href="#contact"
                className="text-base font-medium text-slate-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>{" "}
              <Button className="bg-[#b49b67] text-white w-full rounded-none">
                Agendar Consulta
              </Button>{" "}
            </div>{" "}
          </motion.div>
        )}{" "}
      </header>{" "}
      <main className="flex-grow"> {children} </main> {/* Footer */}{" "}
      <footer className="bg-[#0f172a] text-white pt-16 pb-8">
        {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {" "}
            <div className="col-span-1 md:col-span-2">
              {" "}
              <div className="mb-6">
                {" "}
                <span className="text-2xl font-serif font-bold text-white tracking-tight">
                  GOMIDES & GOMES
                </span>{" "}
                <p className="text-xs uppercase tracking-[0.2em] text-[#b49b67] mt-1">
                  Assessoria Jurídica e imobiliária
                </p>{" "}
              </div>{" "}
              <p className="text-slate-400 max-w-sm leading-relaxed">
                {" "}
                Transformamos conflitos em soluções com excelência técnica,
                ética e compromisso. Especialistas em Direito Imobiliário,
                Condominial, Bancário e Previdenciário.{" "}
              </p>{" "}
            </div>{" "}
            <div>
              {" "}
              <h4 className="text-lg font-serif font-semibold mb-6 text-[#b49b67]">
                Links Rápidos
              </h4>{" "}
              <ul className="space-y-3 text-slate-300">
                {" "}
                <li>
                  <Link
                    to={createPageUrl("Home")}
                    className="hover:text-white transition-colors"
                  >
                    Início
                  </Link>
                </li>{" "}
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    Sobre Nós
                  </a>
                </li>{" "}
                <li>
                  <a
                    href="#areas"
                    className="hover:text-white transition-colors"
                  >
                    Áreas de Atuação
                  </a>
                </li>{" "}
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Fale Conosco
                  </a>
                </li>{" "}
              </ul>{" "}
            </div>{" "}
            <div>
              {" "}
              <h4 className="text-lg font-serif font-semibold mb-6 text-[#b49b67]">
                Contato
              </h4>{" "}
              <ul className="space-y-3 text-slate-300">
                {" "}
                <li className="flex items-start gap-3">
                  {" "}
                  <Mail className="w-5 h-5 text-[#b49b67] shrink-0 mt-0.5" />{" "}
                  <span>cgomides.adv@gmail.com</span>{" "}
                </li>{" "}
                <li className="flex items-start gap-3">
                  {" "}
                  <a
                    href="https://wa.me/5531999587412?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20um%20especialista%20da%20Gomides%20%26%20Gomes.%20Vim%20pelo%20site."
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    <FaWhatsapp className="w-5 h-5 text-[#b49b67] shrink-0 mt-0.5" />{" "}
                  </a>
                  <span>(31) 99958-7412</span>{" "}
                </li>{" "}
                <li className="flex items-start gap-3">
                  {" "}
                  <a
                    href="https://www.instagram.com/gomidesegomes/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-[#b49b67] shrink-0 mt-0.5" />{" "}
                  </a>
                  <span>@gomidesegomes</span>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            {" "}
            <p>
              &copy; {new Date().getFullYear()} Gomides & Gomes. Todos os
              direitos reservados.
            </p>{" "}
            <p className="mt-2 md:mt-0">
              ®RP Holding Desenvolvido com tecnologia de ponta.
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </footer>{" "}
    </div>
  );
}
