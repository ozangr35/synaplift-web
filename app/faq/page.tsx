import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "FAQ — SynapLift",
  description:
    "Frequently asked questions about SynapLift — free tier, Pro, AI Coach, privacy, and subscriptions.",
};

export default function FaqPage() {
  return (
    <main className="page-main">
      <Navbar />
      <Faq />
      <Footer />
    </main>
  );
}
