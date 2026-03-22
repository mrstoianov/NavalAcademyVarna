'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Badge from '@/components/ui/Badge';

interface Program {
  badge: string;
  badgeVariant: 'nav' | 'eng' | 'cadet';
  title: string;
  description: string;
  level: string;
  duration: string;
  form: string;
}

export default function FeaturedPrograms() {
  const t = useTranslations('programs');

  const programs: Program[] = [
    {
      badge: t('navFaculty'),
      badgeVariant: 'nav',
      title: 'Навигация',
      description: 'Подготовка на помощник-капитани за търговския флот — навигация, безопасност, морско право.',
      level: t('bachelor'),
      duration: `4 ${t('years')}`,
      form: t('regular'),
    },
    {
      badge: t('engFaculty'),
      badgeVariant: 'eng',
      title: 'Киберсигурност',
      description: 'Защита на данни, мрежи и информационни системи за публичния и частния сектор.',
      level: t('bachelor'),
      duration: `4 ${t('years')}`,
      form: t('regular'),
    },
    {
      badge: t('military'),
      badgeVariant: 'cadet',
      title: 'Навигация за ВМС',
      description: 'Управление и навигация на военни кораби. Подготовка на офицери за Военноморските сили.',
      level: t('cadet'),
      duration: `5 ${t('years')}`,
      form: t('regular'),
    },
    {
      badge: t('engFaculty'),
      badgeVariant: 'eng',
      title: 'Изкуствен интелект и интелигентни технологии',
      description: 'Интелигентни системи, машинно обучение, автоматизация и анализ на данни.',
      level: t('bachelor'),
      duration: `4 ${t('years')}`,
      form: 'BG / EN',
    },
    {
      badge: t('navFaculty'),
      badgeVariant: 'nav',
      title: 'Управление на водния транспорт',
      description: 'Мениджмънт и логистика на морския транспорт, пристанища и международна търговия.',
      level: t('bachelor'),
      duration: `4 ${t('years')}`,
      form: `${t('regular')} / ${t('partTime')}`,
    },
    {
      badge: t('military'),
      badgeVariant: 'cadet',
      title: 'Кибероперации',
      description: 'Действия в киберпространството за поддържане на сигурността на информационните системи.',
      level: t('cadet'),
      duration: `5 ${t('years')}`,
      form: t('regular'),
    },
  ];

  return (
    <section className="py-20 px-8 bg-white" id="programs">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-4">
          <span className="inline-block text-teal text-[0.78rem] font-bold tracking-[3px] uppercase mb-2">
            {t('label')}
          </span>
          <h2 className="text-[2.2rem] font-extrabold text-navy-darker mb-4 leading-tight">
            {t('title')}
          </h2>
          <p className="text-[1.05rem] text-text-secondary max-w-[600px] mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-white rounded-[14px] p-7 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-border-light transition-all duration-300 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] hover:border-teal before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-teal before:to-teal-light before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
            >
              <Badge variant={program.badgeVariant} className="mb-3">
                {program.badge}
              </Badge>
              <h3 className="text-[1.05rem] font-bold text-navy-darker mb-2 leading-snug">
                {program.title}
              </h3>
              <p className="text-[0.82rem] text-text-muted leading-relaxed">
                {program.description}
              </p>
              <div className="flex gap-4 flex-wrap mt-3">
                <span className="text-[0.76rem] text-text-muted flex items-center gap-1">
                  <span className="text-teal">&#127891;</span> {program.level}
                </span>
                <span className="text-[0.76rem] text-text-muted flex items-center gap-1">
                  <span className="text-teal">&#9203;</span> {program.duration}
                </span>
                <span className="text-[0.76rem] text-text-muted flex items-center gap-1">
                  <span className="text-teal">&#127463;&#127468;</span> {program.form}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-teal font-bold text-[0.95rem] no-underline border-2 border-teal px-8 py-3 rounded-full hover:bg-teal hover:text-white transition-all duration-300"
          >
            {t('viewAll')} &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
