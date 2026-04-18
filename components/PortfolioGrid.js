"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = [
  "Fitness", "Real State", "Doctor", "Home Cleaner", "Food", "Electronics"
];

const portfolioItems = {
  "Fitness": [
    {
      title: "PUSH YOUR LIMITS",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
      tag: "Live Demo",
      stats: { l1: "One-time purchase", p1: "$135.00", l2: "Subscribe", p2: "$109/mo" }
    },
    {
      title: "Our garden and growers",
      image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1974&auto=format&fit=crop",
      tag: "Case Study",
      overlay: {
        title: "Our garden and growers",
        desc: "Your donation helps support our garden and growers. We can continue to serve the community through nutrition education, produce baskets, and other programming.",
        cta: "Donate now"
      }
    },
    {
      title: "Invoice #2381",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      tag: "Web App",
      price: "$1,350.00"
    }
  ],
  "Real State": [
    {
      title: "Modern Villa",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    },
    {
      title: "Luxe Estate",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      overlay: {
        title: "Discover Luxury Living",
        desc: "Experience the pinnacle of architectural excellence with our curated luxury listings.",
        cta: "View Listings"
      }
    },
    {
      title: "City Penthouse",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    }
  ],
  "Doctor": [
    {
      title: "Modern Clinic",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Direct Care Specialists",
      image: "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=2070&auto=format&fit=crop",
      overlay: {
        title: "Your Health, Simplified",
        desc: "Personalized medical care tailored to your specific needs. Schedule your consultation today.",
        cta: "Book Appointment"
      }
    },
    {
      title: "Patient Dashboard",
      image: "https://images.unsplash.com/photo-1586772002130-b0f3daa6288b?q=80&w=2070&auto=format&fit=crop",
    }
  ],
  "Home Cleaner": [
    {
      title: "Immaculate Spaces",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6958?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Eco-Friendly Cleaning",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
      overlay: {
        title: "A Greener Clean",
        desc: "Sustainable cleaning solutions for a healthier home environment. Safe for kids and pets.",
        cta: "Get Quote"
      }
    },
    {
      title: "Service Tracker",
      image: "https://images.unsplash.com/photo-1528740561666-dc2479da08be?q=80&w=2070&auto=format&fit=crop",
    }
  ],
  "Food": [
    {
      title: "Gourmet Delights",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Artisan Kitchen",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074&auto=format&fit=crop",
      overlay: {
        title: "Taste the Craft",
        desc: "Every dish is a masterpiece. Explore our rotating seasonal menu featuring local ingredients.",
        cta: "Order Now"
      }
    },
    {
      title: "Delivery Hub",
      image: "https://images.unsplash.com/photo-1526367790999-015070c73f5a?q=80&w=2071&auto=format&fit=crop",
    }
  ],
  "Electronics": [
    {
      title: "Tech Gadgets",
      image: "https://images.unsplash.com/photo-1526733169359-ab1142275ef5?q=80&w=1974&auto=format&fit=crop",
    },
    {
      title: "Next Gen Audio",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
      overlay: {
        title: "Immersive Sound",
        desc: "Experience audio like never before with our studio-grade headphones and speakers.",
        cta: "Shop Now"
      }
    },
    {
      title: "Smart Home Control",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop",
    }
  ]
};

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("Fitness");
  const scrollRef = useRef(null);

  const currentItems = portfolioItems[activeCategory] || portfolioItems["Fitness"];

  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-8xl font-medium tracking-tight"
          >
            Grow Your Business
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-500 text-lg font-light tracking-wide"
          >
            You Deserve A Website That Can Do It All.
          </motion.p>
        </div>

        {/* Filter Bar */}
        <div className="flex justify-center mb-24 overflow-x-auto no-scrollbar pb-4">
          <div className="flex bg-[#121212] p-1.5 rounded-full border border-zinc-800/50">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 relative ${
                  activeCategory === cat ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal Slider Section */}
      <div className="relative w-full overflow-hidden flex items-center justify-center">
        <motion.div 
          ref={scrollRef}
          className="flex gap-8 px-10 items-center justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {currentItems.map((item, index) => (
            <motion.div
              key={`${activeCategory}-${index}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: index === 1 ? 1 : 0.9 }}
              whileHover={{ scale: 1.02 }}
              className={`relative shrink-0 rounded-[60px] overflow-hidden bg-zinc-900 group shadow-2xl ${
                index === 1 ? 'w-[70vw] md:w-[800px] h-[500px] md:h-[600px] z-10' : 'w-[40vw] md:w-[450px] h-[400px] md:h-[500px] grayscale opacity-50'
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Content Replica */}
              {index === 1 && item.overlay && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                   <div className="bg-white/90 backdrop-blur-md rounded-[30px] p-10 max-w-lg text-left relative overflow-hidden shadow-2xl">
                      <div className="flex gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full border-2 border-zinc-200 overflow-hidden">
                          <Image src={item.image} alt="User" width={48} height={48} className="object-cover" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-black font-bold text-sm">Our Garden and Growers</h4>
                          <div className="flex gap-4 text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                            <span>About</span>
                            <span>Blog</span>
                            <span>Gallery</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-4xl text-black font-serif italic">{item.overlay.title}</h3>
                        <p className="text-zinc-600 text-sm leading-relaxed max-w-xs">{item.overlay.desc}</p>
                        <button className="bg-[#5C6E4F] text-white px-8 py-4 rounded-full text-sm font-bold shadow-lg hover:bg-[#4A593F] transition-colors">
                          {item.overlay.cta}
                        </button>
                      </div>

                      <div className="absolute top-10 right-10 flex gap-2">
                        <div className="px-4 py-2 bg-white rounded-full text-[10px] font-black text-black shadow-md border border-zinc-100 flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-[#E58444]" />
                             Monthly
                             <div className="w-8 h-4 bg-zinc-100 rounded-full relative ml-1">
                                <div className="absolute right-1 top-1 w-2 h-2 bg-zinc-300 rounded-full" />
                             </div>
                        </div>
                      </div>
                   </div>
                </div>
              )}

              {/* Stats Overlay for first card (replica) */}
              {index === 0 && item.stats && (
                <div className="absolute bottom-10 left-10 p-6 bg-white rounded-[20px] shadow-2xl space-y-3 min-w-[200px]">
                   <div className="flex justify-between items-center text-black">
                      <span className="text-xs font-medium text-zinc-400">{item.stats.l1}</span>
                      <span className="text-[12px] font-black">{item.stats.p1}</span>
                   </div>
                   <div className="h-[1px] bg-zinc-100" />
                   <div className="flex justify-between items-center text-black">
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-zinc-400">{item.stats.l2}</span>
                        <span className="text-[8px] font-black text-blue-600">Save 20%</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[12px] font-black">{item.stats.p2}</span>
                        <div className="text-[8px] text-zinc-400">Cancel anytime</div>
                      </div>
                   </div>
                </div>
              )}

              {/* Price Overlay for third card (replica) */}
              {index === 2 && item.price && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 bg-white/95 border border-white backdrop-blur rounded-[20px] shadow-2xl text-center space-y-4 min-w-[240px]">
                   <span className="text-[8px] uppercase font-black text-zinc-300 tracking-[0.2em]">Invoice #2381</span>
                   <div className="text-4xl font-bold text-black tracking-tight">{item.price}</div>
                   <button className="w-full py-4 bg-[#1A1110] text-white rounded-xl text-[10px] font-black uppercase tracking-[0.1em]">Pay Invoice</button>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
