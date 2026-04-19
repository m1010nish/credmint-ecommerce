"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "FEATURES", href: "#features" },
  { name: "PRICING", href: "#pricing" },
  { name: "HOW IT WORKS", href: "#how-it-works" },
  { name: "STORIES", href: "#stories" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-2rem)] max-w-5xl",
      )}
    >
      <div
        className={cn(
          "rounded-xl flex items-center justify-center px-8 py-4 transition-all duration-300 relative border border-white/10",
          isScrolled
            ? "bg-black/60 backdrop-blur-xl shadow-2xl"
            : "bg-white/5 backdrop-blur-md"
        )}
      >
        {/* Desktop Nav Links — centered */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] font-semibold tracking-widest text-white/80 hover:text-white transition-colors uppercase"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile: Logo shown on small screens */}
        <span className="md:hidden text-white font-black tracking-tighter text-lg">
          CREDMINT
        </span>

        {/* CTA Button — right side, pill shaped, white bg */}
        <div className="hidden md:flex absolute right-3 items-center gap-4">
          <button
            className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-xl text-[11px] font-bold tracking-widest uppercase transition-all hover:bg-white/90 active:scale-95"
          >
            START FREE TRIAL
            <ArrowRight size={13} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden absolute right-3 p-1.5 text-white"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-black tracking-tighter text-white">
                CREDMINT
              </span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-black text-white tracking-tight uppercase"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <button className="mt-auto w-full bg-white text-black py-5 rounded-2xl text-base font-bold tracking-widest uppercase flex items-center justify-center gap-3">
              START FREE TRIAL
              <ArrowRight size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}