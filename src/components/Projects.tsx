import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Clock, CheckCircle } from 'lucide-react';

const Projects = () => {
  const completedProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, product catalog, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API', 'JWT'],
      githubUrl: '#',
      liveUrl: '#',
      image: '🛒',
      status: 'Completed'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern React patterns and WebSocket integration.',
      technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL', 'Tailwind CSS'],
      githubUrl: '#',
      liveUrl: '#',
      image: '📋',
      status: 'Completed'
    },
    {
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard displaying current conditions, forecasts, and historical data with beautiful visualizations and location-based services.',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Geolocation API'],
      githubUrl: '#',
      liveUrl: '#',
      image: '🌤️',
      status: 'Completed'
    }
  ];

  const inProgressProjects = [
    {
      title: 'Social Media Analytics Platform',
      description: 'A comprehensive analytics platform for social media metrics with data visualization, reporting features, and API integrations for multiple platforms.',
      technologies: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
      progress: 75,
      image: '📊',
      status: 'In Progress',
      expectedCompletion: 'Q2 2024'
    },
    {
      title: 'AI-Powered Chat Application',
      description: 'Building an intelligent chat application with AI integration, real-time messaging, and smart response suggestions using modern ML APIs.',
      technologies: ['React', 'OpenAI API', 'WebRTC', 'Firebase', 'TensorFlow.js'],
      progress: 60,
      image: '🤖',
      status: 'In Progress',
      expectedCompletion: 'Q3 2024'
    },
    {
      title: 'Portfolio CMS',
      description: 'A content management system specifically designed for developers to showcase their work with customizable themes and easy content management.',
      technologies: ['Svelte', 'Supabase', 'TypeScript', 'Tailwind CSS'],
      progress: 40,
      image: '🎨',
      status: 'In Progress',
      expectedCompletion: 'Q4 2024'
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-section text-gradient">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development journey, from completed solutions to exciting works in progress
          </p>
        </div>

        {/* Completed Projects */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-semibold text-foreground">Completed Projects</h3>
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {completedProjects.map((project, index) => (
              <Card key={index} className="card-hover group bg-gradient-card border-none">
                <CardHeader className="pb-4">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <Badge className="bg-primary/10 text-primary border-primary/20 w-fit">
                    {project.status}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 btn-nature">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Projects in Progress */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Clock className="h-6 w-6 text-secondary" />
            <h3 className="text-2xl font-semibold text-foreground">Projects in Progress</h3>
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {inProgressProjects.map((project, index) => (
              <Card key={index} className="card-hover group bg-gradient-card border-none">
                <CardHeader className="pb-4">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
                      {project.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {project.progress}% Complete
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-accent h-2 rounded-full transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Expected completion: {project.expectedCompletion}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-card border-none max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gradient mb-4">
                Interested in my work?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always working on new projects and love to collaborate. Check out my GitHub for more repositories 
                or get in touch to discuss potential opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Github className="h-4 w-4 mr-2" />
                  View All Repositories
                </Button>
                <Button className="btn-nature">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Get In Touch
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;