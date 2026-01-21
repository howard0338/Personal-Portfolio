import React from 'react';
import Hero from './components/Hero';
import Publications from './components/Publications';
import Awards from './components/Awards';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import NeuralBackground from './components/NeuralBackground';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative selection:bg-gray-200 selection:text-black overflow-hidden font-sans text-slate-900">
      
      {/* ==========================================
          DYNAMIC NEURAL BACKGROUND
          ========================================== */}
      <NeuralBackground />

      {/* ==========================================
          MAIN CONTENT WRAPPER
          ========================================== */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN (Main Content) - Spans 8 columns */}
          {/* Removed 'order' classes. Default DOM order places Main first, then Sidebar on mobile stacks. */}
          <main className="md:col-span-8 space-y-20">
            <Hero />
            <Publications />
            <Awards />
          </main>

          {/* RIGHT COLUMN (Sidebar) - Spans 4 columns */}
          <aside className="md:col-span-4 space-y-8 sticky top-10">
            <Sidebar />
          </aside>

        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;