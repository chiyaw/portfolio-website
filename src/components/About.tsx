import { Card, CardContent } from '@/components/ui/card';
import { Code, Coffee, Lightbulb, Target } from 'lucide-react';
import { PERSONAL_INFO, PROFESSIONAL_INFO, ABOUT_HIGHLIGHTS } from '@/lib/constants';

const About = () => {
  const iconMap = {
    Code,
    Coffee,
    Lightbulb,
    Target
  };

  const highlights = ABOUT_HIGHLIGHTS.map(highlight => ({
    ...highlight,
    icon: iconMap[highlight.icon as keyof typeof iconMap]
  }));

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-section text-gradient">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate developer with a keen eye for detail and a love for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed">
                I'm <span className="text-gradient font-semibold">{PERSONAL_INFO.name}</span>, a Full Stack Developer currently working as an <span className="text-primary font-medium">{PROFESSIONAL_INFO.currentPosition} at {PROFESSIONAL_INFO.currentCompany}</span>. I specialize in building clean, scalable web applications and modern technologies.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
              I’m driven by a deep understanding of both frontend and backend systems, with a strong focus on performance, security, and user experience. From implementing robust authentication to integrating third-party APIs, I approach each task with clarity and precision.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
              I value clean architecture, consistent learning, and delivering code that works — reliably and efficiently. I'm passionate about solving real problems through thoughtful engineering and am always looking for opportunities that push me to grow and build better.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Quick Facts</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span className="text-muted-foreground">💼 Currently @ {PROFESSIONAL_INFO.currentCompany}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span className="text-muted-foreground">📍 {PROFESSIONAL_INFO.availability}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">🚀 Passionate about Modern Web Technologies</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="card-hover bg-gradient-card border-none">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-accent rounded-full mb-4">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;