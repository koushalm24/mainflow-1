

const UseCases = () => {
  return (
    <section id="cases" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Real-World Applications</h2>
          <p className="text-xl text-gray-400">See how GPT-3 is transforming industries</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
              alt="Enterprise Solutions"
              className="rounded-xl object-cover w-full h-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-xl">
              <div className="absolute bottom-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise Solutions</h3>
                <p className="text-gray-300">Automating business processes and enhancing productivity</p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Content Creation"
              className="rounded-xl object-cover w-full h-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-xl">
              <div className="absolute bottom-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Content Creation</h3>
                <p className="text-gray-300">Generating high-quality content at scale</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;