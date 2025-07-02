import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-elegant" 
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection("#")}
                className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform"
              >
                LR
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 font-medium relative group"
                  >
                    {item.label}
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <Button 
                variant="default" 
                size="sm"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                onClick={() => scrollToSection("#contact")}
              >
                Get In Touch
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="bg-background/95 backdrop-blur-md border-t border-border/50">
              <div className="px-6 py-4 space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-muted-foreground hover:text-accent transition-colors duration-300 font-medium py-2"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 border-t border-border/50">
                  <Button 
                    variant="default" 
                    size="sm"
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    onClick={() => scrollToSection("#contact")}
                  >
                    Get In Touch
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-16" />
    </>
  );
};

export default Navigation;