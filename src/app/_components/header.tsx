"use client";

import { motion } from "framer-motion";

export const Header = () => {
  return (
    <section className="pt-20 px-6 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-start gap-6"
      >
        <div className="space-y-2">
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Sávio Marques
          </h1>
          <h2 className=" text-white font-medium">
            Desenvolvedor Back-end
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 text-[10px] text-gray-300 uppercase tracking-wider font-semibold">
            <span className="flex items-center gap-1">
                <span className="text-green-600">•</span> Fortaleza, CE / <span className="text-orange-500">•</span> saviomarquessouza@gmail.com
            </span>
        </div>
      </motion.div>
    </section>
  );
};