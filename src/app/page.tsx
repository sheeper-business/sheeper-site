'use client';

import styles from './page.module.css';
import '@fontsource/raleway';
import '@fontsource/raleway/400.css'; // Specify weight
import '@fontsource/raleway/600.css'; // Specify weight
import '@fontsource/raleway/700.css'; // Specify weight
import '@fontsource/raleway/900.css'; // Specify weight
import '@fontsource/raleway/800.css'; // Specify weight
import '@fontsource/raleway/400-italic.css';
import { Home } from './home/Home';
import { ThemeProvider } from './ThemeProvider';

// Import i18n and the provider
import '../../i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n'; // Import the initialized i18n instance
import { Suspense } from 'react';

export default function Page() {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </I18nextProvider>
  );
}
