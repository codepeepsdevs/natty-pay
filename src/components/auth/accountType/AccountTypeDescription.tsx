"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { useRef } from "react";
import images from "../../../../public/images";

const AccountTypeDescription = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25 });
  return (
    <motion.div
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      initial="hidden"
      className="flex py-6 w-full lg:w-[50%] xl:w-[45%] bg-bg-400 max-lg:pb-20 max-lg:pt-44 h-full min-h-screen relative"
    >
      <div className="absolute inset-0 bg-bg-800 opacity-80 z-10"></div>

      <Image
        className="z-0 w-full"
        src={images.auth.accountTypeDescription}
        layout="fill"
        objectFit="cover"
        alt="accountTypeDescription"
      />

      <motion.div
        variants={textVariant(0.1)}
        className="lg:mt-20 z-10 w-[90%] text-black flex flex-col justify-center gap-2 xs:gap-3 px-6 2xs:px-8 sm:px-12"
      >
        <h1 className="text-3xl 2xs:text-4xl xs:text-5xl font-bold">
          Welcome to Nattypay{" "}
        </h1>
        <p className="text-base 2xs:text-lg xl:text-xl leading-[1.5rem] xl:leading-[2rem]">
          Begin your financial journey and perform your daily financial
          transactions with east
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AccountTypeDescription;
