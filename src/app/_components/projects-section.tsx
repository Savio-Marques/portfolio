"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  link: string;
  features: string[];
  category: string;
  gradient: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: "estoque",
    title: "API de Controle de Estoque",
    subtitle: "Sistema completo de gestão de inventário com segurança JWT",
    category: "Full Stack & Back-end",
    gradient: "from-emerald-500/20 via-emerald-900/10 to-transparent",
    description:
      "Plataforma Full Stack desenvolvida para gerenciamento eficiente de produtos. O back-end em Java garante a integridade dos dados e regras de negócio complexas, enquanto o front-end em React oferece uma experiência fluida para o usuário final.",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "JWT", "Swagger", "Git"],
    link: "https://github.com/Savio-Marques/estoque-backend",
    images: [
      "/projects/estoque-1.png",
      "/projects/estoque-2.png",
      "/projects/estoque-3.png",
    ],
    features: [
      "API RESTful completa com 24 endpoints documentados via Swagger.",
      "Autenticação e Autorização robusta com Spring Security e JWT.",
      "Front-end responsivo em React totalmente integrado à API.",
      "Logs estruturados e validações de dados rigorosas.",
    ],
  },
  {
    id: "univox",
    title: "Univox - Fórum Acadêmico",
    subtitle: "Plataforma colaborativa universitária desenvolvida em equipe",
    category: "Full Stack (Scrum)",
    gradient: "from-purple-500/20 via-purple-900/10 to-transparent",
    description:
      "Projeto acadêmico desenvolvido em equipe (6 pessoas) focado na interação entre estudantes universitários. Atuei como um dos desenvolvedores principais da arquitetura de back-end em Django e na estruturação do banco de dados.",
    technologies: ["Python", "Django", "React", "PostgreSQL", "Scrum", "JWT", "Git"],
    link: "https://github.com/Joelio-Pinheiro/UniVox-Backend",
    images: [
      "/projects/univox1.png",
      "/projects/univox2.png",
      "/projects/univox3.png",
    ],
    features: [
      "Metodologia ágil Scrum com sprints semanais e quadros Kanban.",
      "Sistema de postagens, comentários e curtidas em tempo real.",
      "Documentação completa de Requisitos e Histórias de Usuário.",
      "Entrega consistente de rotas seguras e limpas.",
    ],
  },
  {
    id: "telegram-bot",
    title: "Bot para Telegram",
    subtitle: "Automação inteligente e integração de serviços via API",
    category: "Back-end & Automação",
    gradient: "from-sky-500/20 via-sky-900/10 to-transparent",
    description:
      "Sistema de automação desenvolvido para a plataforma Telegram, integrando APIs externas para processamento de comandos em tempo real, respostas automáticas e gerenciamento de fluxo de tarefas.",
    technologies: ["Python", "Telegram Bot API", "REST APIs", "JSON", "Git"],
    link: "https://github.com/Savio-Marques",
    images: [
      "/projects/telegram%20bot%201.png",
      "/projects/telegram%20bot%202.png",
      "/projects/telegram%20bot%203.png",
    ],
    features: [
      "Integração nativa com a Telegram Bot API para manipulação de mensagens.",
      "Arquitetura assíncrona orientada a eventos para respostas instantâneas.",
      "Tratamento de exceções e logs para alta disponibilidade.",
      "Estrutura modular facilitando a adição de novos comandos.",
    ],
  },
  {
    id: "raycasting",
    title: "Gerador de Cenário Ray Casting",
    subtitle: "Renderizador 3D construído do zero em C++ puro",
    category: "Computação Gráfica",
    gradient: "from-amber-500/20 via-amber-900/10 to-transparent",
    description:
      "Projeto desenvolvido para a cadeira de Computação Gráfica na UFC. Trata-se de um motor de renderização no modelo ray casting capaz de calcular interseções de raios com formas geométricas e aplicar texturas e iluminação.",
    technologies: ["C++", "ImGui", "SDL2", "Stb Image", "Álgebra Linear", "Git"],
    link: "https://github.com/Savio-Marques/cg-project",
    images: [
      "/projects/raycast%201.png",
      "/projects/raycast%202.png",
      "/projects/raycast%203.png",
    ],
    features: [
      "Aplicação direta de álgebra linear e geometria analítica.",
      "Criação livre de cenários com iluminação Phong e sombras.",
      "Mapeamento e carregamento de texturas via Stb Image.",
      "Interface gráfica para ajuste de parâmetros em tempo real via ImGui.",
    ],
  },
  {
    id: "seidel-jacobi",
    title: "Calculadora de Sistemas por Seidel e Jacobi",
    subtitle: "Resolução iterativa de sistemas lineares de grande porte",
    category: "Métodos Numéricos",
    gradient: "from-emerald-500/20 via-indigo-900/10 to-transparent",
    description:
      "Ferramenta construída em equipe (5 pessoas) para resolução de Sistemas Lineares com N variáveis utilizando os métodos numéricos iterativos de Gauss-Seidel e Jacobi. O motor de cálculo em C++ foi compilado para WebAssembly.",
    technologies: ["C++", "JavaScript", "Emscripten", "WebAssembly", "Scrum", "Git"],
    link: "https://github.com/Tobnobre/Metodos-Numericos-Sistemas-Lineares-AbalosSismicos-matrizes-",
    images: [
      "/projects/metodos%20numericos%201.png",
      "/projects/metodos%20numericos%202.png",
      "/projects/metodos%20numericos%203.png",
    ],
    features: [
      "Cálculos de alta performance implementados em C++.",
      "Compilação para WebAssembly via Emscripten para rodar no navegador.",
      "Interface interativa para entrada flexível de matrizes e limiares.",
      "Metodologia ágil Scrum para divisão de tarefas do time.",
    ],
  },
];

