/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { CablePlan, CableVariationProps } from "@/constants/types";
import { IGetCablePlans, IGetCableVariationsPayload } from "./cable.types";
import {
  cablePaymentRequest,
  getCablePlansRequest,
  getCableVariationsRequest,
  verifyCableNumberRequest,
} from "./cable.apis";

export const useGetCablePlans = (payload: IGetCablePlans) => {
  const { isPending, isError, data } = useQuery({
    queryKey: ["cable-plan", payload],
    queryFn: () => getCablePlansRequest(payload),
    enabled: payload.isEnabled,
  });

  const cablePlans: CablePlan[] = data?.data?.data;

  return { isPending, isError, cablePlans };
};

export const useGetCableVariations = (payload: IGetCableVariationsPayload) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["cable-variation", payload],
    queryFn: () => getCableVariationsRequest(payload),
    enabled: !!payload.billerCode,
  });

  const variations: CableVariationProps[] = data?.data?.data;
  return { isLoading, isError, variations };
};

export const usePayForCable = (
  onError: (error: any) => void,
  onSuccess: (data: any) => void
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cablePaymentRequest,
    onError,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      onSuccess(data);
    },
  });
};

export const useVerifyCableNumber = (
  onError: (error: any) => void,
  onSuccess: (data: any) => void
) => {
  return useMutation({
    mutationFn: verifyCableNumberRequest,
    onError,
    onSuccess: (data) => {
      onSuccess(data);
    },
  });
};
