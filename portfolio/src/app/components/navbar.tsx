'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import ThemeSwitch from './theme-switch';

// Define types for navigation links
interface NavLink {
  name: string;
  href: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (): void => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row */}
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            NB
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link: NavLink) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}

            {/* Theme Switch (Desktop) */}
            <ThemeSwitch />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link: NavLink) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                onClick={handleLinkClick}
              >
                {link.name}
              </a>
            ))}

            {/* Theme Switch (Mobile) */}
            <div className="px-4 pt-2">
              <ThemeSwitch />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}