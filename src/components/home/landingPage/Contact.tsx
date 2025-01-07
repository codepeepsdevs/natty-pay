"use client";
import { SectionWrapper } from "@/utils/hoc";
import { textVariant, zoomIn } from "@/utils/motion";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import images from "../../../../public/images";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import CustomButton from "@/components/shared/Button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25 });

  return (
    <div className="w-full flex justify-center">
      <motion.div
        ref={ref}
        animate={isInView ? "show" : "hidden"}
        initial="hidden"
        className="w-full md:w-[90%] lg:w-[88%] flex flex-col  items-center h-full py-12 sm:py-16 lg:py-20"
      >
        <div className="w-full h-full flex max-lg:flex-col items-center gap-5 2xs:gap-10 lg:gap-20 px-6 xs:px-8 py-6 xs:py-8 sm:py-10 md:rounded-xl bg-bg-600 dark:bg-bg-1300">
          <div className="w-full lg:w-[55%] xl:w-[60%] flex flex-col gap-4">
            {" "}
            <motion.div
              variants={textVariant(0.1)}
              className="w-full xs:w-[90%] md:w-[80%] lg:w-[90%] text-black flex flex-col gap-2.5"
            >
              <h1 className="text-2xl xs:text-3xl  font-semibold">
                We are glad to help you{" "}
              </h1>

              <p className="text-sm xs:text-base ">
                If you have any additional questions or need further assistance,
                please do not hesitate to contact our customer support team. We
                are here to help you have a seamless and satisfying experience
                with Natypay.
              </p>
            </motion.div>
            <div className="flex flex-col gap-2 text-black">
              <div className="flex items-center gap-4">
                <FaPhone />
                <p className="text-sm">+2398134146906</p>
              </div>

              <div className="flex items-center gap-4">
                <MdEmail className="text-xl" />
                <p className="text-sm">nattypay349@gmail.com </p>
              </div>
            </div>
            <motion.div variants={zoomIn(0.2, 0.5)}>
              <CustomButton className="max-lg:hidden max-xs:py-2 border-2 border-primary text-black text-sm px-4">
                Chat Support{" "}
              </CustomButton>
            </motion.div>
          </div>

          <div className="w-full lg:w-[45%] xl:w-[40%] h-full flex justify-end">
            <Image
              alt=""
              src={images.landingPage.contactBg}
              className="w-[100%] rounded-xl"
            />
          </div>

          <motion.div
            className="w-full flex justify-start lg:hidden "
            variants={zoomIn(0.2, 0.5)}
          >
            <CustomButton className="max-xs:py-2 border-2 border-primary text-text-300 text-base">
              Chat Support{" "}
            </CustomButton>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
