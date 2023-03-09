import React from "react";
import { createComponent } from "product/productIndex";

const { addHandler, Component } = createComponent();

export default () => {
  return (
    <>
      <div>I am a app</div>
      <Component onItemDeleted={console.log} />
      <button onClick={() => addHandler(2)}>Add</button>
    </>
  );
};
