
import { Building2, Briefcase, Building, Globe2, Laptop2, Shield } from 'lucide-react';

const brands = [
  { icon: <Building2 className="w-8 h-8" />, name: 'TechCorp' },
  { icon: <Briefcase className="w-8 h-8" />, name: 'Enterprise Solutions' },
  { icon: <Building className="w-8 h-8" />, name: 'InnovateAI' },
  { icon: <Globe2 className="w-8 h-8" />, name: 'Global Tech' },
  { icon: <Laptop2 className="w-8 h-8" />, name: 'DevForce' },
  { icon: <Shield className="w-8 h-8" />, name: 'SecureAI' },
];

const TrustedBy = () => {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-gray-400 mb-12">
          Trusted by Industry Leaders
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="text-blue-500 mb-2">{brand.icon}</div>
              <span className="text-gray-400 text-sm font-medium">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;