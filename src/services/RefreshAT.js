import axios from "axios";
import { baseUrl } from "../constants/constants";

export const refreshAT =  async (role, RT) => {
  const refreshToken = RT;
  console.log(refreshToken, role);
  
  axios
    .post(`${baseUrl}/refreshAT`, {
      refreshToken: refreshToken,
      role: role,

    })
    .then((res) => {
      console.log("res", res);
      return res;
    })
    .catch((error) => {
      console.log("error" ,error);
      return false;
    });
};
