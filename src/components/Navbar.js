import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#header", label: "Welcome" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/80 py-4 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-rose-400 hover:text-rose-300 font-bold text-lg px-3 py-2 rounded-md 
                            transition-colors duration-300 hover:bg-white/10"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-rose-400 hover:text-rose-300 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col items-center gap-4 pt-4">
              {navItems.map((item) => (
                <li key={item.href} className="w-full">
                  <a
                    href={item.href}
                    className="block text-rose-400 hover:text-rose-300 font-bold text-lg px-3 py-2 
                              rounded-md transition-colors duration-300 hover:bg-white/10 text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;