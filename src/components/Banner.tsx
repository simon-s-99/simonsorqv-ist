import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

export default function Banner() {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="bg-primary flex flex-row grow items-center justify-center min-h-8"
          exit={{ y: -40, transition: { ease: [0, 0, 0.4, 1] } }}
        >
          <p>
            This website is under{" "}
            <span className="text-secondary-accent">development</span>, content
            & layout may change at any time.
          </p>
          <button
            className="cursor-pointer m-1 ml-2 p-0.5 border rounded-2xl"
            onClick={() => setIsVisible(false)}
          >
            <RxCross1 />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
