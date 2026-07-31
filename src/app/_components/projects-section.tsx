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
    title: "BuscapEstoque — Sistema de Gestão & Finanças",
    subtitle: "Plataforma comercial em nuvem com API Spring Boot, Frontend React 18 e deploy automatizado na AWS",
    category: "Full Stack & DevOps",
    gradient: "from-emerald-500/20 via-emerald-900/10 to-transparent",
    description:
      "Plataforma comercial criada para ajudar pequenos e médios comerciantes no controle de estoque, categorias e pagamentos pendentes de clientes. Possui autenticação segura por token JWT, dashboard com alertas de reposição em tempo real, pipeline automatizada de integração contínua (CI/CD via GitHub Actions), back-end em nuvem AWS EC2 e front-end responsivo hospedado na Vercel.",
    technologies: ["Java 21", "Spring Boot 3", "React 18", "TanStack Query", "PostgreSQL", "Docker", "AWS EC2", "GitHub Actions"],
    link: "https://buscapestoque.vercel.app",
    images: [
      "/projects/estoque-1.png",
      "/projects/estoque-2.png",
      "/projects/estoque-3.png",
    ],
    features: [
      "Automação em Nuvem: Deploy automático na AWS EC2 (Docker/Nginx com SSL) via GitHub Actions e front-end na Vercel.",
      "Segurança & Controle: Login seguro com JWT (Auth0), interceptores automáticos de sessão e restrição de acesso por perfil.",
      "Gestão Comercial em Tempo Real: Dashboard com contadores dinâmicos, alerta de estoque baixo (≤ 5 un.) e controle de contas a receber.",
      "Interface Acessível & Responsiva: Front-end em React 18 em conformidade com padrões de acessibilidade (WCAG) para celular e PC.",
    ],
  },
  {
    id: "telegram-bot",
    title: "ShapeLog Bot — Assistente Fitness com IA",
    subtitle: "Assistente virtual no Telegram que interpreta mensagens de voz e texto com Google Gemini (Vertex AI)",
    category: "Back-end & Inteligência Artificial",
    gradient: "from-sky-500/20 via-sky-900/10 to-transparent",
    description:
      "Assistente virtual inteligente para Telegram projetado para simplificar a rotina de saúde e treinos do usuário. Utiliza Inteligência Artificial (Google Vertex AI - Gemini 2.5 Flash via Spring AI) para compreender relatos em áudio e texto natural, extraindo e calculando automaticamente calorias, macronutrientes, exercícios e cargas. Executado em containers isolados na nuvem Oracle Cloud.",
    technologies: ["Java 17", "Spring Boot 3", "Spring AI", "Google Vertex AI (Gemini)", "Telegram API", "PostgreSQL", "Docker", "Oracle Cloud"],
    link: "https://github.com/Savio-Marques",
    images: [
      "/projects/telegram%20bot%201.png",
      "/projects/telegram%20bot%202.png",
      "/projects/telegram%20bot%203.png",
    ],
    features: [
      "Processamento de Áudio por IA: Transcreve e interpreta áudios cotidianos extraindo alimentos e treinos automaticamente.",
      "Relatórios Diários Visuais: Acompanhamento em gráficos de metas nutricionais de calorias, proteínas, carboidratos e gorduras.",
      "Edição Rápida & Prática: Correção interativa de refeições ou séries por botões de clique rápido (Inline Buttons) no Telegram.",
      "Segurança & Nuvem: Controle de acesso restrito (Whitelist de usuários) rodando 24/7 em container Docker na Oracle Cloud.",
    ],
  },
  {
    id: "univox",
    title: "UniVox — Fórum & Rede Acadêmica",
    subtitle: "Plataforma colaborativa universitária desenvolvida em equipe",
    category: "Full Stack & Trabalho em Equipe",
    gradient: "from-purple-500/20 via-purple-900/10 to-transparent",
    description:
      "Plataforma web de comunicação criada para conectar estudantes e professores universitários, promovendo a troca de conhecimento e fóruns de discussão. Desenvolvida em equipe de 6 integrantes utilizando metodologia ágil Scrum com entregas semanais. Atuei na arquitetura da API em Python (Django 5.2) e na interface reativa em React com Material UI.",
    technologies: ["Python 3.13", "Django 5.2", "Django REST", "React.js", "PostgreSQL", "Docker", "Material UI", "Tailwind CSS"],
    link: "https://github.com/Savio-Marques/univox-backend",
    images: [
      "/projects/univox1.png",
      "/projects/univox2.png",
      "/projects/univox3.png",
    ],
    features: [
      "Gestão Ágil em Equipe: Organização em sprints semanais com papéis Scrum e acompanhamento continuo em quadro Kanban.",
      "Recursos de Comunicação: Sistema completo de postagens, curtidas em tempo real e suporte a comentários aninhados em árvore.",
      "Modelagem Avançada de Banco de Dados: Estrutura polimórfica em PostgreSQL para gerenciamento flexível de votos e conteúdos.",
      "Integração Fluida & Segura: Front-end em React integrado via Axios, verificação de e-mail e documentação interativa Swagger.",
    ],
  },
  {
    id: "raycasting",
    title: "Engine de Renderização 3D (Ray Tracing)",
    subtitle: "Motor de computação gráfica 3D fotorrealista construído do zero em C++17 puro",
    category: "Computação Gráfica & Alto Desempenho",
    gradient: "from-amber-500/20 via-amber-900/10 to-transparent",
    description:
      "Motor de Ray Tracing 3D interativo desenvolvido do zero em C++17 para a disciplina de Computação Gráfica na UFC. Demonstra alto domínio de programação de baixo nível e matemática aplicada, calculando iluminação realista (modelo Phong), sombras rígidas, texturas de imagem e seleção de objetos por clique de mouse.",
    technologies: ["C++17", "SDL2", "Dear ImGui", "STB Image", "Álgebra Linear 3D", "Make"],
    link: "https://github.com/Savio-Marques/cg-project",
    images: [
      "/projects/raycast%201.png",
      "/projects/raycast%202.png",
      "/projects/raycast%203.png",
    ],
    features: [
      "Simulação Gráfica Fotorrealista: Interseções analíticas de raio com esferas, cubos, cones, cilindros, planos e triângulos.",
      "Iluminação Avançada & Sombras: Cálculo de sombras rígidas (Shadow Rays) e modelos de luz ambiente, pontual, solar e de foco (Spotlight).",
      "Seleção por Clique (Ray Picking): Permite clicar com o mouse diretamente na tela 3D para identificar e selecionar objetos no espaço.",
      "Interface de Controle em Tempo Real: Painel gráfico (Dear ImGui) para ajustar luzes, câmera e materiais sem reiniciar a aplicação.",
    ],
  },
  {
    id: "seidel-jacobi",
    title: "Simulador de Abalos Sísmicos em WebAssembly",
    subtitle: "Calculadora de alta performance científica em C++ compilada para rodar nativamente no navegador",
    category: "Métodos Numéricos & WebAssembly",
    gradient: "from-emerald-500/20 via-indigo-900/10 to-transparent",
    description:
      "Aplicação de engenharia e métodos numéricos para resolução de sistemas lineares de grande porte aplicados à simulação de abalos sísmicos e deslocamentos de estruturas. O motor de cálculo de alta velocidade em C++ foi compilado diretamente para WebAssembly (WASM), permitindo executar simulações matemáticas complexas direto no navegador.",
    technologies: ["C++", "WebAssembly (Emscripten)", "JavaScript", "HTML5/CSS3", "Métodos Numéricos", "Scrum"],
    link: "https://metodos-numericos-1.vercel.app/",
    images: [
      "/projects/metodos%20numericos%201.png",
      "/projects/metodos%20numericos%202.png",
      "/projects/metodos%20numericos%203.png",
    ],
    features: [
      "Velocidade Nativa na Web: Código C++ compilado para WebAssembly (Emscripten) rodando no navegador com alta performance.",
      "Tratamento de Exceções & Estabilidade: Validação de critérios de convergência (Diagonal Dominante e Sassenfeld) e detecção de erros.",
      "Gestão Eficiente de Memória: Alocação dinâmica de memória em C++ sem vazamentos (zero memory leaks) na comunicação com o JavaScript.",
      "Trabalho em Equipe: Projeto acadêmico em time de 5 integrantes com foco em matemática computacional e desenvolvimento ágil.",
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
          Uma seleção dos meus principais projetos em engenharia de software, desenvolvimento full stack, inteligência artificial e computação gráfica.
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
                  Ver Projeto
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
