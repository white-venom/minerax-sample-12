import React from 'react';
import { ShieldCheck, Award, FileCheck, CheckCircle } from 'lucide-react';

const certs = [
  {
    icon: <ShieldCheck size={32} className="text-amber-500" />,
    title: 'ISO 9001:2015',
    desc: 'Quality Management Systems',
  },
  {
    icon: <Award size={32} className="text-amber-500" />,
    title: 'ISO 14001:2015',
    desc: 'Environmental Management',
  },
  {
    icon: <CheckCircle size={32} className="text-amber-500" />,
    title: 'OHSAS 18001',
    desc: 'Occupational Health & Safety',
  },
  {
    icon: <FileCheck size={32} className="text-amber-500" />,
    title: 'World Steel Assoc.',
    desc: 'Climate Action Member',
  },
];

export default function Certifications() {
  return (
    <section className="bg-slate-900 border-t border-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {certs.map((cert, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4 pt-8 md:pt-0">
              <div className="mb-4 p-4 bg-slate-800 rounded-sm">
                {cert.icon}
              </div>
              <h3 className="text-white font-semibold text-lg tracking-wide mb-2">{cert.title}</h3>
              <p className="text-slate-400 text-sm">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
