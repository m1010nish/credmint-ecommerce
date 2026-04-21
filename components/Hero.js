"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const IMAGES = [
  "/images/portfolio_laptop_1.png",
  "/images/portfolio_laptop_2.png",
  "/images/portfolio_laptop_3.png",
  "/images/collection_model.png",
];

// How far apart each image is spaced along the loop (px)
const SPACING = 420;
const TOTAL = IMAGES.length * SPACING;
const SPEED = 1.2; // Adjusted speed for better orbital feel

export function Hero() {
  const offsetRef = useRef(0);
  const [positions, setPositions] = useState(
    IMAGES.map((_, i) => i * SPACING)
  );
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useAnimationFrame(() => {
    if (!isMounted) return;
    offsetRef.current = (offsetRef.current + SPEED) % TOTAL;
    setPositions(IMAGES.map((_, i) => {
      // Each image's x position, looping
      const raw = (i * SPACING - offsetRef.current + TOTAL * 2) % TOTAL;
      // Center the loop around the middle of the screen
      return raw - TOTAL / 2 + window.innerWidth / 2;
    }));
  });

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-black pt-32">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_background.png"
          alt="Hero Background"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      </div>

      {/* Hero Content — Centered */}
      <div className="relative z-20 text-center px-6 max-w-7xl flex flex-col items-center gap-8 mb-20 mt-20">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-white text-5xl md:text-7xl lg:text-[80px] tracking-tight uppercase leading-[1.05] font-montserrat"
        >
          Launch Your Fashion Brand <br />
          Online — Fast.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-medium"
        >
          Credmint Gives You A Stunning Storefront, Powerful Admin Panel, And Everything You Need To Sell, Ship, And Grow — All In One Platform.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl text-xs font-bold tracking-[0.2em] uppercase transition-all hover:bg-gray-200 active:scale-95 shadow-xl"
        >
          START FREE TRIAL
          <ArrowRight size={18} />
        </motion.button>
      </div>

      {/* Carousel — anchored to far bottom */}
      <div className="relative z-10 w-full mt-auto" style={{ height: "45vh" }}>
        {isMounted && IMAGES.map((src, i) => {
          const x = positions[i];
          const centerX = window.innerWidth / 2;
          const distFromCenter = Math.abs(x - centerX);
          const maxDist = SPACING * 1.5;

          // Side images are darker and smaller
          const scale = Math.max(0.6, 1 - (distFromCenter / maxDist) * 1.2);
          const opacity = Math.max(0.2, 1 - (distFromCenter / maxDist) * 1.5);
          
          // Slight arc effect
          const yOffset = (distFromCenter / maxDist) * 150;
          
          const visible = x > -400 && x < window.innerWidth + 400;
          if (!visible) return null;

          return (
            <motion.div
              key={i}
              className="absolute bottom-0"
              style={{
                left: x,
                translateX: "-50%",
                translateY: `${yOffset}px`,
                width: 500,
                height: "40vh",
                scale,
                opacity,
                transformOrigin: "bottom center",
                zIndex: distFromCenter < 100 ? 10 : 5,
              }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-black/80 ring-1 ring-white/20">
                <Image
                  src={src}
                  alt={`Preview ${i + 1}`}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}