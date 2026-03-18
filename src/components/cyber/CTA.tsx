 'use client';

import ContactForm from '@/components/shared/ContactForm';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gray-50 py-24 md:py-32"
    >
      {/* Ambient blob */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(148,163,184,0.25), transparent)',
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-600">
            Get Protected
          </p>
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold text-gray-950 leading-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            Protect Your Business.{' '}
            <span className="text-gray-700">Zero Compromises.</span>
          </motion.h2>
          <motion.p
            className="mt-5 text-lg text-gray-600 max-w-xl mx-auto"
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            Get a comprehensive security assessment tailored to your organization.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.01 }}
        >
          <ContactForm variant="light" />
        </motion.div>
      </div>
    </section>
  );
}
