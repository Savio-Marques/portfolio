"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto space-y-8 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="flex items-center gap-2 text-white font-bold text-xl">
          <Briefcase className="text-violet-400" size={22} />
          <h3>Experiência Profissional</h3>
        </div>

        <div className="relative pl-6 border-l border-white/10 space-y-10">
          <div className="group">
            {/* Timeline Dot */}
            <span className="absolute -left-[5.5px] top-1.5 w-3 h-3 rounded-full bg-zinc-800 border-2 border-violet-500 group-hover:bg-violet-500 transition-colors" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <h4 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                Santa Cecília Transportes LTDA.
              </h4>
              <span className="text-xs font-mono-tech text-zinc-500">10/2019 – 10/2023</span>
            </div>

            <p className="text-xs font-mono-tech text-zinc-400 mb-4">
              Assistente Administrativo <span className="text-zinc-600">|</span> Fortaleza, CE
            </p>

            <ul className="space-y-2 text-sm text-zinc-300 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-violet-400 font-bold mt-1">•</span>
                <span>
                  Desenvolvi e implementei um sistema de planilhas unificado para controle de contas,
                  otimizando a rotina de diversos setores e reduzindo significativamente erros operacionais.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400 font-bold mt-1">•</span>
                <span>
                  Gerenciei o setor de contas a pagar, assegurando organização financeira e o cumprimento de
                  prazos críticos.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400 font-bold mt-1">•</span>
                <span>
                  Atuei com liderança contábil, desenvolvendo forte capacidade de comunicação e manuseio de
                  dados sensíveis.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
