import About from "../components/about";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import Skills from "../components/Skills";


const Index= () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
