// =============================================================================
// PERSONAL INFORMATION
// =============================================================================
export const PERSONAL_INFO = {
  name: process.env.VITE_PERSONAL_NAME,
  email: process.env.VITE_PERSONAL_EMAIL,
  phone: process.env.VITE_PERSONAL_PHONE,
  location: process.env.VITE_PERSONAL_LOCATION 
} as const;

// =============================================================================
// SOCIAL MEDIA LINKS
// =============================================================================
export const SOCIAL_LINKS = {
  github: process.env.VITE_GITHUB_URL ,
  linkedin: process.env.VITE_LINKEDIN_URL,
  instagram: process.env.VITE_INSTAGRAM_URL,
} as const;

// =============================================================================
// PROFESSIONAL INFORMATION
// =============================================================================
export const PROFESSIONAL_INFO = {
  currentCompany: process.env.VITE_CURRENT_COMPANY,
  currentPosition: process.env.VITE_CURRENT_POSITION ,
  availability: process.env.VITE_AVAILABILITY ,
} as const;

// =============================================================================
// CONTACT INFORMATION
// =============================================================================
export const CONTACT_INFO = {
  availabilityText: process.env.VITE_CONTACT_AVAILABILITY_TEXT,
  quickResponse: process.env.VITE_CONTACT_QUICK_RESPONSE ,
} as const;

// =============================================================================
// RESUME INFORMATION
// =============================================================================
export const RESUME_INFO = {
  url: process.env.VITE_RESUME_URL,
} as const;

// =============================================================================
// HERO SECTION
// =============================================================================
export const HERO_ROLES = [
  'Full Stack Developer',
  'Frontend Developer', 
  'Backend Developer'
] as const;

// =============================================================================
// ABOUT SECTION
// =============================================================================
export const ABOUT_HIGHLIGHTS = [
  {
    icon: 'Code',
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code that stands the test of time'
  },
  {
    icon: 'Lightbulb',
    title: 'Innovation',
    description: 'Always exploring new technologies and methodologies to improve solutions'
  },
  {
    icon: 'Target',
    title: 'Goal-Oriented',
    description: 'Focused on delivering results that exceed expectations and drive success'
  },
  {
    icon: 'Coffee',
    title: 'Continuous Learning',
    description: 'Constantly evolving skills and staying updated with industry trends'
  }
] as const;

// =============================================================================
// EXPERIENCE SECTION
// =============================================================================
export const EXPERIENCE_DATA = {
  company: 'BangHome',
  position: 'Software Development Engineer',
  type: 'Full-time',
  startDate: 'Feb 2025',
  location: 'Remote',
  status: 'Current Position',
  description: [
    'Engineered a JWT-based Single Sign-On (SSO) system, reducing authentication time by 40% and improving security for 1K+ users.',
    'Led full backend migration from MongoDB to PostgreSQL using Drizzle ORM, maintaining 100% feature parity while improving relational data processing speed by 30%',
    'Owned cross-functional UI improvements including: custom error pages (React), dynamic content management (Next.js), and internationalization of currency/date displays (JavaScript Intl).',
  ],
  technologies: [
    'React.js', 'Node.js', 'TypeScript', 'MongoDB', 'Express.js',
    'Tailwind CSS', 'Git & GitHub', 'RESTful APIs', 'PostgreSQL', 'Drizzle ORM', 'Next.js', 'JWT', 'OAuth'
  ],
  achievements: [
    'Successfully delivered multiple features on time as a fresh graduate',
    'Contributed to improving application performance and user experience',
    'Actively participated in team knowledge sharing and code review processes',
    'Demonstrated ability to learn new technologies quickly and effectively'
  ]
} as const;

