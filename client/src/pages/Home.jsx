import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store/index";
import CustomButton from "../components/CustomButton";

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block hidden" /> DO IT
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md text-gray-600 font-normal text-base">
                Create your unique and exlusive shirt with our brand-new 3D
                customization tool. <strong>unleash your imagination</strong>{" "}
                and define your own style.
              </p>
              <CustomButton
                type="filled"
                title="Customize it"
                handlerClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"              />
                <img src="../../public/" alt="" />
            </motion.div>
          </motion.div>
          
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
