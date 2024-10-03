import React, { useEffect, useState } from "react";

const ApiCall = () => {
  let [data, setData] = useState([]);
  let [mainFetchLoad, setMainFetchLoad] = useState(false);

  let [edit, setEdit] = useState("");

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((data) => data.json())
    //   .then((apiData) => {
    //     console.log(apiData);
    //     setData(apiData);
    //   });
    getData();
  }, []);

  function submitData() {
    // You will do a api put method with chaanged data
    getData();
  }

  async function getData() {
    setMainFetchLoad(true);
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let apiData = await response.json();
      setData(apiData);
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => {
        setMainFetchLoad(false);
      }, 2000);
    }
  }

  function handleEdit(eve) {
    let getEditData = data.filter((itm) => itm.id == eve.target.id);
    setEdit(getEditData[0].name);
  }

  return (
    <>
      {!mainFetchLoad ? (
        <div>
          <input
            type="text"
            value={edit}
            className="border-2"
            onChange={(eve) => setEdit(eve.target.value)}
          />
          <button onClick={submitData}>Save</button>
          {console.log("JSX", data)}
          {data.map((itm) => (
            <div className="flex flex-row m-2 p-2">
              <p className="m-2 p-2">{itm.name}</p>
              <button id={itm.id} onClick={handleEdit} className="m-2 p-2">
                Edit
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default ApiCall;
