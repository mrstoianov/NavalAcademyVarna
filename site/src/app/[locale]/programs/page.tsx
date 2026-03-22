import { setRequestLocale } from 'next-intl/server';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Badge from '@/components/ui/Badge';

const bachelorPrograms = [
  { title: 'Навигация', desc: 'Подготовка на помощник-капитани за търговския флот — навигация, безопасност, морско право.', faculty: 'nav' },
  { title: 'Управление на водния транспорт', desc: 'Мениджмънт и логистика на морския транспорт, пристанища и международна търговия.', faculty: 'nav' },
  { title: 'Корабоводене и пристанищни операции', desc: 'Управление на кораби и пристанищни операции, логистика, безопасност.', faculty: 'nav' },
  { title: 'Логистика', desc: 'Планиране и управление на транспортни процеси.', faculty: 'nav' },
  { title: 'Национална и регионална морска сигурност', desc: 'Защита на морската инфраструктура, управление на риска.', faculty: 'nav' },
  { title: 'Киберсигурност', desc: 'Защита на данни, мрежи и информационни системи за публичния и частния сектор.', faculty: 'eng' },
  { title: 'Софтуерни и мрежови технологии', desc: 'Софтуерни инженери и мрежови специалисти.', faculty: 'eng' },
  { title: 'Информационни и комуникационни технологии', desc: 'ИТ, мрежи, комуникационни технологии.', faculty: 'eng' },
  { title: 'Изкуствен интелект и интелигентни технологии', desc: 'Интелигентни системи, машинно обучение, автоматизация.', faculty: 'eng' },
  { title: 'Дигитална трансформация', desc: 'Технологии и иновации за бизнес модернизация.', faculty: 'eng' },
  { title: 'Корабно електрооборудване', desc: 'Електрозахранване, автоматизация, системи за управление на кораби.', faculty: 'eng' },
  { title: 'Интелигентни системи в транспорта / Мехатроника', desc: 'Мехатроника, ИТ, автоматизация за интелигентни транспортни системи.', faculty: 'eng' },
  { title: 'Корабни машини и механизми', desc: 'Подготовка на помощник-капитани, навигация, безопасност, морско право.', faculty: 'eng' },
  { title: 'Управление на пътнически кораб', desc: 'Организация, управление на пътнически кораби, безопасност, сервиз.', faculty: 'nav' },
  { title: 'Морски сервизен инженер', desc: 'Управление и логистика на морския транспорт.', faculty: 'eng' },
];

const cadetPrograms = [
  { title: 'Навигация за ВМС', desc: 'Управление и навигация на военни кораби.' },
  { title: 'Корабни машини и механизми за ВМС', desc: 'Технически системи на военни кораби.' },
  { title: 'Военноморска комуникация и радиоинженерство', desc: 'Сигурни комуникации и радиосистеми.' },
  { title: 'Кибероперации', desc: 'Действия в киберпространството за поддържане на сигурността.' },
  { title: 'Логистика за ВМС', desc: 'Логистична координация за военна ефективност.' },
  { title: 'Мехатроника', desc: 'Интеграция на механични и електронни системи за морски приложения.' },
  { title: 'Военен лекар', desc: 'Здравеопазване и спешна медицинска помощ за военни.' },
];

export default async function ProgramsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Начало', href: '/' },
          { label: 'Обучение' },
          { label: 'Специалности и специализации' },
        ]}
      />
      <section className="py-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-3xl font-extrabold text-navy-darker mb-2">
            Специалности и специализации
          </h1>
          <p className="text-text-secondary mb-10 max-w-2xl">
            Открий своя път — от навигация и морско инженерство до киберсигурност и изкуствен интелект.
          </p>

          {/* Bachelor's */}
          <h2 className="text-2xl font-bold text-navy-darker mb-6 pb-2 border-b-2 border-teal">
            Бакалавърски програми
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {bachelorPrograms.map((prog) => (
              <div
                key={prog.title}
                className="bg-white rounded-xl p-6 border border-border-light shadow-sm hover:shadow-md hover:border-teal transition-all"
              >
                <Badge variant={prog.faculty === 'nav' ? 'nav' : 'eng'} className="mb-3">
                  {prog.faculty === 'nav' ? 'Навигационен факултет' : 'Инженерен факултет'}
                </Badge>
                <h3 className="text-base font-bold text-navy-darker mb-2">{prog.title}</h3>
                <p className="text-sm text-text-muted">{prog.desc}</p>
              </div>
            ))}
          </div>

          {/* Cadet */}
          <h2 className="text-2xl font-bold text-navy-darker mb-6 pb-2 border-b-2 border-coral">
            Курсантски програми (Военна подготовка)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cadetPrograms.map((prog) => (
              <div
                key={prog.title}
                className="bg-white rounded-xl p-6 border border-border-light shadow-sm hover:shadow-md hover:border-coral transition-all"
              >
                <Badge variant="cadet" className="mb-3">Военна подготовка</Badge>
                <h3 className="text-base font-bold text-navy-darker mb-2">{prog.title}</h3>
                <p className="text-sm text-text-muted">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
