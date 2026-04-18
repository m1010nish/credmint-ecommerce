"use client";

import { motion } from "framer-motion";
import { Dumbbell, Utensils, Shirt, Palette, Laptop, Sparkles } from "lucide-react";

const categories = [
  { name: "Fitness & Wellness", icon: Dumbbell, color: "bg-orange-50 text-orange-600", count: "1,240+ Brands" },
  { name: "Food & Beverage", icon: Utensils, color: "bg-red-50 text-red-600", count: "860+ Brands" },
  { name: "Fashion & Lifestyle", icon: Shirt, color: "bg-blue-50 text-blue-600", count: "3,100+ Brands" },
  { name: "Art & Collectibles", icon: Palette, color: "bg-purple-50 text-purple-600", count: "420+ Brands" },
  { name: "Electronics & Tech", icon: Laptop, color: "bg-zinc-50 text-zinc-600", count: "950+ Brands" },
  { name: "Beauty & Personal Care", icon: Sparkles, color: "bg-pink-50 text-pink-600", count: "1,500+ Brands" },
];

export function CategoryGrid() {
  return (
    <section id="solutions" className="py-32 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="text-[10px] font-black tracking-[0.4em] text-zinc-400 uppercase">
              Explore Our Ecosystem
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-black">
              DESIGNED FOR <br />
              <span className="text-zinc-400 italic">EVERY INDUSTRY.</span>
            </h2>
          </div>
          <button className="text-sm font-bold border-b-2 border-black pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-colors">
            VIEW ALL CATEGORIES
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl group cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <cat.icon size={28} />
              </div>
              <h3 className="text-2xl font-black mb-2">{cat.name}</h3>
              <p className="text-zinc-400 font-bold text-sm tracking-wide">{cat.count}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
