"use client";

import { motion } from "framer-motion";
import { Code2, Server, Layout, Database, Wrench } from "lucide-react";

interface TechCategory {
  title: string;
  icon: typeof Code2;
  items: { name: string; slug: string; level?: string }[];
}

const techCategories: TechCategory[] = [
  {
    title: "Linguagens",
    icon: Code2,
    items: [
      { name: "Java", slug: "openjdk" },
      { name: "Python", slug: "python" },
      { name: "C++", slug: "cplusplus" },
      { name: "TypeScript", slug: "typescript" },
      { name: "JavaScript", slug: "javascript" },
    ],
  },
  {
    title: "Back-end",
    icon: Server,
    items: [
      { name: "Spring Boot", slug: "springboot" },
      { name: "Django", slug: "django" },
      { name: "Spring AI", slug: "spring" },
      { name: "Swagger", slug: "swagger" },
      { name: "JWT Auth", slug: "jsonwebtokens" },
    ],
  },
  {
    title: "Front-end & UI/UX",
    icon: Layout,
    items: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "HTML5 / CSS3", slug: "html5" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Figma", slug: "figma" },
    ],
  },
  {
    title: "Banco de Dados, Nuvem & DevOps",
    icon: Database,
    items: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Docker & Compose", slug: "docker" },
      { name: "AWS (EC2)", slug: "amazonwebservices" },
      { name: "Oracle Cloud (OCI)", slug: "oracle" },
      { name: "GitHub Actions", slug: "githubactions" },
      { name: "Nginx", slug: "nginx" },
    ],
  },
];

export const TechStackSection = () => {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto space-y-8 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-3"
      >
        <span className="text-xs font-mono-tech text-emerald-400 uppercase tracking-widest">
          Competências Técnicas
        </span>
        <h2 className="font-display text-3xl md:text-5xl text-white">
          Tecnologias & Ferramentas
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-[65ch] leading-relaxed">
          Ecossistema técnico utilizado nos meus projetos de desenvolvimento back-end, inteligência artificial, engenharia de software e aplicações web.
        </p>
      </motion.div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techCategories.map((cat, catIdx) => {
          const CategoryIcon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="p-5 rounded-2xl glass-card border border-white/5 space-y-4 hover:border-emerald-500/30 transition-all group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                <div className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-emerald-400 group-hover:scale-110 transition-transform">
                  <CategoryIcon size={18} />
                </div>
                <h3 className="text-base font-semibold text-white tracking-tight">
                  {cat.title}
                </h3>
              </div>

              {/* Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {cat.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/70 border border-zinc-800/80 hover:border-emerald-500/40 hover:bg-zinc-800/80 transition-all duration-200"
                  >
                    <img
                      src={`https://cdn.simpleicons.org/${tech.slug}/ffffff`}
                      alt={tech.name}
                      className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity shrink-0"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback if icon slug fails to load
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <span className="text-xs font-mono-tech font-medium text-zinc-300 truncate">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
