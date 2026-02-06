"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, FileText } from "lucide-react"; // Ícones


export const About = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // Só anima uma vez
            transition={{ delay: 0.2 }}
            className="px-6 max-w-3xl mx-auto py-10"
        >

            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-700">
                Sobre Mim
            </h3>

            <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                <p>
                    Graduando em Ciência da Computação pela UFC, atuo como Desenvolvedor Full Stack com foco principal na construção de back-ends robustos e escaláveis. Minha experiencia combina  de Java (Spring Boot),
                    C++ e Python e interfaces modernas em React e Next.js.
                </p>
                <p>
                    Atuo principalmente com Java Spring Boot na criação de APIs REST, React e Next.js para integração de telas.
                    Tenho experiencias sólidas em C++ e Python, conteinerização com Docker e banco de dados relacionais (PostgreSQL), além de versinamento com Git,
                    criação de telas com Figma e testes unitários.
                </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-7">
                <a
                    href={"https://www.linkedin.com/in/savio-marques/"}
                    target="_blank"
                    className="
                        flex items-center gap-2 px-4 py-[0.3rem]
                        bg-[#111] border border-gray-800 rounded-sm 
                        text-gray-300 hover:border-green-600 hover:bg-[#1a1a1a] 
                        transition-all duration-400 text-sm font-medium
                    "
                >
                    <Linkedin className="size-3" />
                    Linkedin
                </a>
                <a
                    href={"https://github.com/Savio-Marques"}
                    target="_blank"
                    className="
                        flex items-center gap-2 px-4 py-[0.3rem]
                        bg-[#111] border border-gray-800 rounded-sm
                        text-gray-300 hover:text-white hover:border-orange-600 
                        transition-all duration-400 text-sm font-medium
                    "
                >
                    <Github className="size-3" />
                    GitHub
                </a>
                <a
                    href={"/curriculo.pdf"}
                    target="_blank"
                    className="
                        flex items-center gap-2 px-4 py-[0.3rem] 
                        bg-[#111] border border-gray-800 rounded-sm 
                        text-gray-300 hover:text-white hover:border-purple-500 
                        transition-all duration-400 text-sm font-medium
                    "
                >
                    <FileText className="size-3" />
                    Currículo
                </a>
            </div>

        </motion.section>
    );
};