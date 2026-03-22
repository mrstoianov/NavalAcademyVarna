'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

interface NavItem {
  labelKey: string;
  href?: string;
  external?: boolean;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    labelKey: 'nav.university',
    children: [
      { labelKey: 'nav.about', href: '/university/about' },
      { labelKey: 'nav.structure', href: '/university/organization' },
      { labelKey: 'nav.traditions', href: '/university/about' },
      { labelKey: 'nav.facilities', href: '/university/about' },
      { labelKey: 'nav.accreditation', href: '/university/about' },
      { labelKey: 'nav.pressCenter', href: '/news' },
    ],
  },
  {
    labelKey: 'nav.training',
    children: [
      { labelKey: 'nav.specialties', href: '/programs' },
      { labelKey: 'nav.doctoral', href: '/programs' },
      { labelKey: 'nav.handbook', href: '/programs' },
    ],
  },
  {
    labelKey: 'nav.admissions',
    href: 'https://fees.nvna.eu/',
    external: true,
  },
  {
    labelKey: 'nav.courses',
    href: '/courses',
    children: [
      { labelKey: 'nav.maritimeCourses', href: '/courses' },
      { labelKey: 'nav.itCourses', href: '/courses' },
      { labelKey: 'nav.languageCourses', href: '/courses' },
      { labelKey: 'nav.radiationCourse', href: '/courses' },
    ],
  },
  {
    labelKey: 'nav.science',
    children: [
      { labelKey: 'nav.scientificActivities', href: '/university/about' },
      { labelKey: 'nav.conferences', href: '/news' },
      { labelKey: 'nav.publishingCenter', href: 'https://scholar.nvna.eu/', external: true },
    ],
  },
  {
    labelKey: 'nav.international',
    children: [
      { labelKey: 'nav.partnerships', href: '/university/about' },
      { labelKey: 'nav.erasmus', href: '/university/about' },
    ],
  },
  {
    labelKey: 'nav.students',
    children: [
      { labelKey: 'nav.studentCouncil', href: 'http://studentcouncil.naval-acad.bg/', external: true },
      { labelKey: 'nav.careerCenter', href: 'https://career.nvna.eu/career/', external: true },
      { labelKey: 'nav.alumni', href: 'https://career.nvna.eu/alumni/', external: true },
      { labelKey: 'nav.sportsClub', href: 'https://uvsk.nvna.eu/', external: true },
    ],
  },
  {
    labelKey: 'nav.news',
    href: '/news',
  },
];

export default function Navigation() {
  const t = useTranslations();

  return (
    <nav className="bg-navy-mid border-t border-white/[0.06] sticky top-16 z-[999]">
      <div className="max-w-[1280px] mx-auto px-8 overflow-x-auto">
        <ul className="flex list-none gap-0 justify-center">
          {navItems.map((item) => (
            <li key={item.labelKey} className="relative group">
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-3.5 px-5 text-white/80 no-underline text-[0.88rem] font-medium tracking-wide border-b-[3px] border-transparent whitespace-nowrap hover:text-white hover:bg-teal/15 hover:border-b-teal transition-all"
                >
                  {t(item.labelKey)}
                </a>
              ) : (
                <Link
                  href={item.href || '/'}
                  className="block py-3.5 px-5 text-white/80 no-underline text-[0.88rem] font-medium tracking-wide border-b-[3px] border-transparent whitespace-nowrap hover:text-white hover:bg-teal/15 hover:border-b-teal transition-all"
                >
                  {t(item.labelKey)}
                </Link>
              )}

              {item.children && (
                <ul className="absolute top-full left-0 min-w-[260px] bg-white shadow-[0_8px_32px_rgba(0,0,0,0.18)] rounded-b-lg opacity-0 invisible -translate-y-1 transition-all duration-[250ms] ease-out list-none z-[1000] border-t-[3px] border-t-teal group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                  {item.children.map((child) =>
                    child.external ? (
                      <li key={child.labelKey}>
                        <a
                          href={child.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block py-2.5 px-5 text-text-primary no-underline text-[0.84rem] border-l-[3px] border-l-transparent hover:bg-[#f0fafa] hover:text-teal hover:border-l-teal transition-all last:rounded-b-lg"
                        >
                          {t(child.labelKey)}
                        </a>
                      </li>
                    ) : (
                      <li key={child.labelKey}>
                        <Link
                          href={child.href || '/'}
                          className="block py-2.5 px-5 text-text-primary no-underline text-[0.84rem] border-l-[3px] border-l-transparent hover:bg-[#f0fafa] hover:text-teal hover:border-l-teal transition-all last:rounded-b-lg"
                        >
                          {t(child.labelKey)}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
