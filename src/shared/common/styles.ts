const variants = {
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
};

const fade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

const imgFade = {
  hidden: {
    opacity: 0,
    filter: 'blur(3px)',
  },
  visible: {
    opacity: 1,
    filter: 'blur(0)',
    transition: { duration: 0.3 },
  },
};

export { fade, imgFade, variants };
