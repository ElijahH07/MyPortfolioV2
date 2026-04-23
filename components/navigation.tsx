'use client';

import { useState, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import IconButton from './iconButton';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const handleToggle = useCallback(() => {
    if (!mobileMenuOpen && hamburgerRef.current) {
      const rect = hamburgerRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + 10,
        left: rect.left + rect.width / 2,
      });
    }
    setMobileMenuOpen(prev => !prev);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between w-full">
        <nav className="flex gap-8">
          <a href="/" className="font-reg text-white text-base tracking-wide hover:opacity-70 transition-opacity duration-200">
            Home
          </a>
          <a href="/projects" className="font-reg text-white text-base tracking-wide hover:opacity-70 transition-opacity duration-200">
            Projects
          </a>
        </nav>
        <div className="flex gap-2">
          <IconButton icon={<Github size={24} />} href="https://github.com/ElijahH07" label="GitHub Profile" />
          <IconButton icon={<Linkedin size={24} />} href="https://linkedin.com/in/elijahchargreaves" label="LinkedIn Profile" />
        </div>
      </div>

      {/* Mobile nav bar */}
      <div className="flex md:hidden items-center justify-between w-full">
        <button
          ref={hamburgerRef}
          onClick={handleToggle}
          className="text-white p-2 hover:opacity-80 transition-opacity"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
        <div className="flex gap-2">
          <IconButton icon={<Github size={22} />} href="https://github.com/ElijahH07" label="GitHub Profile" />
          <IconButton icon={<Linkedin size={22} />} href="https://linkedin.com/in/elijahchargreaves" label="LinkedIn Profile" />
        </div>
      </div>

      {/* Dropdown — portalled to escape backdrop-filter, anchored to hamburger button */}
      {typeof document !== 'undefined' && mobileMenuOpen && createPortal(
        <div
          className="fixed z-[200] flex flex-col items-center gap-2"
          style={{ top: dropdownPos.top, left: dropdownPos.left, transform: 'translateX(-50%)' }}
        >
          <a
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="animate-pop-in font-reg text-white/85 text-base px-7 py-2.5 rounded-full backdrop-blur-2xl hover:text-white transition-colors"
            style={{
              background: 'rgba(255,255,255,0.09)',
              border: '1px solid rgba(255,255,255,0.14)',
              animationDelay: '0ms',
            }}
          >
            Home
          </a>
          <a
            href="/projects"
            onClick={() => setMobileMenuOpen(false)}
            className="animate-pop-in font-reg text-white/85 text-base px-7 py-2.5 rounded-full backdrop-blur-2xl hover:text-white transition-colors"
            style={{
              background: 'rgba(255,255,255,0.09)',
              border: '1px solid rgba(255,255,255,0.14)',
              animationDelay: '60ms',
            }}
          >
            Projects
          </a>
        </div>,
        document.body
      )}
    </>
  );
};

export default Navigation;
