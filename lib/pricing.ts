/**
 * SynapLift plan copy. There is no live store listing, so the site shows no Pro price.
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
    tagline: "Unlimited AI Coach & Scan AI",
    priceLabel: "Pricing announced at launch",
    cta: "Get SynapLift Pro",
    highlighted: true,
  },
} as const;

export const freeFeatures = [
  "Unlimited workout logging",
  "Custom templates & rest timers",
  "PR & volume tracking",
  "Progress, calendar & full workout history",
  "1 AI Coach message a month",
  "1 Scan AI physique scan per month",
] as const;

export const proFeatures = [
  "Unlimited AI Coach that knows your lifts",
  "Unlimited Scan AI physique analysis",
] as const;

export const pricingTrustNotes = [
  "Cancel anytime in App Store subscription settings",
  "Restore Purchases available in the app",
  "Deleting your account does not cancel billing",
] as const;
