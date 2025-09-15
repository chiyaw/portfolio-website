import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Calendar, ExternalLink, Star } from 'lucide-react';
import { CERTIFICATIONS, getStatusColor, getStatusIcon } from '@/lib/constants';

const Certifications = () => {
  const certifications = CERTIFICATIONS;

  const getStatusIconComponent = (status: string) => {
    const iconMap = {
      Award,
      Star,
      Calendar
    };
    const iconName = getStatusIcon(status) as keyof typeof iconMap;
    const IconComponent = iconMap[iconName] || Award;
    return <IconComponent className="h-4 w-4" />;
  };

  return (
    <section id="certifications" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-section text-gradient">Certifications</h2>
          
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="card-hover group bg-gradient-card border-none">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <Badge className={getStatusColor(cert.status)}>
                    <div className="flex items-center gap-1">
                      {getStatusIconComponent(cert.status)}
                      {cert.status}
                    </div>
                  </Badge>
                </div>
                
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </CardTitle>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="font-medium text-foreground">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{cert.date}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    ID: {cert.credentialId}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {cert.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {cert.status === 'Completed' && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Verify Certificate
                  </Button>
                )}
                
                {(cert.status as string) === 'In Progress' && (
                  <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-sm text-secondary">
                      <Star className="h-4 w-4" />
                      <span className="font-medium">Currently pursuing this certification</span>
                    </div>
                  </div>
                )}
                
                {(cert.status as string) === 'Planned' && (
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-sm text-accent">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">Planned for upcoming quarter</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;