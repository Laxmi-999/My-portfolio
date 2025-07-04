
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
      color: "from-primary to-accent"
    },
    {
      title: "Backend Technologies",
      icon: "⚙️",
      skills: ["Node.js", "Express.js"],
      color: "from-accent to-primary"
    },
    {
      title: "Database Management",
      icon: "🗄️",
      skills: ["MongoDB", "Firebase", "Supabase"],
      color: "from-primary to-accent"
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: ["Git", "GitHub", "Problem Solving", "Teamwork", "Communication"],
      color: "from-accent to-primary"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise in modern web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-accent/20 hover:shadow-lg"
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4 group-hover:animate-bounce transition-all duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <div className={`w-16 h-1 bg-gradient-to-r ${category.color} mx-auto rounded-full`} />
                </div>

                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-2 bg-muted/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-default border border-border/50 hover:border-accent"
                      style={{
                        animationDelay: `${skillIndex * 0.1}s`
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;