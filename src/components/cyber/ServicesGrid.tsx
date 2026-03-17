'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Shield,
  Monitor,
  Key,
  FileCheck,
  Lock,
  UserCog,
  Briefcase,
  RefreshCw,
  Award,
  Building,
  Heart,
  Radar,
  Home,
  LucideIcon,
} from 'lucide-react';
import { CYBER_SERVICES, CyberService } from '@/data/cyber-services';

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Monitor,
  Key,
  FileCheck,
  Lock,
  UserCog,
  Briefcase,
  RefreshCw,
  Award,
  Building,
  Heart,
  Radar,
  Home,
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const } },
};

function FeaturedCard({ service }: { service: CyberService }) {
  const Icon = iconMap[service.icon] ?? Shield;

  return (
    <motion.div
      variants={cardVariant}
      className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-6 rounded-xl border border-gray-200 bg-white p-8 transition-all duration-300
        hover:border-purple-700 hover:shadow-[0_0_24px_rgba(109,40,217,0.2)]"
    >
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-700 transition-all duration-300 group-hover:bg-purple-100">
          <Icon size={24} className="transition-transform duration-300 group-hover:scale-105" />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
          <p className="mt-1 text-sm text-gray-600 leading-relaxed">{service.description}</p>
          <p className="mt-2 text-xs text-gray-400 italic border-l-2 border-purple-200 pl-3">
            {service.caseStudySnippet}
          </p>
        </div>
      </div>
      <Link
        href="#contact"
        className="shrink-0 rounded-md border border-purple-700 px-5 py-2 text-sm font-medium text-purple-700 transition-colors duration-200 hover:bg-purple-700 hover:text-white whitespace-nowrap"
      >
        {service.cta}
      </Link>
    </motion.div>
  );
}

function ServiceCard({ service }: { service: CyberService }) {
  const Icon = iconMap[service.icon] ?? Shield;

  return (
    <motion.div
      variants={cardVariant}
      className="group relative flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300
        hover:border-purple-700 hover:shadow-[0_0_20px_rgba(109,40,217,0.2)]"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-700 transition-all duration-300 group-hover:bg-purple-100">
          <Icon size={20} className="transition-transform duration-300 group-hover:scale-105" />
        </div>
        <h3 className="text-base font-semibold text-gray-900">{service.title}</h3>
      </div>

      <p className="flex-1 text-sm text-gray-600 leading-relaxed">
        {service.description}
      </p>

      <p className="text-xs text-gray-400 italic border-l-2 border-purple-200 pl-3">
        {service.caseStudySnippet}
      </p>

      <Link
        href="#contact"
        className="mt-auto self-start rounded-md border border-purple-700 px-4 py-1.5 text-sm font-medium text-purple-700 transition-colors duration-200 hover:bg-purple-700 hover:text-white"
      >
        {service.cta}
      </Link>
    </motion.div>
  );
}

export default function ServicesGrid() {
  const featuredService = CYBER_SERVICES.find((s) => s.size === 'large')!;
  const gridServices = CYBER_SERVICES.filter((s) => s.size !== 'large');

  return (
    <section id="services" className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-950">
            Everything You Need to Stay Secure
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            End-to-end security solutions designed for modern enterprises facing
            evolving threats.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col gap-4"
        >
          {/* Featured flagship card */}
          <FeaturedCard service={featuredService} />

          {/* Clean 3-col grid for remaining 12 services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {gridServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
