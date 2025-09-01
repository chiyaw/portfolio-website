import { Card, CardContent } from '@/components/ui/card';
import { Code, Coffee, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and methodologies to improve solutions'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering results that exceed expectations and drive success'
    },
    {
      icon: Coffee,
      title: 'Continuous Learning',
      description: 'Constantly evolving skills and staying updated with industry trends'
    }
  ];

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
                I'm <span className="text-gradient font-semibold">Shreya Srivastava</span>, a fresh and enthusiastic developer 
                currently working at <span className="text-primary font-medium">BangHome</span>. As a recent graduate entering 
                the tech industry, I bring fresh perspectives and a strong foundation in modern web development technologies.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My journey into development started with curiosity about how digital experiences are crafted. 
                Today, I specialize in building robust full-stack applications, with expertise spanning both 
                frontend user interfaces and backend systems. I believe in writing clean, efficient code that 
                not only works but is also maintainable and scalable.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or brainstorming innovative solutions to everyday problems. I'm always eager to learn and grow, 
                bringing enthusiasm and dedication to every project I work on.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Quick Facts</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">🎓 Recent Graduate & Fresh Perspective</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span className="text-muted-foreground">💼 Currently @ BangHome</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span className="text-muted-foreground">📍 Available for Freelance & Full-time Opportunities</span>
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