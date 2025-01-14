import AccountTypeDescription from "@/components/auth/accountType/AccountTypeDescription";
import AccountTypeSelector from "@/components/auth/accountType/AccountTypeSelector";
import Link from "next/link";
import React from "react";

const AccountTypePage = () => {
  return (
    <div className="relative h-screen lg:h-full lg:min-h-screen overflow-auto w-full flex max-lg:flex-col justify-between items-center max-lg:gap-10 bg-bg-400">
      <AccountTypeDescription />
      <div className="flex items-center justify-center h-full w-full lg:w-[50%] xl:w-[55%] px-4 xs:px-8 md:px-12 xl:px-16 2xl:px-20">
        <p className="max-lg:hidden absolute top-6 xs:top-8 sm:top-8 lg:top-10 right-6 xs:right-8 sm:right-10 lg:right-16 xl:right-20 text-base sm:text-lg text-text-200">
          Already have an account?{" "}
          <Link className="text-primary" href="/login">
            Login
          </Link>
        </p>
        <AccountTypeSelector />
      </div>
    </div>
  );
};

export default AccountTypePage;
