"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const techStack = [
  { name: "Java", slug: "openjdk" },
  { name: "Spring Boot", slug: "springboot" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Python", slug: "python" },
  { name: "C++", slug: "cplusplus" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Docker", slug: "docker" },
  { name: "Git", slug: "git" },
  { name: "Figma", slug: "figma" },
];

export const TechStackSection = () => {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto space-y-6 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="flex items-center gap-2 text-white font-bold text-xl">
          <Code2 className="text-emerald-400" size={22} />
          <h3>Tecnologias & Ferramentas</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-3 p-3 rounded-xl glass-card hover:border-emerald-500/30 transition-colors"
            >
              <img
                src={`https://cdn.simpleicons.org/${tech.slug}/ffffff`}
                alt={tech.name}
                className="w-5 h-5 opacity-80"
                loading="lazy"
              />
              <span className="text-xs font-mono-tech font-medium text-zinc-200">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
