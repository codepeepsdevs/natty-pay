"use client";
import { CoreValuesData } from "@/constants";
import SectionWrapper from "@/utils/hoc/SectionWrapper";
import { scaleVariants, staggerContainer, textVariant } from "@/utils/motion";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const CoreValues = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25 });

  return (
    <div className="relative w-full flex justify-center">
      <motion.div
        ref={ref}
        animate={isInView ? "show" : "hidden"}
        initial="hidden"
        className="w-[90%] lg:w-[88%] flex flex-col gap-6 xs:gap-8 pb-8 xs:pb-16"
      >
        <div className="flex flex-col">
          <motion.div
            // variants={textVariant(0.1)}
            className="w-full 2xs:w-[90%] xs:w-[80%] md:w-[70%] xl:w-[50%] flex flex-col gap-1.5 xs:gap-2.5 xl:gap-4 text-text-200 dark:text-text-400"
          >
            <h1 className="text-2xl xs:text-3xl xl:text-4xl 2xl:text-5xl font-bold ">
              Our Core Values{" "}
            </h1>
          </motion.div>
          <div className="flex flex-col items-center py-4 2xs:py-6 md:py-8">
            <motion.div
              variants={staggerContainer(0.1, 0.2)}
              className="grid grid-cols-1 md:grid-cols-2  gap-4 xl:gap-5"
            >
              {CoreValuesData.map((item, index) => (
                <motion.div
                  variants={scaleVariants}
                  whileInView={scaleVariants.whileInView}
                  key={index}
                  className="flex items-center gap-3 2xs:gap-4 2xl:gap-8 rounded-2xl bg-bg-600 dark:bg-bg-1100 px-3 2xs:px-4 lg:px-6 py-5 2xs:py-6 lg:py-8 2xl:py-10"
                >
                  <div className="w-[14%] 2xs:w-[10%] md:w-[14%] lg:w-[10%] xl:w-[8%] rounded-lg flex justify-center items-center p-2 bg-primary overflow-hidden">
                    <Image
                      alt="icon"
                      src={item.image}
                      width={48}
                      height={48}
                      className="w-[24px] h-[24px] object-contain"
                    />
                  </div>
                  <div className="w-[86%] 2xs:w-[90%] md:w-[86%] lg:w-[90%] xl:w-[92%] flex flex-col gap-0.5 xl:gap-1.5 2xl:gap-2.5">
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
        </div>
        <div
          className="absolute inset-60 -left-80 bottom-0 opacity-40"
          style={{
            background: `
                radial-gradient(
                  circle at center,
                  rgba(212, 177, 57, 0.4) 0%,
                  rgba(212, 177, 57, 0.2) 40%,
                  rgba(212, 177, 57, 0.1) 60%,
                  rgba(212, 177, 57, 0) 80%
                )
              `,
            filter: "blur(60px)",
            transform: "scale(1.1)",
          }}
        />
        <motion.div
          variants={textVariant(0.1)}
          className="w-full md:w-[95%] lg:w-[90%] 2xl:w-[85%] text-text-200 dark:text-text-400 flex flex-col gap-3"
        >
          <h1 className="text-2xl xs:text-3xl xl:text-4xl 2xl:text-5xl font-bold ">
            The Story{" "}
          </h1>

          <p className="text-sm xs:text-base lg:text-lg leading-[1.6rem] xs:leading-[1.8rem]">
            At NATTYPAY GLOBAL SOLUTION LIMITED, the Story is passionate and
            determined, driven by the desire to bring high-quality and standard
            financial services to individuals locally and globally. As NGSL
            flourished in Onitsha, its influence expanded beyond. Branches
            sprouted in Asaba, Delta State, and the legacy continued to thrive
            in Onitsha, Anambra State, all of the country and worldwide.
            <br />
            As we continue to expand, we remain unwavering in upholding
            our commitment to high-quality standards, delivering financial
            service that positively impact digital lives and desires in
            individuals on their journey toward
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(CoreValues, "coreValues");
