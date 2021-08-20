export const containerVarient = {
  initial: {
    opacity: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  animated: {
    opacity: 1,
  },
};

export const childrenVarient = {
  initial: {
    opacity: 0,
    y: 80,
  },
  animated: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
