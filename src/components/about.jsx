import { Card, CardContent } from "./ui/card";


const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <Card className="bg-gradient-secondary border-border/50 backdrop-blur-sm shadow-elegant">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-glow border-4 border-accent/20">
                    <img 
                      src="/profileImage.jpg" 
                      alt="Laxmi Regmi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Laxmi Regmi</h3>
                  <p className="text-accent font-medium">MERN STACK</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                    <span className="text-muted-foreground">📍 Bhaktapur-Thimi, Nepal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                    <span className="text-muted-foreground">📞 9824543632</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                    <span className="text-muted-foreground">✉️ regmilaxmi972@gmail.com</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Passionate About Creating
                <span className="text-accent"> Digital Experiences</span>
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a recent graduate with a Bachelor's degree in Information Management and a passionate 
                  entry-level developer eager to start my career in web development. I have gained hands-on 
                  experience through academic projects and personal learning.
                </p>
                
                <p>
                  I have foundational knowledge in <span className="text-accent font-medium">React.js</span>, 
                  <span className="text-accent font-medium"> JavaScript</span>, and 
                  <span className="text-accent font-medium"> Tailwind CSS</span>. I enjoy building projects 
                  that help me learn and grow as a developer. I'm enthusiastic about learning new technologies 
                  and contributing to meaningful projects.
                </p>

                <p>
                  Having completed my bachelor's degree and enrolled in a MERN Stack Training Program, 
                  I'm ready to apply my skills in a professional environment and continue growing as a developer.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;