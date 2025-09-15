import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Globe, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES, getColorClasses, getBadgeVariant } from '@/lib/constants';

const Skills = () => {
  const iconMap = {
    Globe,
    Database,
    Code,
    Wrench
  };

  const skillCategories = SKILL_CATEGORIES.map(category => ({
    ...category,
    icon: iconMap[category.icon as keyof typeof iconMap]
  }));

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-section text-gradient">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications and modern technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className={`card-hover border-l-4 ${getColorClasses(category.color)} transition-all duration-300`}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-accent rounded-lg">
                    <category.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant={getBadgeVariant(skillIndex)}
                      className="transition-all duration-200 hover:scale-105 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional Summary
        <div className="mt-16 text-center">
          <Card className="bg-gradient-card border-none max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gradient mb-4">
                Technical Philosophy
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I believe in writing <span className="text-primary font-medium">clean, maintainable code</span> that follows best practices and industry standards. My approach combines technical expertise with creative problem-solving, ensuring that every solution is both <span className="text-secondary font-medium">functional and user-friendly</span>. I'm passionate about staying current with emerging technologies while building solid foundations with proven tools and frameworks.
                solid foundations with proven tools and frameworks.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Clean Architecture
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  Best Practices
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Continuous Learning
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  User-Centric Design
                </span>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;