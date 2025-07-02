import { GraduationCap, Award, Calendar } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const Education = () => {
  const education = [
    {
      degree: "Bachelor's in Information Management (BIM)",
      institution: "Tribhuwan University",
      period: "2019-2024",
      status: "Completed",
      description: "Comprehensive program covering information systems, database management, web technologies, and business applications.",
      icon: GraduationCap,
      gradient: "from-primary to-accent"
    }
  ];

  const certifications = [
    {
      title: "MERN Stack Training Program",
      institution: "Broadway Infosys",
      location: "Tinkune, Kathmandu",
      status: "Currently Enrolled",
      description: "Intensive training program covering MongoDB, Express.js, React.js, and Node.js development.",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript","TypeScript", "Full-Stack Development"],
      icon: Award,
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gradient-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Education & Certification
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My educational background and professional certifications that have shaped my expertise in web development.
          </p>
        </div>

        <div className="space-y-12">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-accent" />
              Education
            </h3>
            
            <div className="grid gap-6">
              {education.map((edu, index) => (
                <Card 
                  key={edu.degree}
                  className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-accent/20 hover:shadow-lg overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${edu.gradient} flex items-center justify-center shadow-glow`}>
                          <edu.icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-4">
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-2">
                            {edu.degree}
                          </h4>
                          <p className="text-accent font-medium text-lg mb-1">
                            {edu.institution}
                          </p>
                          <div className="flex items-center gap-4 text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{edu.period}</span>
                            </div>
                            <Badge 
                              variant="secondary" 
                              className="bg-accent/20 text-accent border border-accent/30"
                            >
                              {edu.status}
                            </Badge>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Award className="h-6 w-6 text-accent" />
              Professional Training
            </h3>
            
            <div className="grid gap-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={cert.title}
                  className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-accent/20 hover:shadow-lg overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${cert.gradient} flex items-center justify-center shadow-glow animate-glow-pulse`}>
                          <cert.icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-4">
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-2">
                            {cert.title}
                          </h4>
                          <p className="text-accent font-medium text-lg mb-1">
                            {cert.institution}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                            <span>📍 {cert.location}</span>
                            <Badge 
                              variant="secondary" 
                              className="bg-primary/20 text-primary border border-primary/30 w-fit animate-pulse"
                            >
                              {cert.status}
                            </Badge>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {cert.description}
                        </p>

                        {/* Skills Covered */}
                        <div>
                          <h5 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                            Skills Covered
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill) => (
                              <Badge
                                key={skill}
                                variant="secondary"
                                className="bg-muted/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 border border-border/50"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;