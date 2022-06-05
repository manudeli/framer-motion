import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { buttonVariants } from "~/motions/variants";
import { exit } from "~/motions/variant";
import { Loader } from "~/components";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 1.5 },
  },
  exit,
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Loader />
      <motion.h2>Welcome to Pizza Joint</motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          animate="visible"
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
