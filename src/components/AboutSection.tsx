import { Brain, Notebook as Robot, Heart } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="About Me"
          subtitle="Passionate about leveraging AI to solve real-world problems"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              As an AI specialist with expertise in healthcare and business automation,
              I focus on developing intelligent solutions that transform how organizations
              operate and deliver value to their stakeholders.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              My approach combines cutting-edge AI technologies with practical business
              acumen to create systems that are not just intelligent, but also
              highly effective and user-friendly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-primary-50 dark:bg-gray-800 rounded-lg">
              <Brain className="w-10 h-10 text-primary-600 dark:text-primary-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Expertise</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Specialized in machine learning and natural language processing
              </p>
            </div>
            <div className="p-6 bg-secondary-50 dark:bg-gray-800 rounded-lg">
              <Robot className="w-10 h-10 text-secondary-600 dark:text-secondary-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Automation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Expert in business process automation and optimization
              </p>
            </div>
            <div className="p-6 bg-green-50 dark:bg-gray-800 rounded-lg md:col-span-2">
              <Heart className="w-10 h-10 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Healthcare Focus</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Dedicated to improving healthcare through AI innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}