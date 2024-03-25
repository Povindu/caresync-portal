import { createContext, useReducer, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  
  const [JWTDecode, setJWTDecode] = useState();


  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect( () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      const JWT = jwtDecode(user.token);
      dispatch({ type: "LOGIN", payload: JWT });
    }
  }, []);

  console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
