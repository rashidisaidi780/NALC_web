import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { Logo } from './Logo';
import type { PageId } from './Navbar';

type FooterProps = {
  onNavigate: (page: PageId) => void;
};

export function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Auctioneers, court brokers, logistics, cleaning, forwarding, and commission services delivered with integrity and professionalism.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {([
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'structure', label: 'Organization Structure' },
                { id: 'team', label: 'Our Team' },
                { id: 'charges', label: 'Service Charges' },
              ] as { id: PageId; label: string }[]).map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => onNavigate(l.id)}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>Auctioneers</li>
              <li>Auction Mart & Court Brokers</li>
              <li>Logistics</li>
              <li>Cleaning & Forwarding Agents</li>
              <li>Office Cleaners & Stationers</li>
              <li>Commission Agents & Debt Collectors</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                <span>P.O. Box 1172, Tabora, Tanzania</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0 text-blue-400" />
                <span>+255 52 492 227 / +255 769 895 396</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0 text-blue-400" />
                <span>nalcenterprises@yahoo.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                <span>Mon – Fri: 8:00 AM – 5:30 PM </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>&copy; {year} NALC Enterprises. All rights reserved.</p>
          <p>Licensed Auctioneers &amp; Sworn Court Brokers</p>
        </div>
      </div>
    </footer>
  );
}
