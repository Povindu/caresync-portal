import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { refreshAT } from "./RefreshAT";


const api = axios.create({
  baseURL: "http://localhost:4000/api",
});

const checkATValidity = async (token, user) => {
  const decodedToken = jwtDecode(token);
  console.log(user)
  console.log(decodedToken);
  // await refreshAT(decodedToken.roles, user.refreshToken);
  let currentDate = new Date();
  if (decodedToken.exp * 1000 > currentDate.getTime()) {
    console.log("Valid token");
  } else {
    console.log("Token expired.");
  }
  return true;
};

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.token;
    console.log(user)

    console.log("Intercepted");
    // console.log(token)
    if (token) {
      checkATValidity(token, user).then((res) => {
        config.headers.Authorization = `Bearer ${token}`;
      }).catch((error) => {
        console.log(error);
      });
      
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
