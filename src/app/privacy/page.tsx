import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Privacy Policy | BridgePay',
  description: 'How BridgePay collects, uses, and protects your information.',
};

export default function PrivacyPage() {
  return (
    <div className="flex-1 flex flex-col">
      <SiteHeader />

      <section className="max-w-3xl mx-auto px-6 pt-16 pb-24 w-full">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">Privacy Policy</h1>

        <div className="mt-4 p-4 rounded-xl border border-outline-variant bg-surface-container text-sm text-on-surface-variant">
          <strong className="text-on-surface">Draft, not yet reviewed.</strong> This is a
          standard starting template, not BridgePay&apos;s actual legal policy. It needs review
          by a lawyer, and every <code>[bracketed]</code> placeholder filled in with real
          details, before it goes live.
        </div>

        <div className="mt-8 flex flex-col gap-8 text-sm text-on-surface-variant leading-relaxed">
          <p>Last updated: [date]</p>

          <div>
            <h2 className="text-base font-semibold text-on-surface mb-2">1. Information we collect</h2>
            <p>
              When you create a BridgePay account, we collect your name, email address, and
              country. When you link a payment method or make a transaction, our payment
              processors (Stripe, M-Pesa, Airtel Money) handle the sensitive details directly.
              We store only what&apos;s needed to identify the transaction, such as an amount, a
              currency, and a status.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-on-surface mb-2">2. How we use your information</h2>
            <p>
              To provide the service (processing transfers, deposits, and payouts), to
              communicate with you about your account, and to meet our legal and regulatory
              obligations.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-on-surface mb-2">3. How we share your information</h2>
            <p>
              We share information with payment processors as needed to complete a transaction,
              and with regulators or law enforcement where required by law. We do not sell your
              information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-on-surface mb-2">4. Data security</h2>
            <p>
              [Describe real security measures here: encryption in transit/at rest, access
              controls, etc.]
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-on-surface mb-2">5. Your rights</h2>
            <p>
              You can access, correct, or request deletion of your personal information by
              contacting us at [privacy contact email]. Some information may be retained where
              required by law (e.g. transaction records for regulatory purposes).
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-on-surface mb-2">6. Changes to this policy</h2>
            <p>We may update this policy from time to time. [Describe how changes will be communicated.]</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-on-surface mb-2">7. Contact us</h2>
            <p>Questions about this policy: [contact email].</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
