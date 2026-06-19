import { motion } from 'framer-motion';

const WhyJoin = () => {
  const reasons = [
    { title: 'Live Online Classes', description: 'Engaging, interactive live sessions with real-time feedback.', emoji: '📺', bg: 'bg-blue-50', border: 'border-blue-200' },
    { title: 'Expert Mentors', description: 'Learn from professionals with years of AI & Robotics experience.', emoji: '👨‍🏫', bg: 'bg-purple-50', border: 'border-purple-200' },
    { title: 'Hands-on Projects', description: 'Build real-world projects to showcase your skills.', emoji: '🔧', bg: 'bg-orange-50', border: 'border-orange-200' },
    { title: 'Certificate', description: 'Receive a verifiable Kidrove certificate for your portfolio.', emoji: '🏅', bg: 'bg-green-50', border: 'border-green-200' },
    { title: 'Interactive Learning', description: 'Fun, gamified activities to keep young minds engaged.', emoji: '🎮', bg: 'bg-pink-50', border: 'border-pink-200' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring', bounce: 0.4 } },
  };

  return (
    <section id="why-join" className="pt-16 sm:pt-20 scroll-mt-20">
      <div className="text-center mb-10 sm:mb-14">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-pink-500 font-extrabold uppercase tracking-widest text-xs sm:text-sm mb-2"
        >
          ⭐ Why Kidrove
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-800 tracking-tight"
        >
          Why Join This <span className="fun-gradient">Workshop?</span> 🤩
        </motion.h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10, rotate: -1, scale: 1.03 }}
            className={`${reason.bg} border-3 ${reason.border} rounded-3xl p-6 sm:p-8 cursor-default transition-colors`}
          >
            <span className="text-4xl sm:text-5xl block mb-4 sm:mb-5">{reason.emoji}</span>
            <h3 className="text-lg sm:text-xl font-black text-gray-800 mb-2 sm:mb-3">{reason.title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base font-semibold">{reason.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyJoin;
