/** Public static asset paths (served from /public/assets). */
export const assets = {
  branding: {
    appIcon: "/assets/branding/synaplift-app-icon.png",
    wordmark: "/assets/branding/synaplift-logo-wordmark.png",
    icon1024: "/assets/branding/icon-1024.png",
    appIconSquare: "/assets/branding/app-icon-square.png",
  },
  screenshots: {
    heroHome: "/assets/screenshots/hero-home.png",
    featureCoach: "/assets/screenshots/feature-coach.png",
    featureScan: "/assets/screenshots/feature-scan.png",
    featureProgress: "/assets/screenshots/feature-progress.png",
    flowWorkout: "/assets/screenshots/flow-workout.png",
    flowCalendar: "/assets/screenshots/flow-calendar.png",
  },
  badges: {
    appStore: "/assets/badges/app-store.svg",
    googlePlay: "/assets/badges/google-play.png",
  },
} as const;
