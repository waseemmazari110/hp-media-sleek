const footerLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Clients", href: "/#clients" },
  { label: "Contact", href: "/#contact" },
  { label: "News", href: "/news" },
];

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-hero py-12 border-t border-hero-foreground/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a
              href="/#home"
              className="font-heading text-xl text-hero-foreground hover:opacity-95 transition-opacity"
            >
              HP Media Consulting
            </a>
            <p className="text-hero-foreground/70 text-sm mt-1 font-body">
              Helping publishers unlock the full value of their journalism through syndication and licensing.
            </p>
          </div>

          <nav aria-label="Footer Navigation" className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-hero-foreground/70 hover:text-hero-foreground text-sm font-body transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-hero-foreground/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-hero-foreground/50 text-xs font-body">
            &copy; {new Date().getFullYear()} HP Media Consulting. All rights reserved.
          </p>
          <p className="text-hero-foreground/50 text-xs font-body">
            Direct Publisher Representation &bull; London &bull; Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
