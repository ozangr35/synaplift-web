import { permanentRedirect } from "next/navigation";

export const metadata = {
  title: "Features — SynapLift",
  description:
    "AI Coach, Scan AI, and pro-grade workout tracking — everything SynapLift offers serious lifters.",
};

export default function FeaturesPage() {
  permanentRedirect("/#features");
}
