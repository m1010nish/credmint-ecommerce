"use client";

import { motion } from "framer-motion";

const partners = [
  "After Effects", "Illustrator", "Figma", "Premiere", "Photoshop", "Jitter", "Rive", "Spline", "Lottie"
];

export function PartnerLogos() {
  return (
    <section className="py-12 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="bg-zinc-900/20 rounded-full border border-white/5 px-12 py-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
           {partners.map((partner, i) => (
             <motion.div
               key={partner}
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 0.4 }}
               whileHover={{ opacity: 1, scale: 1.05 }}
               transition={{ duration: 0.5 }}
               className="text-[10px] font-black italic text-white uppercase tracking-[0.4em] cursor-default select-none whitespace-nowrap"
             >
               {partner}
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
