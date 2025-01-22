"use client";

import Image from "next/image";
import images from "../../../../../public/images";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Switch from "@mui/material/Switch";
import CustomSelect from "@/components/CustomSelect";
import CustomButton from "@/components/shared/Button";

type StageOneProps = {
  stage: "one" | "two" | "three";
  setStage: (stage: "one" | "two" | "three") => void;
  setPhone: (phone: string) => void;
  setAmount: (amount: string) => void;
  setNetwork: (network: string) => void;
};

const schema = yup.object().shape({
  phone: yup
    .string()
    .required("Phone Number is required")
    .min(11, "Phone Number must be at least 11 digits")
    .max(11, "Phone Number must be exactly 11 digits"),

  amount: yup
    .number()
    .required("Amount is required")
    .typeError("Amount is required"),

  networkProvider: yup.string(),
});

type AirtimeFormData = yup.InferType<typeof schema>;

const addBeneficiaryLabel = {
  inputProps: { "aria-label": "Switch demo" },
  sx: {
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: "#D4B139", // Custom active color for the thumb
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#4caf50", // Custom active color for the track
    },
  },
};

const AirtimeStageOne: React.FC<StageOneProps> = ({
  // stage,
  setStage,
  setPhone,
  setAmount,
  setNetwork,
}) => {
  const form = useForm<AirtimeFormData>({
    defaultValues: {
      phone: "",
      networkProvider: "",
      amount: undefined,
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const {
    register,
    handleSubmit,
    formState,
    // reset,
    watch,
    setValue,
    // clearErrors,
  } = form;
  const { errors, isValid } = formState;

  // const watchedAmount = Number(watch("amount"));
  // const watchedNetwork = watch("networkProvider");
  const watchedPhone = watch("phone");

  const [isBeneficiaryChecked, setIsBeneficiaryChecked] = useState(false);

  const onBackPressClick = () => {
    setValue("phone", "");
  };

  const onSubmit = async (data: AirtimeFormData) => {
    Promise.all([
      Promise.resolve(setPhone(data.phone)),
      Promise.resolve(setAmount(String(data.amount))),
      Promise.resolve(setNetwork(data.networkProvider ?? "")),
      Promise.resolve(setStage("two")),
    ]);
  };

  return (
    <div className="w-full py-10 flex items-center justify-center">
      <div className="w-[50%] bg-[#F2F1EE] rounded-lg sm:rounded-xl p-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-6"
        >
          {/* phone number section */}
          <div className="flex flex-col items-end gap-2">
            <div className="flex flex-col justify-center items-center gap-1 w-full text-black dark:text-white">
              <label
                className="w-full text-sm sm:text-base font-medium  text-text-200 dark:text-text-800 mb-1 flex items-start "
                htmlFor={"phone"}
              >
                Phone Number{" "}
              </label>
              <div className="w-full flex gap-2 justify-center items-center bg-bg-2400 dark:bg-bg-2100 border border-border-600 rounded-lg py-4 px-3">
                <input
                  className="w-full bg-transparent p-0 border-none outline-none text-base text-text-200 dark:text-white placeholder:text-text-200 dark:placeholder:text-text-1000 placeholder:text-sm"
                  placeholder="Enter Phone Number"
                  required={true}
                  type="number"
                  {...register("phone")}
                  // onKeyDown={handleNumericKeyDown}
                  // onPaste={handleNumericPaste}
                />

                {watchedPhone && (
                  <Image
                    onClick={onBackPressClick}
                    src={images.airtime.backPress}
                    alt="backPress"
                    className="cursor-pointer"
                  />
                )}
              </div>

              {errors?.phone?.message ? (
                <p className="flex self-start text-red-500 font-semibold mt-0.5 text-sm">
                  {errors?.phone?.message}
                </p>
              ) : null}
            </div>

            {/* Add beneficiary section */}
            <div className="flex items-center gap-6">
              <p>Add as beneficiary</p>
              <Switch
                checked={isBeneficiaryChecked}
                onChange={(e) => setIsBeneficiaryChecked(e.target.checked)}
                {...addBeneficiaryLabel}
              />
            </div>
          </div>

          {/* network provider section */}
          <div className="flex flex-col justify-center items-center gap-1 w-full text-black dark:text-white">
            <label
              className="w-full text-sm sm:text-base font-medium  text-text-200 dark:text-text-800 mb-1 flex items-start "
              htmlFor={"networkProvider"}
            >
              Network Provider{" "}
            </label>

            <CustomSelect
              options={[]}
              value={null}
              onChange={() => {}}
              placeholder="Select Network Provider"
              isSearchable={false}
              className="w-full bg-bg-2400 dark:bg-bg-2100 border outline-none border-border-600 rounded-lg text-base text-text-200 dark:text-white"
              selectClassName="py-4 px-3"
              placeholderClassName="placeholder:text-text-200 dark:placeholder:text-text-1000 placeholder:text-sm"
            />
          </div>

          {/* amount section */}
          <div className="flex flex-col justify-center items-center gap-1 w-full text-black dark:text-white">
            <label
              className="w-full text-sm sm:text-base font-medium  text-text-200 dark:text-text-800 mb-1 flex items-start "
              htmlFor={"amount"}
            >
              Amount{" "}
            </label>

            <div className="w-full flex gap-2 justify-center items-center bg-bg-2400 dark:bg-bg-2100 border border-border-600 rounded-lg py-4 px-3">
              <input
                className="w-full bg-transparent p-0 border-none outline-none text-base text-text-200 dark:text-white placeholder:text-[#797B86] dark:placeholder:text-text-1000 placeholder:text-sm"
                placeholder="&#8358;5,000"
                required={true}
                type="number"
                {...register("amount")}
                // onKeyDown={handleNumericKeyDown}
                // onPaste={handleNumericPaste}
              />
            </div>
          </div>

          <CustomButton
            type="submit"
            disabled={!isValid}
            className="w-full border-2 border-primary text-white text-base 2xs:text-lg max-2xs:px-6 py-3.5"
          >
            Next{" "}
          </CustomButton>
        </form>
      </div>
    </div>
  );
};

export default AirtimeStageOne;
