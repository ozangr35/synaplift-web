import FeaturesBento from "@/components/FeaturesBento";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturesBento />
      <HowItWorks />
      <Pricing />
      <Footer />
    </main>
  );
}
