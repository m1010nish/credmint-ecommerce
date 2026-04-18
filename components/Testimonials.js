"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Our entire fashion brand launched in under a week. The admin panel is so intuitive our team manages everything without tech help.",
    author: "Elena Rossi",
    role: "Founder, Velvet & Thread",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
  },
  {
    quote: "The analytics are insanely detailed. I can see exactly where my customers are dropping off. Revenue went up 3x in 6 months.",
    author: "Marcus Chen",
    role: "CEO, Urban Edge",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
  },
  {
    quote: "Global shipping used to be a nightmare. Credmint's integrated logistics simplified everything for our international expansion.",
    author: "Aisha Taylor",
    role: "Logistics Lead, Bloom House",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha"
  }
];

export function Testimonials() {
  return (
    <section id="stories" className="py-32 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          <span className="text-[10px] font-black tracking-[0.4em] text-zinc-500 uppercase">
            Success Stories
          </span>
          <h2 className="text-5xl md:text-8xl font-black tracking-tight">
            BRANDS THAT LOVE <br />
            <span className="text-zinc-500 italic">CREDMINT.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-white/5 p-12 rounded-[40px] flex flex-col justify-between hover:bg-zinc-800/80 transition-colors group"
            >
              <div className="space-y-8">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-zinc-400 group-hover:bg-accent group-hover:text-black transition-all">
                  <Quote size={24} fill="currentColor" />
                </div>
                <p className="text-xl md:text-2xl font-bold leading-relaxed text-zinc-200">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-12 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-zinc-800 border-2 border-white/10">
                  <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-black">{t.author}</h4>
                  <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
