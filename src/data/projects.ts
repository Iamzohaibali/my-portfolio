export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and secure payment processing.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Iamzohaibali',
    liveUrl: 'https://github.com/Iamzohaibali'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern web technologies.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Socket.io'],
    githubUrl: 'https://github.com/Iamzohaibali',
    liveUrl: 'https://github.com/Iamzohaibali'
  },
  {
    title: 'Weather Dashboard',
    description: 'A responsive weather application with location-based forecasts, interactive charts, and beautiful animations. Integrates with multiple weather APIs for accurate data.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'D3.js', 'Weather API', 'Chart.js'],
    githubUrl: 'https://github.com/Iamzohaibali',
    liveUrl: 'https://github.com/Iamzohaibali'
  },
  {
    title: 'Social Media Analytics',
    description: 'A comprehensive analytics dashboard for social media managers. Features include engagement tracking, audience insights, and automated reporting with beautiful visualizations.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'Python', 'FastAPI', 'MongoDB'],
    githubUrl: 'https://github.com/Iamzohaibali',
    liveUrl: 'https://github.com/Iamzohaibali'
  },
  {
    title: 'Learning Management System',
    description: 'An educational platform with course creation, student progress tracking, and interactive learning materials. Includes video streaming and assessment tools.',
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3'],
    githubUrl: 'https://github.com/Iamzohaibali',
    liveUrl: 'https://github.com/Iamzohaibali'
  },
  {
    title: 'Cryptocurrency Tracker',
    description: 'A real-time cryptocurrency price tracker with portfolio management, price alerts, and market analysis. Features beautiful charts and comprehensive market data.',
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Redux', 'CoinGecko API', 'Chart.js'],
    githubUrl: 'https://github.com/Iamzohaibali',
    liveUrl: 'https://github.com/Iamzohaibali'
  }
];