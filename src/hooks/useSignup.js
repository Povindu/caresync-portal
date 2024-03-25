import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseUrl = "http://localhost:4000/api";

export const useSignup = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const SignupFunc = async (name, email, pass) => {
    try {
      const configurationObject = {
        method: "post",
        url: `${baseUrl}/portal/auth/signup`,
        data: {
          name: name,
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

  const signup = async (name, email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await SignupFunc(name, email, password);

    if (response) {
      if (!response.status == 200) {
        setIsLoading(false);
        setError(response.error);
      }
      if (response.status == 200) {
        alert("Signup Complete!")
        
        navigate("/login");

        // update loading state
        setIsLoading(false);
      }
    }
  };

  return { signup, isLoading, error };
};
