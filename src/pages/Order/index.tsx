import { motion, Variants } from "framer-motion";

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
      when: "beforeChildren",
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
  pizza: {
    base: string;
    toppings: string[];
  };
}

const Order = ({ pizza }: Props) => {
  const { base, toppings } = pizza;

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order </h2>
      <motion.p initial="hidden" animate="visible">
        You ordered a <motion.span variants={childVariants}>{base}</motion.span>{" "}
        pizza with:
      </motion.p>
      <motion.div>
        {toppings.map((topping, index) => (
          <motion.div
            key={topping}
            variants={childVariants}
            transition={{ delay: index * 0.1 }}
          >
            {topping}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
