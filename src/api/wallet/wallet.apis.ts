import { request } from "@/utils/axios-utils";
import {
  IInitiateBvnVerification,
  IValidateBvnVerification,
} from "./wallet.types";

export const initiateBvnVerificationRequest = async (
  formdata: IInitiateBvnVerification
) => {
  return request({
    url: "/wallet/initiate-bvn-verification",
    method: "post",
    data: formdata,
  });
};

export const validateBvnVerificationRequest = async (
  formdata: IValidateBvnVerification
) => {
  return request({
    url: "/wallet/validate-bvn-verification",
    method: "post",
    data: formdata,
  });
};
