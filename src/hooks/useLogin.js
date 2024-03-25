import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

const baseUrl = "http://localhost:4000/api";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const LoginFunc = async (email, pass) => {
    try {
      const configurationObject = {
        method: "post",
        url: `${baseUrl}/portal/auth/signin`,
        data: {
          email: email,
          password: pass,
        },
      };
      console.log(configurationObject.url);
      const res = await axios(configurationObject);
      return res;
    } catch (error) {
      setIsLoading(false);
      console.log("error " + error);
    }
  };

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    console.log(email, password);
    const response = await LoginFunc(email, password);
    console.log(response);

    if (response) {
      console.log(response);
      if (!response.status == 200) {
        setIsLoading(false);
        setError(response.error);
        console.log(error);
      }
      if (response.status == 200) {
        // save the user to local storage
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log(JSON.parse(localStorage.getItem("user")));

        // update the auth context
        dispatch({ type: "LOGIN", payload: response });

        // update loading state
        setIsLoading(false);
      }
    }
  };

  return { login, isLoading, error };
};
