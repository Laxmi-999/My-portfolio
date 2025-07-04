import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/Button";
import { Card, CardContent } from "./ui/card";

const Projects = ({scrollToContact}) => {
  const projects = [
    {
      title: "E-commerce Web Application",
      description: "A comprehensive e-commerce platform developed as a college project featuring user authentication, product listings, and shopping cart functionality.",
      technologies: ["React.js", "Tailwind CSS", "Express.js", "Node.js"],
      features: [
        "User authentication system",
        "Product listings and search",
        "Shopping cart functionality",
        "Responsive design",
        "Interactive user interface"
      ],
      link: "https://e-commerce-csn3-git-master-laxmi-regmis-projects.vercel.app",
      github: "#",
      gradient: "from-primary to-accent"
    },
    {
      title: "Story Sharing Platform",
      description: "A user-friendly web platform that allows users to share and browse stories efficiently with secure data management and modern design.",
      technologies: ["React.js", "Tailwind CSS", "Supabase", "Firebase"],
      features: [
        "Story creation and sharing",
        "User-friendly interface design",
        "Secure data management",
        "Real-time story browsing",
        "Database integration"
      ],
      link: "https://12-my-blog.vercel.app",
      github: "#",
      gradient: "from-accent to-primary"
    },
    {
      title: "Mini Web Games Collection",
      description: "A collection of engaging mini games developed using JavaScript and React.js, featuring interactive gameplay and responsive design. Each game demonstrates different programming concepts and user experience design.",
      technologies: ["JavaScript", "React.js", "CSS3", "HTML5"],
      features: [
        "Minesweeper: Classic puzzle game with grid-based logic",
        "Number Guessing Game: Interactive guessing challenge",
        "Word Unscramble: Brain-teasing word puzzle game",
        "Basic Calculator: Functional calculator with clean UI",
        "Lottery Game: Advanced lottery system with random generation"
      ],
      link: "https://minesweeper-three-sigma.vercel.app",
      github: "#",
      gradient: "from-primary to-accent",
      additionalLinks: [
        { name: "Minesweeper", url: "https://minesweeper-three-sigma.vercel.app" },
        { name: "Unscramble Words", url: "https://unscramble-the-word-mgp3.vercel.app" },
        { name: "Lottery Game", url: "https://adavance-lottery.vercel.app" },
        { name: "Number Guessing", url: "https://guess-the-number-tawny-phi.vercel.app" },
        { name: "Basic Calculator", url: "https://basic-calculator-2t3z.vercel.app" }
      ]
    },
    {
      title: "Basic Chat Application",
      description: "A simple real-time chat app built with the MERN stack, enabling seamless communication with a clean and intuitive interface.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      features: [
        "Real-time messaging",
        "User authentication",
        "Responsive design",
        "Clean and intuitive UI"
      ],
      link: "https://chat-app-brown-xi-79.vercel.app/",
      github: "#",
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work demonstrating my skills in modern web development and user experience design.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-elegant overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Project Info */}
                  <div className="p-8 lg:p-12 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <div className={`w-16 h-1 bg-gradient-to-r ${project.gradient} rounded-full mb-4`} />
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-muted/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 border border-border/50"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <Button 
                        variant="default" 
                        size="sm"
                        className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      {/* <Button 
                        variant="outline" 
                        size="sm"
                        className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
                        </a>
                      </Button> */}
                    </div>

                    {/* Additional Game Links */}
                    {project.additionalLinks && (
                      <div className="pt-4 border-t border-border/20">
                        <h5 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                          Individual Games
                        </h5>
                        <div className="grid grid-cols-2 gap-2">
                          {project.additionalLinks.map((gameLink) => (
                            <Button
                              key={gameLink.name}
                              variant="ghost"
                              size="sm"
                              className="text-xs hover:bg-accent/10 hover:text-accent transition-all duration-300 justify-start"
                              asChild
                            >
                              <a href={gameLink.url} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-1 h-3 w-3" />
                                {gameLink.name}
                              </a>
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="p-8 lg:p-12 bg-gradient-secondary/50 border-l border-border/50">
                    <h4 className="text-lg font-semibold text-foreground mb-6">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, featureIndex) => (
                        <li 
                          key={feature}
                          className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300"
                          style={{ transitionDelay: `${featureIndex * 0.1}s` }}
                        >
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-secondary/50 backdrop-blur-sm border border-border/50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Interested in My Work?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with talented teams. 
              Let's create something amazing together!
            </p>
            <Button 
              variant="default" 
              size="lg"
              onClick={scrollToContact}

              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;