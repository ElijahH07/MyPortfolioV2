'use client';

import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

interface FooterProps {
  onAboutClick?: () => void;
}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] px-8 py-6">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        <p className="font-reg text-sm text-white/30">© {currentYear} Elijah Hargreaves</p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/ElijahH07/myportfoliov2"
            target="_blank"
            rel="noopener noreferrer"
            className="font-reg text-xs text-white/25 hover:text-white/60 transition-colors tracking-wide"
          >
            source
          </a>
          <span className="text-white/10 text-xs">|</span>
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
