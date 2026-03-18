'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  variant: 'light' | 'dark';
}

const FOOTER_LINKS = {
  Services: [
    { label: 'Penetration Testing', href: '#' },
    { label: 'Threat Intelligence', href: '#' },
    { label: 'Compliance', href: '#' },
    { label: 'Security Audits', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Press', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

const SOCIAL_LINKS = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
];

export default function Footer({ variant }: FooterProps) {
  const isDark = variant === 'dark';

  const bgClass = isDark ? 'bg-gray-950' : 'bg-white';
  const textClass = isDark ? 'text-gray-300' : 'text-gray-600';
  const headingClass = isDark ? 'text-white' : 'text-gray-900';
  const linkHoverClass = isDark ? 'hover:text-purple-400' : 'hover:text-purple-700';
  const iconHoverClass = isDark ? 'hover:text-white' : 'hover:text-gray-900';

  return (
    <footer className={`${bgClass} ${textClass}`}>
      {/* Purple gradient top border */}
      <div
        style={{
          height: '2px',
          background: 'linear-gradient(to right, #6D28D9, transparent)',
        }}
      />

      <div
        className="mx-auto px-6 py-12"
        style={{ maxWidth: '1280px' }}
      >
        {/* Top section: Logo + links grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo + tagline */}
          <motion.div
            className="flex flex-col gap-3"
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          >
            <Link href="/" className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3"
              >
                <Image
                  src="/img/logo.png"
                  alt="Klara Logo"
                  height={64}
                  width={64}
                  className="object-contain rounded-full shadow-[0_0_18px_rgba(109,40,217,0.35)]"
                />
                <span className={`text-lg font-semibold tracking-tight ${headingClass}`}>
                  klara
                </span>
              </motion.div>
            </Link>
            <p className={`text-sm leading-relaxed ${textClass}`}>
              Protecting businesses and automating growth with cutting-edge technology.
            </p>
          </motion.div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4 }}
            >
              <h3 className={`text-sm font-semibold mb-4 ${headingClass}`}>
                {category}
              </h3>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                    >
                      <Link
                        href={link.href}
                        className={`text-sm transition-colors ${textClass} ${linkHoverClass}`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom section: copyright + social icons */}
        <motion.div
          className={`flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t ${
            isDark ? 'border-gray-800' : 'border-gray-200'
          }`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm">© 2025 Agency. All rights reserved.</p>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{ scale: 0.9, rotate: -3 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              >
                <Link
                  href={href}
                  aria-label={label}
                  className={`transition-colors ${textClass} ${iconHoverClass}`}
                >
                  <Icon size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
