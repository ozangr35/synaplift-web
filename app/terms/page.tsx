import {
  LegalLink,
  LegalList,
  LegalPage,
  LegalSection,
  MedicalDisclaimerBox,
} from "@/components/LegalPage";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service — SynapLift",
  description:
    "Terms of Service and medical disclaimer for the SynapLift fitness app.",
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of Service">
      <MedicalDisclaimerBox>
        <p className="font-black text-white">
          IMPORTANT MEDICAL DISCLAIMER AND LIABILITY WAIVER
        </p>
        <p className="mt-4 uppercase">
          SynapLift IS NOT A MEDICAL ORGANIZATION, A LICENSED MEDICAL DEVICE, OR A
          CERTIFIED MEDICAL PROFESSIONAL. THE APP, INCLUDING THE GEMINI-POWERED
          AI COACH AND ALL TRAINING PLANS, PROVIDES INFORMATION AND
          RECOMMENDATIONS FOR EDUCATIONAL AND INFORMATIONAL PURPOSES ONLY.
        </p>
        <ol className="mt-4 list-decimal space-y-3 pl-5 uppercase">
          <li>
            <strong className="text-white">No medical advice:</strong> The AI
            Coach&apos;s advice should never replace professional medical
            assessment, diagnosis, or treatment. Always consult with a qualified
            physician before starting any physical training, lifting weights, or
            changing your nutrition plan.
          </li>
          <li>
            <strong className="text-white">Assumption of risk:</strong> Strength
            training and gym workouts carry inherent risks of severe physical
            injury. By using SynapLift, you explicitly agree that you are training
            voluntarily and assume all risks of injury, illness, or damage to
            your person or property.
          </li>
          <li>
            <strong className="text-white">Limitation of liability:</strong>{" "}
            Under no circumstances shall SynapLift (or its holding company in the
            Netherlands) be held liable for any physical injuries, health
            complications, or damages resulting from the use of the app or
            adherence to the AI Coach&apos;s recommendations.
          </li>
          <li>
            <strong className="text-white">Age restriction:</strong> You must be
            at least 18 years of age to create an account and use the SynapLift
            application.
          </li>
        </ol>
      </MedicalDisclaimerBox>

      <LegalSection title="1. Agreement">
        <p>
          By downloading, installing, or using SynapLift, you agree to these Terms
          of Service and our{" "}
          <Link href="/privacy" className="font-semibold text-neon-blue hover:underline">
            Privacy Policy
          </Link>
          . If you do not agree, do not use the app.
        </p>
      </LegalSection>

      <LegalSection title="2. The service">
        <p>
          SynapLift provides workout logging, progress tracking, optional AI Coach
          chat, Scan AI physique analysis, and related fitness tools. Features
          may change, be limited by region, or require SynapLift Pro.
        </p>
        <p>
          AI outputs may be inaccurate or incomplete. You are responsible for
          verifying exercises, loads, and nutrition choices before acting on
          them.
        </p>
      </LegalSection>

      <LegalSection title="3. Eligibility">
        <p>
          You must be at least <strong className="text-white">18 years old</strong>{" "}
          and capable of entering a binding contract. You may not use SynapLift if
          you are prohibited by applicable law.
        </p>
      </LegalSection>

      <LegalSection title="4. Account & security">
        <LegalList
          items={[
            "You are responsible for keeping your login credentials secure.",
            "You must provide accurate profile information where requested.",
            "You may delete your account at any time in Settings → Delete account.",
            "We may suspend accounts that violate these Terms or abuse the service.",
          ]}
        />
      </LegalSection>

      <LegalSection title="5. SynapLift Pro subscriptions">
        <LegalList
          items={[
            "Paid plans (monthly, yearly, lifetime) are billed through the Apple App Store or Google Play via RevenueCat.",
            "Prices, trials, and renewal terms are shown at purchase and in your platform subscription settings.",
            "Use Restore Purchases in the app if you reinstall or change devices.",
            "Deleting your SynapLift account does NOT cancel billing — cancel in Apple/Google subscription settings.",
            "Refunds are handled by Apple or Google under their policies, not directly by SynapLift.",
          ]}
        />
      </LegalSection>

      <LegalSection title="6. AI Coach & Scan AI">
        <LegalList
          items={[
            "AI features send your prompts and optional images to Google Gemini via our secure backend, as described in the Privacy Policy.",
            "You must grant explicit in-app consent before data is shared with third-party AI.",
            "Do not upload content that is illegal, offensive, non-consensual, or unrelated to fitness.",
            "Scan AI is for physique and training feedback only — not medical diagnosis.",
            "We may rate-limit or restrict AI usage on free plans.",
          ]}
        />
      </LegalSection>

      <LegalSection title="7. Acceptable use">
        <p>You agree not to:</p>
        <LegalList
          items={[
            "Misuse the app, reverse engineer protected components, or attempt to bypass paywalls or security.",
            "Use SynapLift for medical emergencies — call local emergency services.",
            "Harass others or upload harmful content through AI features.",
            "Scrape or automate access to our services without permission.",
          ]}
        />
      </LegalSection>

      <LegalSection title="8. Intellectual property">
        <p>
          SynapLift, its branding, software, and content are owned by us or our
          licensors. You receive a limited, non-exclusive, revocable license to
          use the app for personal, non-commercial fitness purposes.
        </p>
        <p>
          You retain rights to your workout data. You grant us a license to
          process it solely to operate and improve the service.
        </p>
      </LegalSection>

      <LegalSection title="9. Disclaimer of warranties">
        <p>
          SynapLift is provided &quot;as is&quot; and &quot;as available&quot; without
          warranties of any kind, to the fullest extent permitted by law. We do
          not guarantee uninterrupted service, error-free AI responses, or
          specific fitness results.
        </p>
      </LegalSection>

      <LegalSection title="10. Limitation of liability">
        <p>
          To the maximum extent permitted by applicable law, SynapLift and its
          affiliates shall not be liable for indirect, incidental, special, or
          consequential damages, or for injuries arising from training activities
          or reliance on AI content, as set out in the medical disclaimer above.
        </p>
        <p>
          Where liability cannot be excluded (e.g. under mandatory EU consumer
          law), our total liability is limited to the amount you paid for SynapLift
          Pro in the twelve months before the claim, or €50 if you use the free
          tier.
        </p>
      </LegalSection>

      <LegalSection title="11. Governing law">
        <p>
          These Terms are governed by the laws of the{" "}
          <strong className="text-white">Netherlands</strong>, without regard to
          conflict-of-law rules. EU consumers may also benefit from mandatory
          protections in their country of residence. Disputes may be brought
          before the competent courts in the Netherlands, subject to mandatory
          consumer rights.
        </p>
      </LegalSection>

      <LegalSection title="12. Changes">
        <p>
          We may update these Terms. We will post the revised version on this
          page. Material changes may also be communicated in-app where
          appropriate.
        </p>
      </LegalSection>

      <LegalSection title="13. Contact">
        <p>
          SynapLift · Netherlands · KVK 12345678
          <br />
          <LegalLink href="mailto:support@myon.nl">support@myon.nl</LegalLink>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