// =============================================================================
// PROJECTS SECTION
// =============================================================================
export const COMPLETED_PROJECTS = [
  {
    title: 'Flogram',
    description: 'Developed a social media web application enabling users to post and like photos, follow others, and edit their profiles.',
    technologies: ['React', 'Node.js', 'MongoDB','TailwindCSS', 'Express.js', 'Cloudinary', 'Git & Github'],
    githubUrl: '#',
    liveUrl: '#',
    image: '💬',
    status: 'Completed'
  },
  {
    title: 'Breast Cancer Detection Website',
    description: 'Designed a breast cancer detection system using SVM (94% accuracy) with Python/Scikit-learn, integrating a responsive frontend (HTML/CSS) and deploying via Ngrok for remote clinical validation.',
    technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: '#',
    liveUrl: '#',
    image: '🩺',
    status: 'Completed'
  },
  {
    title: 'Weather Application',
    description: 'An Interactive weather website that provides current temperature, humidity, and wind speed for user-specified cities using the OpenWeather API.',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Geolocation API'],
    githubUrl: 'https://github.com/chiyaw/Weather',
    liveUrl: 'https://weather-three-inky.vercel.app/',
    image: '🌤️',
    status: 'Completed'
  }
] as const;

export const IN_PROGRESS_PROJECTS = [
  {
    title: 'Calendar AI',
    description: 'Developed an AI-powered calendar web application that organizes events and generates concise user-friendly summaries using AI APIs.',
    technologies: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    progress: 15,
    image: '📅',
    status: 'In Progress',
  },
  {
    title: 'My Curated Feed',
    description: 'Developed a curated feed website that aggregates multiple types of blogs, allows users to like content, and dynamically personalizes their feed based on user preferences.',
    technologies: ['React', 'OpenAI API', 'WebRTC', 'Firebase', 'TensorFlow.js'],
    progress: 70,
    image: '🌐',
    status: 'In Progress',
  },
] as const;

// =============================================================================
// SKILLS SECTION
// =============================================================================
export const SKILL_CATEGORIES = [
  {
    title: 'Frontend Development',
    icon: 'Globe',
    color: 'primary',
    skills: [
      'React.js', 'Next.js', 'TypeScript', 'JavaScript',
      'HTML5', 'CSS3', 'Tailwind CSS',
      'Responsive Design', 'Redux', 'API', 'React Router'
    ]
  },
  {
    title: 'Backend Development',
    icon: 'Database',
    color: 'secondary',
    skills: [
      'Node.js', 'Express.js', 'Python', 'FastAPI',
      'RESTful APIs', 'JWT Authentication', 'Middleware',
      'API Design'
    ]
  },
  {
    title: 'Database & Cloud',
    icon: 'Code',
    color: 'accent',
    skills: [
      'MongoDB', 'PostgreSQL', 'MySQL',
      'AWS', 'Google Cloud', 'Docker', 'Database Design'
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: 'Wrench',
    color: 'primary',
    skills: [
      'Git', 'GitHub', 'VS Code','Vite', 'npm/yarn',
      'Postman', 'Figma', 'CodePen', 'Notion',
      'Linux'
    ]
  }
] as const;

// =============================================================================
// CERTIFICATIONS SECTION
// =============================================================================
export const CERTIFICATIONS = [
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: '2021',
    status: 'Completed' as const,
    credentialId: 'fccfcd1871a-e545-4bea-982b-337d372863a7',
    description: 'Modern responsive design techniques using CSS Grid, Flexbox, and media queries for creating adaptive web layouts.',
    skills: ['HTML', 'CSS', 'Responsive Design','Grid', 'Flexbox', 'Media Queries'],
    verifyUrl: 'https://www.freecodecamp.org/certification/fccfcd1871a-e545-4bea-982b-337d372863a7/responsive-web-design',
    icon: '💻'
  },
  {
    title: 'Research Paper Certificate',
    issuer: 'ICIDSSD 2024',
    date: '2024',
    status: 'Completed' as const,
    credentialId: 'META-REACT-2023-456',
    description: 'Research contribution in breast cancer detection and analysis using machine learning techniques.',
    skills: ['Machine Learning', 'SVM', 'Python', 'Scikit-learn', 'Data Analysis'],
    verifyUrl: '#',
    icon: '📄'
  },
  {
    title: 'Digital Marketing',
    issuer: 'Google',
    date: '2023',
    status: 'Completed' as const,
    credentialId: 'FCC-2023-JS-789',
    description: 'Professional certification in Google tools and digital marketing fundamentals.',
    skills: ['Digital Marketing', 'Google Tools', 'Marketing Fundamentals', 'SEO', 'Social Media'],
    verifyUrl: '#',
    icon: '🌐'
  },
  {
    title: 'Data Analysis with Python',
    issuer: 'FreeCodeCamp',
    date: '2023',
    status: 'Completed' as const,
    credentialId: 'AWS-CCP-2024-PREP',
    description: 'Comprehensive Python programming for data analysis including NumPy, Pandas, and data visualization.',
    skills: ['Python', 'Data Analysis', 'NumPy', 'Pandas', 'Data Visualization'],
    verifyUrl: '#',
    icon: '🐍'
  },
  {
    title: 'Git and GitHub',
    issuer: 'Le Wagon',
    date: '2025',
    status: 'Completed' as const,
    credentialId: 'MDB-DEV-2024-PREP',
    description: 'Introduction to version control, collaboration, and project management using Git and GitHub.',
    skills: ['Git', 'GitHub', 'Version Control', 'Collaboration', 'Project Management'],
    verifyUrl: '#',
    icon: '🔗'
  }
] as const;

