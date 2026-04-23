import { useState } from 'react';
import IconButton from './iconButton';
import { Menu, X, Github, Linkedin } from 'lucide-react';

interface IconButtonProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between w-full">
        {/* Left side - Navigation links */}
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

        {/* Right side - Social icons */}
        <div className="flex gap-2">
          <IconButton 
            icon={<Github size={24} />}
            href="https://github.com/ElijahH07"
            label="GitHub Profile"
          />
          <IconButton 
            icon={<Linkedin size={24} />}
            href="https://linkedin.com/in/elijahchargreaves"
            label="LinkedIn Profile"
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden items-center justify-between w-full">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white p-2 hover:opacity-80 transition-opacity"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Social icons (always visible on mobile) */}
        <div className="flex gap-2">
          <IconButton 
            icon={<Github size={24} />}
            href="https://github.com/ElijahH07"
            label="GitHub Profile"
          />
          <IconButton 
            icon={<Linkedin size={24} />}
            href="https://linkedin.com/in/elijahchargreaves"
            label="LinkedIn Profile"
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown — fixed so it escapes the GlassSurface overflow */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[110px] inset-x-0 z-50 bg-black/95 backdrop-blur-lg border-t border-white/10 shadow-lg">
          <nav className="flex flex-col px-8 py-4 gap-1">
            <a
              href="/"
              className="font-reg text-white text-lg hover:opacity-70 transition-opacity py-3 border-b border-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/projects"
              className="font-reg text-white text-lg hover:opacity-70 transition-opacity py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;