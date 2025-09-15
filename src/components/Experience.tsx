import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, MapPin, Star } from 'lucide-react';
import { EXPERIENCE_DATA } from '@/lib/constants';

const Experience = () => {
  const experience = EXPERIENCE_DATA;

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-section text-gradient">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building the foundation of my career with hands-on experience in modern web development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-hover border-l-4 border-l-primary bg-gradient-card">
            <CardHeader className="pb-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl text-gradient mb-2">
                    {experience.position}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-lg font-medium text-foreground mb-3">
                    <Building2 className="h-5 w-5 text-primary" />
                    {experience.company}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {experience.startDate} - Present
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {experience.location}
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {experience.type}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-1 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    <Star className="h-4 w-4" />
                    {experience.status}
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Role Description */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Role & Responsibilities</h3>
                <ul className="space-y-3">
                  {experience.description.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="outline"
                      className="transition-all duration-200 hover:scale-105 hover:bg-primary/10 hover:border-primary/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Key Achievements</h3>
                <div className="grid gap-4">
                  {experience.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Star className="h-3 w-3 text-primary-foreground" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;