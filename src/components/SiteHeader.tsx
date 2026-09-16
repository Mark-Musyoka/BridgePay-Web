import Link from 'next/link';
import { APP_LOGIN_URL, APP_REGISTER_URL } from '@/lib/config';

export function SiteHeader() {
  return (
    <header className="w-full border-b border-outline-variant">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-on-surface">
          BridgePay
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/faq" className="hidden sm:inline text-sm font-medium text-on-surface-variant hover:text-on-surface">
            FAQ
          </Link>
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
  );
}
