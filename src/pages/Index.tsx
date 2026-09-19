import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { usePageSEO } from "@/hooks/usePageSEO";

const Index = () => {
  usePageSEO({
    title: "HP Media Consulting | Publisher Content Syndication, Licensing & AI Partnerships",
    description:
      "HP Media Consulting helps premium publishers monetise journalism through direct content syndication, global platform licensing, and AI training partnerships.",
    canonical: "https://hpmediaconsulting.com/",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main id="main-content" className="flex-1 focus:outline-none">
        <Hero />
        <Services />
        <Stats />
        <About />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
