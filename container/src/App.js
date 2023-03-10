import React from "react";
import { createComponent } from "product/productIndex";
const { addHandler, Component } = createComponent();

export default () => {
  return (
    <>
      <div>Micro-Frontend Demo</div>
      <Component onItemDeleted={console.log} />
      <button onClick={() => addHandler(0)}>Add</button>
    </>
  );
};
