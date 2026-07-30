"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Terminal, Code2, Cpu, Database, Layers } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  link: string;
  features: string[];
  category: string;
  icon: typeof Terminal;
  gradient: string;
  codeSnippet?: string;
}

const projects: Project[] = [
  {
    id: "estoque",
    title: "API de Controle de Estoque",
    subtitle: "Sistema completo de gestão de inventário com segurança JWT",
    category: "Full Stack & Back-end",
    icon: Database,
    gradient: "from-emerald-500/20 via-emerald-900/10 to-transparent",
    description:
      "Plataforma Full Stack desenvolvida para gerenciamento eficiente de produtos. O back-end em Java garante a integridade dos dados e regras de negócio complexas, enquanto o front-end em React oferece uma experiência fluida para o usuário final.",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "JWT", "Swagger", "Git"],
    link: "https://github.com/Savio-Marques/estoque-backend",
    codeSnippet: `@RestController
@RequestMapping("/api/v1/estoque")
public class EstoqueController {
    @PostMapping("/produtos")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ProdutoDTO> criar(@Valid @RequestBody ProdutoDTO dto) {
        return ResponseEntity.ok(estoqueService.salvar(dto));
    }
}`,
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
    icon: Layers,
    gradient: "from-purple-500/20 via-purple-900/10 to-transparent",
    description:
      "Projeto acadêmico desenvolvido em equipe (6 pessoas) focado na interação entre estudantes universitários. Atuei como um dos desenvolvedores principais da arquitetura de back-end em Django e na estruturação do banco de dados.",
    technologies: ["Python", "Django", "React", "PostgreSQL", "Scrum", "JWT", "Git"],
    link: "https://github.com/Joelio-Pinheiro/UniVox-Backend",
    codeSnippet: `class PostagemViewSet(viewsets.ModelViewSet):
    queryset = Postagem.objects.all().order_by('-data_criacao')
    serializer_class = PostagemSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(autor=self.request.user)`,
    features: [
      "Metodologia ágil Scrum com sprints semanais e quadros Kanban.",
      "Sistema de postagens, comentários e curtidas em tempo real.",
      "Documentação completa de Requisitos e Histórias de Usuário.",
      "Entrega consistente de rotas seguras e limpas.",
    ],
  },
  {
    id: "portfolio",
    title: "Portfólio Pessoal",
    subtitle: "Website pessoal desenvolvido com Next.js e Tailwind CSS",
    category: "Front-end & UI/UX",
    icon: Code2,
    gradient: "from-teal-500/20 via-teal-900/10 to-transparent",
    description:
      "Portfólio moderno construído para apresentar minha trajetória, projetos e habilidades técnicas. Projetado com estética dark tech premium, arquitetura single-page e animações fluidas.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "Figma", "Git"],
    link: "https://github.com/Savio-Marques/portfolio",
    codeSnippet: `export const metadata: Metadata = {
  title: "Sávio Marques | Desenvolvedor Back-end",
  description: "Portfólio de desenvolvimento web.",
};`,
    features: [
      "Desenvolvimento em Next.js com App Router e Server Components.",
      "Design System personalizado com Tailwind CSS e variáveis CSS.",
      "Animações sutis e responsividade aprimorada.",
      "Deploy contínuo na Vercel.",
    ],
  },
  {
    id: "raycasting",
    title: "Gerador de Cenário Ray Casting",
    subtitle: "Renderizador 3D construído do zero em C++ puro",
    category: "Computação Gráfica",
    icon: Cpu,
    gradient: "from-amber-500/20 via-amber-900/10 to-transparent",
    description:
      "Projeto desenvolvido para a cadeira de Computação Gráfica na UFC. Trata-se de um motor de renderização no modelo ray casting capaz de calcular interseções de raios com formas geométricas e aplicar texturas e iluminação.",
    technologies: ["C++", "ImGui", "SDL2", "Stb Image", "Álgebra Linear", "Git"],
    link: "https://github.com/Savio-Marques/cg-project",
    codeSnippet: `Vec3 color = calculateRayIntersection(ray, sceneObjects);
for (auto& light : sceneLights) {
    color += computePhongShading(intersectionPoint, normal, light);
}`,
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
    icon: Terminal,
    gradient: "from-emerald-500/20 via-indigo-900/10 to-transparent",
    description:
      "Ferramenta construída em equipe (5 pessoas) para resolução de Sistemas Lineares com N variáveis utilizando os métodos numéricos iterativos de Gauss-Seidel e Jacobi. O motor de cálculo em C++ foi compilado para WebAssembly.",
    technologies: ["C++", "JavaScript", "Emscripten", "WebAssembly", "Scrum", "Git"],
    link: "https://github.com/Tobnobre/Metodos-Numericos-Sistemas-Lineares-AbalosSismicos-matrizes-",
    codeSnippet: `void gaussSeidel(double** A, double* B, double* X, int n, double tol) {
    while (error > tol && iter < MAX_ITER) {
        for (int i = 0; i < n; i++) {
            double sum = B[i];
            for (int j = 0; j < n; j++) {
                if (i != j) sum -= A[i][j] * X[j];
            }
            X[i] = sum / A[i][i];
        }
    }
}`,
    features: [
      "Cálculos de alta performance implementados em C++.",
      "Compilação para WebAssembly via Emscripten para rodar no navegador.",
      "Interface interativa para entrada flexível de matrizes e limiares.",
      "Metodologia ágil Scrum para divisão de tarefas do time.",
    ],
  },
];

export const ProjectsSection = () => {
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
          const Icon = project.icon;
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

              {/* Mockup Preview Container */}
              <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-xl bg-zinc-950 border border-white/10 overflow-hidden relative flex flex-col shadow-lg shadow-black/40">
                {/* Window Control Header */}
                <div className="px-4 py-3 bg-zinc-900/90 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-xs font-mono-tech text-zinc-500">
                      {project.id}.src
                    </span>
                  </div>
                  <span className="text-[11px] font-mono-tech text-emerald-400 bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    {project.category}
                  </span>
                </div>

                {/* Code / Visual Mockup Content */}
                <div className="flex-1 p-4 md:p-6 font-mono-tech text-xs md:text-sm text-zinc-300 overflow-x-auto flex flex-col justify-between bg-zinc-950/90">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-emerald-400 shadow-sm">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-zinc-200 font-semibold">{project.title}</p>
                      <p className="text-zinc-500 text-xs">{project.subtitle}</p>
                    </div>
                  </div>

                  {project.codeSnippet && (
                    <pre className="my-3 p-3 rounded-lg bg-zinc-900/60 border border-white/5 text-zinc-400 overflow-x-auto text-[11px] md:text-xs leading-relaxed">
                      <code>{project.codeSnippet}</code>
                    </pre>
                  )}

                  <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-2 border-t border-white/5">
                    <span>Status: Concluído</span>
                    <span className="text-emerald-400">Git branch: main</span>
                  </div>
                </div>
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
    </section>
  );
};
