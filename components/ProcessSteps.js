"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Sign Up",
    desc: "Create Your Credmint Account In 2 Minutes. No Credit Card Needed To Start.",
    image: "https://images.unsplash.com/photo-1558444479-c8a51e6261bc?q=80&w=2070&auto=format&fit=crop"
  },
  {
    number: "02",
    title: "Brand Your Store",
    desc: "Upload Your Logo, Set Your Colors, Add Your Products — All From The Admin Panel.",
    image: "https://images.unsplash.com/photo-1620392330107-7176a917e768?q=80&w=2070&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "Go Live",
    desc: "Connect Your Domain (Or Use Ours), Flip The Switch, And Start Selling.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
  }
];

export function ProcessSteps() {
  return (
    <section className="py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-24 space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black tracking-[0.5em] text-zinc-600 uppercase block"
          >
            [ SIMPLE PROCESS ]
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-8xl font-medium tracking-tight text-white uppercase leading-[0.9] max-w-4xl"
          >
            FROM ZERO TO LIVE <br /> IN 3 STEPS
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-zinc-600 text-lg font-medium tracking-tight"
          >
            No Developers. No Designers. No Waiting. You're In Control.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="bg-[#0D0D0D] rounded-[56px] border border-white/[0.03] p-16 relative overflow-hidden group hover:border-white/[0.1] transition-all duration-700 shadow-2xl"
            >
              {/* Background Number */}
              <div className="absolute top-12 right-12 text-[140px] font-black text-white/[0.01] select-none pointer-events-none group-hover:text-white/[0.03] transition-all duration-700 italic leading-none">
                 {step.number}
              </div>

              {/* 3D Icon Mockup Placeholder */}
              <div className="relative w-full aspect-square mb-12 flex items-center justify-center p-4">
                 <div className="absolute inset-x-0 bottom-4 h-1/2 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent z-10" />
                 
                 {/* 3D Floating Effect Card */}
                 <motion.div 
                   whileHover={{ y: -10, rotate: -2 }}
                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
                   className="relative w-full h-full shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] rounded-[40px] overflow-hidden border border-white/10"
                 >
                    <Image
                       src={step.image}
                       alt={step.title}
                       fill
                       className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                    />
                    
                    {/* Faux 3D Overlay Element */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                 </motion.div>
              </div>

              {/* Text Content */}
              <div className="space-y-6 relative z-10">
                 <h3 className="text-4xl font-bold text-white tracking-tighter">{step.title}</h3>
                 <p className="text-zinc-500 text-base font-medium leading-relaxed max-w-[280px]">
                   {step.desc}
                 </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
