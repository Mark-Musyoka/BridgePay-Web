import type { Metadata } from 'next';
import './globals.css';
import { SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'BridgePay: Send, deposit, and pay out everywhere you already bank',
  description:
    'BridgePay is a digital wallet: instant transfers between BridgePay users, and deposits/withdrawals via card, M-Pesa, Airtel Money, or bank account.',
  openGraph: {
    title: 'BridgePay',
    description: 'A wallet that works the way you already bank.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background font-sans text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}
