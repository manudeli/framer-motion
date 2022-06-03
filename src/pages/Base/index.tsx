import { Link } from "react-router-dom";
import { Pizza } from "~/types";
import { motion, Variants } from "framer-motion";
import { selectedListStyle } from "~/motions/style";
import { buttonVariants, nextVariants } from "~/motions/variants";

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

interface Props {
  addBase: (base: Pizza["base"]) => void;
  pizza: Pizza;
}

const Base = ({ addBase, pizza }: Props) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"] as const;

  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileTap="boom"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              animate={pizza.base === base ? selectedListStyle : {}}
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 600 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          variants={nextVariants}
          initial="hidden"
          animate="visible"
        >
          <Link to="/toppings">
            <motion.button variants={buttonVariants} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
