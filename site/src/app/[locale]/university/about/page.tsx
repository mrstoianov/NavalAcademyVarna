import { setRequestLocale } from 'next-intl/server';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export default async function AboutPage({
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
          { label: 'За нас' },
        ]}
      />
      <section className="py-16 px-8">
        <div className="max-w-[900px] mx-auto">
          <h1 className="text-3xl font-extrabold text-navy-darker mb-6">
            За нас — ВВМУ &bdquo;Н.Й.Вапцаров&ldquo;
          </h1>
          <div className="prose max-w-none text-text-secondary leading-relaxed space-y-4">
            <p>
              Висше Военноморско Училище „Никола Йонков Вапцаров" е най-старото техническо учебно заведение в България. Академията води традициите на морското образование от 1881 г., когато Морското училище отваря врати като първото техническо учебно заведение в страната за подготовка на инженери и моряци.
            </p>

            <h2 className="text-xl font-bold text-navy-darker mt-8 mb-4">Исторически етапи</h2>
            <ul className="space-y-2 list-none">
              <li className="flex gap-3">
                <span className="font-bold text-teal min-w-[60px]">1881</span>
                <span>Морското училище отваря врати като първото техническо учебно заведение в България</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-teal min-w-[60px]">1904</span>
                <span>Преобразувано в Машинно училище на флота</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-teal min-w-[60px]">1942</span>
                <span>Трансформирано в Царско морско училище с разширени навигационни и технически отдели</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-teal min-w-[60px]">1949</span>
                <span>Преименувано на Народно морско училище &bdquo;Никола Йонков Вапцаров&ldquo;</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-teal min-w-[60px]">1956</span>
                <span>Получава статут на висше инженерно морско учебно заведение</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-teal min-w-[60px]">1991</span>
                <span>Възприемане на сегашното наименование</span>
              </li>
            </ul>

            <h2 className="text-xl font-bold text-navy-darker mt-8 mb-4">Мисия</h2>
            <p>
              ВВМУ подготвя висококвалифицирани специалисти и лидери за Въоръжените сили на Република България, националната сигурност и икономиката. Дейностите включват бакалавърски програми по „Военно дело", магистърски и докторски програми, професионална квалификация, научноизследователска и издателска дейност.
            </p>

            <h2 className="text-xl font-bold text-navy-darker mt-8 mb-4">Учебна база</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="bg-bg-alt rounded-lg p-4 text-center">
                <div className="text-2xl font-extrabold text-teal">17</div>
                <div className="text-xs text-text-muted mt-1">лекционни зали</div>
              </div>
              <div className="bg-bg-alt rounded-lg p-4 text-center">
                <div className="text-2xl font-extrabold text-teal">51</div>
                <div className="text-xs text-text-muted mt-1">учебни кабинети</div>
              </div>
              <div className="bg-bg-alt rounded-lg p-4 text-center">
                <div className="text-2xl font-extrabold text-teal">35</div>
                <div className="text-xs text-text-muted mt-1">лаборатории</div>
              </div>
              <div className="bg-bg-alt rounded-lg p-4 text-center">
                <div className="text-2xl font-extrabold text-teal">11</div>
                <div className="text-xs text-text-muted mt-1">симулатора</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
