import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy — HomeStock',
  description:
    'How HomeStock collects, uses, and protects your data. End-to-end auth, encrypted storage, zero ad-tech, zero data sales.',
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" effectiveDate="May 12, 2026">
      <p>
        HomeStock (&quot;HomeStock,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) builds a personal inventory app for iPhone.
        This Privacy Policy explains what information we collect, why we collect it, how we use it, and the
        choices you have. It applies to the HomeStock iOS app, our website at{' '}
        <a href="https://homestock.app">homestock.app</a>, and any related services (together, the &quot;Service&quot;).
      </p>
      <p>
        We designed HomeStock to minimize data collection. We do not sell your data, we do not run ads, and we do
        not embed third-party advertising or tracking SDKs.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>1.1 Information you provide</h3>
      <ul>
        <li>
          <strong>Account information.</strong> You can use HomeStock anonymously. If you choose to sign in with
          Apple or Google to back up or share, we receive your name, email, and a stable user identifier from the
          identity provider.
        </li>
        <li>
          <strong>Content you create.</strong> Items, rooms, folders, storage boxes, lending records, audit
          history, household members, photos, notes, prices, dates, and any other data you enter.
        </li>
        <li>
          <strong>Support communications.</strong> Messages you send to <a href="mailto:support@homestock.app">support@homestock.app</a>.
        </li>
      </ul>

      <h3>1.2 Information collected automatically</h3>
      <ul>
        <li>
          <strong>Device & app data.</strong> iOS version, device model, app version, language, time zone, and
          anonymous diagnostic logs needed to keep the app working.
        </li>
        <li>
          <strong>Push tokens.</strong> If you enable notifications, we store the Apple Push Notification token
          for your device so we can send reminders you have opted into.
        </li>
        <li>
          <strong>Crash & performance data.</strong> When the app crashes, we collect anonymous diagnostics
          (stack trace, device class) to fix it.
        </li>
      </ul>

      <h3>1.3 Information from third parties</h3>
      <ul>
        <li>
          <strong>Apple / Google Sign In.</strong> When you link an account, we receive only the basic profile
          fields you authorize.
        </li>
        <li>
          <strong>RevenueCat.</strong> Our subscription provider returns your purchase status (active /
          cancelled / expired) and an anonymous subscriber ID. We never see your card details — those stay with
          Apple.
        </li>
        <li>
          <strong>AppsFlyer.</strong> When you tap an invite link to join a household, AppsFlyer passes us only
          the invite token. We disable advertising IDFA collection.
        </li>
      </ul>

      <h2>2. How We Use Information</h2>
      <ul>
        <li>To provide, maintain, and improve HomeStock.</li>
        <li>To sync your inventory across your devices and household members.</li>
        <li>To process photos through AI for auto-fill suggestions (see &quot;AI Features&quot; below).</li>
        <li>To send reminders, invite notifications, and warranty/expiry alerts you opted into.</li>
        <li>To process subscriptions, refunds, and entitlements through RevenueCat.</li>
        <li>To respond to support requests and security incidents.</li>
        <li>To prevent fraud and abuse and to enforce our Terms of Use.</li>
      </ul>

      <h2>3. AI Features</h2>
      <p>
        HomeStock includes an &quot;AI Capture&quot; feature. When you take a photo of an item, we send the photo to
        Google&apos;s Gemini API via our backend so it can suggest a name, category, and estimated price. The round
        trip takes a few seconds.
      </p>
      <ul>
        <li>The photo is transmitted over TLS to our backend, then to Google&apos;s Gemini API.</li>
        <li>
          Per Google&apos;s API terms, photos sent to Gemini are <strong>not used to train Google&apos;s models</strong>{' '}
          and are not retained beyond the request lifecycle.
        </li>
        <li>We do not store the photo on our AI pipeline servers. The original is saved only to your own Firebase Storage bucket associated with your account.</li>
        <li>You can disable AI Capture at any time and add items manually.</li>
      </ul>

      <h2>4. Service Providers</h2>
      <p>We rely on a small number of vetted infrastructure providers:</p>
      <ul>
        <li>
          <strong>Google Firebase</strong> — authentication, photo storage (Firebase Storage), and push
          delivery. Data is encrypted in transit (TLS) and at rest.
        </li>
        <li>
          <strong>Google Gemini API</strong> — AI photo analysis for AI Capture suggestions, as described above.
        </li>
        <li>
          <strong>Cloud database & API hosting</strong> — to store your inventory data (PostgreSQL on managed
          cloud infrastructure).
        </li>
        <li>
          <strong>RevenueCat</strong> — subscription management.
        </li>
        <li>
          <strong>AppsFlyer</strong> — deferred deep-linking for invite tokens. IDFA collection is disabled.
        </li>
        <li>
          <strong>Apple Push Notification Service</strong> — delivering notifications to your device.
        </li>
      </ul>
      <p>
        These providers may process data on our behalf strictly to provide the listed function, under written
        data-processing agreements. We do not authorize them to use your data for their own purposes.
      </p>

      <h2>5. Sharing of Information</h2>
      <p>We share your information only in the following situations:</p>
      <ul>
        <li>
          <strong>With household members you invite.</strong> When you invite someone to a shared household,
          they see the inventory, photos, and members of that household at the permission level you grant
          (owner, editor, or viewer).
        </li>
        <li>
          <strong>With service providers.</strong> The infrastructure listed in section 4, only as needed to run
          the Service.
        </li>
        <li>
          <strong>For legal reasons.</strong> If required by law, subpoena, court order, or to protect the
          rights, property, or safety of HomeStock, our users, or the public.
        </li>
        <li>
          <strong>In a business transfer.</strong> If HomeStock is acquired or merged, your data may be
          transferred to the successor entity, which will remain bound by this Privacy Policy or give you notice
          and choice.
        </li>
      </ul>
      <p>
        <strong>We do not sell your data. We do not share it with advertising networks. We do not use it to
        train third-party AI models.</strong>
      </p>

      <h2>6. Data Retention</h2>
      <p>
        We retain your inventory data for as long as your account is active. If you delete an item, room,
        household, or photo, we remove it from active databases promptly and from backups within 30 days.
      </p>
      <p>
        If you delete your account from Settings → Profile → Delete Account, we permanently delete your
        inventory, photos, and profile within 30 days, except where we are required to retain limited records
        (e.g., tax records of past purchases via Apple/RevenueCat).
      </p>

      <h2>7. Security</h2>
      <p>
        We protect your data with industry-standard measures: TLS 1.2+ for all network traffic, encryption at
        rest for databases and Firebase Storage, scoped access tokens, and Apple Sign In support so we never see
        your password. No system is 100% secure — please use a strong device passcode and enable Face ID for
        Sign in with Apple.
      </p>

      <h2>8. Your Rights and Choices</h2>
      <ul>
        <li>
          <strong>Access &amp; export.</strong> Export your entire inventory as JSON, CSV, or PDF from Settings.
        </li>
        <li>
          <strong>Correction.</strong> Edit or delete any item, room, or household from inside the app.
        </li>
        <li>
          <strong>Deletion.</strong> Settings → Profile → Delete Account permanently removes your data.
        </li>
        <li>
          <strong>Notifications.</strong> Disable any time from iOS Settings → Notifications → HomeStock.
        </li>
        <li>
          <strong>EU/UK residents (GDPR).</strong> You have the right to access, rectify, erase, restrict, and
          port your data, and to object to processing. Contact us at{' '}
          <a href="mailto:support@homestock.app">support@homestock.app</a>.
        </li>
        <li>
          <strong>California residents (CCPA/CPRA).</strong> You have the right to know what we collect, to
          delete it, and to opt out of any sale or share. As noted above, we do not sell or share your data for
          cross-context advertising.
        </li>
      </ul>

      <h2>9. International Data Transfers</h2>
      <p>
        HomeStock is operated from the United States and Europe. By using the Service, you understand that your
        information may be transferred to and processed in countries other than your own. Where transfers leave
        the EEA / UK / Switzerland, we rely on Standard Contractual Clauses or equivalent safeguards with our
        providers.
      </p>

      <h2>10. Children&apos;s Privacy</h2>
      <p>
        HomeStock is not directed to children under 13. We do not knowingly collect personal information from
        children under 13. If you believe a child has provided us with personal information, please contact us
        and we will delete it.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material changes will be announced inside the app
        and on this page with an updated &quot;Effective&quot; date. Continuing to use HomeStock after a change means you
        accept the updated policy.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about this Privacy Policy or your data? Email{' '}
        <a href="mailto:support@homestock.app">support@homestock.app</a>.
      </p>
    </LegalLayout>
  );
}
