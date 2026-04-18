"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { label: "Active Brands", value: "14,000+" },
  { label: "Daily Transactions", value: "2.4M+" },
  { label: "Revenue Generated", value: "$4.8B+" },
  { label: "Support Locations", value: "48+" },
];

export function FounderStats() {
  return (
    <section className="py-32 bg-white selection:bg-black selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Stats Grid */}
          <div className="w-full lg:w-1/2 space-y-12 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="text-[10px] font-black tracking-[0.4em] text-zinc-400 uppercase">
                Scale & Reach
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-black">
                WE EMPOWER THE <br />
                <span className="text-zinc-300 italic">NEXT GENERATION.</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <p className="text-4xl md:text-5xl font-black text-black tracking-tighter">
                    {stat.value}
                  </p>
                  <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="text-lg text-zinc-600 font-medium leading-relaxed max-w-lg">
              "Credmint was created to bridge the gap between creative vision and technical execution. We don't just provide tools; we provide the foundation for your brand's future."
            </p>
          </div>

          {/* Founder Image */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[60px] overflow-hidden group shadow-2xl"
            >
              <Image
                src="/images/founder_portrait.png"
                alt="Founder Portrait"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                <h3 className="text-3xl font-black text-white">Manish Kumar</h3>
                <p className="text-sm font-bold text-zinc-300 uppercase tracking-widest">Founder & CEO, Credmint</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
