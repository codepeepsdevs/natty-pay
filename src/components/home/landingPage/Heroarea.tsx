"use client";
import { motion, useInView } from "framer-motion";
import { SectionWrapper } from "@/utils/hoc";
import { fadeIn, textVariant, zoomIn } from "@/utils/motion";
import useNavigate from "@/hooks/useNavigate";
import Image from "next/image";
import images from "../../../../public/images";
import CustomButton from "@/components/shared/Button";
import { useRef } from "react";

const Heroarea = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25 });

  return (
    <div className="relative w-full flex justify-center">
      <motion.div
        ref={ref}
        animate={isInView ? "show" : "hidden"}
        initial="hidden"
        className="w-[90%] lg:w-[88%] flex flex-col justify-center h-full py-10"
      >
        <div className="inset-0 mx-auto flex max-lg:flex-col lg:justify-between lg:items-center max-2xs:pt-2.5 max-xs:pt-5 max-lg:pt-10">
          <div className="relative w-full sm:w-[90%] md:w-[80%] lg:w-[60%] flex flex-col gap-6">
            <div
              className="absolute top-40 -inset-60 opacity-60 dark:opacity-40"
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
              className="z-10 full 2xs:w-[95%] text-text-200 dark:text-text-400 flex flex-col gap-2 xs:gap-3"
            >
              <h1 className="text-3xl 2xs:text-4xl xs:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[2.4rem] 2xs:leading-[2.8rem] xs:leading-[3.5rem] xl:leading-[4rem] 2xl:leading-[5rem]">
                We Are Your Trusted Financial Partner{" "}
              </h1>
              <p className="text-base 2xs:text-lg xl:text-xl leading-[1.5rem] xl:leading-[2rem]">
                Experience seamless financial transactions with Nattypay, a
                local and global leading financial service provider, We make the
                best and easiest banking for you{" "}
              </p>
            </motion.div>
            <div className="z-10 flex items-center gap-3 2xs:gap-4">
              <motion.div variants={zoomIn(0.2, 0.5)}>
                <CustomButton
                  onClick={() => {
                    navigate("/login");
                  }}
                  className="max-xs:py-2 px-6 2xs:px-8 xs:px-10 sm:px-12 bg-transparent border-2 border-primary text-primary text-base 2xs:text-lg"
                >
                  Login
                </CustomButton>
              </motion.div>

              <motion.div variants={zoomIn(0.2, 0.5)}>
                <CustomButton className="max-xs:py-2 border-2 border-primary text-text-300 text-base 2xs:text-lg max-2xs:px-6">
                  Create Account
                </CustomButton>
              </motion.div>
            </div>
          </div>
          <div className="relative w-full lg:w-[40%] h-full flex max-lg:justify-center">
            <div
              className="absolute -inset-10 opacity-60"
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
            <div className="relative z-10">
              <motion.div variants={fadeIn("left", "spring", 0.5, 0.75)}>
                <Image
                  alt=""
                  src={images.landingPage.heroImage}
                  className="relative "
                />
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          variants={textVariant(0.1)}
          className="w-full md:w-[95%] lg:w-[90%] 2xl:w-[85%] text-text-200 dark:text-text-400 flex flex-col gap-3"
        >
          <h1 className="text-2xl xs:text-3xl xl:text-4xl 2xl:text-5xl font-bold ">
            Introduction{" "}
          </h1>

          <p className="text-sm xs:text-base lg:text-lg leading-[1.6rem] xs:leading-[1.8rem]">
            As an answer to solve the issue of local and global people in the
            world face getting standard and quality Financial for daily
            well-being, spring forth NATTYPAY DIGITAL GLOBAL SERVICES LTD. Over
            time we&apos;ve been able to solve this great complication in our
            society and put big promising smiles on people&apos;s faces thus
            far. {/* Add margin here for space */}
            <span className="sm:hidden block my-4"></span>
            In an era defined by rapid technological evolution, NATTYPAY DIGITAL
            GLOBAL SERVICES LTD emerges as a key player, shaping the future
            through a commitment to excellence, foresight, and a relentless
            pursuit of groundbreaking advancements. Our journey is rooted in a
            deep understanding of the dynamic needs of the modern consumer, and
            we take pride in crafting solutions that not only meet but exceed
            expectations.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Heroarea, "heroarea");
