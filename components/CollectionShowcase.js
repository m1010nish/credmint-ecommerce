"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Your Own Storefront",
    desc: "Get A Stunning, Fully Branded Online Store With Your Logo, Colors, And Domain. Built For Conversion.",
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Real-Time Analytics",
    desc: "Track Revenue, Orders, Customer Behavior, And Growth — All In A Live Dashboard Built For Merchants.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    title: "Full Branding Control",
    desc: "Customize Colors, Fonts, Banners, And Navigation From Your Admin Panel. No Designer Needed.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Multiple Payments",
    desc: "Accept Payments Via Razorpay, Stripe, Or Cash On Delivery. Built-In Coupon And Discount Engine.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
  }
];

export function CollectionShowcase() {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % features.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section className="py-24 bg-[#EDE9E1] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="mb-16 space-y-4">
          <span className="text-[10px] font-black tracking-[0.4em] text-zinc-500 uppercase">
            [ EVERYTHING YOU NEED ]
          </span>
          <h2 className="text-5xl md:text-8xl font-medium tracking-tight text-[#1A1A1A]">
            ONE PLATFORM. EVERY <br /> FEATURE.
          </h2>
          <p className="text-zinc-600 text-lg font-medium max-w-xl leading-relaxed">
            Stop Stitching Together Tools. Credmint Has Everything Your Brand Needs To Launch, Run, And Scale — Built In.
          </p>
        </div>

        {/* Feature Cards Grid/Slider */}
        <div className="relative">
          <div className="overflow-visible">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="w-full bg-[#1A1A1A] rounded-[40px] overflow-hidden flex flex-col group h-[600px] border border-white/5"
                >
                  <div className="p-8 pb-4 space-y-4">
                    <h3 className="text-xl font-bold text-white tracking-tight">{feature.title}</h3>
                    <p className="text-zinc-400 text-xs font-medium leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>

                  <div className="relative flex-1 mt-auto overflow-hidden bg-zinc-900/50">
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1A1A1A] to-transparent z-10" />
                    
                    {/* -- Card 1: Storefront Replica -- */}
                    {i === 0 && (
                      <div className="absolute inset-0 p-6 pt-10">
                         <div className="bg-[#D3CDC4] rounded-[20px] h-full w-full relative overflow-hidden shadow-2xl border border-white/10">
                            {/* Browser Top Bar */}
                            <div className="h-5 bg-white/20 flex gap-1 px-3 items-center">
                               <div className="w-1 h-1 rounded-full bg-red-400/50" />
                               <div className="w-1 h-1 rounded-full bg-yellow-400/50" />
                               <div className="w-1 h-1 rounded-full bg-green-400/50" />
                            </div>
                            <div className="p-4 space-y-3">
                               <div className="flex justify-between">
                                  <div className="space-y-1">
                                    <div className="text-[8px] font-black italic text-zinc-800 leading-none">Ceramics studio</div>
                                    <div className="text-[8px] text-zinc-500 font-medium leading-none">based in NYC</div>
                                  </div>
                               </div>
                               <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg border border-white/10">
                                  <Image src={feature.image} fill className="object-cover grayscale" alt="UI" />
                               </div>
                               <div className="bg-white px-4 py-2 rounded-lg text-black text-[8px] font-extrabold uppercase tracking-widest inline-block shadow-md">
                                  Button
                               </div>
                            </div>
                         </div>
                      </div>
                    )}

                    {/* -- Card 2: Analytics Replica -- */}
                    {i === 1 && (
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                         <div className="relative w-full h-full">
                            <Image src={feature.image} fill className="object-cover opacity-60 rounded-3xl" alt="Analytics" />
                            <div className="absolute inset-0 bg-black/40" />
                            <div className="absolute left-1/2 top-11/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center gap-2">
                               <div className="w-24 h-32 bg-[#D3CDC4] rounded-xl rotate-[-15deg] shadow-2xl border border-white/10" />
                               <div className="w-16 h-40 bg-[#EDE9E1] rounded-2xl shadow-3xl border-2 border-zinc-800 relative">
                                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-zinc-800 rounded-full" />
                                  <div className="bg-zinc-100 m-1 h-[calc(100%-8px)] rounded-xl flex items-center justify-center">
                                     <div className="w-6 h-6 rounded-full bg-red-500 shadow-lg" />
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                    )}

                    {/* -- Card 3: Branding Replica -- */}
                    {i === 2 && (
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                         <div className="w-full h-full bg-[#3B92A3]/20 rounded-[30px] border border-white/10 relative overflow-hidden backdrop-blur-sm">
                            <div className="p-6 space-y-4 text-center">
                               <div className="flex gap-2 justify-center">
                                  <div className="w-8 h-8 rounded-lg bg-orange-400 p-1 flex items-center justify-center">
                                     <div className="w-full h-full border border-white rounded-sm" />
                                  </div>
                                  <div className="w-8 h-8 rounded-full bg-blue-400 p-1 flex items-center justify-center">
                                     <div className="w-1/2 h-1/2 bg-white rounded-sm" />
                                  </div>
                               </div>
                               <div className="bg-[#5CBBCE] rounded-2xl aspect-square w-full relative shadow-2xl overflow-hidden flex items-center justify-center">
                                  <div className="w-10 h-10 rounded-full border-2 border-white/30" />
                               </div>
                            </div>
                         </div>
                      </div>
                    )}

                    {/* -- Card 4: Payments Replica -- */}
                    {i === 3 && (
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                         <div className="relative w-full h-full overflow-hidden">
                            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-10 right-10 w-6 h-6 bg-yellow-400 rounded-full border border-yellow-600 shadow-xl" />
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-48 bg-zinc-800 rounded-xl shadow-3xl border border-white/10 rotate-[-5deg] p-4 space-y-3">
                               <div className="h-6 w-6 rounded bg-yellow-500/50" />
                               <div className="space-y-1.5">
                                  <div className="h-0.5 bg-white/20 w-full" />
                                  <div className="h-0.5 bg-white/20 w-3/4" />
                               </div>
                            </div>
                            <div className="absolute top-1/2 left-2/3 -translate-y-1/2 w-32 h-24 bg-white rounded-xl shadow-2xl border border-zinc-200 p-4 flex flex-col justify-end gap-1 rotate-[10deg]">
                               <div className="text-[8px] text-zinc-400 font-bold uppercase">**** 4242</div>
                               <div className="flex justify-between items-center px-1">
                                  <div className="flex gap-1">
                                     <div className="w-3 h-3 rounded-full bg-red-400/50" />
                                     <div className="w-3 h-3 rounded-full bg-orange-400/50 -ml-1.5" />
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Controls Section (Removed arrows, kept dots for mobile/tablet if needed, or fully hidden) */}
          <div className="mt-16 sm:hidden flex items-center justify-center gap-2">
               {features.map((_, i) => (
                 <div 
                   key={i} 
                   className={`h-1.5 transition-all duration-500 rounded-full ${i === 0 ? "w-10 bg-black" : "w-1.5 bg-zinc-300"}`} 
                 />
               ))}
          </div>
        </div>
      </div>
    </section>
  );
}
