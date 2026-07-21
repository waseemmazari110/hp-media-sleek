const Footer = () => {
  return (
    <footer className="bg-hero py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading text-xl text-hero-foreground">
              HP Media Consulting
            </p>
            <p className="text-hero-foreground/60 text-sm mt-1 font-body">
              Helping publishers unlock the full value of their journalism.
            </p>
          </div>
          <div className="flex gap-8">
            {["Home", "Services", "About", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-hero-foreground/60 hover:text-hero-foreground text-sm font-body transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-hero-foreground/10 text-center">
          <p className="text-hero-foreground/40 text-sm font-body">
            &copy; {new Date().getFullYear()} HP Media Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
