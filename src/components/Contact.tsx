import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Calendar } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS, CONTACT_INFO, getEmailLink, getPhoneLink } from '@/lib/constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real implementation, you would send this to your backend
      // For now, we'll simulate the email functionality
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
      `;

      // Create mailto link (this will open the user's email client)
      const mailtoLink = getEmailLink(formData.subject, emailBody);
      
      // Open email client
      window.location.href = mailtoLink;

      toast({
        title: "Email client opened!",
        description: "Your default email application should now open with the pre-filled message.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: `Please try again or contact me directly at ${PERSONAL_INFO.email}`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // const handleLocationClick = () => {
  //   // This would typically redirect to a map or location
  //   window.open('', '_blank');
  //   toast({
  //     title: "Location clicked!",
  //     description: "Opening map in a new tab...",
  //   });
  // };

  const handleAvailabilityClick = () => {
    window.open(getPhoneLink(), '_blank');
    toast({
      title: "Availability clicked!",
      description: "Opening phone number in a new tab...",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: PERSONAL_INFO.email,
      action: () => window.location.href = getEmailLink()
    },
    {
      icon: MapPin,
      label: 'Location',
      value: PERSONAL_INFO.location,
      // action: handleLocationClick
    },
    {
      icon: Phone,
      label: 'Availability',
      value: CONTACT_INFO.availabilityText,
      action: handleAvailabilityClick
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: SOCIAL_LINKS.github,
      color: 'hover:text-primary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: SOCIAL_LINKS.linkedin,
      color: 'hover:text-primary'
    },
    {
      icon: Mail,
      label: 'Email',
      url: getEmailLink(),
      color: 'hover:text-primary'
    },
    // {
    //   icon: Calendar,
    //   label: 'Schedule Call',
    //   url: '#',
    //   color: 'hover:text-secondary'
    // }
    {
      icon: Phone,
      label: 'Phone',
      url: getPhoneLink(),
      color: 'hover:text-primary'
    },
    // {
    //   icon: Phone,
    //   label: 'Instagram',
    //   url: SOCIAL_LINKS.instagram,
    //   color: 'hover:text-primary'
    // }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-section text-gradient">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a friendly chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-none">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient">Let's Connect</CardTitle>
                <p className="text-muted-foreground">
                  I'm always excited to discuss new opportunities, interesting projects, or simply connect with fellow developers. 
                  Whether you're looking for collaboration, have questions about my work, or want to chat about technology, 
                  I'd love to hear from you!
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                      info.action ? 'hover:bg-muted/50 cursor-pointer card-hover' : 'bg-muted/30'
                    }`}
                    onClick={info.action || undefined}
                  >
                    <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-gradient-card border-none">
              <CardHeader>
                <CardTitle className="text-xl">Connect on Social</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 rounded-lg bg-muted/30 transition-all duration-300 card-hover text-muted-foreground ${social.color}`}
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Note */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Quick Response</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {CONTACT_INFO.quickResponse}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border-none">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient">Send a Message</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-foreground">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, question, or just say hello!"
                    rows={6}
                    className="mt-2"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-nature"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  This form will open your email client with a pre-filled message to {PERSONAL_INFO.email}
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;