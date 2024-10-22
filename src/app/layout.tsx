import type { Metadata } from 'next';
import { Source_Serif_4 } from 'next/font/google';

import MainLayout from '@/components/layout/MainLayout';

import AppProvider from './providers';

import '@/styles/globals.css';

const inter = Source_Serif_4({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'tran minh bao ngoc',
  description: 'tran minh bao ngoc. Life is but a breeze, so make the most of it',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <MainLayout>{children}</MainLayout>
        </AppProvider>
      </body>
    </html>
  );
}
