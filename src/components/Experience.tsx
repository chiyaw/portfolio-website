import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, MapPin, Star } from 'lucide-react';

const Experience = () => {
  const experience = {
    company: 'BangHome',
    position: 'Full Stack Developer',
    type: 'Full-time',
    startDate: '2024',
    location: 'Remote',
    status: 'Current Position',
    description: [
      'Developing and maintaining full-stack web applications using modern technologies including React, Node.js, and cloud services',
      'Collaborating with cross-functional teams to deliver high-quality software solutions within tight deadlines',
      'Implementing responsive user interfaces and optimizing application performance for better user experience',
      'Working with databases, APIs, and third-party integrations to build scalable backend systems',
      'Participating in code reviews, testing, and deployment processes following best practices',
      'Contributing fresh perspectives and innovative solutions as part of a dynamic development team'
    ],
    technologies: [
      'React.js', 'Node.js', 'TypeScript', 'MongoDB', 'Express.js',
      'Tailwind CSS', 'Git', 'AWS', 'RESTful APIs', 'Agile/Scrum'
    ],
    achievements: [
      'Successfully delivered multiple features on time as a fresh graduate',
      'Contributed to improving application performance and user experience',
      'Actively participated in team knowledge sharing and code review processes',
      'Demonstrated ability to learn new technologies quickly and effectively'
    ]
  };

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

              {/* Fresh Graduate Note */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Star className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Fresh Graduate Perspective</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      As a recent graduate stepping into the professional world, I bring enthusiasm, fresh ideas, 
                      and the latest academic knowledge to my role. I'm eager to learn, grow, and contribute 
                      meaningfully to every project while building strong foundations for my career in technology.
                    </p>
                  </div>
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