import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'FAQ | BridgePay',
  description: 'Common questions about how BridgePay works: deposits, withdrawals, fees, and account security.',
};

const FAQS = [
  {
    q: 'What is BridgePay?',
    a: 'BridgePay is a digital wallet. You can send money to other BridgePay users instantly, deposit money into your wallet, and withdraw it out again through several methods.',
  },
  {
    q: 'How do I add money to my account?',
    a: 'You can deposit by card, M-Pesa, or Airtel Money. Card deposits are confirmed immediately; M-Pesa and Airtel Money deposits send a payment prompt to your phone to approve.',
  },
  {
    q: 'Is sending money to another BridgePay user free?',
    a: 'Yes. Transfers between BridgePay users have no fee.',
  },
  {
    q: 'How do I withdraw money out of BridgePay?',
    a: 'You can pay out to an M-Pesa or Airtel Money number, a card, or a bank account (a local Kenyan account or an international one).',
  },
  {
    q: "What if I'm depositing or withdrawing in a different currency?",
    a: "If the currency you're depositing or withdrawing in is different from your account's currency, it's converted automatically at the time of the transaction.",
  },
  {
    q: 'Do I need to verify my email?',
    a: 'Yes. You can register and log in right away, but sending money requires a verified email address first.',
  },
  {
    q: 'Can I sign in with Google?',
    a: 'Yes, alongside a regular email and password.',
  },
  {
    q: 'Is my card information stored by BridgePay?',
    a: "No. Card details are handled directly by our payment processor's secure form and never pass through BridgePay's own servers.",
  },
];

export default function FaqPage() {
  return (
    <div className="flex-1 flex flex-col">
      <SiteHeader />

      <section className="max-w-3xl mx-auto px-6 pt-16 pb-24 w-full">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
          Frequently asked questions
        </h1>

        <dl className="mt-10 flex flex-col divide-y divide-outline-variant">
          {FAQS.map((item) => (
            <div key={item.q} className="py-6">
              <dt className="text-base font-semibold text-on-surface">{item.q}</dt>
              <dd className="mt-2 text-sm text-on-surface-variant leading-relaxed">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <SiteFooter />
    </div>
  );
}
