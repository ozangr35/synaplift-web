/**
 * SynapLift Pro plan copy and prices.
 * Product ids match the app entitlement `pro`.
 */
export const storeProductIds = {
  monthly: "myon_pro_monthly",
  annual: "myon_pro_annual",
  entitlement: "pro",
} as const;

export type BillingInterval = "monthly" | "yearly";

export const pricingPlans = {
  free: {
    id: "free",
    name: "Free",
    tagline: "Everything you need to log and progress",
    priceLabel: "€0",
    periodLabel: "forever",
    cta: "Coming soon",
    highlighted: false,
  },
  pro: {
    id: "pro",
    name: "SynapLift Pro",
    tagline: "Unlimited AI Coach · Scan AI included",
    monthly: {
      amount: 8.99,
      label: "€8.99",
      period: "month",
    },
    yearly: {
      amount: 69.99,
      label: "€69.99",
      period: "year",
      savingsPercent: 35,
      badge: "Save 35%",
    },
    cta: "Get SynapLift Pro",
    highlighted: true,
  },
} as const;

export const freeFeatures = [
  "Unlimited workout logging",
  "Custom templates & rest timers",
  "PR & volume tracking",
  "Progress analytics and charts",
  "Coach reads your lift history",
  "1 lifetime AI Coach message",
] as const;

export const proFeatures = [
  "Unlimited AI Coach",
  "Scan AI included",
] as const;

export const pricingTrustNotes = [
  "Cancel anytime in App Store subscription settings",
  "Restore Purchases available in the app",
  "Deleting your account does not cancel billing",
] as const;
