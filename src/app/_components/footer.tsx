import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-zinc-950/60 py-12 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <p className="text-sm font-semibold text-zinc-300">Sávio Marques</p>
          <p className="text-xs text-zinc-500 font-mono-tech">
            © {new Date().getFullYear()} - Desenvolvedor Back-end
          </p>
        </div>

        <div className="flex items-center gap-3 text-zinc-400">
          <a
            href="https://github.com/Savio-Marques"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-white/20 hover:text-white transition-all active:scale-95"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/savio-marques/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-white/20 hover:text-white transition-all active:scale-95"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:saviomarquessouza@gmail.com"
            className="p-2.5 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-white/20 hover:text-white transition-all active:scale-95"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};