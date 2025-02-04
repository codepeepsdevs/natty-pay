/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  IGetElectricityPlans,
  IGetElectricityVariationsPayload,
} from "./electricity.types";
import {
  electricityPaymentRequest,
  getElectricityPlansRequest,
  getElectricityVariationsRequest,
  verifyElectricityNumberRequest,
} from "./electricity.apis";
import { ElectricityVariationProps } from "@/constants/types";
import { ElectricityPlan } from "@/constants/types";

export const useGetElectricityPlans = (payload: IGetElectricityPlans) => {
  const { isPending, isError, data } = useQuery({
    queryKey: ["electricity-plan", payload],
    queryFn: () => getElectricityPlansRequest(payload),
    enabled: payload.isEnabled,
  });

  const electricityPlans: ElectricityPlan[] = data?.data?.data;

  return { isPending, isError, electricityPlans };
};

export const useGetElectricityVariations = (
  payload: IGetElectricityVariationsPayload
) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["electricity-variation", payload],
    queryFn: () => getElectricityVariationsRequest(payload),
    enabled: !!payload.billerCode,
  });

  const variations: ElectricityVariationProps[] = data?.data?.data;
  return { isLoading, isError, variations };
};

export const usePayForElectricity = (
  onError: (error: any) => void,
  onSuccess: (data: any) => void
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: electricityPaymentRequest,
    onError,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["get-beneficiaries"] });
      queryClient.invalidateQueries({ queryKey: ["user"] });
      onSuccess(data);
    },
  });
};

export const useVerifyElectricityNumber = (
  onError: (error: any) => void,
  onSuccess: (data: any) => void
) => {
  return useMutation({
    mutationFn: verifyElectricityNumberRequest,
    onError,
    onSuccess: (data) => {
      onSuccess(data);
    },
  });
};
