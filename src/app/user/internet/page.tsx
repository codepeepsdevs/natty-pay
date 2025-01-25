"use client";

import React, { useState } from "react";
import Image from "next/image";
import images from "../../../../public/images";
import classNames from "classnames";
import Internet from "@/components/user/bill/internet";
import { BsPhone } from "react-icons/bs";
import MobileData from "@/components/user/bill/data";

const InternetPage = () => {
  const [tab, setTab] = useState<"mobile" | "internet">("mobile");

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full mt-5 flex items-center gap-4 md:gap-6">
        {/* mobile data tab  */}
        <div
          onClick={() => setTab("mobile")}
          className={classNames({
            "w-fit flex items-center gap-2 py-4 px-6 rounded-[2rem] cursor-pointer":
              true,
            "bg-[#A4A4A4]": tab !== "mobile",
            "bg-primary font-semibold": tab === "mobile",
          })}
        >
          {/* <Image src={images.internet.phoneIcon} alt="phone" /> */}
          <BsPhone className="w-6 h-6" />
          <p>Mobile Data</p>
        </div>

        {/* internet tab  */}
        <div
          onClick={() => setTab("internet")}
          className={classNames({
            "w-fit flex items-center gap-2 py-4 px-6 rounded-[2rem] cursor-pointer":
              true,
            "bg-[#A4A4A4]": tab !== "internet",
            "bg-primary font-semibold": tab === "internet",
          })}
        >
          <Image src={images.internet.internetIcon} alt="internet" />
          <p>Internet</p>
        </div>
      </div>
      {/* <Data /> */}

      {tab === "mobile" ? <MobileData /> : <Internet />}
    </div>
  );
};

export default InternetPage;
