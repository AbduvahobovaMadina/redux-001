import { Route, Routes } from "react-router-dom";
import Home from "./router/home/Home";
import Wishlist from "./router/wishlist/Wishlist";
import Cart from "./router/cart/Cart";
import Layout from "./router/layout/Layout";
import Login from "./router/cart/login/Login";
import Auth from "./router/auth/Auth";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Auth />}>
            <Route path="" element={<Home />} />
          </Route>
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
