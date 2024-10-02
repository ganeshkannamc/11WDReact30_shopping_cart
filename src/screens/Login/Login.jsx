import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let { registeredUser, setLoggedUser } = useContext(DataContext);
  let navigateToScreen = useNavigate();

  let [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
    status: false,
  });

  function manageUserInput(eve) {
    setLoginInfo((preVal) => ({
      ...preVal,
      [eve.target.id]: eve.target.value,
    }));
  }

  function onSubmit() {
    let validate = registeredUser.find(
      (itm) =>
        itm.userName == loginInfo.username && itm.password == loginInfo.password
    );
    if (validate) {
      setLoginInfo((preVal) => ({ ...preVal, status: true }));
      setLoggedUser(loginInfo);
      setLoggedUser((preVal) => ({ ...preVal, status: true }));

      navigateToScreen("/products");
    } else {
      alert("Provide valid username or passowrd");
    }
  }

  return (
    <div>
      <div>
        <input
          type="text"
          id="username"
          onChange={manageUserInput}
          value={loginInfo.username}
          placeholder="Enterr the username"
        />
      </div>
      <div>
        <input
          type="text"
          id="password"
          onChange={manageUserInput}
          value={loginInfo.password}
          placeholder="Enterr the Password"
        />
      </div>
      <div>
        <button onClick={onSubmit}>Login</button>
      </div>
    </div>
  );
};

export default Login;
