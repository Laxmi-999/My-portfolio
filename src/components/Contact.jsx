import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Send, ExternalLink } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, subject, message } = formData;
    const body = `Name: ${firstName} ${lastName}%0D%0AEmail: ${email}%0D%0ASubject: ${subject}%0D%0AMessage: ${message}`;
    window.location.href = `mailto:regmilaxmi972@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "regmilaxmi972@gmail.com",
      href: "mailto:regmilaxmi972@gmail.com",
      gradient: "from-primary to-accent"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+977 9824543632",
      href: "tel:+9779824543632",
      gradient: "from-accent to-primary"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bhaktapur-Thimi, Nepal",
      href: "#",
      gradient: "from-primary to-accent"
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities and collaborate on interesting projects. 
            Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you have a project in mind, want to discuss opportunities, or just want to 
                connect, I'd love to hear from you. I'm currently open to junior level position.
              </p>
            </div>

            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-accent/20 hover:shadow-lg cursor-pointer"
                >
                  <CardContent className="p-6">
                    <a 
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 w-full"
                    >
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${info.gradient} flex items-center justify-center shadow-glow group-hover:animate-pulse`}>
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-muted-foreground group-hover:text-accent-glow transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send a Message
              </h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      className="bg-muted/50 border-border/50 focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      className="bg-muted/50 border-border/50 focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your email"
                    className="bg-muted/50 border-border/50 focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Discussion"
                    className="bg-muted/50 border-border/50 focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or opportunity..."
                    className="bg-muted/50 border-border/50 focus:border-accent transition-colors min-h-[120px]"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;