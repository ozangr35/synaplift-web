/** SSR-safe motion presets — avoid opacity:0 on first paint (blank page without JS). */
export const motionInView = {
  header: {
    initial: { y: 20 },
    whileInView: { y: 0 },
    viewport: { once: true, margin: "-80px" as const },
    transition: { duration: 0.5 },
  },
  card: (delay = 0) => ({
    initial: { y: 24 },
    whileInView: { y: 0 },
    viewport: { once: true, margin: "-60px" as const },
    transition: { duration: 0.5, delay },
  }),
  panel: {
    initial: { y: 28 },
    whileInView: { y: 0 },
    viewport: { once: true, margin: "-60px" as const },
    transition: { duration: 0.55, delay: 0.2 },
  },
};

export const heroFadeUp = {
  hidden: { y: 24 },
  visible: (i: number) => ({
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" as const },
  }),
};
