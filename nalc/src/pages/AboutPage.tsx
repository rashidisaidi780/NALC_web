import { Target, Eye, Flag, Heart, CheckCircle2, BriefcaseBusiness, Compass } from 'lucide-react';
import { mission, vision, objectives, coreValues, fieldExperience, futureDirection } from '@/data';
import { SectionHeading } from '@/components/SectionHeading';

export function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-blue-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block animate-fade-up rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-300">
              About NALC Enterprises
            </span>
            <p className="mt-6 animate-fade-up delay-200 max-w-2xl text-lg leading-relaxed text-slate-300">
              NALC Enterprises is the private company, which registered by BRELA under the companiesact of 2019 with the certificate registration no; 1555788941 dated 8th day of April 2022. Our registered office situated in Tabora Tanzania mainland.
              </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="animate-fade-up rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-white">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-slate-900">Our Mission</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{mission}</p>
            </div>
            <div className="animate-fade-up delay-100 rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-white">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-slate-900">Our Vision</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Strategic Goals"
            title="Our Objectives"
            subtitle="The measurable targets that keep our service standards consistently high."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {objectives.map((obj, i) => (
              <div
                key={obj.id}
                className={`animate-fade-up delay-${i * 100} flex gap-5 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-md`}
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Flag className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{obj.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{obj.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Core Values"
            subtitle="The principles that shape every decision, every transaction, and every client relationship."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, i) => (
              <div
                key={value.id}
                className={`group animate-fade-up delay-${(i % 3) * 100} rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-white transition-transform group-hover:scale-110">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Field experience */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Track Record"
            title="Field Experience"
            subtitle="Selected areas of work demonstrating our practical experience across core service lines."
          />
          <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-[700px] w-full text-left text-sm">
                <thead className="bg-blue-950 text-xs uppercase tracking-wider text-white">
                  <tr>
                    <th className="px-5 py-4 font-bold">Customer</th>
                    <th className="px-5 py-4 font-bold">Services Provided</th>
                    <th className="px-5 py-4 font-bold">Contract Value</th>
                    <th className="px-5 py-4 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {fieldExperience.map((entry) => (
                    <tr key={entry.id} className="transition-colors hover:bg-blue-50/50">
                      <td className="px-5 py-5 font-semibold text-slate-900">{entry.customer}</td>
                      <td className="px-5 py-5 text-slate-600">{entry.service}</td>
                      <td className="px-5 py-5 text-slate-600">{entry.contractValue}</td>
                      <td className="px-5 py-5">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                            entry.status === 'Completed'
                              ? 'bg-green-50 text-green-700'
                              : 'bg-blue-50 text-blue-700'
                          }`}
                        >
                          {entry.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Future direction */}
      <section className="bg-blue-950 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-800 bg-blue-900/50 p-8 shadow-xl sm:p-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-white">
              <Compass className="h-6 w-6" />
            </div>
            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-blue-300">Looking Ahead</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">NALC in the Future</h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300">{futureDirection}</p>
            <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-blue-200">
              <BriefcaseBusiness className="h-5 w-5 text-blue-400" />
              Growing with purpose and accountability
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-slate-950 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {[
              { value: '4+', label: 'Years of Experience' },
              { value: '6+', label: 'Service Lines' },
              { value: '500+', label: 'Auctions Conducted' },
              { value: '99%', label: 'Compliance Record' },
            ].map((stat, i) => (
              <div key={stat.label} className={`animate-fade-up delay-${i * 100}`}>
                <p className="text-4xl font-extrabold text-white sm:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance note */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-700">
            <CheckCircle2 className="h-4 w-4" />
            Fully Licensed &amp; Compliant
          </div>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            NALC Enterprises operates under the relevant auctioneering and trade licensing laws. All court-directed engagements are carried out in strict accordance with judicial instructions and statutory requirements.
          </p>
        </div>
      </section>
    </div>
  );
}
