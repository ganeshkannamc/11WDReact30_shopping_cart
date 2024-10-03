import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="border-2 p-3 bg-slate-400">
      <NavLink className="m-2 p-2" to="/products">
        Products
      </NavLink>
      <NavLink className="m-2 p-2" to="/users">
        Users
      </NavLink>
      <NavLink className="m-2 p-2" to="/checkout">
        Checkout
      </NavLink>
      <NavLink className="m-2 p-2" to="/apicall">
        API Example
      </NavLink>
    </div>
  );
};

export default Menu;
