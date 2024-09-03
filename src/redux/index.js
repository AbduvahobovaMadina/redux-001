import { combineReducers, legacy_createStore } from "redux";
import counter from "./counter";
import token from "./token";

import cart from "./cart";
import wishlist from "./wishlist";

const reducers = combineReducers({
  counter,
  wishlist,
  cart,
  token,
});
export const store = legacy_createStore(reducers);
