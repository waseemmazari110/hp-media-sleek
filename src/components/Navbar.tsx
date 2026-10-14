import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Clients", href: "/#clients" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hero/95 backdrop-blur-sm border-b border-hero-foreground/10">
      {/* WCAG Skip-to-content accessibility link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-md font-body text-xs uppercase tracking-wider"
      >
        Skip to main content
      </a>

      <nav aria-label="Main Navigation" className="container mx-auto flex items-center justify-between py-4 px-6">
        <a
          href="/#home"
          className="font-heading text-2xl text-hero-foreground tracking-tight hover:opacity-95 transition-opacity"
          aria-label="HP Media Consulting Home"
        >
          HP Media Consulting
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-hero-foreground/80 hover:text-hero-foreground transition-colors text-sm font-medium tracking-wide uppercase font-body"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/#contact"
              className="bg-hero-foreground text-hero text-xs font-semibold px-4 py-2 rounded-md uppercase tracking-wider hover:bg-hero-foreground/90 transition-colors font-body"
            >
              Get in Touch
            </a>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-hero-foreground p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-hero-foreground/40"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation-menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile navigation dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-hero border-t border-hero-foreground/10 overflow-hidden"
          >
            <ul className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-hero-foreground/85 hover:text-hero-foreground transition-colors text-base font-medium tracking-wide uppercase font-body block py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-hero-foreground/10">
                <a
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="inline-block bg-hero-foreground text-hero text-xs font-semibold px-5 py-2.5 rounded-md uppercase tracking-wider hover:bg-hero-foreground/90 transition-colors font-body"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
