import { Outlet, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import { useContext } from "react";

const LoginAuth = ({ role }) => {
  let pushToLogin = useNavigate();
  let { loggedUser, registeredUser } = useContext(DataContext);

  return loggedUser.status > 0 ? <Outlet /> : <h1>Please login...</h1>;
};

export default LoginAuth;
