import { FaRobot } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16 sm:mt-20 relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-0 left-0 w-full h-full dots-pattern opacity-[0.03]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 border-b border-gray-800 pb-8 sm:pb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-2 rounded-2xl">
                <FaRobot size={18} />
              </div>
              <span className="text-lg sm:text-xl font-black text-white">
                Kidrove <span className="text-yellow-400">Workshop</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs font-semibold">
              Empowering the next generation of creators through fun, hands-on technology education! 🚀
            </p>
          </div>

          {/* Workshop Info */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-widest mb-4">📋 Workshop Info</h4>
            <div className="space-y-3 text-sm font-semibold">
              <div className="flex items-center gap-2">📅 15 July – 12 August 2026</div>
              <div className="flex items-center gap-2">💻 Online (Zoom Sessions)</div>
              <div className="flex items-center gap-2">👶 Ages 8–14 Years</div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-widest mb-4">📧 Contact</h4>
            <div className="space-y-3 text-sm font-semibold">
              <div>✉️ info@kidrove.com</div>
              <div>🌐 www.kidrove.com</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500 font-bold">
          <p>&copy; {new Date().getFullYear()} Kidrove Workshop. All rights reserved.</p>
          <p>Made with ❤️ for young innovators ✨</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
