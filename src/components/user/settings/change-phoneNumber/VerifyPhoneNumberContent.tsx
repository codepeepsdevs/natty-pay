/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CustomButton from "@/components/shared/Button";
import ErrorToast from "@/components/toast/ErrorToast";
import SuccessToast from "@/components/toast/SuccessToast";
import useNavigate from "@/hooks/useNavigate";
import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";

import useAuthEmailStore from "@/store/authEmail.store";
import useTimerStore from "@/store/timer.store";
import { useRouter } from "next/navigation";

import {
  useValidatePhoneNumber,
  useVerifyPhoneNumber,
} from "@/api/user/user.queries";
import useUserStore from "@/store/user.store";
import icons from "../../../../../public/icons";
import SpinnerLoader from "@/components/Loader/SpinnerLoader";

const VerifyPhoneNumberContent = () => {
  const navigate = useNavigate();
  const router = useRouter();
  const { user } = useUserStore();

  const { authPhoneNumber } = useAuthEmailStore();
  const [token, setToken] = useState("");

  const isValid = token.length === 4;

  const onVerificationSuccess = () => {
    SuccessToast({
      title: "Email verified",
      description: "Your email address verification successful",
    });
    navigate("/user/settings", "replace");
    setToken("");
  };

  const onVerificationError = (error: any) => {
    const errorMessage = error.response.data.message;

    const descriptions = Array.isArray(errorMessage)
      ? errorMessage
      : [errorMessage];

    ErrorToast({
      title: "Verification Failed",
      descriptions,
    });
  };

  const {
    mutate: verifyPhoneNumber,
    isPending: verificationPending,
    isError: verificationError,
  } = useVerifyPhoneNumber(onVerificationError, onVerificationSuccess);

  const onResendVerificationCodeSuccess = (data: any) => {
    useTimerStore.getState().setTimer(120);
    SuccessToast({
      title: "Sent Successfully!",
      description: data.data.message,
    });
  };

  const onResendVerificationCodeError = (error: any) => {
    const errorMessage = error.response.data.message;
    const descriptions = Array.isArray(errorMessage)
      ? errorMessage
      : [errorMessage];

    ErrorToast({
      title: "Sending Failed",
      descriptions,
    });
  };

  const {
    mutate: resendVerificationCode,
    isPending: resendVerificationCodePending,
    isError: resendVerificationCodeError,
  } = useValidatePhoneNumber(
    onResendVerificationCodeError,
    onResendVerificationCodeSuccess
  );

  const handleVerify = async () => {
    if (user?.email) {
      verifyPhoneNumber({
        email: user?.email,
        otp: token,
      });
    }
  };

  const handleResendClick = async () => {
    if (resendTimer === 0 && user?.email) {
      resendVerificationCode({
        email: user?.email,
        phoneNumber: authPhoneNumber,
      });
    }
  };

  const timerStore = useTimerStore();
  const resendTimer = timerStore.resendTimer;
  const decrementTimer = timerStore.decrementTimer;
  const expireAt = timerStore.expireAt;

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (resendTimer > 0) {
      interval = setInterval(() => {
        if (decrementTimer) decrementTimer();
      }, 1000);
    } else {
      // When timer reaches 0, clear the interval
      if (interval) clearInterval(interval);
      timerStore.clearTimer(); // Clear state to prevent reset
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [resendTimer, decrementTimer, timerStore]);

  useEffect(() => {
    if (expireAt && Date.now() >= expireAt) {
      timerStore.clearTimer();
    }
  }, [expireAt, timerStore]);

  const formatTimer = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handlePaste: React.ClipboardEventHandler = (event) => {
    const data = event.clipboardData.getData("text").slice(0, 4); // Get first 4 characters
    setToken(data);
  };

  useEffect(() => {
    if (!user?.email) {
      ErrorToast({
        title: "Error",
        descriptions: ["No email found. Please try again."],
      });
      router.back();
    }
  }, [user?.email, router, navigate]);

  const loadingStatus = verificationPending && !verificationError;
  const resendLoadingStatus =
    resendVerificationCodePending && !resendVerificationCodeError;

  return (
    <div className="relative flex justify-center items-center w-full bg-bg-400 dark:bg-black">
      <div className="flex flex-col justify-center items-center w-full gap-8  my-12 sm:my-14 lg:my-16 xl:my-20">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, type: "tween" }}
          className=" z-10 flex flex-col justify-start items-start w-[90%] xs:w-[90%] md:w-[80%] lg:w-[65%]  bg-bg-600 dark:bg-bg-1100 dark:border dark:border-border-600 rounded-2xl px-6 2xs:px-8 sm:px-10 py-8 2xs:py-10 sm:py-12 gap-6 2xs:gap-8 "
        >
          <div className="text-white flex flex-col items-center justify-center w-full text-center gap-2 sm:gap-4">
            <div className="flex justify-center items-center p-3 rounded-full bg-bg-1200">
              <Image
                className="w-8 2xs:w-10 xs:w-12 "
                src={icons.authIcons.emailIcon}
                alt="logo"
                onClick={() => {
                  navigate("/");
                }}
              />{" "}
            </div>
            <div className="w-full 2xs:w-[90%] xs:w-[80%] sm:w-[70%] md:w-[60%] flex flex-col justify-center items-center gap-0.5 sm:gap-2 text-text-700 dark:text-text-900">
              <h2 className="text-xl xs:text-2xl xl:text-3xl font-semibold">
                Verify Your Phone Number{" "}
              </h2>
              <p className="text-xs 2xs:text-sm xs:text-base dark:text-text-400">
                Check your phone number, we just sent a verification code to{" "}
                {authPhoneNumber}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-4">
            <div className="flex items-center justify-center  w-full ">
              <OtpInput
                value={token}
                onChange={(props) => setToken(props)}
                onPaste={handlePaste}
                numInputs={4}
                renderSeparator={<span className="w-2 2xs:w-3 xs:w-4"></span>}
                containerStyle={{}}
                skipDefaultStyles
                inputType="number"
                renderInput={(props) => (
                  <input
                    {...props}
                    className="w-10 h-10 2xs:w-12 2xs:h-12 bg-transparent border-[1.03px] border-border-700  rounded-md text-base 2xs:text-lg text-text-700 dark:text-text-400 text-center font-medium outline-none"
                  />
                )}
              />
            </div>
            <p className=" my-1 sm:my-2.5 text-center w-[90%] xs:w-[80%] text-sm 2xs:text-base text-text-1000  font-medium">
              {resendTimer && resendTimer > 0 ? (
                <>
                  Didn’t get the code?{" "}
                  <span className="text-secondary">Resend</span> in{" "}
                  <span className="text-secondary">
                    {formatTimer(resendTimer)}
                  </span>
                </>
              ) : (
                <div className="flex items-center justify-center ">
                  Didn’t receive any code?
                  <span
                    className="cursor-pointer text-secondary ml-1"
                    onClick={handleResendClick}
                  >
                    {resendLoadingStatus ? (
                      <SpinnerLoader width={20} height={20} color="#D4B139" />
                    ) : (
                      "Resend"
                    )}
                  </span>
                </div>
              )}
            </p>
            <CustomButton
              type="button"
              disabled={loadingStatus || !isValid}
              isLoading={loadingStatus}
              onClick={handleVerify}
              className="w-full 2xs:w-[90%] sm:w-[80%] border-2 border-primary text-black text-base 2xs:text-lg max-2xs:px-6 py-3.5 xs:py-4 mt-2 2xs:mt-4 xs:mt-6 sm:mt-8 mb-2"
            >
              Next{" "}
            </CustomButton>
          </div>
        </motion.div>
      </div>
      <div
        className=" absolute bottom-0 left-0 inset-[40rem] opacity-60"
        style={{
          background: `
                radial-gradient(
                  circle at bottom left,
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
    </div>
  );
};

export default VerifyPhoneNumberContent;
