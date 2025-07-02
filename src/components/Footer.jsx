import { Mail, ExternalLink, Github, Linkedin, Heart } from "lucide-react";
import { Button } from "./ui/Button";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Laxmi-999",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/laxmi-regmi-a21820292/",
      label: "LinkedIn"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-secondary border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Laxmi Regmi
            </h3>
            <p className="text-muted-foreground">
              Learning full-stack web development with a focus on the MERN stack. I enjoy building small projects to practice concepts and improve step by step. Interested in writing clean code and developing practical, user-focused applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Education", href: "#education" },
                { label: "Contact", href: "#contact" }
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-muted-foreground hover:text-accent transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Let's Connect</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">📍 Bhaktapur-Thimi, Nepal</p>
              <p className="text-muted-foreground">📞 +977 9824543632</p>
              <p className="text-muted-foreground">✉️ regmilaxmi972@gmail.com</p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2 rounded-lg bg-muted/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>© 2025 Laxmi Regmi.</span>
              <Heart className="h-4 w-4 text-accent fill-current animate-pulse" />
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Back to Top ↑
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;