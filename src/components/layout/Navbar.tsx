'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { NAV_HEIGHT_PX } from '@/lib/constants';

interface NavbarProps {
  variant: 'light' | 'dark';
}

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ variant }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = variant === 'dark';

  const bgClass = scrolled
    ? isDark
      ? 'bg-gray-950 shadow-lg shadow-black/20'
      : 'bg-white shadow-lg shadow-black/10'
    : 'bg-transparent';

  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const linkHoverClass = isDark ? 'hover:text-purple-400' : 'hover:text-purple-700';
  const borderClass = isDark ? 'border-gray-800' : 'border-gray-200';

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${bgClass}`}
      style={{ height: `${NAV_HEIGHT_PX}px` }}
    >
      <div
        className="mx-auto flex h-full items-center justify-between px-6"
        style={{ maxWidth: '1280px' }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="Agency Logo"
            height={40}
            width={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${textClass} ${linkHoverClass}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className={buttonVariants({ variant: 'default', className: 'bg-purple-700 hover:bg-purple-800 text-white' })}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden p-2 rounded-md ${textClass}`}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className={`md:hidden border-t ${borderClass} ${
            isDark ? 'bg-gray-950' : 'bg-white'
          }`}
        >
          <nav className="flex flex-col px-6 py-4 gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium transition-colors ${textClass} ${linkHoverClass}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className={buttonVariants({ variant: 'default', className: 'bg-purple-700 hover:bg-purple-800 text-white w-full mt-2' })}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
