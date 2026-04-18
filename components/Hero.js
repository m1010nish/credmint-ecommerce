"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const IMAGES = [
  "/images/portfolio_laptop_1.png",
  "/images/portfolio_laptop_2.png",
  "/images/portfolio_laptop_3.png",
  "/images/collection_model.png",
];

const SPACING = 420;
const TOTAL = IMAGES.length * SPACING;
const SPEED = 1.2;

export function Hero() {
  const offsetRef = useRef(0);
  const [isMounted, setIsMounted] = useState(false);
  
  // Use MotionValues to avoid React re-renders on every frame
  const motionPositions = useRef(IMAGES.map(() => useMotionValue(0)));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useAnimationFrame(() => {
    if (!isMounted) return;
    
    offsetRef.current = (offsetRef.current + SPEED) % TOTAL;
    
    const width = typeof window !== 'undefined' ? window.innerWidth : 1200;
    
    IMAGES.forEach((_, i) => {
      const raw = (i * SPACING - offsetRef.current + TOTAL * 2) % TOTAL;
      const xPos = raw - TOTAL / 2 + width / 2;
      motionPositions.current[i].set(xPos);
    });
  });

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-black pt-32">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="data:image/png;base64,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"
          alt="Orbital Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(249,115,22,0.1),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold tracking-widest uppercase mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          Global Financial Nexus
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter mb-8"
        >
          CRED<span className="text-orange-500">MINT</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl font-medium leading-relaxed mb-12"
        >
          The premier liquid staking and yield optimization layer for the next 
          generation of decentralized global commerce.
        </motion.p>
      </div>

      {/* Persistent Orbital Strip */}
      <div className="relative w-full h-[350px] mt-12 mb-20 pointer-events-none select-none">
        {IMAGES.map((src, i) => (
          <motion.div
            key={src + i}
            style={{ x: motionPositions.current[i] }}
            className="absolute top-0 w-[400px] h-[300px] rounded-3xl overflow-hidden shadow-2xl border border-white/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent z-10" />
            <Image
              src={src}
              alt={`Portfolio ${i + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col md:flex-row gap-6 items-center justify-center relative z-10"
      >
        <button className="group relative px-8 py-4 bg-orange-500 rounded-2xl flex items-center gap-3 overflow-hidden transition-transform active:scale-95 shadow-[0_0_40px_rgba(249,115,22,0.3)]">
          <span className="relative z-10 text-black font-black uppercase tracking-wider">Launch App</span>
          <ArrowRight className="relative z-10 w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
        <button className="px-8 py-4 bg-zinc-900 border border-white/10 rounded-2xl text-white font-black uppercase tracking-wider hover:bg-zinc-800 transition-colors">
          View Protocol
        </button>
      </motion.div>
    </section>
  );
}