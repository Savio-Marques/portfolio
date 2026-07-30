"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 px-6 max-w-5xl mx-auto space-y-8 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <span className="text-xs font-mono-tech text-emerald-400 uppercase tracking-widest">
          Sobre mim
        </span>
        <h2 className="font-display text-4xl md:text-6xl text-white">
          Sávio Marques de Souza
        </h2>

        <div className="space-y-4 text-zinc-300 leading-relaxed text-base md:text-lg max-w-[65ch]">
          <p>
            Graduando em Ciência da Computação pela Universidade Federal do Ceará (UFC), atuo como
            Desenvolvedor Full Stack com foco principal na construção de{" "}
            <span className="text-white font-medium">
              back-ends robustos, seguros e escaláveis
            </span>
            .
          </p>
          <p>
            Minha experiência técnica combina o desenvolvimento de APIs RESTful com{" "}
            <span className="text-emerald-400 font-medium">Java (Spring Boot)</span>, linguagens de alto
            desempenho como C++ e Python, banco de dados PostgreSQL, conteinerização com Docker e a criação
            de interfaces reativas e modernas com React e Next.js.
          </p>
        </div>

        <div className="pt-2">
          <a
            href="/curriculo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold text-sm transition-all duration-200 shadow-[0_0_18px_rgba(16,185,129,0.3)] hover:shadow-[0_0_22px_rgba(16,185,129,0.45)] border border-emerald-400/30 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <Download size={16} />
            Baixar Currículo (PDF)
          </a>
        </div>
      </motion.div>
    </section>
  );
};