// =============================================================================
// RESUME SECTION
// =============================================================================
export const RESUME_HIGHLIGHTS = [
  {
    icon: 'GraduationCap',
    title: 'Education',
    items: [
      'Bachelor\'s in Computer Applications'
    ]
  },
  {
    icon: 'Briefcase',
    title: 'Experience',
    items: [
      `${PROFESSIONAL_INFO.currentPosition} at ${PROFESSIONAL_INFO.currentCompany} (Feb 2025 - Present)`
    ]
  },
  {
    icon: 'Award',
    title: 'Certifications',
    items: [
      'Responsive Web Design - freeCodeCamp',
      'Research Paper Certificate - ICIDSSD 2024',
      'Digital Marketing - Google',
      'Data Analysis with Python - FreeCodeCamp',
      'Git and GitHub - Le Wagon',
    ]
  },
  {
    icon: 'Star',
    title: 'Key Strengths',
    items: [
      'Quick learner with adaptability to new technologies and tools',
      'Strong problem-solving and analytical thinking',
      'Excellent communication and teamwork skills'
    ]
  }
] as const;

export const TECHNICAL_SKILLS = [
  'React.js', 'Node.js', 'TypeScript', 'JavaScript', 'Python', 'Drizzle ORM',
  'MongoDB', 'PostgreSQL', 'Express.js', 'Next.js', 'Tailwind CSS',
  'Git & GitHub', 'AWS', 'REST APIs', 'Responsive Design', 'Agile/Scrum', 'JWT', 'OAuth'
] as const;

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
export const getEmailLink = (subject?: string, body?: string) => {
  const params = new URLSearchParams();
  if (subject) params.append('subject', subject);
  if (body) params.append('body', body);
  return `mailto:${PERSONAL_INFO.email}${params.toString() ? '?' + params.toString() : ''}`;
};

export const getPhoneLink = () => `tel:${PERSONAL_INFO.phone}`;

export const getSocialLink = (platform: keyof typeof SOCIAL_LINKS) => SOCIAL_LINKS[platform];

// =============================================================================
// STATUS HELPERS
// =============================================================================
export const getStatusColor = (status: string) => {
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

export const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Completed':
      return 'Award';
    case 'In Progress':
      return 'Star';
    case 'Planned':
      return 'Calendar';
    default:
      return 'Award';
  }
};

// =============================================================================
// SKILL HELPERS
// =============================================================================
export const getColorClasses = (color: string) => {
  switch (color) {
    case 'primary':
      return 'border-l-primary bg-primary/5';
    case 'secondary':
      return 'border-l-secondary bg-secondary/5';
    case 'accent':
      return 'border-l-accent bg-accent/5';
    default:
      return 'border-l-primary bg-primary/5';
  }
};

export const getBadgeVariant = (index: number) => {
  const variants = ['default', 'secondary', 'outline'] as const;
  return variants[index % variants.length];
};
