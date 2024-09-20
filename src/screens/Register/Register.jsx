import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { DataContext } from "../../context/DataProvider";

const Register = () => {
  // let [fullName, setFullName] = useState("");
  // let [userName, setUserName] = useState("");
  // let [password, setPassword] = useState("");

  let { registeredUser, setRegisteredUser } = useContext(DataContext);

  let navigateToScreen = useNavigate();

  let [regsiterInfo, setRegsiterInfo] = useState({
    fullName: "",
    userName: "",
    password: "",
    role: "",
  });

  function handleChange(eve) {
    setRegsiterInfo((preVal) => ({
      ...preVal,
      [eve.target.id]: eve.target.value,
    }));

    // if (eve.target.id == "fullName") {
    //   setRegsiterInfo((preVal) => ({ ...preVal, fullName: eve.target.value }));
    // }
    // if (eve.target.id == "userName") {
    //   setRegsiterInfo((preVal) => ({ ...preVal, userName: eve.target.value }));
    // }
    // if (eve.target.id == "password") {
    //   setRegsiterInfo((preVal) => ({ ...preVal, password: eve.target.value }));
    // }
    // if (eve.target.id == "fullName") {
    //   setFullName(eve.target.value);
    // }
    // if (eve.target.id == "userName") {
    //   setUserName(eve.target.value);
    // }
    // if (eve.target.id == "password") {
    //   setPassword(eve.target.value);
    // }
  }

  async function handleSubmit() {
    console.log(regsiterInfo);

    let checkDup = registeredUser.find(
      (itm) => itm.userName == regsiterInfo.userName
    );
    if (checkDup) {
      alert("Already registered");
      navigateToScreen("/login");
    }
    if (!checkDup) {
      setRegisteredUser((preVal) => [...preVal, regsiterInfo]);
      navigateToScreen("/login");
    }
    setRegsiterInfo({
      fullName: "",
      userName: "",
      password: "",
      role: "Basic",
    });
    // navigateToScreen("/login");
    // console.log(fullName);
    // console.log(userName);
    // console.log(password);
    // API - POST -> I can send to sever.
    // let response = await fetch("api", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     fullName: fullName,
    //     userName: userName,
    //     password: password,
    //   }),
    //   Authorization: "",
    // });
    // let data = await response.json();
    // data -> Hold the data sent by server
  }

  return (
    <div className="grid grid-cols-12 m-10 p-5 gap-5 border border-blue-900">
      <div className="full-name col-span-8 col-start-2 border border-blue-500">
        <input
          type="text"
          id="fullName"
          required
          onChange={handleChange}
          value={regsiterInfo.fullName}
          placeholder="Enter your name"
        />
      </div>
      <div className="user-name col-span-8 col-start-2 border border-blue-500">
        <input
          type="text"
          id="userName"
          required
          onChange={handleChange}
          value={regsiterInfo.userName}
          placeholder="Enter user name"
        />
      </div>
      <div className="password col-span-8 col-start-2 border border-blue-500">
        <input
          type="text"
          id="password"
          required
          onChange={handleChange}
          value={regsiterInfo.password}
          placeholder="Enter your password"
        />
      </div>

      <div className="password col-span-8 col-start-2 border border-blue-500">
        <select onChange={handleChange} id="role" value={regsiterInfo.role}>
          <option>Basic</option>
          <option>Admin</option>
        </select>
      </div>

      <div className="register-action-btn col-span-8 col-start-2">
        <button
          onClick={handleSubmit}
          className="m-2 p-2 border border-yellow rounded-2xl bg-slate-400"
        >
          Register
        </button>
        <button className="m-2 p-2 border border-yellow rounded-2xl bg-slate-400">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Register;
