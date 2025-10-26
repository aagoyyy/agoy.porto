import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { id: 1, label: "About", href: "#about" },
  { id: 2, label: "Why Hire Me", href: "#whyhireme" },
  { id: 3, label: "Portofolio", href: "#portofolio" },
  { id: 4, label: "Contact", href: "#footer" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-b from-[#00111f]/90 via-[#001a29]/80 to-[#00334d]/70 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
      <nav className="flex justify-between items-center px-6 md:px-20 py-4">
        {/* Logo */}
        <img
          src="/Users/yogasmac/Documents/SINAU/1. portofolio/portfolio-video/public/logo.png"
          alt="Yoga Imam Logo"
          className="h-8 md:h-10 object-contain drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-300 font-medium">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="relative hover:text-cyan-400 transition duration-300 group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 focus:outline-none hover:text-cyan-400 transition"
          >
            {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden bg-gradient-to-b from-[#001829]/95 via-[#00243b]/95 to-[#00334d]/95 border-t border-cyan-800/40 backdrop-blur-lg text-gray-200 flex flex-col items-center space-y-4 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          >
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="w-[85%] text-center py-2 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 hover:text-cyan-400 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
