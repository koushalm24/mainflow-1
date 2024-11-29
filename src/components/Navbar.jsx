
import { Brain } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold text-white">GPT-3 AI</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#features" className="text-gray-300 hover:text-white px-3 py-2">Features</a>
              <a href="#capabilities" className="text-gray-300 hover:text-white px-3 py-2">Capabilities</a>
              <a href="#cases" className="text-gray-300 hover:text-white px-3 py-2">Use Cases</a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;