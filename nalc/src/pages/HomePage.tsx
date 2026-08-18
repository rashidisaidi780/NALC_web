import { ArrowRight, CheckCircle2, Target, Eye, Flag, Heart } from 'lucide-react';
import { services, mission, vision, objectives, coreValues } from '@/data';
import { SectionHeading } from '@/components/SectionHeading';
import type { PageId } from '@/components/Navbar';

type HomePageProps = {
  onNavigate: (page: PageId) => void;
};

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/37320179/pexels-photo-37320179.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Modern corporate building"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/90 to-blue-950/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block animate-fade-up rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-300">
              Licensed Auctioneers &amp; Court Brokers
            </span>
            <h1 className="mt-5 animate-fade-up delay-100 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Professional services you can{' '}
              <span className="text-blue-400">trust</span>, delivered with integrity.
            </h1>
            <p className="mt-6 animate-fade-up delay-200 max-w-2xl text-lg leading-relaxed text-slate-300">
              NALC Enterprises provides auctioneering, logistics, cleaning, forwarding, and commission agency services. All under one accountable roof.
            </p>
            <p className="mt-6 animate-fade-up delay-200 max-w-2xl text-lg leading-relaxed text-slate-300">
              The Company has been registered under government policy and regulation. Enclosed documents certificates of incorporation, TIN number and business license.
            </p>
            <div className="mt-8 animate-fade-up delay-300 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => onNavigate('charges')}
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 hover:shadow-blue-500/40"
              >
                View Service Charges
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center justify-center rounded-md border border-slate-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                About Our Company
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Services"
            subtitle="A comprehensive suite of professional services built on legal compliance, transparency, and operational discipline."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <article
                key={service.id}
                className={`group animate-fade-up delay-${(i % 3) * 100} overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5`}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 right-5 text-xl font-bold text-white drop-shadow">
                    {service.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values preview */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Purpose"
            title="Mission, Vision &amp; Core Values"
            subtitle="The principles that guide every engagement and every relationship we build."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <div className="animate-fade-up rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{mission}</p>
            </div>
            <div className="animate-fade-up delay-100 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{vision}</p>
            </div>
            <div className="animate-fade-up delay-200 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">Core Values</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                {coreValues.slice(0, 6).map((v) => (
                  <li key={v.id} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    {v.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('about')}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-800"
            >
              Read our full mission, objectives &amp; values
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Objectives strip */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            eyebrow="Strategic Goals"
            title="Our Objectives"
            subtitle="Clear targets that keep our standards high and our clients satisfied."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {objectives.map((obj, i) => (
              <div
                key={obj.id}
                className={`animate-fade-up delay-${i * 100} rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition-colors hover:border-blue-700`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Flag className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-white">{obj.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{obj.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 to-blue-900 px-8 py-14 text-center shadow-xl sm:px-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to work with a team you can trust?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-blue-100">
              From auctioneering to logistics and debt recovery, NALC Enterprises delivers dependable, transparent service.
            </p>
            <button
              onClick={() => onNavigate('charges')}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-bold text-blue-700 shadow-sm transition-all hover:bg-blue-50 hover:shadow-md"
            >
              View Categorical Charges
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
