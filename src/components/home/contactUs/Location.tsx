"use client";
import SectionWrapper from "@/utils/hoc/SectionWrapper";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import images from "../../../../public/images";
import Image from "next/image";
import { useTheme } from "@/store/theme.store";

const Location = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25 });
  const theme = useTheme();

  const bgStyles = {
    backgroundImage: "url('/images/home/landingPage/providersBg.svg')",
    backgroundPosition: "center",
    backgroundColor: theme === "light" ? "#f9f9f9" : "#D9D9D9",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    zIndex: 10,
    height: "100%",
  };

  return (
    <div className="relative w-full min-h-screen flex justify-center">
      <motion.div
        ref={ref}
        animate={isInView ? "show" : "hidden"}
        initial="hidden"
        className="w-[90%] lg:w-[88%] flex flex-col justify-center h-full"
      >
        <div className="w-full h-full grid grid-cols-6 gap-4 xs:gap-6 pt-10 lg:pt-20">
          <div
            style={bgStyles}
            className="col-span-6 lg:col-span-3 rounded-xl flex flex-col justify-center items-center"
          >
            <motion.div
              //   variants={textVariant(0.1)}
              className="z-10 h-full w-[80%] text-text-200 dark:text-black flex flex-col justify-center items-center gap-2 xs:gap-3 text-center max-lg:py-20"
            >
              <h1 className="text-2xl 2xs:text-3xl xs:text-4xl font-bold">
                Office Address
              </h1>
              <p className="text-sm 2xs:text-base leading-[1.3rem] xs:leading-[1.5rem]">
                C3 & C4 Suite second floor Eijson plaza new market road Main
                market Onitsha Anambra state
              </p>
            </motion.div>
          </div>
          <div className="col-span-6 lg:col-span-3 h-[30rem] flex justify-center lg:justify-end">
            <motion.div
              className="w-full"
              //   variants={fadeIn("left", "spring", 0.5, 0.75)}
            >
              <div className="relative aspect-square w-full h-full">
                <Image
                  alt="map"
                  src={theme === "light" ? images.map : images.mapDark}
                  className="object-cover rounded-xl"
                  fill
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Location, "location");
