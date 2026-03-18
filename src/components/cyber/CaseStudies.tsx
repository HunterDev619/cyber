'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  teaser: string;
  problem: string;
  action: string;
  result: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'fintech',
    company: 'FinTech Corp',
    industry: 'Financial Services',
    teaser:
      'A leading payment processor faced escalating threats after a competitor breach rattled the industry.',
    problem:
      'FinTech Corp had no formal incident response plan and an unpatched network perimeter exposing cardholder data to potential exfiltration.',
    action:
      'We conducted a full penetration test, deployed 24/7 SOC monitoring, and redesigned their network segmentation to isolate the PCI-DSS cardholder data environment.',
    result:
      'Zero breaches in 18 months post-engagement, achieved PCI-DSS Level 1 compliance, and reduced mean time to detect threats from 72 hours to under 12 minutes.',
  },
  {
    id: 'healthcare',
    company: 'MediSystem Health',
    industry: 'Healthcare',
    teaser:
      'A regional hospital network needed to secure patient records across 14 facilities ahead of a state audit.',
    problem:
      'Legacy EHR systems running outdated software, weak access controls allowing broad user privileges, and no encryption on data-at-rest across clinical workstations.',
    action:
      'Deployed role-based access controls, encrypted all endpoints, ran a full HIPAA gap assessment, and trained 3,200 staff members through our Security Awareness program.',
    result:
      'Passed state HIPAA audit on first attempt, reduced unauthorized access incidents by 97%, and earned patient data trust certification from an independent assessor.',
  },
  {
    id: 'retail',
    company: 'Retail Giant Inc.',
    industry: 'E-Commerce & Retail',
    teaser:
      'A high-growth online retailer with $800M in annual GMV needed to stop account takeover attacks during peak shopping seasons.',
    problem:
      'Credential stuffing attacks were compromising thousands of customer accounts per week, resulting in fraudulent orders and significant brand damage.',
    action:
      'Implemented bot detection at the edge, enforced adaptive MFA, deployed threat intelligence feeds, and built a real-time anomaly detection pipeline integrated with their fraud team.',
    result:
      'Account takeover attempts dropped by 99.3% within 30 days, saving an estimated $4.2M in annual fraud losses and restoring customer trust metrics to all-time highs.',
  },
];

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      onClick={() => setIsOpen((prev) => !prev)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') setIsOpen((prev) => !prev);
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      animate={{ rotateY: isOpen ? 360 : 0 }}
      whileHover={{ rotateY: 8 }}
      whileTap={{ scale: 0.97, rotateY: -8 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className={`cursor-pointer rounded-xl border bg-white p-6 transition-all duration-300 select-none
        ${isOpen ? 'border-purple-700 shadow-[0_0_20px_rgba(109,40,217,0.15)]' : 'border-gray-200 hover:border-gray-300'}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-block rounded-full bg-purple-50 px-3 py-0.5 text-xs font-medium text-purple-700 mb-2">
            {study.industry}
          </span>
          <h3 className="text-lg font-semibold text-gray-900">{study.company}</h3>
          <p className="mt-1 text-sm text-gray-500">{study.teaser}</p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="mt-1 shrink-0 text-gray-400"
        >
          <ChevronDown size={18} />
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-6 grid gap-4 border-t border-gray-100 pt-5">
              {[
                { label: 'Problem', text: study.problem },
                { label: 'Action', text: study.action },
                { label: 'Result', text: study.result },
              ].map(({ label, text }) => (
                <div key={label} className={label === 'Result' ? 'border-l-4 border-purple-700 pl-4' : ''}>
                  <span className="text-xs font-semibold uppercase tracking-wider text-purple-700">
                    {label}
                  </span>
                  <p className="mt-1 text-sm text-gray-700 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">
            Proven Results
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-950">
            Real Threats. Real Outcomes.
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Real results from real clients. Click any card to see the full story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
