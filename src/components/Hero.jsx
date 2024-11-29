
import { Brain } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2000&q=80"
          alt="AI Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <Brain className="w-16 h-16 mx-auto mb-8 text-blue-500" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            The Future of AI is Here
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Experience the power of GPT-3, the worlds most advanced language model.
            Transform the way you work with AI-powered solutions.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;