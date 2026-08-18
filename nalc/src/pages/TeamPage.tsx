import { Linkedin, Mail } from 'lucide-react';
import { team } from '@/data';
import { SectionHeading } from '@/components/SectionHeading';

export function TeamPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-blue-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block animate-fade-up rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-300">
              The People Behind NALC
            </span>
            <h1 className="mt-5 animate-fade-up delay-100 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Our Team
            </h1>
            <p className="mt-6 animate-fade-up delay-200 max-w-2xl text-lg leading-relaxed text-slate-300">
              Experienced professionals leading each division with the expertise and integrity our clients rely on.
            </p>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="Meet Our Leaders"
            subtitle="A blend of legal, operational, and financial expertise guiding every service line."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <article
                key={member.id}
                className={`group animate-fade-up delay-${(i % 3) * 100} overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5`}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-800 transition-colors hover:bg-blue-600 hover:text-white">
                      <Linkedin className="h-4 w-4" />
                    </button>
                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-800 transition-colors hover:bg-blue-600 hover:text-white">
                      <Mail className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-blue-700">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Interested in joining our team?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We are always looking for dedicated professionals in auctioneering, logistics, finance, and facilities management. Reach out to learn about current opportunities.
          </p>
          <button className="mt-6 inline-flex items-center gap-2 rounded-md bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800 hover:shadow-md">
            <Mail className="h-4 w-4" />
            Contact Careers
          </button>
        </div>
      </section>
    </div>
  );
}
