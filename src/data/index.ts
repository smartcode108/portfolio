import { Project, Service, Skill } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Healthcare Assistant',
    description: 'Developed an intelligent healthcare assistant that provides personalized medical recommendations and automated appointment scheduling.',
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg',
    tags: ['AI', 'Healthcare', 'Machine Learning', 'Python'],
    link: 'https://example.com/healthcare-assistant'
  },
  {
    id: 2,
    title: 'Business Process Automation Platform',
    description: 'Created a comprehensive platform that automates various business processes using AI and machine learning algorithms.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
    tags: ['Automation', 'AI', 'Business', 'Python', 'React'],
    link: 'https://example.com/automation-platform'
  },
  {
    id: 3,
    title: 'Intelligent Document Processing System',
    description: 'Built an AI-powered system that automatically processes and analyzes medical documents and business reports.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    tags: ['NLP', 'Document Processing', 'AI', 'Python'],
    link: 'https://example.com/document-processor'
  }
];

export const services: Service[] = [
  {
    id: 1,
    title: 'AI Healthcare Solutions',
    description: 'Implementing intelligent systems for medical diagnosis, patient monitoring, and healthcare management.',
    icon: 'stethoscope'
  },
  {
    id: 2,
    title: 'Business Process Automation',
    description: 'Automating repetitive tasks and workflows using AI and machine learning technologies.',
    icon: 'settings'
  },
  {
    id: 3,
    title: 'Custom AI Development',
    description: 'Building tailored AI solutions for specific business needs and challenges.',
    icon: 'code'
  },
  {
    id: 4,
    title: 'AI Consultation',
    description: 'Providing expert advice on AI implementation and strategy for businesses.',
    icon: 'messageSquare'
  }
];

export const skills: Skill[] = [
  {
    id: 1,
    name: 'Machine Learning',
    level: 95,
    category: 'AI'
  },
  {
    id: 2,
    name: 'Natural Language Processing',
    level: 90,
    category: 'AI'
  },
  {
    id: 3,
    name: 'Python',
    level: 95,
    category: 'Programming'
  },
  {
    id: 4,
    name: 'TensorFlow',
    level: 85,
    category: 'AI'
  },
  {
    id: 5,
    name: 'PyTorch',
    level: 80,
    category: 'AI'
  },
  {
    id: 6,
    name: 'React',
    level: 85,
    category: 'Programming'
  }
];