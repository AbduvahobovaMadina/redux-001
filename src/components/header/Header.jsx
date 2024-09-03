import React, { memo } from "react";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

import { PiShoppingCartLight } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto  py-5">
      <nav className="flex items-center justify-between gap-5 md:gap-5 lg:gap-20">
        <div className="flex open__menu items-center gap-8">
          <NavLink to="/wishlist">
            <div className="flex gap-1 items-center">
              <CiHeart />
              <p className="hover:text-gray-400 ">Wishlist</p>
            </div>
          </NavLink>
          <NavLink to="/cart">
            <div className="flex gap-1  items-center">
              <PiShoppingCartLight />
              <p  className="hover:text-gray-400 ">Cart</p>
            </div>
          </NavLink>
          <NavLink to={"/login"}>
            <div className="flex gap-1 items-center">
              <VscAccount />
              <p  className="hover:text-gray-400 ">Account</p>
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default memo(Header);
