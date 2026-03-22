import { setRequestLocale } from 'next-intl/server';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import ContactForm from '@/components/forms/ContactForm';

export default async function ContactPage({
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
          { label: 'Контакти' },
        ]}
      />
      <section className="py-16 px-8">
        <div className="max-w-[1100px] mx-auto">
          <h1 className="text-3xl font-extrabold text-navy-darker mb-8">Контакти</h1>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-bg-alt rounded-xl p-6">
                <h2 className="text-lg font-bold text-navy-darker mb-4">Адрес</h2>
                <div className="flex items-start gap-3 text-text-secondary">
                  <span className="text-teal text-lg mt-0.5">&#128205;</span>
                  <div>
                    <p>ул. „Васил Друмев" 73</p>
                    <p>9026 Варна, България</p>
                  </div>
                </div>
              </div>

              <div className="bg-bg-alt rounded-xl p-6">
                <h2 className="text-lg font-bold text-navy-darker mb-4">Телефони</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-text-secondary">
                    <span className="text-teal text-lg mt-0.5">&#128222;</span>
                    <div>
                      <p className="font-medium">Централа</p>
                      <p className="text-sm">+359 52 552-377</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-text-secondary">
                    <span className="text-teal text-lg mt-0.5">&#128222;</span>
                    <div>
                      <p className="font-medium">Пресцентър</p>
                      <p className="text-sm">+359 52 552-228</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-text-secondary">
                    <span className="text-teal text-lg mt-0.5">&#128222;</span>
                    <div>
                      <p className="font-medium">Учебна дейност</p>
                      <p className="text-sm">+359 52 552-240</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-bg-alt rounded-xl p-6">
                <h2 className="text-lg font-bold text-navy-darker mb-4">Имейл</h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-text-secondary">
                    <span className="text-teal">&#9993;</span>
                    <span>info@naval-acad.bg</span>
                  </div>
                  <div className="flex items-center gap-3 text-text-secondary">
                    <span className="text-teal">&#9993;</span>
                    <span>r.koleva@nvna.eu (Пресцентър)</span>
                  </div>
                  <div className="flex items-center gap-3 text-text-secondary">
                    <span className="text-teal">&#9993;</span>
                    <span>g.nikolov@nvna.eu (Пресцентър)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 border border-border-light shadow-sm">
              <h2 className="text-lg font-bold text-navy-darker mb-6">Изпратете ни съобщение</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
