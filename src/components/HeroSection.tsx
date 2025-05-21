import { Github, Linkedin, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Smart Chidi Oparaugo
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          AI Specialist & Automation Expert
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Transforming healthcare and business processes through innovative AI solutions
          and intelligent automation systems.
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/smartcode108"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/smart-chidi-oparaugo-275439144"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:smartoparaugo@gmail.com"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}