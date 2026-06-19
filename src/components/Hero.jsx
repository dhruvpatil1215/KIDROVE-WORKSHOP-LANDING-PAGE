import { motion } from 'framer-motion';
import { FaRocket, FaRobot } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-24 pb-10 sm:pt-32 sm:pb-16 md:pt-40 md:pb-28 overflow-hidden">
      {/* Colorful animated blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-20 -right-16 w-52 sm:w-80 h-52 sm:h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-32 -left-20 w-48 sm:w-72 h-48 sm:h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-60 sm:w-96 h-60 sm:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-10 w-40 h-40 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-6000"></div>
      </div>

      {/* Floating decorative emojis — desktop only */}
      <motion.div
        className="absolute top-28 right-16 text-5xl hidden lg:block"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >🤖</motion.div>
      <motion.div
        className="absolute bottom-24 left-20 text-4xl hidden lg:block"
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >🧠</motion.div>
      <motion.div
        className="absolute top-48 left-1/4 text-3xl hidden lg:block"
        animate={{ y: [0, -12, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >⚡</motion.div>

      <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
        {/* Fun Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, type: 'spring', bounce: 0.5 }}
          className="inline-flex items-center gap-2 bg-white border-3 border-yellow-300 px-5 py-2.5 rounded-full font-extrabold mb-6 sm:mb-8 shadow-md text-sm sm:text-base"
        >
          <span className="text-xl animate-wiggle">🌟</span>
          <span className="text-orange-600">Summer 2026 is here!</span>
          <span className="text-xl animate-wiggle">🌟</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, type: 'spring' }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-800 leading-[1.1] mb-5 sm:mb-8 tracking-tight"
        >
          AI & Robotics
          <br />
          <span className="rainbow-text">Summer Workshop</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-gray-500 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-semibold px-2"
        >
          Your child's journey into the future starts here! 🚀
          <br className="hidden sm:block" />
          4 weeks of <span className="text-red-400 font-extrabold">fun</span>,{' '}
          <span className="text-yellow-500 font-extrabold">creativity</span>, and{' '}
          <span className="text-blue-400 font-extrabold">learning</span>!
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0"
        >
          <a
            href="#register"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
            className="group flex items-center gap-3 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white px-10 py-4.5 rounded-full font-extrabold text-lg hover:shadow-2xl hover:shadow-orange-200 hover:-translate-y-2 hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <FaRocket className="group-hover:rotate-45 transition-transform duration-300" />
            Enroll Now!
          </a>
          <a
            href="#details"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#details')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="bg-white text-gray-600 border-3 border-gray-200 px-10 py-4.5 rounded-full font-extrabold text-lg hover:border-yellow-400 hover:text-orange-500 hover:bg-yellow-50 transition-all duration-300 w-full sm:w-auto text-center hover:-translate-y-1"
          >
            Learn More 👇
          </a>
        </motion.div>

        {/* Fun trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-8"
        >
          {[
            { emoji: '👶', text: 'Ages 8–14' },
            { emoji: '📅', text: '4 Weeks' },
            { emoji: '💻', text: '100% Online' },
            { emoji: '🏆', text: 'Certificate' },
          ].map((badge, i) => (
            <span key={i} className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full text-sm font-bold text-gray-500 shadow-sm border border-gray-100">
              <span className="text-lg">{badge.emoji}</span> {badge.text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
