/**
 * SynapLift Pro plan copy. There is no live store listing, so this file stores no Pro price.
 * Product ids match the app entitlement `pro`.
 */
export const storeProductIds = {
  monthly: "myon_pro_monthly",
  annual: "myon_pro_annual",
  entitlement: "pro",
} as const;
export const pricingPlans = {
  free: {
    id: "free",
    name: "Free",
    tagline: "Everything you need to log and progress",
    priceLabel: "$0",
    periodLabel: "forever",
    cta: "Coming soon",
    highlighted: false,
  },
  pro: {
    id: "pro",
    name: "SynapLift Pro",
    tagline: "Unlimited AI coaching & physique analysis",
    priceLabel: "Pricing announced at launch",
    cta: "Get SynapLift Pro",
    highlighted: true,
  },
} as const;

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
] as const;

export const pricingTrustNotes = [
  "Cancel anytime in App Store subscription settings",
  "Restore Purchases available in the app",
  "Deleting your account does not cancel billing",
] as const;
