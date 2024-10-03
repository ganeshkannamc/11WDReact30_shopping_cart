import { Outlet, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import { useContext } from "react";

const LoginAuth = ({ role }) => {
  let pushToLogin = useNavigate();
  let { loggedUser, registeredUser } = useContext(DataContext);
  let value = sessionStorage.getItem("loginInfo")

  console.log("******************")
  console.log(value)
  return value == "true" ? <Outlet /> : <h1>Please login...</h1>;
};

export default LoginAuth;
