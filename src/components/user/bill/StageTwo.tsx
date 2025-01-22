import CustomButton from "@/components/shared/Button";
import React, { useState } from "react";

type StageTwoProps = {
  phone: string;
  amount: string;
  network: string;
  setStage: (stage: "one" | "two" | "three") => void;
  type?: "airtime" | "data";
};

const BillStageTwo: React.FC<StageTwoProps> = ({
  phone,
  amount,
  network,
  setStage,
  type = "airtime",
}) => {
  const [pin, setPin] = useState("");

  const isValidated = pin.length !== 4;

  const getTitleMessage = () => {
    switch (type) {
      case "airtime":
        return "Airtime Topup for";
      case "data":
        return "Data Purchase for";
    }
  };

  const getSubTitlteMessage = () => {
    switch (type) {
      case "airtime":
        return `${phone} ${network.toLocaleUpperCase()}`;
      case "data":
        return `Data Purchase for ${phone}`;
    }
  };

  return (
    <div className="w-full py-10 flex items-center justify-center">
      <div className="w-[40%]  flex flex-col gap-8 rounded-lg sm:rounded-xl p-8">
        {/* airtime preview section */}
        <div className="flex flex-col gap-1 text-center">
          <p className="text-lg font-medium">{getTitleMessage()}</p>
          <p className="font-bold text-lg">{getSubTitlteMessage()}</p>
          <p className="text-primary text-3xl font-bold ">
            &#8358;{" "}
            {new Intl.NumberFormat("en-NG", {
              maximumFractionDigits: 2,
            }).format(Number(amount))}
          </p>
        </div>

        {/* wallet pin section */}

        <div className="w-full my-10 flex flex-col gap-2 justify-center">
          <label className="text-base mb-1 flex items-start ">
            Enter transaction PIN
          </label>

          <input
            className="w-full border rounded-lg border-[#46484F] bg-[#07070708] py-4 px-3  outline-none text-base text-text-200 dark:text-white placeholder:text-text-700 dark:placeholder:text-text-1000 placeholder:text-sm [&::-webkit-calendar-picker-indicator]:dark:invert"
            required={true}
            maxLength={4}
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            type="password"
            placeholder="Enter your 4 digit PIN"
            onInput={(e) => {
              const input = e.target as HTMLInputElement;
              input.value = input.value.replace(/\D/g, ""); // Remove non-digit characters
            }}
          />

          <p className="text-base flex items-start">
            Transaction PIN secured by NattyPay
          </p>
        </div>

        {/* button section */}
        <CustomButton
          type="submit"
          disabled={isValidated}
          onClick={() => setStage("three")}
          className="w-full border-2 border-primary text-white text-base 2xs:text-lg max-2xs:px-6 py-3.5"
        >
          Confirm{" "}
        </CustomButton>
      </div>
    </div>
  );
};

export default BillStageTwo;
