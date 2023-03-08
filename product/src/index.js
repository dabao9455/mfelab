
import ReactDOM from "react-dom"
import React, { useEffect, useRef } from "react";
import App from "./App";
import store from "../redux/store";
import { Provider } from "react-redux";
import { addItem } from "../redux/cart";
import { createRoot } from "react-dom/client";

export const mount = (el, { onItemDeleted }) => {
  const addHandler = (item) => store.dispatch(addItem(item));
  const component = (
    <Provider store={store}>
      <App onItemDeleted={onItemDeleted} />
    </Provider>
  );

  const root = createRoot(el);
  root.render(component);
  return { addHandler };
};


