"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const BrandInstagram = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const BrandLinkedIn = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const BrandFacebook = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const BrandX = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.31 17.41z"></path>
  </svg>
);

const socialLinks = [
  { Icon: BrandInstagram },
  { Icon: BrandX },
  { Icon: BrandLinkedIn },
  { Icon: BrandFacebook },
];

const footerLinks = [
  {
    title: "PRODUCT",
    links: ["Storefronts", "Admin Panel", "Logistics", "Analytics", "Scaling"]
  },
  {
    title: "COMPANY",
    links: ["About Us", "Legal", "Careers", "Press Kit", "Contact"]
  },
  {
    title: "RESOURCES",
    links: ["Documentation", "Case Studies", "Blog", "Community", "Support"]
  }
];

export function Footer() {
  return (
    <footer className="bg-black text-white pt-32 pb-12 selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-20 mb-32">
          {/* Brand Info */}
          <div className="space-y-12 max-w-sm">
            <Link href="/" className="text-4xl font-black tracking-tighter flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 border-4 border-black transform rotate-45" />
              </div>
              CREDMINT
            </Link>
            <p className="text-lg text-zinc-500 font-medium leading-relaxed">
              Global infrastructure for the next generation of fashion empires. Build, grow, and dominate with Credmint.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon }, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
            {footerLinks.map((col) => (
              <div key={col.title} className="space-y-8">
                <h4 className="text-[10px] font-black tracking-[0.4em] text-zinc-600 uppercase">
                  {col.title}
                </h4>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link 
                        href="#" 
                        className="text-lg font-bold text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group"
                      >
                        {link}
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        <Image
          src="/images/foot.png"
          alt="Footer Graphic"
          width={1920}
          height={400}
          className="w-full h-auto object-cover mb-[-4px]"
        />
      </div>
    </footer>
  );
}
