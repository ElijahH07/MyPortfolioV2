'use client';

import React from 'react';
import { Github, Mail, Linkedin, Code2 } from 'lucide-react';

interface FooterProps {
  onAboutClick?: () => void;
}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] px-8 md:px-12 py-6 md:py-8">
      <div className="flex items-center justify-between">

        {/* Left: copyright on desktop, source on mobile */}
        <div>
          <p className="hidden md:block font-reg text-sm text-white/30">
            © {currentYear} Elijah Hargreaves
          </p>
          <a
            href="https://github.com/ElijahH07/myportfoliov2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Source code"
            className="flex md:hidden items-center gap-1.5 text-white/25 hover:text-white/60 transition-colors"
          >
            <Code2 size={15} />
            <span className="font-reg text-xs tracking-wide">source</span>
          </a>
        </div>

        {/* Right: source + icons on desktop, icons only on mobile */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/ElijahH07/myportfoliov2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Source code"
            className="hidden md:flex items-center gap-1.5 text-white/25 hover:text-white/60 transition-colors"
          >
            <Code2 size={15} />
            <span className="font-reg text-xs tracking-wide">source</span>
          </a>
          <span className="hidden md:inline text-white/10 text-xs">|</span>
          <a
            href="https://github.com/ElijahH07"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white/30 hover:text-white/70 transition-colors"
          >
            <Github size={17} />
          </a>
          <a
            href="https://linkedin.com/in/elijahchargreaves"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/30 hover:text-white/70 transition-colors"
          >
            <Linkedin size={17} />
          </a>
          <a
            href="mailto:ehargreaves@ucsb.edu"
            aria-label="Email"
            className="text-white/30 hover:text-white/70 transition-colors"
          >
            <Mail size={17} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
