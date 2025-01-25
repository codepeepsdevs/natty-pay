import { request } from "@/utils/axios-utils";
import {
  IAirtimePayPayload,
  IAirtimePlan,
  IAirtimeVariation,
} from "./airtime.types";

export const airtimePlanRequest = async (formdata: IAirtimePlan) => {
  return request({
    url: `/bill/airtime/get-plan?phone=${formdata.phone}&currency=${formdata.currency}`,
    method: "get",
  });
};

export const airtimeVariationRequest = async (formdata: IAirtimeVariation) => {
  return request({
    url: `/bill/airtime/get-variation?operatorId=${formdata.operatorId}`,
    method: "get",
  });
};

export const airtimePaymentRequest = async (formdata: IAirtimePayPayload) => {
  return request({
    url: `/bill/airtime/pay`,
    method: "post",
    data: formdata,
  });
};

export const airtimeNetworkProviderRequest = async () => {
  return request({
    url: `/bill/airtime/network-providers`,
    method: "get",
  });
};
