'use client';

import { Suspense, type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { ThemeProvider } from './ThemeProvider';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={null}>
        <ThemeProvider>{children}</ThemeProvider>
      </Suspense>
    </I18nextProvider>
  );
}
