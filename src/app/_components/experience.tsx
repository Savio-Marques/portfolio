"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Santa Cecília Transportes LTDA.",
    role: "Assistente Administrativo",
    period: "10/2019 – 10/2023",
    location: "Fortaleza, CE",
    description: [
      "Desenvolvi e implementei um sistema de planilhas unificado para controle de contas, otimizando a rotina de diversos setores e reduzindo significativamente a margem de erros operacionais.",
      "Gerenciei o setor de contas a pagar, assegurando organização financeira e o cumprimento rigoroso de prazos críticos.",
      "Atuei diretamente com a liderança contábil, desenvolvendo forte capacidade de comunicação e responsabilidade no manuseio de dados sensíveis do negócio."
    ]
  }
];

export const Experience = () => {
  return (
    <section className="px-6 max-w-2xl mx-auto py-16">
      {/* Título da Seção */}
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-12 border-b border-gray-700"
      >
        Experiência Profissional
      </motion.h3>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative pl-8 border-l border-gray-800 hover:border-gray-600 transition-colors duration-300"
          >
            {/* Bolinha na linha do tempo  */}
            <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-800 group-hover:bg-orange-500 transition-colors duration-300" />

            {/* Cabeçalho */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h4 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                {exp.company}
              </h4>
              <span className="text-xs font-medium text-gray-500 tabular-nums">
                {exp.period}
              </span>
            </div>

            {/* Cargo e Localização */}
            <div className="text-xs text-gray-400 mb-6 font-medium">
              {exp.role} <span className="text-gray-600 mx-2">|</span> {exp.location}
            </div>

            {/* Lista de Atividades */}
            <ul className="space-y-3">
              {exp.description.map((item, idx) => (
                <li key={idx} className="text-gray-300 text-xs leading-relaxed flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 bg-gray-300 rounded-full flex-shrink-0 group-hover:bg-orange-500 transition-colors" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};