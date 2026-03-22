import { setRequestLocale } from 'next-intl/server';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

const newsArticles = [
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
  {
    date: '8 декември 2025',
    author: 'Георги Николов',
    title: 'Честит празник',
    excerpt: 'Поздравления по повод студентския празник.',
    link: 'https://www.naval-acad.bg/2025/13290',
  },
  {
    date: '28 ноември 2025',
    author: 'Росица Колева',
    title: 'Още 234 студенти от Випуск 2025 получиха своите дипломи',
    excerpt: 'Втора смяна випускници от 2025 г. успешно завършиха обучението си.',
    link: 'https://www.naval-acad.bg/2025/13210',
  },
  {
    date: '26 ноември 2025',
    author: 'Росица Колева',
    title: 'Морско училище бе домакин на изложение на варненските университети',
    excerpt: 'ВВМУ представи образователните си програми на изложение за университети във Варна.',
    link: 'https://www.naval-acad.bg/2025/13175',
  },
];

export default async function NewsPage({
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
          { label: 'Новини' },
        ]}
      />
      <section className="py-16 px-8">
        <div className="max-w-[900px] mx-auto">
          <h1 className="text-3xl font-extrabold text-navy-darker mb-8">Новини</h1>

          <div className="space-y-6">
            {newsArticles.map((article) => (
              <a
                key={article.link}
                href={article.link}
                className="block bg-white rounded-xl p-6 border border-border-light shadow-sm hover:shadow-md hover:border-teal transition-all no-underline text-inherit"
              >
                <div className="text-[0.75rem] text-teal font-semibold mb-2 tracking-wide">
                  {article.date} &bull; {article.author}
                </div>
                <h2 className="text-lg font-bold text-navy-darker mb-2 leading-snug">
                  {article.title}
                </h2>
                <p className="text-sm text-text-muted leading-relaxed">
                  {article.excerpt}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
