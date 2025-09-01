import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Calendar, ExternalLink, Star } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      date: '2023',
      status: 'Completed',
      credentialId: 'FCC-2023-FSWD-001',
      description: 'Comprehensive certification covering HTML, CSS, JavaScript, React, Node.js, and database management',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
      verifyUrl: '#',
      icon: '🎓'
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      date: '2023',
      status: 'Completed',
      credentialId: 'META-REACT-2023-456',
      description: 'Advanced React development including hooks, context, state management, and modern React patterns',
      skills: ['React', 'JSX', 'Hooks', 'Context API', 'Redux'],
      verifyUrl: '#',
      icon: '⚛️'
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: '2023',
      status: 'Completed',
      credentialId: 'FCC-2023-JS-789',
      description: 'Comprehensive coverage of JavaScript fundamentals, ES6+, algorithms, and data structure implementation',
      skills: ['JavaScript', 'ES6+', 'Algorithms', 'Data Structures', 'Problem Solving'],
      verifyUrl: '#',
      icon: '💻'
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      status: 'In Progress',
      credentialId: 'AWS-CCP-2024-PREP',
      description: 'Foundational understanding of AWS cloud services, architecture, and best practices',
      skills: ['AWS', 'Cloud Computing', 'S3', 'EC2', 'Lambda'],
      verifyUrl: '#',
      icon: '☁️'
    },
    {
      title: 'MongoDB Developer Path',
      issuer: 'MongoDB University',
      date: '2024',
      status: 'In Progress',
      credentialId: 'MDB-DEV-2024-PREP',
      description: 'Advanced MongoDB development including aggregation pipelines, indexing, and performance optimization',
      skills: ['MongoDB', 'NoSQL', 'Aggregation', 'Indexing', 'Performance'],
      verifyUrl: '#',
      icon: '🍃'
    },
    {
      title: 'Google UX Design Certificate',
      issuer: 'Google',
      date: '2024',
      status: 'Planned',
      credentialId: 'GOOGLE-UX-2024-PLAN',
      description: 'User experience design fundamentals, wireframing, prototyping, and usability testing',
      skills: ['UX Design', 'Figma', 'Prototyping', 'User Research', 'Wireframing'],
      verifyUrl: '#',
      icon: '🎨'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'In Progress':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'Planned':
        return 'bg-accent/10 text-accent border-accent/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <Award className="h-4 w-4" />;
      case 'In Progress':
        return <Star className="h-4 w-4" />;
      case 'Planned':
        return <Calendar className="h-4 w-4" />;
      default:
        return <Award className="h-4 w-4" />;
    }
  };

  return (
    <section id="certifications" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-section text-gradient">Certifications & Learning</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through industry-recognized certifications and professional development programs
          </p>
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
                      {getStatusIcon(cert.status)}
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
                
                {cert.status === 'In Progress' && (
                  <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-sm text-secondary">
                      <Star className="h-4 w-4" />
                      <span className="font-medium">Currently pursuing this certification</span>
                    </div>
                  </div>
                )}
                
                {cert.status === 'Planned' && (
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

        {/* Learning Philosophy */}
        <div className="mt-16">
          <Card className="bg-gradient-card border-none max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-semibold text-gradient mb-4">
                Commitment to Continuous Learning
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                As a developer, I believe in staying current with industry trends and continuously expanding my skill set. 
                These certifications represent my dedication to professional growth and my commitment to delivering 
                high-quality solutions using the latest technologies and best practices.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Industry Recognition
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  Practical Application
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Future-Ready Skills
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;