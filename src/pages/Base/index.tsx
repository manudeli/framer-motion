import { Link } from "react-router-dom";
import { Pizza } from "~/types";
import { motion } from "framer-motion";
import { selectedListStyle } from "~/motions/list";
import { containerVariants } from "~/motions/container";
import { nextVariants } from "~/motions/next";

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
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
