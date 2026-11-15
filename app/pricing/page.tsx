import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";

export const metadata = {
  title: "Pricing | SynapLift",
  description:
    "Workout logging, templates and history are free. SynapLift Pro unlocks unlimited AI Coach, with Scan AI included. Pricing announced at launch.",
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
