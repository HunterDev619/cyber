'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

interface Stat {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

const stats: Stat[] = [
  { label: 'Clients Protected', value: 500, suffix: '+' },
  { label: 'Threat Detection Rate', value: 99.9, suffix: '%' },
  { label: 'Response Time', value: 15, prefix: '< ', suffix: ' min' },
];

const hidden = { opacity: 0, y: 24 };
const visible = { opacity: 1, y: 0 };
const ease = [0.25, 0.1, 0.25, 1] as const;

function AnimatedStatValue({ stat, active }: { stat: Stat; active: boolean }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { margin: '-80px' });

  useEffect(() => {
    if (!inView && !active) return;
    const controls = animate(0, stat.value, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, active, stat.value]);

  const formatted =
    stat.label === 'Threat Detection Rate'
      ? display.toFixed(1)
      : Math.round(display).toString();

  return (
    <span ref={ref} className="text-4xl font-bold tabular-nums text-gray-950">
      {stat.prefix}
      {formatted}
      {stat.suffix}
    </span>
  );
}

export default function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white py-24 md:py-32"
      style={{
        backgroundImage:
          'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}
    >
      {/* Fade overlay so dots are subtle */}
      <div className="pointer-events-none absolute inset-0 bg-white/80" />

      <div className="relative mx-auto max-w-5xl px-6 text-center md:text-left">
        <motion.h1
          initial={hidden}
          animate={visible}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-950 leading-[1.05]"
        >
          Enterprise-Grade{' '}
          <span className="bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">Cybersecurity.</span>
          <br />
          Zero Compromises.
        </motion.h1>

        <motion.p
          initial={hidden}
          animate={visible}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mx-auto md:mx-0"
        >
          Protect your infrastructure with AI-powered threat detection,
          expert-led testing, and 24/7 monitoring.
        </motion.p>

        <motion.div
          initial={hidden}
          animate={visible}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
        >
          <Link
            href="#contact"
            className={buttonVariants({ variant: 'default', size: 'lg' })}
            style={{ background: 'linear-gradient(to right, #7c3aed, #6D28D9)', color: '#fff', border: 'none' }}
          >
            Get Security Assessment
          </Link>
          <Link
            href="#case-studies"
            className={buttonVariants({ variant: 'outline', size: 'lg' })}
          >
            View Case Studies
          </Link>
        </motion.div>

        {/* Trust stats */}
        <motion.div
          initial={hidden}
          animate={visible}
          transition={{ duration: 0.6, delay: 0.45, ease }}
          className="mt-16 border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start divide-y sm:divide-y-0 sm:divide-x divide-gray-200 gap-8 sm:gap-0"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center gap-1 sm:px-10 first:pl-0 last:pr-0"
              whileHover={{ y: -6, scale: 1.05 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex((prev) => (prev === i ? null : prev))}
            >
              <AnimatedStatValue stat={stat} active={hoveredIndex === i} />
              <span className="text-xs uppercase tracking-widest text-gray-400">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
