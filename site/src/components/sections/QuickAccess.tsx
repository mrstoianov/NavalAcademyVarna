'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function QuickAccess() {
  const t = useTranslations('quickAccess');

  const cards = [
    {
      href: 'https://fees.nvna.eu/',
      icon: '🎯',
      title: t('apply'),
      desc: t('applyDesc'),
      iconBg: 'from-coral/15 to-coral/5',
      iconColor: 'text-coral',
      external: true,
    },
    {
      href: '/programs',
      icon: '🎓',
      title: t('specialties'),
      desc: t('specialtiesDesc'),
      iconBg: 'from-teal/10 to-teal/5',
      iconColor: 'text-teal',
      external: false,
    },
    {
      href: '/courses',
      icon: '⚓',
      title: t('courses'),
      desc: t('coursesDesc'),
      iconBg: 'from-teal/10 to-teal/5',
      iconColor: 'text-teal',
      external: false,
    },
    {
      href: '/university/about',
      icon: '🌐',
      title: t('erasmus'),
      desc: t('erasmusDesc'),
      iconBg: 'from-teal/10 to-teal/5',
      iconColor: 'text-teal',
      external: false,
    },
  ];

  return (
    <section className="px-8 -mt-[50px] relative z-10">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card) => {
            const content = (
              <>
                <div className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-br ${card.iconBg} rounded-[14px] flex items-center justify-center text-[1.6rem] ${card.iconColor} transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-teal group-hover:to-teal-light group-hover:text-white group-hover:scale-105`}>
                  {card.icon}
                </div>
                <h3 className="text-[0.95rem] font-bold mb-1">{card.title}</h3>
                <p className="text-[0.78rem] text-text-muted leading-relaxed">{card.desc}</p>
              </>
            );

            if (card.external) {
              return (
                <a
                  key={card.title}
                  href={card.href}
                  className="group bg-white rounded-2xl py-7 px-5 text-center shadow-[0_8px_30px_rgba(0,0,0,0.1)] no-underline text-text-primary border border-black/[0.04] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.15)] hover:border-teal block"
                >
                  {content}
                </a>
              );
            }

            return (
              <Link
                key={card.title}
                href={card.href}
                className="group bg-white rounded-2xl py-7 px-5 text-center shadow-[0_8px_30px_rgba(0,0,0,0.1)] no-underline text-text-primary border border-black/[0.04] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.15)] hover:border-teal block"
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
