'use client';

import { useTranslations } from 'next-intl';
import StatCard from '@/components/ui/StatCard';

export default function StatsSection() {
  const t = useTranslations('stats');

  const statsRow1 = [
    { value: '145', label: t('yearsHistory') },
    { value: '2', label: t('faculties') },
    { value: '10', label: t('departments') },
    { value: '45', suffix: '+', label: t('specialtiesCount') },
  ];

  const statsRow2 = [
    { value: '11', label: t('simulators') },
    { value: '13', label: t('doctoralPrograms') },
    { value: '60', suffix: '+', label: t('maritimeCourses') },
    { value: '40', suffix: '+', label: t('partnerCountries') },
  ];

  return (
    <section className="bg-gradient-to-br from-teal from-0% via-teal-dark via-40% to-navy-darker to-100% py-[4.5rem] px-8 relative overflow-hidden">
      {/* Wave pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 300">
          <path d="M0 100 Q360 50 720 100 T1440 100" fill="none" stroke="white" strokeWidth="2" />
          <path d="M0 150 Q360 100 720 150 T1440 150" fill="none" stroke="white" strokeWidth="1.5" />
          <path d="M0 200 Q360 150 720 200 T1440 200" fill="none" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-[1100px] mx-auto relative z-[1]">
        <div className="text-center mb-12">
          <span className="inline-block text-white/60 text-[0.78rem] font-bold tracking-[3px] uppercase mb-2">
            {t('label')}
          </span>
          <h2 className="text-[2.2rem] font-extrabold text-white leading-tight">
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsRow1.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
          {statsRow2.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
