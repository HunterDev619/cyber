export interface CyberService {
  id: string;
  title: string;
  description: string;
  cta: string;
  caseStudySnippet: string;
  icon: string;
  size: 'small' | 'medium' | 'large';
}

export const CYBER_SERVICES: CyberService[] = [
  {
    id: 'pentest',
    title: 'Penetration Testing',
    description:
      'Simulate real-world attacks on your systems to uncover exploitable vulnerabilities before malicious actors do. Our certified ethical hackers test web apps, APIs, networks, and physical infrastructure.',
    cta: 'Request a Pentest',
    caseStudySnippet:
      'Identified 3 critical RCE vulnerabilities in a Fortune 500 financial network before a scheduled compliance audit.',
    icon: 'Shield',
    size: 'large',
  },
  {
    id: 'virtual-ciso',
    title: 'Virtual CISO',
    description:
      'Fractional CISO leadership that gives your business enterprise-grade security strategy without the full-time executive cost. We own your security roadmap, board reporting, and vendor oversight.',
    cta: 'Get a Virtual CISO',
    caseStudySnippet:
      'Helped a Series B fintech build a board-ready security program in 60 days at a fraction of in-house cost.',
    icon: 'UserCog',
    size: 'medium',
  },
  {
    id: 'soc',
    title: 'SOC as a Service',
    description:
      '24/7 security operations center staffed by expert analysts who monitor, detect, and respond to threats across your entire environment.',
    cta: 'Explore SOC Plans',
    caseStudySnippet:
      'Detected and neutralized an advanced persistent threat 72 hours before it reached production systems.',
    icon: 'Monitor',
    size: 'medium',
  },
  {
    id: 'consulting',
    title: 'Cyber Security Consulting',
    description:
      'Strategic advisory and hands-on guidance to align your security posture with business goals — from risk assessments to technology selection and policy development.',
    cta: 'Talk to a Consultant',
    caseStudySnippet:
      'Delivered a 12-month security transformation roadmap for a $200M retailer facing board-level scrutiny.',
    icon: 'Briefcase',
    size: 'small',
  },
  {
    id: 'soc2',
    title: 'SOC 2 Compliance',
    description:
      'Full-cycle SOC 2 Type I and Type II readiness — gap assessments, control implementation, evidence collection, and auditor liaison so you pass on the first attempt.',
    cta: 'Start SOC 2 Readiness',
    caseStudySnippet:
      'Guided a cloud SaaS provider to SOC 2 Type II certification in 90 days, passing on first attempt.',
    icon: 'FileCheck',
    size: 'small',
  },
  {
    id: 'zero-trust-access',
    title: 'Zero Trust Access',
    description:
      'Implement "never trust, always verify" network access with identity-aware proxies, micro-segmentation, and continuous device health validation.',
    cta: 'Deploy Zero Trust',
    caseStudySnippet:
      'Eliminated lateral movement risk for a 3,000-seat enterprise by deploying ZTNA across all remote workforce.',
    icon: 'Lock',
    size: 'small',
  },
  {
    id: 'cyber-resilience',
    title: 'Cyber Resilience',
    description:
      'Design and test your ability to withstand and rapidly recover from cyber attacks — covering backup architecture, DR planning, tabletop exercises, and business continuity.',
    cta: 'Build Resilience',
    caseStudySnippet:
      'Cut post-breach recovery time from 6 days to 4 hours for a logistics firm through resilience planning.',
    icon: 'RefreshCw',
    size: 'small',
  },
  {
    id: 'iso27001',
    title: 'ISO 27001',
    description:
      'End-to-end ISO 27001 certification support — from scoping and risk treatment to policy authoring, internal audits, and certification body liaison.',
    cta: 'Get Certified',
    caseStudySnippet:
      'Achieved ISO 27001 certification for a European fintech in under 6 months, unlocking enterprise contracts.',
    icon: 'Award',
    size: 'small',
  },
  {
    id: 'glba',
    title: 'GLBA Compliance',
    description:
      'Help financial institutions meet Gramm-Leach-Bliley Act requirements with safeguards rule gap analysis, data inventory, and written information security plan development.',
    cta: 'Meet GLBA Requirements',
    caseStudySnippet:
      'Brought a regional bank into full GLBA Safeguards Rule compliance ahead of a federal examination.',
    icon: 'Building',
    size: 'small',
  },
  {
    id: 'hipaa',
    title: 'HIPAA Compliance',
    description:
      'Protect patient data and avoid OCR penalties with HIPAA risk analyses, BAA management, workforce training, and technical safeguard implementation.',
    cta: 'Secure Healthcare Data',
    caseStudySnippet:
      'Remediated a healthcare provider\'s HIPAA gaps in 45 days, preventing a potential $1.5M OCR fine.',
    icon: 'Heart',
    size: 'small',
  },
  {
    id: 'mdr',
    title: 'Managed Detection & Response',
    description:
      '24/7 MDR service combining AI-powered detection, expert threat hunting, and hands-on keyboard response to stop breaches before they escalate.',
    cta: 'Deploy MDR',
    caseStudySnippet:
      'Contained an active ransomware intrusion within 18 minutes through automated playbook and analyst intervention.',
    icon: 'Radar',
    size: 'small',
  },
  {
    id: 'iam',
    title: 'Identity & Access Management',
    description:
      'Implement zero-standing-privilege access, MFA enforcement, and identity governance to eliminate credential-based attacks.',
    cta: 'Strengthen Identity',
    caseStudySnippet:
      'Prevented account takeover attacks targeting 10,000 employee credentials at a global insurance firm.',
    icon: 'Key',
    size: 'small',
  },
  {
    id: 'family-office',
    title: 'Family Office Cybersecurity',
    description:
      'Bespoke cybersecurity programs for high-net-worth families and their offices — protecting wealth, personal data, and reputational assets from targeted threats.',
    cta: 'Protect My Family Office',
    caseStudySnippet:
      'Secured a multi-generational family office from a spear-phishing campaign targeting $50M in wire transfers.',
    icon: 'Home',
    size: 'small',
  },
];
