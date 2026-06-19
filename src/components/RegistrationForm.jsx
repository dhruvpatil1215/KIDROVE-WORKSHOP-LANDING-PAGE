import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.success || response.ok) {
        setStatus('success');
        setMessage(data.message || 'Registration submitted successfully');
        setFormData({ name: '', email: '', phone: '' });
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to connect to the server. Please try again.');
    }
  };

  return (
    <section id="register" className="pt-16 sm:pt-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', bounce: 0.3 }}
        className="max-w-lg mx-auto rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-orange-100 border-4 border-yellow-300"
      >
        {/* Fun Header */}
        <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 p-6 sm:p-8 md:p-10 text-center relative overflow-hidden">
          <motion.span
            className="absolute top-3 right-5 text-3xl opacity-40"
            animate={{ rotate: [0, 20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >⭐</motion.span>
          <motion.span
            className="absolute bottom-3 left-5 text-2xl opacity-40"
            animate={{ rotate: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          >🎯</motion.span>

          <span className="text-4xl sm:text-5xl block mb-3">🎉</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1 tracking-tight">
            Secure Your Spot!
          </h2>
          <p className="text-white/90 font-bold text-sm sm:text-base">
            Limited seats available — Register now!
          </p>
        </div>

        {/* Form Body */}
        <div className="bg-white p-5 sm:p-8 md:p-10">
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', bounce: 0.5 }}
              className="text-center py-8 sm:py-10"
            >
              <span className="text-6xl sm:text-7xl block mb-4">🥳</span>
              <h3 className="text-xl sm:text-2xl font-black text-gray-800 mb-2">You're In!</h3>
              <p className="text-gray-500 mb-6 text-sm sm:text-base font-semibold">{message}</p>
              <button
                onClick={() => setStatus('idle')}
                className="text-orange-500 font-extrabold hover:text-orange-600 transition-colors underline underline-offset-4 decoration-2 decoration-orange-200 hover:decoration-orange-400 text-sm sm:text-base"
              >
                Register another student →
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-red-50 text-red-500 p-3 sm:p-4 rounded-2xl flex items-center gap-2 sm:gap-3 border-2 border-red-200 font-bold text-sm"
                >
                  <FaExclamationCircle className="flex-shrink-0" />
                  <span>{message}</span>
                </motion.div>
              )}

              {/* Name */}
              <div>
                <label className="block text-xs sm:text-sm font-extrabold text-gray-600 mb-1.5 sm:mb-2">👤 Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl border-3 border-gray-100 focus:border-yellow-400 focus:ring-0 outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white text-gray-800 font-bold placeholder:text-gray-300 placeholder:font-semibold text-sm sm:text-base"
                  placeholder="Enter student's name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs sm:text-sm font-extrabold text-gray-600 mb-1.5 sm:mb-2">📧 Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl border-3 border-gray-100 focus:border-pink-400 focus:ring-0 outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white text-gray-800 font-bold placeholder:text-gray-300 placeholder:font-semibold text-sm sm:text-base"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs sm:text-sm font-extrabold text-gray-600 mb-1.5 sm:mb-2">📱 Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl border-3 border-gray-100 focus:border-blue-400 focus:ring-0 outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white text-gray-800 font-bold placeholder:text-gray-300 placeholder:font-semibold text-sm sm:text-base"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white font-extrabold py-3.5 sm:py-4 rounded-xl sm:rounded-2xl hover:shadow-xl hover:shadow-orange-200 transition-shadow disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 sm:gap-3 mt-1 sm:mt-2 text-base sm:text-lg"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  '🚀 Complete Registration'
                )}
              </motion.button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default RegistrationForm;
