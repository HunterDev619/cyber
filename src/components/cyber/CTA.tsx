import ContactForm from '@/components/shared/ContactForm';

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gray-950 py-24 md:py-32"
    >
      {/* Ambient blob */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(109,40,217,0.35), transparent)',
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="text-center mb-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent">
            Get Protected
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Protect Your Business.{' '}
            <span className="text-purple-400">Zero Compromises.</span>
          </h2>
          <p className="mt-5 text-lg text-gray-400 max-w-xl mx-auto">
            Get a comprehensive security assessment tailored to your organization.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
