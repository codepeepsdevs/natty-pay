"use client";
import ErrorToast from "@/components/toast/ErrorToast";
import useNavigate from "@/hooks/useNavigate";
import React, { useState } from "react";

const AccountTypeSelector = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string>("");

  const handleTypeChange = (type: "personal" | "business") => {
    setSelectedType(type);
  };

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <label className="relative flex items-center px-4 2xs:px-5 py-4 2xs:py-5 sm:py-6 bg-bg-600 rounded-lg sm:rounded-xl cursor-pointer hover:opacity-80">
        <input
          type="radio"
          name="accountType"
          value="personal"
          className="hidden"
          checked={selectedType === "personal"}
          onChange={() => {
            handleTypeChange("personal");
            navigate("/signup/personal");
          }}
        />
        <div className="flex-1">
          <h3 className="text-base 2xs:text-lg md:text-xl font-medium text-text-200">
            Personal Account
          </h3>
          <p className="text-text-700 text-xs 2xs:text-sm">for individuals</p>
        </div>
        <div
          className={`w-5 h-5 sm:w-6 sm:h-6 border-2 ${
            selectedType === "personal" ? "border-primary" : "border-border-200"
          } rounded-full flex items-center justify-center`}
        >
          <div
            className={`w-3 h-3 bg-primary rounded-full ${
              selectedType === "personal" ? "block" : "hidden"
            }`}
          />
        </div>
      </label>

      <label className="relative flex items-center px-4 2xs:px-5 py-4 2xs:py-5 sm:py-6 bg-bg-600 rounded-lg sm:rounded-xl cursor-pointer hover:opacity-80">
        <input
          type="radio"
          name="accountType"
          value="business"
          className="hidden"
          checked={selectedType === "business"}
          onChange={() => {
            // handleTypeChange("business");

            ErrorToast({
              title: "Business account not available",
              descriptions: ["Please try again later"],
            });

            // SuccessToast({
            //   title: "Business account selected",
            //   description: "Please try again later",
            // });
          }}
        />
        <div className="flex-1">
          <h3 className="text-base 2xs:text-lg md:text-xl font-medium text-text-200">
            Business Account
          </h3>
          <p className="text-text-700 text-xs 2xs:text-sm">
            for corporate entities
          </p>
        </div>
        <div
          className={`w-5 h-5 sm:w-6 sm:h-6 border-2 ${
            selectedType === "business" ? "border-primary" : "border-border-200"
          } rounded-full flex items-center justify-center`}
        >
          <div
            className={`w-3 h-3 bg-primary rounded-full ${
              selectedType === "business" ? "block" : "hidden"
            }`}
          />
        </div>
      </label>
    </div>
  );
};

export default AccountTypeSelector;
