import { request } from "@/utils/axios-utils";
import { ICreatePin, IUpdateUser } from "./user.types";

export const getUser = () => {
  return request({ url: `/user/me` });
};

export const updateUserRequest = async (formdata: IUpdateUser) => {
  return request({
    url: "/user",
    method: "put",
    data: formdata,
  });
};

export const createPinRequest = async (formdata: ICreatePin) => {
  return request({
    url: "/user/set-wallet-pin",
    method: "post",
    data: formdata,
  });
};
