export const reveal = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

export const revealGroup = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
