"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { InteractiveGlobe } from "./InteractiveGlobe";

const stats = [
  { label: "Brands Launched", value: "500+" },
  { label: "GMV Processed", value: "12CR+" },
  { label: "Orders Fulfilled", value: "2.5L+" },
  { label: "Uptime SLA", value: "99.9%" }
];

export function AboutSection() {
  return (
    <section className="py-24 bg-black overflow-hidden relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-black tracking-[0.4em] text-zinc-600 uppercase block mb-4"
          >
            [ ABOUT US ]
          </motion.span>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-8">
          
          {/* Stats Column */}
          <div className="col-span-12 md:col-span-2 flex flex-col gap-4">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-900/20 border border-white/[0.03] rounded-3xl p-6 flex flex-col justify-center items-center text-center flex-1 min-h-[140px] hover:bg-zinc-900/40 transition-colors"
              >
                <div className="text-3xl font-bold text-white tracking-tighter">{stat.value}</div>
                <div className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Partner Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="col-span-12 md:col-span-4 bg-[#0F0F0F] border border-white/[0.05] rounded-[48px] p-12 flex flex-col justify-between overflow-hidden group shadow-2xl"
          >
            <div className="relative h-64 flex items-center justify-center">
               <div className="text-[180px] font-black text-white/[0.02] group-hover:text-white/[0.04] transition-colors pointer-events-none select-none italic absolute">CM</div>
               <div className="w-56 h-56 rounded-full bg-zinc-400 opacity-5 blur-[100px] absolute" />
               <motion.div 
                 whileHover={{ scale: 1.05 }}
                 className="relative z-10 text-8xl font-black text-white tracking-tighter drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
               >
                  CM
               </motion.div>
            </div>
            <div className="space-y-4">
               <h3 className="text-3xl font-bold text-white tracking-tight">Partner</h3>
               <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                 Unlock The Full Potential Of Your Brand With Credmint's Built-In Tools For Merchants.
               </p>
            </div>
          </motion.div>

          {/* Location Globe Card - Refined for "Half Globe" look */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="col-span-12 md:col-span-6 bg-[#0F0F0F] border border-white/[0.05] rounded-[48px] p-12 flex flex-col overflow-hidden relative group min-h-[500px]"
          >
            <div className="space-y-2 relative z-20 pointer-events-none text-center mt-4">
               <h3 className="text-4xl md:text-5xl font-medium text-white tracking-tight leading-loose uppercase">
                 Based In <br/>
                 <span className="text-zinc-500 italic">Indore, India</span>
               </h3>
            </div>
            
            <div className="absolute inset-0 flex items-end justify-center">
               <div className="w-full h-full flex items-center justify-center translate-y-32">
                  <InteractiveGlobe />
               </div>
            </div>
            
            {/* Subtle Gradient Fade at the Bottom */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
          </motion.div>

          {/* Founder Card */}
          <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="col-span-12 md:col-span-8 bg-[#0F0F0F] border border-white/[0.05] rounded-[48px] p-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center group shadow-2xl"
          >
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-3xl border border-white/[0.05]">
              <Image 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                alt="Kumar Shanu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute inset-x-0 bottom-0 p-10">
                 <h4 className="text-3xl font-black text-white tracking-tighter">Kumar Shanu</h4>
                 <p className="text-orange-500 text-xs font-black uppercase tracking-[0.3em] mt-2">Founder & CEO</p>
              </div>
            </div>
            <div className="space-y-8">
               <div className="w-12 h-1 bg-orange-500 rounded-full" />
               <h3 className="text-4xl font-medium text-white tracking-tighter leading-none uppercase">The Founder</h3>
               <div className="space-y-6 text-zinc-500 text-base font-medium leading-relaxed max-w-md">
                  <p>
                    Jay Founded Credmint In 2019 After Spending The Early Part Of His Career In Agencies. His Ambition Has Always Been To Bring Movement Into Traditionally Static Brand Systems.
                  </p>
                  <p>
                    His Work Blends Art Direction, Motion, And Web Development, With A Focus On Cohesive, Motion-Driven Brand Systems. Working From Concept To Execution.
                  </p>
               </div>
            </div>
          </motion.div>

          {/* Brand Element Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="col-span-12 md:col-span-4 bg-[#0F0F0F] border border-white/[0.05] rounded-[48px] overflow-hidden relative group"
          >
            <Image 
               src="https://images.unsplash.com/photo-1541944743827-e04bb645d993?q=80&w=2070&auto=format&fit=crop"
               fill
               className="object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
               alt="Brand element"
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-24 h-24 rounded-full bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] flex items-center justify-center p-6 shadow-2xl">
                  <div className="w-full h-full border-2 border-white/20 rounded-full flex items-center justify-center">
                     <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
