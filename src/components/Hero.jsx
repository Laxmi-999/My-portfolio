import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";

import { Button } from "./ui/Button";

// import heroImage from "@/assets/hero-bg.jpg";

const Hero = ({scrollToContact}) => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        // style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            LAXMI REGMI
            </h1>
            <p className="text-xl md:text-2xl text-accent font-medium mb-4 animate-fade-in [animation-delay:0.2s]">
             MERN STACK
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in [animation-delay:0.4s]">
            Exploring full-stack web development through hands-on projects using React.js, Javascript, Typescript, Next.js, Node.js, Express.js and MongoDB. 
            I enjoy solving problems, improving my skills with each project, and focusing on writing clean, maintainable code. 
            Currently working on small applications to apply what I learn and build real-world experience.
            </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in [animation-delay:0.6s]">
            <Button variant="default" size="lg"
            onClick={scrollToContact}
             className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            {/* <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button> */}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-fade-in [animation-delay:0.8s]">
            <a
              href="https://github.com/Laxmi-999"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-accent hover:shadow-accent transition-all duration-300 group"
            >
              <Github className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/laxmi-regmi-a21820292/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-accent hover:shadow-accent transition-all duration-300 group"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;