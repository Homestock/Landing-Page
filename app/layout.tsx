import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://homestock.app'),
  title: 'HomeStock — Inventory without the work.',
  description:
    'Take a photo of anything you own. AI fills in name, category, and price. Built for iPhone.',
  openGraph: {
    title: 'HomeStock — Inventory without the work.',
    description:
      'Take a photo of anything you own. AI fills in name, category, and price.',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
