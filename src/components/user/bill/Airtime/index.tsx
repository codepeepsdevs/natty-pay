"use client";

import { useState } from "react";
import AirtimeStageOne from "./StageOne";
import AirtimeStageTwo from "../StageTwo";
import AirtimeStageThree from "../StageThree";

const Airtime = () => {
  const [stage, setStage] = useState<"one" | "two" | "three">("one");
  const [phone, setPhone] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [network, setNetwork] = useState<string>("");

  return (
    <div className="w-full h-screen flex flex-col bg-bg-600 dark:bg-bg-1100 px-4 xs:px-6 py-4 xs:py-6 2xl:py-8 rounded-lg sm:rounded-xl">
      <div></div>
      {stage === "one" && (
        <AirtimeStageOne
          stage={stage}
          setStage={setStage}
          setPhone={setPhone}
          setAmount={setAmount}
          setNetwork={setNetwork}
        />
      )}
      {stage === "two" && (
        <AirtimeStageTwo
          phone={phone}
          amount={amount}
          network={network}
          setStage={setStage}
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
