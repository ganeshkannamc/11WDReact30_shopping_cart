import { Outlet } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import { useContext } from "react";

const Auth = ({ role }) => {
  let { loggedUser, registeredUser } = useContext(DataContext);
  console.log("registeredUser", registeredUser);
  console.log("loggedUser", loggedUser);
  let [userRole] = registeredUser.filter(
    (itm) => itm.userName == loggedUser.username
  );
  console.log("userRole", userRole);
  let ifValid = role.includes(userRole?.role);
  console.log(userRole?.role);

  return ifValid ? <Outlet /> : <h1>No authorized</h1>;
};

export default Auth;
