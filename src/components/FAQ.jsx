import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Do children need prior coding experience? 🤔',
      answer: "Not at all! This workshop is designed for absolute beginners. We start from the basics and gradually move to more advanced concepts in a fun, easy-to-understand way.",
      emoji: '🌱',
    },
    {
      question: 'What software or hardware is required? 💻',
      answer: "Students only need a stable internet connection and a laptop or desktop computer. All software tools we use are web-based and free, so there's no complex installation required.",
      emoji: '🔌',
    },
    {
      question: 'Will there be a certificate provided? 🎓',
      answer: 'Yes! Every student who successfully completes the 4-week program will receive a verified Kidrove Workshop Certificate of Completion.',
      emoji: '🏅',
    },
  ];

  return (
    <section id="faq" className="pt-16 sm:pt-20 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blue-500 font-extrabold uppercase tracking-widest text-xs sm:text-sm mb-2"
          >
            ❓ Got Questions?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-800 tracking-tight"
          >
            Frequently Asked <span className="fun-gradient">Questions</span> 💬
          </motion.h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring', bounce: 0.3 }}
              className={`bg-white rounded-2xl sm:rounded-3xl border-3 overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? 'border-yellow-400 shadow-lg shadow-yellow-100'
                  : 'border-gray-100 hover:border-yellow-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-4 sm:p-6 text-left focus:outline-none hover:bg-yellow-50/50 transition-colors"
              >
                <span className="font-bold text-gray-800 text-base sm:text-lg pr-3 flex items-center gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl flex-shrink-0">{faq.emoji}</span>
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl sm:text-2xl flex-shrink-0"
                >
                  {openIndex === index ? '🔽' : '▶️'}
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-500 leading-relaxed text-sm sm:text-base font-semibold ml-8 sm:ml-11 border-t border-dashed border-yellow-200 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
