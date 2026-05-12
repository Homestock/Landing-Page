import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms of Use — HomeStock',
  description:
    'The rules for using HomeStock — subscriptions, content ownership, AI features, household sharing, and the legal small print.',
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Use"
      effectiveDate="May 12, 2026"
      siblingHref="/privacy"
      siblingLabel="Read the Privacy Policy"
    >
      <p>
        Welcome to HomeStock. These Terms of Use (&quot;Terms&quot;) form a legal agreement between you and HomeStock
        (&quot;HomeStock,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) for your use of the HomeStock iOS app, our website at{' '}
        <a href="https://homestock.app">homestock.app</a>, and any related services (together, the &quot;Service&quot;).
        By installing, accessing, or using HomeStock, you agree to these Terms. If you do not agree, do not use
        the Service.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 13 years old (or the minimum age of digital consent in your country) to use
        HomeStock. If you are under 18, you confirm that a parent or guardian has reviewed these Terms with you.
      </p>

      <h2>2. Your Account</h2>
      <p>
        HomeStock can be used anonymously. If you choose to link your account to Apple or Google Sign In, you
        are responsible for keeping that account secure. You are responsible for everything that happens under
        your HomeStock account, including any activity by household members you invite.
      </p>
      <p>You agree to provide accurate information and to keep it up to date.</p>

      <h2>3. Subscriptions, Free Trials &amp; Billing</h2>
      <p>
        HomeStock offers a free tier with limits and a paid &quot;Pro&quot; subscription. All paid plans are billed
        through your Apple ID via Apple&apos;s App Store. Pricing in your local currency is displayed on the
        in-app paywall before purchase.
      </p>
      <ul>
        <li>
          <strong>Auto-renewal.</strong> Subscriptions renew automatically at the end of each billing period
          (monthly or yearly) at the then-current price, unless cancelled at least 24 hours before renewal.
        </li>
        <li>
          <strong>Free trial.</strong> If a free trial is offered (e.g., a 1-week trial on the yearly plan),
          your paid subscription begins automatically when the trial ends unless you cancel before the trial
          period expires. Any unused portion of a free trial is forfeited if you purchase a subscription
          earlier.
        </li>
        <li>
          <strong>Cancellation.</strong> Manage or cancel your subscription any time in iOS Settings → Apple ID
          → Subscriptions. Cancellation takes effect at the end of the current paid period.
        </li>
        <li>
          <strong>Refunds.</strong> Refunds are handled by Apple under their policy at{' '}
          <a href="https://support.apple.com/HT204084">support.apple.com/HT204084</a>. HomeStock cannot
          directly issue refunds for App Store purchases.
        </li>
        <li>
          <strong>Price changes.</strong> If we change subscription prices, we will give you notice and an
          opportunity to cancel before the change takes effect.
        </li>
        <li>
          <strong>What you keep on cancel.</strong> If your subscription lapses, your data stays. Existing
          items, photos, and households remain accessible; you simply revert to the Free tier limits for
          adding new items.
        </li>
      </ul>

      <h2>4. License</h2>
      <p>
        Subject to these Terms, HomeStock grants you a personal, limited, non-exclusive, non-transferable,
        revocable license to install and use the app on iOS devices you own or control, for your personal,
        non-commercial use.
      </p>
      <p>You may not:</p>
      <ul>
        <li>Reverse-engineer, decompile, or attempt to extract the source code of the Service.</li>
        <li>Resell, sublicense, lease, or rent the Service or your subscription.</li>
        <li>Use the Service to build a competing product or to train machine-learning models.</li>
        <li>
          Circumvent paywalls, entitlement checks, or usage limits, or use the Service in any way that violates
          applicable laws.
        </li>
      </ul>

      <h2>5. Your Content</h2>
      <p>
        You own everything you put into HomeStock — your items, photos, notes, prices, households, and any
        other content (&quot;Your Content&quot;). We do not claim ownership of Your Content.
      </p>
      <p>
        To operate the Service, you grant HomeStock a worldwide, royalty-free license to host, store, process,
        transmit, back up, and display Your Content solely for the purpose of providing the Service to you and
        the household members you choose to share with. This license ends when you delete Your Content or your
        account (subject to a short retention window for backups as described in our{' '}
        <a href="/privacy">Privacy Policy</a>).
      </p>
      <p>
        You are responsible for Your Content. Do not upload anything that infringes third-party rights or
        violates the law.
      </p>

      <h2>6. AI Features</h2>
      <p>
        HomeStock&apos;s &quot;AI Capture&quot; feature uses Google&apos;s Gemini API to suggest a name, category, and
        estimated price from a photo. You acknowledge and agree:
      </p>
      <ul>
        <li>
          AI output is a <strong>suggestion, not an appraisal.</strong> Estimated prices, categories, and
          identifications may be inaccurate. Always review before saving.
        </li>
        <li>
          AI output is not professional advice and is not suitable for insurance valuation, tax reporting, or
          legal proof of ownership without your independent verification.
        </li>
        <li>
          Photos sent to AI are transmitted as described in our <a href="/privacy">Privacy Policy</a>.
        </li>
        <li>
          We may rate-limit or disable AI features for accounts that abuse them (for example, sending content
          unrelated to a personal home inventory).
        </li>
      </ul>

      <h2>7. Shared Households</h2>
      <p>
        You can create or join a shared household and invite up to 10 members on the Pro plan. By inviting
        someone, you authorize them to see and (depending on their role) modify the inventory of that
        household. You are responsible for whom you invite and at what permission level (owner, editor, or
        viewer). Members can be removed at any time by the household owner.
      </p>

      <h2>8. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use HomeStock for any unlawful purpose or to store illegal content.</li>
        <li>Upload malware or attempt to compromise the security of the Service or other users.</li>
        <li>
          Harass, impersonate, or violate the privacy of other users, including members of households you
          belong to.
        </li>
        <li>
          Use the Service to operate a business inventory at a scale meant for enterprise inventory software.
          HomeStock is a personal-home tool.
        </li>
        <li>Scrape, crawl, or use automated means to access the Service.</li>
      </ul>
      <p>
        We may suspend or terminate accounts that violate these rules, without notice when necessary to protect
        the Service or other users.
      </p>

      <h2>9. Intellectual Property</h2>
      <p>
        HomeStock, the HomeStock name and logo, the app&apos;s design, code, and all related materials are owned
        by HomeStock and protected by copyright, trademark, and other laws. These Terms grant you no rights to
        our trademarks or brand assets.
      </p>

      <h2>10. Third-Party Services</h2>
      <p>
        HomeStock integrates with third-party services (Apple, Google Firebase, RevenueCat, Google Gemini,
        AppsFlyer). Your use of those services is also subject to their respective terms. We are not
        responsible for the availability, content, or practices of third-party services.
      </p>

      <h2>11. Termination</h2>
      <p>
        You can stop using HomeStock and delete your account at any time from Settings → Profile → Delete
        Account. We may suspend or terminate your access if you violate these Terms or if continued operation
        would expose us to legal risk. Upon termination, the license in section 4 ends. Sections that by their
        nature should survive termination (e.g., Your Content license retention for backups, IP, disclaimers,
        limitation of liability, governing law) will survive.
      </p>

      <h2>12. Disclaimers</h2>
      <p>
        The Service is provided &quot;as is&quot; and &quot;as available,&quot; without warranties of any kind, express or
        implied, including merchantability, fitness for a particular purpose, non-infringement, accuracy of AI
        output, or uninterrupted availability. You use the Service at your own risk.
      </p>
      <p>
        HomeStock is not a substitute for a professional inventory appraisal, an insurance policy, or legal
        proof of ownership. Use the data you generate accordingly.
      </p>

      <h2>13. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, HomeStock and its affiliates, officers, employees, and agents
        will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any
        loss of profits, revenue, data, or goodwill, arising out of or related to your use of the Service.
      </p>
      <p>
        Our total liability for any claim arising out of or related to these Terms or the Service is limited to
        the greater of (a) the amount you paid HomeStock in the 12 months before the event giving rise to the
        claim, or (b) US $50.
      </p>
      <p>Some jurisdictions do not allow these limitations; in that case they apply to the maximum extent permitted.</p>

      <h2>14. Indemnity</h2>
      <p>
        You agree to indemnify and hold HomeStock harmless from claims, damages, and expenses (including
        reasonable legal fees) arising out of your misuse of the Service, your violation of these Terms, or
        your violation of any third-party right.
      </p>

      <h2>15. Apple-Specific Terms (App Store)</h2>
      <p>
        These Terms are between you and HomeStock, not Apple. Apple is not responsible for the Service or its
        content. To the extent of any conflict between these Terms and Apple&apos;s App Store Terms with respect to
        your license to use the app on an Apple device, the App Store Terms control for that license. Apple and
        its subsidiaries are third-party beneficiaries of these Terms and may enforce them against you.
      </p>

      <h2>16. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Material changes will be announced inside the app and on
        this page with an updated &quot;Effective&quot; date. Your continued use of HomeStock after a change means you
        accept the updated Terms.
      </p>

      <h2>17. Governing Law &amp; Disputes</h2>
      <p>
        These Terms are governed by the laws of the State of Delaware, USA, without regard to its conflict-of-laws
        rules. Disputes will be resolved exclusively in the state or federal courts located in Delaware, except
        where applicable consumer-protection law gives you a different right. Nothing in these Terms limits any
        non-waivable statutory rights you have as a consumer.
      </p>

      <h2>18. Contact</h2>
      <p>
        Questions about these Terms? Email <a href="mailto:support@homestock.app">support@homestock.app</a>.
      </p>
    </LegalLayout>
  );
}
