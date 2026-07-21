import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl text-hero-foreground leading-tight max-w-4xl mx-auto"
        >
          Helping Publishers Unlock the Full Value of Their Journalism
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="mt-8 text-hero-foreground/85 text-lg md:text-xl max-w-2xl mx-auto font-body leading-relaxed"
        >
          We help publishers monetise their content through syndication, licensing,
          and AI opportunities — while keeping far more of the revenue through
          direct platform relationships.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="mt-10"
        >
          <a
            href="#contact"
            className="inline-block bg-hero-foreground text-hero px-8 py-4 rounded-lg font-body font-semibold text-sm uppercase tracking-wider hover:bg-hero-foreground/90 transition-colors"
          >
            Book a Discovery Call
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
