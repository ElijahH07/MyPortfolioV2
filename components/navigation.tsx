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
        <div className="fixed inset-x-0 top-[110px] z-[200] backdrop-blur-2xl border-b border-white/[0.08] shadow-xl" style={{ background: 'rgba(255,255,255,0.04)' }}>
          <nav className="flex flex-col px-8 py-2">
            <a
              href="/"
              className="font-reg text-white/80 text-base py-4 border-b border-white/[0.06] hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/projects"
              className="font-reg text-white/80 text-base py-4 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
          </nav>
        </div>,
        document.body
      )}
    </>
  );
};

export default Navigation;
