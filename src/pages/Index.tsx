import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import { PERSONAL_INFO, SOCIAL_LINKS, getEmailLink } from '@/lib/constants';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gradient mb-2">{PERSONAL_INFO.name}</h3>
            <p className="text-muted-foreground">Full Stack Developer • Frontend Developer • Backend Developer</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              GitHub
            </a>
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a 
              href={getEmailLink()}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Email
            </a>
          </div>
          
          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. Crafted with ❤️ using React & Tailwind CSS.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Always open to new opportunities and exciting projects.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;