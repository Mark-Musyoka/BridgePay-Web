import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { StickyMobileCta } from '@/components/StickyMobileCta';
import { APP_REGISTER_URL } from '@/lib/config';

const FEATURES = [
  {
    title: 'Send, instantly',
    body: 'Transfer money to any BridgePay user in seconds. No fees, no waiting.',
  },
  {
    title: 'Deposit your way',
    body: 'Add money by card, M-Pesa, or Airtel Money. Whatever you already use, it works here.',
  },
  {
    title: 'Withdraw anywhere',
    body: 'Pay out to a phone, a card, or a bank account, local or international.',
  },
];

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col">
      <SiteHeader />

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-on-surface tracking-tight text-balance">
          A wallet that works the way you already bank
        </h1>
        <p className="mt-5 text-lg text-on-surface-variant max-w-xl text-balance">
          Send money to other BridgePay users instantly. Deposit and withdraw by card, M-Pesa,
          Airtel Money, or bank account, no new habits required.
        </p>
        <Link
          href={APP_REGISTER_URL}
          className="mt-8 text-base font-semibold bg-primary text-on-primary px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
        >
          Get Started
        </Link>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 pb-24 w-full">
        <div className="grid sm:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-2">
              <h2 className="text-base font-semibold text-on-surface">{feature.title}</h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
      <StickyMobileCta />
      {/* Space for the sticky mobile CTA so the footer isn't covered */}
      <div className="sm:hidden h-20" />
    </div>
  );
}
