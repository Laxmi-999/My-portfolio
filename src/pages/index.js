import About from "../components/about";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { useRef } from "react";


const Index= () => {
    const contactRef = useRef(null);

   const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero scrollToContact={scrollToContact} />  
       <About />
      <Skills />
       <Projects scrollToContact={scrollToContact} />
       <Education />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
};

export default Index;
