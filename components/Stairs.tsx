import { animate, motion } from "framer-motion";

// variant
const starAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index: number) => {
  const totalSteps = 3;
  return totalSteps - index - 1;
};
const Stairs = () => {
  return (
    <>
      {/* render 3 motion divs, each represnting a step of the stairs */}
      {[...Array(5)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={starAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="w-full h-full bg-accent relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
