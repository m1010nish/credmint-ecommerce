"use client";

import { motion } from "framer-motion";

const logos = [
  "DESIGNRUSH", "WEBAWARDS", "AWWWARDS", "CSS DESIGN AWARDS", "BEHANCE", "DRIBBBLE", "FORBES", "TECHCRUNCH"
];

export function LogoBar() {
  return (
    <section className="py-20 bg-white overflow-hidden border-y border-zinc-100">
      <div className="flex flex-col items-center gap-10">

        <div className="relative flex w-full">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex items-center gap-20 whitespace-nowrap px-10"
          >
            {[...logos, ...logos].map((logo, index) => (
              <span
                key={index}
                className="text-2xl md:text-3xl font-black text-zinc-200 hover:text-black transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </motion.div>

          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
