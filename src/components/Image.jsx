import React from "react";
import { motion } from "framer-motion";

const Image = ({ img, title }) => {
  return (
    <motion.div
      // initial={{ x: 0 }}
      // whileInView={{ x: 100 }}
      // transition={{ duration: 1 }}
      className="profile"
      title={title}
    >
      <img
        src={img}
        alt="Profile Photo"
        className="cursor-pointer rounded-lg h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px]"
      />
    </motion.div>
  );
};

export default Image;
