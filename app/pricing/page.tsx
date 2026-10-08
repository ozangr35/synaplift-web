import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";

export const metadata = {
  title: "Pricing | SynapLift",
  description:
    "SynapLift Free includes workout logging, 1 AI Coach message, and 1 Scan AI scan a month. Pro is Unlimited AI Coach & Scan AI. Pricing announced at launch.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-carbon">
      <Navbar />
      <Pricing />
      <Footer />
    </main>
  );
}
