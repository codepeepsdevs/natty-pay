"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";
import AirtimeStageOne from "./StageOne";
import AirtimeStageTwo from "../StageTwo";
import AirtimeStageThree from "../StageThree";
import { usePayForAirtime } from "@/api/airtime/airtime.queries";
import ErrorToast from "@/components/toast/ErrorToast";

const Airtime = () => {
  const [stage, setStage] = useState<"one" | "two" | "three">("one");
  const [phone, setPhone] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [network, setNetwork] = useState<string>("");
  const [currency, _] = useState<string>("NGN");
  const [operatorId, setOperatorId] = useState<number | undefined>();
  const [isBeneficiaryChecked, setIsBeneficiaryChecked] = useState(false);

  /* eslint-enable @typescript-eslint/no-unused-vars */
  const onPayAirtimeSuccess = () => {
    setStage("three");
  };

  const onPayAirtimeError = (error: any) => {
    const errorMessage = error?.response?.data?.message;
    const descriptions = Array.isArray(errorMessage)
      ? errorMessage
      : [errorMessage];

    ErrorToast({
      title: "Error during airtime purchase",
      descriptions,
    });
  };

  const {
    mutate: PayForAirtime,
    isPending: airtimePending,
    isError: airtimeError,
  } = usePayForAirtime(onPayAirtimeError, onPayAirtimeSuccess);

  const airtimeLoading = airtimePending && !airtimeError;

  return (
    <div className="w-full flex flex-col bg-bg-600 dark:bg-bg-1100 px-4 xs:px-6 py-4 xs:py-6 2xl:py-8 rounded-lg sm:rounded-xl">
      <div></div>
      {stage === "one" && (
        <AirtimeStageOne
          stage={stage}
          network={network}
          setStage={setStage}
          setPhone={setPhone}
          setAmount={setAmount}
          setNetwork={setNetwork}
          currency={currency}
          setOperatorId={setOperatorId}
          isBeneficiaryChecked={isBeneficiaryChecked}
          setIsBeneficiaryChecked={setIsBeneficiaryChecked}
        />
      )}
      {stage === "two" && (
        <AirtimeStageTwo
          operatorId={operatorId}
          phone={phone}
          amount={amount}
          network={network}
          currency={currency}
          payFunction={PayForAirtime}
          isLoading={airtimeLoading}
          isBeneficiaryChecked={isBeneficiaryChecked}
        />
      )}
      {stage === "three" && (
        <AirtimeStageThree
          setStage={setStage}
          phone={phone}
          network={network}
          amount={amount}
        />
      )}
    </div>
  );
};

export default Airtime;
