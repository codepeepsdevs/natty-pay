"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Image from "next/image";
import images from "../../../../../public/images";
import Switch from "@mui/material/Switch";
import {
  addBeneficiaryLabel,
  dataPlanNetwork,
  NetworkProvider,
} from "../bill.data";
import CustomSelect from "@/components/CustomSelect";
import { Option } from "../type";
import { StaticImageData } from "next/image";
import classNames from "classnames";
import {
  useGetDataPlan,
  useGetDataPlanByNetwork,
  useGetDataVariation,
} from "@/api/data/data.queries";
import { useTheme } from "@/store/theme.store";

type DataPlan = {
  planName: string;
  operatorId: number;
};

type DataStageOneProps = {
  network: string;
  currency: string;
  setStage: (stage: "one" | "two" | "three") => void;
  setPhone?: (phone: string) => void;
  setAmount: (amount: string) => void;
  setNetwork?: (network: string) => void;
  setOperatorId: (operatorId: number | undefined) => void;
  isBeneficiaryChecked?: boolean;
  setIsBeneficiaryChecked?: (isBeneficiaryChecked: boolean) => void;
  setCheckoutMessage: (checkoutMessage: string) => void;
};

type DataOption = {
  value: string;
  label: string;
  logo?: StaticImageData;
  network?: string;
};

