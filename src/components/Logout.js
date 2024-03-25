import { useLogout } from "../hooks/useLogout";
import * as React from "react";

export default function Logout() {
  const { logout } = useLogout();


  return (
    <>
    <button onClick={logout}>Logout</button></>
  );
}
