import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { usePageSEO } from "@/hooks/usePageSEO";

const NotFound = () => {
  const location = useLocation();

  usePageSEO({
    title: "404 - Page Not Found",
    description: "The page you are looking for does not exist on HP Media Consulting.",
    noindex: true,
  });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-24">
      <div className="text-center max-w-md mx-auto">
        <p className="text-primary font-body font-semibold text-sm uppercase tracking-widest mb-2">404 Error</p>
        <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-4">Page Not Found</h1>
        <p className="font-body text-muted-foreground text-lg mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <a
          href="/#home"
          className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-body font-semibold text-sm uppercase tracking-wider hover:bg-accent transition-colors"
        >
          Return to Home
        </a>
      </div>
    </main>
  );
};

export default NotFound;
