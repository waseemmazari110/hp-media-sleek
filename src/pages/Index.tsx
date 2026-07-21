import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
