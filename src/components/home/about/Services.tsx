"use client";
import { ServicesData } from "@/constants";
import SectionWrapper from "@/utils/hoc/SectionWrapper";
import { scaleVariants, staggerContainer, textVariant } from "@/utils/motion";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25 });

  return (
    <div className="w-full flex justify-center bg-bg-1200">
      <motion.div
        ref={ref}
        animate={isInView ? "show" : "hidden"}
        initial="hidden"
        className="w-[90%] lg:w-[88%] flex flex-col gap-0 lg:gap-10 items-center h-full py-12 sm:py-16 lg:py-20"
      >
        <motion.div
          variants={textVariant(0.1)}
          className="w-full 2xs:w-[90%] xs:w-[80%] md:w-[70%] xl:w-[60%] flex flex-col gap-1.5 xs:gap-2.5 xl:gap-4 justify-center items-center text-center text-text-200 dark:text-text-400"
        >
          <h1 className="text-2xl 2xs:text-3xl xs:text-4xl xl:text-5xl 2xl:text-6xl font-bold ">
            Our Services{" "}
          </h1>
          <p className="text-sm xs:text-base lg:text-lg ">
            Pay all your bills at once with Nattypay without leaving your home
            Whether you need to send money, pay bills, buy airtime, or manage
            your finances and savings, Nattypay is here to simplify your
            financial life.
          </p>
        </motion.div>
        <div className="flex flex-col items-center py-8 sm:py-10">
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-5"
          >
            {ServicesData.map((item, index) => (
              <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                key={index}
                className="flex items-center gap-3 2xs:gap-4 2xl:gap-8 rounded-lg bg-bg-600 dark:bg-bg-1100 px-3 2xs:px-4 lg:px-6 py-5 2xs:py-6 lg:py-8 2xl:py-10"
              >
                <div className="rounded-full flex justify-center items-center p-3 xs:p-3.5 bg-bg-1200 overflow-hidden">
                  <Image
                    alt="icon"
                    src={item.image}
                    className={` ${
                      index === 0
                        ? "w-9 2xs:w-8 sm:w-6 md:w-12"
                        : index === 6
                        ? "w-14 2xs:w-12 xs:w-10 sm:w-8 md:w-14 lg:w-16"
                        : "w-16 2xs:w-14 xs:w-12 sm:w-10 md:w-20 lg:w-24"
                    }`}
                  />
                </div>
                <div className="flex flex-col gap-0.5 xl:gap-1.5 2xl:gap-2.5">
                  <h2 className="text-base 2xs:text-lg 2xl:text-xl text-text-700 dark:text-text-800 font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-text-200 dark:text-text-800 text-xs xs:text-sm 2xl:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Services, "services");
