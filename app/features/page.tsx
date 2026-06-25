import FeaturesBento from "@/components/FeaturesBento";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Features — SynapLift",
  description:
    "AI Coach, Scan AI, and pro-grade workout tracking — everything SynapLift offers serious lifters.",
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-carbon">
      <Navbar />
      <FeaturesBento />
      <Footer />
    </main>
  );
}
