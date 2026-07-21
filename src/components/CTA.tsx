import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-surface-warm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-5xl text-foreground leading-tight">
            Ready to Unlock New Revenue?
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            Book a discovery call today and explore syndication opportunities
            tailored to your publishing business.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@hpmediaconsulting.com"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-semibold text-sm uppercase tracking-wider hover:bg-accent transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-body font-semibold text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
