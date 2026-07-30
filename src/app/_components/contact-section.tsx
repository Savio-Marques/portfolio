"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText, ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";

const contactLinks = [
  {
    title: "E-mail",
    value: "saviomarquessouza@gmail.com",
    href: "mailto:saviomarquessouza@gmail.com",
    icon: Mail,
    accent: "hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
    badge: "Resposta rápida",
    color: "text-emerald-400",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/savio-marques",
    href: "https://www.linkedin.com/in/savio-marques/",
    icon: Linkedin,
    accent: "hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]",
    badge: "Rede profissional",
    color: "text-violet-400",
  },
  {
    title: "GitHub",
    value: "github.com/Savio-Marques",
    href: "https://github.com/Savio-Marques",
    icon: Github,
    accent: "hover:border-zinc-500/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]",
    badge: "Repositórios & código",
    color: "text-zinc-200",
  },
];

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("saviomarquessouza@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contato" className="py-24 px-6 max-w-5xl mx-auto space-y-16 scroll-mt-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <span className="text-xs font-mono-tech text-emerald-400 uppercase tracking-widest">
          Vamos conversar
        </span>
        <h2 className="font-display text-4xl md:text-6xl text-white">Contato</h2>
        <p className="text-zinc-400 text-base md:text-lg max-w-[55ch] leading-relaxed">
          Estou aberto a oportunidades de trabalho em back-end e full stack, projetos freelancers e parcerias.
        </p>
      </motion.div>

      {/* Direct Contact Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {contactLinks.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-2xl glass-card relative flex flex-col justify-between gap-6 group transition-all duration-300 ${item.accent}`}
            >
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-xl bg-zinc-900 border border-white/10 ${item.color}`}>
                  <Icon size={22} />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono-tech text-zinc-500 uppercase tracking-wider">
                  {item.badge}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono-tech text-zinc-400 truncate">{item.value}</p>
              </div>
            </motion.a>
          );
        })}
      </div>

      {/* Quick Action Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 rounded-2xl glass-card flex flex-col sm:flex-row items-center justify-between gap-6 border-emerald-500/20 bg-gradient-to-br from-emerald-950/20 via-zinc-950 to-zinc-950 shadow-xl"
      >
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-lg font-bold text-white">Prefere copiar o e-mail diretamente?</h3>
          <p className="text-xs font-mono-tech text-zinc-400">saviomarquessouza@gmail.com</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800/90 border border-zinc-700/80 hover:border-emerald-500/50 text-zinc-200 text-xs font-semibold transition-all hover:-translate-y-0.5 active:scale-95 shadow-sm"
          >
            {copied ? (
              <>
                <Check size={14} className="text-emerald-400" />
                Copiado!
              </>
            ) : (
              <>
                <Copy size={14} />
                Copiar E-mail
              </>
            )}
          </button>

          <a
            href="/curriculo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white text-xs font-semibold transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] border border-emerald-400/30 hover:-translate-y-0.5 active:scale-95"
          >
            <FileText size={14} />
            Baixar CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};
