import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import { PERSONAL_INFO, SOCIAL_LINKS, getEmailLink, HERO_ROLES } from '@/lib/constants';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = HERO_ROLES;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-primary/10 rounded-full animate-float" />
      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 animate-fade-up">
        {/* <div className="mb-6">
          <span className="text-primary font-medium tracking-wide uppercase text-sm">
            Welcome to my portfolio
          </span>
        </div> */}
        
        <div className="relative">
          <h3 className="text-lg md:text-xl text-muted-foreground absolute -top-6 left-0 transform -translate-x-4"> I'm </h3>
          <h1 className="text-hero mb-6"><span className="text-gradient">{PERSONAL_INFO.name}</span></h1>
        </div>

        <div className="text-2xl md:text-3xl mb-8 h-12 flex items-center justify-center">
          <span className="text-muted-foreground mr-3">A</span>
          <span className="text-gradient font-semibold min-w-[280px] text-left transition-all duration-500">
            {roles[currentRole]}
          </span>
        </div>
        
        {/* <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionate about creating beautiful, functional web applications that solve real-world problems. 
          Currently working at BangHome, bringing fresh perspectives to development challenges.
        </p> */}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            onClick={() => scrollToSection('#contact')}
            className="btn-nature group"
          >
            <Mail className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
            Get In Touch
          </Button>
          <Button 
            variant="outline" 
            onClick={() => scrollToSection('#resume')}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>

        <div className="flex items-center justify-center space-x-6">
          <a 
            href={SOCIAL_LINKS.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href={SOCIAL_LINKS.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href={getEmailLink()}
            className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors duration-300"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Hero;