import { useState } from 'react';
import { Download, Info } from 'lucide-react';
import { charges } from '@/data';
import { SectionHeading } from '@/components/SectionHeading';

export function ChargesPage() {
  const services = ['All Services', ...Array.from(new Set(charges.map((c) => c.service)))];
  const [filter, setFilter] = useState('All Services');

  const rows = filter === 'All Services' ? charges : charges.filter((c) => c.service === filter);

  return (
    <div className="bg-slate-50">
      {/* Header */}
      <section className="bg-blue-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block animate-fade-up rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-300">
              Pricing &amp; Rates
            </span>
            <h1 className="mt-5 animate-fade-up delay-100 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Categorical Charges for Service Delivery
            </h1>
            <p className="mt-6 animate-fade-up delay-200 max-w-2xl text-lg leading-relaxed text-slate-300">
              Transparent, standardised rates across all our service categories. All charges are negotiable for recurring clients and high-volume engagements.
            </p>
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Fee Schedule"
            title="Service Charges Table"
            subtitle="Filter by service category to view the applicable rates, units, and notes."
          />

          {/* Filter pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {services.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  filter === s
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-700'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-900">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-white">
                     Particular of Services
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-white">
                      commission
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-white">
                     Non-Commission charges
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-white">
                      
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-white">
                      
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {rows.map((row, i) => (
                    <tr
                      key={`${row.service}-${row.commission}-${i}`}
                      className={`animate-fade-in transition-colors hover:bg-blue-50/40 ${
                        i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                      }`}
                    >
                      <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                        {row.service}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-700">{row.commission}</td>
                      <td className="px-6 py-4 text-sm text-slate-500">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Notes */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="flex gap-3 rounded-xl border border-blue-200 bg-blue-50 p-5">
              <Info className="h-5 w-5 flex-shrink-0 text-blue-700" />
              <div>
                <h3 className="text-sm font-bold text-slate-900">Good to Know</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  All percentage based charges are calculated on the final transaction value. Minimum fees may apply for smaller engagements. Rates are reviewed periodically.
                </p>
              </div>
            </div>
            <div className="flex gap-3 rounded-xl border border-slate-200 bg-white p-5">
              <Download className="h-5 w-5 flex-shrink-0 text-slate-700" />
              <div>
                <h3 className="text-sm font-bold text-slate-900">Need a Custom Quote?</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  For bulk, recurring, or specialised engagements, contact us for a tailored proposal that reflects your specific requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
