import { Variants } from "framer-motion";

const nextVariants: Variants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

export default nextVariants;
