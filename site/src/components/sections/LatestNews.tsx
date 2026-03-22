'use client';

import { useTranslations } from 'next-intl';

interface NewsItem {
  date: string;
  author: string;
  title: string;
  excerpt: string;
  link: string;
}

interface EventItem {
  day: string;
  month: string;
  title: string;
  details: string;
  highlight?: boolean;
}

export default function LatestNews() {
  const t = useTranslations('news');

  const newsItems: NewsItem[] = [
    {
      date: '19 март 2026',
      author: 'Яница Минкова',
      title: 'Пристигна втората група за обучение по програма BIP във ВВМУ „Н. Й. Вапцаров"',
      excerpt: 'Студенти и курсанти от Гърция, Румъния, Италия, Нидерландия и Украйна пристигнаха за международно обучение по програмата.',
      link: 'https://www.naval-acad.bg/2026/14123',
    },
    {
      date: '17 март 2026',
      author: 'Георги Николов',
      title: 'Тържествено честване на 145 години от създаването на ВВМУ „Н. Й. Вапцаров" в Русе',
      excerpt: 'На 17 март 2026 г. бе отбелязана 145-ата годишнина от основаването на Морското училище.',
      link: 'https://www.naval-acad.bg/2026/14003',
    },
    {
      date: '14 март 2026',
      author: 'Яница Минкова',
      title: 'Участие на академичен състав от ВВМУ в специализиран симулаторен лагер',
      excerpt: 'Преподаватели от академията участваха в симулаторен лагер в морски институт в Нидерландия.',
      link: 'https://www.naval-acad.bg/2026/13999',
    },
  ];

  const events: EventItem[] = [
    {
      day: '26',
      month: 'МАР',
      title: 'Black Sea Maritime Security Conference',
      details: '26-27 март 2026 г. \u2022 ВВМУ, Варна',
    },
    {
      day: '15',
      month: 'АПР',
      title: 'Ден на отворените врати',
      details: 'Запознаване с академията за кандидат-студенти',
    },
    {
      day: '01',
      month: 'ЮНИ',
      title: 'Начало на кандидатстудентска кампания 2026/2027',
      details: 'Онлайн и присъствено подаване на документи',
    },
    {
      day: '15',
      month: 'СЕП',
      title: 'Тържествено откриване на учебната 2026/2027 г.',
      details: 'Военна клетва и начало на новата академична година',
      highlight: true,
    },
  ];

  return (
    <section className="py-20 px-8 bg-bg-alt" id="news">
      <div className="max-w-[1200px] mx-auto">
        <span className="inline-block text-teal text-[0.78rem] font-bold tracking-[3px] uppercase mb-2">
          {t('label')}
        </span>
        <h2 className="text-[2.2rem] font-extrabold text-navy-darker mb-4 leading-tight">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 mt-10">
          {/* News column */}
          <div className="flex flex-col gap-5">
            {newsItems.map((item) => (
              <a
                key={item.link}
                href={item.link}
                className="bg-white rounded-xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-border-light no-underline text-inherit block transition-all duration-[250ms] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] hover:border-teal"
              >
                <div className="text-[0.75rem] text-teal font-semibold mb-1.5 tracking-wide">
                  {item.date} &bull; {item.author}
                </div>
                <h3 className="text-[0.95rem] font-bold text-navy-darker mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[0.82rem] text-text-muted leading-relaxed">
                  {item.excerpt}
                </p>
              </a>
            ))}
          </div>

          {/* Events column */}
          <div>
            <h3 className="text-lg font-bold text-navy-darker mb-5 flex items-center gap-2">
              &#128197; {t('upcomingEvents')}
            </h3>
            <div className="flex flex-col gap-4">
              {events.map((event) => (
                <div
                  key={event.title}
                  className="flex gap-4 items-start p-4 bg-white rounded-[10px] border border-border-light transition-all duration-200 hover:border-coral"
                >
                  <div
                    className={`min-w-[54px] text-center rounded-[10px] py-2 px-1.5 shrink-0 ${
                      event.highlight
                        ? 'bg-gradient-to-br from-coral to-coral-dark'
                        : 'bg-gradient-to-br from-teal to-teal-light'
                    }`}
                  >
                    <span className="block text-xl font-extrabold text-white leading-none">
                      {event.day}
                    </span>
                    <span className="block text-[0.65rem] text-white/80 uppercase font-semibold tracking-widest mt-0.5">
                      {event.month}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-[0.88rem] font-bold text-navy-darker leading-snug mb-0.5">
                      {event.title}
                    </h4>
                    <p className="text-[0.76rem] text-text-muted">
                      {event.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
