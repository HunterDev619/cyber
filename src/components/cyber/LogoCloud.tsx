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
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Trusted by industry leaders
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {CLIENTS.map((client) => (
            <span
              key={client.id}
              className="text-sm font-semibold tracking-wide text-gray-400 transition-colors hover:text-gray-700"
            >
              {client.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
