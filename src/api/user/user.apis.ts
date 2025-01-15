import { request } from "@/utils/axios-utils";
import { IUpdateUser } from "./user.types";

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
