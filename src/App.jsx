import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkshopDetails from './components/WorkshopDetails';
import LearningOutcomes from './components/LearningOutcomes';
import WhyJoin from './components/WhyJoin';
import FAQ from './components/FAQ';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

// Custom Mouse Tracker — fun circle that follows your cursor (desktop only)
const MouseTracker = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const update = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', update);
    return () => window.removeEventListener('mousemove', update);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-10 h-10 rounded-full border-3 border-yellow-400 pointer-events-none z-[100] hidden lg:block mix-blend-difference opacity-70"
      animate={{ x: pos.x - 20, y: pos.y - 20 }}
      transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.5 }}
    />
  );
};

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-gray-800 antialiased font-sans selection:bg-yellow-300 selection:text-gray-900 relative cursor-default">
      <MouseTracker />
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 sm:gap-16 md:gap-24 pb-16 sm:pb-24">
        <Hero />
        <WorkshopDetails />
        <LearningOutcomes />
        <WhyJoin />
        <FAQ />
        <RegistrationForm />
      </main>

      <Footer />

      {/* Fun Scroll to Top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={false}
        animate={showScroll ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        whileHover={{ scale: 1.15, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 bg-gradient-to-br from-yellow-400 to-orange-500 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-2xl shadow-lg shadow-orange-200 z-50 flex items-center justify-center text-xl sm:text-2xl pointer-events-auto"
        style={{ pointerEvents: showScroll ? 'auto' : 'none' }}
        aria-label="Scroll to top"
      >
        ☝️
      </motion.button>
    </div>
  );
}

export default App;