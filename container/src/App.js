import React, { useEffect, useRef } from "react";
import { mount } from "product/productIndex";

export default () => {
  const ref = useRef();
  const eventRef = useRef();
  useEffect(() => {
    const { addHandler } = mount(ref.current, { onItemDeleted: console.log });
    eventRef.current = addHandler;
  }, []);
  return (
    <>
      <div>I am a app</div>
      <div ref={ref}></div>
      <button onClick={() => eventRef.current(18)}>Add</button>
    </>
  );
};
