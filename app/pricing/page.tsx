import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";

export const metadata = {
  title: "Pricing | SynapLift",
  description:
    "Workout logging, templates and history are free, with 1 lifetime AI Coach message. SynapLift Pro is €8.99/month or €69.99/year. Prices in EUR. The App Store shows the price in your local currency.",
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
