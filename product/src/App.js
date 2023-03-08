import React from "react"
import Cart from "./components/Cart"
const App = ({onItemDeleted}) => {
  return <Cart onItemDeleted={onItemDeleted}/>;
};

export default App;
