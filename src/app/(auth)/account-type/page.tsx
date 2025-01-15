import AccountTypeDescription from "@/components/auth/accountType/AccountTypeDescription";
import AccountTypeSelector from "@/components/auth/accountType/AccountTypeSelector";
import Link from "next/link";
import React from "react";

const AccountTypePage = () => {
  return (
    <div className="relative h-full min-h-screen overflow-auto w-full flex max-lg:flex-col lg:justify-between items-center  bg-bg-400 dark:bg-black">
      <AccountTypeDescription />
      <div className="lg:mt-32 flex flex-col gap-6 sm:gap-8 items-center justify-center h-full w-full lg:w-[50%] xl:w-[55%] py-10 2xs:py-12 sm:py-16 px-4 xs:px-8 md:px-12 xl:px-16 2xl:px-20">
        <div className=" text-text-200 dark:text-text-400 flex flex-col self-start justify-start items-start gap-0">
          <h1 className="text-xl xs:text-2xl font-bold">
            Choose Account type{" "}
          </h1>
          <p className="text-base xs:text-lg">
            Are you creating a business or personal account?
          </p>
        </div>
        <AccountTypeSelector />
        <p className="mt-2 xs:mt-4 text-base sm:text-lg text-text-200 dark:text-white ">
          Already have an account?{" "}
          <Link className="text-primary" href="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AccountTypePage;
