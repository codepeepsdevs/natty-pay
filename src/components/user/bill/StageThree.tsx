import React from "react";
import successSvg from "../../../../public/images/user/successSvg.svg";
import CustomButton from "@/components/shared/Button";
import Image from "next/image";

type StageThreeProps = {
  setStage: (stage: "one" | "two" | "three") => void;
  phone: string;
  network: string;
  amount: string;
  type?: "airtime" | "data";
};

const BillStageThree: React.FC<StageThreeProps> = ({
  setStage,
  phone,
  network,
  amount,
  type = "airtime",
}) => {
  const getPurchaseMessage = () => {
    switch (type) {
      case "airtime":
        return "Airtime Purchase";
      case "data":
        return "Data Purchase";
      default:
        return "Purchase";
    }
  };

  const getSubText = () => {
    switch (type) {
      case "airtime":
        return `You just purchase ${network.toLocaleUpperCase()} Airtime for ${phone}`;
      case "data":
        return `You just purchase ${amount}GB of data for ${phone}`;
    }
  };

  return (
    <div className="w-full py-10 flex items-center justify-center">
      <div className="w-[40%] flex flex-col items-center gap-8 rounded-lg sm:rounded-xl p-8">
        <div className="text-center flex flex-col items-center">
          <Image src={successSvg} alt="success" />

          <p className="mt-1 text-xl font-semibold text-green-600">
            {getPurchaseMessage()}
          </p>
          <p className="text-xl text-green-600 font-semibold">Successful!</p>
        </div>

        <div className="flex flex-col text-center">
          <p>
            You just purchase &#8358;{" "}
            {new Intl.NumberFormat("en-NG", {
              maximumFractionDigits: 2,
            }).format(Number(amount))}
          </p>
          <p>{getSubText()}</p>
        </div>

        {/* button section */}
        <CustomButton
          type="button"
          onClick={() => setStage("one")}
          className="w-full border-2 border-primary text-white text-base 2xs:text-lg max-2xs:px-6 py-3.5"
        >
          Done{" "}
        </CustomButton>
      </div>
    </div>
  );
};

export default BillStageThree;
