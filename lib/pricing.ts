/**
 * SynapLift Pro pricing — keep in sync with App Store / RevenueCat products
 * (`monthly`, `yearly`) and in-app paywall copy.
 */
export const pricingPlans = {
  free: {
    id: "free",
    name: "Free",
    tagline: "Everything you need to log and progress",
    priceLabel: "$0",
    periodLabel: "forever",
    cta: "Download free",
    highlighted: false,
  },
  pro: {
    id: "pro",
    name: "SynapLift Pro",
    tagline: "Unlimited AI coaching & physique analysis",
    monthly: {
      amount: 10,
      label: "$10",
      period: "month",
      perMonthLabel: "$10/mo",
    },
    yearly: {
      amount: 100,
      label: "$100",
      period: "year",
      perMonthLabel: "$8.33/mo",
      savingsVsMonthly: 20,
      savingsPercent: 17,
      badge: "Best value",
    },
    cta: "Get SynapLift Pro",
    highlighted: true,
  },
} as const;

export type BillingInterval = "monthly" | "yearly";

export const freeFeatures = [
  "Unlimited workout logging",
  "Custom templates & rest timers",
  "PR & volume tracking",
  "1 AI Coach message to try",
] as const;

export const proFeatures = [
  "Unlimited AI Coach chat",
  "Scan AI physique analysis",
  "Coach reads your lift history",
  "Full progress analytics",
  "Priority AI responses",
] as const;

export const pricingTrustNotes = [
  "Cancel anytime in App Store subscription settings",
  "Restore Purchases available in the app",
  "Deleting your account does not cancel billing",
] as const;
