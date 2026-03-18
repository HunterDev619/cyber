'use client';

import { motion } from 'framer-motion';

const CLIENTS = [
  { id: 'acme', name: 'Acme Corp' },
  { id: 'techflow', name: 'TechFlow' },
  { id: 'medishield', name: 'MediShield' },
  { id: 'fincore', name: 'FinCore' },
  { id: 'cloudnine', name: 'CloudNine' },
  { id: 'datavault', name: 'DataVault' },
];

export default function LogoCloud() {
  return (
    <section id="trust" className="bg-gray-50 py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Trusted by industry leaders
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {CLIENTS.map((client, i) => (
            <motion.span
              key={client.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="text-sm font-semibold tracking-wide text-gray-400 transition-colors hover:text-gray-700"
            >
              {client.name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
