import Register from "./screens/Register/Register";
import Login from "./screens/Login/Login";
import ListProducts from "./screens/ListProducts/ListProducts";
import Users from "./screens/Users/Users";
import CheckOut from "./screens/CheckOut/CheckOut";
import UnmatchedRoutes from "./screens/Error/UnmatchedRoutes";

import CommonLayout from "./screens/Layout/CommonLayout";

import { Routes, Route } from "react-router-dom";
import Auth from "./Auth/Auth";
import LoginAuth from "./Auth/LoginAuth";
import ProductDetails from "./screens/ListProducts/ProductDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<LoginAuth />}>
          <Route element={<CommonLayout />}>
            <Route element={<Auth role={["Admin", "Basic"]} />}>
              <Route path="/products" element={<ListProducts />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/checkout" element={<CheckOut />} />
            </Route>

            <Route element={<Auth role={["Admin"]} />}>
              <Route path="/users" element={<Users />} />
            </Route>
          </Route>

          <Route path="*" element={<UnmatchedRoutes />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
