import { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {
    rotateY: 300,
    opacity: 0,
    x: "50vw",
  },
  visible: {
    rotateY: 0,
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
    },
  },
  boom: {
    rotateY: 0,
    scale: 0.9,
    transition: {
      type: "spring",
    },
  },
} as const;

export default containerVariants;
