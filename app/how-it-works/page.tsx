import { permanentRedirect } from "next/navigation";

export const metadata = {
  title: "How it works | SynapLift",
  description:
    "How SynapLift works: templates, workout logging, progress tracking, and AI coaching.",
};

export default function HowItWorksPage() {
  permanentRedirect("/product");
}
