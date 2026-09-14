import Link from 'next/link';
import { APP_LOGIN_URL, APP_REGISTER_URL } from '@/lib/config';

const FEATURES = [
  {
    title: 'Send, instantly',
    body: 'Transfer money to any BridgePay user in seconds — no fees, no waiting.',
  },
  {
    title: 'Deposit your way',
    body: 'Add money by card, M-Pesa, or Airtel Money. Whatever you already use, it works here.',
  },
  {
    title: 'Withdraw anywhere',
    body: 'Pay out to a phone, a card, or a bank account — local or international.',
  },
];

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Nav */}
      <header className="w-full border-b border-outline-variant">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-bold text-on-surface">BridgePay</span>
          <nav className="flex items-center gap-6">
            <Link href={APP_LOGIN_URL} className="text-sm font-medium text-on-surface-variant hover:text-on-surface">
              Log in
            </Link>
            <Link
              href={APP_REGISTER_URL}
              className="text-sm font-semibold bg-primary text-on-primary px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-on-surface tracking-tight text-balance">
          A wallet that works the way you already bank
        </h1>
        <p className="mt-5 text-lg text-on-surface-variant max-w-xl text-balance">
          Send money to other BridgePay users instantly. Deposit and withdraw by card, M-Pesa,
          Airtel Money, or bank account — no new habits required.
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

      {/* Footer */}
      <footer className="mt-auto border-t border-outline-variant">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between text-sm text-on-surface-variant">
          <span>© {new Date().getFullYear()} BridgePay</span>
          <Link href={APP_LOGIN_URL} className="hover:text-on-surface">
            Log in
          </Link>
        </div>
      </footer>
    </div>
  );
}
