import { IAirtimePayPayload } from "@/api/airtime/airtime.types";
import { IDataPayPayload } from "@/api/data/data.types";
import CustomButton from "@/components/shared/Button";
import React, { useState } from "react";

type StageTwoProps = {
  operatorId?: number;
  phone: string;
  amount: string;
  network: string;
  type?: "airtime" | "data";
  currency: string;
  payFunction: (formdata: IAirtimePayPayload | IDataPayPayload) => void;
  isLoading?: boolean;
  isBeneficiaryChecked?: boolean;
  checkoutMessage?: string;
};

const BillStageTwo: React.FC<StageTwoProps> = ({
  operatorId,
  phone,
  amount,
  network,
  type = "airtime",
  currency,
  payFunction,
  isLoading = false,
  isBeneficiaryChecked = false,
  checkoutMessage = "",
}) => {
  const [walletPin, setWalletPin] = useState("");

  const isValidated = walletPin.length !== 4;

  const getTitleMessage = () => {
    switch (type) {
      case "airtime":
        return "Airtime Topup for";
      case "data":
        return checkoutMessage;
    }
  };

  const getSubTitlteMessage = () => {
    switch (type) {
      case "airtime":
      case "data":
        return `${phone} (${network.toLocaleUpperCase()})`;
    }
  };

  const onConfirm = () => {
    switch (type) {
      case "airtime":
      case "data":
        payFunction({
          phone,
          currency,
          walletPin,
          operatorId: operatorId!,
          amount: Number(amount),
          addBeneficiary: isBeneficiaryChecked,
        });
        break;
    }
  };

  return (
    <div className="w-full dark:text-white dark:text-opacity-60 py-10 flex items-center justify-center">
      <div className="xl:w-[40%]  flex flex-col gap-8 rounded-lg sm:rounded-xl p-8">
        {/* airtime preview section */}
        <div className="flex flex-col gap-1 text-center">
          <p className="text-lg font-medium">{getTitleMessage()}</p>
          <p className="font-bold text-lg">{getSubTitlteMessage()}</p>
          <p className="text-primary text-3xl font-bold ">
            &#8358;{" "}
            {new Intl.NumberFormat("en-NG", {
              maximumFractionDigits: 2,
            }).format(Number(amount))}{" "}
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
            value={walletPin}
            onChange={(e) => setWalletPin(e.target.value)}
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
          disabled={isValidated || isLoading}
          isLoading={isLoading}
          onClick={onConfirm}
          className="w-full border-2  dark:text-black dark:font-bold border-primary text-white text-base 2xs:text-lg max-2xs:px-6 py-3.5"
        >
          Confirm{" "}
        </CustomButton>
      </div>
    </div>
  );
};

export default BillStageTwo;
