import { Variants } from "framer-motion";

const buttonVariants: Variants = {
  visible: {
    x: [0, 20, -20, 20, -20, 20, 0],
    transition: { delay: 2 },
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.2,
      yoyo: Infinity,
    },
  },
};

export default buttonVariants;
