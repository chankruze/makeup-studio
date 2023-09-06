import './globals.css';

import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/providers/theme-provider';
import { SITE_DESCRIPTION, SITE_TITLE } from '@/consts';
import { inter } from '@/lib/fonts';

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          storageKey="makeup-studio-theme"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
