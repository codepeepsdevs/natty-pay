/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMutation, useQuery } from "@tanstack/react-query";
import {
  dataPaymentRequest,
  dataPlanNetworkRequest,
  dataPlanRequest,
  dataVariationRequest,
} from "./data.apis";
import { IDataPlan, IDataVariationPayload } from "./data.types";

const validatePhone = (phone: string, currency: string) => {
  if (phone.length === 11 && currency === "NGN") {
    return true;
  }
  return false;
};

export const useGetDataPlan = (payload: IDataPlan) => {
  return useQuery({
    queryKey: ["data-plan", payload.phone],
    queryFn: () => dataPlanRequest(payload),
    enabled: validatePhone(payload.phone, payload.currency),
  });
};

export const useGetDataVariation = (payload: IDataVariationPayload) => {
  return useQuery({
    queryKey: ["data-variation", payload.operatorId],
    queryFn: () => dataVariationRequest(payload),
    enabled: !!payload.operatorId,
  });
};

export const usePayForData = (
  onError: (error: any) => void,
  onSuccess: (data: any) => void
) => {
  return useMutation({
    mutationFn: dataPaymentRequest,
    onError,
    onSuccess,
  });
};

export const useGetDataPlanByNetwork = (network: string) => {
  return useQuery({
    queryKey: ["data-plan-by-network", network],
    queryFn: () => dataPlanNetworkRequest(network),
    enabled: !!network,
  });
};
