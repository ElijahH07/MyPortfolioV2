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
            className="font-black text-white text-lg hover:opacity-80 hover:scale-105 transition-all duration-200"
          >
            Home
          </a>
          <a 
            href="/projects" 
            className="font-black text-white text-lg hover:opacity-80 hover:scale-105 transition-all duration-200"
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

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10 shadow-lg">
          <nav className="flex flex-col p-6 gap-4">
            <a 
              href="/" 
              className="font-black text-white text-xl hover:opacity-80 transition-opacity py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="/projects" 
              className="font-black text-white text-xl hover:opacity-80 transition-opacity py-2"
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