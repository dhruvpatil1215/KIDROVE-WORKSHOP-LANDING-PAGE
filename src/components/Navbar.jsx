import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaRobot } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: '📋 Details', href: '#details' },
    { name: '🎯 Outcomes', href: '#outcomes' },
    { name: '⭐ Why Join', href: '#why-join' },
    { name: '❓ FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-yellow-100/50 py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => scrollToSection(e, '#hero')}>
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-2 rounded-2xl shadow-md animate-wiggle">
              <FaRobot size={20} />
            </div>
            <span className="text-lg sm:text-2xl font-black tracking-tight text-gray-800">
              Kidrove <span className="fun-gradient">Workshop</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-5 lg:space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-600 hover:text-orange-500 font-bold transition-colors text-sm hover:scale-105 transform"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#register"
              onClick={(e) => scrollToSection(e, '#register')}
              className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white px-6 py-2.5 rounded-full font-extrabold hover:shadow-lg hover:shadow-orange-200 hover:-translate-y-1 hover:scale-105 transition-all active:scale-95 text-sm"
            >
              🚀 Enroll Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none p-2 rounded-xl hover:bg-yellow-50 transition-colors"
          >
            {isMobileMenuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-t-4 border-yellow-400 shadow-2xl"
          >
            <div className="px-6 py-4 space-y-1 flex flex-col">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block px-4 py-3.5 rounded-2xl text-base font-bold text-gray-700 hover:text-orange-600 hover:bg-yellow-50 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                href="#register"
                onClick={(e) => scrollToSection(e, '#register')}
                className="mt-3 block text-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3.5 rounded-2xl font-extrabold shadow-lg"
              >
                🚀 Enroll Now!
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
