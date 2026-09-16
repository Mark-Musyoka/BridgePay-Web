import Link from 'next/link';
import { APP_LOGIN_URL } from '@/lib/config';

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-outline-variant">
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-on-surface-variant">
        <span>© {new Date().getFullYear()} BridgePay</span>
        <nav className="flex items-center gap-5">
          <Link href="/faq" className="hover:text-on-surface">
            FAQ
          </Link>
          <Link href="/privacy" className="hover:text-on-surface">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-on-surface">
            Terms
          </Link>
          <Link href={APP_LOGIN_URL} className="hover:text-on-surface">
            Log in
          </Link>
        </nav>
      </div>
    </footer>
  );
}
