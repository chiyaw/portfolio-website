import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Eye, FileText, Star, Award, Briefcase, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, PROFESSIONAL_INFO, RESUME_INFO, RESUME_HIGHLIGHTS, TECHNICAL_SKILLS } from '@/lib/constants';

const Resume = () => {
  const iconMap = {
    GraduationCap,
    Briefcase,
    Award,
    Star
  };

  const resumeHighlights = RESUME_HIGHLIGHTS.map(highlight => ({
    ...highlight,
    icon: iconMap[highlight.icon as keyof typeof iconMap]
  }));

  const technicalSkills = TECHNICAL_SKILLS;

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = RESUME_INFO.url;
    link.download = `${PERSONAL_INFO.name.replace(' ', '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResume = () => {
    // In a real implementation, this would open the resume in a new tab
    window.open(RESUME_INFO.url, '_blank');
  };

  return (
    <section id="resume" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-section text-gradient">Resume</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my skills, experience, and qualifications as a fresh developer
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Resume Preview/Actions */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card border-none sticky top-24">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-10 w-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-gradient">Professional Resume</CardTitle>
                <p className="text-muted-foreground text-sm">
                  Updated for 2025 • {PROFESSIONAL_INFO.currentPosition} Profile
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={handleDownloadResume}
                  className="w-full btn-nature"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
                <Button 
                  onClick={handleViewResume}
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View Online
                </Button>
                
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Quick Stats</h4>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Experience Level:</span>
                      <span className="text-primary font-medium">Entry Level</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Current Role:</span>
                      <span className="text-primary font-medium">{PROFESSIONAL_INFO.currentPosition}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Availability:</span>
                      <span className="text-primary font-medium">Open</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Location:</span>
                      <span className="text-primary font-medium">{PERSONAL_INFO.location}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Resume Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Professional Summary */}
            <Card className="bg-gradient-card border-none">
              <CardHeader>
                <CardTitle className="text-xl text-gradient">Professional Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Enthusiastic and dedicated <span className="text-primary font-medium">{PROFESSIONAL_INFO.currentPosition}</span> with a proven track record of delivering high-impact backend solutions and seamless full-stack features at {PROFESSIONAL_INFO.currentCompany}. Engineered a secure, JWT-based Single Sign-On (SSO) system that slashed authentication time by 40% for a user base of 1,000+. Spearheaded the complete backend migration from MongoDB to PostgreSQL using Drizzle ORM, achieving 100% feature parity and boosting relational data processing speed by 30%. Adept across the stack, with experience driving UI improvements in React and Next.js. Passionate about building scalable, efficient, and user-centric systems.
                </p>
              </CardContent>
            </Card>

            {/* Resume Highlights */}
            <div className="grid md:grid-cols-2 gap-6">
              {resumeHighlights.map((section, index) => (
                <Card key={index} className="bg-gradient-card border-none card-hover">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center">
                        <section.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-lg">{section.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Technical Skills Overview */}
            <Card className="bg-gradient-card border-none">
              <CardHeader>
                <CardTitle className="text-xl text-gradient">Technical Skills Overview</CardTitle>
                <p className="text-muted-foreground">
                  Core technologies and tools I work with regularly
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="outline"
                      className="transition-all duration-200 hover:scale-105 hover:bg-primary/10 hover:border-primary/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Career Objective */}
            <Card className="bg-primary/5 border border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-gradient">Career Objective</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To leverage my technical skills and fresh perspective as a Full Stack Developer in a dynamic organization 
                  where I can contribute to innovative projects, continue learning cutting-edge technologies, and grow 
                  professionally while delivering high-quality software solutions that make a meaningful impact.
                </p>
                <div className="mt-4 p-4 bg-background/50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">What I bring to the table:</h4>
                  <div className="grid sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      Fresh graduate energy & enthusiasm
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                      Modern tech stack proficiency
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      Strong learning agility
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      Collaborative team player
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-card border-none max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gradient mb-4">
                Ready to discuss opportunities?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm actively seeking new opportunities and would love to discuss how my skills and fresh perspective 
                can contribute to your team's success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleDownloadResume}
                  className="btn-nature"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Get My Resume
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Let's Connect
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;