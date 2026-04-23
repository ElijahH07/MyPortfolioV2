'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import IconButton from './iconButton';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between w-full">
        <nav className="flex gap-8">
          <a
            href="/"
            className="font-reg text-white text-base tracking-wide hover:opacity-70 transition-opacity duration-200"
          >
            Home
          </a>
          <a
            href="/projects"
            className="font-reg text-white text-base tracking-wide hover:opacity-70 transition-opacity duration-200"
          >
            Projects
          </a>
        </nav>
        <div className="flex gap-2">
          <IconButton icon={<Github size={24} />} href="https://github.com/ElijahH07" label="GitHub Profile" />
          <IconButton icon={<Linkedin size={24} />} href="https://linkedin.com/in/elijahchargreaves" label="LinkedIn Profile" />
        </div>
      </div>

      {/* Mobile Navigation bar */}
      <div className="flex md:hidden items-center justify-between w-full">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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

      {/* Mobile dropdown — portalled to body to escape backdrop-filter containing block */}
      {typeof document !== 'undefined' && mobileMenuOpen && createPortal(
        <div className="fixed top-[118px] left-1/2 -translate-x-1/2 z-[200] flex flex-col items-center gap-2">
          <a
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="font-reg text-white/80 text-base px-8 py-2.5 rounded-full backdrop-blur-2xl hover:text-white transition-colors"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            Home
          </a>
          <a
            href="/projects"
            onClick={() => setMobileMenuOpen(false)}
            className="font-reg text-white/80 text-base px-8 py-2.5 rounded-full backdrop-blur-2xl hover:text-white transition-colors"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
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
