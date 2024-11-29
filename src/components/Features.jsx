
import { Code, MessageSquare, Sparkles, Brain, Zap, Lock } from 'lucide-react';

const features = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Natural Language Processing',
    description: 'Understand and generate human-like text with unprecedented accuracy.',
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Code Generation',
    description: 'Generate code in multiple programming languages with detailed explanations.',
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Creative Writing',
    description: 'Create engaging content, stories, and marketing copy automatically.',
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'Problem Solving',
    description: 'Complex problem analysis and solution generation in various domains.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Fast Processing',
    description: 'Lightning-fast responses for real-time applications and interactions.',
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: 'Secure Integration',
    description: 'Enterprise-grade security for all your AI implementations.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-400">Discover what GPT-3 can do for you</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-8 transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-blue-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;