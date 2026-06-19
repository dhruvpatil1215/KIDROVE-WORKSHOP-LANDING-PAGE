import { motion } from 'framer-motion';

const LearningOutcomes = () => {
  const outcomes = [
    { text: 'Learn AI fundamentals', emoji: '🧠', color: 'from-pink-400 to-red-400' },
    { text: 'Understand robotics concepts', emoji: '🤖', color: 'from-blue-400 to-indigo-400' },
    { text: 'Create simple AI projects', emoji: '🎨', color: 'from-orange-400 to-yellow-400' },
    { text: 'Improve logical thinking', emoji: '🧩', color: 'from-green-400 to-emerald-400' },
    { text: 'Build problem-solving skills', emoji: '💡', color: 'from-purple-400 to-violet-400' },
  ];

  return (
    <section id="outcomes" className="pt-16 sm:pt-20 scroll-mt-20">
      <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 shadow-2xl shadow-purple-200/40 relative overflow-hidden">
        {/* Decorative floating emojis */}
        <motion.span
          className="absolute top-6 right-8 text-3xl sm:text-4xl opacity-30"
          animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >🚀</motion.span>
        <motion.span
          className="absolute bottom-6 left-8 text-3xl sm:text-4xl opacity-30"
          animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >⭐</motion.span>

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8 sm:gap-12">
          {/* Left text */}
          <div className="lg:w-1/3 text-center lg:text-left w-full">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-pink-200 font-extrabold uppercase tracking-widest text-xs sm:text-sm mb-2"
            >
              🎯 What You'll Gain
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-3 sm:mb-5 tracking-tight leading-tight"
            >
              Learning Outcomes 🏆
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-purple-100 text-sm sm:text-lg leading-relaxed font-semibold"
            >
              Skills your child will master by the end of this awesome workshop!
            </motion.p>
          </div>

          {/* Right cards */}
          <div className="lg:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring', bounce: 0.3 }}
                whileHover={{ scale: 1.04, rotate: 1 }}
                className="bg-white/15 backdrop-blur-md border-2 border-white/25 p-4 sm:p-5 rounded-2xl flex items-center gap-3 sm:gap-4 cursor-default hover:bg-white/25 transition-colors"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${outcome.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <span className="text-2xl sm:text-3xl">{outcome.emoji}</span>
                </div>
                <p className="text-white font-bold text-sm sm:text-lg">{outcome.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningOutcomes;
