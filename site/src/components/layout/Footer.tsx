'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-navy-darkest text-white/70 pt-16 px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 pb-12 border-b border-white/[0.08]">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-white text-lg font-bold mb-3">
              ВВМУ „Н. Й. Вапцаров"
            </h3>
            <p className="text-[0.84rem] leading-7 text-white/55 mb-4">
              {t('footer.brandDescription')}
            </p>
            <div className="flex gap-2.5">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/[0.08] flex items-center justify-center text-white/60 no-underline text-[0.85rem] hover:bg-teal hover:text-white transition-all"
                title="Facebook"
              >
                f
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/[0.08] flex items-center justify-center text-white/60 no-underline text-[0.85rem] hover:bg-teal hover:text-white transition-all"
                title="YouTube"
              >
                &#9654;
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/[0.08] flex items-center justify-center text-white/60 no-underline text-[0.85rem] hover:bg-teal hover:text-white transition-all"
                title="Instagram"
              >
                &#9675;
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/[0.08] flex items-center justify-center text-white/60 no-underline text-[0.85rem] hover:bg-teal hover:text-white transition-all"
                title="LinkedIn"
              >
                in
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-[0.9rem] font-bold mb-4 tracking-wide">
              {t('footer.quickLinks')}
            </h4>
            <ul className="list-none space-y-2">
              <li>
                <Link href="/university/about" className="text-white/55 no-underline text-[0.82rem] hover:text-teal hover:pl-1 transition-all">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-white/55 no-underline text-[0.82rem] hover:text-teal hover:pl-1 transition-all">
                  {t('nav.specialties')}
                </Link>
              </li>
              <li>
                <a href="https://fees.nvna.eu/" className="text-white/55 no-underline text-[0.82rem] hover:text-teal hover:pl-1 transition-all">
                  {t('nav.admissions')}
                </a>
              </li>
              <li>
                <Link href="/courses" className="text-white/55 no-underline text-[0.82rem] hover:text-teal hover:pl-1 transition-all">
                  {t('nav.courses')}
                </Link>
              </li>
              <li>
                <Link href="/university/about" className="text-white/55 no-underline text-[0.82rem] hover:text-teal hover:pl-1 transition-all">
                  {t('nav.scientificActivities')}
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-white/55 no-underline text-[0.82rem] hover:text-teal hover:pl-1 transition-all">
                  {t('nav.news')}
                </Link>
              </li>
              <li>
                <a href="http://pp.naval-acad.bg/" className="text-white/55 no-underline text-[0.82rem] hover:text-teal hover:pl-1 transition-all">
                  {t('footer.publicProcurement')}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-white text-[0.9rem] font-bold mb-4 tracking-wide">
              {t('footer.resources')}
            </h4>
            <ul className="list-none space-y-2">
              <li>
                <a href="https://teacher.naval-acad.bg/" className="text-white/55 no-underline text-[0.82rem] hover:text-teal hover:pl-1 transition-all">
                  {t('utility.eTeacher')}
                </a>
              </li>
              <li>
                <a href="http://ws.naval-acad.bg" className="text-white/55 no-underline text-[0.82rem] hover:text-teal hover:pl-1 transition-all">
                  {t('utility.webStudent')}
                </a>
              </li>
              <li>
                <a href="https://nvna.eu/wp/" className="text-white/55 no-underline text-[0.82rem] hover:text-teal hover:pl-1 transition-all">
                  {t('utility.schedule')}
                </a>
              </li>
              <li>
                <a href="https://dlc.naval-acad.bg" className="text-white/55 no-underline text-[0.82rem] hover:text-teal hover:pl-1 transition-all">
                  {t('utility.distanceLearning')}
                </a>
              </li>
              <li>
                <a href="https://scholar.nvna.eu/" className="text-white/55 no-underline text-[0.82rem] hover:text-teal hover:pl-1 transition-all">
                  {t('nav.publishingCenter')}
                </a>
              </li>
              <li>
                <a href="https://career.nvna.eu/career/" className="text-white/55 no-underline text-[0.82rem] hover:text-teal hover:pl-1 transition-all">
                  {t('nav.careerCenter')}
                </a>
              </li>
              <li>
                <a href="https://career.nvna.eu/alumni/" className="text-white/55 no-underline text-[0.82rem] hover:text-teal hover:pl-1 transition-all">
                  {t('nav.alumni')}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white text-[0.9rem] font-bold mb-4 tracking-wide">
              {t('footer.contactTitle')}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-[0.82rem] text-white/55">
                <span className="text-teal text-[0.9rem] mt-0.5 shrink-0">&#128205;</span>
                <span>
                  {t('footer.address')}
                  <br />
                  {t('footer.city')}
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-[0.82rem] text-white/55">
                <span className="text-teal text-[0.9rem] mt-0.5 shrink-0">&#128222;</span>
                <span>+359 52 552-377</span>
              </div>
              <div className="flex items-start gap-2.5 text-[0.82rem] text-white/55">
                <span className="text-teal text-[0.9rem] mt-0.5 shrink-0">&#9993;</span>
                <span>info@naval-acad.bg</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[0.78rem] text-white/35">
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[0.78rem] text-white/35 no-underline hover:text-teal transition-colors">
              {t('footer.accessibility')}
            </a>
            <a href="#" className="text-[0.78rem] text-white/35 no-underline hover:text-teal transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="http://pp.naval-acad.bg/" className="text-[0.78rem] text-white/35 no-underline hover:text-teal transition-colors">
              {t('footer.publicProcurement')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
