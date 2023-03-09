
import React from "react";
import App from "./App";
import Cart from "./components/Cart";
import store from "../redux/store";
import { Provider } from "react-redux";
import { addItem } from "../redux/cart";

export const createComponent = () => {
  const addHandler = (item) => store.dispatch(addItem(item));
  const Component = (props) => (
    <Provider store={store}>
      <Cart {...props} />
    </Provider>
  );

  return { addHandler, Component };
};



