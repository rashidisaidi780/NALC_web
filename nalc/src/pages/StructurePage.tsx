import { Building2 } from 'lucide-react';
import { orgStructure } from '@/data';
import { SectionHeading } from '@/components/SectionHeading';

export function StructurePage() {
  const org = {
    dg: orgStructure.find((n) => n.id === 'dg'),
    ps: orgStructure.find((n) => n.id === 'ps'),
    gm: orgStructure.find((n) => n.id === 'gm'),
    managers: orgStructure.filter((n) => n.level === 2),
    assistants: orgStructure.filter((n) => n.level === 3),
    support: orgStructure.filter((n) => n.level === 4),
  };

  const Card = ({ node }: { node: (typeof orgStructure)[number] }) => (
    <div className="w-48 rounded-lg border-2 border-white bg-blue-700 px-4 py-5 text-center text-white shadow-lg">
      <div className="text-sm font-bold uppercase tracking-wide">{node.title}</div>
      <div className="mt-1 text-xs opacity-90">{node.name}</div>
    </div>
  );

  return (
    <div className="bg-slate-50">
      {/* Header */}
      <section className="bg-blue-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block animate-fade-up rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-300">
              How We Are Organized
            </span>
            <h1 className="mt-5 animate-fade-up delay-100 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Organization Structure
            </h1>
            <p className="mt-6 animate-fade-up delay-200 max-w-2xl text-lg leading-relaxed text-slate-300">
              A clear chain of command ensures accountability, efficient decision-making, and consistent service delivery across all our business lines.
            </p>
          </div>
        </div>
      </section>

      {/* Org Chart */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leadership Hierarchy"
            title="Reporting Structure"
            subtitle="From the Director General down to each operational team."
          />

          <div className="mt-20 flex flex-col items-center gap-12">
            {/* Level 0: Director General */}
            <div className="flex justify-center">
              {org.dg && <Card node={org.dg} />}
            </div>

            {/* Connector */}
            <div className="relative h-8 w-1 bg-blue-700">
              <div className="absolute left-1/2 top-full h-8 w-1 -translate-x-1/2 bg-blue-700"></div>
            </div>

            {/* Level 1: Personal Secretary and General Manager */}
            <div className="relative flex w-full justify-between px-8">
              <div className="absolute left-1/2 top-0 h-16 w-1 -translate-x-1/2 bg-blue-700"></div>
              <div className="absolute left-1/2 top-16 w-full -translate-x-1/2 border-t-2 border-blue-700"></div>

              <div className="flex flex-col items-center gap-4">
                {org.ps && <Card node={org.ps} />}
                <div className="h-4 w-1 bg-blue-700"></div>
              </div>

              <div className="flex flex-col items-center gap-4">
                {org.gm && <Card node={org.gm} />}
                <div className="h-4 w-1 bg-blue-700"></div>
              </div>
            </div>

            {/* Connector */}
            <div className="h-8 w-1 bg-blue-700"></div>

            {/* Level 2: Managers */}
            <div className="relative flex w-full justify-around px-4">
              <div className="absolute left-0 top-0 h-16 w-full border-t-2 border-blue-700"></div>

              {org.managers.map((node) => (
                <div key={node.id} className="flex flex-col items-center gap-4">
                  <div className="absolute -top-16 h-16 w-1 bg-blue-700" style={{ left: '50%', transform: 'translateX(-50%)' }}></div>
                  <Card node={node} />
                  <div className="h-4 w-1 bg-blue-700"></div>
                </div>
              ))}
            </div>

            {/* Connector */}
            <div className="relative h-8 w-full">
              <div className="absolute left-1/4 top-0 h-8 w-1 bg-blue-700"></div>
              <div className="absolute left-3/4 top-0 h-8 w-1 bg-blue-700"></div>
              <div className="absolute top-8 h-1 w-1/2 left-1/4 -translate-y-1 bg-blue-700"></div>
            </div>

            {/* Level 3: Assistant Officers */}
            <div className="flex w-full justify-around px-4 gap-12">
              {org.assistants.map((node) => (
                <div key={node.id} className="flex flex-col items-center gap-4">
                  <Card node={node} />
                  <div className="h-4 w-1 bg-blue-700"></div>
                </div>
              ))}
            </div>

            {/* Connector */}
            <div className="relative h-8 w-full">
              <div className="absolute left-1/4 top-0 h-8 w-1 bg-blue-700"></div>
              <div className="absolute right-1/4 top-0 h-8 w-1 bg-blue-700"></div>
              <div className="absolute top-8 h-1 w-1/2 left-1/4 -translate-y-1 bg-blue-700"></div>
            </div>

            {/* Level 4: Support Staff */}
            <div className="flex justify-around w-full px-4 gap-12">
              {org.support.map((node) => (
                <div key={node.id}>
                  <Card node={node} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Details */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="Key Team Members"
            subtitle="Meet the leaders driving our organization's success."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {orgStructure
              .filter((n) => n.level <= 1)
              .map((node) => (
                <div
                  key={node.id}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-700 text-white">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{node.title}</h3>
                      <p className="mt-1 text-sm text-slate-600">{node.name}</p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-500">
                        {node.title === 'DIRECTOR GENERAL'
                          ? 'Founder and managing director overseeing all company operations and strategic direction.'
                          : node.title === 'PERSONAL SECRETARY'
                          ? 'Providing executive support and administrative coordination to the Director General.'
                          : node.title === 'GENERAL MANAGER'
                          ? 'Responsible for all daily company operations and ensuring team accountability.'
                          : 'Leading their respective departments and reporting to the General Manager.'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
