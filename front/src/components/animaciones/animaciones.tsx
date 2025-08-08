export const slideFromTop = {
  initial: { y: -500, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.9, ease: "easeOut" },
};

export const slideFromLeft = {
  initial: { x: -500, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 1, ease: "easeOut" },
};

export const LowslideFromTop = {
  initial: { y: -500, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, ease: "easeOut" },
};


export const SlowslideFromLeft = {
  initial: { x: -500, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
};

export const FastslideFromLeft = {
  initial: { x: -500, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.9, ease: "easeOut" },
};

export const slideFromRight = {
  initial: { x: 500, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 1, ease: "easeOut" },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

export const slideUpFade = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
}

export const fadeInZoom = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};