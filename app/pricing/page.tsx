import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";

export const metadata = {
  title: "Pricing — SynapLift",
  description:
    "SynapLift is free for workout logging. SynapLift Pro unlocks unlimited AI Coach and Scan AI — $10/month or $100/year.",
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
