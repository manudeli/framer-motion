import styled from "@emotion/styled";
import { motion, Variants, useCycle } from "framer-motion";

const loaderVariants: Variants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: { yoyo: Infinity, duration: 0.5 },
      y: { yoyo: Infinity, duration: 0.25, ease: "easeOut" },
    },
  },
  animationTwo: {
    x: 0,
    y: [0, -40],
    transition: {
      y: { yoyo: Infinity, duration: 0.25, ease: "easeOut" },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");

  return (
    <>
      <StyledLoader
        className="loader"
        variants={loaderVariants}
        animate={animation}
      />
      <div onClick={() => cycleAnimation()}>Cycle Loader</div>
    </>
  );
};

export default Loader;

const StyledLoader = styled(motion.div)`
  width: 10px;
  height: 10px;
  margin: 40px auto;
  border-radius: 50%;
  background: #fff;
`;
