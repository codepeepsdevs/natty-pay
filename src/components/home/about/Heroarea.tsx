"use client";
import { motion, useInView } from "framer-motion";
import { SectionWrapper } from "@/utils/hoc";
import { textVariant } from "@/utils/motion";
import { useRef } from "react";

const Heroarea = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25 });

  return (
    <div className="relative w-full flex justify-center">
      <motion.div
        ref={ref}
        animate={isInView ? "show" : "hidden"}
        initial="hidden"
        className="w-[90%] lg:w-[88%] flex flex-col justify-center h-full pb-20 pt-28 sm:pb-28 sm:pt-32 md:pb-32 md:pt-48"
      >
        <div className="inset-0 mx-auto flex flex-col justify-center items-center">
          <div className="relative w-full sm:w-[90%] md:w-[80%] flex flex-col gap-6">
            <motion.div
              variants={textVariant(0.1)}
              className="z-10 w-full 2xs:w-[95%] text-text-200 dark:text-text-400 flex flex-col gap-2 xs:gap-3 text-center py-4"
            >
              <h1 className="text-3xl 2xs:text-4xl xs:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[2.4rem] 2xs:leading-[2.8rem] xs:leading-[3.5rem] xl:leading-[4rem] 2xl:leading-[5rem]">
                About Nattypay{" "}
              </h1>
              <p className="text-base 2xs:text-lg xl:text-xl leading-[1.5rem] xl:leading-[2rem]">
                Nattypay Global Solution Ltd. is a registered Fin Tech company
                in Nigeria, committed to revolutionizing local and global
                financial services by providing innovative, secure, and
                user-friendly solutions that cater to the diverse needs of our
                customers. Founded with the vision of enhancing financial
                inclusion and empowering individuals and businesses, Nattypay is
                designed to offer a seamless and comprehensive financial
                experience.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Heroarea, "heroarea");
