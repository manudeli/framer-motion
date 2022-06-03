import { Dispatch, SetStateAction, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Pizza } from "~/types";

const containerVariants: Variants = {
  hidden: {
    scale: 0,
    rotateZ: 200,
    rotateY: 100,
    opacity: 0,
    x: "50vw",
  },
  visible: {
    scale: 1,
    rotateZ: 0,
    rotateY: 0,
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.9,
      damping: 18,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  boom: {
    rotateY: 0,
    scale: 0.9,
    transition: {
      type: "spring",
    },
  },
};

const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    textShadow: "0 0 8px #f8e112",
    scale: 1.2,
    y: 0,
  },
};
interface Props {
  pizza: Pizza;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

const Order = ({ pizza, setIsModal }: Props) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsModal(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [setIsModal]);

  const { base, toppings } = pizza;

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        <h2>Thank you for your order </h2>
      </AnimatePresence>
      <motion.p initial="hidden" animate="visible">
        You ordered a <motion.span variants={childVariants}>{base}</motion.span>{" "}
        pizza with:
      </motion.p>
      <motion.div>
        {toppings.map((topping, index) => (
          <motion.div key={topping} variants={childVariants}>
            {topping}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
