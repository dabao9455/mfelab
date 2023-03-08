import React, { useRef } from "react";
import Cart from "./components/Cart";

export default () => {
  const ref = useRef();
  return (
    <>
      <div>I am a app</div>
      <Cart ref={ref} />
      <button onClick={() => console.log(ref.current)}>Add</button>
    </>
  );
};
