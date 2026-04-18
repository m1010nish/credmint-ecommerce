"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "AI Agents for Mortgage",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    span: "md:col-span-8 col-span-12",
    aspect: "aspect-[16/10] md:aspect-auto md:h-[500px]"
  },
  {
    title: "Eco Watch Pro",
    category: "Device UI",
    image: "https://images.unsplash.com/photo-1510017192662-794576302528?q=80&w=2070&auto=format&fit=crop",
    span: "md:col-span-4 col-span-12",
    aspect: "aspect-square md:aspect-auto md:h-[500px]"
  },
  {
    title: "Wildly Wyoming",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    span: "col-span-12",
    aspect: "aspect-[16/6]"
  },
  {
    title: "Jeremie Bouchard",
    category: "Editorial",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    span: "md:col-span-4 col-span-12",
    aspect: "aspect-[4/5]"
  },
  {
    title: "Enzo Drew",
    category: "Luxury Shop",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    span: "md:col-span-4 col-span-12",
    aspect: "aspect-[4/5]"
  },
  {
    title: "KIDFU",
    category: "Creator Marketplace",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop",
    span: "md:col-span-4 col-span-12",
    aspect: "aspect-[4/5]"
  }
];

export function FeaturedWork() {
  return (
    <section className="py-24 bg-[#EDE9E1]">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-medium tracking-tighter text-[#1A1A1A]"
          >
            FEATURED WORK
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="mb-2"
          >
            <Link href="/portfolio" className="text-[10px] font-black italic text-zinc-400 hover:text-black transition-colors uppercase tracking-[0.2em]">
              All Work
            </Link>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-8 md:gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`${project.span} relative group overflow-hidden rounded-[40px] bg-zinc-800 shadow-2xl`}
            >
              <div className={`${project.aspect} relative overflow-hidden`}>
                 <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 ease-out"
                 />
                 
                 {/* Decorative Overlay for Wyoming (Centered) */}
                 {project.title === "Wildly Wyoming" && (
                   <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                      <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="space-y-4"
                      >
                         <div className="text-white text-7xl md:text-9xl font-black tracking-tighter opacity-80 leading-none">W</div>
                         <div className="text-white text-xl md:text-3xl font-black uppercase tracking-[0.5em]">WILDLY<br/>WYOMING</div>
                      </motion.div>
                   </div>
                 )}

                 {/* Card Static Overlay (Bottom Info) */}
                 <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                       <span className="text-white/60 text-[10px] font-bold tracking-[0.3em] uppercase block mb-2">{project.category}</span>
                       <h3 className="text-white text-2xl md:text-3xl font-medium tracking-tight leading-none group-hover:text-blue-400 transition-colors">
                         {project.title}
                       </h3>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
