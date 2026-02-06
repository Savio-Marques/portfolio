"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  link: string;
  features: string[];
}

const projects: Project[] = [
  {
    title: "API de Controle de Estoque",
    subtitle: "Sistema completo de gestão de inventário com segurança JWT.",
    description: "Plataforma Full Stack desenvolvida para gerenciamento eficiente de produtos. O back-end em Java garante integridade dos dados, enquanto o front-end em React oferece uma experiência fluida para o usuário final.",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "JWT", "Swagger", "SL4J", "Git"],
    link: "https://github.com/Savio-Marques/estoque-backend",
    features: [
      "API RESTful com 24 endpoints documentados via Swagger.",
      "Autenticação e Autorização segura com Spring Security e JWT.",
      "Front-end responsivo em React integrado totalmente à API.",
      "Logs detalhados com SL4J e validações de dados robustas."
    ]
  },
  {
    title: "Univox - Fórum Acadêmico",
    subtitle: "Plataforma colaborativa desenvolvida com metodologias ágeis.",
    description: "Projeto acadêmico desenvolvido em equipe (6 pessoas) focado na interação entre alunos. Atuei na arquitetura do back-end e na implementação das regras de negócio principais.",
    technologies: ["Python", "Django", "React", "PostgreSQL", "Scrum", "Kanban", "JWT", "Git"],
    link: "https://github.com/Joelio-Pinheiro/UniVox-Backend",
    features: [
      "Desenvolvimento ágil utilizando Scrum e Kanban.",
      "Sistema de postagens, comentários e curtidas em tempo real.",
      "Documentação completa de Requisitos e Histórias de Usuário.",
      "Entrega consistente de features ao longo de várias Sprints."
    ]
  },
  {
    title: "Portifólio",
    subtitle: "Meu site de portifólio pessoal.",
    description: "Portifólio desenvolvido para prática em Front-end, apresentação e exibição de projetos pessoais ou acadêmicos.",
    technologies: ["Next.js", "Tailwind CSS", "Typescript", "Frame motion", "Figma", "Git"],
    link: "https://github.com/Savio-Marques/portfolio",
    features: [
      "Desenvolvimento utilizando Next.js e estilizado com Tailwind CSS.",
      "Planejamento inicial no Figma e Photoshop.",
      "Animações fluidas com frame motion.",
      "Feito deploy na vercel, plataforma do próprio Next.js."
    ]
  },
  {
    title: "Gerador de cenário Ray Casting",
    subtitle: "Trabalho feito durante a cadeira de Computação Gráfica na UFC.",
    description: "Código de renderização no modelo ray casting construido em C++ puro.",
    technologies: ["C++", "ImGui", "SDL2", "Stb Image", "Git"],
    link: "https://github.com/Savio-Marques/cg-project",
    features: [
      "Prática profunda de lógica e álgebra linear",
      "Criação livre de cenário e forma geométrica.",
      "Carregamento de texturas e estilização de materiais.",
      "Interface gráfica feita em ImGui com SDL2 para janela de visualização."
    ]
  },
  {
    title: "Calculadora de sistemas por Seidel e Jacobi",
    subtitle: "Trabalho em equipe feito na cadeira Métodos Numéricos na UFC.",
    description: "Calculadora construida em equipe (5 pessoas) para resolução de Sistemas com N variáveis por métodos iterativos de Seidel e Jacobi.",
    technologies: ["C++", "Javascript", "Emscripten", "Scrum", "Git"],
    link: "https://github.com/Tobnobre/Metodos-Numericos-Sistemas-Lineares-AbalosSismicos-matrizes-",
    features: [
      "Desenvolvimento em C++ para a resolução e Javascript puro para interface.",
      "Entradas personalizaveis(Tamanho da matriz, limiar, valores).",
      "Scrum foi usado como metodologia de desenvolvimento e organização de tasks.",
      "Utilização de Git para versionamento de código"
    ]
  }
];

export const Projects = () => {
  return (
    <section className="px-6 max-w-2xl mx-auto">
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-5 border-b border-gray-700"
      >
        Projetos em Destaque
      </motion.h3>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group"
          >
            {/* Cabeçalho */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-1 ">
              <h2 className="text-xl font-bold text-white group-hover:text-green-500 transition-colors">
                {project.title}
              </h2>
              
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-gray-400 border border-gray-800 rounded-full hover:border-gray-600 hover:text-white transition-colors w-fit "
              >  Ver no GitHub
                <ExternalLink size={12} />
              </a>
            </div>

            <div className="flex items-center gap-3 my-4">
            <div className="w-[0.1rem] h-6 bg-white rounded-lg group-hover:bg-green-600 transition-colors"/>
              <p className=" text-xs text-gray-300 italic font-medium">
                {project.subtitle}
              </p>
            </div>

            {/* Descrição Principal */}
            <p className="text-xs text-gray-300 leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Lista de Features */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                  <span className="group-hover:text-green-500 transition-colors">•</span>
                  {feature}
                </div>
              ))}
            </div>

            {/* Tecnologias) */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 text-xs font-bold text-gray-300 bg-gray-900/50 border border-gray-800 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};