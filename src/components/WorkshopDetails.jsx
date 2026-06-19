import { motion } from 'framer-motion';

const WorkshopDetails = () => {
  const details = [
    { label: 'Age Group', value: '8–14 Years', emoji: '👶', bg: 'bg-red-50', border: 'border-red-200', hoverBg: 'hover:bg-red-100' },
    { label: 'Duration', value: '4 Weeks', emoji: '⏰', bg: 'bg-yellow-50', border: 'border-yellow-200', hoverBg: 'hover:bg-yellow-100' },
    { label: 'Mode', value: 'Online', emoji: '💻', bg: 'bg-blue-50', border: 'border-blue-200', hoverBg: 'hover:bg-blue-100' },
    { label: 'Fee', value: '₹2,999', emoji: '💰', bg: 'bg-green-50', border: 'border-green-200', hoverBg: 'hover:bg-green-100' },
    { label: 'Start Date', value: '15 July 2026', emoji: '📅', bg: 'bg-purple-50', border: 'border-purple-200', hoverBg: 'hover:bg-purple-100' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, type: 'spring', bounce: 0.4 } },
  };

  return (
    <section id="details" className="pt-16 sm:pt-20 scroll-mt-20">
      <div className="text-center mb-10 sm:mb-14">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-orange-500 font-extrabold uppercase tracking-widest text-xs sm:text-sm mb-2"
        >
          📋 Program Overview
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-800 tracking-tight"
        >
          Workshop <span className="fun-gradient">Details</span> ✨
        </motion.h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5"
      >
        {details.map((detail, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, rotate: Math.random() > 0.5 ? 2 : -2, scale: 1.05 }}
            className={`${detail.bg} ${detail.hoverBg} border-3 ${detail.border} rounded-3xl p-5 sm:p-7 flex flex-col items-center justify-center text-center transition-colors cursor-default ${
              index === details.length - 1 ? 'col-span-2 sm:col-span-1' : ''
            }`}
          >
            <span className="text-4xl sm:text-5xl mb-3 sm:mb-4 block">{detail.emoji}</span>
            <p className="text-[10px] sm:text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-1">
              {detail.label}
            </p>
            <p className="text-sm sm:text-lg font-black text-gray-800">{detail.value}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkshopDetails;
