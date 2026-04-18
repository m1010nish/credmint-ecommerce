import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoBar } from "@/components/LogoBar";
import { CollectionShowcase } from "@/components/CollectionShowcase";
import { FeaturedWork } from "@/components/FeaturedWork";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { ProcessSteps } from "@/components/ProcessSteps";
import { AboutSection } from "@/components/AboutSection";
import { PartnerLogos } from "@/components/PartnerLogos";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Credmint | Launch Your Fashion Brand Online — Fast",
  description: "Global infrastructure for the next generation of fashion empires. Build, grow, and dominate with Credmint's stunning storefronts and powerful AI-driven admin panel.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F2F2F2]">
      <Navbar />
      <Hero />
      <LogoBar />
      <PortfolioGrid />
      <CollectionShowcase />
      <FeaturedWork />
      <ProcessSteps />
      <AboutSection />
      <PartnerLogos />
      <Footer />
    </main>
  );
}
