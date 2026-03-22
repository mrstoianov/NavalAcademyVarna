import { setRequestLocale } from 'next-intl/server';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export default async function OrganizationPage({
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
          { label: 'Университет' },
          { label: 'Структура' },
        ]}
      />
      <section className="py-16 px-8">
        <div className="max-w-[1000px] mx-auto">
          <h1 className="text-3xl font-extrabold text-navy-darker mb-8">Структура</h1>

          {/* Leadership */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-navy-darker mb-4 pb-2 border-b-2 border-teal">
              Ръководство
            </h2>
            <div className="bg-bg-alt rounded-xl p-6 mb-4">
              <h3 className="font-bold text-navy-darker mb-1">Началник на ВВМУ</h3>
              <p className="text-text-secondary">Флотилен адмирал проф. д-р Калин Калинов</p>
              <p className="text-sm text-text-muted mt-1">
                Тел: +359 52 552-377 | Email: info@naval-acad.bg
              </p>
            </div>
          </div>

          {/* Faculties */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-navy-darker mb-4 pb-2 border-b-2 border-teal">
              Академични структури
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-border-light shadow-sm">
                <h3 className="font-bold text-teal mb-2">Факултет &bdquo;Навигационен&ldquo;</h3>
                <p className="text-sm text-text-secondary">
                  Декан: Капитан I ранг проф. д-р Недко Димитров
                </p>
                <p className="text-xs text-text-muted mt-1">
                  Тел: +359 52 552-260
                </p>
                <div className="mt-3 text-xs text-text-muted space-y-1">
                  <p>Катедра &bdquo;Морска тактика и организация&ldquo;</p>
                  <p>Катедра &bdquo;Корабоводене&ldquo;</p>
                  <p>Катедра &bdquo;Национална сигурност&ldquo;</p>
                  <p>Катедра &bdquo;Управление на морския транспорт&ldquo;</p>
                  <p>Катедра &bdquo;Езикова подготовка&ldquo;</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-border-light shadow-sm">
                <h3 className="font-bold text-teal mb-2">Факултет &bdquo;Инженерен&ldquo;</h3>
                <p className="text-sm text-text-secondary">
                  Декан: Капитан I ранг проф. д-р Ивайло Бакалов
                </p>
                <p className="text-xs text-text-muted mt-1">
                  Тел: +359 52 552-270
                </p>
                <div className="mt-3 text-xs text-text-muted space-y-1">
                  <p>Катедра &bdquo;Корабни машини и механизми&ldquo;</p>
                  <p>Катедра &bdquo;Електротехника&ldquo;</p>
                  <p>Катедра &bdquo;Мехатроника&ldquo;</p>
                  <p>Катедра &bdquo;Електроника&ldquo;</p>
                  <p>Катедра &bdquo;Информационни технологии&ldquo;</p>
                </div>
              </div>
            </div>
          </div>

          {/* Other units */}
          <div>
            <h2 className="text-xl font-bold text-navy-darker mb-4 pb-2 border-b-2 border-teal">
              Други структури
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-bg-alt rounded-lg p-4">
                <h4 className="font-bold text-sm text-navy-darker mb-1">ДСДКДО</h4>
                <p className="text-xs text-text-muted">Следдипломна квалификация</p>
              </div>
              <div className="bg-bg-alt rounded-lg p-4">
                <h4 className="font-bold text-sm text-navy-darker mb-1">Проф. старшински колеж</h4>
                <p className="text-xs text-text-muted">Професионални сержанти</p>
              </div>
              <div className="bg-bg-alt rounded-lg p-4">
                <h4 className="font-bold text-sm text-navy-darker mb-1">УЦ Кибероперации</h4>
                <p className="text-xs text-text-muted">Учебен център</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
