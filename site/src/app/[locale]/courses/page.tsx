import { setRequestLocale } from 'next-intl/server';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export default async function CoursesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const courseCategories = [
    {
      title: 'Морски курсове',
      description: 'Квалификационни курсове за морски специалисти съгласно изискванията на STCW конвенцията.',
      courses: [
        'Основен курс по безопасност',
        'Медицинска първа помощ на борда',
        'Управление на тълпата',
        'Пожарна безопасност — разширен курс',
        'Лични оцеляване',
        'Радарно наблюдение и плотиране',
        'ECDIS',
        'GMDSS GOC',
        'Осигуряване на морска сигурност',
      ],
    },
    {
      title: 'ИТ курсове',
      description: 'Професионални ИТ курсове за квалификация и преквалификация.',
      courses: [
        'Основи на програмирането',
        'Мрежови технологии',
        'Киберсигурност — основен курс',
        'Бази данни и SQL',
        'Уеб разработка',
      ],
    },
    {
      title: 'Езикови курсове LangMar',
      description: 'Езикова подготовка за морски специалисти и широката общественост.',
      courses: [
        'Английски език — морски',
        'Английски език — общ',
        'Подготовка за STANAG',
        'Подготовка за ALCPT',
      ],
    },
    {
      title: 'Йонизиращи лъчения',
      description: 'Специализирани курсове за работа с източници на йонизиращи лъчения.',
      courses: [
        'Курс за работа с ИЙЛ',
        'Курс за радиационна защита',
      ],
    },
  ];

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Начало', href: '/' },
          { label: 'Курсове' },
        ]}
      />
      <section className="py-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-3xl font-extrabold text-navy-darker mb-2">Курсове</h1>
          <p className="text-text-secondary mb-10 max-w-2xl">
            60+ морски, ИТ и езикови квалификационни курсове за професионално развитие.
          </p>

          <div className="space-y-10">
            {courseCategories.map((category) => (
              <div key={category.title}>
                <h2 className="text-xl font-bold text-navy-darker mb-3 pb-2 border-b-2 border-teal">
                  {category.title}
                </h2>
                <p className="text-text-secondary mb-4 text-sm">{category.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {category.courses.map((course) => (
                    <div
                      key={course}
                      className="bg-white rounded-lg p-4 border border-border-light hover:border-teal transition-colors flex items-center gap-3"
                    >
                      <span className="text-teal">&#9654;</span>
                      <span className="text-sm text-text-primary">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
