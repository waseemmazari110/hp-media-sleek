import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image optimized for Mobile LCP */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="HP Media Consulting - Global publisher syndication and content licensing network"
          className="w-full h-full object-cover"
          loading="eager"
          // @ts-expect-error fetchpriority attribute is supported in modern browsers
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-hero/85" />
      </div>

      {/* Hero Content - Instant FCP/LCP friendly animation */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-28 pb-16">
        <motion.h1
          initial={{ opacity: 0.9, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl text-hero-foreground leading-tight max-w-4xl mx-auto"
        >
          Helping Publishers Unlock the Full Value of Their Journalism
        </motion.h1>

        <motion.p
          initial={{ opacity: 0.85, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-8 text-hero-foreground/90 text-lg md:text-xl max-w-2xl mx-auto font-body leading-relaxed"
        >
          We help publishers monetise their content through syndication, licensing,
          and AI opportunities — while keeping far more of the revenue through
          direct platform relationships.
        </motion.p>

        <motion.div
          initial={{ opacity: 0.9, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/#contact"
            className="inline-block bg-hero-foreground text-hero px-8 py-4 rounded-lg font-body font-semibold text-sm uppercase tracking-wider hover:bg-hero-foreground/90 transition-all shadow-sm"
          >
            Book a Discovery Call
          </a>
          <a
            href="/#services"
            className="inline-block border border-hero-foreground/30 text-hero-foreground px-8 py-4 rounded-lg font-body font-semibold text-sm uppercase tracking-wider hover:bg-hero-foreground/10 transition-all"
          >
            Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
