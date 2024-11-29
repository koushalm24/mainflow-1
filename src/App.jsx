import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import Capabilities from './components/Capabilities';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <Capabilities />
      <UseCases />
      <Testimonials />
      <CallToAction />
    </div>
  );
}

export default App;