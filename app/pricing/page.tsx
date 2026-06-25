import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";

export const metadata = {
  title: "Pricing — SynapLift",
  description:
    "SynapLift free tier and SynapLift Pro — unlimited AI Coach and Scan AI for serious training.",
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
