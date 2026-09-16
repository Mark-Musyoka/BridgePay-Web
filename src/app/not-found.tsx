import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col">
      <SiteHeader />

      <section className="flex-1 max-w-lg mx-auto px-6 py-24 text-center flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-on-surface">Page not found</h1>
        <p className="mt-3 text-sm text-on-surface-variant">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link
          href="/"
          className="mt-6 text-sm font-semibold bg-primary text-on-primary px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
        >
          Back to home
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
