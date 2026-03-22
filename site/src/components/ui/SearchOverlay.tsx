'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const t = useTranslations('common');
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-navy-darker/95 z-[2000] flex items-start justify-center pt-32">
      <div className="w-full max-w-2xl px-8">
        <div className="flex items-center gap-4 mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('search') + '...'}
            className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white text-lg placeholder-white/40 outline-none focus:border-teal"
            autoFocus
          />
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white text-2xl bg-transparent border-none cursor-pointer"
          >
            &#10005;
          </button>
        </div>
      </div>
    </div>
  );
}
