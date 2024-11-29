
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Ready to Get Started?</h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Join thousands of businesses already leveraging the power of GPT-3 to transform their operations.
        </p>
        <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg inline-flex items-center group">
          Start Free Trial
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default CallToAction;