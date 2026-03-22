'use client';

import { Link } from '@/i18n/navigation';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="bg-bg-alt border-b border-border-light py-3 px-8">
      <div className="max-w-[1200px] mx-auto">
        <ol className="flex items-center gap-2 list-none text-[0.82rem]">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && <span className="text-text-muted">/</span>}
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-teal no-underline hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-text-secondary">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
