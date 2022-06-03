import { Link } from "react-router-dom";
import { Pizza } from "~/types";
import { motion, Variants } from "framer-motion";
import { selectedListStyle } from "~/motions/targetAndTransition";
import { buttonVariants } from "~/motions/variants";
import { exit } from "~/motions/variant";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    x: "50vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
    },
  },
  boom: {
    scale: 0.9,
    transition: {
      type: "spring",
    },
  },
  exit,
} as const;

interface Props {
  toggleTopping: (topping: string) => void;
  pizza: Pizza;
}

const Toppings = ({ toggleTopping, pizza }: Props) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.div
      className="toppings container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileTap="boom"
      exit="exit"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              key={topping}
              onClick={() => toggleTopping(topping)}
              animate={
                pizza.toppings.includes(topping) ? selectedListStyle : {}
              }
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 600 }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button variants={buttonVariants} whileHover="hover">
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
