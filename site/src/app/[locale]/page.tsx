import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import QuickAccess from '@/components/sections/QuickAccess';
import FeaturedPrograms from '@/components/sections/FeaturedPrograms';
import LatestNews from '@/components/sections/LatestNews';
import StatsSection from '@/components/sections/StatsSection';
import PartnersSection from '@/components/sections/PartnersSection';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <QuickAccess />

      {/* About Section */}
      <section className="py-20 px-8 bg-bg-alt" id="about">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-teal text-[0.78rem] font-bold tracking-[3px] uppercase mb-2">
                За академията
              </span>
              <h2 className="text-[2.2rem] font-extrabold text-navy-darker mb-4 leading-tight">
                Най-старото техническо учебно заведение в България
              </h2>
              <p className="text-[1.05rem] text-text-secondary leading-relaxed mb-6">
                Висше Военноморско Училище „Никола Йонков Вапцаров" води традициите на морското образование от 1881 г., когато Морското училище отваря врати като първото техническо учебно заведение в страната за подготовка на инженери и моряци.
              </p>
              <p className="text-[0.95rem] text-text-secondary leading-relaxed mb-6">
                Академията подготвя висококвалифицирани специалисти и лидери за Въоръжените сили, националната сигурност и икономиката. Учебните програми отговарят на международните изисквания за подготовка на морски офицери и специалисти за морската индустрия.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  { icon: '🔬', title: '11 симулатора', desc: 'Уникални тренажори от ново поколение' },
                  { icon: '🎓', title: 'Акредитация 9.07', desc: 'Институционална оценка до 2030 г.' },
                  { icon: '🌐', title: 'Член на IAMU', desc: 'Международна асоциация на морските университети' },
                  { icon: '🚀', title: 'Планетариум', desc: 'Carl Zeiss, 120 места, 6 езика' },
                ].map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-teal/10 rounded-lg flex items-center justify-center text-base text-teal shrink-0 mt-0.5">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-[0.85rem] font-bold text-navy-darker mb-0.5">
                        {feature.title}
                      </h4>
                      <p className="text-[0.78rem] text-text-muted leading-snug">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-navy-darker to-teal rounded-[20px] min-h-[400px] flex items-center justify-center text-white/50 text-[0.9rem] relative overflow-hidden">
              <div className="relative z-[1] text-center p-8">
                <div className="text-6xl mb-3 opacity-50">&#9875;</div>
                <p className="text-[0.95rem] text-white/60 font-medium">
                  Снимка на сградата на ВВМУ
                </p>
                <p className="text-[0.78rem] text-white/35 mt-1">820 x 520 px</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedPrograms />
      <LatestNews />
      <StatsSection />
      <PartnersSection />
    </>
  );
}