export const ProjectsSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projetos" className="py-24 px-6 max-w-5xl mx-auto scroll-mt-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 space-y-4"
      >
        <span className="text-xs font-mono-tech text-emerald-400 uppercase tracking-widest">
          Portfólio & Trabalhos
        </span>
        <h2 className="font-display text-4xl md:text-6xl text-white">Projetos em Destaque</h2>
        <p className="text-zinc-400 text-base max-w-[60ch] leading-relaxed">
          Uma seleção dos meus principais projetos em back-end, computação gráfica e aplicações full
          stack, demonstrando código limpo, arquitetura sólida e resolução de problemas.
        </p>
      </motion.div>

      {/* Editorial Vertical Projects List */}
      <div className="space-y-24">
        {projects.map((project, index) => {
          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group flex flex-col gap-6 p-6 md:p-8 rounded-2xl glass-card relative overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`}
              />

              {/* Gallery Strip Header & Badge */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono-tech text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30 font-medium">
                  {project.category}
                </span>
                <span className="text-xs font-mono-tech text-zinc-500">
                  3 Telas • Clique para ampliar
                </span>
              </div>

              {/* Interactive Horizontal Gallery Accordion */}
              <div className="w-full flex flex-col md:flex-row gap-3 h-auto md:h-[340px]">
                {project.images.map((imgUrl, imgIdx) => (
                  <div
                    key={imgIdx}
                    onClick={() => setSelectedImage(imgUrl)}
                    className="relative overflow-hidden rounded-xl border border-white/10 bg-zinc-950 flex-1 md:hover:flex-[2.4] transition-all duration-500 ease-out group/img cursor-pointer shadow-lg shadow-black/40 min-h-[200px] md:min-h-0"
                  >
                    <img
                      src={imgUrl}
                      alt={`${project.title} - Screenshot ${imgIdx + 1}`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
                    />
                    
                    {/* Dark gradient overlay that fades on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent md:opacity-60 md:group-hover/img:opacity-0 transition-opacity duration-300 pointer-events-none" />

                    {/* Screenshot Badge */}
                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-zinc-900/90 border border-white/10 text-[10px] font-mono-tech text-zinc-300 backdrop-blur-md opacity-90 md:group-hover/img:opacity-100 transition-opacity">
                      Tela {imgIdx + 1}
                    </div>
                  </div>
                ))}
              </div>

              {/* Project Info Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-400 italic font-medium mt-1">
                    {project.subtitle}
                  </p>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800/90 border border-zinc-700/80 hover:border-emerald-500/50 text-xs font-semibold text-zinc-200 hover:text-white transition-all active:scale-95 shadow-sm hover:-translate-y-0.5 w-fit"
                >
                  <Github size={14} />
                  Ver no GitHub
                  <ExternalLink size={12} className="text-zinc-400 group-hover:text-emerald-400" />
                </a>
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-300 leading-relaxed max-w-[70ch]">
                {project.description}
              </p>

              {/* Features List */}
              <div className="grid md:grid-cols-2 gap-3 py-2">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-zinc-400">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono-tech font-medium text-zinc-300 bg-zinc-900/80 border border-zinc-800 rounded-md hover:border-zinc-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Lightbox Modal for Enlarged Screenshots */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <img
              src={selectedImage}
              alt="Ampliada"
              className="w-full h-full object-contain max-h-[85vh]"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-zinc-900/90 text-white text-xs font-mono-tech border border-white/20 hover:bg-zinc-800"
            >
              Fechar ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
