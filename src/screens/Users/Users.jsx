import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

const Users = () => {
  let { registeredUser } = useContext(DataContext);
  console.log(registeredUser);
  return (
    <div>
      {registeredUser.length > 0 ? (
        <table className="w-full text-center">
          <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Role</th>
          </tr>
          {registeredUser.map((itm, ind) => (
            <tr key={ind}>
              <td>{itm.fullName}</td>
              <td>{itm.userName}</td>
              <td>{itm.role}</td>
            </tr>
          ))}
        </table>
      ) : (
        <h1>No registered users</h1>
      )}
    </div>
  );
};

export default Users;
