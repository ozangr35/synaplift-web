/** SSR-safe motion presets — avoid opacity:0 on first paint (blank page without JS). */
export const motionInView = {
  header: {
    initial: { y: 20 },
    whileInView: { y: 0 },
    viewport: { once: true, margin: "-80px" as const },
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
  card: (delay = 0) => ({
    initial: { y: 24 },
    whileInView: { y: 0 },
    viewport: { once: true, margin: "-60px" as const },
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  }),
  panel: {
    initial: { y: 28 },
    whileInView: { y: 0 },
    viewport: { once: true, margin: "-60px" as const },
    transition: { duration: 0.55, delay: 0.2, ease: "easeOut" as const },
  },
};

export const heroFadeUp = {
  hidden: { y: 24 },
  visible: (i: number) => ({
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" as const },
  }),
};

export const heroFloat = {
  animate: { y: [0, -10, 0] },
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export const hoverLift = {
  whileHover: { y: -4, transition: { duration: 0.2 } },
};
