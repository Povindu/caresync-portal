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
  // const { dispatch } = useAuthContext();

  const signup = async (name, email, password) => {
    setIsLoading(true);
    setError(null);

    axios
      .post(`${baseUrl}/portal/auth/signup`, {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        if (res) {
          if (!res.status == 200) {
            setIsLoading(false);
            setError(res.error);
          }
          if (res.status == 200) {
            alert("Admin Account Creation Complete!");

            navigate("/");

            // update loading state
            setIsLoading(false);
          }
        }
        return res;
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.response.data.error);
        console.log(error.response.data.error);
        return error.response.data.error;
      });
  };

  return { signup, isLoading, error };
};
