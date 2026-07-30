"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

export const Hero = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex flex-col justify-center scroll-mt-20 w-full"
    >
      {/* Content Container (Constrained to max-w-5xl) */}
      <div className="w-full max-w-5xl mx-auto px-6 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-8 max-w-3xl"
        >
          {/* Availability Badge & Location */}
          <div className="flex items-center gap-3 text-xs font-mono-tech tracking-wider text-zinc-400">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-medium shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              Disponível para oportunidades
            </span>
            <span className="text-zinc-600">•</span>
            <span>Fortaleza, CE</span>
          </div>

          {/* Main Title & Subtitle */}
          <div className="space-y-4">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.08]">
              Sávio Marques
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-zinc-300 tracking-tight">
              Desenvolvedor Back-end & Full Stack
            </h2>
          </div>

          {/* Brief Pitch */}
          <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-[55ch]">
            Graduando em Ciência da Computação (UFC). Especializado em APIs REST escaláveis com{" "}
            <span className="text-zinc-200 font-semibold">Java Spring Boot</span>,{" "}
            <span className="text-zinc-200 font-semibold">PostgreSQL</span> e interfaces reativas com{" "}
            <span className="text-zinc-200 font-semibold">Next.js & React</span>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {/* Primary CTA */}
            <a
              href="#projetos"
              onClick={(e) => handleScrollTo(e, "#projetos")}
              className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold text-sm transition-all duration-200 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] border border-emerald-400/30 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Ver Projetos
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            {/* Secondary CTA */}
            <a
              href="#sobre"
              onClick={(e) => handleScrollTo(e, "#sobre")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800/90 text-zinc-200 hover:text-white border border-zinc-700/70 hover:border-violet-500/40 font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] shadow-md shadow-black/20"
            >
              Sobre mim
            </a>

            {/* Resume CTA */}
            <a
              href="/curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-900/50 hover:bg-zinc-800/80 text-zinc-300 hover:text-white border border-zinc-800/80 hover:border-zinc-700 font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <FileText size={16} className="text-zinc-400" />
              Currículo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
