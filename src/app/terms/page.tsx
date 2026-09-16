import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Terms & Conditions | BridgePay',
  description: 'The terms that govern your use of BridgePay.',
};

export default function TermsPage() {
  return (
    <div className="flex-1 flex flex-col">
      <SiteHeader />

      <section className="max-w-3xl mx-auto px-6 pt-16 pb-24 w-full">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">Terms & Conditions</h1>

        <div className="mt-4 p-4 rounded-xl border border-outline-variant bg-surface-container text-sm text-on-surface-variant">
          <strong className="text-on-surface">Draft, not yet reviewed.</strong> This is a
          standard starting template, not BridgePay&apos;s actual legal terms. It needs review
          by a lawyer, and every <code>[bracketed]</code> placeholder filled in with real
          details, before it goes live.
        </div>

        <div className="mt-8 flex flex-col gap-8 text-sm text-on-surface-variant leading-relaxed">
          <p>Last updated: [date]</p>

          <div>
            <h2 className="text-base font-semibold text-on-surface mb-2">1. Acceptance of terms</h2>
            <p>
              By creating a BridgePay account, you agree to these terms. If you don&apos;t agree,
              don&apos;t use the service.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-on-surface mb-2">2. The service</h2>
            <p>
              BridgePay lets you hold a balance, send money to other BridgePay users, and
              deposit or withdraw funds via supported payment methods (card, M-Pesa, Airtel
              Money, and bank transfer, depending on the method and destination).
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-on-surface mb-2">3. Your responsibilities</h2>
            <p>
              You&apos;re responsible for keeping your account credentials secure, for the
              accuracy of the information you provide, and for complying with applicable law
              when using the service.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-on-surface mb-2">4. Fees</h2>
            <p>
              Transfers between BridgePay users have no fee. [Describe any fees for deposits,
              payouts, or currency conversion here, once finalized.]
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-on-surface mb-2">5. Prohibited use</h2>
            <p>
              You may not use BridgePay for illegal activity, fraud, or to circumvent the
              limits or checks described elsewhere in these terms.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-on-surface mb-2">6. Limitation of liability</h2>
            <p>[Standard limitation-of-liability language. Needs real legal drafting.]</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-on-surface mb-2">7. Termination</h2>
            <p>
              We may suspend or close an account that violates these terms. You may close your
              account at any time by contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-on-surface mb-2">8. Governing law</h2>
            <p>[Specify the governing jurisdiction once decided.]</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-on-surface mb-2">9. Changes to these terms</h2>
            <p>We may update these terms from time to time. [Describe how changes will be communicated.]</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-on-surface mb-2">10. Contact us</h2>
            <p>Questions about these terms: [contact email].</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
