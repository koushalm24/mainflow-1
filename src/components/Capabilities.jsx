const Capabilities = () => {
  return (
    <section id="capabilities" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Advanced Capabilities</h2>
          <p className="text-xl text-gray-400">Pushing the boundaries of whats possible with AI</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80"
              alt="AI Technology"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent rounded-xl"></div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Language Understanding</h3>
              <p className="text-gray-300">
                Our advanced natural language processing capabilities enable deep understanding of context,
                sentiment, and intent. GPT-3 can process and analyze text in over 100 languages,
                making it truly global in scope.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Contextual Learning</h3>
              <p className="text-gray-300">
                Unlike traditional AI models, GPT-3 excels at maintaining context throughout
                conversations and documents. This enables more natural and coherent interactions,
                making it perfect for complex tasks and long-form content generation.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Adaptive Intelligence</h3>
              <p className="text-gray-300">
                The system continuously learns and adapts to new information and use cases,
                ensuring that your AI solutions stay current and effective. This adaptive
                capability makes it ideal for evolving business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;