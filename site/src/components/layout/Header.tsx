'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { useState } from 'react';
import Navigation from './Navigation';

export default function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Utility Bar */}
      <div className="bg-navy-darkest text-white/70 text-[0.8rem] py-1 border-b border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto px-8 flex justify-between items-center flex-wrap gap-2">
          <div className="flex gap-5 flex-wrap">
            <a href="https://teacher.naval-acad.bg/" className="text-white/65 no-underline text-[0.78rem] tracking-wide hover:text-teal transition-colors">
              {t('utility.eTeacher')}
            </a>
            <a href="http://ws.naval-acad.bg" className="text-white/65 no-underline text-[0.78rem] tracking-wide hover:text-teal transition-colors">
              {t('utility.webStudent')}
            </a>
            <a href="https://nvna.eu/wp/" className="text-white/65 no-underline text-[0.78rem] tracking-wide hover:text-teal transition-colors">
              {t('utility.schedule')}
            </a>
            <a href="https://dlc.naval-acad.bg" className="text-white/65 no-underline text-[0.78rem] tracking-wide hover:text-teal transition-colors">
              {t('utility.distanceLearning')}
            </a>
            <a href="https://nvna.eu" className="text-white/65 no-underline text-[0.78rem] tracking-wide hover:text-teal transition-colors">
              {t('utility.infoCenter')}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex border border-white/20 rounded overflow-hidden">
              <Link
                href={pathname}
                locale="bg"
                className="px-2.5 py-0.5 text-[0.75rem] font-semibold no-underline transition-all bg-teal text-white"
              >
                BG
              </Link>
              <Link
                href={pathname}
                locale="en"
                className="px-2.5 py-0.5 text-white/60 text-[0.75rem] font-semibold no-underline hover:bg-white/10 hover:text-white transition-all"
              >
                EN
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-navy-darker py-3 sticky top-0 z-[1000] shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
        <div className="max-w-[1280px] mx-auto px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 no-underline shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-teal to-teal-light rounded-full flex items-center justify-center text-lg font-extrabold text-white tracking-tight border-2 border-white/20">
              &#9875;
            </div>
            <div className="flex flex-col">
              <span className="text-white text-base font-bold tracking-wide leading-tight">
                {t('meta.title').split('—')[0].trim()}
              </span>
              <span className="text-white/55 text-[0.68rem] tracking-widest uppercase font-medium">
                Висше Военноморско Училище
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="bg-transparent border border-white/20 text-white/70 w-10 h-10 rounded-full cursor-pointer flex items-center justify-center text-base hover:bg-white/10 hover:text-white hover:border-white/40 transition-all"
              title={t('common.search')}
            >
              &#128269;
            </button>
            <button className="md:hidden bg-transparent border-none text-white text-2xl cursor-pointer p-1 nav-toggle">
              &#9776;
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <Navigation />

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-navy-darker/95 z-[2000] flex items-start justify-center pt-32">
          <div className="w-full max-w-2xl px-8">
            <div className="flex items-center gap-4 mb-8">
              <input
                type="text"
                placeholder={t('common.search') + '...'}
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white text-lg placeholder-white/40 outline-none focus:border-teal"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-white/60 hover:text-white text-2xl bg-transparent border-none cursor-pointer"
              >
                &#10005;
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
