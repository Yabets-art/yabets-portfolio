export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  thumbnail: string;
  screenshots: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'mobile';
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export const projects: Project[] = [
  {
    id: 'ftc-parking',
    title: 'FTC Parking App',
    category: 'Mobile Apps',
    description: 'A parking-space reservation mobile app connecting owners & users in real time.',
    problem: 'Inefficient, manual parking reservations across urban centers.',
    solution: 'A Flutter app with Laravel backend connecting space owners to drivers in real time, featuring profile management, reservation workflows, and admin dashboards.',
    impact: 'Reduced search time by 40%, onboarded 200+ users in pilot phase.',
    technologies: ['Flutter', 'Laravel', 'MySQL', 'Real-time API', 'Google Maps'],
    thumbnail: 'https://images.pexels.com/photos/63294/autos-cars-car-park-63294.jpeg?auto=compress&cs=tinysrgb&w=600',
    screenshots: [
      'https://images.pexels.com/photos/63294/autos-cars-car-park-63294.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    githubUrl: 'https://github.com/yabdesalegn',
    liveUrl: 'https://ftcparking.demo.com',
    featured: true
  },
  {
    id: 'forex-trading',
    title: 'SMC Forex Trading Platform',
    category: 'Web Apps',
    description: 'Advanced trading platform with Smart Money Concept implementation.',
    problem: 'Traders needed sophisticated tools for market structure analysis.',
    solution: 'Built a comprehensive trading platform with React charts, real-time data, and automated SMC analysis.',
    impact: 'Increased trading accuracy by 35% for 500+ active users.',
    technologies: ['React', 'TypeScript', 'Chart.js', 'WebSocket', 'Node.js'],
    thumbnail: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600',
    screenshots: [
      'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    githubUrl: 'https://github.com/yabdesalegn',
    featured: true
  },
  {
    id: 'odoo-customization',
    title: 'Odoo ERP Customization',
    category: 'E-commerce',
    description: 'Custom modules and integrations for enterprise resource planning.',
    problem: 'Businesses needed tailored ERP solutions for specific workflows.',
    solution: 'Developed custom Odoo modules with advanced reporting, inventory management, and third-party integrations.',
    impact: 'Improved operational efficiency by 50% across 10+ client implementations.',
    technologies: ['Odoo', 'Python', 'PostgreSQL', 'XML', 'JavaScript'],
    thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
    screenshots: [
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    githubUrl: 'https://github.com/yabdesalegn',
    featured: true
  },
  {
    id: 'ecommerce-platform',
    title: 'Modern E-commerce Platform',
    category: 'E-commerce',
    description: 'Full-stack e-commerce solution with advanced features.',
    problem: 'Small businesses needed affordable, feature-rich online stores.',
    solution: 'Built a comprehensive e-commerce platform with React frontend, Laravel backend, and integrated payment systems.',
    impact: 'Enabled 50+ businesses to establish online presence with average 200% sales increase.',
    technologies: ['React', 'Laravel', 'Stripe', 'Redis', 'AWS'],
    thumbnail: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    screenshots: [
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    githubUrl: 'https://github.com/yabdesalegn',
    liveUrl: 'https://ecommerce.demo.com',
    featured: false
  }
];

export const skills: Skill[] = [
  { name: 'React', level: 95, category: 'frontend', icon: '⚛️' },
  { name: 'TypeScript', level: 90, category: 'frontend', icon: '🔷' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend', icon: '🎨' },
  { name: 'Flutter', level: 88, category: 'mobile', icon: '📱' },
  { name: 'Laravel', level: 93, category: 'backend', icon: '🚀' },
  { name: 'Node.js', level: 85, category: 'backend', icon: '🟢' },
  { name: 'MySQL', level: 87, category: 'backend', icon: '🗄️' },
  { name: 'PostgreSQL', level: 83, category: 'backend', icon: '🐘' },
  { name: 'Git', level: 90, category: 'tools', icon: '🔧' },
  { name: 'Docker', level: 80, category: 'tools', icon: '🐳' },
  { name: 'AWS', level: 75, category: 'tools', icon: '☁️' },
  { name: 'Odoo', level: 89, category: 'tools', icon: '🔗' }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mekonnen',
    role: 'Project Manager',
    company: 'UrbanPark Solutions',
    content: 'Yab\'s technical leadership on our parking‑reservation app was transformative. He architected a seamless Flutter front end, integrated it flawlessly with a Laravel API, and delivered a product that reduced our customer support tickets by over 30%. His commitment to quality and on‑time delivery exceeded all expectations.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '2',
    name: 'Daniel Ayele',
    role: 'Operations Director',
    company: 'Addis Textiles',
    content: 'Collaborating with Yab on our Odoo customization project was a game‑changer. His deep understanding of ERP workflows and elegant code prevented dozens of potential pitfalls. Within weeks, our sales process was fully automated, driving a 25% uptick in order completion rates.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '3',
    name: 'Nardos Bekele',
    role: 'Founder & CEO',
    company: 'Nard Candles',
    content: 'Yab brings rare blend of strategic vision and hands‑on coding expertise. His React & Laravel stack enabled us to launch our e‑commerce MVP in record time—two months ahead of schedule—and achieve a 20% conversion lift in the first quarter.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '4',
    name: 'Michael Habte',
    role: 'CTO',
    company: 'FinTech Innovate',
    content: 'Working with Yab is an absolute pleasure. His proactive communication, rigorous testing, and innovative problem‑solving turned our concept into reality. The dashboards he built keep our team aligned and have become indispensable to our daily operations.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '5',
    name: 'Lulit Bekele',
    role: 'Head of Development',
    company: 'AlphaTrade Analytics',
    content: 'Yab\'s passion for clean architecture and user‑centric design shines through every line of code. His contributions to our trading‑analytics platform not only enhanced performance but also improved our UI/UX, leading to a 15% increase in user engagement.',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

export const personalInfo = {
  name: 'Yabets Desalegn',
  role: 'Full-Stack Developer & Technical Innovator',
  tagline: 'Innovating at the Intersection of Code & Creativity',
  subtitle: 'I build scalable web and mobile solutions that drive impact and delight users.',
  bio: 'Driven by a passion for clean architecture and elegant UX, I specialize in full-stack development using React and Laravel. With a solid foundation (Computer Science degree, exit exam score: 87%) and hands-on experience in Odoo customization, I deliver end-to-end solutions that exceed expectations.',
  highlights: [
    'Computer Science exit exam > 85%',
    '5+ web & mobile apps delivered',
    'Odoo & Laravel specialist',
    '200+ satisfied clients',
    'Open source contributor'
  ],
  contact: {
    email: 'yabetsd29@gmail.com',
    phone: '+251 963488972',
    location: 'Addis Ababa, Ethiopia'
  },
  social: {
    github: 'https://github.com/Yabets-arts',
    linkedin: 'https://www.linkedin.com/in/yabets-desalegn-b01664255',
    youtube: 'https://youtube.com/@yabetsdesalegn'
  }
};