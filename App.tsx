import React, { useState, useRef } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import RequestForm from './components/RequestForm';
import Workflow from './components/Workflow';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showWorkflow, setShowWorkflow] = useState(false);
  const requestSectionRef = useRef<HTMLDivElement>(null);

  const scrollToRequest = () => {
    requestSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = () => {
    setShowWorkflow(true);
    // Ensure we stay scrolled to this section to see the transition
    setTimeout(() => {
        scrollToRequest();
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Hero onCtaClick={scrollToRequest} />
      
      <Services />
      
      <Pricing />

      {/* Dynamic Section: Form or Workflow */}
      <section 
        ref={requestSectionRef} 
        className="py-20 px-6 bg-slate-50 border-t border-slate-200 min-h-[800px] flex items-center"
        id="request-section"
      >
        <div className="w-full">
          {!showWorkflow ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <RequestForm onSubmit={handleFormSubmit} />
            </div>
          ) : (
            <div className="animate-in fade-in zoom-in-95 duration-700">
              <Workflow />
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;