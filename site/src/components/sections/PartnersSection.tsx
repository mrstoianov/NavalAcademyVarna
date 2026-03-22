'use client';

import { useTranslations } from 'next-intl';

export default function PartnersSection() {
  const t = useTranslations('international');

  const partnerTags = ['IAMU', 'IMLA', 'Erasmus+', 'BIP програма', 'NATO', 'UNESCO'];

  return (
    <section className="py-20 px-8 bg-white" id="international">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="bg-gradient-to-br from-sand to-sand-dark rounded-[20px] min-h-[320px] flex items-center justify-center relative overflow-hidden">
            <div className="relative z-[1] bg-white py-7 px-10 rounded-[14px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] text-center">
              <h4 className="text-[1.6rem] font-extrabold text-navy-darker mb-1">
                Erasmus+
              </h4>
              <p className="text-[0.85rem] text-text-muted">2021 &mdash; 2027</p>
              <div className="mt-3 w-[60px] h-[3px] bg-teal mx-auto rounded-sm" />
            </div>
          </div>

          {/* Content side */}
          <div>
            <span className="inline-block text-teal text-[0.78rem] font-bold tracking-[3px] uppercase mb-2">
              {t('label')}
            </span>
            <h2 className="text-[2.2rem] font-extrabold text-navy-darker mb-4 leading-tight">
              {t('title')}
            </h2>
            <p className="text-[1.05rem] text-text-secondary leading-relaxed mb-6">
              {t('description')}
            </p>
            <p className="text-[0.95rem] text-text-secondary leading-relaxed mb-6">
              {t('erasmusDesc')}
            </p>
            <div className="flex flex-wrap gap-2.5 mt-4">
              {partnerTags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#f0fafa] text-teal px-3 py-1.5 rounded-md text-[0.76rem] font-semibold border border-teal/15"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-teal font-bold text-[0.9rem] no-underline hover:gap-3 transition-all"
              >
                {t('learnMore')} &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
