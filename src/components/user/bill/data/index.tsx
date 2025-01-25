"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { usePayForData } from "@/api/data/data.queries";
import ErrorToast from "@/components/toast/ErrorToast";
import { useState } from "react";
import DataStageOne from "./StageOne";
import DataStageTwo from "../StageTwo";
import DataStageThree from "../StageThree";

const MobileData = () => {
  const [stage, setStage] = useState<"one" | "two" | "three">("one");
  const [phone, setPhone] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [network, setNetwork] = useState<string>("");
  const [currency, _] = useState<string>("NGN");
  const [operatorId, setOperatorId] = useState<number>();
  const [isBeneficiaryChecked, setIsBeneficiaryChecked] = useState(false);
  const [checkoutMessage, setCheckoutMessage] = useState<string>("");

  /* eslint-enable @typescript-eslint/no-unused-vars */
  const onPayDataSuccess = () => {
    setStage("three");
  };

  const onPayDataError = (error: any) => {
    console.log("errror buying data", error);

    const errorMessage = error?.response?.data?.message;
    const descriptions = Array.isArray(errorMessage)
      ? errorMessage
      : [errorMessage];

    ErrorToast({
      title: "Error during data purchase",
      descriptions,
    });
  };

  const {
    mutate: PayForData,
    isPending: dataPending,
    isError: dataError,
  } = usePayForData(onPayDataError, onPayDataSuccess);

  const dataLoading = dataPending && !dataError;

  return (
    <div className="w-full">
      {stage === "one" && (
        <DataStageOne
          network={network}
          setStage={setStage}
          setPhone={setPhone}
          setAmount={setAmount}
          setNetwork={setNetwork}
          currency={currency}
          setOperatorId={setOperatorId}
          isBeneficiaryChecked={isBeneficiaryChecked}
          setIsBeneficiaryChecked={setIsBeneficiaryChecked}
          setCheckoutMessage={setCheckoutMessage}
        />
      )}
      {stage === "two" && (
        <DataStageTwo
          type="data"
          operatorId={operatorId}
          phone={phone}
          amount={amount}
          network={network}
          currency={currency}
          payFunction={PayForData}
          isLoading={dataLoading}
          isBeneficiaryChecked={isBeneficiaryChecked}
          checkoutMessage={checkoutMessage}
        />
      )}
      {stage === "three" && (
        <DataStageThree
          type="data"
          setStage={setStage}
          phone={phone}
          network={network}
          setNetwork={setNetwork}
          amount={amount}
          checkoutMessage={checkoutMessage}
        />
      )}
    </div>
  );
};

export default MobileData;
