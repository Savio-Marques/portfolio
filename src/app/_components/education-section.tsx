"use client";

import { motion } from "framer-motion";
import { GraduationCap, Languages } from "lucide-react";

export const EducationSection = () => {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8"
      >
        {/* Formação */}
        <div className="p-6 rounded-2xl glass-card space-y-4">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <GraduationCap className="text-emerald-400" size={20} />
            <h3>Formação Acadêmica</h3>
          </div>

          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">Ciência da Computação</h4>
            <p className="text-xs text-zinc-400">Universidade Federal do Ceará (UFC)</p>
            <p className="text-xs font-mono-tech text-emerald-400 mt-2">
              Previsão de Conclusão: 12/2028
            </p>
          </div>
        </div>

        {/* Idiomas */}
        <div className="p-6 rounded-2xl glass-card space-y-4">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <Languages className="text-violet-400" size={20} />
            <h3>Idiomas</h3>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between py-1 border-b border-white/5">
              <span className="text-sm font-semibold text-white">Português</span>
              <span className="text-xs font-mono-tech text-zinc-400">Nativo</span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-sm font-semibold text-white">Inglês</span>
              <span className="text-xs font-mono-tech text-zinc-400">Intermediário</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
