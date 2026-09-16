import Link from 'next/link';
import { APP_REGISTER_URL } from '@/lib/config';

/** Mobile only -- a persistent bottom CTA so "Get Started" is always
 * one tap away without scrolling back up, without duplicating a
 * second primary button on desktop where the header's CTA is already
 * always visible. */
export function StickyMobileCta() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-background/95 backdrop-blur-xl border-t border-outline-variant">
      <Link
        href={APP_REGISTER_URL}
        className="block w-full text-center text-base font-semibold bg-primary text-on-primary px-6 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
      >
        Get Started
      </Link>
    </div>
  );
}
