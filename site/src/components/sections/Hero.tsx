'use client';

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-[580px] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-navy-darker from-0% via-[#0a1a30] via-30% to-teal to-70%">
      {/* Radial gradient overlays */}
      <div className="absolute inset-0 z-[1]" style={{
        background: 'radial-gradient(ellipse at 20% 80%, rgba(10,128,128,0.4) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(15,36,64,0.6) 0%, transparent 60%)',
      }} />

      {/* Wave lines */}
      <div className="absolute inset-0 z-[1] opacity-[0.08]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 600">
          <path d="M0 350 Q360 280 720 350 T1440 350" fill="none" stroke="white" strokeWidth="2" />
          <path d="M0 380 Q360 310 720 380 T1440 380" fill="none" stroke="white" strokeWidth="1.5" />
          <path d="M0 410 Q360 340 720 410 T1440 410" fill="none" stroke="white" strokeWidth="1" />
          <path d="M0 440 Q360 370 720 440 T1440 440" fill="none" stroke="white" strokeWidth="0.7" />
        </svg>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-[-2px] left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-[2]" />

      {/* Hero content */}
      <div className="relative z-[3] p-8 max-w-[800px]">
        <div className="inline-block bg-white/[0.12] backdrop-blur-lg border border-white/20 text-sand text-[0.78rem] font-semibold tracking-[3px] uppercase px-6 py-2 rounded-full mb-6">
          &#9875; {t('badge')}
        </div>

        <h1 className="text-white text-[3.2rem] font-extrabold leading-[1.15] tracking-tight mb-3" style={{ textShadow: '0 2px 30px rgba(0,0,0,0.3)' }}>
          <span className="block bg-gradient-to-r from-sand to-white bg-clip-text text-transparent">
            {t('line1')}
          </span>
          <span className="block bg-gradient-to-r from-white to-sand bg-clip-text text-transparent">
            {t('line2')}
          </span>
        </h1>

        <p className="text-white/85 text-xl font-normal mb-8 tracking-wide">
          {t('subtitle')}
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://fees.nvna.eu/"
            className="inline-flex items-center gap-2 bg-coral text-white px-8 py-3.5 rounded-full no-underline font-bold text-[0.95rem] tracking-wide shadow-[0_4px_15px_rgba(224,122,95,0.4)] hover:bg-coral-dark hover:-translate-y-0.5 hover:shadow-[0_6px_25px_rgba(224,122,95,0.5)] transition-all duration-300"
          >
            &#127919; {t('ctaPrimary')}
          </a>
          <a
            href="#programs"
            className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-3.5 rounded-full no-underline font-semibold text-[0.95rem] tracking-wide border-2 border-white/40 hover:bg-white/[0.12] hover:border-white/70 hover:-translate-y-0.5 transition-all duration-300"
          >
            &#128218; {t('ctaSecondary')}
          </a>
        </div>
      </div>
    </section>
  );
}
