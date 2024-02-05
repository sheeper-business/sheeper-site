import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import css from './page.module.css';
import '@fontsource/raleway';
import { NavBar } from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'sheeper',
  description: 'the app to show you the best deals near you',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={css.navbar}>
          <NavBar />
        </div>
        {children}
        {/* <div className={css.footer}> */}
        <Footer />
        {/* </div> */}
      </body>
    </html>
  );
}