const DataStageOne: React.FC<DataStageOneProps> = ({
  network,
  currency,
  setStage,
  setPhone = () => {},
  setAmount,
  setNetwork = () => {},
  setOperatorId,
  isBeneficiaryChecked = false,
  setIsBeneficiaryChecked = () => {},
  setCheckoutMessage = () => {},
}) => {
  const theme = useTheme();
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
  });

  type AirtimeFormData = yup.InferType<typeof schema>;

  const form = useForm<AirtimeFormData>({
    defaultValues: {
      phone: "",
      amount: undefined,
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const {
    register,
    // handleSubmit,
    formState,
    // reset,
    watch,
    setValue,
    // clearErrors,
  } = form;
  const { errors } = formState;

  const watchedPhone = watch("phone");

  const [selectedProvider, setSelectedProvider] = useState<DataOption | null>(
    null
  );

  const [selectedDataPlan, setSelectedDataPlan] = useState<DataPlan>();

  const [dataPlans, setDataPlans] = useState<DataPlan[]>([]);
  const [variationPlans, setVariationPlans] = useState<
    Record<string, string>[]
  >([]);

  const { data: dataPlan, isPending: isDataPlanLoading } = useGetDataPlan({
    phone: watchedPhone,
    currency,
  });

  const { data: dataPlanByNetwork } = useGetDataPlanByNetwork(
    network?.toLocaleUpperCase()
  );

  const { data: dataPlanVariations, isError: dataVariationError } =
    useGetDataVariation({
      operatorId: selectedDataPlan?.operatorId,
    });

  // useEffect(() => {
  //   if (!errors.phone && selectedProvider) {
  //     setNetwork(selectedProvider?.value!);
  //   }
  // }, [selectedProvider]);

  useEffect(() => {
    if (dataPlanVariations && !dataVariationError) {
      setVariationPlans(
        dataPlanVariations?.data?.data?.fixedAmountsDescriptions
      );
    }
  }, [dataPlanVariations, dataVariationError]);

  useEffect(() => {
    const handleDataPlanSetUp = (network: string, plans: any[]) => {
      setNetwork(network.toLocaleUpperCase());

      // get the data provider to get the correct name and logo
      const provider = dataPlanNetwork.find(
        (item) => item.network === network.toLocaleLowerCase()
      );

      // select the first data plan
      setSelectedProvider({
        value: plans[0]?.operatorId,
        label: provider?.name ?? "",
        logo: provider?.logo,
        network: provider?.network,
      });

      // set the selected plans
      const dataPlans = plans?.map(
        (plan: { planName: string; operatorId: number }) => ({
          planName: plan?.planName,
          operatorId: plan?.operatorId,
        })
      );

      setDataPlans(dataPlans);
    };

    // set data plans when the user pass the correct phone
    const planData = dataPlan?.data?.data;
    if (planData && !dataPlanByNetwork) {
      const { plan, network } = planData;
      handleDataPlanSetUp(network, plan);
    } else {
      setSelectedProvider(null);
      setDataPlans([]);
    }

    // set the dataPlans when the user change the network
    if (dataPlanByNetwork) {
      const dataPlan = dataPlanByNetwork?.data?.data;
      handleDataPlanSetUp(network, dataPlan);
    }
  }, [dataPlan?.data?.data, dataPlanByNetwork, setNetwork, network]);

  useEffect(() => {
    if (dataPlans && dataPlans?.length > 0) {
      setSelectedDataPlan(dataPlans[0]);
    }
  }, [dataPlans]);

  const onBackPressClick = () => {
    setValue("phone", "");
  };

  return (
    <div className="w-full flex flex-col bg-bg-600 dark:bg-bg-1100 px-4 xs:px-6 py-4 xs:py-6 2xl:py-8 rounded-lg sm:rounded-xl">
      <div className="w-full mt-10 md:mt-20 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row items-center w-full md:w-[70%] gap-4">
            {/* phone number section */}
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

            {/* network provider section */}
            <div className="flex flex-col justify-center items-center gap-1 w-full text-black dark:text-white">
              <label
                className="w-full text-sm sm:text-base font-medium  text-text-200 dark:text-text-800 mb-1 flex items-start "
                htmlFor={"networkProvider"}
              >
                Network Provider{" "}
              </label>
              <CustomSelect
                options={dataPlanNetwork?.map((item) => ({
                  value: item.network,
                  label: item.name,
                  logo: NetworkProvider.find(
                    (provider) =>
                      provider.name === item.network.toLocaleUpperCase()
                  )?.logo,
                }))}
                value={selectedProvider}
                onChange={(option: Option) => {
                  setSelectedProvider({
                    value: option.value,
                    label: option.label,
                    logo: option.logo,
                  });
                  setNetwork(option.value);
                }}
                disabled={
                  isDataPlanLoading && !errors.phone && watchedPhone != ""
                }
                loading={
                  isDataPlanLoading && !errors.phone && watchedPhone != ""
                }
                placeholder="Select Network Provider"
                isSearchable={false}
                className="w-full bg-bg-2400 dark:bg-bg-2100 border outline-none border-border-600 rounded-lg text-base text-text-200 dark:text-white"
                selectClassName={classNames({
                  "px-3": true,
                  "py-4": !selectedProvider,
                })}
                placeholderClassName="text-text-200 dark:text-text-1000 text-sm"
              />
            </div>
          </div>

          {/* Add beneficiary section */}
          <div className="flex items-center gap-2 sm:gap-6">
            <p className="text-sm md:text-base dark:text-white dark:text-opacity-70">
              Add as beneficiary
            </p>
            <Switch
              checked={isBeneficiaryChecked}
              onChange={(e) => setIsBeneficiaryChecked(e.target.checked)}
              {...addBeneficiaryLabel(theme === "dark")}
            />
          </div>

          {/* data plans */}

          {dataPlans && dataPlans?.length > 0 ? (
            <div className="flex flex-col gap-2 mt-4 dark:text-white dark:text-opacity-70">
              {/* header */}
              <h2 className="text-lg font-normal">Data Plans</h2>

              {/* tabs section */}
              <div className="flex items-center gap-6 overflow-x-auto">
                {dataPlans.map((plan) => (
                  <div
                    onClick={() => {
                      if (selectedDataPlan?.operatorId !== plan.operatorId) {
                        setSelectedDataPlan(plan);
                      }
                    }}
                    key={plan.operatorId}
                    className={classNames({
                      "text-sm cursor-pointer": true,
                      "text-[#797B86] font-normal":
                        selectedDataPlan?.operatorId !== plan.operatorId,
                      "text-primary pb-2 border-b-2 border-primary font-bold":
                        selectedDataPlan?.operatorId === plan.operatorId,
                    })}
                  >
                    {plan.planName}
                  </div>
                ))}
              </div>

              {/* variation data plans */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                {Object.entries(variationPlans).map(
                  ([amount, description], index: number) => {
                    return (
                      <div
                        onClick={() => {
                          setAmount(amount);
                          setOperatorId(
                            selectedDataPlan?.operatorId ?? undefined
                          );
                          setCheckoutMessage(String(description));
                          setPhone(watchedPhone);
                          setStage("two");
                        }}
                        key={index}
                        className="flex flex-col items-center justify-center gap-2 p-4 text-center border border-black cursor-pointer hover:bg-primary hover:text-white hover:border-none rounded"
                      >
                        <p>{String(description)}</p>
                        <p className="font-semibold">
                          &#8358;{" "}
                          {new Intl.NumberFormat("en-NG", {
                            maximumFractionDigits: 2,
                          }).format(Number(amount))}{" "}
                        </p>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DataStageOne;
