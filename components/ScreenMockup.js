"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function ScreenMockup({ src, alt, className, innerClassName, style }) {
  return (
    <div 
      className={cn(
        "relative rounded-[24px] md:rounded-[40px] overflow-hidden border border-white/20 bg-zinc-900 shadow-2xl",
        className
      )}
      style={style}
    >
      {/* Hairline Inner Highlight */}
      <div className="absolute inset-px rounded-[23px] md:rounded-[39px] border border-white/5 z-20 pointer-events-none" />
      
      {/* The Screenshot */}
      <div className={cn("relative w-full h-full", innerClassName)}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Glossy Sheen Overlay */}
      <motion.div 
        animate={{ 
          x: ["-100%", "200%"], 
          opacity: [0, 0.3, 0] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          repeatDelay: 2,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent z-10 pointer-events-none -skew-x-12"
      />

      {/* Subtle Inset Shadow for Depth */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)] pointer-events-none z-10" />
    </div>
  );
}
