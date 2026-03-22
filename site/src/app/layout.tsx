import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'ВВМУ \u201EН. Й. Вапцаров\u201C',
  description: 'Висше Военноморско Училище \u201EНикола Йонков Вапцаров\u201C \u2014 Варна',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
