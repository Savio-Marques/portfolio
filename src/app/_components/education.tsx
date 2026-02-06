"use client";

import { motion } from "framer-motion";

export const Education = () => {
  return (
    <section className="px-6 max-w-3xl mx-auto py-7 ">
      <div className="grid md:grid-cols-2 gap-12">
        {/*Formação */}
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
        >
          <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-700">
            Formação
          </h3>

          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white hover:text-purple-500 transition-colors duration-300">
              Ciência da Computação
            </h4>
            <p className=" text-xs text-gray-400 font-light">
              Universidade Federal do Ceará (UFC)
            </p>
            <p className="text-xs text-gray-600">
              Previsão de Conclusão: 12/2028
            </p>
          </div>
        </motion.div>

        {/* Idiomas */}
        <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
        >
          <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-700">
            Idiomas
          </h3>

          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-white font-bold text-xs hover:text-purple-500 transition-colors duration-300">Português: <span className="text-gray-500 font-normal text-xs">Nativo</span></span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-white font-bold text-xs hover:text-purple-500 transition-colors duration-300">Inglês: <span className="text-gray-500 font-normal text-xs">Intermediário</span></span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};