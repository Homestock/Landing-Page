import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms of Use — HomeStock',
  description:
    'The agreement that governs your use of HomeStock. Plain English, fair terms, no surprises.',
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
        Welcome to HomeStock. These Terms of Use (&quot;Terms&quot;) are the agreement between you and HomeStock
        (&quot;HomeStock,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) covering your use of the HomeStock iOS
        app, our website at <a href="https://home-stock.io">home-stock.io</a>, and any related services (together,
        the &quot;Service&quot;).
      </p>
      <p>
        By downloading, installing, or using HomeStock you agree to these Terms. If you don&apos;t agree, please
        don&apos;t use the Service. Your use of the Service is also subject to our{' '}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>1. Who Can Use HomeStock</h2>
      <p>
        You must be at least 13 years old to use HomeStock, and at least 18 (or the age of majority in your
        region) to purchase a subscription. By using the Service you confirm you meet these requirements and
        that you are not barred from using HomeStock under the laws of your country.
      </p>

      <h2>2. Your Account</h2>
      <ul>
        <li>
          <strong>Anonymous use.</strong> You can use HomeStock without an account. Your inventory stays on your
          device.
        </li>
        <li>
          <strong>Signed-in use.</strong> If you want backup, multi-device sync, or household sharing, you can
          sign in with Apple or Google. You&apos;re responsible for everything that happens under your account.
        </li>
        <li>
          <strong>Keep your device secure.</strong> Use a strong passcode and enable Face ID or Touch ID. We
          never see your Apple or Google password.
        </li>
        <li>
          <strong>One person, one account.</strong> Don&apos;t share your sign-in credentials. If you think your
          account has been compromised, contact{' '}
          <a href="mailto:support@home-stock.io">support@home-stock.io</a>.
        </li>
      </ul>

      <h2>3. What HomeStock Does</h2>
      <p>
        HomeStock is a personal inventory app. It lets you catalog items, organize them into rooms, folders, and
        storage boxes, attach photos and notes, track lending, see audit history, and share a household with
        people you invite. We may add, change, or remove features over time. Some features may require a paid
        subscription.
      </p>

      <h2>4. Subscriptions and Billing</h2>
      <ul>
        <li>
          <strong>Paid plans.</strong> Some HomeStock features are available only with a paid subscription. The
          current price and renewal period are shown in the app before you purchase.
        </li>
        <li>
          <strong>Apple handles billing.</strong> Subscriptions are processed by Apple through your App Store
          account. We use RevenueCat to read your purchase status; we never see your card details.
        </li>
        <li>
          <strong>Auto-renewal.</strong> Subscriptions renew automatically at the end of each billing period
          unless you turn off auto-renew at least 24 hours before the period ends. Manage or cancel renewal in{' '}
          <em>Settings → Apple ID → Subscriptions</em> on your device.
        </li>
        <li>
          <strong>Refunds.</strong> Refunds for App Store purchases are governed by Apple&apos;s refund policy.
          Request a refund directly from Apple at{' '}
          <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>. We may also grant goodwill
          refunds at our discretion where law requires.
        </li>
        <li>
          <strong>Price changes.</strong> We may change subscription prices. We&apos;ll give you reasonable notice
          before any change takes effect, and Apple will ask for your consent where required. If you don&apos;t
          agree, you can cancel before the new price applies.
        </li>
      </ul>

      <h2>5. Your Content</h2>
      <ul>
        <li>
          <strong>You own it.</strong> Items, photos, notes, prices, lending records, and everything else you
          add to HomeStock are yours. We don&apos;t claim ownership.
        </li>
        <li>
          <strong>License to run the Service.</strong> You give us a limited, worldwide, royalty-free license to
          host, store, transmit, display, and process your content solely so we can provide HomeStock to you and
          the household members you invite. This license ends when you delete the content or your account
          (subject to our retention windows described in the Privacy Policy).
        </li>
        <li>
          <strong>You&apos;re responsible for it.</strong> Don&apos;t upload content you don&apos;t have the right to
          share. Don&apos;t upload illegal content, sexual content involving minors, or anything designed to harm
          others.
        </li>
        <li>
          <strong>Keep your own backup.</strong> You can export your inventory to Excel at any time from
          Settings. We strongly recommend doing this periodically. We aim for high reliability but can&apos;t
          guarantee zero data loss.
        </li>
      </ul>

      <h2>6. AI Capture</h2>
      <p>
        HomeStock&apos;s &quot;AI Capture&quot; feature suggests an item name, category, and estimated price by sending
        a photo you take to Google&apos;s Gemini API through our backend. By using AI Capture you understand:
      </p>
      <ul>
        <li>
          The photo is transmitted to Gemini for analysis. Per Google&apos;s API terms, photos sent to Gemini are
          not used to train Google&apos;s models and aren&apos;t retained beyond the request.
        </li>
        <li>
          AI suggestions are <strong>suggestions only</strong>. Names, categories, and estimated prices may be
          wrong. Review and edit before saving.
        </li>
        <li>
          Don&apos;t use AI Capture on photos that contain other people&apos;s faces, sensitive documents (IDs,
          financial statements, medical records), or anything you don&apos;t have the right to share.
        </li>
        <li>
          You can disable AI Capture at any time and add items manually. We may change, suspend, or discontinue
          AI Capture without prior notice.
        </li>
      </ul>

      <h2>7. Households and Sharing</h2>
      <p>
        You can invite other people to share a household with you and assign them an <em>owner</em>,{' '}
        <em>editor</em>, or <em>viewer</em> role. The role you assign controls what they can see and change.
        Only invite people you trust. We are not responsible for actions household members take with shared
        content, and we don&apos;t mediate disputes between household members.
      </p>
      <p>
        The owner of a household can remove members, change roles, or delete the household. If you&apos;re
        removed, you lose access to that household&apos;s content immediately.
      </p>

      <h2>8. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use HomeStock to break the law or infringe anyone&apos;s rights.</li>
        <li>Reverse engineer, decompile, or attempt to extract source code from the app, except where this restriction is prohibited by law.</li>
        <li>Bypass rate limits, abuse the AI Capture endpoint, or otherwise interfere with the Service.</li>
        <li>Scrape, automate, or use bots to interact with our systems.</li>
        <li>Use HomeStock to upload malware, phishing content, spam, or anything designed to harm us or other users.</li>
        <li>Resell, rent, or commercially redistribute access to the Service.</li>
        <li>Impersonate someone else or misrepresent your identity.</li>
      </ul>
      <p>
        We may suspend or terminate accounts that violate these rules, and we may remove content that violates
        them.
      </p>

      <h2>9. Our Intellectual Property</h2>
      <p>
        HomeStock, the HomeStock name and logo, and all software, design, text, and features of the Service
        (excluding your content) belong to us or our licensors and are protected by copyright, trademark, and
        other laws. We grant you a limited, personal, non-transferable, non-exclusive license to use the app on
        a device you own or control, subject to these Terms and the Apple App Store&apos;s standard end-user
        license terms.
      </p>

      <h2>10. Feedback</h2>
      <p>
        If you send us feedback, suggestions, or feature requests, you give us permission to use them without
        any obligation to you. We&apos;ll never claim your ideas as your personal information, but we&apos;re free
        to build on them.
      </p>

      <h2>11. Termination</h2>
      <ul>
        <li>
          <strong>You can leave anytime.</strong> Delete the app and, if you have one, delete your account from{' '}
          <em>Settings → Profile → Delete Account</em>. Deleting your account permanently removes your data
          within 30 days, as described in the Privacy Policy.
        </li>
        <li>
          <strong>We can terminate too.</strong> We may suspend or terminate your access if you violate these
          Terms, abuse the Service, or expose us to legal risk. Where reasonable, we&apos;ll give you notice and a
          chance to fix the issue first.
        </li>
        <li>
          <strong>Survival.</strong> Sections on Your Content (license to run the Service while you have content
          with us), Acceptable Use, Our Intellectual Property, Feedback, Disclaimers, Limitation of Liability,
          and Governing Law survive termination.
        </li>
      </ul>

      <h2>12. Apple App Store Terms</h2>
      <p>
        You acknowledge that these Terms are between you and HomeStock, not Apple, and that Apple is not
        responsible for HomeStock or its content. Apple has no obligation to provide support for HomeStock. If
        the app fails to conform to any applicable warranty, you may notify Apple and Apple will refund the
        purchase price, if any; to the maximum extent permitted by law, Apple has no other warranty obligation.
        Apple is a third-party beneficiary of these Terms and may enforce them against you.
      </p>

      <h2>13. Disclaimers</h2>
      <p>
        HomeStock is provided <strong>&quot;as is&quot; and &quot;as available&quot;</strong> without warranties of
        any kind, express or implied, including warranties of merchantability, fitness for a particular purpose,
        non-infringement, and accuracy. We don&apos;t warrant that the Service will be uninterrupted, error-free,
        or that AI suggestions, price estimates, or expiry reminders will be correct. Use them as a starting
        point, not a source of truth.
      </p>
      <p>
        Some jurisdictions don&apos;t allow disclaimers of implied warranties, so some of the above may not apply
        to you.
      </p>

      <h2>14. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, HomeStock and its officers, employees, and providers will not
        be liable for any indirect, incidental, special, consequential, or punitive damages, or for loss of
        profits, data, or goodwill, arising out of or relating to your use of the Service — even if we&apos;ve
        been advised of the possibility of those damages.
      </p>
      <p>
        Our total liability to you for any claim relating to the Service is limited to the greater of (a) the
        amount you paid us for the Service in the twelve months before the claim, or (b) USD 100.
      </p>
      <p>
        Some jurisdictions don&apos;t allow these limits, so they may not apply to you. Nothing here limits
        liability that cannot be limited by law.
      </p>

      <h2>15. Indemnification</h2>
      <p>
        You agree to defend and indemnify HomeStock against any claims, damages, and expenses (including
        reasonable legal fees) arising from (a) your use of the Service, (b) content you upload, (c) your
        breach of these Terms, or (d) your violation of any law or third-party right.
      </p>

      <h2>16. Governing Law and Disputes</h2>
      <p>
        These Terms are governed by the laws of the State of Delaware, United States, without regard to
        conflict-of-laws principles. If you have a concern, please contact us first at{' '}
        <a href="mailto:support@home-stock.io">support@home-stock.io</a> — we&apos;ll try to resolve it informally.
        If we can&apos;t, disputes will be resolved in the state or federal courts located in Delaware, and you
        consent to their jurisdiction.
      </p>
      <p>
        If you&apos;re an EU, UK, or Swiss consumer, you also benefit from any mandatory protections of the law
        of the country where you live, and you may bring proceedings in your local courts.
      </p>

      <h2>17. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. If we make material changes, we&apos;ll notify you in the app
        and update the &quot;Effective&quot; date at the top of this page. Continuing to use HomeStock after a change
        means you accept the updated Terms. If you don&apos;t agree, stop using the Service.
      </p>

      <h2>18. Miscellaneous</h2>
      <ul>
        <li>
          <strong>Entire agreement.</strong> These Terms and the Privacy Policy are the whole agreement between
          you and HomeStock about the Service.
        </li>
        <li>
          <strong>Severability.</strong> If a court finds any part of these Terms unenforceable, the rest stays
          in effect.
        </li>
        <li>
          <strong>No waiver.</strong> Our not enforcing a right doesn&apos;t waive it.
        </li>
        <li>
          <strong>Assignment.</strong> You can&apos;t assign your rights under these Terms without our consent. We
          may assign ours in connection with a merger, acquisition, or sale of assets.
        </li>
        <li>
          <strong>No agency.</strong> These Terms don&apos;t create any partnership, employment, or agency
          relationship.
        </li>
      </ul>

      <h2>19. Contact</h2>
      <p>
        Questions about these Terms? Email{' '}
        <a href="mailto:support@home-stock.io">support@home-stock.io</a>.
      </p>
    </LegalLayout>
  );
}
