import {
  LegalLink,
  LegalList,
  LegalPage,
  LegalSection,
} from "@/components/LegalPage";
import {
  companyName,
  companyCountry,
  kvkLegalFooter,
  kvkNumber,
  supportEmail,
} from "@/lib/legal";

export const metadata = {
  title: "Privacy Policy — SynapLift",
  description:
    "How SynapLift collects, uses, and protects your data — including AI Coach and Scan AI.",
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy">
      <LegalSection title="1. Who we are">
        <p>
          <strong className="text-white">{companyName}</strong> (&quot;we&quot;, &quot;us&quot;)
          operates SynapLift, a strength-training mobile application with workout
          logging, progress tracking, and AI-powered coaching features. We are
          established in the{" "}
          <strong className="text-white">{companyCountry}</strong> (KVK: {kvkNumber}).
        </p>
        <p>
          Privacy contact:{" "}
          <LegalLink href={`mailto:${supportEmail}`}>{supportEmail}</LegalLink>
        </p>
        <p>
          This policy describes how we process personal data when you use the
          SynapLift mobile app and this website. It is designed to meet{" "}
          <strong className="text-white">GDPR / AVG</strong> (EU) transparency
          requirements and aligns with Apple App Store privacy expectations for
          health &amp; fitness apps.
        </p>
      </LegalSection>

      <LegalSection title="2. Data we collect">
        <p>Depending on how you use SynapLift, we may process:</p>
        <LegalList
          items={[
            "Account data: email address (when provided by Apple or Google), display name, and sign-in identifiers when you use Sign in with Apple or Google.",
            "Profile & fitness data: age, weight, height, goals, experience level, training preferences, and workout history (exercises, sets, reps, volume, personal records).",
            "AI Coach data: text messages you send to the coach and optional photos you attach in chat.",
            "Subscription status: whether you have SynapLift Pro (billing is handled by Apple or Google; we do not store your payment card details).",
            "Technical data: app version, device type, and security signals to protect our services.",
          ]}
        />
        <p>
          Health and fitness-related data may qualify as{" "}
          <strong className="text-white">special category data</strong> under
          GDPR Article 9. We process it only with your{" "}
          <strong className="text-white">explicit consent</strong>, which you
          provide by creating an account, entering profile data, and using AI
          features after reading in-app disclosures.
        </p>
      </LegalSection>

      <LegalSection title="3. AI processing and image data (Scan AI & Coach)">
        <p>
          To provide personalized coaching and physique analysis (including{" "}
          <strong className="text-white">Scan AI</strong> and photo messages in
          AI Coach), SynapLift requires access to your device&apos;s{" "}
          <strong className="text-white">camera and photo library</strong> when
          you choose to upload images.
        </p>
        <LegalList
          items={[
            "Image processing: When you upload a physique or workout photo, the image is sent over encrypted connections to a third-party AI provider (Google) solely for real-time coaching or visual analysis.",
            "No biometric identification: SynapLift does not use your photos for facial recognition, biometric identity verification, or permanent user tracking.",
            "Data retention & protection: Uploaded images are analyzed to generate your response and are not stored permanently on public-facing servers for advertising purposes. They are not sold to data brokers or used for targeted advertising.",
            "User control: You can revoke camera or photo-library permissions at any time in your iOS or Android system settings. Without permission, you can still use text-based coaching where available.",
          ]}
        />
        <p>
          <strong className="text-white">Third-party AI (Apple Guideline 5.1.2):</strong>{" "}
          Before your content is sent for AI analysis, the SynapLift app shows you
          an in-app disclosure naming the provider and asking for{" "}
          <strong className="text-white">explicit permission</strong>. A general
          terms checkbox alone is not sufficient — you must consent to AI
          sharing inside the app.
        </p>
      </LegalSection>

      <LegalSection title="4. Why we use your data (legal bases)">
        <LegalList
          items={[
            "Contract: to provide workout logging, sync your data, and operate your account.",
            "Explicit consent: for health/fitness profile data, AI Coach, and Scan AI image analysis.",
            "Legitimate interests: security, fraud prevention, and improving app stability (balanced against your rights).",
            "Legal obligation: where we must retain limited records (e.g. tax-related billing metadata from platforms).",
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Who we share data with">
        <p>We do not sell your personal data. We use trusted processors:</p>
        <LegalList
          items={[
            "Google — secure sign-in, cloud storage, and AI text/vision analysis (processing may occur in the EU or US per Google’s terms).",
            "Our subscription partner — confirms whether you have SynapLift Pro (Apple and Google handle payment).",
            "Apple App Store / Google Play — in-app purchases and subscriptions (we do not receive your full card details).",
          ]}
        />
        <p>
          Each processor is bound by contractual data-protection obligations.
          Links to their policies are available on request.
        </p>
      </LegalSection>

      <LegalSection title="6. Retention">
        <LegalList
          items={[
            "Account & workout data: kept while your account is active. You may delete your account in Settings.",
            "After account deletion: personal data is removed from active systems within a reasonable period; backups may persist for up to 90 days before automatic purge.",
            "AI images: processed for the request; not retained for marketing or resale.",
            "Support emails: up to 24 months unless a longer period is required by law.",
          ]}
        />
      </LegalSection>

      <LegalSection title="7. Your rights (GDPR / AVG)">
        <p>If you are in the EEA (including the Netherlands), you may:</p>
        <LegalList
          items={[
            "Access, correct, or delete your personal data.",
            "Restrict or object to certain processing.",
            "Withdraw consent for AI or health data (this may limit features).",
            "Request data portability where applicable.",
            "Lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens) at autoriteitpersoonsgegevens.nl.",
          ]}
        />
        <p>
          To exercise your rights, email{" "}
          <LegalLink href="mailto:synaplift@outlook.com">synaplift@outlook.com</LegalLink>{" "}
          or delete your account in the app (Settings → Delete account).
        </p>
      </LegalSection>

      <LegalSection title="8. Account deletion">
        <p>
          You can delete your SynapLift account from{" "}
          <strong className="text-white">Settings → Delete account</strong> in
          the app. This removes your profile and workout data from our active
          systems and signs you out of linked services.
        </p>
        <p>
          <strong className="text-white">Important:</strong> Deleting your
          account does <em>not</em> cancel an active SynapLift Pro subscription
          billed through Apple or Google. Cancel subscriptions in{" "}
          <strong className="text-white">
            iOS Settings → Apple ID → Subscriptions
          </strong>{" "}
          or Google Play subscription settings.
        </p>
      </LegalSection>

      <LegalSection title="9. Children">
        <p>
          SynapLift is not intended for users under{" "}
          <strong className="text-white">18 years of age</strong>. We do not
          knowingly collect data from minors. Contact us if you believe a minor
          has created an account.
        </p>
      </LegalSection>

      <LegalSection title="10. International transfers">
        <p>
          Some processors (e.g. Google) may process data in the United States or
          other countries. We rely on appropriate safeguards such as Standard
          Contractual Clauses where required by GDPR.
        </p>
      </LegalSection>

      <LegalSection title="11. Security">
        <p>
          We use encryption in transit, access controls, and additional checks on
          AI features. No method of transmission over the internet is 100% secure;
          we work to protect your data using industry-standard measures.
        </p>
      </LegalSection>

      <LegalSection title="12. Changes">
        <p>
          We may update this policy. Material changes will be reflected on this
          page with a new &quot;Last updated&quot; date. Continued use of SynapLift
          after changes constitutes acceptance where permitted by law.
        </p>
      </LegalSection>

      <LegalSection title="13. Contact">
        <p>
          {kvkLegalFooter}
          <br />
          <LegalLink href="mailto:synaplift@outlook.com">synaplift@outlook.com</LegalLink>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
